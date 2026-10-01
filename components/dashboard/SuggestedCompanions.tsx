import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Sparkles,
  UserRound,
} from "lucide-react";

const companions = [
  {
    name: "Alex Sharma",
    initials: "AS",
    role: "Adventure seeker",
    location: "Mumbai",
    destination: "Manali",
    match: "92%",
    description: "Mountain lover • Photography • Hiking",
  },
  {
    name: "Priya Mehta",
    initials: "PM",
    role: "Explorer",
    location: "Delhi",
    destination: "Jaipur",
    match: "87%",
    description: "Culture • Food • Weekend trips",
  },
  {
    name: "Rahul Verma",
    initials: "RV",
    role: "Solo traveler",
    location: "Pune",
    destination: "Goa",
    match: "84%",
    description: "Beaches • Adventure • Road trips",
  },
];

export function SuggestedCompanions() {
  return (
    <section className="mt-10 pb-10">
      {/* =====================================================
          SECTION HEADER
          ===================================================== */}

      <div className="mb-5 flex items-end justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-400">
            Meet travelers
          </p>

          <h2 className="mt-2 text-lg font-semibold text-white">
            Suggested companions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Travelers who share your interests and destinations.
          </p>
        </div>

        <Link
          href="/companions"
          className="hidden items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-white sm:inline-flex"
        >
          Find companions
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* =====================================================
          COMPANION CARDS
          ===================================================== */}

      <div className="grid gap-4 lg:grid-cols-3">
        {companions.map((companion) => (
          <div
            key={companion.name}
            className="group rounded-2xl border border-white/8 bg-[#0b1422]/80 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/15 hover:bg-[#0e1929]"
          >
            {/* Top */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/80 to-purple-600/80 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30">
                  {companion.initials}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {companion.name}
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {companion.role}
                  </p>
                </div>
              </div>

              {/* Match */}
              <div className="flex items-center gap-1 rounded-full border border-emerald-400/10 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                <Sparkles className="h-3 w-3" />
                {companion.match}
              </div>
            </div>

            {/* Match label */}
            <p className="mt-3 text-[11px] text-slate-600">
              compatibility match
            </p>

            {/* Details */}
            <div className="mt-5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-indigo-400" />
                From {companion.location}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <UserRound className="h-3.5 w-3.5 text-cyan-400" />
                Traveling to {companion.destination}
              </div>
            </div>

            {/* Interests */}
            <div className="mt-4 rounded-xl border border-white/6 bg-white/[0.02] px-3 py-2.5">
              <p className="text-xs leading-5 text-slate-500">
                {companion.description}
              </p>
            </div>

            {/* Action */}
            <Link
              href="/companions"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
            >
              View profile
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-4 sm:hidden">
        <Link
          href="/companions"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400"
        >
          Find travel companions
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}