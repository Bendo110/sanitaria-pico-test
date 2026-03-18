import Image from "next/image";
import { getSiteContent } from "../../lib/api";

export default async function ChiSiamoPage() {
  const content = await getSiteContent();
  const { about } = content;

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
          {about.sectionLabel}
        </p>

        <h1 className="mb-10 text-4xl font-bold">{about.title}</h1>

        <div className="flex justify-center">
          <Image
            src={about.photo}
            alt={about.personName}
            width={320}
            height={320}
            className="rounded-3xl object-cover shadow-md"
          />
        </div>

        <h2 className="mt-8 text-2xl font-semibold">{about.personRole}</h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-gray-600">
          {about.description}
        </p>
      </div>
    </main>
  );
}