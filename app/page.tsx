"use client";

import Link from "next/link";

export default function Terms() {
  return (
    <div className="w-full flex justify-center p-10">
      <div className="w-full max-w-screen-md space-y-6">
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold">Terms of Use</h1>
        <p className="text-gray-700">
          By using this chatbot, you agree to our Terms of Service.
        </p>
      </div>
    </div>
  );
}

import ChatInput from "@/components/chat/input";
import ChatMessages from "@/components/chat/messages";
import useApp from "@/hooks/use-app";
import ChatHeader from "@/components/chat/header";

export default function Chat() {
  const {
    messages,
    handleInputChange,
    handleSubmit,
    input,
    isLoading,
    indicatorState,
    clearMessages,
  } = useApp();

  return (
    <>
      <ChatHeader clearMessages={clearMessages} />
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col max-w-screen-lg w-full h-full p-5">
          <ChatMessages messages={messages} indicatorState={indicatorState} />
        </div>
      </div>
      <ChatInput
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
        isLoading={isLoading}
      />
    </>
  );
}
