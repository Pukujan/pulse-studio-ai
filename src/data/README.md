# Pulse Studio Data Configuration

This folder contains all the dynamic/configurable data for the Pulse Studio application. Edit these files to customize the app's content without touching component code.

## 📁 File Structure

### `/data/templates.ts`
**Purpose:** Define all available template layouts and styles

**What you can customize:**
- Template names and IDs
- Text placement (top/center/bottom)
- Logo positioning (corners)
- Font families (Poppins, Space Grotesk, Inter, Playfair Display, Satisfy)
- Text sizes (small/medium/large)
- Text alignment (left/center/right)
- Italic styling
- Overlay colors and opacity
- Text colors

**Example:**
```typescript
{
  id: 'center-classic',
  name: 'Center Classic',
  textPlacement: 'center',
  logoPlacement: 'top-left',
  fontFamily: 'Poppins',
  textSize: 'large',
  textAlign: 'center',
  isItalic: false,
  overlayColor: '#000000',
  overlayOpacity: 0.5,
  textColor: '#ffffff'
}
```

### `/data/backgrounds.ts`
**Purpose:** Background images for different post feels/moods

**What you can customize:**
- Image URLs for each feel (cozy, luxury, bold, minimal)
- Add new custom feels with their own images
- Change default fallback image

**Example:**
```typescript
export const BACKGROUND_IMAGES = {
  cozy: 'https://images.unsplash.com/...',
  luxury: 'https://images.unsplash.com/...',
  bold: 'https://images.unsplash.com/...',
  minimal: 'https://images.unsplash.com/...',
  // Add your own:
  vibrant: 'https://images.unsplash.com/...'
};
```

### `/data/mockData.ts`
**Purpose:** Random data generation for the "Randomize" feature

**What you can customize:**
- Feels/moods array
- Post topics
- Taglines/captions
- Company/brand names
- Emoji icons for logo generation

**Example:**
```typescript
export const MOCK_DATA = {
  feels: ['cozy', 'luxury', 'bold', 'playful', 'minimal'],
  topics: ['new menu', 'flash sale', 'daily quote'],
  taglines: ['Discover something amazing', 'Limited time only'],
  companyNames: ['TechFlow', 'CloudCo', 'PixelPro'],
  icons: ['⚡', '🚀', '💎', '🌟']
};
```

### `/data/mockConcepts.ts`
**Purpose:** Initial concepts generated when user clicks "Generate"

**What you can customize:**
- Concept labels and descriptions
- Default taglines
- Template configurations for each concept
- Number of concepts (currently 6)

**Example:**
```typescript
{
  id: '1',
  label: 'Concept 1',
  description: 'A modern and sleek design',
  tagline: 'Innovate with us!',
  template: {
    textPlacement: 'center',
    logoPlacement: 'top-left',
    // ... template config
  }
}
```

### `/data/socialPlatforms.ts`
**Purpose:** Social media platform configurations for previews

**What you can customize:**
- Platform names and IDs
- Icon names (from lucide-react)
- Aspect ratios
- Preview dimensions

**Example:**
```typescript
{
  id: 'instagram',
  name: 'Instagram',
  icon: 'Instagram',
  aspectRatio: 'aspect-square',
  width: '350px',
  height: '350px'
}
```

## 🎨 Common Customization Tasks

### Adding a New Template
1. Open `/data/templates.ts`
2. Add a new object to the `TEMPLATES` array
3. Give it a unique `id` and configure all properties
4. Save and refresh - it will appear in the template selector!

### Adding a New Feel/Mood
1. Open `/data/backgrounds.ts`
2. Add a new key-value pair with the feel name and image URL
3. Open `/data/mockData.ts`
4. Add the feel name to the `feels` array
5. Save and the new feel will be available!

### Changing Default Concepts
1. Open `/data/mockConcepts.ts`
2. Modify the existing concepts or add new ones
3. Update labels, descriptions, taglines as needed
4. Save and the new defaults will appear!

### Adding Custom Fonts
1. Open `/data/templates.ts`
2. Change the `fontFamily` property to any Google Font or system font
3. Make sure the font is loaded in your project
4. Save and the new font will be used!

## 🔧 Helper Functions Available

### Templates
- `getTemplateById(id)` - Get a template by its ID
- `getTemplateMap()` - Get all templates as a map object

### Backgrounds
- `getBackgroundByFeel(feel)` - Get background image for a feel
- `getAllBackgrounds()` - Get all background images as array

### Mock Data
- `getRandomItem(array)` - Get random item from any array
- `generateRandomLogo(icon?)` - Generate a random logo with icon
- `generateRandomInputs()` - Generate complete random user inputs

### Social Platforms
- `getPlatformById(id)` - Get platform config by ID

## 📝 Notes

- All data files use TypeScript for type safety
- Component logic is separated from data configuration
- Changes to these files don't require touching component code
- The app will automatically use updated data on refresh
- Image URLs should be publicly accessible
- Colors use hex format (#000000)
- Opacities are between 0 and 1 (0.5 = 50%)

## 🚀 Quick Start

To fully customize Pulse Studio:

1. **Edit templates** → `/data/templates.ts`
2. **Change images** → `/data/backgrounds.ts`
3. **Update randomizer** → `/data/mockData.ts`
4. **Modify defaults** → `/data/mockConcepts.ts`
5. **Adjust platforms** → `/data/socialPlatforms.ts`

No component code changes needed! 🎉
