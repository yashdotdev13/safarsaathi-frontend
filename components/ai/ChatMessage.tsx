import { Bot } from "lucide-react";

type ChatMessageProps = {
  role: "assistant" | "user";
  message: string;
};

export function ChatMessage({
  role,
  message,
}: ChatMessageProps) {
  const isAssistant = role === "assistant";

  return (
    <div
      className={`flex gap-3 ${
        isAssistant ? "justify-start" : "justify-end"
      }`}
    >
      {isAssistant && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15">
          <Bot className="h-4 w-4 text-cyan-400" />
        </div>
      )}

      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-6 ${
          isAssistant
            ? "rounded-tl-md border border-white/8 bg-[#0b1422] text-slate-300"
            : "rounded-tr-md bg-indigo-500 text-white shadow-lg shadow-indigo-500/10"
        }`}
      >
        {message}
      </div>
    </div>
  );
}