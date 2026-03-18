import Image from "next/image";
import { getSiteContent } from "../../lib/api";

export default async function DoveCiTroviamoPage() {
  const content = await getSiteContent();
  const { location } = content;

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            {location.sectionLabel}
          </p>
          <h1 className="mb-10 text-4xl font-bold">{location.title}</h1>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-md">
          <Image
            src={location.buildingPhoto}
            alt="Foto dello stabile"
            width={1200}
            height={500}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg font-medium">{location.address}</p>

          <a
            href={location.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90"
          >
            Apri su Google Maps
          </a>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border shadow-sm">
          <iframe
            src={location.googleMapsEmbedUrl}
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  );
}