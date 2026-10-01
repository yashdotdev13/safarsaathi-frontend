"use client";

import {
  Bell,
  Check,
  CheckCheck,
  ChevronRight,
  Clock3,
  MapPin,
  Sparkles,
  Users,
  X,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "ai",
    icon: Sparkles,
    title: "Your Manali itinerary is ready",
    description:
      "SafarSaathi has prepared personalized recommendations for your upcoming Manali adventure.",
    time: "10 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "companion",
    icon: Users,
    title: "New travel companion match",
    description:
      "Someone with similar travel interests may be a great match for your upcoming trip.",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 3,
    type: "trip",
    icon: MapPin,
    title: "Your Jaipur trip is coming up",
    description:
      "Your Jaipur adventure starts in 100 days. Review your trip details and itinerary.",
    time: "Yesterday",
    unread: true,
  },
  {
    id: 4,
    type: "reminder",
    icon: Clock3,
    title: "Complete your travel profile",
    description:
      "Adding more interests helps SafarSaathi provide better travel recommendations.",
    time: "2 days ago",
    unread: false,
  },
  {
    id: 5,
    type: "ai",
    icon: Sparkles,
    title: "New destination recommendations",
    description:
      "We've found destinations that match your love for mountains and adventure.",
    time: "3 days ago",
    unread: false,
  },
  {
    id: 6,
    type: "companion",
    icon: Users,
    title: "Your companion preferences were updated",
    description:
      "Your latest travel preferences have been incorporated into companion matching.",
    time: "5 days ago",
    unread: false,
  },
];

const typeStyles = {
  ai: {
    bg: "bg-indigo-500/10",
    icon: "text-indigo-400",
  },
  companion: {
    bg: "bg-emerald-500/10",
    icon: "text-emerald-400",
  },
  trip: {
    bg: "bg-cyan-500/10",
    icon: "text-cyan-400",
  },
  reminder: {
    bg: "bg-amber-500/10",
    icon: "text-amber-400",
  },
};

export default function NotificationsPage() {
  const unreadCount = notifications.filter(
    (notification) => notification.unread,
  ).length;

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-indigo-400">
            <Bell className="h-4 w-4" />
            Stay updated
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Notifications
            </h1>

            {unreadCount > 0 && (
              <span className="rounded-full border border-indigo-400/15 bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold text-indigo-300">
                {unreadCount} new
              </span>
            )}
          </div>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Keep track of trip updates, AI recommendations, companion matches,
            and other activity from SafarSaathi.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
        >
          <CheckCheck className="h-4 w-4" />
          Mark all as read
        </button>
      </div>

      {/* Notification summary */}
      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/8 bg-[#0b1422] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">All notifications</p>

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10">
              <Bell className="h-4 w-4 text-indigo-400" />
            </div>
          </div>

          <p className="mt-4 text-2xl font-bold text-white">
            {notifications.length}
          </p>

          <p className="mt-1 text-xs text-slate-600">
            Total activity
          </p>
        </div>

        <div className="rounded-2xl border border-white/8 bg-[#0b1422] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Unread</p>

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10">
              <Sparkles className="h-4 w-4 text-cyan-400" />
            </div>
          </div>

          <p className="mt-4 text-2xl font-bold text-white">
            {unreadCount}
          </p>

          <p className="mt-1 text-xs text-slate-600">
            Needs your attention
          </p>
        </div>

        <div className="rounded-2xl border border-white/8 bg-[#0b1422] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">This week</p>

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10">
              <Check className="h-4 w-4 text-emerald-400" />
            </div>
          </div>

          <p className="mt-4 text-2xl font-bold text-white">5</p>

          <p className="mt-1 text-xs text-slate-600">
            Recent updates
          </p>
        </div>
      </section>

      {/* Main notification panel */}
      <section className="overflow-hidden rounded-2xl border border-white/8 bg-[#0b1422]">
        {/* Panel header */}
        <div className="flex flex-col gap-4 border-b border-white/7 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-semibold text-white">
              Recent notifications
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Your latest SafarSaathi activity
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-300"
            >
              All
            </button>

            <button
              type="button"
              className="rounded-lg px-3 py-1.5 text-xs font-medium text-slate-500 transition hover:bg-white/5 hover:text-slate-300"
            >
              Unread
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="divide-y divide-white/6">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            const styles = typeStyles[notification.type as keyof typeof typeStyles];

            return (
              <div
                key={notification.id}
                className={`group relative flex gap-4 px-6 py-5 transition hover:bg-white/[0.015] ${
                  notification.unread ? "bg-indigo-500/[0.015]" : ""
                }`}
              >
                {/* Unread indicator */}
                {notification.unread && (
                  <span className="absolute left-2 top-8 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                )}

                {/* Icon */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${styles.bg}`}
                >
                  <Icon className={`h-5 w-5 ${styles.icon}`} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <h3
                      className={`text-sm font-semibold ${
                        notification.unread
                          ? "text-white"
                          : "text-slate-300"
                      }`}
                    >
                      {notification.title}
                    </h3>

                    <span className="shrink-0 text-xs text-slate-600">
                      {notification.time}
                    </span>
                  </div>

                  <p className="mt-1.5 max-w-3xl text-xs leading-5 text-slate-500">
                    {notification.description}
                  </p>

                  <button
                    type="button"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-indigo-400 opacity-90 transition hover:text-indigo-300"
                  >
                    View details
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Actions */}
                <div className="hidden shrink-0 items-start gap-1 sm:flex">
                  {notification.unread && (
                    <button
                      type="button"
                      aria-label="Mark as read"
                      className="rounded-lg p-2 text-slate-600 transition hover:bg-white/5 hover:text-emerald-400"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                  )}

                  <button
                    type="button"
                    aria-label="Dismiss notification"
                    className="rounded-lg p-2 text-slate-600 transition hover:bg-red-500/10 hover:text-red-400"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t border-white/7 px-6 py-4 text-center">
          <button
            type="button"
            className="text-xs font-medium text-slate-500 transition hover:text-indigo-400"
          >
            View notification history
          </button>
        </div>
      </section>

      {/* Notification preferences */}
      <section className="rounded-2xl border border-white/8 bg-[#0b1422] p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
                <Bell className="h-5 w-5 text-purple-400" />
              </div>

              <div>
                <h2 className="font-semibold text-white">
                  Notification preferences
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Choose what SafarSaathi should notify you about.
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-xs font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            Manage preferences
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
}