/**
 * Background images for different post feels/moods
 * Edit these URLs to customize the background images used in concepts
 */

export interface BackgroundImages {
  cozy: string;
  luxury: string;
  bold: string;
  minimal: string;
  [key: string]: string; // Allow for additional custom feels
}

export const BACKGROUND_IMAGES: BackgroundImages = {
  cozy: 'https://images.unsplash.com/photo-1698870157085-11632d2ddef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwd2FybSUyMGludGVyaW9yfGVufDF8fHx8MTc2NTAzOTE2MXww&ixlib=rb-4.1.0&q=80&w=1080',
  luxury: 'https://images.unsplash.com/photo-1758297679778-d308606a3f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlbGVnYW50JTIwZ29sZHxlbnwxfHx8fDE3NjUwMzkxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  bold: 'https://images.unsplash.com/photo-1533735380053-eb8d0759b24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2xkJTIwdmlicmFudCUyMGNvbG9yc3xlbnwxfHx8fDE3NjUwMzkxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  minimal: 'https://images.unsplash.com/photo-1628602813528-0264682cdc87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwY2xlYW4lMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzY1MDM5MTYyfDA&ixlib=rb-4.1.0&q=80&w=1080'
};

// Helper function to get background image based on feel
export const getBackgroundByFeel = (feel?: string): string => {
  if (!feel) return BACKGROUND_IMAGES.minimal;
  
  const feelLower = feel.toLowerCase();
  for (const [key, url] of Object.entries(BACKGROUND_IMAGES)) {
    if (feelLower.includes(key)) {
      return url;
    }
  }
  
  return BACKGROUND_IMAGES.minimal;
};

// Get all background images as an array
export const getAllBackgrounds = (): string[] => {
  return Object.values(BACKGROUND_IMAGES);
};
