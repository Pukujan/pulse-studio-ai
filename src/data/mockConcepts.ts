/**
 * Mock concept generation configuration
 * Edit these to customize the initial concepts generated
 */

import { PostConcept } from '../App';

export const MOCK_CONCEPTS: Omit<PostConcept, 'imageUrl'>[] = [
  {
    id: '1',
    label: 'Concept 1',
    description: 'A modern and sleek design with a bold logo.',
    tagline: 'Innovate with us!',
    template: {
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
  },
  {
    id: '2',
    label: 'Concept 2',
    description: 'A bold and striking design with a modern logo.',
    tagline: 'Elevate your brand!',
    template: {
      textPlacement: 'top',
      logoPlacement: 'bottom-right',
      fontFamily: 'Space Grotesk',
      textSize: 'large',
      textAlign: 'left',
      isItalic: false,
      overlayColor: '#1e293b',
      overlayOpacity: 0.7,
      textColor: '#ffffff'
    }
  },
  {
    id: '3',
    label: 'Concept 3',
    description: 'A minimalist design with a simple logo.',
    tagline: 'Simplicity is key!',
    template: {
      textPlacement: 'bottom',
      logoPlacement: 'top-right',
      fontFamily: 'Inter',
      textSize: 'small',
      textAlign: 'right',
      isItalic: false,
      overlayColor: '#ffffff',
      overlayOpacity: 0.6,
      textColor: '#1e293b'
    }
  },
  {
    id: '4',
    label: 'Concept 4',
    description: 'An artistic design with a unique logo.',
    tagline: 'Artistic expression!',
    template: {
      textPlacement: 'center',
      logoPlacement: 'bottom-left',
      fontFamily: 'Playfair Display',
      textSize: 'large',
      textAlign: 'center',
      isItalic: true,
      overlayColor: '#4c1d95',
      overlayOpacity: 0.5,
      textColor: '#ffffff'
    }
  },
  {
    id: '5',
    label: 'Concept 5',
    description: 'A clean and professional design with a modern logo.',
    tagline: 'Professionalism in design!',
    template: {
      textPlacement: 'top',
      logoPlacement: 'top-right',
      fontFamily: 'Inter',
      textSize: 'medium',
      textAlign: 'center',
      isItalic: false,
      overlayColor: '#f1f5f9',
      overlayOpacity: 0.75,
      textColor: '#0f172a'
    }
  },
  {
    id: '6',
    label: 'Concept 6',
    description: 'A creative design with a playful logo.',
    tagline: 'Playful and creative!',
    template: {
      textPlacement: 'bottom',
      logoPlacement: 'bottom-right',
      fontFamily: 'Satisfy',
      textSize: 'medium',
      textAlign: 'left',
      isItalic: true,
      overlayColor: '#000000',
      overlayOpacity: 0.4,
      textColor: '#ffffff'
    }
  }
];
