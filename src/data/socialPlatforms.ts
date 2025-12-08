/**
 * Social media platform configurations
 * Edit these to customize platform preview settings
 */

export interface PlatformConfig {
  id: string;
  name: string;
  icon: string; // Icon name from lucide-react
  aspectRatio: string; // Tailwind aspect ratio class
  width: string; // Preview width in pixels
  height: string; // Preview height in pixels
}

export const SOCIAL_PLATFORMS: PlatformConfig[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: 'Instagram',
    aspectRatio: 'aspect-square',
    width: '350px',
    height: '350px'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: 'Music', // TikTok icon not in lucide, using Music as placeholder
    aspectRatio: 'aspect-[9/16]',
    width: '350px',
    height: '622px'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: 'Facebook',
    aspectRatio: 'aspect-square',
    width: '350px',
    height: '350px'
  }
];

// Helper function to get platform by ID
export const getPlatformById = (id: string): PlatformConfig | undefined => {
  return SOCIAL_PLATFORMS.find(platform => platform.id === id);
};
