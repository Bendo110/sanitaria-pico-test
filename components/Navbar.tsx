"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ServiceItem = {
  slug: string;
  title: string;
  href: string;
};

type NavbarProps = {
  site: {
    name: string;
    tagline: string;
    logoAlt: string;
  };
  navigation: {
    homeLabel: string;
    aboutLabel: string;
    locationLabel: string;
    contactsLabel: string;
    servicesLabel: string;
  };
  services: {
    menuLabel: string;
    items: ServiceItem[];
  };
};

export default function Navbar({
  site,
  navigation,
  services,
}: NavbarProps) {
  const navbarRef = useRef<HTMLElement | null>(null);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isHamburgerServicesOpen, setIsHamburgerServicesOpen] = useState(false);

  function closeAllMenus() {
    setIsMainMenuOpen(false);
    setIsServicesMenuOpen(false);
    setIsHamburgerServicesOpen(false);
  }

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!navbarRef.current) return;

      const target = event.target as Node | null;
      if (target && !navbarRef.current.contains(target)) {
        closeAllMenus();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  return (
    <header
      ref={navbarRef}
      className="sticky top-0 z-50 border-b border-brand bg-white/92 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          onClick={closeAllMenus}
          className="flex min-w-0 items-center justify-center gap-3 md:justify-start"
        >
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#d7ddd7]">
            <Image
              src="/logo.jpeg"
              alt={site.logoAlt}
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
              priority
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold leading-tight tracking-[0.08em] text-brand-primary">
              {site.name}
            </h1>
            {/* Tagline nascosta per ora; il dato resta disponibile nei contenuti. */}
            {/* <p className="text-sm text-brand-soft">{site.tagline}</p> */}
          </div>
        </Link>

        <div className="flex items-center gap-2 md:ml-auto md:gap-4">
          <div className="hidden items-center gap-3 text-sm font-medium md:flex md:gap-4">
            <Link
              href="/"
              onClick={closeAllMenus}
              className="rounded-full px-2 py-1 text-brand-primary transition hover:bg-brand-soft-2 hover:text-brand-secondary"
            >
              {navigation.homeLabel}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesMenuOpen(true)}
              onMouseLeave={() => setIsServicesMenuOpen(false)}
            >
              <button
                type="button"
                aria-expanded={isServicesMenuOpen}
                onClick={() => setIsServicesMenuOpen((open) => !open)}
                className="rounded-full px-2 py-1 text-brand-primary transition hover:bg-brand-soft-2 hover:text-brand-secondary"
              >
                {navigation.servicesLabel}
              </button>

              {isServicesMenuOpen ? (
                <div className="absolute left-0 top-full w-64 pt-2">
                  <div className="overflow-hidden rounded-2xl border border-brand bg-white p-2 shadow-xl">
                    <div className="flex flex-col gap-1">
                      {services.items.map((service) => (
                        <Link
                          key={service.slug}
                          href={service.href}
                          onClick={closeAllMenus}
                          className="rounded-xl px-4 py-3 text-brand-primary transition hover:bg-brand-soft-2 hover:text-brand-secondary"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <Link
              href="/chi-siamo"
              onClick={closeAllMenus}
              className="rounded-full px-2 py-1 text-brand-primary transition hover:bg-brand-soft-2 hover:text-brand-secondary"
            >
              {navigation.aboutLabel}
            </Link>

            <Link
              href="/dove-ci-troviamo"
              onClick={closeAllMenus}
              className="rounded-full px-2 py-1 text-brand-primary transition hover:bg-brand-soft-2 hover:text-brand-secondary"
            >
              {navigation.locationLabel}
            </Link>

            <Link
              href="/orari-contatti"
              onClick={closeAllMenus}
              className="brand-button-primary px-4 py-2"
            >
              {navigation.contactsLabel}
            </Link>
          </div>

          <div className="relative">
            <button
              type="button"
              aria-label="Apri menu di navigazione"
              aria-expanded={isMainMenuOpen}
              onClick={() => setIsMainMenuOpen((open) => !open)}
              className="cursor-pointer rounded-full border border-brand bg-white p-3 text-brand-primary shadow-sm transition hover:bg-brand-soft-2"
            >
              <span className="flex h-5 w-5 flex-col items-center justify-center gap-1">
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-5 rounded-full bg-current" />
              </span>
            </button>

            {isMainMenuOpen ? (
              <div className="absolute right-0 top-full mt-3 w-64 overflow-hidden rounded-2xl border border-brand bg-white p-2 shadow-xl">
                <div className="flex flex-col gap-1">
                  <Link
                    href="/"
                    onClick={closeAllMenus}
                    className="rounded-xl px-4 py-3 text-brand-primary transition hover:bg-brand-soft-2 hover:text-brand-secondary"
                  >
                    {navigation.homeLabel}
                  </Link>

                  <button
                    type="button"
                    aria-expanded={isHamburgerServicesOpen}
                    onClick={() =>
                      setIsHamburgerServicesOpen((open) => !open)
                    }
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-brand-primary transition hover:bg-brand-soft-2 hover:text-brand-secondary"
                  >
                    <span>{services.menuLabel}</span>
                    <span>{isHamburgerServicesOpen ? "−" : "+"}</span>
                  </button>

                  {isHamburgerServicesOpen ? (
                    <div className="flex flex-col gap-1 px-2 pb-1">
                      {services.items.map((service) => (
                        <Link
                          key={service.slug}
                          href={service.href}
                          onClick={closeAllMenus}
                          className="rounded-xl px-4 py-3 text-sm text-brand-primary transition hover:bg-brand-soft-2 hover:text-brand-secondary"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  ) : null}

                  <Link
                    href="/chi-siamo"
                    onClick={closeAllMenus}
                    className="rounded-xl px-4 py-3 text-brand-primary transition hover:bg-brand-soft-2 hover:text-brand-secondary"
                  >
                    {navigation.aboutLabel}
                  </Link>

                  <Link
                    href="/dove-ci-troviamo"
                    onClick={closeAllMenus}
                    className="rounded-xl px-4 py-3 text-brand-primary transition hover:bg-brand-soft-2 hover:text-brand-secondary"
                  >
                    {navigation.locationLabel}
                  </Link>

                  <Link
                    href="/orari-contatti"
                    onClick={closeAllMenus}
                    className="brand-button-primary mt-1 px-4 py-3 text-center"
                  >
                    {navigation.contactsLabel}
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
}
