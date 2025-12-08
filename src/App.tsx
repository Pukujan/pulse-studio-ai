import { useState } from 'react';
import { ChatPanel } from './components/ChatPanel';
import { MoodboardGallery } from './components/MoodboardGallery';
import { SocialPreview } from './components/SocialPreview';
import { TemplateModal } from './components/TemplateModal';
import { getTemplateMap } from './data/templates';
import { getConceptImages } from './services/unsplashService';
import { generateSearchVariation } from './services/geminiService';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

export interface PostConcept {
  id: string;
  label: string;
  description: string;
  tagline: string;
  imageUrl: string;
  template: {
    textPlacement: 'top' | 'center' | 'bottom';
    logoPlacement: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    fontFamily: string;
    textSize: 'small' | 'medium' | 'large';
    textAlign: 'left' | 'center' | 'right';
    isItalic: boolean;
    overlayColor: string;
    overlayOpacity: number;
    textColor: string;
  };
}

export interface UserInputs {
  feel?: string;
  topic?: string;
  tagline?: string;
  logo?: string;
  nouns?: string[];
  brandName?: string;
  searchQuery?: string; // AI-generated natural language search query
}

function App() {
  const [selectedConcept, setSelectedConcept] = useState<PostConcept | null>(null);
  const [concepts, setConcepts] = useState<PostConcept[]>([]);
  const [userInputs, setUserInputs] = useState<UserInputs>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [isChatExpanded, setIsChatExpanded] = useState(true);
  const [originalSearchQuery, setOriginalSearchQuery] = useState<string>('');
  const [usedVariations, setUsedVariations] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'gallery' | 'preview'>('gallery');
  const [allFetchedImages, setAllFetchedImages] = useState<any[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [modalConcept, setModalConcept] = useState<PostConcept | null>(null);
  const [showArrowIndicator, setShowArrowIndicator] = useState(false);
  const [showPreviewFlash, setShowPreviewFlash] = useState(false);

  const handleSelectTemplate = (templateId: string) => {
    if (!modalConcept) return;

    const templateMap = getTemplateMap();
    const newTemplate = templateMap[templateId];
    const updatedConcept = {
      ...modalConcept,
      template: {
        ...modalConcept.template,
        ...newTemplate
      }
    };

    // Update the concept in the concepts array
    setConcepts(prev => prev.map(c => c.id === updatedConcept.id ? updatedConcept : c));
    setSelectedConcept(updatedConcept);
    setActiveTab('preview');
    setShowTemplateModal(false);
    setIsChatExpanded(false); // Collapse chat when template is selected

    // Show green flash effect for 1 second
    setShowPreviewFlash(true);
    setTimeout(() => {
      setShowPreviewFlash(false);
    }, 1000);

    // Show arrow indicator for 3 seconds (mobile and desktop)
    setShowArrowIndicator(true);
    setTimeout(() => {
      setShowArrowIndicator(false);
    }, 3000);
  };

  const handleUpdateTagline = (newTagline: string) => {
    // Update user inputs
    setUserInputs(prev => ({ ...prev, tagline: newTagline }));

    // Update all concepts with the new tagline
    setConcepts(prev => prev.map(concept => ({
      ...concept,
      tagline: newTagline
    })));

    // Update selected concept if any
    if (selectedConcept) {
      setSelectedConcept(prev => prev ? { ...prev, tagline: newTagline } : null);
    }
  };

  const handleGenerate = async (inputs: UserInputs, isRetry: boolean = false) => {
    setUserInputs(inputs);
    setIsGenerating(true);

    try {
      // Use AI-generated search query if available (most intelligent)
      let searchQuery = inputs.searchQuery;

      // Fallback to building from inputs if no AI query
      if (!searchQuery) {
        if (inputs.nouns && inputs.nouns.length > 0) {
          // Put style before nouns (e.g., "cute cats")
          searchQuery = inputs.feel
            ? `${inputs.feel} ${inputs.nouns.join(' ')}`
            : inputs.nouns.join(' ');
        } else {
          // Last resort fallback
          searchQuery = `${inputs.feel || 'minimal'} ${inputs.topic || 'social media'}`;
        }
      }

      // Store original query on first generation, reset variations
      if (!isRetry) {
        setOriginalSearchQuery(searchQuery);
        setUsedVariations([searchQuery]);
      }

      console.log('🎨 App.tsx generating with query:', searchQuery);

      // Fetch 10 images from Pexels based on user inputs
      const images = await getConceptImages(searchQuery, '', 10);

      console.log('🖼️ Fetched images from Unsplash:', images);

      // Cache all fetched images for pagination
      if (!isRetry) {
        setAllFetchedImages(images);
        setCurrentImageIndex(0);
      }

      // Generate concepts with fetched images
      const templates = [
        {
          fontFamily: 'Poppins',
          textPlacement: 'center' as const,
          logoPlacement: 'top-left' as const,
          textSize: 'large' as const,
          textAlign: 'center' as const,
          isItalic: false,
          overlayColor: '#000000',
          overlayOpacity: 0.25,
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
          overlayOpacity: 0.3,
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
          overlayOpacity: 0.2,
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
          overlayOpacity: 0.25,
          textColor: '#ffffff'
        }
      ];

      // Use first 4 images from the fetched batch
      const imagesToUse = images.slice(0, 4);

      const newConcepts: PostConcept[] = imagesToUse.map((image, index) => ({
        id: `${Date.now()}-${index}`,
        label: `${inputs.feel || 'Concept'} ${index + 1}`,
        description: ['Classic layout', 'Bold emphasis', 'Clean & simple', 'Artistic flair'][index],
        imageUrl: image.url,
        template: templates[index % templates.length],
        tagline: inputs.tagline || ''
      }));

      setConcepts(newConcepts);
      setSelectedConcept(newConcepts[0]);
    } catch (error) {
      console.error('Error generating concepts:', error);
      // Fallback to empty array if there's an error
      setConcepts([]);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleTryAgain = async () => {
    if (!originalSearchQuery || !userInputs) return;

    setIsGenerating(true);

    try {
      const nextIndex = currentImageIndex + 4;

      // Check if we have more images in cache
      if (nextIndex < allFetchedImages.length) {
        console.log('🔄 Showing next 4 results from cache (', nextIndex, 'to', nextIndex + 4, ')');

        // Use next 4 images from cached results
        const nextImages = allFetchedImages.slice(nextIndex, nextIndex + 4);
        setCurrentImageIndex(nextIndex);

        // Generate concepts with next batch of images
        const templates = [
          {
            fontFamily: 'Poppins',
            textPlacement: 'center' as const,
            logoPlacement: 'top-left' as const,
            textSize: 'large' as const,
            textAlign: 'center' as const,
            isItalic: false,
            overlayColor: '#000000',
            overlayOpacity: 0.25,
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
            overlayOpacity: 0.3,
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
            overlayOpacity: 0.2,
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
            overlayOpacity: 0.25,
            textColor: '#ffffff'
          }
        ];

        const newConcepts: PostConcept[] = nextImages.map((image, index) => ({
          id: `${Date.now()}-${index}`,
          label: `${userInputs.feel || 'Concept'} ${index + 1}`,
          description: ['Classic layout', 'Bold emphasis', 'Clean & simple', 'Artistic flair'][index],
          imageUrl: image.url,
          template: templates[index % templates.length],
          tagline: userInputs.tagline || ''
        }));

        setConcepts(newConcepts);
        setSelectedConcept(newConcepts[0]);
        setIsGenerating(false);
      } else {
        // All cached results exhausted, generate new variation
        console.log('🔄 All results cycled, generating new variation with AI...');

        const newVariation = await generateSearchVariation(originalSearchQuery, usedVariations);
        console.log('✨ Generated variation:', newVariation);

        setUsedVariations([...usedVariations, newVariation]);

        // Create new inputs with varied query
        const variedInputs = {
          ...userInputs,
          searchQuery: newVariation
        };

        // Regenerate with new variation (will fetch new 10 images)
        await handleGenerate(variedInputs, true);
      }
    } catch (error) {
      console.error('Error in handleTryAgain:', error);
      setIsGenerating(false);
    }
  };

  const handleRandomize = async (currentConcepts: PostConcept[], inputs: UserInputs) => {
    setUserInputs(inputs);
    setIsGenerating(true);

    try {
      // Fetch new images for randomized concepts
      const images = await getConceptImages(
        inputs.feel || 'minimal',
        inputs.topic || 'social media',
        4
      );

      const randomizedConcepts = images.map((image, index) => ({
        ...currentConcepts[index],
        id: `${Date.now()}-${index}`,
        imageUrl: image.url
      }));

      setConcepts(randomizedConcepts);
      if (randomizedConcepts.length > 0) {
        setSelectedConcept(randomizedConcepts[0]);
      }
    } catch (error) {
      console.error('Error randomizing concepts:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSelectConcept = (concept: PostConcept) => {
    setSelectedConcept(concept);
    setActiveTab('preview');
  };

  const handleChangeTemplate = (concept: PostConcept) => {
    setModalConcept(concept);
    setShowTemplateModal(true);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-sm">
        <div className="px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white">✨</span>
            </div>
            <h1 className="text-xl text-white">Pulse Studio</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Chat Panel */}
        <ChatPanel
          onGenerate={handleGenerate}
          onTryAgain={handleTryAgain}
          isGenerating={isGenerating}
          isExpanded={isChatExpanded}
          onToggleExpand={() => setIsChatExpanded(!isChatExpanded)}
          userInputs={userInputs}
        />

        {/* Center: Gallery - Only show on mobile when gallery tab is active */}
        <div className={`w-full md:w-3/5 overflow-hidden ${activeTab === 'preview' ? 'hidden md:block' : 'block'
          }`}>
          <MoodboardGallery
            concepts={concepts}
            selectedConcept={selectedConcept}
            onSelectConcept={handleSelectConcept}
            isGenerating={isGenerating}
            userInputs={userInputs}
            onRandomize={handleRandomize}
            onChangeTemplate={handleChangeTemplate}
            onUpdateTagline={handleUpdateTagline}
          />
        </div>

        {/* Right: Preview Panel - Hidden on mobile when gallery tab is active */}
        <div className={`w-full md:w-2/5 border-l border-slate-700/50 bg-slate-900/50 backdrop-blur-sm ${activeTab === 'gallery' ? 'hidden md:block' : 'block'
          }`}>
          <SocialPreview
            concept={selectedConcept}
            userLogo={userInputs.logo}
            onBackToGallery={() => setActiveTab('gallery')}
            showArrowIndicator={showArrowIndicator}
            showPreviewFlash={showPreviewFlash}
          />
        </div>
      </div>

      {/* Template Modal */}
      {showTemplateModal && modalConcept && (
        <TemplateModal
          concept={modalConcept}
          onClose={() => setShowTemplateModal(false)}
          onSelectTemplate={handleSelectTemplate}
        />
      )}
    </div>
  );
}

export default App;