export default function ActionsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-horizon-dark mb-10">
        Nos moyens d’action
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold text-horizon-gold mb-3">
            Nos outils
          </h2>
          <p>
            Nous utilisons des outils matériels et immatériels modernes et
            innovants pour répondre efficacement aux besoins de nos clients.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-horizon-gold mb-3">
            Notre équipe
          </h2>
          <p>
            Une équipe permanente restreinte et un vaste réseau de consultants
            locaux et internationaux répartis en Afrique, Europe, Asie,
            Amériques.
          </p>
        </div>
      </div>
    </section>
  );
}
