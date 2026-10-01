"use client";

import { useState } from "react";

import { AppHeader } from "@/components/layout/AppHeader";
import { AppSidebar } from "@/components/layout/AppSidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050b14] text-white">

      <div className="flex min-h-screen">

        {/* Sidebar */}
        <AppSidebar
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />

        {/* Main */}
        <div className="flex min-w-0 flex-1 flex-col">

          <AppHeader
            onMenuClick={() => setMobileOpen(true)}
          />

          <main className="flex-1">
            {children}
          </main>

        </div>

      </div>

    </div>
  );
}