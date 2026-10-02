
"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  tripApi,
  type CreateTripRequest,
  type UpdateTripRequest,
  type TripSearchParams,
} from "./trip-api";

export const tripKeys = {
  all: ["trips"] as const,
  mine: () => [...tripKeys.all, "mine"] as const,
  public: () => [...tripKeys.all, "public"] as const,
  detail: (tripId: number | string) =>
    [...tripKeys.all, "detail", tripId] as const,
  search: (params: TripSearchParams) =>
    [...tripKeys.all, "search", params] as const,
};

// ─── Queries ───────────────────────────────────────────

export function useMyTrips() {
  return useQuery({
    queryKey: tripKeys.mine(),
    queryFn: tripApi.getMyTrips,
  });
}

export function usePublicTrips() {
  return useQuery({
    queryKey: tripKeys.public(),
    queryFn: tripApi.getPublicTrips,
  });
}

export function useTrip(tripId: number | string) {
  return useQuery({
    queryKey: tripKeys.detail(tripId),
    queryFn: () => tripApi.getTripById(tripId),
    enabled: Boolean(tripId),
  });
}

export function useSearchTrips(params: TripSearchParams) {
  return useQuery({
    queryKey: tripKeys.search(params),
    queryFn: () => tripApi.searchTrips(params),
  });
}

// ─── Mutations ─────────────────────────────────────────

export function useCreateTrip() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTripRequest) =>
      tripApi.createTrip(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: tripKeys.all,
      });
    },
  });
}

export function useUpdateTrip() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      tripId,
      data,
    }: {
      tripId: number | string;
      data: UpdateTripRequest;
    }) => tripApi.updateTrip(tripId, data),
    onSuccess: (updatedTrip) => {
      queryClient.invalidateQueries({
        queryKey: tripKeys.all,
      });

      queryClient.setQueryData(
        tripKeys.detail(updatedTrip.id),
        updatedTrip
      );
    },
  });
}

export function useDeleteTrip() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tripId: number | string) =>
      tripApi.deleteTrip(tripId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: tripKeys.all,
      });
    },
  });
}

export function useStartTrip() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tripId: number | string) =>
      tripApi.startTrip(tripId),
    onSuccess: (trip) => {
      queryClient.invalidateQueries({
        queryKey: tripKeys.all,
      });
      queryClient.setQueryData(
        tripKeys.detail(trip.id),
        trip
      );
    },
  });
}

export function useCompleteTrip() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tripId: number | string) =>
      tripApi.completeTrip(tripId),
    onSuccess: (trip) => {
      queryClient.invalidateQueries({
        queryKey: tripKeys.all,
      });
      queryClient.setQueryData(
        tripKeys.detail(trip.id),
        trip
      );
    },
  });
}

export function useCancelTrip() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tripId: number | string) =>
      tripApi.cancelTrip(tripId),
    onSuccess: (trip) => {
      queryClient.invalidateQueries({
        queryKey: tripKeys.all,
      });
      queryClient.setQueryData(
        tripKeys.detail(trip.id),
        trip
      );
    },
  });
}