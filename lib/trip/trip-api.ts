
import apiClient from "@/lib/api/client";

// ─── Types ──────────────────────────────────────────────

export type ModeOfTravel =
  | "BUS"
  | "TRAIN"
  | "FLIGHT"
  | "BIKE"
  | "CAR"
  | "OTHER";

export type TripStatus =
  | "PLANNED"
  | "ONGOING"
  | "COMPLETED"
  | "CANCELLED";

export interface Trip {
  id: number;
  destination: string;
  origin: string;
  startDate: string;
  endDate: string;
  modeOfTravel: ModeOfTravel;
  maxTravelers: number;
  currentTravelers: number;
  description: string;
  isPrivate: boolean;
  estimatedCost: number;
  status: TripStatus;
  userId: string;
}

export interface CreateTripRequest {
  destination: string;
  origin: string;
  startDate: string;
  endDate: string;
  modeOfTravel: ModeOfTravel;
  maxTravelers: number;
  description?: string;
  isPrivate: boolean;
  estimatedCost?: number;
}

export interface UpdateTripRequest {
  destination?: string;
  origin?: string;
  startDate?: string;
  endDate?: string;
  modeOfTravel?: ModeOfTravel;
  maxTravelers?: number;
  description?: string;
  isPrivate?: boolean;
  estimatedCost?: number;
  status?: TripStatus;
}

export interface TripSearchParams {
  destination?: string;
  origin?: string;
  modeOfTravel?: ModeOfTravel;
  status?: TripStatus;
  startDateFrom?: string;
  startDateTo?: string;
  page?: number;
  size?: number;
  sortBy?: string;
  direction?: "ASC" | "DESC";
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

// ─── API ───────────────────────────────────────────────

const BASE_URL = "/api/v1/trip/core";

export const tripApi = {
  // Create a trip
  createTrip: async (data: CreateTripRequest): Promise<Trip> => {
    const response = await apiClient.post<Trip>(BASE_URL, data);
    return response.data;
  },

  // Get a trip by ID
  getTripById: async (tripId: number | string): Promise<Trip> => {
    const response = await apiClient.get<Trip>(
      `${BASE_URL}/${tripId}`
    );
    return response.data;
  },

  // Get trips created by the authenticated user
  getMyTrips: async (): Promise<Trip[]> => {
    const response = await apiClient.get<Trip[]>(`${BASE_URL}/me`);
    return response.data;
  },

  // Get public trips
  getPublicTrips: async (): Promise<Trip[]> => {
    const response = await apiClient.get<Trip[]>(
      `${BASE_URL}/public`
    );
    return response.data;
  },

  // Update a trip
  updateTrip: async (
    tripId: number | string,
    data: UpdateTripRequest
  ): Promise<Trip> => {
    const response = await apiClient.put<Trip>(
      `${BASE_URL}/${tripId}`,
      data
    );
    return response.data;
  },

  // Delete a trip
  deleteTrip: async (tripId: number | string): Promise<void> => {
    await apiClient.delete(`${BASE_URL}/${tripId}`);
  },

  // Start a trip
  startTrip: async (tripId: number | string): Promise<Trip> => {
    const response = await apiClient.patch<Trip>(
      `${BASE_URL}/${tripId}/start`
    );
    return response.data;
  },

  // Complete a trip
  completeTrip: async (tripId: number | string): Promise<Trip> => {
    const response = await apiClient.patch<Trip>(
      `${BASE_URL}/${tripId}/complete`
    );
    return response.data;
  },

  // Cancel a trip
  cancelTrip: async (tripId: number | string): Promise<Trip> => {
    const response = await apiClient.patch<Trip>(
      `${BASE_URL}/${tripId}/cancel`
    );
    return response.data;
  },

  // Search trips with filters and pagination
  searchTrips: async (
    params: TripSearchParams
  ): Promise<PageResponse<Trip>> => {
    const response = await apiClient.get<PageResponse<Trip>>(
      `${BASE_URL}/search`,
      { params }
    );
    return response.data;
  },
};