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
  const otherServices = content.services.items.filter(
    (item: { slug: string }) => item.slug !== slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white px-6 py-6 md:py-8 text-brand-primary">
      <section className="mx-auto max-w-[88rem]">
        <div className="grid gap-8 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="brand-card-soft overflow-hidden">
            <Image
              src={service.image}
              alt={service.imageAlt}
              width={1200}
              height={780}
              className="h-[240px] w-full object-contain bg-brand-soft-2 sm:h-full xl:object-cover"
            />
          </div>

          <div className="brand-card-soft p-8 md:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              Servizio
            </p>

            <h1 className="mb-5 text-2xl font-bold md:text-3xl xl:text-4xl">
              {service.detailsTitle}
            </h1>

            <p className="mb-5 max-w-3xl leading-8 text-brand-soft">
              {service.overview}
            </p>

            <p className="max-w-3xl leading-8 text-brand-soft">
              {service.detailsDescription}
            </p>

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

        {otherServices.length > 0 ? (
          <div className="mt-10 text-center">
            <h3 className="mb-4 text-lg font-semibold text-brand-primary">
              Altri servizi
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {otherServices.map(
                (item: { slug: string; title: string; href: string }) => (
                  <Link
                    key={item.slug}
                    href={item.href}
                    className="brand-button-secondary px-5 py-2.5"
                  >
                    {item.title}
                  </Link>
                )
              )}
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}
