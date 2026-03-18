import Link from "next/link";
import { getSiteContent } from "../lib/api";

export default async function HomePage() {
  const content = await getSiteContent();
  const { home } = content;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Benvenuti
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              {home.heroTitle}
            </h2>

            <p className="mb-8 text-lg leading-8 text-gray-600">
              {home.heroDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/chi-siamo"
                className="rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90"
              >
                Scopri chi siamo
              </Link>

              <Link
                href="/orari-contatti"
                className="rounded-xl border px-5 py-3 transition hover:bg-gray-50"
              >
                Vedi contatti
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border bg-gray-50 p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold">{home.servicesTitle}</h3>
            <p className="mb-4 leading-8 text-gray-600">{home.servicesText}</p>
            <p className="leading-8 text-gray-600">
              L’obiettivo è dare subito fiducia a chi visita la pagina e far
              capire rapidamente il valore della tua attività.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold">{home.objectiveTitle}</h3>
            <p className="text-gray-600">{home.objectiveText}</p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold">{home.reliabilityTitle}</h3>
            <p className="text-gray-600">{home.reliabilityText}</p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold">{home.contactsTitle}</h3>
            <p className="text-gray-600">{home.contactsText}</p>
          </div>
        </div>
      </section>
    </main>
  );
}