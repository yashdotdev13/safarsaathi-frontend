import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const trips = [
  {
    destination: "Manali, India",
    dates: "Dec 12 – Dec 17, 2026",
    duration: "5 days",
    status: "Planning",
    image: "/images/dashboard/manali.jpg",
  },
  {
    destination: "Jaipur, India",
    dates: "Jan 08 – Jan 11, 2027",
    duration: "3 days",
    status: "Upcoming",
    image: "/images/dashboard/jaipur.jpg",
  },
];

export function UpcomingTrips() {
  return (
    <section className="mt-10">
      {/* Section heading */}
      <div className="mb-5 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Upcoming trips
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your next adventures are waiting.
          </p>
        </div>

        <Button
          variant="ghost"
          size="sm"
          nativeButton={false}
          className="gap-1.5 text-slate-400 hover:bg-white/5 hover:text-white"
          render={<Link href="/trips" />}
        >
          View all
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Trip cards */}
      <div className="grid gap-5 lg:grid-cols-2">
        {trips.map((trip) => (
          <div
            key={trip.destination}
            className="group overflow-hidden rounded-2xl border border-white/8 bg-[#0b1422] transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/15"
          >
            <div className="flex min-h-[190px]">
              {/* Image */}
              <div className="relative w-[38%] shrink-0 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${trip.image}')`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0b1422]/60" />

                <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
                  {trip.status}
                </span>
              </div>

              {/* Content */}
              <div className="flex min-w-0 flex-1 flex-col justify-between p-5">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-semibold text-white">
                        {trip.destination}
                      </h3>

                      <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                        <MapPin className="h-3.5 w-3.5 text-indigo-400" />
                        India
                      </div>
                    </div>

                    <button
                      type="button"
                      aria-label={`More options for ${trip.destination}`}
                      className="shrink-0 rounded-lg p-1.5 text-slate-500 hover:bg-white/5 hover:text-white"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <CalendarDays className="h-3.5 w-3.5 text-slate-500" />
                      {trip.dates}
                    </div>

                    <p className="text-xs text-slate-500">
                      {trip.duration}
                    </p>
                  </div>
                </div>

                <Link
                  href="/trips"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  View trip
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}