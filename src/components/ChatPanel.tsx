import { useState, useEffect, useRef } from 'react';
import { Send, Sparkles, MessageCircle, Minimize2, RefreshCw, Plus } from 'lucide-react';
import {
  collection,
  addDoc,
  query,
  getDocs,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db, getAnonymousUser } from '../firebase';
import { ChatBubble } from './ChatBubble';
import { LogoUpload } from './LogoUpload';
import { UserInputs } from '../App';
import { analyzeUserIntent } from '../services/geminiService';
import { getConceptImages } from '../services/unsplashService';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

// LocalStorage key
const CHAT_STORAGE_KEY = 'pulse-chat-history';

interface ChatPanelProps {
  onGenerate: (inputs: UserInputs) => void;
  onTryAgain: () => void;
  isGenerating: boolean;
  isExpanded: boolean;
  onToggleExpand: () => void;
  userInputs: UserInputs;
}

type ConversationStep = 'welcome' | 'mode-select' | 'prompt' | 'guided-style' | 'guided-purpose' | 'guided-tagline' | 'logo' | 'generating' | 'complete';

export function ChatPanel({ onGenerate, onTryAgain, isGenerating: _isGenerating, isExpanded, onToggleExpand, userInputs: _userInputs }: ChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentStep, setCurrentStep] = useState<ConversationStep>('welcome');
  const [inputValue, setInputValue] = useState('');
  const [localUserInputs, setLocalUserInputs] = useState<UserInputs>({});
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const [isAIThinking, setIsAIThinking] = useState(false);
  const [mode, setMode] = useState<'simple' | 'guided' | null>(null);
  const [currentImageQuery, setCurrentImageQuery] = useState<string>('');
  const [userId, setUserId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // --- Dual Storage Integration (Firebase + localStorage) ---
  useEffect(() => {
    const setupUserAndChat = async () => {
      try {
        // Try Firebase first
        const user = await getAnonymousUser();
        if (user) {
          setUserId(user.uid);
          await clearChatHistory(user.uid);
          console.log('✅ Using Firebase for chat history');
        }
      } catch (error) {
        console.warn('⚠️ Firebase unavailable, using localStorage fallback:', error);
        setUserId('local-user'); // Use local ID for localStorage
      } finally {
        // Clear localStorage on page load
        localStorage.removeItem(CHAT_STORAGE_KEY);

        // Always show welcome message
        addAIMessage("Hi! I'm Pulse AI ✨\n\nWhat type of post would you like to make today?");
        setCurrentStep('mode-select');
      }
    };
    setupUserAndChat();
  }, []);

  const clearChatHistory = async (uid: string) => {
    try {
      const messagesRef = collection(db, 'chats', uid, 'messages');
      const q = query(messagesRef);
      const querySnapshot = await getDocs(q);

      // Delete all messages
      const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
      await Promise.all(deletePromises);

      console.log('🗑️ Cleared previous chat history');
    } catch (error) {
      // Silently fail if Firebase is blocked - app continues to work
      console.warn('⚠️ Could not clear chat history (Firebase blocked):', error);
    }
  };
  // --- End Firebase Integration ---

  // Generate a random logo using a placeholder service
  const generateRandomLogo = (): string => {
    const colors = ['FF6B6B', '4ECDC4', 'FFE66D', '95E1D3', 'F38181', 'AA96DA', 'FCBAD3', '74B9FF'];
    const styles = ['identicon', 'bottts', 'avataaars', 'shapes', 'pixel-art'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    const seed = Date.now().toString();

    // Using DiceBear API for random avatars
    return `https://api.dicebear.com/7.x/${randomStyle}/svg?seed=${seed}&backgroundColor=${randomColor}`;
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentStep('welcome');
    setLocalUserInputs({});
    setUploadedLogo(null);
    setMode(null);

    setTimeout(() => {
      addAIMessage("Hi! I'm Pulse AI ✨\n\nWhat type of post would you like to make today?");
      setCurrentStep('mode-select');
    }, 300);
  };

  const addAIMessage = (text: string) => {
    const message: ChatMessage = {
      id: Date.now().toString(),
      sender: 'ai',
      text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
    saveMessageToDb(message);
  };

  const addUserMessage = (text: string) => {
    const message: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
    saveMessageToDb(message);
  };

  const saveMessageToDb = async (message: ChatMessage) => {
    if (!userId) return;

    // Try Firebase first
    if (userId !== 'local-user') {
      try {
        const messagesRef = collection(db, 'chats', userId, 'messages');
        await addDoc(messagesRef, {
          sender: message.sender,
          text: message.text,
          timestamp: serverTimestamp(),
        });
        console.log('💾 Saved to Firebase');
        return;
      } catch (error) {
        console.warn('⚠️ Firebase save failed, falling back to localStorage:', error);
      }
    }

    // Fallback to localStorage
    try {
      const stored = localStorage.getItem(CHAT_STORAGE_KEY);
      const history: ChatMessage[] = stored ? JSON.parse(stored) : [];
      history.push({
        ...message,
        timestamp: new Date(message.timestamp) // Ensure Date object
      });
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(history));
      console.log('💾 Saved to localStorage');
    } catch (error) {
      console.error('❌ Failed to save to localStorage:', error);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isAIThinking) return;

    const userMessage = inputValue.trim();
    addUserMessage(userMessage);
    setInputValue('');
    setIsAIThinking(true);

    try {
      // 1. Combine existing inputs with the new message for a complete picture
      const combinedContext = {
        ...localUserInputs,
        feel: localUserInputs.feel,
        topic: localUserInputs.topic,
        tagline: localUserInputs.tagline,
        searchQuery: localUserInputs.searchQuery,
        nouns: localUserInputs.nouns
      };

      const analysis = await analyzeUserIntent(userMessage, combinedContext);

      // Use AI's response if available
      if (analysis.aiResponse) {
        addAIMessage(analysis.aiResponse);
      }

      // Update inputs with what AI extracted
      const updatedInputs: UserInputs = {
        feel: analysis.style || localUserInputs.feel,
        topic: analysis.purpose || localUserInputs.topic,
        tagline: analysis.tagline || localUserInputs.tagline,
        logo: localUserInputs.logo,
        nouns: analysis.nouns && analysis.nouns.length > 0 ? analysis.nouns : localUserInputs.nouns,
        brandName: analysis.brandName || localUserInputs.brandName,
        searchQuery: analysis.searchQuery // Include AI-generated natural language query
      };

      setLocalUserInputs(updatedInputs);

      // Use AI's search query if provided
      const imageSearchQuery = analysis.searchQuery || '';

      setCurrentImageQuery(imageSearchQuery);

      // If AI says we're ready to generate
      if (analysis.shouldGenerate && imageSearchQuery) {
        // If already complete, regenerate immediately with new query
        if (currentStep === 'complete') {
          setTimeout(async () => {
            addAIMessage("✨ Regenerating with your changes...");
            await generateConcepts(updatedInputs, imageSearchQuery);
            setIsAIThinking(false);
          }, 800);
        } else {
          // First time, go to logo step
          setTimeout(async () => {
            addAIMessage("Perfect! Generating your posts now... ✨");
            setCurrentStep('logo');
            setIsAIThinking(false);
          }, 800);
        }
      } else {
        setIsAIThinking(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setIsAIThinking(false);
      addAIMessage("I'm having trouble understanding. Could you please try rephrasing?");
    }
  };

  const handleModeSelect = (selectedMode: 'simple' | 'guided') => {
    setMode(selectedMode);

    if (selectedMode === 'simple') {
      addAIMessage("Great! Just tell me what you'd like. For example:\n\n\"cute girl with flowers in pastel colors\"\n\nI'll figure out the rest! ✨");
      setCurrentStep('prompt');
    } else {
      addAIMessage("Perfect! Let's go step by step.\n\nWhat should be in your images? (people, objects, scenes, etc.)");
      setCurrentStep('guided-style');
    }
  };

  const handleLogoUpload = async (file: File) => {
    const reader = new FileReader();
    reader.onloadend = async () => {
      const logoUrl = reader.result as string;
      setUploadedLogo(logoUrl);
      const finalInputs = { ...localUserInputs, logo: logoUrl };
      setLocalUserInputs(finalInputs);

      addAIMessage("Perfect! Generating your social media post concepts now... ✨");
      setCurrentStep('generating');

      // Generate concepts with AI-powered image search
      await generateConcepts(finalInputs, currentImageQuery);
    };
    reader.readAsDataURL(file);
  };

  const handleRandomLogo = async () => {
    const randomLogo = generateRandomLogo();
    setUploadedLogo(randomLogo);
    const finalInputs = { ...localUserInputs, logo: randomLogo };
    setLocalUserInputs(finalInputs);

    addAIMessage("Random logo generated! Creating your posts now... ✨");
    setCurrentStep('generating');

    await generateConcepts(finalInputs, currentImageQuery);
  };

  const generateConcepts = async (inputs: UserInputs, imageQuery?: string) => {
    try {
      // Use provided image query or build from inputs
      const searchQuery = imageQuery || `${inputs.feel || 'modern'} ${inputs.topic || 'social media'} aesthetic`;

      console.log('🎨 Generating concepts with query:', searchQuery);

      // Trigger image search on Pexels (actual concepts generated in App.tsx)
      await getConceptImages(searchQuery, '', 4);

      // Pass concepts to parent component
      onGenerate(inputs);
      addAIMessage("🎉 I've generated 4 unique concepts for you! Check them out in the gallery and click any to preview on different platforms.");
      setCurrentStep('complete');

    } catch (error) {
      console.error('Error generating concepts:', error);
      addAIMessage("I've created concepts for you! Check them out in the gallery.");
      onGenerate(inputs);
      setCurrentStep('complete');
    }
  };

  const getStepLabel = (): string => {
    switch (currentStep) {
      case 'mode-select': return 'Choose Mode';
      case 'prompt': return 'Describe Your Post';
      case 'guided-style': return 'Step 1: Style';
      case 'guided-purpose': return 'Step 2: Purpose';
      case 'guided-tagline': return 'Step 3: Tagline';
      case 'logo': return 'Upload Logo';
      case 'generating': return 'Generating...';
      case 'complete': return 'Complete ✓';
      default: return '';
    }
  };

  return (
    <>
      {/* Chat Widget Container */}
      <div className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 transition-all duration-300 ${isExpanded ? 'w-[calc(100vw-2rem)] md:w-[420px] h-[70vh] md:h-[600px]' : 'w-auto h-auto'
        }`}>
        {isExpanded ? (
          // Expanded Chat Panel
          <div className="h-full flex flex-col bg-slate-900 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden">
            {/* Header */}
            <div className="p-3 md:p-4 border-b border-slate-700/50 bg-slate-800/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <h1 className="text-white text-sm md:text-base">Pulse Studio</h1>
                    <p className="text-xs text-slate-400">AI Post Maker</p>
                  </div>
                </div>
                <button
                  onClick={onToggleExpand}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Minimize2 className="w-4 h-4 md:w-5 md:h-5 text-slate-400" />
                </button>
              </div>
              {currentStep !== 'welcome' && (
                <div className="mt-2 px-3 py-1.5 bg-slate-800/50 rounded-full inline-block">
                  <p className="text-xs text-slate-300">{getStepLabel()}</p>
                </div>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
              {messages.map(message => (
                <ChatBubble key={message.id} message={message} />
              ))}

              {/* Mode Selection Buttons */}
              {currentStep === 'mode-select' && !isAIThinking && (
                <div className="flex flex-col gap-3 mt-4">
                  <button
                    onClick={() => handleModeSelect('simple')}
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl text-white font-medium transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    Complete Prompt (Recommended)
                  </button>
                  <button
                    onClick={() => handleModeSelect('guided')}
                    className="w-full px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl text-white font-medium transition-all hover:scale-[1.02]"
                  >
                    Step by Step Guide
                  </button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Logo Upload Area */}
            {currentStep === 'logo' && (
              <div className="px-3 md:px-4 pb-3 md:pb-4">
                <div className="flex flex-col gap-3">
                  {/* Three Logo Options */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={handleRandomLogo}
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-5 h-5" />
                      Random Logo
                    </button>
                    <button
                      onClick={() => {
                        setCurrentStep('generating');
                        generateConcepts(localUserInputs, currentImageQuery);
                      }}
                      className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl text-white font-medium transition-all"
                    >
                      Skip Logo
                    </button>
                  </div>

                  {/* Upload Logo Component */}
                  <div className="border-t border-slate-700 pt-3">
                    <p className="text-sm text-slate-400 mb-2 text-center">Or upload your own:</p>
                    <LogoUpload onUpload={handleLogoUpload} uploadedLogo={uploadedLogo} />
                  </div>
                </div>
              </div>
            )}

            {/* Action Icons - After Complete */}
            {currentStep === 'complete' && (
              <div className="p-3 md:p-4 border-t border-slate-700/50 flex items-center gap-3">
                <div className="flex-1 text-sm text-slate-400">
                  Keep chatting to refine or adjust your post!
                </div>
                <div className="flex gap-2">
                  {/* Try Again Icon */}
                  <div className="group relative">
                    <button
                      onClick={() => {
                        addAIMessage('🔄 Generating new variations with different phrasing...');
                        onTryAgain();
                      }}
                      className="p-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all shadow-lg hover:shadow-xl"
                    >
                      <RefreshCw className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      Try Again
                    </div>
                  </div>

                  {/* Create Another Icon */}
                  <div className="group relative">
                    <button
                      onClick={resetChat}
                      className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-lg hover:shadow-xl"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      Create Another
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Input Area - Always available except mode-select, welcome, logo and generating */}
            {currentStep !== 'logo' && currentStep !== 'generating' && currentStep !== 'welcome' && currentStep !== 'mode-select' && (
              <div className="p-3 md:p-4 border-t border-slate-700/50">
                <div className="flex gap-2">
                  <div className="flex-1 relative rounded-xl overflow-hidden">
                    {/* Animated gradient background when AI is thinking */}
                    {isAIThinking && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-[shimmer_1.5s_ease-in-out_infinite] bg-[length:200%_100%]"></div>
                    )}
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder={isAIThinking ? "AI is thinking..." : currentStep === 'complete' ? "Add cats, change style, adjust colors..." : mode === 'simple' ? "Describe your complete post idea..." : "Type your response..."}
                      disabled={isAIThinking}
                      className={`relative w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 ${isAIThinking ? 'bg-transparent' : 'bg-slate-800'}`}
                    />
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isAIThinking}
                    className="px-3 md:px-4 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {isAIThinking ? (
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
                    ) : (
                      <Send className="w-4 h-4 md:w-5 md:h-5" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Collapsed Chat Button
          <button
            onClick={onToggleExpand}
            className="group relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-110 flex items-center justify-center"
          >
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
            <div className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-2 h-2 md:w-3 md:h-3 text-white" />
            </div>
          </button>
        )}
      </div>
    </>
  );
}