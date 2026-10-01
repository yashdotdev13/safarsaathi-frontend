"use client";

import {
  Bell,
  ChevronRight,
  Globe2,
  KeyRound,
  Lock,
  LogOut,
  Moon,
  Palette,
  Save,
  Shield,
  UserRound,
  SlidersHorizontal,
  Trash2,
} from "lucide-react";

const settingsSections = [
  {
    icon: UserRound,
    title: "Account",
    description: "Manage your personal account information.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Control how SafarSaathi keeps you updated.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Manage your privacy and account security.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: SlidersHorizontal,
    title: "Preferences",
    description: "Customize your travel experience.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Header */}
      <div>
        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-indigo-400">
          <SlidersHorizontal className="h-4 w-4" />
          Application settings
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Settings
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          Manage your SafarSaathi account, preferences, privacy, and travel
          experience.
        </p>
      </div>

      {/* Settings overview */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {settingsSections.map((section) => {
          const Icon = section.icon;

          return (
            <button
              key={section.title}
              type="button"
              className="group rounded-2xl border border-white/8 bg-[#0b1422] p-5 text-left transition duration-200 hover:-translate-y-0.5 hover:border-indigo-400/20 hover:bg-[#0d1828]"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${section.bg}`}
                >
                  <Icon className={`h-5 w-5 ${section.color}`} />
                </div>

                <ChevronRight className="h-4 w-4 text-slate-700 transition group-hover:translate-x-0.5 group-hover:text-slate-400" />
              </div>

              <h2 className="mt-5 text-sm font-semibold text-white">
                {section.title}
              </h2>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                {section.description}
              </p>
            </button>
          );
        })}
      </section>

      {/* Account */}
      <section className="rounded-2xl border border-white/8 bg-[#0b1422]">
        <div className="border-b border-white/7 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
              <UserRound className="h-5 w-5 text-indigo-400" />
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Account information
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Update your basic account details.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="full-name"
              className="mb-2 block text-xs font-medium text-slate-400"
            >
              Full name
            </label>

            <input
              id="full-name"
              defaultValue="Yash"
              className="h-11 w-full rounded-xl border border-white/8 bg-[#07101c] px-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-indigo-400/40 focus:ring-2 focus:ring-indigo-500/10"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-medium text-slate-400"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              defaultValue="yash@example.com"
              className="h-11 w-full rounded-xl border border-white/8 bg-[#07101c] px-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-indigo-400/40 focus:ring-2 focus:ring-indigo-500/10"
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="mb-2 block text-xs font-medium text-slate-400"
            >
              Location
            </label>

            <div className="relative">
              <Globe2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />

              <input
                id="location"
                defaultValue="India"
                className="h-11 w-full rounded-xl border border-white/8 bg-[#07101c] pl-10 pr-4 text-sm text-white outline-none transition focus:border-indigo-400/40 focus:ring-2 focus:ring-indigo-500/10"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="account-type"
              className="mb-2 block text-xs font-medium text-slate-400"
            >
              Account type
            </label>

            <div className="flex h-11 items-center rounded-xl border border-white/8 bg-[#07101c] px-4 text-sm text-slate-300">
              Traveler
            </div>
          </div>
        </div>

        <div className="flex justify-end border-t border-white/7 px-6 py-4">
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-indigo-500 px-4 text-sm font-medium text-white shadow-lg shadow-indigo-500/15 transition hover:bg-indigo-400"
          >
            <Save className="h-4 w-4" />
            Save changes
          </button>
        </div>
      </section>

      {/* Preferences */}
      <section className="rounded-2xl border border-white/8 bg-[#0b1422]">
        <div className="border-b border-white/7 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
              <Palette className="h-5 w-5 text-purple-400" />
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Experience preferences
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Customize how SafarSaathi behaves for you.
              </p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-white/6">
          {/* Theme */}
          <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04]">
                <Moon className="h-4 w-4 text-slate-400" />
              </div>

              <div>
                <h3 className="text-sm font-medium text-white">
                  Appearance
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Choose your preferred interface theme.
                </p>
              </div>
            </div>

            <select
              defaultValue="dark"
              className="h-10 rounded-xl border border-white/8 bg-[#07101c] px-3 text-sm text-slate-300 outline-none focus:border-indigo-400/40"
            >
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>

          {/* Language */}
          <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04]">
                <Globe2 className="h-4 w-4 text-slate-400" />
              </div>

              <div>
                <h3 className="text-sm font-medium text-white">
                  Language
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Select the language used across the application.
                </p>
              </div>
            </div>

            <select
              defaultValue="english"
              className="h-10 rounded-xl border border-white/8 bg-[#07101c] px-3 text-sm text-slate-300 outline-none focus:border-indigo-400/40"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>

          {/* AI personalization */}
          <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10">
                <SparklesIcon />
              </div>

              <div>
                <h3 className="text-sm font-medium text-white">
                  AI personalization
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Allow SafarSaathi to personalize recommendations using your
                  travel preferences.
                </p>
              </div>
            </div>

            <Toggle enabled />
          </div>

          {/* Notifications */}
          <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10">
                <Bell className="h-4 w-4 text-indigo-400" />
              </div>

              <div>
                <h3 className="text-sm font-medium text-white">
                  Travel notifications
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Receive important updates about your trips and companions.
                </p>
              </div>
            </div>

            <Toggle enabled />
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="rounded-2xl border border-white/8 bg-[#0b1422]">
        <div className="border-b border-white/7 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
              <Lock className="h-5 w-5 text-emerald-400" />
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Security
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Keep your SafarSaathi account secure.
              </p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-white/6">
          <button
            type="button"
            className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-white/[0.015]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04]">
                <KeyRound className="h-4 w-4 text-slate-400" />
              </div>

              <div>
                <h3 className="text-sm font-medium text-white">
                  Change password
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Update your account password.
                </p>
              </div>
            </div>

            <ChevronRight className="h-4 w-4 text-slate-600" />
          </button>

          <button
            type="button"
            className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-white/[0.015]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04]">
                <Shield className="h-4 w-4 text-slate-400" />
              </div>

              <div>
                <h3 className="text-sm font-medium text-white">
                  Login & security
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Review account access and active sessions.
                </p>
              </div>
            </div>

            <ChevronRight className="h-4 w-4 text-slate-600" />
          </button>
        </div>
      </section>

      {/* Danger zone */}
      <section className="rounded-2xl border border-red-500/10 bg-red-500/[0.02]">
        <div className="border-b border-red-500/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
              <Trash2 className="h-5 w-5 text-red-400" />
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Danger zone
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Irreversible account actions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm font-medium text-white">
              Delete your account
            </h3>

            <p className="mt-1 max-w-xl text-xs leading-5 text-slate-500">
              Permanently remove your account, trips, preferences, and stored
              AI memories.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
          >
            <Trash2 className="h-4 w-4" />
            Delete account
          </button>
        </div>
      </section>

      {/* Logout */}
      <div className="flex justify-center pb-8">
        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-red-400"
        >
          <LogOut className="h-4 w-4" />
          Sign out of SafarSaathi
        </button>
      </div>
    </div>
  );
}

/* Small reusable UI pieces */

function Toggle({ enabled }: { enabled: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={enabled}
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
        enabled ? "bg-indigo-500" : "bg-slate-700"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
          enabled ? "left-6" : "left-1"
        }`}
      />
    </button>
  );
}

function SparklesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4 text-cyan-400"
    >
      <path d="m12 3-1.2 3.8L7 8l3.8 1.2L12 13l1.2-3.8L17 8l-3.8-1.2L12 3Z" />
      <path d="m19 14-.7 2.3L16 17l2.3.7L19 20l.7-2.3L22 17l-2.3-.7L19 14Z" />
      <path d="m5 14-.7 2.3L2 17l2.3.7L5 20l.7-2.3L8 17l-2.3-.7L5 14Z" />
    </svg>
  );
}