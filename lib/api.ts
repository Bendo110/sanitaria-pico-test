const DEFAULT_API_BASE_URL = "http://localhost:4000";
const API_BASE_URL = (
  process.env.CONTENT_API_URL ||
  process.env.NEXT_PUBLIC_CONTENT_API_URL ||
  DEFAULT_API_BASE_URL
).replace(/\/+$/, "");

export async function getSiteContent() {
  const res = await fetch(`${API_BASE_URL}/api/content`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(
      `Errore nel recupero dei contenuti dal content-service: ${res.status} ${res.statusText}`
    );
  }

  return res.json();
}
