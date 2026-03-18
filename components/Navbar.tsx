import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/dove-ci-troviamo", label: "Dove ci troviamo" },
  { href: "/orari-contatti", label: "Orari e contatti" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl font-bold">Il Mio Sito</h1>
          <p className="text-sm text-gray-500">Landing page professionale</p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm font-medium md:gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}