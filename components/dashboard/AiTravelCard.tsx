"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const suggestions = [
  "Plan a weekend trip",
  "Find places to visit",
  "Find travel companions",
];

export function AiTravelCard() {
  return (
    <section className="relative mt-8 overflow-hidden rounded-3xl border border-indigo-400/15 bg-gradient-to-br from-[#111a35] via-[#0d172b] to-[#091321] shadow-2xl shadow-indigo-950/20">


      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.12),transparent_30%)]" />


      <div className="relative z-10 p-6 sm:p-8">

        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 via-indigo-500/20 to-purple-500/20 ring-1 ring-white/10">
              <Bot className="h-6 w-6 text-cyan-300" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-white">
                  AI Travel Companion
                </h2>

                <span className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                  Online
                </span>
              </div>

              <p className="mt-1 text-sm text-slate-400">
                Your intelligent travel planning assistant.
              </p>
            </div>

          </div>

          <Link
            href="/ai-chat"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition-colors hover:text-indigo-200"
          >
            Open AI Chat
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

        {/* Main prompt */}
        <div className="mt-8">

          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            What adventure are you thinking about?
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Ask SafarSaathi to plan, recommend, or personalize your
            next journey.
          </p>

        </div>

        {/* Input */}
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#050b14]/60 p-2 shadow-inner shadow-black/20 sm:flex-row sm:items-center">

          <div className="flex min-h-12 flex-1 items-center gap-3 px-3">

            <Sparkles className="h-5 w-5 shrink-0 text-indigo-400" />

            <span className="text-sm text-slate-500">
              Ask anything about your next journey...
            </span>

          </div>

          <Button
            nativeButton={false}
            className="h-11 bg-indigo-500 px-5 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400"
            render={<Link href="/ai-chat" />}
          >
            Ask SafarSaathi
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

        </div>

        {/* Suggestions */}
        <div className="mt-4 flex flex-wrap gap-2">

          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400 transition-colors hover:border-indigo-400/20 hover:bg-indigo-500/5 hover:text-slate-200"
            >
              <MapPin className="h-3 w-3 text-slate-500" />
              {suggestion}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}