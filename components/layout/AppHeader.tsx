
"use client";

import Link from "next/link";
import {
  Bell,
  Menu,
  Search,
  Sparkles,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCurrentProfile } from "@/lib/user/use-current-profile";

interface AppHeaderProps {
  onMenuClick?: () => void;
}

export function AppHeader({ onMenuClick }: AppHeaderProps) {
  const { data: profile, isLoading } = useCurrentProfile();

  const initials =
    profile?.fullName
      ?.trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "U";

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center border-b border-white/8 bg-[#050b14]/85 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="flex w-full items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="text-slate-400 hover:bg-white/5 hover:text-white lg:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="hidden items-center gap-2 rounded-xl border border-indigo-500/10 bg-indigo-500/5 px-3 py-2 sm:flex">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-medium text-slate-300">
              AI Travel Companion
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <Button
            variant="ghost"
            className="hidden gap-2 text-slate-400 hover:bg-white/5 hover:text-white sm:flex"
          >
            <Search className="h-4 w-4" />
            <span className="text-xs">Search</span>
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative text-slate-400 hover:bg-white/5 hover:text-white"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-indigo-400 ring-2 ring-[#050b14]" />
          </Button>

          {/* Divider */}
          <div className="mx-1 hidden h-7 w-px bg-white/8 sm:block" />

          {/* User */}
          <Link
            href="/profile"
            aria-label="Open your profile"
            className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition-colors hover:bg-white/5"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-semibold text-white">
              {profile?.profileImageUrl ? (
                <img
                  src={profile.profileImageUrl}
                  alt={profile.fullName || "Profile"}
                  className="h-full w-full object-cover"
                />
              ) : profile ? (
                initials
              ) : (
                <UserRound className="h-4 w-4" />
              )}
            </div>

            <div className="hidden min-w-0 text-left sm:block">
              <p className="max-w-36 truncate text-sm font-medium text-white">
                {isLoading
                  ? "Loading..."
                  : profile?.fullName || "Traveler"}
              </p>

              <p className="text-[11px] text-slate-500">
                Traveler
              </p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}