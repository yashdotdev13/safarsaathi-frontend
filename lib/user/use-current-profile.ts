
"use client";

import { useQuery } from "@tanstack/react-query";
import { userApi } from "@/lib/user/user-api";

export const USER_PROFILE_QUERY_KEY = ["user", "profile"] as const;

export function useCurrentProfile() {
  return useQuery({
    queryKey: USER_PROFILE_QUERY_KEY,
    queryFn: userApi.getCurrentProfile,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
}