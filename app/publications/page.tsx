export default function PublicationsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-horizon-dark mb-10">
        Publications
      </h1>

      <h2 className="text-xl font-semibold text-horizon-gold mb-4">
        Livres
      </h2>

      <ul className="list-disc list-inside space-y-3 mb-10">
        <li>La pratique de la communication dans les entreprises ivoiriennes</li>
        <li>La communication administrative : l’art de la communication écrite</li>
        <li>
          Communication d’entreprise en Côte d’Ivoire – Tome 1 : État des lieux
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-horizon-gold mb-4">
        Rapports et articles
      </h2>
      <p>À venir…</p>
    </section>
  );
}
