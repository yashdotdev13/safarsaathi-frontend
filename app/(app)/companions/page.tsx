"use client";

import {
  ArrowRight,
  Bot,
  Check,
  Compass,
  Filter,
  Heart,
  MapPin,
  Search,
  Sparkles,
  Users,
  X,
} from "lucide-react";

import { useState } from "react";

type Companion = {
  id: number;
  name: string;
  initials: string;
  location: string;
  destination: string;
  dates: string;
  compatibility: number;
  interests: string[];
  travelStyle: string;
  bio: string;
};

const companions: Companion[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    initials: "AS",
    location: "Delhi, India",
    destination: "Manali, India",
    dates: "Dec 12 – Dec 17",
    compatibility: 96,
    interests: ["Mountains", "Adventure", "Photography"],
    travelStyle: "Adventure",
    bio: "Love exploring mountains, discovering hidden places, and capturing the journey through photography.",
  },
  {
    id: 2,
    name: "Ananya Mehta",
    initials: "AM",
    location: "Mumbai, India",
    destination: "Manali, India",
    dates: "Dec 13 – Dec 18",
    compatibility: 91,
    interests: ["Nature", "Food", "Culture"],
    travelStyle: "Balanced",
    bio: "Always looking for beautiful destinations, local food, and meaningful travel experiences.",
  },
  {
    id: 3,
    name: "Rohan Verma",
    initials: "RV",
    location: "Bangalore, India",
    destination: "Manali, India",
    dates: "Dec 12 – Dec 16",
    compatibility: 88,
    interests: ["Adventure", "Hiking", "Nature"],
    travelStyle: "Adventure",
    bio: "Weekend explorer and mountain lover. Always ready for the next trail.",
  },
  {
    id: 4,
    name: "Priya Kapoor",
    initials: "PK",
    location: "Pune, India",
    destination: "Jaipur, India",
    dates: "Jan 08 – Jan 12",
    compatibility: 84,
    interests: ["Culture", "Food", "Photography"],
    travelStyle: "Culture",
    bio: "I enjoy discovering local culture, architecture, cafes, and hidden gems.",
  },
  {
    id: 5,
    name: "Kabir Singh",
    initials: "KS",
    location: "Chandigarh, India",
    destination: "Rishikesh, India",
    dates: "Jan 15 – Jan 19",
    compatibility: 81,
    interests: ["Adventure", "Spirituality", "Nature"],
    travelStyle: "Adventure",
    bio: "Rafting, hiking, camping and everything that gets me outdoors.",
  },
  {
    id: 6,
    name: "Meera Joshi",
    initials: "MJ",
    location: "Hyderabad, India",
    destination: "Goa, India",
    dates: "Feb 02 – Feb 06",
    compatibility: 78,
    interests: ["Beaches", "Food", "Nightlife"],
    travelStyle: "Relaxed",
    bio: "Beach sunsets, good food, music and spontaneous travel plans.",
  },
];

const filters = [
  "All",
  "Adventure",
  "Nature",
  "Culture",
  "Food",
  "Photography",
];

export default function CompanionsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState<number[]>([]);

  const filteredCompanions = companions.filter((companion) => {
    const matchesFilter =
      activeFilter === "All" ||
      companion.interests.some(
        (interest) =>
          interest.toLowerCase() === activeFilter.toLowerCase(),
      );

    const searchText = search.toLowerCase();

    const matchesSearch =
      companion.name.toLowerCase().includes(searchText) ||
      companion.destination.toLowerCase().includes(searchText) ||
      companion.location.toLowerCase().includes(searchText) ||
      companion.interests.some((interest) =>
        interest.toLowerCase().includes(searchText),
      );

    return matchesFilter && matchesSearch;
  });

  const toggleLike = (id: number) => {
    setLiked((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  return (
    <main className="min-h-full">
      {/* =====================================================
          PAGE HEADER
          ===================================================== */}

      <section className="border-b border-white/6">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-indigo-400">
                <Users className="h-4 w-4" />
                Travel companions
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Find your travel people.
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Discover travelers who share your destination, interests,
                travel style, and passion for exploring the world.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                <Filter className="h-4 w-4" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AI MATCHING BANNER
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pt-7 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-indigo-400/15 bg-gradient-to-r from-[#101a3c] via-[#101a31] to-[#0b1727] p-6 shadow-xl shadow-indigo-950/10">
          <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-indigo-500/10 blur-[100px]" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/15">
                <Sparkles className="h-6 w-6 text-cyan-400" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-semibold text-white">
                    AI-powered companion matching
                  </h2>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                    SMART MATCHING
                  </span>
                </div>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400">
                  SafarSaathi analyzes your travel preferences, destination,
                  interests, and travel style to help you discover compatible
                  companions.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-colors hover:bg-indigo-400"
            >
              <Bot className="h-4 w-4" />
              Improve my matches
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH + FILTERS
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pt-7 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}

          <div className="relative w-full lg:max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search travelers, destinations, interests..."
              className="h-11 w-full rounded-xl border border-white/10 bg-[#0b1422] pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-600 transition-all focus:border-indigo-400/40 focus:ring-2 focus:ring-indigo-500/10"
            />
          </div>

          {/* Filters */}

          <div className="flex gap-2 overflow-x-auto pb-1">
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                    active
                      ? "border-indigo-400/30 bg-indigo-500/15 text-indigo-300"
                      : "border-white/8 bg-white/[0.02] text-slate-400 hover:border-white/15 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          RESULTS HEADER
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pt-9 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Recommended companions
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {filteredCompanions.length} travelers match your preferences
            </p>
          </div>

          <button
            type="button"
            className="hidden items-center gap-1 text-sm text-indigo-400 transition-colors hover:text-indigo-300 sm:flex"
          >
            Sort by compatibility
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* =====================================================
          COMPANION GRID
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-5 lg:px-8">
        {filteredCompanions.length === 0 ? (
          <div className="rounded-2xl border border-white/8 bg-[#0b1422] px-6 py-16 text-center">
            <Users className="mx-auto h-10 w-10 text-slate-600" />

            <h3 className="mt-4 text-lg font-semibold text-white">
              No companions found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another destination, interest, or filter.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCompanions.map((companion) => {
              const isLiked = liked.includes(companion.id);

              return (
                <article
                  key={companion.id}
                  className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0b1422] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:bg-[#0e1828] hover:shadow-xl hover:shadow-black/20"
                >
                  {/* Compatibility */}

                  <div className="absolute right-4 top-4 z-10">
                    <div className="rounded-full border border-emerald-400/20 bg-[#07131a]/90 px-2.5 py-1 text-xs font-semibold text-emerald-400 backdrop-blur-md">
                      {companion.compatibility}% match
                    </div>
                  </div>

                  <div className="p-5">
                    {/* Profile */}

                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/15">
                        {companion.initials}
                      </div>

                      <div className="min-w-0 pr-20">
                        <h3 className="truncate text-base font-semibold text-white">
                          {companion.name}
                        </h3>

                        <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                          <MapPin className="h-3.5 w-3.5" />
                          {companion.location}
                        </div>
                      </div>
                    </div>

                    {/* Destination */}

                    <div className="mt-5 rounded-xl border border-white/6 bg-white/[0.025] p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10">
                          <Compass className="h-4 w-4 text-cyan-400" />
                        </div>

                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-wider text-slate-600">
                            Traveling to
                          </p>

                          <p className="mt-0.5 text-sm font-semibold text-white">
                            {companion.destination}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 border-t border-white/6 pt-3 text-xs text-slate-500">
                        {companion.dates}
                      </div>
                    </div>

                    {/* Bio */}

                    <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-400">
                      {companion.bio}
                    </p>

                    {/* Interests */}

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {companion.interests.map((interest) => (
                        <span
                          key={interest}
                          className="rounded-full border border-white/8 bg-white/[0.025] px-2.5 py-1 text-[11px] text-slate-400"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}

                    <div className="mt-5 flex items-center justify-between border-t border-white/6 pt-4">
                      <span className="text-xs text-slate-500">
                        {companion.travelStyle} traveler
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label={
                            isLiked
                              ? `Remove ${companion.name} from favorites`
                              : `Like ${companion.name}`
                          }
                          onClick={() => toggleLike(companion.id)}
                          className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all ${
                            isLiked
                              ? "border-rose-400/20 bg-rose-400/10 text-rose-400"
                              : "border-white/8 bg-white/[0.025] text-slate-500 hover:bg-white/[0.06] hover:text-rose-400"
                          }`}
                        >
                          <Heart
                            className="h-4 w-4"
                            fill={isLiked ? "currentColor" : "none"}
                          />
                        </button>

                        <button
                          type="button"
                          className="inline-flex h-9 items-center gap-2 rounded-xl bg-indigo-500 px-4 text-xs font-semibold text-white shadow-lg shadow-indigo-500/15 transition-colors hover:bg-indigo-400"
                        >
                          View Profile
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* =====================================================
          BOTTOM INFO
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-2xl border border-white/8 bg-[#07101c] p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">
              <Check className="h-5 w-5 text-emerald-400" />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Your privacy comes first.
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Your travel preferences are used to improve matching and help
                you discover compatible travelers.
              </p>
            </div>

            <button
              type="button"
              className="sm:ml-auto inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              Matching preferences
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}