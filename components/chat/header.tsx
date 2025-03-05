import { Button } from "@/components/ui/button";
import { EraserIcon } from "lucide-react";

export default function ChatHeader({
  clearMessages,
}: {
  clearMessages: () => void;
}) {
  return (
    <div className="z-10 flex justify-between items-center fixed top-0 w-full p-5 bg-white shadow-md border-b border-gray-300">
      {/* Left Side: Stars */}
      <div className="flex items-center space-x-2">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-red-500 text-2xl">★</span>
          ))}
      </div>

      {/* Center: Chatbot Title */}
      <p className="font-semibold text-lg text-primary">
        SmartInsure - Your Insurance Assistant
      </p>

      {/* Right Side: Clear Chat Button */}
      <Button
        onClick={clearMessages}
        className="gap-2 shadow-sm"
        variant="outline"
        size="sm"
      >
        <EraserIcon className="w-4 h-4" />
        <span>Clear Chat</span>
      </Button>
    </div>
  );
}
