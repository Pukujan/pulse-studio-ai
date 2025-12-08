/**
 * AI-Powered Image Ranking Service
 * Uses Claude Sonnet 4.5 / Gemini / OpenRouter to intelligently rank and score images
 * based on relevance, aesthetic quality, and emotional tone
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY || '';

// Toggle to enable/disable AI re-ranking (set to false to skip ranking and save API calls)
export const ENABLE_AI_RANKING = true;

let genAI: GoogleGenerativeAI | null = null;

// Initialize Gemini
const initializeGemini = () => {
  if (!GEMINI_API_KEY) {
    console.warn('⚠️ Gemini API key not found');
    return null;
  }
  if (!genAI) {
    genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  }
  return genAI;
};

// OpenRouter fallback for AI ranking
const callOpenRouterForRanking = async (prompt: string): Promise<string> => {
  if (!OPENROUTER_API_KEY) {
    throw new Error('OpenRouter API key not found');
  }

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': window.location.origin,
      'X-Title': 'Pulse Studio - Image Ranking'
    },
    body: JSON.stringify({
      model: 'anthropic/claude-3.5-sonnet', // Using Claude for ranking
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    })
  });

  if (!response.ok) {
    throw new Error(`OpenRouter API error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0]?.message?.content || '';
};

export interface ImageScore {
  id: string;
  relevance: number; // 0-10
  aesthetics: number; // 0-10
  emotion: number; // 0-10
  composition: number; // 0-10
  totalScore: number; // 0-40
  reasoning?: string;
}

/**
 * Rank and score images using AI based on user query and image descriptions
 */
export const rankImagesByAI = async (
  originalQuery: string,
  images: Array<{ id: string; description: string | null; alt_description: string | null }>,
  maxResults: number = 12
): Promise<ImageScore[]> => {
  if (!ENABLE_AI_RANKING) {
    console.log('📊 AI ranking disabled, returning images as-is');
    return images.slice(0, maxResults).map((img, index) => ({
      id: img.id,
      relevance: 10 - (index * 0.5),
      aesthetics: 8,
      emotion: 8,
      composition: 8,
      totalScore: 32,
      reasoning: 'AI ranking disabled'
    }));
  }

  const ai = initializeGemini();

  if (!ai && !OPENROUTER_API_KEY) {
    console.warn('⚠️ No AI available for ranking, returning images as-is');
    return images.slice(0, maxResults).map((img, index) => ({
      id: img.id,
      relevance: 10 - (index * 0.5),
      aesthetics: 8,
      emotion: 8,
      composition: 8,
      totalScore: 32,
      reasoning: 'No AI available'
    }));
  }

  try {
    // Prepare image data for AI analysis
    const imageData = images.slice(0, 20).map((img, index) => ({
      id: img.id,
      index,
      description: img.alt_description || img.description || 'No description'
    }));

    const prompt = `You are an expert image curator for a social media design tool. 

USER QUERY: "${originalQuery}"

IMAGES TO RANK (ID | Description):
${imageData.map(img => `${img.index}. ID:${img.id} - "${img.description}"`).join('\n')}

SCORING CRITERIA (0-10 for each):
1. RELEVANCE: How well does the image match the user's search intent?
2. AESTHETICS: Visual appeal, color harmony, professional quality
3. EMOTION: Does it evoke warmth, cuteness, or positive feelings?
4. COMPOSITION: Rule of thirds, balance, clarity, focus

RESPOND WITH JSON ARRAY ONLY (no markdown, no explanation):
[
  {
    "id": "image_id",
    "relevance": 9,
    "aesthetics": 8,
    "emotion": 7,
    "composition": 9,
    "reasoning": "brief 1-sentence explanation"
  }
]

Rank ALL ${imageData.length} images. Be critical but fair. Return ONLY the top ${maxResults} highest scoring images.`;

    let responseText = '';

    try {
      if (ai) {
        const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        responseText = response.text().trim();
        console.log('✅ Gemini ranking successful');
      }
    } catch (geminiError) {
      console.warn('⚠️ Gemini ranking failed, trying OpenRouter...', geminiError);
      responseText = await callOpenRouterForRanking(prompt);
      console.log('✅ OpenRouter (Claude) ranking successful');
    }

    // Parse AI response
    const jsonMatch = responseText.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      throw new Error('Invalid AI response format');
    }

    const rankings: ImageScore[] = JSON.parse(jsonMatch[0]).map((score: any) => ({
      ...score,
      totalScore: score.relevance + score.aesthetics + score.emotion + score.composition
    }));

    // Sort by total score descending
    rankings.sort((a, b) => b.totalScore - a.totalScore);

    console.log('🏆 AI Ranking Results:', rankings.slice(0, 5).map(r => ({
      id: r.id,
      score: r.totalScore,
      reason: r.reasoning
    })));

    return rankings.slice(0, maxResults);
  } catch (error) {
    console.error('❌ AI ranking error:', error);
    // Fallback: return images in original order with default scores
    return images.slice(0, maxResults).map((img, index) => ({
      id: img.id,
      relevance: 10 - (index * 0.5),
      aesthetics: 8,
      emotion: 8,
      composition: 8,
      totalScore: 32,
      reasoning: 'Fallback scoring due to AI error'
    }));
  }
};

/**
 * Generate semantic query variations for diverse search results
 */
export const generateQueryVariations = async (
  originalQuery: string,
  numVariations: number = 6
): Promise<string[]> => {
  const ai = initializeGemini();

  if (!ai && !OPENROUTER_API_KEY) {
    // Fallback: simple variations
    return [
      originalQuery,
      originalQuery + ' aesthetic',
      originalQuery + ' photography',
      originalQuery + ' portrait',
      originalQuery + ' lifestyle'
    ].slice(0, numVariations);
  }

  try {
    const prompt = `Generate ${numVariations} semantic search query variations for: "${originalQuery}"

Requirements:
- Each variation should mean the same thing but use different words
- Use synonyms, related terms, and natural language
- Focus on visual/photographic terms
- Each variation should be 2-5 words

Return ONLY a JSON array of strings, no explanation:
["variation 1", "variation 2", ...]`;

    let responseText = '';

    try {
      if (ai) {
        const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        responseText = response.text().trim();
      }
    } catch (geminiError) {
      console.warn('⚠️ Gemini variations failed, trying OpenRouter...', geminiError);
      responseText = await callOpenRouterForRanking(prompt);
    }

    const jsonMatch = responseText.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      throw new Error('Invalid response');
    }

    const variations: string[] = JSON.parse(jsonMatch[0]);
    console.log('🔄 Generated query variations:', variations);
    return variations;
  } catch (error) {
    console.error('❌ Query variation error:', error);
    // Fallback
    return [
      originalQuery,
      originalQuery + ' style',
      originalQuery + ' aesthetic'
    ].slice(0, numVariations);
  }
};
