
"use client";

import { useParams } from "next/navigation";
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
  Wallet,
  Loader2,
  Plane,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { tripApi } from "@/lib/trip/trip-api";
import type { Trip } from "@/lib/trip/trip-api";

// Destination images. Add more destinations here as needed.
const destinationImages: Record<string, string> = {
  manali:
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=85",
  kasol:
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=85",
  jaipur:
    "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=1600&q=85",
  goa:
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1600&q=85",
  srinagar:
    "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1600&q=85",
  ladakh:
    "https://images.unsplash.com/photo-1566837497312-7be4a7a5c7b0?w=1600&q=85",
};

const fallbackImage =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=85";

function getDestinationImage(destination: string) {
  const normalized = destination.trim().toLowerCase();

  return (
    destinationImages[normalized] ??
    fallbackImage
  );
}

function formatDate(date: string) {
  if (!date) return "Not specified";

  const parsed = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function calculateDuration(startDate: string, endDate: string) {
  if (!startDate || !endDate) return 0;

  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);

  if (
    Number.isNaN(start.getTime()) ||
    Number.isNaN(end.getTime()) ||
    end < start
  ) {
    return 0;
  }

  const difference = end.getTime() - start.getTime();

  return Math.floor(difference / (1000 * 60 * 60 * 24)) + 1;
}

function formatCurrency(amount?: number) {
  if (amount === undefined || amount === null) {
    return "Not specified";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function getStatusLabel(status: Trip["status"]) {
  switch (status) {
    case "PLANNED":
      return "Planning";
    case "ONGOING":
      return "Ongoing";
    case "COMPLETED":
      return "Completed";
    case "CANCELLED":
      return "Cancelled";
    default:
      return status;
  }
}

function getStatusStyles(status: Trip["status"]) {
  switch (status) {
    case "PLANNED":
      return "border-amber-300/20 bg-amber-500/10 text-amber-300";
    case "ONGOING":
      return "border-cyan-300/20 bg-cyan-500/10 text-cyan-300";
    case "COMPLETED":
      return "border-emerald-300/20 bg-emerald-500/10 text-emerald-300";
    case "CANCELLED":
      return "border-red-300/20 bg-red-500/10 text-red-300";
    default:
      return "border-white/10 bg-white/5 text-slate-300";
  }
}

function getTravelModeLabel(mode: Trip["modeOfTravel"]) {
  const labels: Record<Trip["modeOfTravel"], string> = {
    BUS: "Bus",
    TRAIN: "Train",
    FLIGHT: "Flight",
    BIKE: "Bike",
    CAR: "Car",
    OTHER: "Other",
  };

  return labels[mode] ?? mode;
}

function SummaryCard({
  label,
  value,
  icon: Icon,
  iconClass,
  bgClass,
}: {
  label: string;
  value: string;
  icon: React.ElementType;
  iconClass: string;
  bgClass: string;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[#0b1422] p-5">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${bgClass}`}
      >
        <Icon className={`h-5 w-5 ${iconClass}`} />
      </div>

      <p className="mt-4 text-xs text-slate-500">{label}</p>
      <p className="mt-1 break-words text-sm font-semibold text-white">
        {value}
      </p>
    </div>
  );
}

export default function TripDetailsPage() {
  const params = useParams<{ id: string }>();
  const tripId = params.id;

  const {
    data: trip,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["trip", tripId],
    queryFn: () => tripApi.getTripById(tripId),
    enabled: Boolean(tripId),
  });

  if (isLoading) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#050b14] text-white">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-400" />
          <p className="text-sm text-slate-400">
            Loading your trip...
          </p>
        </div>
      </main>
    );
  }

  if (isError || !trip) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#050b14] px-6 text-white">
        <div className="max-w-md rounded-3xl border border-white/10 bg-[#0b1422] p-8 text-center">
          <AlertCircle className="mx-auto h-10 w-10 text-red-400" />

          <h1 className="mt-4 text-xl font-semibold">
            Unable to load trip
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            {error instanceof Error
              ? error.message
              : "We couldn't find this trip. Please try again."}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              type="button"
              onClick={() => refetch()}
              className="bg-indigo-500 text-white hover:bg-indigo-400"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try again
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white/10 bg-transparent text-slate-300 hover:bg-white/5 hover:text-white"
            >
              <Link href="/trips">Back to trips</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const duration = calculateDuration(trip.startDate, trip.endDate);
  const image = getDestinationImage(trip.destination);

  return (
    <main className="min-h-full bg-[#050b14] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Top navigation */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link
            href="/trips"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to trips
          </Link>

          <Button
            asChild
            type="button"
            variant="outline"
            className="border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/10 hover:text-white"
          >
            <Link href={`/trips/${trip.id}/edit`}>
              <Edit3 className="mr-2 h-4 w-4" />
              Edit Trip
            </Link>
          </Button>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10">
          <div
            className="h-[320px] bg-cover bg-center sm:h-[400px]"
            style={{ backgroundImage: `url("${image}")` }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#020611] via-[#020611]/35 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
            <div
              className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-md ${getStatusStyles(
                trip.status
              )}`}
            >
              <span className="h-2 w-2 rounded-full bg-current" />
              {getStatusLabel(trip.status)}
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              {trip.destination}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-indigo-400" />
                {formatDate(trip.startDate)} – {formatDate(trip.endDate)}
              </span>

              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-indigo-400" />
                {trip.origin} to {trip.destination}
              </span>
            </div>
          </div>
        </section>

        {/* Trip summary */}
        <section className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            label="Duration"
            value={`${duration} ${duration === 1 ? "day" : "days"}`}
            icon={Clock3}
            iconClass="text-indigo-400"
            bgClass="bg-indigo-500/10"
          />

          <SummaryCard
            label="Travelers"
            value={`${trip.currentTravelers} / ${trip.maxTravelers} people`}
            icon={Users}
            iconClass="text-cyan-400"
            bgClass="bg-cyan-500/10"
          />

          <SummaryCard
            label="Travel mode"
            value={getTravelModeLabel(trip.modeOfTravel)}
            icon={Plane}
            iconClass="text-emerald-400"
            bgClass="bg-emerald-500/10"
          />

          <SummaryCard
            label="Estimated cost"
            value={formatCurrency(trip.estimatedCost)}
            icon={Wallet}
            iconClass="text-purple-400"
            bgClass="bg-purple-500/10"
          />
        </section>

        {/* Main content */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          {/* Trip information */}
          <section className="rounded-3xl border border-white/8 bg-[#0b1422]/80 p-6 sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                Your journey
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Trip overview
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Your trip information and travel plans.
              </p>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/7 bg-[#07101c] p-5">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  Starting point
                </div>
                <p className="mt-3 text-lg font-semibold">
                  {trip.origin}
                </p>
              </div>

              <div className="rounded-2xl border border-white/7 bg-[#07101c] p-5">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  Destination
                </div>
                <p className="mt-3 text-lg font-semibold">
                  {trip.destination}
                </p>
              </div>

              <div className="rounded-2xl border border-white/7 bg-[#07101c] p-5">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CalendarDays className="h-4 w-4 text-indigo-400" />
                  Departure
                </div>
                <p className="mt-3 text-sm font-semibold">
                  {formatDate(trip.startDate)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/7 bg-[#07101c] p-5">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CalendarDays className="h-4 w-4 text-indigo-400" />
                  Return
                </div>
                <p className="mt-3 text-sm font-semibold">
                  {formatDate(trip.endDate)}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-white/8 pt-6">
              <h3 className="text-lg font-semibold">
                Trip description
              </h3>

              <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-400">
                {trip.description?.trim() ||
                  "No description has been added to this trip yet."}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/8 pt-6 text-sm">
              <span className="text-slate-500">Visibility:</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
                {trip.isPrivate ? "Private trip" : "Public trip"}
              </span>
            </div>
          </section>

          {/* AI panel */}
          <aside className="space-y-5">
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
                Ask SafarSaathi to create an itinerary, discover places,
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

            {/* Itinerary placeholder */}
            <div className="rounded-3xl border border-white/8 bg-[#0b1422] p-6">
              <div className="flex items-center gap-2">
                <Mountain className="h-4 w-4 text-amber-400" />
                <h2 className="font-semibold">Trip itinerary</h2>
              </div>

              <div className="mt-5 rounded-2xl border border-dashed border-white/10 bg-[#07101c] p-5 text-center">
                <Sparkles className="mx-auto h-6 w-6 text-indigo-400" />

                <p className="mt-3 text-sm font-medium text-white">
                  Your itinerary is waiting
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Generate a personalized day-by-day plan with the AI
                  Travel Assistant.
                </p>

                <Link
                  href="/ai"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-indigo-300 transition-colors hover:text-indigo-200"
                >
                  Create itinerary
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}