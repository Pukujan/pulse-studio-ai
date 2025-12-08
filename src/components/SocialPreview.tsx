import { useState, useRef, useEffect } from 'react';
import { PostConcept } from '../App';
import { Instagram, Facebook, ChevronLeft, ArrowLeft, ArrowRight, Download } from 'lucide-react';
import { PlatformPreview } from './PlatformPreview';
import { TEMPLATES } from '../data/templates';

interface SocialPreviewProps {
  concept: PostConcept | null;
  userLogo?: string;
  onBackToGallery?: () => void;
  showArrowIndicator?: boolean;
  showPreviewFlash?: boolean;
}

export function SocialPreview({ concept, userLogo, onBackToGallery, showArrowIndicator, showPreviewFlash }: SocialPreviewProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<'instagram' | 'tiktok' | 'facebook'>('instagram');
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Sync template index when concept changes (e.g., when template is selected from modal)
  useEffect(() => {
    if (concept?.template) {
      // Find the matching template index based on template properties
      const matchingIndex = TEMPLATES.findIndex(t =>
        t.fontFamily === concept.template.fontFamily &&
        t.textPlacement === concept.template.textPlacement &&
        t.logoPlacement === concept.template.logoPlacement &&
        t.textSize === concept.template.textSize
      );

      if (matchingIndex !== -1 && matchingIndex !== currentTemplateIndex) {
        setCurrentTemplateIndex(matchingIndex);
      }
    }
  }, [concept?.template]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentTemplateIndex < TEMPLATES.length - 1) {
      setCurrentTemplateIndex(prev => prev + 1);
    }
    if (isRightSwipe && currentTemplateIndex > 0) {
      setCurrentTemplateIndex(prev => prev - 1);
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (touchStart !== null) {
      setTouchEnd(e.clientX);
    }
  };

  const onMouseUp = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentTemplateIndex < TEMPLATES.length - 1) {
      setCurrentTemplateIndex(prev => prev + 1);
    }
    if (isRightSwipe && currentTemplateIndex > 0) {
      setCurrentTemplateIndex(prev => prev - 1);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextTemplate = () => {
    if (currentTemplateIndex < TEMPLATES.length - 1) {
      setCurrentTemplateIndex(prev => prev + 1);
    }
  };

  const prevTemplate = () => {
    if (currentTemplateIndex > 0) {
      setCurrentTemplateIndex(prev => prev - 1);
    }
  };

  const handleDownload = async () => {
    if (!previewRef.current || !concept) return;

    setIsDownloading(true);

    try {
      // Dynamically import html2canvas
      const html2canvas = (await import('html2canvas')).default;

      // Find the actual post image element (the square post, not the whole phone frame)
      const postElement = previewRef.current.querySelector('.aspect-square.bg-slate-800') as HTMLElement;

      if (!postElement) {
        console.error('Post element not found');
        throw new Error('Could not find the post to download');
      }

      console.log('📸 Capturing post element for download...');

      // Clone the element to avoid modifying the original
      const clone = postElement.cloneNode(true) as HTMLElement;

      // Temporarily add to document for proper rendering
      clone.style.position = 'absolute';
      clone.style.left = '-9999px';
      document.body.appendChild(clone);

      // Convert oklch colors to rgb for html2canvas compatibility
      const convertOklchToRgb = (element: HTMLElement) => {
        const computedStyle = window.getComputedStyle(element);
        const bgColor = computedStyle.backgroundColor;
        const color = computedStyle.color;

        // Set computed RGB values directly
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)') {
          element.style.backgroundColor = bgColor;
        }
        if (color) {
          element.style.color = color;
        }

        // Recursively process children
        Array.from(element.children).forEach(child =>
          convertOklchToRgb(child as HTMLElement)
        );
      };

      convertOklchToRgb(clone);

      // Generate canvas from the cloned element
      const canvas = await html2canvas(clone, {
        backgroundColor: null,
        scale: 3, // Higher quality for social media
        logging: false,
        useCORS: true,
        allowTaint: true,
        imageTimeout: 0,
      });

      // Remove the clone
      document.body.removeChild(clone);

      console.log('✅ Canvas generated, dimensions:', canvas.width, 'x', canvas.height);

      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          const template = TEMPLATES[currentTemplateIndex];
          const fileName = `pulse-${concept.label.replace(/\s+/g, '-').toLowerCase()}-${template.fontFamily}-${Date.now()}.png`;
          link.href = url;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          console.log('✅ Download complete:', fileName);
        }
        setIsDownloading(false);
      }, 'image/png');

    } catch (error) {
      console.error('❌ Download failed:', error);
      alert('Failed to download image. Please try again.');
      setIsDownloading(false);
    }
  };

  if (!concept) {
    return (
      <div className="h-full flex items-center justify-center p-8">
        <div className="text-center max-w-xs">
          {onBackToGallery && (
            <button
              onClick={onBackToGallery}
              className="md:hidden mb-4 px-4 py-2 bg-slate-800 text-white rounded-lg flex items-center gap-2 mx-auto hover:bg-slate-700 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Gallery
            </button>
          )}
          <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4">
            <Instagram className="w-8 h-8 text-slate-600" />
          </div>
          <h3 className="text-lg text-white mb-2">No concept selected</h3>
          <p className="text-sm text-slate-400">
            Select a concept from the gallery to preview it on different platforms
          </p>
        </div>
      </div>
    );
  }

  const platforms = [
    { id: 'instagram' as 'instagram' | 'tiktok' | 'facebook', label: 'Instagram', icon: Instagram },
    { id: 'tiktok' as 'instagram' | 'tiktok' | 'facebook', label: 'TikTok', icon: null },
    { id: 'facebook' as 'instagram' | 'tiktok' | 'facebook', label: 'Facebook', icon: Facebook }
  ];

  // Create a concept with the current template applied
  const currentTemplate = TEMPLATES[currentTemplateIndex];
  const conceptWithTemplate = {
    ...concept,
    template: {
      ...concept.template,
      ...currentTemplate
    }
  };

  return (
    <div className="h-full flex flex-col relative">
      {/* Green Flash Overlay */}
      {showPreviewFlash && (
        <div
          className="absolute inset-0 bg-green-500/30 z-50 pointer-events-none transition-opacity duration-1000"
          style={{
            animation: 'flashFade 1s ease-out forwards'
          }}
        />
      )}

      {/* Header */}
      <div className="p-4 md:p-6 border-b border-slate-700/50">
        {onBackToGallery && (
          <button
            onClick={onBackToGallery}
            className="md:hidden mb-4 px-3 py-2 bg-slate-800 text-white rounded-lg flex items-center gap-2 hover:bg-slate-700 transition-colors text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Gallery
          </button>
        )}

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-white">Platform Preview</h2>
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Download PNG
              </>
            )}
          </button>
        </div>

        {/* Platform Tabs */}
        <div className="flex gap-2">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <button
                key={platform.id}
                onClick={() => setSelectedPlatform(platform.id)}
                className={`flex-1 px-3 md:px-4 py-2.5 rounded-lg text-xs md:text-sm transition-all ${selectedPlatform === platform.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-300'
                  }`}
              >
                <div className="flex items-center justify-center gap-2">
                  {Icon && <Icon className="w-4 h-4" />}
                  {!Icon && <span className="w-4 h-4 flex items-center justify-center">📱</span>}
                  <span className="hidden sm:inline">{platform.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Preview Area with Swipe */}
      <div className="flex-1 overflow-hidden p-4 md:p-6 relative" ref={previewRef}>
        {/* Template Name */}
        <div className="text-center mb-4">
          <p className="text-white text-sm">{currentTemplate.name}</p>
          <p className="text-slate-400 text-xs">Swipe to change • {currentTemplateIndex + 1} / {TEMPLATES.length}</p>
        </div>

        {/* Template Dots Indicator */}
        <div className="flex justify-center gap-1.5 mb-6">
          {TEMPLATES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTemplateIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentTemplateIndex
                ? 'bg-blue-500 w-6'
                : 'bg-slate-700 hover:bg-slate-600'
                }`}
            />
          ))}
        </div>

        {/* Swipeable Preview Container */}
        <div
          className="select-none cursor-grab active:cursor-grabbing overflow-y-auto max-h-[calc(100vh-20rem)]"
          data-preview-content
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={() => {
            setTouchStart(null);
            setTouchEnd(null);
          }}
          style={{ touchAction: 'pan-y' }}
        >
          <PlatformPreview
            concept={conceptWithTemplate}
            platform={selectedPlatform}
            userLogo={userLogo}
          />
        </div>

        {/* Arrow Indicators */}
        {showArrowIndicator && (
          <>
            {/* Desktop Only: Arrow Buttons */}
            <div className="hidden md:block absolute top-1/2 left-4 -translate-y-1/2 animate-pulse">
              <button
                onClick={prevTemplate}
                disabled={currentTemplateIndex === 0}
                className={`bg-blue-500 text-white rounded-full p-3 shadow-lg transition-all ${currentTemplateIndex === 0
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:bg-blue-600 hover:scale-110'
                  }`}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="hidden md:block absolute top-1/2 right-4 -translate-y-1/2 animate-pulse">
              <button
                onClick={nextTemplate}
                disabled={currentTemplateIndex === TEMPLATES.length - 1}
                className={`bg-blue-500 text-white rounded-full p-3 shadow-lg transition-all ${currentTemplateIndex === TEMPLATES.length - 1
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:bg-blue-600 hover:scale-110'
                  }`}
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Swipe Tooltip - Positioned above preview */}
            <div
              className="absolute top-20 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-xs md:text-sm shadow-lg z-50 whitespace-nowrap"
              style={{
                animation: 'tooltipFade 3s ease-out forwards'
              }}
            >
              <span className="hidden md:inline">← Swipe to check more templates →</span>
              <span className="md:hidden">👆 Swipe to change template</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}