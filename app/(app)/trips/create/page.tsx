"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Compass,
  MapPin,
  Mountain,
  Sparkles,
  Users,
  Utensils,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const travelStyles = [
  {
    id: "adventure",
    title: "Adventure",
    description: "Thrilling experiences & outdoor activities",
    icon: Mountain,
  },
  {
    id: "culture",
    title: "Culture",
    description: "History, local life & hidden gems",
    icon: Compass,
  },
  {
    id: "food",
    title: "Food & Leisure",
    description: "Cuisine, cafés & relaxed experiences",
    icon: Utensils,
  },
];

const budgets = [
  {
    id: "budget",
    title: "Budget",
    description: "₹5k – ₹15k",
  },
  {
    id: "moderate",
    title: "Moderate",
    description: "₹15k – ₹35k",
  },
  {
    id: "premium",
    title: "Premium",
    description: "₹35k+",
  },
];

const interests = [
  "Nature",
  "Mountains",
  "Beaches",
  "Food",
  "Photography",
  "Adventure",
  "Culture",
  "Nightlife",
  "Spirituality",
  "Shopping",
];

export default function CreateTripPage() {
  const [selectedStyle, setSelectedStyle] = useState("adventure");
  const [selectedBudget, setSelectedBudget] = useState("moderate");

  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Nature",
    "Mountains",
  ]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest],
    );
  };

  return (
    <main className="min-h-full bg-[#050b14] text-white">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">

        {/* Back */}
        <Link
          href="/trips"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to trips
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-indigo-400">
            <Sparkles className="h-4 w-4" />
            Plan your next adventure
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Create a new trip.
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Tell SafarSaathi a little about your journey and we'll help you
            create a personalized travel experience.
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">

          {/* =========================================================
              FORM
              ========================================================= */}
          <div className="rounded-3xl border border-white/8 bg-[#0b1422]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">

            {/* Destination */}
            <section>
              <div className="mb-5">
                <h2 className="text-lg font-semibold">
                  Where are you going?
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Start with the destination for your journey.
                </p>
              </div>

              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-indigo-400" />

                <Input
                  placeholder="e.g. Manali, Jaipur, Goa..."
                  className="h-12 border-white/10 bg-[#07101c] pl-12 text-white placeholder:text-slate-600 focus-visible:ring-indigo-500/40"
                />
              </div>
            </section>

            <div className="my-8 h-px bg-white/6" />

            {/* Dates */}
            <section>
              <div className="mb-5">
                <h2 className="text-lg font-semibold">
                  When are you going?
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Choose the dates for your trip.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <div className="space-y-2">
                  <Label className="text-slate-300">
                    Start date
                  </Label>

                  <div className="relative">
                    <CalendarDays className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                    <Input
                      type="date"
                      className="h-12 border-white/10 bg-[#07101c] pl-11 text-slate-300 [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">
                    End date
                  </Label>

                  <div className="relative">
                    <CalendarDays className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                    <Input
                      type="date"
                      className="h-12 border-white/10 bg-[#07101c] pl-11 text-slate-300 [color-scheme:dark]"
                    />
                  </div>
                </div>

              </div>
            </section>

            <div className="my-8 h-px bg-white/6" />

            {/* Travelers */}
            <section>
              <div className="mb-5">
                <h2 className="text-lg font-semibold">
                  Who's traveling?
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Tell us how many people are joining the journey.
                </p>
              </div>

              <div className="flex max-w-xs items-center gap-4 rounded-xl border border-white/10 bg-[#07101c] p-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Users className="h-5 w-5 text-cyan-400" />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Travelers
                  </p>

                  <p className="text-xs text-slate-500">
                    Including yourself
                  </p>
                </div>

                <select
                  defaultValue="2"
                  className="rounded-lg border border-white/10 bg-[#0b1422] px-3 py-2 text-sm text-white outline-none focus:border-indigo-400/40"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>

              </div>
            </section>

            <div className="my-8 h-px bg-white/6" />

            {/* Travel style */}
            <section>
              <div className="mb-5">
                <h2 className="text-lg font-semibold">
                  What's your style?
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Choose the kind of experience you're looking for.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-3">

                {travelStyles.map((style) => {
                  const Icon = style.icon;
                  const selected = selectedStyle === style.id;

                  return (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => setSelectedStyle(style.id)}
                      className={`relative rounded-2xl border p-5 text-left transition-all ${
                        selected
                          ? "border-indigo-400/40 bg-indigo-500/10 shadow-lg shadow-indigo-500/5"
                          : "border-white/8 bg-[#07101c] hover:border-white/15 hover:bg-white/[0.03]"
                      }`}
                    >
                      {selected && (
                        <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500">
                          <Check className="h-3 w-3" />
                        </span>
                      )}

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          selected
                            ? "bg-indigo-500/15 text-indigo-400"
                            : "bg-white/5 text-slate-400"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="mt-4 text-sm font-semibold">
                        {style.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {style.description}
                      </p>
                    </button>
                  );
                })}

              </div>
            </section>

            <div className="my-8 h-px bg-white/6" />

            {/* Budget */}
            <section>
              <div className="mb-5">
                <h2 className="text-lg font-semibold">
                  What's your budget?
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  This helps us tailor recommendations to you.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">

                {budgets.map((budget) => {
                  const selected = selectedBudget === budget.id;

                  return (
                    <button
                      key={budget.id}
                      type="button"
                      onClick={() => setSelectedBudget(budget.id)}
                      className={`relative rounded-2xl border p-5 text-left transition-all ${
                        selected
                          ? "border-indigo-400/40 bg-indigo-500/10"
                          : "border-white/8 bg-[#07101c] hover:border-white/15"
                      }`}
                    >
                      {selected && (
                        <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500">
                          <Check className="h-3 w-3" />
                        </span>
                      )}

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          selected
                            ? "bg-indigo-500/15 text-indigo-400"
                            : "bg-white/5 text-slate-400"
                        }`}
                      >
                        <Wallet className="h-5 w-5" />
                      </div>

                      <h3 className="mt-4 text-sm font-semibold">
                        {budget.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {budget.description}
                      </p>
                    </button>
                  );
                })}

              </div>
            </section>

            <div className="my-8 h-px bg-white/6" />

            {/* Interests */}
            <section>
              <div className="mb-5">
                <h2 className="text-lg font-semibold">
                  What are you interested in?
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Pick as many as you'd like.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">

                {interests.map((interest) => {
                  const selected = selectedInterests.includes(interest);

                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`rounded-full border px-4 py-2 text-sm transition-all ${
                        selected
                          ? "border-indigo-400/30 bg-indigo-500/15 text-indigo-300"
                          : "border-white/8 bg-[#07101c] text-slate-400 hover:border-white/15 hover:text-white"
                      }`}
                    >
                      {selected && (
                        <Check className="mr-1.5 inline-block h-3.5 w-3.5" />
                      )}

                      {interest}
                    </button>
                  );
                })}

              </div>
            </section>

            {/* Actions */}
            <div className="mt-10 flex flex-col-reverse gap-3 border-t border-white/6 pt-6 sm:flex-row sm:justify-end">

              {/* IMPORTANT:
                  Normal Link instead of Button + render
                  because Base UI Button expects a native button.
              */}
              <Link
                href="/trips"
                className="inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                Cancel
              </Link>

              {/* Actual button = safe with Base UI */}
              <Button
                type="button"
                className="h-11 bg-indigo-500 px-6 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400"
                onClick={() => {
                  // Frontend only for now.
                  // Backend integration will be added later.
                  console.log("Create trip clicked");
                }}
              >
                Create Trip
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

            </div>
          </div>

          {/* =========================================================
              AI SIDE PANEL
              ========================================================= */}
          <aside className="h-fit rounded-3xl border border-indigo-400/15 bg-gradient-to-br from-indigo-500/10 via-[#0b1422] to-cyan-500/5 p-6">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15">
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </div>

            <h2 className="mt-5 text-lg font-semibold">
              Let AI plan it with you.
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Once you create your trip, SafarSaathi can help build an
              itinerary based on your destination, dates, interests, budget,
              and travel style.
            </p>

            <div className="mt-6 space-y-3">

              {[
                "Personalized destinations",
                "Day-by-day itinerary",
                "Activities & experiences",
                "Estimated travel budget",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10">
                    <Check className="h-3 w-3 text-emerald-400" />
                  </div>

                  {item}
                </div>
              ))}

            </div>

            <div className="mt-7 rounded-2xl border border-white/8 bg-black/10 p-4">
              <p className="text-xs leading-5 text-slate-500">
                Your preferences stay connected to your SafarSaathi travel
                experience.
              </p>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}