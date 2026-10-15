// In development the Vite proxy forwards "/api" to the Express server.
// In production set VITE_API_URL (e.g. https://your-api.onrender.com/api).
const API_URL: string = (import.meta.env.VITE_API_URL as string | undefined) || "/api";

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly fieldErrors?: Record<string, string>
  ) {
    super(message);
    this.name = "ApiError";
  }
}

interface ApiErrorBody {
  message?: string;
  errors?: Record<string, string>;
}

export async function postJson<T>(path: string, body: unknown): Promise<T> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    const data = (await response.json().catch(() => null)) as (T & ApiErrorBody) | null;

    if (!response.ok) {
      throw new ApiError(
        data?.message ?? "Something went wrong. Please try again.",
        response.status,
        data?.errors
      );
    }

    return data as T;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError("Could not reach the server. Please try again in a moment.", 0);
  } finally {
    window.clearTimeout(timer);
  }
}
