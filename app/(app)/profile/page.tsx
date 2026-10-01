"use client";

import {
  Camera,
  Check,
  Compass,
  Edit3,
  Heart,
  MapPin,
  Mountain,
  Plane,
  Save,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";

import { useState } from "react";

const interests = [
  "Nature",
  "Mountains",
  "Beaches",
  "Food",
  "Photography",
  "Adventure",
  "Culture",
  "Nightlife",
  "Spirituality",
  "Shopping",
];

const destinations = [
  "Manali",
  "Goa",
  "Jaipur",
  "Rishikesh",
];

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState("Yash");
  const [email, setEmail] = useState("yash@example.com");
  const [location, setLocation] = useState("India");
  const [bio, setBio] = useState(
    "Adventure seeker who loves discovering new places, meeting people, and creating unforgettable travel experiences."
  );

  const [selectedInterests, setSelectedInterests] = useState([
    "Nature",
    "Mountains",
    "Photography",
    "Adventure",
  ]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest]
    );
  };

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <main className="min-h-full">
      {/* =====================================================
          PAGE HEADER
          ===================================================== */}

      <section className="border-b border-white/6">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-indigo-400">
                <UserRound className="h-4 w-4" />
                Personal profile
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your profile.
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Manage your personal information and travel preferences.
              </p>
            </div>

            {!editing ? (
              <button
                type="button"
                onClick={() => setEditing(true)}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-colors hover:bg-indigo-400"
              >
                <Edit3 className="h-4 w-4" />
                Edit Profile
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  <X className="h-4 w-4" />
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex h-10 items-center gap-2 rounded-xl bg-indigo-500 px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-colors hover:bg-indigo-400"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          {/* =====================================================
              LEFT PROFILE CARD
              ===================================================== */}

          <div className="space-y-6">
            <section className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#0b1422]">
              {/* Glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-[100px]" />

              <div className="relative p-6">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}

                  <div className="relative">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 text-3xl font-bold text-white shadow-2xl shadow-indigo-500/20">
                      Y
                    </div>

                    {editing && (
                      <button
                        type="button"
                        className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-4 border-[#0b1422] bg-indigo-500 text-white shadow-lg"
                      >
                        <Camera className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  <h2 className="mt-5 text-xl font-semibold text-white">
                    {name}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Traveler
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-sm text-slate-400">
                    <MapPin className="h-4 w-4 text-indigo-400" />
                    {location}
                  </div>
                </div>

                {/* Stats */}

                <div className="mt-7 grid grid-cols-3 divide-x divide-white/8 border-y border-white/8 py-5">
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">04</p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      Trips
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-xl font-bold text-white">08</p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      Companions
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-xl font-bold text-white">12</p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      Places
                    </p>
                  </div>
                </div>

                {/* Member */}

                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  SafarSaathi traveler
                </div>
              </div>
            </section>

            {/* Travel style */}

            <section className="rounded-2xl border border-white/8 bg-[#0b1422] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10">
                  <Mountain className="h-5 w-5 text-emerald-400" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Travel style
                  </h3>

                  <p className="text-xs text-slate-500">
                    Your preferred way to explore
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-indigo-400/20 bg-indigo-500/10 p-4">
                <p className="text-sm font-semibold text-indigo-300">
                  Adventure
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  You enjoy outdoor activities, mountains, nature,
                  exploration, and active experiences.
                </p>
              </div>
            </section>
          </div>

          {/* =====================================================
              RIGHT CONTENT
              ===================================================== */}

          <div className="space-y-6">
            {/* Personal information */}

            <section className="rounded-2xl border border-white/8 bg-[#0b1422] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
                  <UserRound className="h-5 w-5 text-indigo-400" />
                </div>

                <div>
                  <h2 className="font-semibold text-white">
                    Personal information
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Your basic account information
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-400">
                    Full name
                  </label>

                  {editing ? (
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="h-11 w-full rounded-xl border border-white/10 bg-[#08111e] px-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-400/40 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  ) : (
                    <div className="flex h-11 items-center rounded-xl border border-white/6 bg-white/[0.025] px-4 text-sm text-white">
                      {name}
                    </div>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-400">
                    Email address
                  </label>

                  {editing ? (
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="h-11 w-full rounded-xl border border-white/10 bg-[#08111e] px-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-400/40 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  ) : (
                    <div className="flex h-11 items-center rounded-xl border border-white/6 bg-white/[0.025] px-4 text-sm text-slate-300">
                      {email}
                    </div>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-400">
                    Location
                  </label>

                  {editing ? (
                    <input
                      value={location}
                      onChange={(event) =>
                        setLocation(event.target.value)
                      }
                      className="h-11 w-full rounded-xl border border-white/10 bg-[#08111e] px-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-400/40 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  ) : (
                    <div className="flex h-11 items-center gap-2 rounded-xl border border-white/6 bg-white/[0.025] px-4 text-sm text-slate-300">
                      <MapPin className="h-4 w-4 text-slate-500" />
                      {location}
                    </div>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-400">
                    Account type
                  </label>

                  <div className="flex h-11 items-center gap-2 rounded-xl border border-white/6 bg-white/[0.025] px-4 text-sm text-slate-300">
                    <Compass className="h-4 w-4 text-indigo-400" />
                    Traveler
                  </div>
                </div>
              </div>
            </section>

            {/* About */}

            <section className="rounded-2xl border border-white/8 bg-[#0b1422] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Heart className="h-5 w-5 text-cyan-400" />
                </div>

                <div>
                  <h2 className="font-semibold text-white">
                    About you
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Tell other travelers a little about yourself
                  </p>
                </div>
              </div>

              <div className="mt-6">
                {editing ? (
                  <textarea
                    value={bio}
                    onChange={(event) => setBio(event.target.value)}
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#08111e] px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:border-indigo-400/40 focus:ring-2 focus:ring-indigo-500/10"
                  />
                ) : (
                  <p className="rounded-xl border border-white/6 bg-white/[0.025] p-4 text-sm leading-6 text-slate-400">
                    {bio}
                  </p>
                )}
              </div>
            </section>

            {/* Interests */}

            <section className="rounded-2xl border border-white/8 bg-[#0b1422] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-400/10">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                </div>

                <div>
                  <h2 className="font-semibold text-white">
                    Travel interests
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Used to personalize your recommendations
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {interests.map((interest) => {
                  const selected = selectedInterests.includes(interest);

                  return (
                    <button
                      key={interest}
                      type="button"
                      disabled={!editing}
                      onClick={() => toggleInterest(interest)}
                      className={`rounded-full border px-3.5 py-2 text-xs font-medium transition-all ${
                        selected
                          ? "border-indigo-400/30 bg-indigo-500/15 text-indigo-300"
                          : "border-white/8 bg-white/[0.02] text-slate-500"
                      } ${
                        editing
                          ? "cursor-pointer hover:border-indigo-400/20 hover:text-slate-300"
                          : "cursor-default"
                      }`}
                    >
                      {selected && (
                        <Check className="mr-1 inline h-3 w-3" />
                      )}
                      {interest}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Favorite destinations */}

            <section className="rounded-2xl border border-white/8 bg-[#0b1422] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10">
                  <Plane className="h-5 w-5 text-amber-400" />
                </div>

                <div>
                  <h2 className="font-semibold text-white">
                    Favorite destinations
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Places you've explored or want to visit
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {destinations.map((destination) => (
                  <div
                    key={destination}
                    className="flex items-center justify-between rounded-xl border border-white/6 bg-white/[0.025] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10">
                        <MapPin className="h-4 w-4 text-indigo-400" />
                      </div>

                      <span className="text-sm font-medium text-slate-300">
                        {destination}
                      </span>
                    </div>

                    <Check className="h-4 w-4 text-emerald-400" />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}