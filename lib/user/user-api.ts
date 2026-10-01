
import { apiClient } from "@/lib/api/client";

const USER_API_PREFIX = "/api/v1/users";

export interface UserProfile {
  userId: number;
  fullName: string;
  email: string;
  phoneNumber: string | null;
  gender: string | null;
  age: number | null;
  bio: string | null;
  country: string | null;
  city: string | null;
  smoker: boolean;
  drinker: boolean;
  lifestyle: string | null;
  travelStyle: string | null;
  profileImageUrl: string | null;
}

export interface UpdateUserProfileRequest {
  fullName: string;
  phoneNumber: string | null;
  gender: string | null;
  age: number | null;
  bio: string | null;
  country: string | null;
  city: string | null;
  smoker: boolean;
  drinker: boolean;
  lifestyle: string | null;
  travelStyle: string | null;
  profileImageUrl: string | null;
}

export const userApi = {
  getCurrentProfile: async (): Promise<UserProfile> => {
    const response = await apiClient.get<UserProfile>(
      `${USER_API_PREFIX}/profile`
    );
    return response.data;
  },

  updateProfile: async (
    data: UpdateUserProfileRequest
  ): Promise<UserProfile> => {
    const response = await apiClient.put<UserProfile>(
      `${USER_API_PREFIX}/profile`,
      data
    );
    return response.data;
  },

  getProfileById: async (userId: number): Promise<UserProfile> => {
    const response = await apiClient.get<UserProfile>(
      `${USER_API_PREFIX}/profile/${userId}`
    );
    return response.data;
  },

  uploadProfileImage: async (file: File): Promise<UserProfile> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await apiClient.post<UserProfile>(
      `${USER_API_PREFIX}/profile/photo`,
      formData
    );

    return response.data;
  },
};