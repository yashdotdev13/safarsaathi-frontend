
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Bell,
  Bot,
  Compass,
  LayoutDashboard,
  LogOut,
  Map,
  Plus,
  Settings,
  Brain,
  UserRound,
  Users,
  X,
} from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { userApi } from "@/lib/user/user-api";

interface AppSidebarProps {
  mobileOpen?: boolean;
  onClose?: () => void;
}

const mainNavigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "AI Travel",
    href: "/ai",
    icon: Bot,
  },
  {
    title: "Trips",
    href: "/trips",
    icon: Map,
  },
  {
    title: "Create Trip",
    href: "/trips/create",
    icon: Plus,
  },
  {
    title: "Companions",
    href: "/companions",
    icon: Users,
  },
];

const personalNavigation = [
  {
    title: "Profile",
    href: "/profile",
    icon: UserRound,
  },
  {
    title: "AI Memory",
    href: "/memory",
    icon: Brain,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
];

const bottomNavigation = [
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function AppSidebar({
  mobileOpen = false,
  onClose,
}: AppSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const queryClient = useQueryClient();

  const [loggingOut, setLoggingOut] = useState(false);

  const { data: profile } = useQuery({
    queryKey: ["currentProfile"],
    queryFn: userApi.getCurrentProfile,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });

  const firstName =
    profile?.fullName?.trim().split(/\s+/)[0] || "Traveler";

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

 
const handleLogout = () => {
  if (loggingOut) return;

  setLoggingOut(true);

  try {
    // Remove the current session token.
    sessionStorage.removeItem("accessToken");

    // Remove cached data from the previous session.
    queryClient.clear();

    // Navigate using a full page replacement.
    window.location.replace("/login");
  } catch (error) {
    console.error("Logout failed:", error);
    setLoggingOut(false);
  }
};

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex w-72 flex-col
          border-r border-white/8 bg-[#07101c]
          transition-transform duration-300
          lg:static lg:z-auto lg:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-white/8 px-5">
          <Link
            href="/dashboard"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20">
              <Compass className="h-5 w-5 text-white" />
            </div>

            <div>
              <div className="text-lg font-semibold tracking-tight">
                Safar<span className="text-indigo-400">Saathi</span>
              </div>

              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Travel Intelligence
              </p>
            </div>
          </Link>

          {/* Mobile close */}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-white/5 hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-3 py-6">
          {/* Main */}
          <div>
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              Workspace
            </p>

            <nav className="space-y-1">
              {mainNavigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`
                      group flex items-center gap-3 rounded-xl px-3 py-2.5
                      text-sm font-medium transition-all
                      ${
                        active
                          ? "bg-indigo-500/15 text-white shadow-sm"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      className={`
                        h-[18px] w-[18px]
                        ${
                          active
                            ? "text-indigo-400"
                            : "text-slate-500 group-hover:text-slate-300"
                        }
                      `}
                    />

                    <span>{item.title}</span>

                    {active && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/50" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Personal */}
          <div className="mt-8">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              Personal
            </p>

            <nav className="space-y-1">
              {personalNavigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`
                      group flex items-center gap-3 rounded-xl px-3 py-2.5
                      text-sm font-medium transition-all
                      ${
                        active
                          ? "bg-indigo-500/15 text-white"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      className={`
                        h-[18px] w-[18px]
                        ${
                          active
                            ? "text-indigo-400"
                            : "text-slate-500 group-hover:text-slate-300"
                        }
                      `}
                    />

                    <span>{item.title}</span>

                    {item.title === "Notifications" && (
                      <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-500/15 px-1.5 text-[10px] font-semibold text-indigo-300">
                        3
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/8 p-3">
          <nav className="space-y-1">
            {bottomNavigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    flex items-center gap-3 rounded-xl px-3 py-2.5
                    text-sm font-medium transition-all
                    ${
                      active
                        ? "bg-indigo-500/15 text-white"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  <Icon
                    className={`h-[18px] w-[18px] ${
                      active ? "text-indigo-400" : "text-slate-500"
                    }`}
                  />

                  {item.title}
                </Link>
              );
            })}

            {/* Logout */}
            <Button
              type="button"
              variant="ghost"
              disabled={loggingOut}
              className="w-full justify-start gap-3 px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-red-500/5 hover:text-red-400 disabled:opacity-60"
              onClick={handleLogout}
            >
              <LogOut className="h-[18px] w-[18px]" />
              {loggingOut ? "Logging out..." : "Logout"}
            </Button>
          </nav>

          {/* User mini card */}
          <Link
            href="/profile"
            onClick={onClose}
            className="mt-3 block rounded-xl border border-white/8 bg-white/[0.025] p-3 transition-colors hover:bg-white/5"
          >
            <div className="flex items-center gap-3">
              {profile?.profileImageUrl ? (
                <img
                  src={profile.profileImageUrl}
                  alt={`${firstName}'s profile`}
                  className="h-9 w-9 rounded-full border border-white/10 object-cover"
                />
              ) : (
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-semibold text-white">
                  {firstName.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  {firstName}
                </p>

                <p className="truncate text-xs text-slate-500">
                  Traveler
                </p>
              </div>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
}