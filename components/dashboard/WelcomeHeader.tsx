import { Sparkles } from "lucide-react";

export function WelcomeHeader() {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm font-medium text-indigo-400">
        <Sparkles className="h-4 w-4" />
        Your travel workspace
      </div>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Good evening, Yash 👋
      </h1>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
        Ready for your next adventure? Let SafarSaathi help you
        discover places, plan trips, and find the right companions.
      </p>
    </div>
  );
}