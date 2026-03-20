// Importiamo la funzione che recupera i contenuti del sito.
import { getSiteContent } from "../../lib/api";

// Pagina dedicata a orari e contatti.
export default async function OrariContattiPage() {
  // Recuperiamo i dati dal content service.
  const content = await getSiteContent();

  // Estraiamo soltanto la sezione contacts.
  const { contacts } = content;

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-brand-primary">
      <section className="mx-auto max-w-[88rem]">
        {/* Intestazione pagina */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
            {contacts.sectionLabel}
          </p>

          <h1 className="mb-5 text-4xl font-bold md:text-5xl">
            {contacts.title}
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-brand-soft">
            {contacts.introText}
          </p>
        </div>

        {/*
          Griglia con due blocchi:
          1) orari
          2) contatti
        */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Colonna orari */}
          <div className="brand-card-soft p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
              {contacts.hoursEyebrow}
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-brand-primary">
              {contacts.hoursTitle}
            </h2>

            <p className="mb-6 leading-8 text-brand-soft">
              {contacts.description}
            </p>

            {/*
              Elenco degli orari.
              contacts.hours è un array di stringhe.
              .map() serve per trasformare ogni elemento dell'array in JSX.
            */}
            <div className="space-y-4">
              {contacts.hours.map((item: string) => (
                <div
                  // key aiuta React a riconoscere in modo univoco ogni elemento della lista.
                  key={item}
                  className="rounded-2xl border border-brand bg-white px-5 py-4 text-brand-primary shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Colonna contatti */}
          <div className="brand-card p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
              {contacts.contactsEyebrow}
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-brand-primary">
              {contacts.contactsTitle}
            </h2>

            {/* space-y-5 aggiunge spazio verticale tra i box interni */}
            <div className="space-y-5">
              {/* Box telefono */}
              <div className="rounded-2xl border border-brand bg-brand-soft-2 px-5 py-4">
                <p className="mb-1 text-sm font-semibold uppercase tracking-[0.12em] text-brand-secondary">
                  {contacts.phoneLabel}
                </p>

                {/*
                  tel: crea un link che prova ad aprire il telefono o il dialer.
                  Le backtick ` ` servono per le template string.
                  ${...} inserisce una variabile dentro la stringa.
                */}
                <a href={`tel:${contacts.phone}`} className="text-lg text-brand-primary hover:text-brand-secondary">
                  {contacts.phone}
                </a>
              </div>

              {/* Box cellulare */}
              <div className="rounded-2xl border border-brand bg-brand-soft-2 px-5 py-4">
                <p className="mb-1 text-sm font-semibold uppercase tracking-[0.12em] text-brand-secondary">
                  {contacts.mobileLabel}
                </p>
                <a href={`tel:${contacts.mobile}`} className="text-lg text-brand-primary hover:text-brand-secondary">
                  {contacts.mobile}
                </a>
              </div>

              {/* Box email */}
              <div className="rounded-2xl border border-brand bg-brand-soft-2 px-5 py-4">
                <p className="mb-1 text-sm font-semibold uppercase tracking-[0.12em] text-brand-secondary">
                  {contacts.emailLabel}
                </p>

                {/*
                  mailto: apre il client email predefinito dell'utente.
                */}
                <a href={`mailto:${contacts.email}`} className="text-lg text-brand-primary hover:text-brand-secondary">
                  {contacts.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione finale */}
        <div className="mt-12">
          <div className="brand-card bg-white p-8 text-center md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              {contacts.finalEyebrow}
            </p>

            <h2 className="mb-5 text-3xl font-bold text-brand-primary">
              {contacts.finalTitle}
            </h2>

            <p className="mx-auto max-w-3xl leading-8 text-brand-soft">
              {contacts.finalDescription}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
