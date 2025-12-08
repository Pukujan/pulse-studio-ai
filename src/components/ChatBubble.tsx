import { ChatMessage } from "../App";
import { Sparkles } from "lucide-react";

interface ChatBubbleProps {
  message: ChatMessage;
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isAI = message.sender === "ai";

  return (
    <div
      className={`flex ${isAI ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`flex gap-3 max-w-[85%] ${isAI ? "flex-row" : "flex-row-reverse"}`}
      >
        {isAI && (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        )}
        <div
          className={`px-4 py-3 rounded-2xl ${
            isAI
              ? "bg-slate-800 border border-slate-700/50 text-slate-100"
              : "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
          }`}
        >
          <p className="text-sm leading-relaxed">
            {message.text}
          </p>
        </div>
      </div>
    </div>
  );
}