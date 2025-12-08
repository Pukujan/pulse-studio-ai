/**
 * Gemini AI Service
 * Handles all interactions with Google's Gemini API for intelligent chatbot responses
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY || '';

let genAI: GoogleGenerativeAI | null = null;

// OpenRouter fallback helper
const callOpenRouter = async (prompt: string): Promise<string> => {
  if (!OPENROUTER_API_KEY) {
    throw new Error('OpenRouter API key not found');
  }

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': window.location.origin,
      'X-Title': 'Pulse Studio'
    },
    body: JSON.stringify({
      model: 'tngtech/deepseek-r1t2-chimera:free',
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

// Initialize Gemini AI
const initializeGemini = () => {
  if (!API_KEY) {
    console.warn('Gemini API key not found. Please add VITE_GEMINI_API_KEY to your .env file');
    return null;
  }

  if (!genAI) {
    genAI = new GoogleGenerativeAI(API_KEY);
  }
  return genAI;
};

// System prompt to guide Gemini's behavior
const SYSTEM_PROMPT = `You are Pulse AI, a creative assistant that helps users create beautiful social media posts. Your job is to have a natural conversation to understand what they want, then help them generate it.

CONVERSATION APPROACH:
- Be friendly, conversational, and helpful
- Ask questions naturally based on what's missing
- Don't follow rigid steps - adapt to what the user provides
- Extract information intelligently from their messages

INFORMATION YOU NEED:
1. **Visual Elements/Objects** - What should appear in the images? (people, objects, scenes, etc.)
2. **Style/Mood** - What's the aesthetic? (cute, modern, bold, minimal, elegant, etc.)
3. **Purpose** (optional) - What's this for? (announcement, product launch, fun post, etc.)

HOW TO ASK:
- If they give you everything in one message (e.g., "cute girl with flowers in pastel colors"), acknowledge it and say you're ready to generate
- If they only mention style (e.g., "cute pastel"), ask: "Sounds lovely! What should be in the images? Any specific objects, people, or scenes?"
- If they only mention objects (e.g., "cats"), ask: "Great! What style or vibe are you going for?"
- Be flexible - they might describe things in any order

EXAMPLES OF GOOD RESPONSES:
User: "cute girl pastel"
You: "Love it! I can create a cute pastel post with a girl. What's this post for, or should we just make it aesthetic and fun?"

User: "bubble tea"
You: "Perfect! What style or mood should the bubble tea post have? Cute, modern, vibrant, minimal?"

User: "I want something modern and clean"
You: "Nice! What should be featured in the images? Any specific objects, people, or scenes you'd like?"

WHEN YOU HAVE ENOUGH INFO:
- Visual elements + Style = READY TO GENERATE
- Respond with excitement and confirm what you understood
- Purpose is optional - if they didn't mention it, assume it's for social media sharing

YOUR RESPONSE FORMAT:
Always respond conversationally. After understanding their request, internally note:
- SEARCH_QUERY: The exact terms to search Pexels with (combine style + objects, e.g., "cute girl pastel", "modern bubble tea")
- READY: true/false

IMPORTANT:
- Don't be robotic or follow strict steps
- Be natural and adapt to their communication style
- Extract as much as you can from each message
- When ready, be excited and confirm you understood correctly`;

export interface ChatContext {
  mode?: 'simple' | 'guided'; // New: which mode user chose
  style?: string; // Renamed from 'feel'
  purpose?: string; // Renamed from 'topic'
  tagline?: string;
  visualElements?: string; // New: visual description
  currentStep: 'welcome' | 'mode-select' | 'prompt' | 'guided-style' | 'guided-purpose' | 'guided-tagline' | 'logo' | 'generating' | 'complete';
}

export interface GeminiResponse {
  message: string;
  extractedData?: {
    style?: string; // Renamed from feel
    purpose?: string; // Renamed from topic
    tagline?: string;
    visualElements?: string; // New: visual descriptions
    nouns?: string[]; // New: key objects/nouns to include in images
    logoPreference?: 'upload' | 'skip' | 'random'; // New: logo handling
    brandName?: string; // New: brand name (generated if not provided)
  };
  nextStep?: ChatContext['currentStep'];
  shouldGenerate?: boolean;
  missingInfo?: string[];
}

/**
 * Generate a random professional brand name
 */
const generateRandomBrandName = (): string => {
  const prefixes = [
    'Nova', 'Apex', 'Pulse', 'Vibe', 'Echo', 'Flux', 'Aura', 'Zenith',
    'Prime', 'Sage', 'Luna', 'Nexus', 'Orion', 'Atlas', 'Valor', 'Phoenix',
    'Stellar', 'Quantum', 'Velocity', 'Harmony', 'Elevate', 'Inspire', 'Clarity',
    'Momentum', 'Catalyst', 'Horizon', 'Summit', 'Ascend', 'Visionary', 'Ember'
  ];

  const suffixes = [
    'Labs', 'Studio', 'Co', 'Group', 'Brands', 'Works', 'Creative', 'Design',
    'Media', 'Digital', 'Solutions', 'Agency', 'Collective', 'House', 'Hub',
    'Partners', 'Ventures', 'Innovations', 'Tech', 'Systems', 'Industries'
  ];

  const types = [
    'full', // Prefix + Suffix (e.g., "Nova Labs")
    'single', // Just Prefix (e.g., "Pulse")
    'combo' // Prefix + Prefix (e.g., "NovaFlux")
  ];

  const type = types[Math.floor(Math.random() * types.length)];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];

  if (type === 'single') {
    return prefix;
  } else if (type === 'full') {
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return `${prefix} ${suffix}`;
  } else {
    const secondPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    return prefix + secondPrefix;
  }
};

/**
 * Analyze user message and extract ALL information in one go
 */
export const analyzeUserIntent = async (
  userMessage: string,
  currentInputs: { style?: string; purpose?: string; tagline?: string; visualElements?: string; nouns?: string[]; searchQuery?: string }
): Promise<{
  style?: string;
  purpose?: string;
  tagline?: string;
  nouns?: string[];
  searchQuery?: string;
  brandName?: string;
  logoPreference?: 'upload' | 'skip' | 'random';
  shouldGenerate: boolean;
  missingInfo: string[];
  aiResponse?: string;
}> => {
  const ai = initializeGemini();

  if (!ai) {
    return {
      shouldGenerate: false,
      missingInfo: ['AI connection'],
      brandName: generateRandomBrandName()
    };
  }

  try {
    const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `You are Pulse AI. The user wants to refine their image search.

USER SAYS: "${userMessage}"

PREVIOUS SEARCH QUERY: "${currentInputs.searchQuery || 'none yet'}"

YOUR TASK:
Understand what the user wants to change/add, then CREATE A COMPLETELY NEW search query that:
- Captures the INTENT of their request, not just literal words
- Reimagines the scene in a fresh way while keeping their core idea
- Uses creative, varied language to get different image results
- Doesn't just append their words - TRANSFORM the whole query

EXAMPLES:
Previous: "cute cat and girl playing"
User: "i want more variations and a bubble tea if possible"
→ searchQuery: "adorable young woman enjoying bubble tea with playful kitten"
(NOT: "cute cat and girl playing bubble tea" ❌)

Previous: "modern coffee shop"
User: "add some plants"
→ searchQuery: "contemporary cafe interior with indoor greenery and botanical decor"
(NOT: "modern coffee shop plants" ❌)

Previous: "beach sunset"
User: "needs more colors"
→ searchQuery: "vibrant tropical beach at golden hour with colorful sky"
(NOT: "beach sunset colors" ❌)

RESPOND IN THIS EXACT JSON FORMAT:
{
  "yourResponse": "Your friendly, natural response to the user",
  "objects": "Key visual elements in natural language",
  "style": "Overall mood/aesthetic",
  "purpose": "Purpose if mentioned (optional)",
  "searchQuery": "COMPLETELY REIMAGINED natural search phrase",
  "ready": true if you have enough to search, false otherwise
}

BE CREATIVE. TRANSFORM, DON'T JUST APPEND.`;

    let text = '';
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      text = response.text().trim();
    } catch (geminiError) {
      console.warn('⚠️ Gemini failed, trying OpenRouter...', geminiError);
      text = await callOpenRouter(prompt);
      console.log('✅ OpenRouter fallback successful');
    }

    // Parse JSON
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);

      const nouns = parsed.objects ? [parsed.objects] : currentInputs.nouns || [];
      const style = parsed.style || currentInputs.style;
      const purpose = parsed.purpose || currentInputs.purpose;

      return {
        style,
        purpose,
        nouns,
        searchQuery: parsed.searchQuery || '',
        shouldGenerate: parsed.ready === true && nouns.length > 0 && style,
        missingInfo: [],
        aiResponse: parsed.yourResponse,
        brandName: generateRandomBrandName(),
        logoPreference: 'upload'
      };
    }
  } catch (error) {
    console.error('AI analysis error:', error);
  }

  // Fallback
  return {
    shouldGenerate: false,
    missingInfo: ['information'],
    brandName: generateRandomBrandName(),
    aiResponse: "I'm having trouble understanding. Could you describe what you'd like in your post?"
  };
};

/**
 * Send a message to Gemini and get a response
 */
export const sendMessageToGemini = async (
  userMessage: string,
  context: ChatContext
): Promise<GeminiResponse> => {
  const ai = initializeGemini();

  // Analyze user intent first
  const analysis = await analyzeUserIntent(userMessage, {
    style: context.style,
    purpose: context.purpose,
    tagline: context.tagline,
    visualElements: context.visualElements
  });

  if (!ai) {
    // Fallback to rule-based responses if API key is not available
    return getIntelligentFallbackResponse(userMessage, context, analysis);
  }

  try {
    const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' });

    // Build context-aware prompt
    const prompt = buildIntelligentPrompt(userMessage, context, analysis);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Merge extracted data
    const extractedData = {
      ...analysis,
      style: analysis.style || context.style,
      purpose: analysis.purpose || context.purpose,
      tagline: analysis.tagline || context.tagline
    };

    // Determine if we should generate
    const allInfoCollected = extractedData.style && extractedData.purpose;
    const shouldGenerate = Boolean(analysis.shouldGenerate || (allInfoCollected && userMessage.toLowerCase().includes('generate')));

    return {
      message: text,
      extractedData,
      shouldGenerate,
      missingInfo: analysis.missingInfo,
      nextStep: (shouldGenerate ? 'logo' : determineNextStep(context, analysis)) as ChatContext['currentStep']
    };
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return getIntelligentFallbackResponse(userMessage, context, analysis);
  }
};

/**
 * Generate a tagline based on the topic using Gemini
 */
export const generateTaglineWithGemini = async (topic: string, feel?: string): Promise<string> => {
  const ai = initializeGemini();

  if (!ai) {
    return generateFallbackTagline(topic);
  }

  try {
    const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `Generate a catchy, brief tagline (3-7 words) for a social media post about: ${topic}${feel ? ` with a ${feel} feel` : ''}.
    
Return ONLY the tagline, nothing else. No quotes, no explanation.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const tagline = response.text().trim().replace(/['"]/g, '');

    return tagline;
  } catch (error) {
    console.error('Error generating tagline:', error);
    return generateFallbackTagline(topic);
  }
};

/**
 * Generate random theme, topic, and tagline using Gemini
 */
export const generateRandomTheme = async (): Promise<{
  feel: string;
  topic: string;
  tagline: string;
}> => {
  const ai = initializeGemini();

  if (!ai) {
    return generateFallbackRandomTheme();
  }

  try {
    const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `Generate a random social media post theme with these three elements:

1. FEEL/MOOD: Choose one word (e.g., cozy, luxury, bold, playful, minimal, elegant, modern, vibrant, warm, cool, professional, artistic)
2. TOPIC: What the post is about (e.g., new menu, flash sale, product launch, quote, announcement, special offer, event)
3. TAGLINE: A catchy 3-7 word tagline matching the feel and topic

Format your response EXACTLY like this (one per line):
FEEL: [one word]
TOPIC: [short phrase]
TAGLINE: [3-7 words]

Be creative and varied!`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Parse the response
    const feelMatch = text.match(/FEEL:\s*(.+)/i);
    const topicMatch = text.match(/TOPIC:\s*(.+)/i);
    const taglineMatch = text.match(/TAGLINE:\s*(.+)/i);

    if (feelMatch && topicMatch && taglineMatch) {
      return {
        feel: feelMatch[1].trim(),
        topic: topicMatch[1].trim(),
        tagline: taglineMatch[1].trim()
      };
    }

    // If parsing fails, use fallback
    return generateFallbackRandomTheme();
  } catch (error) {
    console.error('Error generating random theme:', error);
    return generateFallbackRandomTheme();
  }
};

// Fallback random theme generation
const generateFallbackRandomTheme = (): {
  feel: string;
  topic: string;
  tagline: string;
} => {
  const feels = ['cozy', 'luxury', 'bold', 'playful', 'minimal', 'elegant', 'modern', 'vibrant'];
  const topics = ['new menu', 'flash sale', 'product launch', 'daily quote', 'announcement', 'special offer', 'exclusive event', 'limited edition'];
  const taglineTemplates = [
    'Discover something amazing',
    'Limited time only',
    'Fresh and exciting',
    'Experience the difference',
    'Your moment is now',
    'Elevate your style',
    'Made for you',
    'Simply extraordinary'
  ];

  return {
    feel: feels[Math.floor(Math.random() * feels.length)],
    topic: topics[Math.floor(Math.random() * topics.length)],
    tagline: taglineTemplates[Math.floor(Math.random() * taglineTemplates.length)]
  };
};
export const generateImageSearchKeywords = async (feel: string, topic: string): Promise<string[]> => {
  const ai = initializeGemini();

  if (!ai) {
    return generateFallbackKeywords(feel, topic);
  }

  try {
    const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `Generate 4 specific image search keywords for a ${feel} social media post about ${topic}.
    
Requirements:
- Each keyword should be 1-3 words
- Keywords should describe visual aesthetics and mood
- Return as a comma-separated list
- No numbering or extra text

Example: "warm lighting, cozy interior, soft colors, intimate atmosphere"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();

    const keywords = text.split(',').map(k => k.trim()).filter(k => k.length > 0);
    return keywords.length > 0 ? keywords : generateFallbackKeywords(feel, topic);
  } catch (error) {
    console.error('Error generating keywords:', error);
    return generateFallbackKeywords(feel, topic);
  }
};

// Helper function to build context-aware prompt
const buildIntelligentPrompt = (
  userMessage: string,
  context: ChatContext,
  analysis: Awaited<ReturnType<typeof analyzeUserIntent>>
): string => {
  let prompt = SYSTEM_PROMPT + '\n\n';

  prompt += `CURRENT STATE:\n`;
  prompt += `- Style: ${context.style || analysis.style || 'NOT PROVIDED'}\n`;
  prompt += `- Purpose: ${context.purpose || analysis.purpose || 'NOT PROVIDED'}\n`;
  prompt += `- Tagline: ${context.tagline || analysis.tagline || 'NOT PROVIDED'}\n`;
  prompt += `- Missing: ${analysis.missingInfo.join(', ') || 'nothing'}\n`;
  prompt += `- User wants to generate: ${analysis.shouldGenerate ? 'YES' : 'NO'}\n\n`;

  prompt += `User message: "${userMessage}"\n\n`;

  if (analysis.missingInfo.length > 0) {
    prompt += `Ask for ONE missing piece: ${analysis.missingInfo[0]}\n`;
  } else if (analysis.shouldGenerate) {
    prompt += `All info collected! Tell user you'll generate concepts and ask for logo upload.\n`;
  } else {
    prompt += `Confirm received info and ask what's next.\n`;
  }

  prompt += `\nRespond in 1-2 sentences maximum.`;

  return prompt;
};

// Determine next step based on current context
const determineNextStep = (
  _context: ChatContext,
  analysis: Awaited<ReturnType<typeof analyzeUserIntent>>
): 'feel' | 'topic' | 'tagline' | 'confirm' | 'complete' | 'logo' => {
  if (analysis.missingInfo.includes('feel')) return 'feel';
  if (analysis.missingInfo.includes('topic')) return 'topic';
  if (analysis.missingInfo.includes('tagline')) return 'tagline';
  if (analysis.shouldGenerate) return 'logo';
  return 'confirm';
};

// Intelligent fallback responses when API is not available
const getIntelligentFallbackResponse = (
  _userMessage: string,
  context: ChatContext,
  analysis: Awaited<ReturnType<typeof analyzeUserIntent>>
): GeminiResponse => {
  const allInputs = {
    style: context.style || analysis.style,
    purpose: context.purpose || analysis.purpose,
    tagline: context.tagline || analysis.tagline
  };

  // If user wants to generate and we have everything
  if (analysis.shouldGenerate && !analysis.missingInfo.length) {
    return {
      message: "Perfect! I have everything I need. Please upload your logo to generate your concepts! 🎨",
      extractedData: allInputs,
      shouldGenerate: true,
      missingInfo: [],
      nextStep: 'logo'
    };
  }

  // Ask for missing information
  if (analysis.missingInfo.length > 0) {
    const missing = analysis.missingInfo[0];
    const messages: Record<string, string> = {
      feel: "What feel or mood do you want? (e.g., cozy, luxury, bold, playful, minimal)",
      topic: "What is this post about? (e.g., new menu, flash sale, product launch, announcement)",
      tagline: "Do you have a tagline, or should I generate one for you?"
    };

    return {
      message: messages[missing] || "What else would you like to add?",
      extractedData: allInputs,
      shouldGenerate: false,
      missingInfo: analysis.missingInfo,
      nextStep: missing as any
    };
  }

  // All info collected
  return {
    message: "Great! I have all the information. Ready to generate your concepts! Just say 'generate' or upload your logo.",
    extractedData: allInputs,
    shouldGenerate: false,
    missingInfo: [],
    nextStep: 'logo'
  };
};// Fallback tagline generation
const generateFallbackTagline = (topic: string): string => {
  const taglines: Record<string, string[]> = {
    menu: ['Fresh flavors await', 'Taste the difference', 'New on the menu'],
    sale: ['Limited time only', "Don't miss out", 'Flash sale alert'],
    quote: ['Inspiration daily', 'Words to live by', "Today's wisdom"],
    announcement: ['Big news incoming', 'Exciting updates', 'Something new'],
    product: ['Innovation redefined', 'Quality you deserve', 'Experience excellence'],
    event: ['Join the celebration', 'Be part of it', 'Save the date']
  };

  const topicLower = topic.toLowerCase();
  for (const [key, options] of Object.entries(taglines)) {
    if (topicLower.includes(key)) {
      return options[Math.floor(Math.random() * options.length)];
    }
  }
  return 'Discover something amazing';
};

// Fallback keyword generation
const generateFallbackKeywords = (feel: string, _topic: string): string[] => {
  const feelKeywords: Record<string, string[]> = {
    cozy: ['warm lighting', 'cozy interior', 'soft textures', 'intimate atmosphere'],
    luxury: ['elegant design', 'gold accents', 'premium quality', 'sophisticated style'],
    bold: ['vibrant colors', 'strong contrast', 'dynamic composition', 'energetic mood'],
    playful: ['bright colors', 'fun elements', 'cheerful vibes', 'whimsical design'],
    minimal: ['clean aesthetic', 'white space', 'simple elegance', 'modern minimalism'],
    elegant: ['refined style', 'graceful design', 'timeless beauty', 'sophisticated'],
    modern: ['contemporary design', 'sleek lines', 'innovative style', 'cutting edge'],
    vibrant: ['bold colors', 'energetic mood', 'lively atmosphere', 'dynamic visual']
  };

  const feelLower = feel.toLowerCase();
  for (const [key, keywords] of Object.entries(feelKeywords)) {
    if (feelLower.includes(key)) {
      return keywords;
    }
  }

  return ['aesthetic', 'modern design', 'creative', 'professional'];
};

/**
 * Generate a search query variation using Gemini AI
 * @param originalQuery The original search query
 * @param usedVariations Array of previously used variations to avoid
 * @returns A new search query variation
 */
export const generateSearchVariation = async (
  originalQuery: string,
  usedVariations: string[]
): Promise<string> => {
  const ai = initializeGemini();

  if (!ai) {
    // Fallback: just return original with a modifier
    return `${originalQuery} style`;
  }

  try {
    const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `Given this image search query: "${originalQuery}"

Generate a NEW search query that:
- Means the same thing but uses completely different words
- Will find similar images with different results
- Uses natural, descriptive language for image search

Previously used variations (DO NOT repeat these):
${usedVariations.map((v, i) => `${i + 1}. ${v}`).join('\n')}

Return ONLY the new search query, nothing else.`;

    let variation = '';
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      variation = response.text().trim().replace(/["']/g, '');
    } catch (geminiError) {
      console.warn('⚠️ Gemini failed for variation, trying OpenRouter...', geminiError);
      variation = await callOpenRouter(prompt);
      variation = variation.trim().replace(/["']/g, '');
      console.log('✅ OpenRouter fallback successful for variation');
    }

    return variation;
  } catch (error) {
    console.error('Error generating variation:', error);
    // Fallback
    return `${originalQuery} alternative`;
  }
};
