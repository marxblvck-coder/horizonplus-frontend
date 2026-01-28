import PageHero from "@/components/ui/PageHero";

export default function ActionsPage() {
  return (
    <>
      <PageHero
        title="Nos moyens d’action"
        subtitle="Des ressources humaines et techniques solides pour garantir l’excellence."
      />

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-16">

          {/* Outils */}
          <div>
            <h2 className="text-2xl font-bold text-horizon-dark mb-4">
              Nos outils
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Horizon Plus dispose d’outils matériels et immatériels modernes
              et innovants pour la collecte, l’analyse et le traitement de
              données, adaptés aux exigences des études, audits et projets
              de développement.
            </p>
          </div>

          {/* Équipe */}
          <div>
            <h2 className="text-2xl font-bold text-horizon-dark mb-4">
              Notre équipe
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nous travaillons avec une équipe permanente restreinte pour plus
              de flexibilité, appuyée par un vaste réseau de consultants locaux
              et internationaux répartis en Afrique, en Europe, en Asie,
              aux États-Unis et en Amérique latine.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
