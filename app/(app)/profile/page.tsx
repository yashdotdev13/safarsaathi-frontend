
"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Camera,
  Check,
  Loader2,
  MapPin,
  Save,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import {
  userApi,
  type UserProfile,
  type UpdateUserProfileRequest,
} from "@/lib/user/user-api";

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    gender: "",
    age: "",
    bio: "",
    country: "",
    city: "",
    smoker: false,
    drinker: false,
    lifestyle: "",
    travelStyle: "",
    profileImageUrl: "",
  });

  const populateForm = (data: UserProfile) => {
    setForm({
      fullName: data.fullName ?? "",
      phoneNumber: data.phoneNumber ?? "",
      gender: data.gender ?? "",
      age: data.age == null ? "" : String(data.age),
      bio: data.bio ?? "",
      country: data.country ?? "",
      city: data.city ?? "",
      smoker: data.smoker ?? false,
      drinker: data.drinker ?? false,
      lifestyle: data.lifestyle ?? "",
      travelStyle: data.travelStyle ?? "",
      profileImageUrl: data.profileImageUrl ?? "",
    });
  };

  useEffect(() => {
    let active = true;

    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await userApi.getCurrentProfile();

        if (active) {
          setProfile(data);
          populateForm(data);
        }
      } catch (err) {
        console.error("Failed to load profile:", err);

        if (active) {
          setError("Unable to load your profile. Please try again.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchProfile();

    return () => {
      active = false;
    };
  }, []);

  const updateField = <K extends keyof typeof form>(
    key: K,
    value: (typeof form)[K]
  ) => {
    setForm((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const handleCancel = () => {
    if (profile) {
      populateForm(profile);
    }

    setEditing(false);
    setError("");
    setSuccess("");
  };

  const handleSave = async () => {
    if (!profile) return;

    if (!form.fullName.trim()) {
      setError("Full name is required.");
      return;
    }

    const parsedAge =
      form.age.trim() === "" ? null : Number(form.age);

    if (
      parsedAge !== null &&
      (!Number.isInteger(parsedAge) ||
        parsedAge < 18 ||
        parsedAge > 100)
    ) {
      setError("Age must be a whole number between 18 and 100.");
      return;
    }

    const payload: UpdateUserProfileRequest = {
      fullName: form.fullName.trim(),
      phoneNumber: form.phoneNumber.trim() || null,
      gender: form.gender || null,
      age: parsedAge,
      bio: form.bio.trim() || null,
      country: form.country.trim() || null,
      city: form.city.trim() || null,
      smoker: form.smoker,
      drinker: form.drinker,
      lifestyle: form.lifestyle.trim() || null,
      travelStyle: form.travelStyle.trim() || null,
      profileImageUrl: form.profileImageUrl.trim() || null,
    };

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const updated = await userApi.updateProfile(payload);

      setProfile(updated);
      populateForm(updated);
      setEditing(false);
      setSuccess("Profile updated successfully.");
    } catch (err) {
      console.error("Failed to update profile:", err);
      setError("Unable to save your profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const initials = form.fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  if (loading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center text-slate-400">
        <Loader2 className="mr-3 h-5 w-5 animate-spin" />
        Loading your profile...
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="mx-auto max-w-3xl p-8">
        <div className="rounded-2xl border border-red-400/20 bg-red-500/5 p-6">
          <p className="text-sm text-red-300">
            {error || "Your profile could not be loaded."}
          </p>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-4 rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  const inputClass =
    "mt-2 h-11 w-full rounded-xl border border-white/10 bg-[#08111e] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400/60 disabled:cursor-not-allowed disabled:opacity-70";

  const labelClass = "text-xs font-medium text-slate-400";

  const displayClass =
    "mt-2 flex min-h-11 items-center rounded-xl border border-white/5 bg-white/[0.025] px-4 text-sm text-slate-300";

  return (
    <main className="min-h-screen p-5 sm:p-8 lg:p-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link
              href="/dashboard"
              className="mb-4 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to dashboard
            </Link>

            <h1 className="text-3xl font-bold tracking-tight text-white">
              My Profile
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Manage your personal information and travel preferences.
            </p>
          </div>

          {!editing ? (
            <button
              type="button"
              onClick={() => {
                setEditing(true);
                setError("");
                setSuccess("");
              }}
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-indigo-500 px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
            >
              <User className="h-4 w-4" />
              Edit Profile
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCancel}
                disabled={saving}
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 px-4 text-sm font-medium text-slate-300 transition hover:bg-white/5 disabled:opacity-50"
              >
                <X className="h-4 w-4" />
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-indigo-500 px-5 text-sm font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Save className="h-4 w-4" />
                )}
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          )}
        </div>

        {/* Feedback */}
        {(error || success) && (
          <div
            role="status"
            className={`mb-6 flex items-center gap-2 rounded-xl border px-4 py-3 text-sm ${
              error
                ? "border-red-400/20 bg-red-500/10 text-red-300"
                : "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
            }`}
          >
            {success && <Check className="h-4 w-4" />}
            {error || success}
          </div>
        )}

        {/* Profile overview */}
        <section className="mb-6 rounded-2xl border border-white/[0.07] bg-[#0b1422] p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/30 to-violet-500/20">
              {form.profileImageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={form.profileImageUrl}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-2xl font-bold text-indigo-200">
                  {initials || "U"}
                </span>
              )}

              <div className="absolute bottom-1 right-1 rounded-lg border border-white/10 bg-[#0b1422] p-1.5 text-slate-300">
                <Camera className="h-3.5 w-3.5" />
              </div>
            </div>

            <div className="min-w-0">
              <h2 className="text-2xl font-bold text-white">
                {form.fullName || "Traveler"}
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                {profile.email}
              </p>

              <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-indigo-400" />
                {[form.city, form.country]
                  .filter(Boolean)
                  .join(", ") || "Location not specified"}
              </p>
            </div>
          </div>
        </section>

        {/* Personal information */}
        <section className="mb-6 rounded-2xl border border-white/[0.07] bg-[#0b1422] p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white">
              Personal Information
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Your basic information and contact details.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Full Name</label>
              {editing ? (
                <input
                  className={inputClass}
                  value={form.fullName}
                  onChange={(e) =>
                    updateField("fullName", e.target.value)
                  }
                  placeholder="Your full name"
                  maxLength={100}
                />
              ) : (
                <div className={displayClass}>
                  {form.fullName || "Not specified"}
                </div>
              )}
            </div>

            <div>
              <label className={labelClass}>Email Address</label>
              <div className={displayClass}>{profile.email}</div>
              <p className="mt-1 text-xs text-slate-500">
                Email cannot be changed here.
              </p>
            </div>

            <div>
              <label className={labelClass}>Phone Number</label>
              {editing ? (
                <input
                  className={inputClass}
                  value={form.phoneNumber}
                  onChange={(e) =>
                    updateField("phoneNumber", e.target.value)
                  }
                  placeholder="Phone number"
                />
              ) : (
                <div className={displayClass}>
                  {form.phoneNumber || "Not specified"}
                </div>
              )}
            </div>

            <div>
              <label className={labelClass}>Gender</label>
              {editing ? (
                <select
                  className={inputClass}
                  value={form.gender}
                  onChange={(e) =>
                    updateField("gender", e.target.value)
                  }
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">
                    Prefer not to say
                  </option>
                </select>
              ) : (
                <div className={displayClass}>
                  {form.gender || "Not specified"}
                </div>
              )}
            </div>

            <div>
              <label className={labelClass}>Age</label>
              {editing ? (
                <input
                  type="number"
                  min={18}
                  max={100}
                  className={inputClass}
                  value={form.age}
                  onChange={(e) =>
                    updateField("age", e.target.value)
                  }
                  placeholder="Your age"
                />
              ) : (
                <div className={displayClass}>
                  {form.age || "Not specified"}
                </div>
              )}
            </div>

            <div>
              <label className={labelClass}>Country</label>
              {editing ? (
                <input
                  className={inputClass}
                  value={form.country}
                  onChange={(e) =>
                    updateField("country", e.target.value)
                  }
                  placeholder="Country"
                />
              ) : (
                <div className={displayClass}>
                  {form.country || "Not specified"}
                </div>
              )}
            </div>

            <div>
              <label className={labelClass}>City</label>
              {editing ? (
                <input
                  className={inputClass}
                  value={form.city}
                  onChange={(e) =>
                    updateField("city", e.target.value)
                  }
                  placeholder="City"
                />
              ) : (
                <div className={displayClass}>
                  {form.city || "Not specified"}
                </div>
              )}
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass}>Bio</label>
              {editing ? (
                <textarea
                  className="mt-2 min-h-28 w-full resize-y rounded-xl border border-white/10 bg-[#08111e] p-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400/60"
                  value={form.bio}
                  onChange={(e) =>
                    updateField("bio", e.target.value)
                  }
                  placeholder="Tell other travelers a little about yourself..."
                  maxLength={500}
                />
              ) : (
                <div className={`${displayClass} min-h-24 items-start py-3`}>
                  {form.bio || "No bio added yet."}
                </div>
              )}
              {editing && (
                <p className="mt-1 text-right text-xs text-slate-500">
                  {form.bio.length}/500
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Travel preferences */}
        <section className="mb-6 rounded-2xl border border-white/[0.07] bg-[#0b1422] p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white">
              Travel Preferences
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Help us understand your travel personality.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Travel Style</label>
              {editing ? (
                <select
                  className={inputClass}
                  value={form.travelStyle}
                  onChange={(e) =>
                    updateField("travelStyle", e.target.value)
                  }
                >
                  <option value="">Select travel style</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Relaxation">Relaxation</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Budget">Budget</option>
                  <option value="Backpacking">Backpacking</option>
                  <option value="Nature">Nature</option>
                </select>
              ) : (
                <div className={displayClass}>
                  {form.travelStyle || "Not specified"}
                </div>
              )}
            </div>

            <div>
              <label className={labelClass}>Lifestyle</label>
              {editing ? (
                <input
                  className={inputClass}
                  value={form.lifestyle}
                  onChange={(e) =>
                    updateField("lifestyle", e.target.value)
                  }
                  placeholder="Your lifestyle"
                />
              ) : (
                <div className={displayClass}>
                  {form.lifestyle || "Not specified"}
                </div>
              )}
            </div>

            <div>
              <label className={labelClass}>Smoking</label>
              {editing ? (
                <label className="mt-3 flex items-center gap-3 text-sm text-slate-300">
                  <input
                    type="checkbox"
                    checked={form.smoker}
                    onChange={(e) =>
                      updateField("smoker", e.target.checked)
                    }
                    className="h-4 w-4 accent-indigo-500"
                  />
                  I smoke
                </label>
              ) : (
                <div className={displayClass}>
                  {form.smoker ? "Yes" : "No"}
                </div>
              )}
            </div>

            <div>
              <label className={labelClass}>Drinking</label>
              {editing ? (
                <label className="mt-3 flex items-center gap-3 text-sm text-slate-300">
                  <input
                    type="checkbox"
                    checked={form.drinker}
                    onChange={(e) =>
                      updateField("drinker", e.target.checked)
                    }
                    className="h-4 w-4 accent-indigo-500"
                  />
                  I drink
                </label>
              ) : (
                <div className={displayClass}>
                  {form.drinker ? "Yes" : "No"}
                </div>
              )}
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass}>
                Profile Image URL
              </label>
              {editing ? (
                <input
                  className={inputClass}
                  value={form.profileImageUrl}
                  onChange={(e) =>
                    updateField("profileImageUrl", e.target.value)
                  }
                  placeholder="https://example.com/image.jpg"
                />
              ) : (
                <div className={displayClass}>
                  {form.profileImageUrl || "No image URL"}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Bottom actions */}
        {editing && (
          <div className="flex flex-wrap justify-end gap-3 pb-8">
            <button
              type="button"
              onClick={handleCancel}
              disabled={saving}
              className="h-11 rounded-xl border border-white/10 px-5 text-sm font-medium text-slate-300 transition hover:bg-white/5 disabled:opacity-50"
            >
              Discard Changes
            </button>

            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-indigo-500 px-5 text-sm font-semibold text-white transition hover:bg-indigo-400 disabled:opacity-50"
            >
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              {saving ? "Saving..." : "Save Profile"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}