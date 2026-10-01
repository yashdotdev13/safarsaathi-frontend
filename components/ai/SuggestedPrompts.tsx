import {
  CalendarDays,
  Compass,
  MapPin,
  Users,
} from "lucide-react";

const prompts = [
  {
    label: "Plan a weekend trip",
    icon: CalendarDays,
  },
  {
    label: "Find places to visit",
    icon: MapPin,
  },
  {
    label: "Create an itinerary",
    icon: Compass,
  },
  {
    label: "Find travel companions",
    icon: Users,
  },
];

export function SuggestedPrompts() {
  return (
    <div className="flex flex-wrap gap-2">
      {prompts.map((prompt) => {
        const Icon = prompt.icon;

        return (
          <button
            key={prompt.label}
            type="button"
            className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.02] px-3 py-2 text-xs text-slate-400 transition-colors hover:border-indigo-400/20 hover:bg-indigo-500/5 hover:text-slate-200"
          >
            <Icon className="h-3.5 w-3.5 text-indigo-400" />
            {prompt.label}
          </button>
        );
      })}
    </div>
  );
}