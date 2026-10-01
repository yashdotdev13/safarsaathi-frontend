import { ChatHeader } from "@/components/ai/ChatHeader";
import { ChatInput } from "@/components/ai/ChatInput";
import { ChatMessage } from "@/components/ai/ChatMessage";
import { SuggestedPrompts } from "@/components/ai/SuggestedPrompts";

export default function AiChatPage() {
  return (
    <div className="flex h-[calc(100vh-64px)] flex-col bg-[#050b14]">

      <ChatHeader />

      {/* =====================================================
          CHAT AREA
          ===================================================== */}

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-4xl px-5 py-10">

          {/* Welcome */}
          <div className="mb-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/15 to-indigo-500/15">
              <span className="text-2xl">✨</span>
            </div>

            <h2 className="mt-5 text-2xl font-bold tracking-tight text-white">
              What adventure are you thinking about?
            </h2>

            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
              Ask SafarSaathi to plan, recommend, or personalize your next
              journey.
            </p>

            <div className="mt-5 flex justify-center">
              <SuggestedPrompts />
            </div>
          </div>

          {/* Conversation */}
          <div className="space-y-5">

            <ChatMessage
              role="assistant"
              message="Hi! I'm SafarSaathi, your AI travel companion. Tell me where you're thinking of going, and I'll help you plan the journey."
            />

            <ChatMessage
              role="user"
              message="I want to visit Manali in December for around 5 days."
            />

            <ChatMessage
              role="assistant"
              message="That sounds like a great winter trip! I can help you build a 5-day Manali itinerary covering places to visit, activities, accommodation areas, food, and an estimated budget. Would you like the trip to focus more on adventure, relaxation, or a mix of both?"
            />

          </div>
        </div>
      </div>

      <ChatInput />

    </div>
  );
}