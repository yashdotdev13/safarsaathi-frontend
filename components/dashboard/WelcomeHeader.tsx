
"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { userApi, type UserProfile } from "@/lib/user/user-api";

export function WelcomeHeader() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const fetchProfile = async () => {
      try {
        const data = await userApi.getCurrentProfile();

        if (active) {
          setProfile(data);
        }
      } catch (error) {
        console.error("Failed to load user profile:", error);
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

  const firstName = profile?.fullName?.trim().split(/\s+/)[0];

  return (
    <div>
      <div className="flex items-center gap-2 text-sm font-medium text-indigo-400">
        <Sparkles className="h-4 w-4" />
        Your travel workspace
      </div>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Good evening, {loading ? "..." : firstName || "traveler"} 👋
      </h1>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
        Ready for your next adventure? Let SafarSaathi help you
        discover places, plan trips, and find the right companions.
      </p>
    </div>
  );
}