import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/dove-ci-troviamo", label: "Dove ci troviamo" },
  { href: "/orari-contatti", label: "Orari e contatti", highlight: true },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand bg-white/92 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="flex items-center justify-center gap-3 md:justify-start"
        >
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#d7ddd7]">
            <Image
              src="/logo.jpeg"
              alt="Logo Sanitaria Pico"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
              priority
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold leading-tight tracking-[0.08em] text-brand-primary">
              SANITARIA PICO
            </h1>
            <p className="text-sm text-brand-soft">Soluzioni ortopediche su misura a Mirandola</p>
          </div>
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium md:justify-end md:gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
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