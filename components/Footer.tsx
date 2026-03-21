import Image from "next/image";
import Link from "next/link";

type ServiceItem = {
  slug: string;
  title: string;
  href: string;
};

type FooterProps = {
  site: {
    name: string;
    logoAlt: string;
  };
  navigation: {
    homeLabel: string;
    aboutLabel: string;
    locationLabel: string;
  };
  services: {
    menuLabel: string;
    items: ServiceItem[];
  };
  contacts: {
    emailLabel: string;
    email: string;
    phoneLabel: string;
    phone: string;
    mobile: string;
  };
  location: {
    address: string;
  };
  footer: {
    copyright: string;
    brandName: string;
    navigationTitle: string;
    contactsTitle: string;
    locationTitle: string;
    whatsappLabel: string;
  };
};

export default function Footer({
  site,
  navigation,
  services,
  contacts,
  location,
  footer,
}: FooterProps) {
  return (
    <footer className="border-t border-brand bg-brand-soft-2">
      <div className="mx-auto max-w-[88rem] px-4 py-10 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#d7ddd7]">
              <Image
                src="/logo.jpeg"
                alt={site.logoAlt}
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
            </div>

            <p className="text-lg font-semibold text-brand-primary">
              {footer.brandName}
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">
              {footer.navigationTitle}
            </h2>

            <div className="flex flex-col gap-3 text-brand-primary">
              <Link href="/" className="transition hover:text-brand-secondary">
                {navigation.homeLabel}
              </Link>

              <details className="group">
                <summary className="cursor-pointer list-none transition hover:text-brand-secondary">
                  {services.menuLabel}
                </summary>

                <div className="mt-3 flex flex-col gap-2 pl-3">
                  {services.items.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.href}
                      className="text-sm text-brand-primary transition hover:text-brand-secondary"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </details>

              <Link
                href="/chi-siamo"
                className="transition hover:text-brand-secondary"
              >
                {navigation.aboutLabel}
              </Link>

              <Link
                href="/dove-ci-troviamo"
                className="transition hover:text-brand-secondary"
              >
                {navigation.locationLabel}
              </Link>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">
              {footer.contactsTitle}
            </h2>

            <div className="flex flex-col gap-3 text-brand-primary">
              <p>
                {contacts.emailLabel}:{" "}
                <a
                  href={`mailto:${contacts.email}`}
                  className="transition hover:text-brand-secondary"
                >
                  {contacts.email}
                </a>
              </p>

              <p>
                {contacts.phoneLabel}:{" "}
                <a
                  href={`tel:${contacts.phone.replace(/\s+/g, "")}`}
                  className="transition hover:text-brand-secondary"
                >
                  {contacts.phone}
                </a>
              </p>

              <p className="flex items-center gap-2">
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
                <span>{footer.whatsappLabel}:</span>
                <a
                  href="https://wa.me/393402007098"
                  className="transition hover:text-brand-secondary"
                >
                  {contacts.mobile}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">
              {footer.locationTitle}
            </h2>

            <p className="leading-7 text-brand-primary">{location.address}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-brand pt-6 text-sm text-brand-primary">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
