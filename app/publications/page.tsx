import PageHero from "@/components/ui/PageHero";

const books = [
  "La pratique de la communication dans les entreprises ivoiriennes",
  "La communication administrative : l’art de la communication écrite",
  "Communication d’entreprise en Côte d’Ivoire – Tome 1 : État des lieux",
];

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        title="Publications"
        subtitle="Nos productions intellectuelles et travaux de recherche."
      />

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold text-horizon-dark mb-8">
            Livres
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-horizon-blue">
                  {book}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-horizon-dark mb-4">
              Rapports & articles
            </h2>
            <p className="text-gray-600">À venir…</p>
          </div>

        </div>
      </section>
    </>
  );
}
