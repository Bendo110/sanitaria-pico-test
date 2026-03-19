import Image from "next/image";
import { getSiteContent } from "../../lib/api";

export default async function ChiSiamoPage() {
  const content = await getSiteContent();
  const { about } = content;

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-brand-primary">
      <section className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
            {about.sectionLabel}
          </p>

          <h1 className="mb-5 text-4xl font-bold md:text-5xl">
            {about.title}
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-brand-soft">
            Conosci meglio la persona e i valori che guidano l’attività, con
            attenzione alla qualità del servizio e al rapporto con le persone.
          </p>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex justify-center">
            <div className="brand-card-soft p-4">
              <Image
                src={about.photo}
                alt={about.personName}
                width={420}
                height={460}
                className="rounded-3xl object-cover"
              />
            </div>
          </div>

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