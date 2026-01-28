import PageHero from "@/components/ui/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Qui sommes-nous"
        subtitle="Un cabinet engagé pour la durabilité, la conformité et l’impact social en Afrique."
      />

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-12">

          <div>
            <h2 className="text-2xl font-bold text-horizon-dark mb-4">
              Présentation
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Horizon Plus est un cabinet de formation, d’assistance-conseil,
              d’étude et de gestion de projets basé à Abidjan, en Côte d’Ivoire.
              Son axe stratégique repose sur le développement durable,
              la Responsabilité Sociale des Entreprises (RSE),
              la Diligence Raisonnable des Droits de l’Homme (DRDH)
              et l’Audit Social.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-gray-50 shadow">
              <h3 className="font-semibold text-xl text-horizon-blue mb-3">
                Notre vision
              </h3>
              <p className="text-gray-600">
                Rendre la durabilité et la conformité accessibles à toutes
                les entreprises en Afrique.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-gray-50 shadow">
              <h3 className="font-semibold text-xl text-horizon-blue mb-3">
                Notre mission
              </h3>
              <p className="text-gray-600">
                Former, outiller et accompagner les entreprises dans
                leur politique de durabilité et leur recherche de conformité.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
