import Link from "next/link";
import { getSiteContent } from "../lib/api";

export default async function HomePage() {
  const content = await getSiteContent();
  const { home } = content;

  return (
    <main className="min-h-screen bg-white text-brand-primary">
      <section className="brand-section border-b border-brand">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              Benvenuti in Sanitaria Pico
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {home.heroTitle}
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-brand-soft">
              {home.heroDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/chi-siamo"
                className="brand-button-primary px-6 py-3"
              >
                Scopri chi siamo
              </Link>

              <Link
                href="/dove-ci-troviamo"
                className="brand-button-secondary px-6 py-3"
              >
                Dove ci troviamo
              </Link>
            </div>
          </div>

          <div className="brand-card-soft p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Il nostro impegno
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-brand-primary md:text-3xl">
              {home.servicesTitle}
            </h2>

            <p className="mb-4 leading-8 text-brand-soft">
              {home.servicesText}
            </p>

            <p className="leading-8 text-brand-soft">
              Offriamo un punto di riferimento affidabile, chiaro e accogliente,
              con attenzione alle esigenze delle persone e alla qualità del servizio.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              Perché scegliere noi
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Un servizio pensato per essere vicino alle persone
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="brand-card p-7">
              <h3 className="mb-3 text-xl font-semibold text-brand-primary">
                {home.objectiveTitle}
              </h3>
              <p className="leading-7 text-brand-soft">
                {home.objectiveText}
              </p>
            </div>

            <div className="brand-card p-7">
              <h3 className="mb-3 text-xl font-semibold text-brand-primary">
                {home.reliabilityTitle}
              </h3>
              <p className="leading-7 text-brand-soft">
                {home.reliabilityText}
              </p>
            </div>

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

      <section className="bg-brand-soft-2 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              Professionalità e cura
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Siamo a disposizione per aiutarti con attenzione e competenza
            </h2>
            <p className="max-w-2xl leading-8 text-brand-soft">
              Mettiamo al centro la persona, con un approccio affidabile,
              chiaro e orientato alla qualità del servizio. Contattaci per
              conoscere meglio la nostra attività, gli orari e tutte le
              informazioni utili.
            </p>
          </div>

          <div className="brand-card bg-white p-8">
            <h3 className="mb-4 text-2xl font-semibold text-brand-primary">
              Hai bisogno di informazioni?
            </h3>

            <p className="mb-6 leading-8 text-brand-soft">
              Consulta gli orari, i contatti e tutti i riferimenti utili per
              raggiungerci o parlare con noi.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/orari-contatti"
                className="brand-button-primary px-6 py-3"
              >
                Vai ai contatti
              </Link>

              <Link
                href="/dove-ci-troviamo"
                className="brand-button-secondary px-6 py-3"
              >
                Apri la sede
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}