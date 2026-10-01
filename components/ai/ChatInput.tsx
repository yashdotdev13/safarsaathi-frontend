"use client";

import { ArrowUp, Sparkles } from "lucide-react";
import { useState } from "react";

export function ChatInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="border-t border-white/8 bg-[#07101c] p-4">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-end gap-3 rounded-2xl border border-white/10 bg-[#0b1422] p-2 shadow-xl shadow-black/20">
          <div className="flex flex-1 items-center">
            <Sparkles className="ml-3 mr-2 h-4 w-4 shrink-0 text-indigo-400" />

            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Ask SafarSaathi anything about your journey..."
              rows={1}
              className="max-h-32 min-h-11 flex-1 resize-none bg-transparent px-1 py-3 text-sm text-white outline-none placeholder:text-slate-600"
            />
          </div>

          <button
            type="button"
            disabled={!message.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500 text-white transition-all hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-2 text-center text-[10px] text-slate-600">
          SafarSaathi AI can make mistakes. Verify important travel information.
        </p>
      </div>
    </div>
  );
}