
"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Loader2,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useTrip,
  useUpdateTrip,
} from "@/lib/trip/use-trips";
import type {
  ModeOfTravel,
  UpdateTripRequest,
} from "@/lib/trip/trip-api";

const travelModes: {
  value: ModeOfTravel;
  label: string;
}[] = [
  { value: "BUS", label: "Bus" },
  { value: "TRAIN", label: "Train" },
  { value: "FLIGHT", label: "Flight" },
  { value: "BIKE", label: "Bike" },
  { value: "CAR", label: "Car" },
  { value: "OTHER", label: "Other" },
];

// Convert a backend date into a date-input value
function toDateInput(date: string | undefined): string {
  if (!date) return "";
  return date.slice(0, 10);
}

export default function EditTripPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const tripId = params.id;

  const {
    data: trip,
    isLoading,
    isError,
    error,
  } = useTrip(tripId);

  const updateTrip = useUpdateTrip();

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [modeOfTravel, setModeOfTravel] =
    useState<ModeOfTravel>("CAR");
  const [estimatedCost, setEstimatedCost] = useState("");
  const [description, setDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const [formError, setFormError] = useState("");

  // Populate the form after the trip has been fetched.
  useEffect(() => {
    if (!trip) return;

    setOrigin(trip.origin ?? "");
    setDestination(trip.destination ?? "");
    setStartDate(toDateInput(trip.startDate));
    setEndDate(toDateInput(trip.endDate));
    setTravelers(String(trip.maxTravelers ?? 1));
    setModeOfTravel(trip.modeOfTravel ?? "CAR");
    setEstimatedCost(
      trip.estimatedCost != null
        ? String(trip.estimatedCost)
        : ""
    );
    setDescription(trip.description ?? "");
    setIsPrivate(trip.isPrivate ?? false);
  }, [trip]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    if (!origin.trim() || !destination.trim()) {
      setFormError(
        "Please enter both your starting point and destination."
      );
      return;
    }

    if (!startDate || !endDate) {
      setFormError("Please select your trip dates.");
      return;
    }

    if (new Date(endDate) < new Date(startDate)) {
      setFormError("End date cannot be before the start date.");
      return;
    }

    const travelerCount = Number(travelers);

    if (
      !Number.isInteger(travelerCount) ||
      travelerCount < 1
    ) {
      setFormError("Please enter a valid traveler capacity.");
      return;
    }

    const cost = estimatedCost.trim()
      ? Number(estimatedCost)
      : undefined;

    if (
      cost !== undefined &&
      (!Number.isFinite(cost) || cost < 0)
    ) {
      setFormError("Please enter a valid estimated cost.");
      return;
    }

    const payload: UpdateTripRequest = {
      origin: origin.trim(),
      destination: destination.trim(),
      startDate: `${startDate}T08:00:00`,
      endDate: `${endDate}T22:00:00`,
      modeOfTravel,
      maxTravelers: travelerCount,
      description: description.trim(),
      isPrivate,
      ...(cost !== undefined
        ? { estimatedCost: cost }
        : {}),
    };

    updateTrip.mutate(
      {
        tripId,
        data: payload,
      },
      {
        onSuccess: () => {
          router.push(`/trips/${tripId}`);
        },
        onError: (mutationError) => {
          console.error("Update trip error:", mutationError);

          if (axios.isAxiosError(mutationError)) {
            console.error(
              "Status:",
              mutationError.response?.status
            );
            console.error(
              "Response data:",
              mutationError.response?.data
            );
          }

          setFormError(
            "Trip update failed. Please check your details and try again."
          );
        },
      }
    );
  };

  if (isLoading) {
    return (
      <main className="flex min-h-full items-center justify-center bg-[#050b14] text-white">
        <div className="flex items-center gap-3 text-slate-400">
          <Loader2 className="h-5 w-5 animate-spin text-indigo-400" />
          Loading trip details...
        </div>
      </main>
    );
  }

  if (isError || !trip) {
    return (
      <main className="min-h-full bg-[#050b14] px-6 py-16 text-white">
        <div className="mx-auto max-w-xl rounded-2xl border border-red-400/20 bg-[#0b1422] p-8 text-center">
          <h1 className="text-xl font-semibold">
            Unable to load trip
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            {axios.isAxiosError(error)
              ? error.response?.status === 404
                ? "This trip could not be found."
                : "Something went wrong while fetching the trip."
              : "Please try again later."}
          </p>
          <Link
            href="/trips"
            className="mt-6 inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to trips
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-full bg-[#050b14] text-white">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <Link
          href={`/trips/${tripId}`}
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to trip details
        </Link>

        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-indigo-400">
            <Sparkles className="h-4 w-4" />
            Update your journey
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Edit your trip.
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Make changes to your travel plans. Your updated
            details will be saved to SafarSaathi.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/8 bg-[#0b1422]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8"
          >
            {/* Route */}
            <section>
              <div className="mb-5">
                <h2 className="text-lg font-semibold">
                  Where are you going?
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Update your starting point and destination.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-slate-300">
                    From
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-indigo-400" />
                    <Input
                      value={origin}
                      onChange={(event) =>
                        setOrigin(event.target.value)
                      }
                      placeholder="e.g. Ludhiana"
                      required
                      className="h-12 border-white/10 bg-[#07101c] pl-12 text-white placeholder:text-slate-600 focus-visible:ring-indigo-500/40"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">
                    Destination
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-indigo-400" />
                    <Input
                      value={destination}
                      onChange={(event) =>
                        setDestination(event.target.value)
                      }
                      placeholder="e.g. Manali"
                      required
                      className="h-12 border-white/10 bg-[#07101c] pl-12 text-white placeholder:text-slate-600 focus-visible:ring-indigo-500/40"
                    />
                  </div>
                </div>
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
                  Update your travel dates.
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
                      value={startDate}
                      onChange={(event) =>
                        setStartDate(event.target.value)
                      }
                      required
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
                      value={endDate}
                      min={startDate || undefined}
                      onChange={(event) =>
                        setEndDate(event.target.value)
                      }
                      required
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
                  Update your trip capacity.
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
                    Trip capacity
                  </p>
                </div>

                <Input
                  type="number"
                  min={Math.max(1, trip.currentTravelers)}
                  value={travelers}
                  onChange={(event) =>
                    setTravelers(event.target.value)
                  }
                  required
                  className="w-20 border-white/10 bg-[#0b1422] text-center text-white"
                />
              </div>
            </section>

            <div className="my-8 h-px bg-white/6" />

            {/* Travel mode */}
            <section>
              <div className="mb-5">
                <h2 className="text-lg font-semibold">
                  How will you travel?
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Choose your primary transportation mode.
                </p>
              </div>

              <select
                value={modeOfTravel}
                onChange={(event) =>
                  setModeOfTravel(
                    event.target.value as ModeOfTravel
                  )
                }
                className="h-12 w-full rounded-lg border border-white/10 bg-[#07101c] px-4 text-sm text-white outline-none focus:border-indigo-400/40"
              >
                {travelModes.map((mode) => (
                  <option
                    key={mode.value}
                    value={mode.value}
                  >
                    {mode.label}
                  </option>
                ))}
              </select>
            </section>

            <div className="my-8 h-px bg-white/6" />

            {/* Cost */}
            <section>
              <div className="mb-5">
                <h2 className="text-lg font-semibold">
                  Estimated budget
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Update the estimated total cost.
                </p>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-300">
                  Estimated total cost (₹)
                </Label>
                <Input
                  type="number"
                  min="0"
                  step="1"
                  value={estimatedCost}
                  onChange={(event) =>
                    setEstimatedCost(event.target.value)
                  }
                  placeholder="e.g. 25000"
                  className="h-12 border-white/10 bg-[#07101c] text-white placeholder:text-slate-600 focus-visible:ring-indigo-500/40"
                />
              </div>
            </section>

            <div className="my-8 h-px bg-white/6" />

            {/* Description and privacy */}
            <section className="space-y-5">
              <div className="space-y-2">
                <Label className="text-slate-300">
                  Trip description
                </Label>
                <textarea
                  value={description}
                  onChange={(event) =>
                    setDescription(event.target.value)
                  }
                  maxLength={1000}
                  rows={4}
                  placeholder="Tell potential travel companions a little about your journey..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#07101c] p-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-400/40"
                />
                <p className="text-right text-xs text-slate-500">
                  {description.length}/1000
                </p>
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-[#07101c] p-4">
                <input
                  type="checkbox"
                  checked={isPrivate}
                  onChange={(event) =>
                    setIsPrivate(event.target.checked)
                  }
                  className="mt-1 accent-indigo-500"
                />
                <span>
                  <span className="block text-sm font-medium text-white">
                    Make this trip private
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-slate-500">
                    Private trips are not shown in the public
                    trips endpoint.
                  </span>
                </span>
              </label>
            </section>

            {/* Error */}
            {(formError || updateTrip.isError) && (
              <div
                role="alert"
                className="mt-6 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
              >
                {formError ||
                  "Something went wrong while updating your trip."}
              </div>
            )}

            {/* Actions */}
            <div className="mt-10 flex flex-col-reverse gap-3 border-t border-white/6 pt-6 sm:flex-row sm:justify-end">
              <Link
                href={`/trips/${tripId}`}
                className="inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                Cancel
              </Link>

              <Button
                type="submit"
                disabled={updateTrip.isPending}
                className="h-11 bg-indigo-500 px-6 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400"
              >
                {updateTrip.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving changes...
                  </>
                ) : (
                  <>
                    Save Changes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Side panel */}
          <aside className="h-fit rounded-3xl border border-indigo-400/15 bg-gradient-to-br from-indigo-500/10 via-[#0b1422] to-cyan-500/5 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15">
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </div>

            <h2 className="mt-5 text-lg font-semibold">
              Your journey, your way.
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Keep your trip details up to date so your
              SafarSaathi experience stays aligned with your
              travel plans.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs text-slate-500">
                  Current destination
                </p>
                <p className="mt-1 text-sm font-medium text-slate-200">
                  {trip.destination}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Trip status
                </p>
                <p className="mt-1 text-sm font-medium text-slate-200">
                  {trip.status}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Current travelers
                </p>
                <p className="mt-1 text-sm font-medium text-slate-200">
                  {trip.currentTravelers} / {trip.maxTravelers}
                </p>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-white/8 bg-black/10 p-4">
              <p className="text-xs leading-5 text-slate-500">
                Changes are saved to your trip through the
                Trip Service.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}