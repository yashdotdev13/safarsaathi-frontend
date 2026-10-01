import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Star,
} from "lucide-react";

const destinations = [
  {
    name: "Goa",
    country: "India",
    description: "Beaches, sunsets, nightlife and coastal escapes.",
    image: "/images/dashboard/goa.jpg",
    rating: "4.8",
    tag: "Beach Escape",
  },
  {
    name: "Kasol",
    country: "India",
    description: "Mountains, rivers and peaceful Himalayan adventures.",
    image: "/images/dashboard/kasol.webp",
    rating: "4.7",
    tag: "Mountain Escape",
  },
  {
    name: "Rishikesh",
    country: "India",
    description: "Adventure, spirituality and unforgettable river views.",
    image: "/images/dashboard/rishikesh.jpg",
    rating: "4.8",
    tag: "Adventure",
  },
];

export function RecommendedDestinations() {
  return (
    <section className="mt-10">
      {/* =====================================================
          SECTION HEADER
          ===================================================== */}

      <div className="mb-5 flex items-end justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-400">
            Explore more
          </p>

          <h2 className="mt-2 text-lg font-semibold text-white">
            Recommended for you
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Destinations selected based on your travel interests.
          </p>
        </div>

        <Link
          href="/trips"
          className="hidden items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-white sm:inline-flex"
        >
          Explore all
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* =====================================================
          DESTINATION CARDS
          ===================================================== */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {destinations.map((destination) => (
          <Link
            key={destination.name}
            href="/trips"
            className="group overflow-hidden rounded-2xl border border-white/8 bg-[#0b1422] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:shadow-xl hover:shadow-indigo-950/20"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${destination.image}')`,
                }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/90 via-[#050b14]/10 to-transparent" />

              {/* Tag */}
              <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                {destination.tag}
              </div>

              {/* Rating */}
              <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-2.5 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                {destination.rating}
              </div>

              {/* Destination name on image */}
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-semibold text-white">
                  {destination.name}
                </h3>

                <div className="mt-1 flex items-center gap-1.5 text-xs text-white/70">
                  <MapPin className="h-3.5 w-3.5" />
                  {destination.country}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-sm leading-6 text-slate-400">
                {destination.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Recommended for you
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 transition-colors group-hover:text-indigo-300">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile view-all */}
      <div className="mt-4 sm:hidden">
        <Link
          href="/trips"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400"
        >
          Explore all destinations
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}