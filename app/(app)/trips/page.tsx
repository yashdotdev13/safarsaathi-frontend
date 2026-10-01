
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Compass,
  MapPin,
  Plus,
  Search,
  Users,
} from "lucide-react";

const trips = [
  {
    id: "1",
    destination: "Manali",
    country: "India",
    dates: "Dec 12 – Dec 17, 2026",
    duration: "5 days",
    travelers: 2,
    status: "Planning",
    style: "Adventure",
    image: "/images/dashboard/manali.jpg",
    description: "A mountain escape filled with scenic views and adventure.",
  },
  {
    id: "2",
    destination: "Jaipur",
    country: "India",
    dates: "Jan 08 – Jan 11, 2027",
    duration: "3 days",
    travelers: 3,
    status: "Upcoming",
    style: "Culture",
    image: "/images/dashboard/jaipur.jpg",
    description: "Explore royal architecture, local food, and vibrant markets.",
  },
  {
    id: "3",
    destination: "Goa",
    country: "India",
    dates: "Feb 14 – Feb 18, 2027",
    duration: "4 days",
    travelers: 2,
    status: "Planning",
    style: "Leisure",
    image: "/images/dashboard/goa.jpg",
    description: "A relaxed coastal getaway with beaches and sunsets.",
  },
];

const filters = ["All", "Planning", "Upcoming", "Completed"];

function statusStyles(status: string) {
  switch (status) {
    case "Upcoming":
      return "border-cyan-400/20 bg-cyan-400/10 text-cyan-300";
    case "Completed":
      return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
    default:
      return "border-amber-400/20 bg-amber-400/10 text-amber-300";
  }
}

export default function TripsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTrips = useMemo(() => {
    return trips.filter((trip) => {
      const matchesFilter =
        activeFilter === "All" || trip.status === activeFilter;

      const query = searchQuery.toLowerCase();
      const matchesSearch =
        trip.destination.toLowerCase().includes(query) ||
        trip.country.toLowerCase().includes(query) ||
        trip.style.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const planningCount = trips.filter(
    (trip) => trip.status === "Planning"
  ).length;

  const upcomingCount = trips.filter(
    (trip) => trip.status === "Upcoming"
  ).length;

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
            <Compass className="h-4 w-4" />
            Your adventures
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            My Trips
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
            Organize your journeys, manage your plans, and get ready for
            your next adventure.
          </p>
        </div>

        <Link
          href="/trips/create"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 text-sm font-semibold text-white transition hover:bg-indigo-400"
        >
          <Plus className="h-4 w-4" />
          Create trip
        </Link>
      </section>

      {/* Summary cards */}
      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/8 bg-[#0b1422] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Total trips</p>
            <div className="rounded-xl bg-indigo-400/10 p-2.5 text-indigo-300">
              <Compass className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-4 text-3xl font-semibold text-white">
            {trips.length}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Across all your journeys
          </p>
        </div>

        <div className="rounded-2xl border border-white/8 bg-[#0b1422] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">In planning</p>
            <div className="rounded-xl bg-amber-400/10 p-2.5 text-amber-300">
              <CalendarDays className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-4 text-3xl font-semibold text-white">
            {planningCount}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Adventures being organized
          </p>
        </div>

        <div className="rounded-2xl border border-white/8 bg-[#0b1422] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Upcoming</p>
            <div className="rounded-xl bg-cyan-400/10 p-2.5 text-cyan-300">
              <Clock3 className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-4 text-3xl font-semibold text-white">
            {upcomingCount}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Trips on your calendar
          </p>
        </div>
      </section>

      {/* Search and filters */}
      <section className="space-y-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search destinations or travel styles..."
              className="h-11 w-full rounded-xl border border-white/10 bg-[#0b1422] pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-indigo-400/50"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-xl px-4 py-2.5 text-xs font-medium transition ${
                  activeFilter === filter
                    ? "bg-indigo-500 text-white"
                    : "border border-white/8 bg-[#0b1422] text-slate-400 hover:border-white/15 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Trip cards */}
        {filteredTrips.length > 0 ? (
          <div className="grid gap-5 xl:grid-cols-2">
            {filteredTrips.map((trip) => (
              <article
                key={trip.id}
                className="group overflow-hidden rounded-2xl border border-white/8 bg-[#0b1422] transition duration-300 hover:-translate-y-0.5 hover:border-indigo-400/20"
              >
                <div className="relative h-52 overflow-hidden sm:h-60">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${trip.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07101d] via-black/10 to-black/20" />

                  <span
                    className={`absolute left-4 top-4 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-md ${statusStyles(trip.status)}`}
                  >
                    {trip.status}
                  </span>

                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="flex items-center gap-1.5 text-xs text-white/75">
                      <MapPin className="h-3.5 w-3.5" />
                      {trip.country}
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold text-white">
                      {trip.destination}
                    </h2>
                  </div>
                </div>

                <div className="space-y-5 p-5">
                  <p className="text-sm leading-6 text-slate-400">
                    {trip.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-2.5">
                      <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                      <div>
                        <p className="text-xs text-slate-500">Travel dates</p>
                        <p className="mt-1 text-xs font-medium text-slate-200">
                          {trip.dates}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                      <div>
                        <p className="text-xs text-slate-500">Duration</p>
                        <p className="mt-1 text-xs font-medium text-slate-200">
                          {trip.duration}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Users className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                      <div>
                        <p className="text-xs text-slate-500">Travelers</p>
                        <p className="mt-1 text-xs font-medium text-slate-200">
                          {trip.travelers} travelers
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Compass className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                      <div>
                        <p className="text-xs text-slate-500">Travel style</p>
                        <p className="mt-1 text-xs font-medium text-slate-200">
                          {trip.style}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/8 pt-4">
                    <span className="text-xs text-slate-500">
                      Your next journey awaits
                    </span>

                    <Link
                      href={`/trips/${trip.id}`}
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-indigo-300 transition hover:bg-indigo-400/10 hover:text-indigo-200"
                    >
                      View details
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center rounded-2xl border border-dashed border-white/10 bg-[#0b1422]/60 px-6 py-16 text-center">
            <div className="rounded-2xl bg-indigo-400/10 p-4 text-indigo-300">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">
              No trips found
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
              Try a different search or filter, or create a new trip to
              start planning your next adventure.
            </p>
            <Link
              href="/trips/create"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              <Plus className="h-4 w-4" />
              Create trip
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}