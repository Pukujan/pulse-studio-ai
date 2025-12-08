import { X } from 'lucide-react';
import { PostConcept } from '../App';
import { TEMPLATES } from '../data/templates';

interface TemplateModalProps {
  concept: PostConcept;
  onClose: () => void;
  onSelectTemplate: (templateId: string) => void;
}

export function TemplateModal({ concept, onClose, onSelectTemplate }: TemplateModalProps) {
  const getLogoPosition = (placement: string) => {
    switch (placement) {
      case 'top-left': return 'top-2 left-2';
      case 'top-right': return 'top-2 right-2';
      case 'bottom-left': return 'bottom-2 left-2';
      case 'bottom-right': return 'bottom-2 right-2';
      default: return 'top-2 left-2';
    }
  };

  const getTextPosition = (placement: string) => {
    switch (placement) {
      case 'top': return 'justify-start pt-10';
      case 'center': return 'justify-center';
      case 'bottom': return 'justify-end pb-10';
      default: return 'justify-center';
    }
  };

  const getTextAlign = (align: string) => {
    switch (align) {
      case 'left': return 'text-left items-start';
      case 'right': return 'text-right items-end';
      case 'center': return 'text-center items-center';
      default: return 'text-center items-center';
    }
  };

  const getTextSize = (size: string) => {
    switch (size) {
      case 'small': return 'text-[10px] md:text-xs';
      case 'medium': return 'text-xs md:text-sm';
      case 'large': return 'text-sm md:text-base';
      default: return 'text-xs md:text-sm';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-700/50">
          <div>
            <h2 className="text-lg md:text-xl text-white mb-1">Choose Layout Template</h2>
            <p className="text-sm text-slate-400">{concept.label}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Templates Grid */}
        <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {TEMPLATES.map((template) => (
              <button
                key={template.id}
                onClick={() => onSelectTemplate(template.id)}
                className="group relative aspect-square rounded-lg overflow-hidden border-2 border-slate-700 hover:border-blue-500 transition-all hover:scale-105"
              >
                {/* Mini Preview */}
                <div className="relative w-full h-full">
                  <img
                    src={concept.imageUrl}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                  
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundColor: template.overlayColor,
                      opacity: template.overlayOpacity
                    }}
                  />

                  {concept.logo && (
                    <div className={`absolute ${getLogoPosition(template.logoPlacement)} z-10`}>
                      <img
                        src={concept.logo}
                        alt="Logo"
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                        style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
                      />
                    </div>
                  )}

                  <div className={`absolute inset-0 flex flex-col ${getTextPosition(template.textPlacement)} ${getTextAlign(template.textAlign)} px-4`}>
                    <p
                      className={`${getTextSize(template.textSize)} ${template.isItalic ? 'italic' : ''}`}
                      style={{ 
                        fontFamily: template.fontFamily,
                        color: template.textColor,
                        textShadow: template.textColor === '#ffffff' ? '0 2px 12px rgba(0,0,0,0.4)' : '0 2px 12px rgba(255,255,255,0.4)'
                      }}
                    >
                      {concept.tagline}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <p className="text-white text-xs">Select</p>
                    </div>
                  </div>
                </div>

                {/* Template Name */}
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-xs text-center">{template.name}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-4 md:p-6 border-t border-slate-700/50">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}