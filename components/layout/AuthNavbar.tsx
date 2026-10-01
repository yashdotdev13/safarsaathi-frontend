import Link from "next/link";
import { Compass } from "lucide-react";

import { Button } from "@/components/ui/button";

interface AuthNavbarProps {
  mode: "login" | "register";
}

export function AuthNavbar({ mode }: AuthNavbarProps) {
  const isLogin = mode === "login";

  return (
    <header className="w-full">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#08111e]/80 px-4 shadow-lg shadow-black/20 backdrop-blur-xl sm:px-5">
        
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

        {/* Right side */}
        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-slate-400 sm:inline">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}
          </span>

          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            className="border-white/10 bg-white/5 text-white hover:bg-white/10"
            render={
              <Link
                href={isLogin ? "/register" : "/login"}
              />
            }
          >
            {isLogin ? "Sign up" : "Login"}
          </Button>
        </div>
      </div>
    </header>
  );
}