/**
 * Pexels API Service
 * Handles image search and retrieval from Pexels
 */

import { verifyImageObjects, batchVerifyImages, extractObjects } from './visionFilter';

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY || '';
const PEXELS_API_BASE = 'https://api.pexels.com/v1';

// Check if API key is available
const hasApiKey = () => {
  if (!API_KEY) {
    console.warn('Pexels API key not found. Please add VITE_PEXELS_API_KEY to your .env file');
    return false;
  }
  return true;
};

export interface UnsplashImage {
  id: string;
  url: string;
  urls: {
    regular: string;
    small: string;
    thumb: string;
  };
  description: string | null;
  alt_description: string | null;
  user: {
    name: string;
    username: string;
  };
}

/**
 * Pexels API search options
 */
interface PexelsSearchOptions {
  query: string;
  per_page: number;
  orientation?: 'landscape' | 'portrait' | 'square';
  size?: 'large' | 'medium' | 'small';
  color?: string;
}

/**
 * Intelligently determine Pexels search parameters based on style/vibe
 */
const determineSearchParameters = (style?: string): Partial<PexelsSearchOptions> => {
  const params: Partial<PexelsSearchOptions> = {
    orientation: 'square' // Default for social media
  };

  if (!style) return params;

  const styleLower = style.toLowerCase();

  // Color mapping based on style
  const colorMap: Record<string, string | undefined> = {
    'pastel': undefined, // Let Pexels decide, but we'll add pastel to query
    'vibrant': undefined,
    'dark': 'black',
    'bright': 'yellow',
    'warm': 'orange',
    'cool': 'blue',
    'elegant': 'gray',
    'luxury': 'gold',
    'minimal': 'white',
    'bold': 'red',
    'peaceful': 'blue',
    'energetic': 'red',
    'cozy': 'brown'
  };

  // Check for color keywords in style
  for (const [styleKey, color] of Object.entries(colorMap)) {
    if (styleLower.includes(styleKey) && color) {
      params.color = color;
      break;
    }
  }

  // Size preference based on style
  if (styleLower.includes('detailed') || styleLower.includes('luxury') || styleLower.includes('professional')) {
    params.size = 'large'; // High quality for detailed/luxury posts
  }

  return params;
};

/**
 * Search for images on Pexels based on keywords
 */
export const searchImages = async (
  query: string,
  count: number = 10,
  options?: Partial<PexelsSearchOptions>
): Promise<UnsplashImage[]> => {
  if (!hasApiKey()) {
    console.error('❌ Pexels API key not available');
    return getFallbackImages(count);
  }

  console.log(`🚀 Starting Pexels search for: "${query}" (requesting ${count} images)`);

  try {
    // Build query params
    const params = new URLSearchParams({
      query,
      per_page: String(count),
      orientation: options?.orientation || 'square',
    });

    if (options?.size) params.append('size', options.size);
    if (options?.color) params.append('color', options.color);

    console.log('🔍 Pexels search params:', Object.fromEntries(params));

    const response = await fetch(`${PEXELS_API_BASE}/search?${params}`, {
      headers: {
        'Authorization': API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`);
    }

    const result = await response.json();

    console.log('📦 Raw Pexels API response:', result);

    if (result.photos && Array.isArray(result.photos)) {
      const mappedPhotos = result.photos.map((photo: any) => ({
        id: String(photo.id),
        url: photo.src.large,
        urls: {
          regular: photo.src.large,
          small: photo.src.medium,
          thumb: photo.src.small
        },
        description: photo.alt,
        alt_description: photo.alt,
        user: {
          name: photo.photographer,
          username: photo.photographer_url
        }
      }));

      console.log(`✅ Pexels returned ${mappedPhotos.length} images for "${query}"`);
      if (mappedPhotos.length > 0) {
        console.log('📸 Sample results:', mappedPhotos.slice(0, 3).map(p => ({
          id: p.id,
          alt: p.alt_description
        })));
      }

      return mappedPhotos;
    }
/**
 * Search for images based on multiple keywords and return diverse results
 */
export const searchImagesByKeywords = async (
  keywords: string[],
  imagesPerKeyword: number = 1
): Promise<UnsplashImage[]> => {
  if (!hasApiKey() || keywords.length === 0) {
    return getFallbackImages(keywords.length * imagesPerKeyword);
  }

  try {
    // Search for each keyword and collect results
    const searchPromises = keywords.map(keyword =>
      searchImages(keyword, imagesPerKeyword)
    );

    const results = await Promise.all(searchPromises);

    // Flatten and return unique images
    const allImages = results.flat();
    const uniqueImages = Array.from(
      new Map(allImages.map(img => [img.id, img])).values()
    );

    return uniqueImages;
  } catch (error) {
    console.error('Error searching multiple keywords:', error);
    return getFallbackImages(keywords.length * imagesPerKeyword);
  }
};    new Map(allImages.map(img => [img.id, img])).values()
    );

    return uniqueImages;
  } catch (error) {
    console.error('Error searching multiple keywords:', error);
    return getFallbackImages(keywords.length * imagesPerKeyword);
  }
};
/**
 * Get random images from Pexels (using curated photos)
 */
/**
 * Get random images from Pexels (using curated photos)
 */
export const getRandomImages = async (
  count: number = 4,
  query?: string
): Promise<UnsplashImage[]> => {
  // If query is provided, search for it, otherwise get curated
  if (query) {
    return searchImages(query, count);
  }

  if (!hasApiKey()) {
    return getFallbackImages(count);
  }

  try {
    const page = Math.floor(Math.random() * 10) + 1;
    const response = await fetch(`${PEXELS_API_BASE}/curated?per_page=${count}&page=${page}`, {
      headers: {
        'Authorization': API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`);
    }

    const result = await response.json();

    if (result.photos && Array.isArray(result.photos)) {
      return result.photos.map((photo: any) => ({
        id: String(photo.id),
        url: photo.src.large,
        urls: {
          regular: photo.src.large,
          small: photo.src.medium,
          thumb: photo.src.small
        },
        description: photo.alt,
        alt_description: photo.alt,
        user: {
          name: photo.photographer,
          username: photo.photographer_url
        }
      }));
    }

    return getFallbackImages(count);
  } catch (error) {
    console.error('Error getting random images:', error);
    return getFallbackImages(count);
  }
}; Get concept images based on feel and topic with AI-optimized search
 */
export const getConceptImages = async (
  feelOrQuery: string,
  topic: string = '',
  count: number = 10
): Promise<UnsplashImage[]> => {
  // Parse the query to extract nouns (objects) vs style words
  const queryLower = feelOrQuery.toLowerCase();

  // Common nouns that should be searched directly
  // IMPORTANT: Multi-word phrases first, then single words
  const nounKeywords = [
    'bubble tea', 'iced coffee', 'hot chocolate', 'french fries',
    'cat', 'cats', 'dog', 'dogs', 'boba', 'coffee', 'tea', 'food', 'bubble',
    'shoe', 'shoes', 'sneaker', 'flower', 'flowers', 'plant', 'tree',
    'cloud', 'clouds', 'sky', 'sunset', 'beach', 'ocean', 'mountain',
    'rainbow', 'balloon', 'cake', 'book', 'laptop', 'phone', 'car'
  ];

  // Extract nouns from query (check multi-word phrases first)
  const foundNouns: string[] = [];
  const foundPositions = new Set<number>();

  for (const noun of nounKeywords) {
    const index = queryLower.indexOf(noun);
    if (index !== -1) {
      const endIndex = index + noun.length;
      let overlaps = false;
      for (let i = index; i < endIndex; i++) {
        if (foundPositions.has(i)) {
          overlaps = true;
          break;
        }
      }
      if (!overlaps) {
        foundNouns.push(noun);
        for (let i = index; i < endIndex; i++) {
          foundPositions.add(i);
        }
      }
    }
  }

  // Extract style words (everything not part of found nouns)
  const words = queryLower.split(/\s+/);
  const nounWords = foundNouns.join(' ').split(/\s+/);
  const styleWords = words.filter(word => !nounWords.includes(word)).join(' ');

  // Determine intelligent search parameters based on style
  const searchParams = determineSearchParameters(styleWords);

  console.log('🎨 AI Analysis:', {
    nouns: foundNouns,
    style: styleWords,
    searchParams
  });

  // If we found nouns, prioritize them
  if (foundNouns.length > 0) {
    console.log('🎯 Found nouns in query:', foundNouns);

    try {
      // If only one noun, get all images of that noun with style modifiers
      if (foundNouns.length === 1) {
        const noun = foundNouns[0];

        // Build smart query: combine noun with style descriptors
        let smartQuery = noun;
        if (styleWords) {
          smartQuery = `${styleWords} ${noun}`;
        }

        console.log(`🔍 Smart search query: "${smartQuery}"`);

        // Request more images than needed for variety
        const images = await searchImages(smartQuery, Math.min(count * 3, 80), searchParams);

        console.log(`✅ Retrieved ${images.length} images for: ${smartQuery}`);
        console.log('📸 Image descriptions:', images.map(img => img.alt_description || img.description).slice(0, 5));

        // If we got enough images of the noun, return them
        if (images.length >= count) {
          return images.slice(0, count);
        }

        // If not enough, try with style modifier (styleWords already declared above)
        if (styleWords.length > 0) {
          const styledQuery = `${styleWords} ${noun}`;
          console.log(`🎨 Trying styled search: ${styledQuery}`);
          const styledImages = await searchImages(styledQuery, count, searchParams);
          if (styledImages.length >= count) {
            return styledImages.slice(0, count);
          }
          // Combine what we have
          return [...images, ...styledImages].slice(0, count);
        }

        return images;
      }

      // Multiple nouns: distribute images across them
      const imagesPerNoun = Math.max(1, Math.ceil(count / foundNouns.length));
      const nounSearches = foundNouns.map(noun => searchImages(noun, imagesPerNoun));
      const results = await Promise.all(nounSearches);

      // Flatten and get unique images
      let allImages = results.flat();

      // Remove duplicates
      const uniqueImages = Array.from(
        new Map(allImages.map(img => [img.id, img])).values()
      );

      // If we have enough images, return them
      if (uniqueImages.length >= count) {
        return uniqueImages.slice(0, count);
      }

      // If not enough, supplement with style-based search
      const styleQuery = words.filter(word => !nounKeywords.includes(word)).join(' ');
      if (styleQuery && uniqueImages.length < count) {
        const additionalImages = await searchImages(styleQuery, count - uniqueImages.length);
        return [...uniqueImages, ...additionalImages].slice(0, count);
      }

      return uniqueImages;
    } catch (error) {
      console.error('Error searching by nouns:', error);
    }
  }

  // Fallback to original behavior if no nouns found
  const searchQuery = topic ? `${feelOrQuery} ${topic}` : feelOrQuery;

  try {
    const images = await searchImages(searchQuery, count);

    // If we don't get enough results, try with just the feel/query
    if (images.length < count) {
      const additionalImages = await searchImages(feelOrQuery, count - images.length);
      return [...images, ...additionalImages];
    }

    return images;
  } catch (error) {
    console.error('Error getting concept images:', error);
    return getFallbackImages(count);
  }
};// Fallback images when API is not available (using free image URLs)
const getFallbackImages = (count: number): UnsplashImage[] => {
  const fallbackUrls = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1080&q=80',
    'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1080&q=80',
    'https://images.unsplash.com/photo-1557683316-973673baf926?w=1080&q=80',
    'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1080&q=80',
    'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=1080&q=80',
    'https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=1080&q=80'
  ];

  return fallbackUrls.slice(0, Math.min(count, fallbackUrls.length)).map((url, index) => ({
    id: `fallback-${index}`,
    url,
    urls: {
      regular: url,
      small: url,
      thumb: url
    },
    description: 'Aesthetic background',
    alt_description: 'Background image',
    user: {
      name: 'Unsplash',
      username: 'unsplash'
    }
  }));
};

/**
 * Build attribution text for Pexels images (required by Pexels API guidelines)
 */
export const getImageAttribution = (image: UnsplashImage): string => {
  return `Photo by ${image.user.name} on Pexels`;
};

/**
 * Get Pexels photo page URL (required for proper attribution)
 */
export const getUnsplashPhotoUrl = (image: UnsplashImage): string => {
  return image.user.username; // Returns photographer URL
};

/**
 * Vision-aware image search that verifies objects are present in images
 * Uses AI vision to ensure ALL requested objects appear together
 */
export const getConceptImages_VISION_AWARE = async (
  query: string,
  count: number = 10
): Promise<UnsplashImage[]> => {
  console.log(`🔍 Vision-aware search starting for: "${query}"`);
  
  // Extract objects from the query
  const requiredObjects = extractObjects(query);
  
  // If no objects found, fall back to regular search
  if (requiredObjects.length === 0) {
    console.log('ℹ️ No objects detected, using standard search');
    return getConceptImages(query, '', count);
  }
  
  console.log(`🎯 Will verify images contain: [${requiredObjects.join(', ')}]`);
  
  try {
    // Perform single Pexels search with natural query
    // Request more images than needed to account for filtering
    const searchCount = Math.min(count * 5, 80);
    const allImages = await searchImages(query, searchCount, { orientation: 'square' });
    
    if (allImages.length === 0) {
      console.warn('⚠️ No images found from Pexels search');
      return getFallbackImages(count);
    }
    
    console.log(`📦 Retrieved ${allImages.length} images from Pexels, now verifying...`);
    
    // Verify images contain all required objects
    const verificationResults = await batchVerifyImages(
      allImages.map(img => ({ url: img.url, id: img.id })),
      requiredObjects,
      3 // Concurrency limit
    );
    
    // Filter to only verified images
    const verifiedImageIds = new Set(
      verificationResults
        .filter(r => r.verified)
        .map(r => r.id)
    );
    
    const verifiedImages = allImages.filter(img => verifiedImageIds.has(img.id));
    
    console.log(`✅ Vision verification complete: ${verifiedImages.length}/${allImages.length} images passed`);
    
    // If we have enough verified images, return them
    if (verifiedImages.length >= count) {
      return verifiedImages.slice(0, count);
    }
    
    // If some verified images found but not enough, return what we have
    if (verifiedImages.length > 0) {
      console.log(`⚠️ Only found ${verifiedImages.length} verified images (needed ${count})`);
      return verifiedImages;
    }
    
    // If no verified images, fall back to original results
    console.warn('⚠️ No images passed vision verification, returning original results');
    return allImages.slice(0, count);
    
  } catch (error) {
    console.error('❌ Error in vision-aware search:', error);
    // Fall back to standard search on error
    console.log('🔄 Falling back to standard search...');
    return getConceptImages(query, '', count);
  }
};
