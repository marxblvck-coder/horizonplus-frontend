export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-horizon-dark mb-8">
        Qui sommes-nous
      </h1>

      <p className="mb-6 text-lg leading-relaxed">
        <strong>Horizon Plus</strong> est un cabinet de formation,
        d’assistance-conseil, d’étude et de gestion de projets basé à Abidjan,
        en Côte d’Ivoire.
      </p>

      <p className="mb-10 leading-relaxed">
        Notre axe stratégique est le développement durable et la conformité,
        notamment la Responsabilité Sociale des Entreprises (RSE),
        la Diligence Raisonnable des Droits de l’Homme (DRDH)
        et l’Audit Social.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold text-horizon-gold mb-3">
            Notre vision
          </h2>
          <p>
            Rendre la durabilité et la conformité accessibles à toutes
            les entreprises en Afrique.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-horizon-gold mb-3">
            Notre mission
          </h2>
          <p>
            Former, outiller et accompagner les entreprises dans leur politique
            de durabilité et leur recherche de conformité.
          </p>
        </div>
      </div>
    </section>
  );
}
