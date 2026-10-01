import {
  Compass,
  Sparkles,
} from "lucide-react";

import { RegisterForm } from "@/components/auth/RegisterForm";
import { AuthNavbar } from "@/components/layout/AuthNavbar";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#050b14] text-white">

      {/* =====================================================
          AUTH NAVBAR
          ===================================================== */}

      <div className="px-4 pt-4 sm:px-6 lg:px-8">
        <AuthNavbar mode="register" />
      </div>

      {/* =====================================================
          REGISTER CONTAINER
          ===================================================== */}

      <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-8 sm:px-6 lg:px-8">

        <div className="grid h-[700px] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b1422] shadow-2xl shadow-black/40 lg:grid-cols-[0.8fr_1.2fr]">

          {/* =================================================
              LEFT — TRAVEL IMAGE
              ================================================= */}

          <div className="relative hidden overflow-hidden lg:block">

            {/* Register image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/auth/register-travel.jpg')",
              }}
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-[#020611]/15" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#020611]/95 via-[#020611]/20 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0b1422]/20" />

            {/* Brand */}
            <div className="relative z-10 flex items-center gap-3 p-7">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 shadow-lg backdrop-blur-md">
                <Compass className="h-5 w-5 text-white" />
              </div>

              <span className="text-lg font-semibold tracking-tight">
                Safar<span className="text-indigo-300">
                  Saathi
                </span>
              </span>

            </div>

            {/* Image content */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-7">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md">

                <Sparkles className="h-3.5 w-3.5 text-amber-300" />

                Your next adventure awaits

              </div>

              <h2 className="max-w-md text-3xl font-bold leading-tight">

                Meet new people.

                <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-rose-300 bg-clip-text text-transparent">
                  Discover new places.
                </span>

              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
                Create your SafarSaathi account and start
                planning meaningful journeys with travelers
                who share your passion.
              </p>

            </div>
          </div>

          {/* =================================================
              RIGHT — REGISTER
              ================================================= */}

          <div className="relative flex min-h-0 flex-col justify-center bg-[#08111e] px-6 py-8 sm:px-10 lg:px-14">

            {/* Background glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />

            <div className="relative z-10">

              {/* Heading */}
              <div className="mb-6">

                <p className="mb-3 text-sm font-medium text-indigo-400">
                  Start your journey
                </p>

                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Create your account.
                </h1>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                  Join SafarSaathi and start planning smarter,
                  discovering more, and traveling together.
                </p>

              </div>

              <RegisterForm />

            </div>
          </div>

        </div>
      </div>

    </main>
  );
}