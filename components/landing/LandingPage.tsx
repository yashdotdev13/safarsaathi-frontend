"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Compass,
  Map,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Bot,
    title: "AI Travel Assistant",
    description: "Ask anything about your journey and get intelligent, personalized travel guidance.",
    iconClass: "text-cyan-400",
    bgClass: "bg-cyan-400/10",
  },
  {
    icon: Users,
    title: "Smart Companion Matching",
    description: "Find travelers who share your interests, travel style, and destination.",
    iconClass: "text-emerald-400",
    bgClass: "bg-emerald-400/10",
  },
  {
    icon: Map,
    title: "Trip Planning",
    description: "Plan trips with destinations, activities, budgets, and schedules.",
    iconClass: "text-rose-400",
    bgClass: "bg-rose-400/10",
  },
  {
    icon: Compass,
    title: "Personalized Recommendations",
    description: "Discover places and experiences tailored to the way you love to travel.",
    iconClass: "text-amber-400",
    bgClass: "bg-amber-400/10",
  },
];

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050b14] text-white">

      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />

        <div className="absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-cyan-500/5 blur-[140px]" />
      </div>

      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-5 pt-5 sm:px-6">

          <div className="flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-[#050b14]/55 px-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">

            {/* Logo */}

            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25">
                <Compass className="h-5 w-5 text-white" />
              </div>

              <span className="text-lg font-semibold tracking-tight">
                Safar<span className="text-indigo-400">Saathi</span>
              </span>
            </Link>

            {/* Desktop navigation */}

            <nav className="hidden items-center gap-7 lg:flex">

              <a
                href="#features"
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                How It Works
              </a>

              <a
                href="#testimonials"
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                Testimonials
              </a>

              <a
                href="#pricing"
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                Pricing
              </a>

            </nav>

            {/* Actions */}

            <div className="flex items-center gap-2">

              <Button
                nativeButton={false}
                variant="ghost"
                className="hidden text-slate-300 hover:bg-white/10 hover:text-white sm:inline-flex"
                render={<Link href="/login" />}
              >
                Login
              </Button>

              <Button
                nativeButton={false}
                className="h-12 bg-indigo-500 px-7 text-white shadow-xl shadow-indigo-500/30 hover:bg-indigo-400"
                render={<Link href="/register" />}
              >
                Get Started
              </Button>

            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative min-h-[760px] overflow-hidden">

        {/* Hero Image */}

        <div
  className="absolute inset-0 bg-cover bg-[center_38%]"
  style={{
    backgroundImage: "url('/images/hero/safarsaathi-hero.jpg')",
    filter: "brightness(1.2) contrast(1.05)",
  }}
/>

{/* Dark overlay for text readability */}
<div className="absolute inset-0 bg-[#020611]/10" />

{/* Keep the left side darker for the text */}
<div className="absolute inset-0 bg-gradient-to-r from-[#020611]/65 via-[#020611]/25 to-transparent" />

{/* Bottom fade */}
<div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/65 via-transparent to-transparent" />

<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.12),transparent_40%)]" />

        {/* =================================================
            HERO CONTENT
            ================================================= */}

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pb-28 pt-32">

          <div className="max-w-2xl">

            {/* Badge */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-300/20 bg-indigo-950/45 px-4 py-2 text-sm text-indigo-200 backdrop-blur-md">

              <Sparkles className="h-4 w-4 text-cyan-300" />

              AI-powered travel companion

            </div>

            {/* Heading */}

            <h1 className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">

              Travel Together.

              <br />

              Travel Smarter.

              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Powered by AI.
              </span>

            </h1>

            {/* Description */}

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">

              SafarSaathi combines intelligent trip planning, AI-powered
              recommendations, and smart companion matching into one
              personalized travel experience.

            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Button
                size="lg"
                nativeButton={false}
                className="h-12 bg-indigo-500 px-7 text-white shadow-xl shadow-indigo-500/30 hover:bg-indigo-400"
                render={<Link href="/register" />}
              >
                Get Started

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                nativeButton={false}
                variant="outline"
                className="h-12 border-white/15 bg-white/5 px-7 text-white backdrop-blur-md hover:bg-white/10"
                render={<a href="#features" />}
              >
                Learn More
              </Button>

            </div>

            {/* Trust indicators */}

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">

              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40" />
                AI-powered planning
              </span>

              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />
                Smart matching
              </span>

              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/40" />
                Personalized experiences
              </span>

            </div>

          </div>
        </div>

        {/* =================================================
            HERO BOTTOM FEATURES
            ================================================= */}

        <div className="absolute bottom-0 left-0 right-0 z-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid border-t border-white/10 bg-[#050b14]/70 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">

              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="border-b border-white/8 px-5 py-5 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
                  >
                    <div className="flex items-start gap-3">

                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${feature.bgClass}`}
                      >
                        <Icon
                          className={`h-5 w-5 ${feature.iconClass}`}
                        />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {feature.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-400">
                          {feature.description}
                        </p>
                      </div>

                    </div>
                  </div>
                );
              })}

            </div>

          </div>
        </div>

      </section>

      {/* =====================================================
          FEATURES SECTION
          ===================================================== */}

      <section
        id="features"
        className="relative z-10 border-t border-white/6 bg-[#050b14] py-24"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
              Everything for your journey
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Your entire journey. One intelligent companion.
            </h2>

            <p className="mt-5 text-slate-400">
              From discovering destinations to finding the right travel
              companion, SafarSaathi brings your entire travel experience
              together.
            </p>

          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/8 bg-[#0b1422]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:bg-[#101b2d]"
                >

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${feature.bgClass}`}
                  >
                    <Icon
                      className={`h-5 w-5 ${feature.iconClass}`}
                    />
                  </div>

                  <h3 className="mt-5 font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
          ===================================================== */}

      <section
        id="how-it-works"
        className="border-t border-white/6 bg-[#07101c] py-24"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              How it works
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From idea to adventure.
            </h2>

            <p className="mt-5 text-slate-400">
              Tell SafarSaathi what kind of journey you want. Let AI help
              turn the idea into an experience.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Tell us your plan",
                description:
                  "Share your destination, dates, budget, interests, and travel preferences.",
              },
              {
                number: "02",
                title: "Let AI personalize it",
                description:
                  "SafarSaathi combines your preferences with intelligent travel recommendations.",
              },
              {
                number: "03",
                title: "Start your journey",
                description:
                  "Build your itinerary, discover companions, and experience the trip your way.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/8 bg-[#0b1422] p-7"
              >

                <span className="text-sm font-semibold text-indigo-400">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
          ===================================================== */}

     <footer className="border-t border-white/8 bg-[#030811]">
  <div className="mx-auto max-w-7xl px-6">

    {/* Main footer */}
    <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">

      {/* Brand */}
      <div className="lg:col-span-2">
        <Link href="/" className="inline-flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20">
            <Compass className="h-5 w-5 text-white" />
          </div>

          <span className="text-xl font-semibold tracking-tight">
            Safar<span className="text-indigo-400">Saathi</span>
          </span>
        </Link>

        <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
          Your AI-powered travel companion for smarter planning,
          meaningful connections, and unforgettable journeys.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40" />

          <span className="text-sm text-slate-400">
            AI-powered travel experiences
          </span>
        </div>
      </div>

      {/* Product */}
      <div>
        <h3 className="text-sm font-semibold text-white">
          Product
        </h3>

        <ul className="mt-5 space-y-3">
          <li>
            <a
              href="#features"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#how-it-works"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              How It Works
            </a>
          </li>

          <li>
            <Link
              href="/trips"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Trip Planning
            </Link>
          </li>

          <li>
            <Link
              href="/companions"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Find Companions
            </Link>
          </li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3 className="text-sm font-semibold text-white">
          Company
        </h3>

        <ul className="mt-5 space-y-3">
          <li>
            <a
              href="#testimonials"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Testimonials
            </a>
          </li>

          <li>
            <a
              href="#pricing"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Pricing
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              About Us
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Account */}
      <div>
        <h3 className="text-sm font-semibold text-white">
          Account
        </h3>

        <ul className="mt-5 space-y-3">
          <li>
            <Link
              href="/login"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              href="/register"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Get Started
            </Link>
          </li>

          <li>
            <a
              href="#"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Privacy
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Terms
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom footer */}
    <div className="flex flex-col gap-4 border-t border-white/8 py-7 sm:flex-row sm:items-center sm:justify-between">

      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} SafarSaathi. All rights reserved.
      </p>

      <div className="flex items-center gap-5">
        <a
          href="#"
          aria-label="GitHub"
          className="text-sm text-slate-500 transition-colors hover:text-white"
        >
          GitHub
        </a>

        <a
          href="#"
          aria-label="LinkedIn"
          className="text-sm text-slate-500 transition-colors hover:text-white"
        >
          LinkedIn
        </a>

        <a
          href="#"
          aria-label="Twitter"
          className="text-sm text-slate-500 transition-colors hover:text-white"
        >
          Twitter
        </a>
      </div>

      <p className="text-sm text-slate-500">
        Travel Together. Travel Smarter.
      </p>
    </div>

  </div>
</footer>

    </main>
  );
}