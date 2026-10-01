
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import axios from "axios";
import { Eye, EyeOff, Lock, Mail, ArrowRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authApi } from "@/lib/auth/auth-api";

export function LoginForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await authApi.login({
        email,
        password,
      });

      sessionStorage.setItem("accessToken", response.accessToken);

      router.push("/dashboard");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const message = err.response?.data?.message;

        setError(
          typeof message === "string"
            ? message
            : "Invalid email or password. Please try again."
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Welcome back
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          Continue your journey with{" "}
          <span className="font-medium text-indigo-400">
            SafarSaathi
          </span>
        </p>
      </div>

      {/* Login Card */}
      <div className="rounded-2xl border border-white/10 bg-[#0b1422]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-slate-200">
              Email address
            </Label>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 border-white/10 bg-white/5 pl-10 text-white placeholder:text-slate-600 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-slate-200"
              >
                Password
              </Label>

              <Link
                href="/forgot-password"
                className="text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 border-white/10 bg-white/5 pl-10 pr-10 text-white placeholder:text-slate-600 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20"
              />

              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition-colors hover:text-slate-300"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="h-4 w-4 rounded border-white/20 bg-white/5 accent-indigo-500"
            />

            <Label
              htmlFor="remember"
              className="cursor-pointer text-sm text-slate-400"
            >
              Remember me
            </Label>
          </div>

          {/* Error */}
          {error && (
            <div
              role="alert"
              className="rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-sm text-red-300"
            >
              {error}
            </div>
          )}

          {/* Login */}
          <Button
            type="submit"
            disabled={loading}
            className="h-11 w-full bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-400 hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                Sign in
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/8" />
          <span className="text-xs text-slate-600">OR</span>
          <div className="h-px flex-1 bg-white/8" />
        </div>

        {/* Register */}
        <p className="text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-indigo-400 transition-colors hover:text-indigo-300"
          >
            Create an account
          </Link>
        </p>
      </div>

      {/* Security message */}
      <p className="mt-6 text-center text-xs leading-5 text-slate-600">
        Your account and travel data are protected with secure
        authentication.
      </p>
    </div>
  );
}