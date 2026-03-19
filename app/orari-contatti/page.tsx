import { getSiteContent } from "../../lib/api";

export default async function OrariContattiPage() {
  const content = await getSiteContent();
  const { contacts } = content;

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-brand-primary">
      <section className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
            {contacts.sectionLabel}
          </p>

          <h1 className="mb-5 text-4xl font-bold md:text-5xl">
            {contacts.title}
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-brand-soft">
            Qui trovi tutti i riferimenti utili per contattarci, insieme agli
            orari di disponibilità e alle informazioni principali.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="brand-card-soft p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Disponibilità
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-brand-primary">
              Orari
            </h2>

            <p className="mb-6 leading-8 text-brand-soft">
              {contacts.description}
            </p>

            <div className="space-y-4">
              {contacts.hours.map((item: string) => (
                <div
                  key={item}
                  className="rounded-2xl border border-brand bg-white px-5 py-4 text-brand-primary shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="brand-card p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Riferimenti
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-brand-primary">
              Contatti
            </h2>

            <div className="space-y-5">
              <div className="rounded-2xl border border-brand bg-brand-soft-2 px-5 py-4">
                <p className="mb-1 text-sm font-semibold uppercase tracking-[0.12em] text-brand-secondary">
                  Telefono
                </p>
                <a href={`tel:${contacts.phone}`} className="text-lg text-brand-primary hover:text-brand-secondary">{contacts.phone}</a>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-soft-2 px-5 py-4">
                <p className="mb-1 text-sm font-semibold uppercase tracking-[0.12em] text-brand-secondary">
                  Cellulare
                </p>
                <a href={`tel:${contacts.mobile}`} className="text-lg text-brand-primary hover:text-brand-secondary">{contacts.mobile}</a>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-soft-2 px-5 py-4">
                <p className="mb-1 text-sm font-semibold uppercase tracking-[0.12em] text-brand-secondary">
                  Email
                </p>
                <a href={`mailto:${contacts.email}`} className="text-lg text-brand-primary hover:text-brand-secondary">{contacts.email}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="brand-card bg-white p-8 text-center md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              Siamo a disposizione
            </p>

            <h2 className="mb-5 text-3xl font-bold text-brand-primary">
              Contattaci per informazioni e assistenza
            </h2>

            <p className="mx-auto max-w-3xl leading-8 text-brand-soft">
              Saremo lieti di rispondere alle tue richieste e fornirti tutte le
              indicazioni necessarie con chiarezza, disponibilità e attenzione.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}