import { headers } from "next/headers";
import { siteContent } from "@/data/siteContent";

export async function getSiteContent() {
  return siteContent;
}


async function getBaseUrl() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const protocol = h.get("x-forwarded-proto") ?? "http";

  if (!host) {
    throw new Error("Host header non trovato");
  }

  return `${protocol}://${host}`;
}

// export async function getSiteContent() {
//   const baseUrl = await getBaseUrl();

//   const res = await fetch(`${baseUrl}/api/content`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error(
//       `Errore nel recupero contenuti: ${res.status} ${res.statusText}`
//     );
//   }

//   return res.json();
// }
