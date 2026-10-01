"use client";

import {
  Brain,
  Check,
  ChevronRight,
  Compass,
  MapPin,
  Mountain,
  Sparkles,
  Utensils,
  Heart,
  Clock3,
  Trash2,
  RefreshCw,
} from "lucide-react";

const memories = [
  {
    icon: Mountain,
    title: "You enjoy mountain destinations",
    description:
      "You have shown a strong interest in Himalayan destinations and mountain experiences.",
    category: "Travel preference",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Compass,
    title: "Adventure is your preferred travel style",
    description:
      "You prefer outdoor activities, exploration, nature, and active experiences.",
    category: "Travel style",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: MapPin,
    title: "Manali is on your travel radar",
    description:
      "You have shown interest in visiting Manali for a winter adventure.",
    category: "Destination",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Utensils,
    title: "You enjoy discovering local food",
    description:
      "You like exploring regional cuisine and authentic local dining experiences.",
    category: "Food",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
];

const interests = [
  "Nature",
  "Mountains",
  "Photography",
  "Adventure",
  "Food",
  "Culture",
];

const destinations = [
  {
    name: "Manali",
    country: "India",
    reason: "Mountain & adventure",
  },
  {
    name: "Rishikesh",
    country: "India",
    reason: "Adventure & nature",
  },
  {
    name: "Jaipur",
    country: "India",
    reason: "Culture & heritage",
  },
];

export default function MemoryPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-indigo-400">
            <Brain className="h-4 w-4" />
            Personalization
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your AI memory
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            SafarSaathi remembers your travel preferences to make future
            recommendations more relevant and personalized.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
        >
          <RefreshCw className="h-4 w-4" />
          Refresh understanding
        </button>
      </div>

      {/* AI Understanding Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-400/15 bg-gradient-to-br from-indigo-950/70 via-[#0c1729] to-[#07101c] p-7 sm:p-8">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-cyan-500/8 blur-3xl" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-400/20">
              <Sparkles className="h-7 w-7 text-cyan-300" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-xl font-semibold text-white">
                  SafarSaathi understands your travel style
                </h2>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Active
                </span>
              </div>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Your conversations and choices help SafarSaathi personalize
                destinations, activities, itineraries, and travel suggestions.
              </p>
            </div>
          </div>

          <div className="shrink-0 rounded-2xl border border-white/8 bg-black/15 px-5 py-4">
            <p className="text-xs text-slate-500">Memories stored</p>
            <p className="mt-1 text-2xl font-bold text-white">24</p>
            <p className="mt-1 text-xs text-indigo-300">
              Updated recently
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid gap-6 xl:grid-cols-[1.45fr_0.8fr]">
        {/* What AI knows */}
        <section className="rounded-2xl border border-white/8 bg-[#0b1422] p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">
                AI understanding
              </p>

              <h2 className="mt-2 text-xl font-semibold text-white">
                What SafarSaathi knows about you
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
              <Brain className="h-5 w-5 text-purple-400" />
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {memories.map((memory) => {
              const Icon = memory.icon;

              return (
                <div
                  key={memory.title}
                  className="group rounded-2xl border border-white/7 bg-[#07101c] p-5 transition hover:border-indigo-400/20 hover:bg-[#0d1828]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${memory.bg}`}
                    >
                      <Icon className={`h-5 w-5 ${memory.color}`} />
                    </div>

                    <span className="text-[10px] font-medium uppercase tracking-wider text-slate-600">
                      {memory.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-semibold leading-5 text-white">
                    {memory.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {memory.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Travel Profile */}
        <section className="rounded-2xl border border-white/8 bg-[#0b1422] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
              <Heart className="h-5 w-5 text-emerald-400" />
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Your travel profile
              </h2>
              <p className="text-xs text-slate-500">
                Based on your activity
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300">
                  Adventure
                </span>
                <span className="text-xs text-indigo-400">High</span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300">
                  Nature
                </span>
                <span className="text-xs text-indigo-400">High</span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300">
                  Culture
                </span>
                <span className="text-xs text-slate-500">Medium</span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-[58%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300">
                  Relaxation
                </span>
                <span className="text-xs text-slate-500">Medium</span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-[46%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Interests + Destinations */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Interests */}
        <section className="rounded-2xl border border-white/8 bg-[#0b1422] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
              <Compass className="h-5 w-5 text-purple-400" />
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Travel interests
              </h2>
              <p className="text-xs text-slate-500">
                Preferences used for recommendations
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {interests.map((interest, index) => (
              <span
                key={interest}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium ${
                  index < 4
                    ? "border-indigo-400/20 bg-indigo-500/10 text-indigo-300"
                    : "border-white/8 bg-white/[0.02] text-slate-400"
                }`}
              >
                {index < 4 && <Check className="h-3.5 w-3.5" />}
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* Destinations */}
        <section className="rounded-2xl border border-white/8 bg-[#0b1422] p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
                <MapPin className="h-5 w-5 text-cyan-400" />
              </div>

              <div>
                <h2 className="font-semibold text-white">
                  Destinations you like
                </h2>
                <p className="text-xs text-slate-500">
                  Places matching your interests
                </p>
              </div>
            </div>

            <button
              type="button"
              className="text-xs font-medium text-indigo-400 hover:text-indigo-300"
            >
              View all
            </button>
          </div>

          <div className="mt-5 divide-y divide-white/6">
            {destinations.map((destination) => (
              <div
                key={destination.name}
                className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04]">
                    <MapPin className="h-4 w-4 text-indigo-400" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      {destination.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {destination.country} · {destination.reason}
                    </p>
                  </div>
                </div>

                <ChevronRight className="h-4 w-4 text-slate-600" />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Recent Memories */}
      <section className="rounded-2xl border border-white/8 bg-[#0b1422] p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Recent activity
            </p>

            <h2 className="mt-2 text-xl font-semibold text-white">
              Recent memories
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Things SafarSaathi recently learned from your interactions.
            </p>
          </div>

          <button
            type="button"
            className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
          >
            Manage memories
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {[
            {
              title: "Interested in a Manali trip",
              description:
                "You mentioned planning a 5-day Manali trip in December.",
              time: "Recently",
            },
            {
              title: "Adventure travel preference",
              description:
                "You selected adventure as your preferred travel style.",
              time: "Recently",
            },
            {
              title: "Mountain destinations",
              description:
                "You showed interest in destinations surrounded by mountains and nature.",
              time: "2 days ago",
            },
          ].map((memory) => (
            <div
              key={memory.title}
              className="flex items-start gap-4 rounded-xl border border-white/6 bg-[#07101c] p-4"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                <Clock3 className="h-4 w-4 text-indigo-400" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-sm font-medium text-white">
                    {memory.title}
                  </h3>

                  <span className="text-xs text-slate-600">
                    {memory.time}
                  </span>
                </div>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {memory.description}
                </p>
              </div>

              <button
                type="button"
                aria-label={`Delete ${memory.title}`}
                className="rounded-lg p-2 text-slate-600 transition hover:bg-red-500/10 hover:text-red-400"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section className="rounded-2xl border border-white/7 bg-white/[0.02] p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm font-medium text-white">
              Your memories, your control
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              You can review or remove memories whenever you want. These
              controls will later connect to your AI memory service.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            Manage privacy
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
}