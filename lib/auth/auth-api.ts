
import { apiClient } from "@/lib/api/client";

export interface SignupRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface SignupResponse {
  userId: number;
  fullName: string;
  email: string;
  accessToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  tokenType: string;
}

export const authApi = {
  signup: async (data: SignupRequest): Promise<SignupResponse> => {
    const response = await apiClient.post<SignupResponse>(
      "/auth/signup",
      data
    );

    return response.data;
  },

  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>(
      "/auth/login",
      data
    );

    return response.data;
  },
};