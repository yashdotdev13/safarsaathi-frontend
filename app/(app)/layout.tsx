
"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { AppHeader } from "@/components/layout/AppHeader";
import { AppSidebar } from "@/components/layout/AppSidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const checkAuthentication = useCallback(() => {
    const token = sessionStorage.getItem("accessToken");

    if (!token) {
      setAuthenticated(false);
      router.replace("/login");
      return;
    }

    setAuthenticated(true);
  }, [router]);

  useEffect(() => {
    checkAuthentication();

    const handlePageShow = (event: PageTransitionEvent) => {
      // Recheck when the browser restores a page from its history cache.
      if (event.persisted) {
        setAuthenticated(false);
      }

      checkAuthentication();
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [checkAuthentication]);

  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050b14] text-slate-400">
        Checking your session...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050b14] text-white">
      <div className="flex min-h-screen">
        <AppSidebar
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <AppHeader onMenuClick={() => setMobileOpen(true)} />

          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}