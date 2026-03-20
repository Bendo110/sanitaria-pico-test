// Importiamo il componente Link di Next.js.
// Serve per creare collegamenti tra le pagine del sito.
// È preferibile rispetto al tag HTML <a> quando navighi dentro il progetto,
// perché Next.js gestisce meglio il cambio pagina.
import Link from "next/link";

// Importiamo una funzione che recupera i contenuti del sito.
// Questa funzione si trova nella cartella lib, cioè nella parte di "logica di supporto".
import { getSiteContent } from "../lib/api";
import ServicesCarousel from "@/components/ServicesCarousel";

// Questo è il componente principale della Home page.
// "export default" significa che questo file esporta questa funzione come contenuto principale.
// "async" significa che dentro la funzione usiamo operazioni asincrone,
// cioè operazioni che possono richiedere un po' di tempo, come una chiamata a un'API.
export default async function HomePage() {
  // Qui chiediamo i contenuti del sito al servizio esterno.
  // "await" dice a JavaScript: aspetta il risultato prima di continuare.
  const content = await getSiteContent();

  // Qui estraiamo solo la sezione "home" dall'oggetto completo ricevuto.
  // È una scorciatoia equivalente a scrivere: const home = content.home;
  const { home, services } = content;

  // Il return restituisce il markup JSX, cioè una sintassi simile a HTML
  // che React e Next.js usano per descrivere l'interfaccia.
  return (
    // <main> rappresenta il contenuto principale della pagina.
    // className contiene classi Tailwind CSS.
    // - min-h-screen = altezza minima pari all'intera finestra
    // - bg-white = sfondo bianco
    // - text-brand-primary = colore testo principale personalizzato
    <main className="min-h-screen bg-white text-brand-primary">
      {/*
        Prima sezione della Home: il blocco iniziale, detto spesso "hero section".
        Qui l'utente vede il messaggio principale appena entra nel sito.
      */}
      <section className="brand-section border-b border-brand">
        {/*
          Questo div centra il contenuto e limita la larghezza massima.
          - mx-auto = margine orizzontale automatico, quindi centrato
          - grid = usa CSS Grid
          - max-w-6xl = larghezza massima abbastanza ampia
          - px-6 = padding orizzontale
          - py-20 / md:py-28 = padding verticale, più grande su schermi medi e grandi
          - md:grid-cols-2 = da schermi medi in su crea 2 colonne
        */}
        <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
          {/* Colonna sinistra con testo principale */}
          <div>
            {/* Piccola etichetta introduttiva sopra al titolo */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              {home.heroEyebrow}
            </p>

            {/*
              Titolo principale della pagina.
              Il testo arriva dai dati dinamici: home.heroTitle.
            */}
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {home.heroTitle}
            </h1>

            {/*
              Paragrafo descrittivo sotto il titolo.
              Anche questo testo arriva dai contenuti caricati da API.
            */}
            <p className="mb-8 max-w-2xl text-lg leading-8 text-brand-soft">
              {home.heroDescription}
            </p>

            {/* Contenitore dei pulsanti/collegamenti */}
            <div className="flex flex-wrap gap-4">
              {/*
                Link interno verso la pagina "Chi siamo".
                Usa uno stile di bottone principale definito nel CSS globale.
              */}
              <Link
                href="/chi-siamo"
                className="brand-button-primary px-6 py-3"
              >
                {home.primaryCtaLabel}
              </Link>

              {/*
                Secondo link interno verso la pagina della sede.
                Questo ha uno stile secondario.
              */}
              <Link
                href="/dove-ci-troviamo"
                className="brand-button-secondary px-6 py-3"
              >
                {home.secondaryCtaLabel}
              </Link>
            </div>
          </div>

          {/*
            Colonna destra: un riquadro informativo che mette in evidenza i servizi
            o il messaggio di valore principale.
          */}
          <ServicesCarousel
            title={home.servicesTitle}
            slides={services.items}
            buttonLabel={services.buttonLabel}
          />
        </div>
      </section>

      {/*
        Seconda sezione: i punti di forza del sito/attività.
        È organizzata come una griglia di 3 card.
      */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[88rem] px-4 sm:px-6">
          {/* Blocco titolo sezione */}
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              {home.whyChooseEyebrow}
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              {home.whyChooseTitle}
            </h2>
          </div>

          {/*
            Griglia con 3 colonne su schermi medi e grandi.
            Su mobile invece gli elementi vanno uno sotto l'altro.
          */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Prima card */}
            <div className="brand-card p-7">
              <h3 className="mb-3 text-xl font-semibold text-brand-primary">
                {home.objectiveTitle}
              </h3>
              <p className="leading-7 text-brand-soft">
                {home.objectiveText}
              </p>
            </div>

            {/* Seconda card */}
            <div className="brand-card p-7">
              <h3 className="mb-3 text-xl font-semibold text-brand-primary">
                {home.reliabilityTitle}
              </h3>
              <p className="leading-7 text-brand-soft">
                {home.reliabilityText}
              </p>
            </div>

            {/* Terza card */}
            <div className="brand-card p-7">
              <h3 className="mb-3 text-xl font-semibold text-brand-primary">
                {home.contactsTitle}
              </h3>
              <p className="leading-7 text-brand-soft">
                {home.contactsText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*
        Terza sezione: invito all'azione finale.
        Qui spingiamo l'utente ad andare alla pagina dei contatti o della sede.
      */}
      <section className="bg-brand-soft-2 py-16 md:py-20">
        <div className="mx-auto grid max-w-[88rem] items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
          {/* Colonna sinistra con testo descrittivo */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              {home.finalEyebrow}
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              {home.finalTitle}
            </h2>
            <p className="max-w-2xl leading-8 text-brand-soft">
              {home.finalDescription}
            </p>
          </div>

          {/* Colonna destra con box e pulsanti */}
          <div className="brand-card bg-white p-8">
            <h3 className="mb-4 text-2xl font-semibold text-brand-primary">
              {home.finalCardTitle}
            </h3>

            <p className="mb-6 leading-8 text-brand-soft">
              {home.finalCardDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Link alla pagina contatti */}
              <Link
                href="/orari-contatti"
                className="brand-button-primary px-6 py-3"
              >
                {home.finalPrimaryCtaLabel}
              </Link>

              {/* Link alla pagina sede */}
              <Link
                href="/dove-ci-troviamo"
                className="brand-button-secondary px-6 py-3"
              >
                {home.finalSecondaryCtaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
