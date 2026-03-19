// Qui definiamo l'URL base del servizio contenuti.
// process.env.CONTENT_API_URL legge una variabile d'ambiente.
// Se quella variabile non esiste, usiamo come fallback http://localhost:4000
const API_BASE_URL =
  process.env.CONTENT_API_URL || "http://localhost:4000";

// Questa funzione recupera i contenuti del sito dal content service.
export async function getSiteContent() {
  // fetch fa una richiesta HTTP all'endpoint /api/content.
  const res = await fetch(`${API_BASE_URL}/api/content`, {
    // cache: "no-store" dice a Next.js di non usare dati in cache,
    // ma di rifare la richiesta ogni volta.
    cache: "no-store",
  });

  // Se la risposta NON è ok (per esempio errore 404 o 500),
  // lanciamo un errore.
  if (!res.ok) {
    throw new Error("Errore nel recupero dei contenuti dal content-service");
  }

  // res.json() converte la risposta JSON in oggetto JavaScript.
  return res.json();
}
