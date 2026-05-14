const API_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";

export async function getSiteContent() {
  const url = API_BASE_URL
    ? `${API_BASE_URL}/api/content`
    : "/api/content";

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(
      `Errore nel recupero contenuti: ${res.status} ${res.statusText}`
    );
  }

  return res.json();
}
