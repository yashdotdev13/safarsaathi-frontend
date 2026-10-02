
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Compass,
  MapPin,
  Plus,
  Search,
  Users,
  Wallet,
  RefreshCw,
} from "lucide-react";

import { tripApi, type Trip } from "@/lib/trip/trip-api";

const filters = [
  "All",
  "Planning",
  "Upcoming",
  "Ongoing",
  "Completed",
  "Cancelled",
];

const FALLBACK_IMAGE = "/images/dashboard/manali.jpg";

// Use images already available in the public directory.
// Add more destinations here as you add matching image files.
const destinationImages: Record<string, string> = {
  manali: "/images/dashboard/manali.jpg",
  jaipur: "/images/dashboard/jaipur.jpg",
  goa: "/images/dashboard/goa.jpg",
};

function getDestinationImage(destination: string): string {
  return (
    destinationImages[destination.trim().toLowerCase()] ??
    FALLBACK_IMAGE
  );
}

function getTripStatus(trip: Trip): string {
  switch (trip.status) {
    case "ONGOING":
      return "Ongoing";
    case "COMPLETED":
      return "Completed";
    case "CANCELLED":
      return "Cancelled";
    case "PLANNED": {
      const startDate = new Date(trip.startDate);
      const now = new Date();

      return startDate > now ? "Upcoming" : "Planning";
    }
    default:
      return "Planning";
  }
}

function statusStyles(status: string): string {
  switch (status) {
    case "Upcoming":
      return "border-cyan-400/20 bg-cyan-400/10 text-cyan-300";
    case "Ongoing":
      return "border-indigo-400/20 bg-indigo-400/10 text-indigo-300";
    case "Completed":
      return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
    case "Cancelled":
      return "border-red-400/20 bg-red-400/10 text-red-300";
    default:
      return "border-amber-400/20 bg-amber-400/10 text-amber-300";
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "Date unavailable";
  }

  return new Intl.DateTimeFormat("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function getDateRange(startDate: string, endDate: string): string {
  return `${formatDate(startDate)} – ${formatDate(endDate)}`;
}

function getDuration(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return "N/A";
  }

  const days = Math.max(
    1,
    Math.ceil(
      (Date.UTC(
        end.getFullYear(),
        end.getMonth(),
        end.getDate()
      ) -
        Date.UTC(
          start.getFullYear(),
          start.getMonth(),
          start.getDate()
        )) /
        (1000 * 60 * 60 * 24)
    )
  );

  return `${days} ${days === 1 ? "day" : "days"}`;
}

function getTravelStyle(mode: Trip["modeOfTravel"]): string {
  const labels: Record<Trip["modeOfTravel"], string> = {
    BUS: "Bus",
    TRAIN: "Train",
    FLIGHT: "Flight",
    BIKE: "Bike",
    CAR: "Car",
    OTHER: "Other",
  };

  return labels[mode] ?? "Other";
}

export default function TripsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: trips = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["my-trips"],
    queryFn: tripApi.getMyTrips,
  });

  const tripsWithStatus = useMemo(
    () =>
      trips.map((trip) => ({
        ...trip,
        displayStatus: getTripStatus(trip),
      })),
    [trips]
  );

  const filteredTrips = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return tripsWithStatus.filter((trip) => {
      const matchesFilter =
        activeFilter === "All" ||
        trip.displayStatus === activeFilter;

      const matchesSearch =
        !query ||
        trip.destination.toLowerCase().includes(query) ||
        trip.origin.toLowerCase().includes(query) ||
        trip.description?.toLowerCase().includes(query) ||
        getTravelStyle(trip.modeOfTravel)
          .toLowerCase()
          .includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [tripsWithStatus, activeFilter, searchQuery]);

  const planningCount = tripsWithStatus.filter(
    (trip) => trip.displayStatus === "Planning"
  ).length;

  const upcomingCount = tripsWithStatus.filter(
    (trip) => trip.displayStatus === "Upcoming"
  ).length;

  const ongoingCount = tripsWithStatus.filter(
    (trip) => trip.displayStatus === "Ongoing"
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
            Organize your journeys, manage your plans, and get ready
            for your next adventure.
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
        <SummaryCard
          label="Total trips"
          value={isLoading ? "—" : trips.length}
          description="Across all your journeys"
          icon={<Compass className="h-4 w-4" />}
          iconClass="bg-indigo-400/10 text-indigo-300"
        />

        <SummaryCard
          label="In planning"
          value={isLoading ? "—" : planningCount}
          description="Adventures being organized"
          icon={<CalendarDays className="h-4 w-4" />}
          iconClass="bg-amber-400/10 text-amber-300"
        />

        <SummaryCard
          label="Upcoming"
          value={isLoading ? "—" : upcomingCount}
          description="Future trips on your calendar"
          icon={<Clock3 className="h-4 w-4" />}
          iconClass="bg-cyan-400/10 text-cyan-300"
        />
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

        {/* Loading state */}
        {isLoading && (
          <div className="grid gap-5 xl:grid-cols-2">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="animate-pulse overflow-hidden rounded-2xl border border-white/8 bg-[#0b1422]"
              >
                <div className="h-52 bg-white/5 sm:h-60" />
                <div className="space-y-4 p-5">
                  <div className="h-4 w-2/3 rounded bg-white/5" />
                  <div className="h-4 w-1/2 rounded bg-white/5" />
                  <div className="h-16 rounded bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {isError && !isLoading && (
          <div className="flex flex-col items-center rounded-2xl border border-red-400/20 bg-[#0b1422] px-6 py-12 text-center">
            <div className="rounded-2xl bg-red-400/10 p-4 text-red-300">
              <RefreshCw className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">
              Couldn't load your trips
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
              {error instanceof Error
                ? error.message
                : "Something went wrong while fetching your trips."}
            </p>

            <button
              type="button"
              onClick={() => refetch()}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              <RefreshCw className="h-4 w-4" />
              Try again
            </button>
          </div>
        )}

        {/* Trip cards */}
        {!isLoading && !isError && filteredTrips.length > 0 && (
          <div className="grid gap-5 xl:grid-cols-2">
            {filteredTrips.map((trip) => (
              <article
                key={trip.id}
                className="group overflow-hidden rounded-2xl border border-white/8 bg-[#0b1422] transition duration-300 hover:-translate-y-0.5 hover:border-indigo-400/20"
              >
                {/* Destination image */}
                <div className="relative h-52 overflow-hidden sm:h-60">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url("${getDestinationImage(
                        trip.destination
                      )}")`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07101d] via-black/10 to-black/20" />

                  <span
                    className={`absolute left-4 top-4 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-md ${statusStyles(
                      trip.displayStatus
                    )}`}
                  >
                    {trip.displayStatus}
                  </span>

                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="flex items-center gap-1.5 text-xs text-white/75">
                      <MapPin className="h-3.5 w-3.5" />
                      {trip.origin} to {trip.destination}
                    </p>

                    <h2 className="mt-1 text-2xl font-semibold text-white">
                      {trip.destination}
                    </h2>
                  </div>
                </div>

                {/* Trip details */}
                <div className="space-y-5 p-5">
                  <p className="text-sm leading-6 text-slate-400">
                    {trip.description ||
                      `Your journey from ${trip.origin} to ${trip.destination}.`}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <DetailItem
                      icon={<CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />}
                      label="Travel dates"
                      value={getDateRange(
                        trip.startDate,
                        trip.endDate
                      )}
                    />

                    <DetailItem
                      icon={<Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />}
                      label="Duration"
                      value={getDuration(
                        trip.startDate,
                        trip.endDate
                      )}
                    />

                    <DetailItem
                      icon={<Users className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />}
                      label="Travelers"
                      value={`${trip.currentTravelers} / ${trip.maxTravelers}`}
                    />

                    <DetailItem
                      icon={<Compass className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />}
                      label="Travel mode"
                      value={getTravelStyle(trip.modeOfTravel)}
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-white/8 pt-4">
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Wallet className="h-3.5 w-3.5" />
                      {trip.estimatedCost != null
                        ? `₹${trip.estimatedCost.toLocaleString("en-IN")}`
                        : "Budget not set"}
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
        )}

        {/* Empty state */}
        {!isLoading && !isError && filteredTrips.length === 0 && (
          <div className="flex flex-col items-center rounded-2xl border border-dashed border-white/10 bg-[#0b1422]/60 px-6 py-16 text-center">
            <div className="rounded-2xl bg-indigo-400/10 p-4 text-indigo-300">
              <Compass className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">
              {trips.length === 0
                ? "No trips yet"
                : "No trips found"}
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
              {trips.length === 0
                ? "Your next adventure starts here. Create your first trip and begin planning."
                : "Try a different search or filter to find your journeys."}
            </p>

            {trips.length === 0 && (
              <Link
                href="/trips/create"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
              >
                <Plus className="h-4 w-4" />
                Create trip
              </Link>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  description,
  icon,
  iconClass,
}: {
  label: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  iconClass: string;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[#0b1422] p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">{label}</p>
        <div className={`rounded-xl p-2.5 ${iconClass}`}>
          {icon}
        </div>
      </div>

      <p className="mt-4 text-3xl font-semibold text-white">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {description}
      </p>
    </div>
  );
}

function DetailItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-w-0 items-start gap-2.5">
      {icon}
      <div className="min-w-0">
        <p className="text-xs text-slate-500">{label}</p>
        <p className="mt-1 break-words text-xs font-medium text-slate-200">
          {value}
        </p>
      </div>
    </div>
  );
}