import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getSiteContent } from "@/lib/api";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const content = await getSiteContent();

  return content.services.items.map((service: { slug: string }) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const content = await getSiteContent();
  const service = content.services.items.find(
    (item: { slug: string }) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-brand-primary">
      <section className="mx-auto max-w-[88rem]">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="brand-card-soft overflow-hidden">
            <Image
              src={service.image}
              alt={service.imageAlt}
              width={1200}
              height={780}
              className="h-[320px] w-full object-cover md:h-full"
            />
          </div>

          <div className="brand-card-soft p-8 md:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              {content.services.sectionLabel}
            </p>

            <h1 className="mb-5 text-4xl font-bold md:text-5xl">
              {content.services.titlePrefix}: {service.detailsTitle}
            </h1>

            <p className="mb-5 max-w-3xl leading-8 text-brand-soft">
              {service.overview}
            </p>

            <p className="max-w-3xl leading-8 text-brand-soft">
              {service.detailsDescription}
            </p>

            <div className="mt-8">
              <h2 className="mb-4 text-xl font-semibold text-brand-primary">
                Contenuti placeholder
              </h2>

              <div className="grid gap-3 sm:grid-cols-3">
                {service.highlights.map((item: string) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-brand bg-white px-4 py-4 text-sm text-brand-primary shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={content.services.ctaHref}
                className="brand-button-primary px-6 py-3"
              >
                {content.services.ctaLabel}
              </Link>

              <Link
                href="/"
                className="brand-button-secondary px-6 py-3"
              >
                Torna alla home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
