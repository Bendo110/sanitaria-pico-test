const API_BASE_URL =
  process.env.CONTENT_API_URL || "http://localhost:4000";

export async function getSiteContent() {
  const res = await fetch(`${API_BASE_URL}/api/content`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Errore nel recupero dei contenuti dal content-service");
  }

  return res.json();
}