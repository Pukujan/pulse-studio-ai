/**
 * Vision Filter Service
 * Uses Gemini Vision API to verify if images contain specific objects
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY || '';

let genAI: GoogleGenerativeAI | null = null;

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

/**
 * Convert image URL to base64 for Gemini Vision
 */
const imageUrlToBase64 = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        // Remove data URL prefix to get just the base64 string
        const base64Data = base64.split(',')[1];
        resolve(base64Data);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error converting image to base64:', error);
    throw error;
  }
};

/**
 * Call OpenRouter Vision API as fallback
 */
const callOpenRouterVision = async (imageUrl: string, objects: string[]): Promise<boolean> => {
  if (!OPENROUTER_API_KEY) {
    console.warn('⚠️ OpenRouter API key not found');
    return false;
  }

  const prompt = `Analyze this image and determine if ALL of the following objects are visible: ${objects.join(', ')}.

Return ONLY a JSON object with this exact format:
{
  "contains_all": true/false,
  "found": ["object1", "object2"],
  "missing": ["object3"],
  "confidence": 0.95
}

Be strict - only return true if ALL objects are clearly present in the image.`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.origin,
      },
      body: JSON.stringify({
        model: 'google/gemini-2.0-flash-exp:free',
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              { type: 'image_url', image_url: { url: imageUrl } }
            ]
          }
        ],
        temperature: 0.1,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';
    
    // Extract JSON from response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.warn('⚠️ No valid JSON in OpenRouter response');
      return false;
    }

    const result = JSON.parse(jsonMatch[0]);
    return result.contains_all === true && result.confidence >= 0.6;
  } catch (error) {
    console.error('❌ OpenRouter Vision error:', error);
    return false;
  }
};

/**
 * Verify if an image contains all specified objects using Gemini Vision
 */
export const verifyImageObjects = async (
  imageUrl: string,
  objects: string[]
): Promise<boolean> => {
  if (objects.length === 0) {
    return true; // No objects to verify
  }

  const ai = initializeGemini();
  
  if (!ai) {
    console.warn('⚠️ Gemini not initialized, trying OpenRouter fallback');
    return callOpenRouterVision(imageUrl, objects);
  }

  try {
    // Use Gemini 2.0 Flash for vision
    const model = ai.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    const prompt = `Analyze this image carefully and determine if ALL of the following objects/elements are clearly visible: ${objects.join(', ')}.

Return ONLY a JSON object with this exact format (no other text):
{
  "contains_all": true/false,
  "found": ["object1", "object2"],
  "missing": ["object3"],
  "confidence": 0.95
}

Be strict - only return "contains_all": true if ALL objects are clearly present and visible in the image.`;

    // Convert image to base64
    const base64Image = await imageUrlToBase64(imageUrl);

    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: 'image/jpeg',
          data: base64Image
        }
      },
      { text: prompt }
    ]);

    const response = await result.response;
    const text = response.text();

    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.warn('⚠️ No valid JSON in Gemini response, trying OpenRouter');
      return callOpenRouterVision(imageUrl, objects);
    }

    const parsed = JSON.parse(jsonMatch[0]);
    
    // Return true only if all objects found and confidence is high
    const isValid = parsed.contains_all === true && parsed.confidence >= 0.6;
    
    console.log(`🔍 Vision check for [${objects.join(', ')}]:`, {
      url: imageUrl.substring(0, 50) + '...',
      contains_all: parsed.contains_all,
      found: parsed.found,
      missing: parsed.missing,
      confidence: parsed.confidence,
      result: isValid ? '✅ PASS' : '❌ FAIL'
    });

    return isValid;
  } catch (error) {
    console.error('❌ Gemini Vision error:', error);
    console.log('🔄 Falling back to OpenRouter Vision...');
    return callOpenRouterVision(imageUrl, objects);
  }
};

/**
 * Batch verify multiple images with concurrency control
 */
export const batchVerifyImages = async (
  images: { url: string; id: string }[],
  objects: string[],
  concurrency: number = 3
): Promise<{ url: string; id: string; verified: boolean }[]> => {
  const results: { url: string; id: string; verified: boolean }[] = [];
  
  for (let i = 0; i < images.length; i += concurrency) {
    const batch = images.slice(i, i + concurrency);
    const batchResults = await Promise.all(
      batch.map(async (img) => ({
        url: img.url,
        id: img.id,
        verified: await verifyImageObjects(img.url, objects)
      }))
    );
    results.push(...batchResults);
    
    // Early stopping if we have enough verified images
    const verifiedCount = results.filter(r => r.verified).length;
    if (verifiedCount >= 10) {
      console.log(`✅ Found ${verifiedCount} verified images, stopping early`);
      break;
    }
  }
  
  return results;
};

/**
 * Extract objects/nouns from a natural language query
 */
export const extractObjects = (query: string): string[] => {
  const queryLower = query.toLowerCase();
  
  // Common multi-word phrases (check these first)
  const multiWordObjects = [
    'coffee shop', 'bubble tea', 'iced coffee', 'hot chocolate',
    'french fries', 'pizza slice', 'ice cream', 'wedding cake',
    'sports car', 'race car', 'mountain bike', 'hiking trail',
    'living room', 'dining room', 'bedroom', 'kitchen counter',
    'sunset beach', 'city skyline', 'forest path', 'ocean wave'
  ];
  
  // Single-word nouns
  const singleWordObjects = [
    // Animals
    'cat', 'cats', 'dog', 'dogs', 'bird', 'fish', 'horse', 'rabbit',
    'elephant', 'lion', 'tiger', 'bear', 'monkey', 'giraffe',
    // Food & Drink
    'coffee', 'tea', 'boba', 'food', 'cake', 'pizza', 'burger',
    'sushi', 'pasta', 'salad', 'dessert', 'drink', 'juice',
    // Objects
    'shoe', 'shoes', 'sneaker', 'book', 'laptop', 'phone', 'car',
    'bicycle', 'camera', 'watch', 'bag', 'backpack', 'guitar',
    // Nature
    'flower', 'flowers', 'plant', 'tree', 'forest', 'mountain',
    'ocean', 'beach', 'lake', 'river', 'cloud', 'clouds',
    'sunset', 'sunrise', 'rainbow', 'star', 'moon', 'sun',
    // People & Places
    'girl', 'boy', 'woman', 'man', 'child', 'baby', 'person',
    'building', 'house', 'city', 'street', 'park', 'garden',
    // Other
    'balloon', 'candle', 'light', 'window', 'door', 'table',
    'chair', 'sofa', 'bed', 'mirror', 'wall', 'floor'
  ];
  
  const found: string[] = [];
  const positions = new Set<number>();
  
  // Check multi-word phrases first
  for (const phrase of multiWordObjects) {
    const index = queryLower.indexOf(phrase);
    if (index !== -1) {
      const endIndex = index + phrase.length;
      let overlaps = false;
      for (let i = index; i < endIndex; i++) {
        if (positions.has(i)) {
          overlaps = true;
          break;
        }
      }
      if (!overlaps) {
        found.push(phrase);
        for (let i = index; i < endIndex; i++) {
          positions.add(i);
        }
      }
    }
  }
  
  // Check single words
  const words = queryLower.split(/\s+/);
  for (const word of words) {
    if (singleWordObjects.includes(word)) {
      const index = queryLower.indexOf(word);
      if (index !== -1 && !positions.has(index)) {
        found.push(word);
        for (let i = index; i < index + word.length; i++) {
          positions.add(i);
        }
      }
    }
  }
  
  console.log(`🎯 Extracted objects from "${query}":`, found);
  return found;
};
