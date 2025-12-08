import { PostConcept, UserInputs } from '../App';
import { MoodboardCard } from './MoodboardCard';
import { Loader2, Sparkles, Shuffle } from 'lucide-react';
import { getConceptImages } from '../services/unsplashService';
import { generateRandomTheme } from '../services/geminiService';
import { useState, useEffect } from 'react';

interface MoodboardGalleryProps {
  concepts: PostConcept[];
  selectedConcept: PostConcept | null;
  onSelectConcept: (concept: PostConcept) => void;
  isGenerating: boolean;
  userInputs: UserInputs;
  onRandomize: (concepts: PostConcept[], inputs: UserInputs) => void;
  onChangeTemplate?: (concept: PostConcept) => void;
  onUpdateTagline?: (newTagline: string) => void;
}

export function MoodboardGallery({ concepts, selectedConcept, onSelectConcept, isGenerating, userInputs, onRandomize, onChangeTemplate, onUpdateTagline }: MoodboardGalleryProps) {
  // Use concepts as provided (already have images from Unsplash)
  const conceptsWithImages = concepts;
  const [taglineInput, setTaglineInput] = useState(userInputs.tagline || '');

  // Sync tagline input when userInputs changes (e.g., new generation)
  useEffect(() => {
    setTaglineInput(userInputs.tagline || '');
  }, [userInputs.tagline]);

  const handleTaglineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTagline = e.target.value;
    setTaglineInput(newTagline);
    if (onUpdateTagline) {
      onUpdateTagline(newTagline);
    }
  };

  const handleRandomize = async () => {
    try {
      // Generate random theme using Gemini AI
      const randomTheme = await generateRandomTheme();

      // Generate random logo
      const logoDataUrl = generateRandomLogo();

      // Use existing tagline if user has written one, otherwise use random
      const finalTagline = taglineInput.trim() || randomTheme.tagline;

      const randomInputs: UserInputs = {
        feel: randomTheme.feel,
        topic: randomTheme.topic,
        tagline: finalTagline,
        logo: logoDataUrl
      };

      // Fetch fresh images from Unsplash
      const images = await getConceptImages(randomTheme.feel, randomTheme.topic, 4);

      // Generate concepts with AI-generated data and Unsplash images
      const randomConcepts: PostConcept[] = images.map((image, index) => {
        const templates = [
          {
            fontFamily: 'Poppins',
            textPlacement: 'center' as const,
            logoPlacement: 'top-left' as const,
            textSize: 'large' as const,
            textAlign: 'center' as const,
            isItalic: false,
            overlayColor: '#000000',
            overlayOpacity: 0.4,
            textColor: '#ffffff'
          },
          {
            fontFamily: 'Space Grotesk',
            textPlacement: 'top' as const,
            logoPlacement: 'bottom-right' as const,
            textSize: 'large' as const,
            textAlign: 'left' as const,
            isItalic: false,
            overlayColor: '#1e293b',
            overlayOpacity: 0.5,
            textColor: '#ffffff'
          },
          {
            fontFamily: 'Inter',
            textPlacement: 'bottom' as const,
            logoPlacement: 'top-right' as const,
            textSize: 'small' as const,
            textAlign: 'right' as const,
            isItalic: false,
            overlayColor: '#ffffff',
            overlayOpacity: 0.3,
            textColor: '#1e293b'
          },
          {
            fontFamily: 'Playfair Display',
            textPlacement: 'center' as const,
            logoPlacement: 'bottom-left' as const,
            textSize: 'large' as const,
            textAlign: 'center' as const,
            isItalic: true,
            overlayColor: '#4c1d95',
            overlayOpacity: 0.35,
            textColor: '#ffffff'
          }
        ];

        return {
          id: `${Date.now()}-${index}`,
          label: `${randomTheme.feel} ${index + 1}`,
          description: ['Classic layout', 'Bold emphasis', 'Clean & simple', 'Artistic flair'][index],
          imageUrl: image.url,
          template: templates[index % templates.length],
          tagline: finalTagline
        };
      });

      onRandomize(randomConcepts, randomInputs);
    } catch (error) {
      console.error('Error in randomize:', error);
      // Fallback will be handled by parent
    }
  };

  // Helper function for fallback logo generation
  const generateRandomLogo = (): string => {
    const icons = ['⚡', '🚀', '💎', '🌟', '✨', '🎯', '🔥', '💫'];
    const icon = icons[Math.floor(Math.random() * icons.length)];

    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
      ctx.beginPath();
      ctx.arc(100, 100, 90, 0, 2 * Math.PI);
      ctx.fill();

      ctx.font = 'bold 80px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(icon, 100, 100);
    }

    return canvas.toDataURL();
  };

  if (isGenerating) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto">
              <Loader2 className="w-10 h-10 text-white animate-spin" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-xl opacity-50 animate-pulse" />
          </div>
          <h3 className="text-xl text-white mb-2">Creating your concepts...</h3>
          <p className="text-slate-400">AI is working its magic ✨</p>
        </div>
      </div>
    );
  }

  if (conceptsWithImages.length === 0) {
    return (
      <div className="h-full flex items-center justify-center p-12">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-blue-400" />
          </div>
          <h3 className="text-xl text-white mb-2">Ready to create</h3>
          <p className="text-slate-400 mb-6">
            Chat with Pulse AI to generate your personalized social media post concepts
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleRandomize}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
            >
              <Shuffle className="w-5 h-5" />
              Randomize
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl text-white mb-2">Your AI-Generated Concepts</h2>
            <p className="text-sm md:text-base text-slate-400">Click any concept to choose a template</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <input
              type="text"
              value={taglineInput}
              onChange={handleTaglineChange}
              placeholder="Enter tagline..."
              className="flex-1 sm:w-64 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              onClick={handleRandomize}
              className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2 text-sm flex-shrink-0"
            >
              <Shuffle className="w-4 h-4" />
              <span className="hidden sm:inline">Randomize</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {conceptsWithImages.map((concept) => (
            <MoodboardCard
              key={concept.id}
              concept={concept}
              isSelected={selectedConcept?.id === concept.id}
              onSelect={() => onSelectConcept(concept)}
              userLogo={userInputs.logo}
              onChangeTemplate={onChangeTemplate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}