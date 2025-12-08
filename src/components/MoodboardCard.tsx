import { PostConcept } from '../App';
import { LayoutTemplate } from 'lucide-react';

interface MoodboardCardProps {
  concept: PostConcept;
  isSelected: boolean;
  onSelect: () => void;
  userLogo?: string;
  onChangeTemplate?: (concept: PostConcept) => void;
}

export function MoodboardCard({ concept, isSelected, onSelect, userLogo, onChangeTemplate }: MoodboardCardProps) {
  const getLogoPosition = () => {
    switch (concept.template.logoPlacement) {
      case 'top-left': return 'top-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'bottom-right': return 'bottom-4 right-4';
      default: return 'top-4 left-4';
    }
  };

  const getTextPosition = () => {
    switch (concept.template.textPlacement) {
      case 'top': return 'justify-start pt-12';
      case 'center': return 'justify-center';
      case 'bottom': return 'justify-end pb-12';
      default: return 'justify-center';
    }
  };

  const getTextAlign = () => {
    const align = concept.template.textAlign || 'center';
    switch (align) {
      case 'left': return 'text-left items-start';
      case 'right': return 'text-right items-end';
      case 'center': return 'text-center items-center';
      default: return 'text-center items-center';
    }
  };

  const getTextSize = () => {
    const size = concept.template.textSize || 'large';
    switch (size) {
      case 'small': return 'text-lg';
      case 'medium': return 'text-xl';
      case 'large': return 'text-2xl';
      default: return 'text-2xl';
    }
  };

  const textColor = concept.template.textColor || '#ffffff';
  const isItalic = concept.template.isItalic || false;

  const handleClick = () => {
    onSelect();
    if (onChangeTemplate) {
      onChangeTemplate(concept);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative cursor-pointer transition-all duration-300 ${isSelected ? 'scale-[1.02]' : 'hover:scale-[1.02]'
        }`}
    >
      {/* Card Container */}
      <div className={`relative rounded-2xl overflow-hidden border-2 transition-all ${isSelected
        ? 'border-blue-500 shadow-2xl shadow-blue-500/25'
        : 'border-slate-700/50 shadow-xl hover:border-slate-600'
        }`}>
        {/* Post Preview */}
        <div className="relative aspect-square bg-slate-800">
          {/* Background Image */}
          <img
            src={concept.imageUrl}
            alt={concept.label}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('❌ Image failed to load:', concept.imageUrl);
              e.currentTarget.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1080&q=80';
            }}
            onLoad={() => console.log('✅ Image loaded successfully:', concept.imageUrl)}
          />

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: concept.template.overlayColor,
              opacity: concept.template.overlayOpacity
            }}
          />

          {/* Logo */}
          {userLogo && (
            <div className={`absolute ${getLogoPosition()} z-10`}>
              <img
                src={userLogo}
                alt="Logo"
                className="w-12 h-12 object-contain"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
              />
            </div>
          )}

          {/* Text Content */}
          <div className={`absolute inset-0 flex flex-col ${getTextPosition()} ${getTextAlign()} px-8`}>
            <h3
              className={`${getTextSize()} ${isItalic ? 'italic' : ''}`}
              style={{
                fontFamily: concept.template.fontFamily,
                color: textColor,
                textShadow: textColor === '#ffffff' || textColor === 'white' ? '0 2px 12px rgba(0,0,0,0.4)' : '0 2px 12px rgba(255,255,255,0.4)'
              }}
            >
              {concept.tagline}
            </h3>
          </div>

          {/* Hover Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-blue-600/30 to-purple-600/30 transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center gap-2">
                <LayoutTemplate className="w-5 h-5 text-white" />
                <span className="text-white">Choose Template</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Info */}
        <div className="p-4 bg-slate-800/80 backdrop-blur-sm border-t border-slate-700/50">
          <h4 className="text-white mb-1">{concept.label}</h4>
          <p className="text-sm text-slate-400">{concept.description}</p>
        </div>
      </div>

      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-10">
          <LayoutTemplate className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  );
}