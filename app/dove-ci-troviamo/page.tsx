// Importiamo il componente Image di Next.js per gestire immagini ottimizzate.
import Image from "next/image";

// Importiamo la funzione che recupera i contenuti del sito.
import { getSiteContent } from "../../lib/api";

// Pagina "Dove ci troviamo".
// È async perché legge dati da una fonte esterna prima di renderizzare la pagina.
export default async function DoveCiTroviamoPage() {
  const content = await getSiteContent();

  // Prendiamo solo la sezione location dai contenuti ricevuti.
  const { location } = content;

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-brand-primary">
      <section className="mx-auto max-w-5xl">
        {/* Intestazione della pagina */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
            {location.sectionLabel}
          </p>

          <h1 className="mb-5 text-4xl font-bold md:text-5xl">
            {location.title}
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-brand-soft">
            Ti aspettiamo presso la nostra sede. Qui trovi l’indirizzo, la
            posizione sulla mappa e un accesso rapido a Google Maps.
          </p>
        </div>

        {/* Foto della sede */}
        <div className="overflow-hidden rounded-3xl border border-brand shadow-sm">
          <Image
            src={location.buildingPhoto}
            alt="Foto dello stabile"
            width={1200}
            height={600}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Due box affiancati con informazioni */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Box indirizzo */}
          <div className="brand-card-soft p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Indirizzo
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-brand-primary">
              Vieni a trovarci
            </h2>

            <p className="mb-6 text-lg leading-8 text-brand-soft">
              {location.address}
            </p>

            {/*
              Link esterno verso Google Maps.
              target="_blank" apre in una nuova scheda.
              rel="noreferrer" è una buona pratica di sicurezza/privacy.
            */}
            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="brand-button-primary inline-block px-6 py-3"
            >
              Apri su Google Maps
            </a>
          </div>

          {/* Box testo informativo */}
          <div className="brand-card p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Informazioni utili
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-brand-primary">
              Raggiungerci è semplice
            </h2>

            <p className="leading-8 text-brand-soft">
              Consulta la mappa per individuare facilmente la nostra posizione e
              ottenere indicazioni stradali rapide. Per qualsiasi informazione
              aggiuntiva puoi contattarci direttamente tramite i riferimenti
              presenti nella sezione dedicata.
            </p>
          </div>
        </div>

        {/*
          Mappa incorporata con iframe.
          Un iframe permette di "incastrare" una pagina esterna dentro la tua pagina.
        */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-brand shadow-sm">
          <iframe
            src={location.googleMapsEmbedUrl}
            width="100%"
            height="430"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa sede Sanitaria Pico"
          />
        </div>
      </section>

      {/* Sezione finale di supporto */}
      <section className="mt-20 bg-brand-soft-2 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="brand-card bg-white p-8 text-center md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              Punto di riferimento
            </p>

            <h2 className="mb-5 text-3xl font-bold text-brand-primary">
              Una sede facilmente individuabile e accessibile
            </h2>

            <p className="mx-auto max-w-3xl leading-8 text-brand-soft">
              Abbiamo pensato a uno spazio chiaro, accogliente e semplice da
              raggiungere, per offrire un’esperienza ordinata e professionale
              fin dal primo contatto.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
