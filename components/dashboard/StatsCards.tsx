import {
  Brain,
  Map,
  MapPin,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Trips",
    value: "04",
    change: "+2 this year",
    icon: Map,
    iconClass: "text-indigo-400",
    bgClass: "bg-indigo-500/10",
  },
  {
    title: "Places Explored",
    value: "12",
    change: "+5 this year",
    icon: MapPin,
    iconClass: "text-cyan-400",
    bgClass: "bg-cyan-500/10",
  },
  {
    title: "Travel Companions",
    value: "08",
    change: "+3 this month",
    icon: Users,
    iconClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10",
  },
  {
    title: "AI Memories",
    value: "06",
    change: "Recently updated",
    icon: Brain,
    iconClass: "text-purple-400",
    bgClass: "bg-purple-500/10",
  },
];

export function StatsCards() {
  return (
    <section className="mt-8">

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-white">
          Your travel overview
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          A quick look at your SafarSaathi journey.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="group rounded-2xl border border-white/8 bg-[#0b1422]/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/15 hover:bg-[#0e1929]"
            >
              <div className="flex items-start justify-between">

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.bgClass}`}
                >
                  <Icon
                    className={`h-5 w-5 ${stat.iconClass}`}
                  />
                </div>

                <span className="text-xs text-slate-600">
                  This year
                </span>

              </div>

              <div className="mt-5">

                <p className="text-3xl font-bold tracking-tight text-white">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm font-medium text-slate-300">
                  {stat.title}
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  {stat.change}
                </p>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}