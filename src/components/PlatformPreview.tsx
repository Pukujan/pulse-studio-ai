import { PostConcept } from '../App';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, ThumbsUp, Share2 } from 'lucide-react';

interface PlatformPreviewProps {
  concept: PostConcept;
  platform: 'instagram' | 'tiktok' | 'facebook';
  userLogo?: string;
}

export function PlatformPreview({ concept, platform, userLogo }: PlatformPreviewProps) {
  const getLogoPosition = () => {
    switch (concept.template.logoPlacement) {
      case 'top-left': return 'top-6 left-6';
      case 'top-right': return 'top-6 right-6';
      case 'bottom-left': return 'bottom-6 left-6';
      case 'bottom-right': return 'bottom-6 right-6';
      case 'center': return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
      default: return 'top-6 left-6';
    }
  };

  const getTextPosition = () => {
    switch (concept.template.textPlacement) {
      case 'top': return 'justify-start pt-24';
      case 'center': return 'justify-center';
      case 'bottom': return 'justify-end pb-24';
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
      case 'small': return 'text-xl';
      case 'medium': return 'text-2xl';
      case 'large': return 'text-3xl';
      default: return 'text-3xl';
    }
  };

  const textColor = concept.template.textColor || '#ffffff';
  const isItalic = concept.template.isItalic || false;

  // Instagram Preview
  if (platform === 'instagram') {
    return (
      <div className="max-w-sm mx-auto">
        {/* Phone Frame */}
        <div className="bg-slate-900 rounded-3xl p-3 shadow-2xl border border-slate-700">
          {/* Status Bar */}
          <div className="flex items-center justify-between px-4 py-2 text-xs text-white mb-2">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-white rounded-sm" />
              <div className="w-4 h-2 bg-white rounded-sm" />
              <div className="w-4 h-2 bg-white/50 rounded-sm" />
            </div>
          </div>

          {/* Instagram Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 p-0.5">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  {userLogo ? (
                    <img src={userLogo} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-slate-700" />
                  )}
                </div>
              </div>
              <span className="text-sm text-white">your_brand</span>
            </div>
            <MoreHorizontal className="w-5 h-5 text-white" />
          </div>

          {/* Post Image */}
          <div className="relative aspect-square bg-slate-800">
            <img
              src={concept.imageUrl}
              alt={concept.label}
              className="w-full h-full object-cover"
            />
            
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: concept.template.overlayColor,
                opacity: concept.template.overlayOpacity
              }}
            />

            {userLogo && (
              <div className={`absolute ${getLogoPosition()} z-10`}>
                <img
                  src={userLogo}
                  alt="Logo"
                  className="w-16 h-16 object-contain"
                  style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
                />
              </div>
            )}

            <div className={`absolute inset-0 flex flex-col ${getTextPosition()} ${getTextAlign()} px-8`}>
              <h3
                className={`${getTextSize()} ${isItalic ? 'italic' : ''}`}
                style={{ 
                  fontFamily: concept.template.fontFamily,
                  color: textColor,
                  textShadow: textColor === '#ffffff' || textColor === 'white' ? '0 2px 12px rgba(0,0,0,0.5)' : '0 2px 12px rgba(255,255,255,0.5)'
                }}
              >
                {concept.tagline}
              </h3>
            </div>
          </div>

          {/* Instagram Actions */}
          <div className="px-4 py-3 bg-slate-900">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <Heart className="w-6 h-6 text-white" />
                <MessageCircle className="w-6 h-6 text-white" />
                <Send className="w-6 h-6 text-white" />
              </div>
              <Bookmark className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-white mb-1">1,234 likes</p>
            <p className="text-sm text-white">
              <span className="font-medium">your_brand</span>{' '}
              <span className="text-slate-400">{concept.tagline}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // TikTok Preview
  if (platform === 'tiktok') {
    return (
      <div className="max-w-sm mx-auto">
        <div className="bg-black rounded-3xl p-3 shadow-2xl border border-slate-700">
          {/* Status Bar */}
          <div className="flex items-center justify-between px-4 py-2 text-xs text-white mb-2">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-white rounded-sm" />
              <div className="w-4 h-2 bg-white rounded-sm" />
              <div className="w-4 h-2 bg-white/50 rounded-sm" />
            </div>
          </div>

          {/* TikTok Video */}
          <div className="relative aspect-[9/16] bg-black rounded-2xl overflow-hidden">
            <img
              src={concept.imageUrl}
              alt={concept.label}
              className="w-full h-full object-cover"
            />
            
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: concept.template.overlayColor,
                opacity: concept.template.overlayOpacity
              }}
            />

            {userLogo && (
              <div className={`absolute ${getLogoPosition()} z-10`}>
                <img
                  src={userLogo}
                  alt="Logo"
                  className="w-16 h-16 object-contain"
                  style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
                />
              </div>
            )}

            <div className={`absolute inset-0 flex flex-col ${getTextPosition()} items-center px-8 text-center`}>
              <h3
                className="text-white text-3xl"
                style={{ fontFamily: concept.template.fontFamily, textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
              >
                {concept.tagline}
              </h3>
            </div>

            {/* TikTok UI Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <p className="text-white text-sm mb-2">@your_brand</p>
                  <p className="text-white text-xs">{concept.tagline}</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                    {userLogo ? (
                      <img src={userLogo} alt="Profile" className="w-full h-full object-cover rounded-full" />
                    ) : (
                      <div className="w-full h-full bg-slate-600 rounded-full" />
                    )}
                  </div>
                  <div className="text-center">
                    <Heart className="w-7 h-7 text-white mb-1" />
                    <p className="text-xs text-white">12.3K</p>
                  </div>
                  <div className="text-center">
                    <MessageCircle className="w-7 h-7 text-white mb-1" />
                    <p className="text-xs text-white">234</p>
                  </div>
                  <div className="text-center">
                    <Share2 className="w-7 h-7 text-white mb-1" />
                    <p className="text-xs text-white">456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Facebook Preview
  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-slate-900 rounded-3xl p-3 shadow-2xl border border-slate-700">
        {/* Status Bar */}
        <div className="flex items-center justify-between px-4 py-2 text-xs text-white mb-2">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-2 bg-white rounded-sm" />
            <div className="w-4 h-2 bg-white rounded-sm" />
            <div className="w-4 h-2 bg-white/50 rounded-sm" />
          </div>
        </div>

        {/* Facebook Post Header */}
        <div className="px-4 py-3 bg-slate-900">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
                {userLogo ? (
                  <img src={userLogo} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-slate-600" />
                )}
              </div>
              <div>
                <p className="text-sm text-white">Your Brand</p>
                <p className="text-xs text-slate-400">Just now · 🌎</p>
              </div>
            </div>
            <MoreHorizontal className="w-5 h-5 text-slate-400" />
          </div>
          <p className="text-sm text-white mb-3">{concept.tagline}</p>
        </div>

        {/* Post Image */}
        <div className="relative aspect-square bg-slate-800">
          <img
            src={concept.imageUrl}
            alt={concept.label}
            className="w-full h-full object-cover"
          />
          
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: concept.template.overlayColor,
              opacity: concept.template.overlayOpacity
            }}
          />

          {userLogo && (
            <div className={`absolute ${getLogoPosition()} z-10`}>
              <img
                src={userLogo}
                alt="Logo"
                className="w-16 h-16 object-contain"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
              />
            </div>
          )}

          <div className={`absolute inset-0 flex flex-col ${getTextPosition()} ${getTextAlign()} px-10`}>
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
        </div>

        {/* Facebook Actions */}
        <div className="px-4 py-3 bg-slate-900">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pb-3 border-b border-slate-800">
            <span>👍 ❤️ 1.2K</span>
            <span>234 comments · 56 shares</span>
          </div>
          <div className="flex items-center justify-around">
            <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <ThumbsUp className="w-5 h-5" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">Comment</span>
            </button>
            <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="text-sm">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}