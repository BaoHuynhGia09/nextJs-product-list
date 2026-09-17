const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiClient<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}
