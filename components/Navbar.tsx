// Image serve per mostrare immagini ottimizzate in Next.js.
import Image from "next/image";

// Link serve per navigare tra pagine interne del sito.
import Link from "next/link";

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
  };
};

// Componente Navbar riutilizzabile.
export default function Navbar({ site, navigation }: NavbarProps) {
  const links = [
    { href: "/", label: navigation.homeLabel },
    { href: "/chi-siamo", label: navigation.aboutLabel },
    { href: "/dove-ci-troviamo", label: navigation.locationLabel },
    { href: "/orari-contatti", label: navigation.contactsLabel, highlight: true },
  ];

  return (
    // Header fisso in alto durante lo scroll.
    // - sticky top-0 = resta attaccato in alto
    // - z-50 = sta sopra ad altri elementi
    // - backdrop-blur-md = sfoca leggermente ciò che c'è dietro
    <header className="sticky top-0 z-50 border-b border-brand bg-white/92 backdrop-blur-md">
      {/*
        nav è l'elemento semantico per la navigazione.
        Su mobile gli elementi stanno in colonna, da md in su vanno in riga.
      */}
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        {/*
          Link cliccabile che porta alla home.
          Dentro contiene logo + nome sito.
        */}
        <Link
          href="/"
          className="flex items-center justify-center gap-3 md:justify-start"
        >
          {/* Contenitore del logo */}
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#d7ddd7]">
            <Image
              src="/logo.jpeg"
              alt={site.logoAlt}
              width={56}
              height={56}
              className="h-14 w-14 object-contain"

              // priority dice a Next.js che questa immagine è importante
              // e dovrebbe essere caricata prima.
              priority
            />
          </div>

          {/* Testo del brand */}
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold leading-tight tracking-[0.08em] text-brand-primary">
              {site.name}
            </h1>
            <p className="text-sm text-brand-soft">
              {site.tagline}
            </p>
          </div>
        </Link>

        {/* Contenitore dei link di navigazione */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium md:justify-end md:gap-4">
          {/*
            .map() scorre tutti i link dell'array e per ognuno crea un componente Link.
          */}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}

              // Qui scegliamo la classe in modo dinamico.
              // Se il link ha highlight=true, usiamo il bottone principale.
              // Altrimenti usiamo uno stile più semplice.
              className={
                link.highlight
                  ? "brand-button-primary px-4 py-2"
                  : "rounded-full px-2 py-1 text-brand-primary transition hover:bg-brand-soft-2 hover:text-brand-secondary"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
