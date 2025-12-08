/**
 * Mock/random data for generating sample concepts
 * Edit these arrays to customize the random generation feature
 */

export const MOCK_DATA = {
  // Different feels/moods for posts
  feels: ['cozy', 'luxury', 'bold', 'playful', 'minimal'],
  
  // Post topics/themes
  topics: [
    'new menu',
    'flash sale',
    'daily quote',
    'big announcement',
    'special offer'
  ],
  
  // Taglines/captions
  taglines: [
    'Discover something amazing',
    'Limited time only',
    'Fresh flavors await',
    'Inspiration daily',
    'Big news incoming',
    "Don't miss out",
    'Taste the difference',
    'Something special'
  ],
  
  // Company/brand names
  companyNames: [
    'TechFlow',
    'CloudCo',
    'PixelPro',
    'NovaTech',
    'SparkLabs',
    'BrightHub'
  ],
  
  // Emoji icons for logo generation
  icons: ['⚡', '🚀', '💎', '🌟', '✨', '🎯', '🔥', '💫']
};

// Helper function to get random item from array
export const getRandomItem = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// Helper function to generate random logo with icon
export const generateRandomLogo = (icon?: string): string => {
  const selectedIcon = icon || getRandomItem(MOCK_DATA.icons);
  
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 200;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    // Random background color
    ctx.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
    ctx.beginPath();
    ctx.arc(100, 100, 90, 0, 2 * Math.PI);
    ctx.fill();
    
    // Icon text
    ctx.font = 'bold 80px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(selectedIcon, 100, 100);
  }
  
  return canvas.toDataURL();
};

// Generate a complete random set of inputs
export const generateRandomInputs = () => {
  return {
    feel: getRandomItem(MOCK_DATA.feels),
    topic: getRandomItem(MOCK_DATA.topics),
    tagline: getRandomItem(MOCK_DATA.taglines),
    logo: generateRandomLogo()
  };
};