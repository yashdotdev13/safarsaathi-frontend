import { Bot, Sparkles } from "lucide-react";

export function ChatHeader() {
  return (
    <div className="flex items-center justify-between border-b border-white/8 px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
          <Bot className="h-5 w-5 text-cyan-400" />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-semibold text-white">
              AI Travel Companion
            </h1>

            <span className="flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Online
            </span>
          </div>

          <p className="mt-0.5 text-xs text-slate-500">
            Your intelligent travel planning assistant
          </p>
        </div>
      </div>

      <div className="hidden items-center gap-2 text-xs text-slate-500 sm:flex">
        <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
        Powered by AI
      </div>
    </div>
  );
}