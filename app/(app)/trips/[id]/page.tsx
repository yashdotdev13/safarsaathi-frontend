"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Edit3,
  MapPin,
  Mountain,
  Sparkles,
  Users,
  Utensils,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: "Day 1",
    date: "December 12",
    title: "Arrival in Manali",
    description:
      "Settle into Manali, explore the local streets, and enjoy your first evening in the mountains.",
    activities: [
      "Hotel check-in",
      "Explore Mall Road",
      "Local Himachali dinner",
    ],
  },
  {
    day: "Day 2",
    date: "December 13",
    title: "Solang Valley Adventure",
    description:
      "Spend the day surrounded by mountains with adventure activities and scenic viewpoints.",
    activities: [
      "Visit Solang Valley",
      "Mountain activities",
      "Sunset viewpoint",
    ],
  },
  {
    day: "Day 3",
    date: "December 14",
    title: "Old Manali & Nature",
    description:
      "Experience the quieter side of Manali with cafés, forests, and riverside walks.",
    activities: [
      "Old Manali walk",
      "Visit Manu Temple",
      "Riverside café",
    ],
  },
  {
    day: "Day 4",
    date: "December 15",
    title: "Rohtang Experience",
    description:
      "Explore the high-altitude landscapes and enjoy panoramic Himalayan views.",
    activities: [
      "Mountain excursion",
      "Snow activities",
      "Photography stops",
    ],
  },
  {
    day: "Day 5",
    date: "December 16",
    title: "Relax & Explore",
    description:
      "Keep the final full day flexible with local discoveries and relaxed experiences.",
    activities: [
      "Local shopping",
      "Café hopping",
      "Free evening",
    ],
  },
];

const recommendations = [
  {
    title: "Try local Himachali cuisine",
    description:
      "Explore traditional dishes and local cafés around Old Manali.",
    icon: Utensils,
  },
  {
    title: "Capture the mountains",
    description:
      "Early mornings around the valley offer beautiful photography opportunities.",
    icon: Mountain,
  },
  {
    title: "Keep one day flexible",
    description:
      "Mountain weather can change quickly, so keeping a flexible day is useful.",
    icon: Sparkles,
  },
];

export default function TripDetailsPage() {
  return (
    <main className="min-h-full bg-[#050b14] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

        {/* =========================================================
            TOP NAVIGATION
            ========================================================= */}

        <div className="mb-6 flex items-center justify-between gap-4">

          <Link
            href="/trips"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to trips
          </Link>

          <Button
            type="button"
            variant="outline"
            className="border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/10 hover:text-white"
          >
            <Edit3 className="mr-2 h-4 w-4" />
            Edit Trip
          </Button>

        </div>

        {/* =========================================================
            HERO
            ========================================================= */}

        <section className="relative overflow-hidden rounded-3xl border border-white/10">

          <div
            className="h-[360px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/dashboard/manali.jpg')",
            }}
          />

          {/* overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020611] via-[#020611]/35 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-black/30 px-3 py-1.5 text-xs font-medium text-cyan-200 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Planning
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Manali, India
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300">

              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-indigo-400" />
                Dec 12 – Dec 17, 2026
              </span>

              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-indigo-400" />
                Himachal Pradesh, India
              </span>

            </div>

          </div>
        </section>

        {/* =========================================================
            TRIP SUMMARY
            ========================================================= */}

        <section className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              label: "Duration",
              value: "5 Days",
              icon: Clock3,
              iconClass: "text-indigo-400",
              bgClass: "bg-indigo-500/10",
            },
            {
              label: "Travelers",
              value: "2 People",
              icon: Users,
              iconClass: "text-cyan-400",
              bgClass: "bg-cyan-500/10",
            },
            {
              label: "Travel Style",
              value: "Adventure",
              icon: Mountain,
              iconClass: "text-emerald-400",
              bgClass: "bg-emerald-500/10",
            },
            {
              label: "Budget",
              value: "₹15k – ₹35k",
              icon: Sparkles,
              iconClass: "text-purple-400",
              bgClass: "bg-purple-500/10",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-white/8 bg-[#0b1422] p-5"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bgClass}`}
                >
                  <Icon className={`h-5 w-5 ${item.iconClass}`} />
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  {item.label}
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  {item.value}
                </p>
              </div>
            );
          })}

        </section>

        {/* =========================================================
            MAIN CONTENT
            ========================================================= */}

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">

          {/* =======================================================
              ITINERARY
              ======================================================= */}

          <section className="rounded-3xl border border-white/8 bg-[#0b1422]/80 p-6 sm:p-8">

            <div className="flex items-start justify-between gap-4">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                  Your journey
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Trip itinerary
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Your personalized Manali adventure.
                </p>
              </div>

              <div className="hidden rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400 sm:block">
                5 days
              </div>

            </div>

            <div className="mt-8 space-y-7">

              {itinerary.map((item, index) => (
                <div
                  key={item.day}
                  className="relative pl-10"
                >

                  {/* timeline */}
                  {index !== itinerary.length - 1 && (
                    <div className="absolute left-[11px] top-7 h-[calc(100%+28px)] w-px bg-white/8" />
                  )}

                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-500/15">
                    <span className="h-2 w-2 rounded-full bg-indigo-400" />
                  </div>

                  <div className="rounded-2xl border border-white/7 bg-[#07101c] p-5 transition-colors hover:border-white/12">

                    <div className="flex flex-wrap items-start justify-between gap-3">

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                          {item.day}
                        </p>

                        <h3 className="mt-1 text-lg font-semibold">
                          {item.title}
                        </h3>
                      </div>

                      <span className="text-xs text-slate-600">
                        {item.date}
                      </span>

                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">

                      {item.activities.map((activity) => (
                        <span
                          key={activity}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/7 bg-white/[0.025] px-3 py-1.5 text-xs text-slate-400"
                        >
                          <Check className="h-3 w-3 text-emerald-400" />
                          {activity}
                        </span>
                      ))}

                    </div>

                  </div>
                </div>
              ))}

            </div>
          </section>

          {/* =======================================================
              AI PANEL
              ======================================================= */}

          <aside className="space-y-5">

            {/* AI card */}
            <div className="rounded-3xl border border-indigo-400/15 bg-gradient-to-br from-indigo-500/10 via-[#0b1422] to-cyan-500/5 p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15">
                <Sparkles className="h-5 w-5 text-cyan-300" />
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">
                AI Travel Assistant
              </p>

              <h2 className="mt-2 text-xl font-semibold">
                Make this trip smarter.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Ask SafarSaathi to adjust your itinerary, discover places,
                estimate costs, or personalize your journey.
              </p>

              <Link
                href="/ai"
                className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl bg-indigo-500 px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-colors hover:bg-indigo-400"
              >
                Open AI Assistant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

            </div>

            {/* Recommendations */}
            <div className="rounded-3xl border border-white/8 bg-[#0b1422] p-6">

              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-400" />

                <h2 className="font-semibold">
                  Recommended for you
                </h2>
              </div>

              <div className="mt-5 space-y-4">

                {recommendations.map((recommendation) => {
                  const Icon = recommendation.icon;

                  return (
                    <div
                      key={recommendation.title}
                      className="rounded-2xl border border-white/7 bg-[#07101c] p-4"
                    >
                      <div className="flex gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                          <Icon className="h-4 w-4 text-indigo-400" />
                        </div>

                        <div>
                          <h3 className="text-sm font-medium">
                            {recommendation.title}
                          </h3>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {recommendation.description}
                          </p>
                        </div>

                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

          </aside>
        </div>

      </div>
    </main>
  );
}