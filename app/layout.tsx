// Importiamo il tipo Metadata da Next.js.
// "type" significa che stiamo importando solo un tipo TypeScript,
// non una funzione o un valore reale usato a runtime.
import type { Metadata } from "next";

// Importiamo il file CSS globale del progetto.
// Questo file contiene stili validi per tutto il sito.
import "./globals.css";

// Importiamo i componenti riutilizzabili della barra di navigazione e del footer.
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteContent } from "@/lib/api";

// Qui definiamo i metadati della pagina/applicazione.
// Next.js usa questi dati per il titolo del browser e la descrizione SEO di base.
export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();

  return {
    title: content.site.metadataTitle,
    description: content.site.metadataDescription,
  };
}

// Questo è il layout principale dell'app.
// Un layout in Next.js è una struttura condivisa da più pagine.
// In questo caso contiene HTML di base, Navbar e Footer.
export default async function RootLayout({
  children,
}: Readonly<{
  // "children" rappresenta il contenuto della singola pagina corrente.
  // ReactNode è un tipo molto generale che indica "qualunque contenuto React valido".
  children: React.ReactNode;
}>) {
  const content = await getSiteContent();

  return (
    // Tag HTML radice del documento.
    // lang="it" indica che la lingua principale è l'italiano.
    <html lang="it">
      {/*
        body è il corpo della pagina.
        - bg-white = sfondo bianco
        - text-gray-900 = colore testo scuro
        - antialiased = migliora la resa dei font su molti schermi
      */}
      <body className="bg-white text-gray-900 antialiased">
        {/* Barra di navigazione visibile in tutte le pagine */}
        <Navbar
          site={content.site}
          navigation={content.navigation}
          services={content.services}
        />

        {/* Qui Next.js inserisce il contenuto della pagina corrente */}
        {children}

        {/* Footer visibile in tutte le pagine */}
        <Footer copyright={content.footer.copyright} />
      </body>
    </html>
  );
}
