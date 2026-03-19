// Importiamo il componente Image di Next.js.
// Serve per mostrare immagini ottimizzate automaticamente.
import Image from "next/image";

// Importiamo la funzione che recupera i contenuti del sito dal servizio API.
import { getSiteContent } from "../../lib/api";

// Questa funzione rappresenta la pagina "Chi siamo".
// È asincrona perché recupera dati prima di costruire la pagina.
export default async function ChiSiamoPage() {
  // Recuperiamo tutto il contenuto del sito.
  const content = await getSiteContent();

  // Estriamo solo la parte che ci interessa per questa pagina: "about".
  const { about } = content;

  return (
    // Contenitore principale della pagina.
    <main className="min-h-screen bg-white px-6 py-16 text-brand-primary">
      {/* Prima sezione con titolo e presentazione */}
      <section className="mx-auto max-w-5xl">
        {/* Intestazione della pagina */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
            {about.sectionLabel}
          </p>

          <h1 className="mb-5 text-4xl font-bold md:text-5xl">
            {about.title}
          </h1>

          {/*
            Questo testo è scritto direttamente qui,
            quindi è statico e non arriva dall'API.
          */}
          <p className="mx-auto max-w-3xl text-lg leading-8 text-brand-soft">
            Conosci meglio la persona e i valori che guidano l’attività, con
            attenzione alla qualità del servizio e al rapporto con le persone.
          </p>
        </div>

        {/*
          Griglia con 2 colonne su schermi medi e grandi:
          a sinistra immagine, a destra testo.
        */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Colonna immagine */}
          <div className="flex justify-center">
            <div className="brand-card-soft p-4">
              <Image
                // Percorso dell'immagine preso dai dati
                src={about.photo}
                // Testo alternativo importante per accessibilità e SEO
                alt={about.personName}
                // Dimensioni "logiche" dell'immagine
                width={420}
                height={460}
                // rounded-3xl = angoli molto arrotondati
                // object-cover = l'immagine riempie l'area mantenendo un look gradevole
                className="rounded-3xl object-cover"
              />
            </div>
          </div>

          {/* Colonna testo */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Profilo
            </p>

            <h2 className="mb-3 text-3xl font-bold text-brand-primary">
              {about.personName}
            </h2>

            <p className="mb-6 text-lg font-medium text-brand-secondary">
              {about.personRole}
            </p>

            <p className="leading-8 text-brand-soft">
              {about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Seconda sezione con messaggio istituzionale */}
      <section className="mt-20 bg-brand-soft-2 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="brand-card bg-white p-8 md:p-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              Il nostro approccio
            </p>

            <h2 className="mb-5 text-3xl font-bold text-brand-primary">
              Professionalità, ascolto e attenzione
            </h2>

            <p className="mx-auto max-w-3xl leading-8 text-brand-soft">
              Crediamo in un servizio serio, affidabile e vicino alle esigenze
              delle persone. Ogni contatto è un’occasione per offrire supporto,
              chiarezza e competenza, in un ambiente accogliente e professionale.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
