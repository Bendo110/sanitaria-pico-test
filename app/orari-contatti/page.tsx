import { getSiteContent } from "../../lib/api";

export default async function OrariContattiPage() {
  const content = await getSiteContent();
  const { contacts } = content;

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            {contacts.sectionLabel}
          </p>
          <h1 className="mb-10 text-4xl font-bold">{contacts.title}</h1>
        </div>

        <div className="rounded-3xl border p-8 shadow-sm">
          <p className="mb-8 text-lg leading-8 text-gray-600">
            {contacts.description}
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold">Orari</h2>
              <div className="space-y-3 text-gray-700">
                {contacts.hours.map((item: string) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">Contatti</h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>Telefono:</strong> {contacts.phone}</p>
                <p><strong>Cellulare:</strong> {contacts.mobile}</p>
                <p><strong>Email:</strong> {contacts.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}