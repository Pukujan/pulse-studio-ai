/**
 * All available template configurations
 * Edit these to customize template styles, fonts, colors, and layouts
 */

export interface TemplateConfig {
  id: string;
  name: string;
  textPlacement: 'top' | 'center' | 'bottom';
  logoPlacement: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  fontFamily: string;
  textSize: 'small' | 'medium' | 'large';
  textAlign: 'left' | 'center' | 'right';
  isItalic: boolean;
  overlayColor: string;
  overlayOpacity: number;
  textColor: string;
}

export const TEMPLATES: TemplateConfig[] = [
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
  },
  {
    id: 'top-bold',
    name: 'Top Bold',
    textPlacement: 'top',
    logoPlacement: 'bottom-right',
    fontFamily: 'Space Grotesk',
    textSize: 'large',
    textAlign: 'left',
    isItalic: false,
    overlayColor: '#1e293b',
    overlayOpacity: 0.7,
    textColor: '#ffffff'
  },
  {
    id: 'bottom-minimal',
    name: 'Bottom Minimal',
    textPlacement: 'bottom',
    logoPlacement: 'top-right',
    fontFamily: 'Inter',
    textSize: 'small',
    textAlign: 'right',
    isItalic: false,
    overlayColor: '#ffffff',
    overlayOpacity: 0.6,
    textColor: '#1e293b'
  },
  {
    id: 'center-artistic',
    name: 'Center Artistic',
    textPlacement: 'center',
    logoPlacement: 'bottom-left',
    fontFamily: 'Playfair Display',
    textSize: 'large',
    textAlign: 'center',
    isItalic: true,
    overlayColor: '#4c1d95',
    overlayOpacity: 0.5,
    textColor: '#ffffff'
  },
  {
    id: 'top-clean',
    name: 'Top Clean',
    textPlacement: 'top',
    logoPlacement: 'top-right',
    fontFamily: 'Inter',
    textSize: 'medium',
    textAlign: 'center',
    isItalic: false,
    overlayColor: '#f1f5f9',
    overlayOpacity: 0.75,
    textColor: '#0f172a'
  },
  {
    id: 'bottom-creative',
    name: 'Bottom Creative',
    textPlacement: 'bottom',
    logoPlacement: 'bottom-right',
    fontFamily: 'Satisfy',
    textSize: 'medium',
    textAlign: 'left',
    isItalic: true,
    overlayColor: '#000000',
    overlayOpacity: 0.4,
    textColor: '#ffffff'
  },
  {
    id: 'center-elegant',
    name: 'Center Elegant',
    textPlacement: 'center',
    logoPlacement: 'top-right',
    fontFamily: 'Playfair Display',
    textSize: 'medium',
    textAlign: 'center',
    isItalic: false,
    overlayColor: '#f8fafc',
    overlayOpacity: 0.8,
    textColor: '#0f172a'
  },
  {
    id: 'top-modern',
    name: 'Top Modern',
    textPlacement: 'top',
    logoPlacement: 'bottom-left',
    fontFamily: 'Space Grotesk',
    textSize: 'medium',
    textAlign: 'left',
    isItalic: false,
    overlayColor: '#334155',
    overlayOpacity: 0.65,
    textColor: '#ffffff'
  },
  {
    id: 'bottom-bold',
    name: 'Bottom Bold',
    textPlacement: 'bottom',
    logoPlacement: 'top-left',
    fontFamily: 'Poppins',
    textSize: 'large',
    textAlign: 'left',
    isItalic: false,
    overlayColor: '#0f172a',
    overlayOpacity: 0.6,
    textColor: '#ffffff'
  },
  {
    id: 'center-script',
    name: 'Center Script',
    textPlacement: 'center',
    logoPlacement: 'bottom-right',
    fontFamily: 'Satisfy',
    textSize: 'large',
    textAlign: 'center',
    isItalic: true,
    overlayColor: '#312e81',
    overlayOpacity: 0.55,
    textColor: '#ffffff'
  },
  {
    id: 'top-light',
    name: 'Top Light',
    textPlacement: 'top',
    logoPlacement: 'top-left',
    fontFamily: 'Inter',
    textSize: 'small',
    textAlign: 'right',
    isItalic: false,
    overlayColor: '#e0e7ff',
    overlayOpacity: 0.7,
    textColor: '#1e1b4b'
  },
  {
    id: 'bottom-elegant',
    name: 'Bottom Elegant',
    textPlacement: 'bottom',
    logoPlacement: 'bottom-left',
    fontFamily: 'Playfair Display',
    textSize: 'medium',
    textAlign: 'right',
    isItalic: true,
    overlayColor: '#fef3c7',
    overlayOpacity: 0.65,
    textColor: '#78350f'
  }
];

// Helper function to get template by ID
export const getTemplateById = (id: string): TemplateConfig | undefined => {
  return TEMPLATES.find(template => template.id === id);
};

// Helper function to convert template array to map (for backwards compatibility)
export const getTemplateMap = (): Record<string, Omit<TemplateConfig, 'id' | 'name'>> => {
  return TEMPLATES.reduce((acc, template) => {
    const { id, name, ...config } = template;
    acc[id] = config;
    return acc;
  }, {} as Record<string, Omit<TemplateConfig, 'id' | 'name'>>);
};
