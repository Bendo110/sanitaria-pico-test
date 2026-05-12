// Importiamo la funzione che recupera i contenuti del sito.
import { getSiteContent } from "../../lib/api";

// Pagina dedicata a orari e contatti.
export default async function OrariContattiPage() {
  // Recuperiamo i dati dal content service.
  const content = await getSiteContent();

  // Estraiamo soltanto la sezione contacts.
  const { contacts } = content;

  return (
    <main className="bg-white px-6 py-6 md:py-8 text-brand-primary">
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
          <div className="brand-card-soft self-start p-8">
            <h2 className="mb-4 text-2xl font-semibold text-brand-primary">
              {contacts.hoursTitle}
            </h2>

            {/*
              Elenco degli orari.
              contacts.hours è un array di stringhe.
              .map() serve per trasformare ogni elemento dell'array in JSX.
            */}
            <div className="mx-auto w-full max-w-2xl rounded-2xl border border-brand bg-white px-5 py-4 text-brand-primary shadow-sm">
              <div className="space-y-3">
                {contacts.hours.map((item: string) => (
                  <p key={item} className="text-lg leading-8">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Colonna contatti */}
          <div className="brand-card p-8">
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

              <div className="rounded-2xl border border-brand bg-brand-soft-2 px-5 py-4">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand-secondary">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/393402007098"
                  className="inline-flex items-center gap-2 text-lg text-brand-primary hover:text-brand-secondary"
                >
                  <span aria-hidden="true" className="inline-flex text-brand-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M19.05 4.91A10 10 0 0 0 3.38 17.03L2 22l5.09-1.33A10 10 0 1 0 19.05 4.9Zm-7.07 15.4a8.33 8.33 0 0 1-4.24-1.16l-.3-.18-3.02.79.81-2.95-.2-.31a8.33 8.33 0 1 1 6.95 3.81Zm4.57-6.24c-.25-.13-1.5-.74-1.73-.83s-.4-.13-.56.13-.65.83-.8 1-.29.2-.54.07a6.8 6.8 0 0 1-2-1.23 7.49 7.49 0 0 1-1.39-1.73c-.15-.26 0-.4.11-.53.11-.11.25-.29.38-.43s.17-.25.25-.42a.45.45 0 0 0 0-.43c-.07-.13-.56-1.36-.76-1.86s-.4-.42-.56-.43h-.47a.9.9 0 0 0-.65.3 2.72 2.72 0 0 0-.84 2 4.75 4.75 0 0 0 1 2.51 10.81 10.81 0 0 0 4.14 3.66 14.04 14.04 0 0 0 1.39.51 3.34 3.34 0 0 0 1.53.1 2.51 2.51 0 0 0 1.64-1.15 2 2 0 0 0 .14-1.15c-.05-.08-.22-.13-.47-.26Z" />
                    </svg>
                  </span>
                  <span>{contacts.mobile}</span>
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
