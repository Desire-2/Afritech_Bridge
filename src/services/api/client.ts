import SITE_CONFIG from '@/config/site';

/**
 * Standardized API client for external and internal requests
 */
const rawBaseUrl =
  process.env.NEXT_PUBLIC_TALENTSPHERE_API_URL ||
  process.env.TALENTSPHERE_API_URL ||
  'https://jobs.afritechbridge.online/api';

export const API_BASE_URL = rawBaseUrl.startsWith('http')
  ? rawBaseUrl
  : `https://${rawBaseUrl}`;

export async function fetchWithTimeout<T>(
  url: string,
  options: RequestInit = {},
  timeoutMs = 8000
): Promise<T> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}
