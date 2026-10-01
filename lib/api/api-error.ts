
import axios from "axios";

interface ApiErrorResponse {
  message?: string;
  error?: string;
}

export function getApiErrorMessage(
  error: unknown,
  fallback = "Something went wrong. Please try again."
): string {
  if (!axios.isAxiosError<ApiErrorResponse>(error)) {
    return fallback;
  }

  if (!error.response) {
    return "Unable to connect to the server. Please check your connection.";
  }

  return (
    error.response.data?.message ??
    error.response.data?.error ??
    fallback
  );
}