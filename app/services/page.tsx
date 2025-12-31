const services = [
  {
    title: "Formation",
    content:
      "Programmes de formation personnalisés en développement durable, RSE, DRDH, suivi-évaluation, management, communication et développement personnel.",
  },
  {
    title: "Assistance-conseil",
    content:
      "Conseils stratégiques fondés sur l’analyse de données pour la formation, la gestion, le recrutement et la rentabilité.",
  },
  {
    title: "Étude et audit social",
    content:
      "Études thématiques, sectorielles, audit social et monitoring avec des outils innovants et un contrôle qualité rigoureux.",
  },
  {
    title: "Gestion de projets",
    content:
      "Gestion complète de projets de développement, suivi-évaluation et méthodologies innovantes éprouvées.",
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-horizon-dark mb-12">
        Que faisons-nous
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-horizon-gold mb-4">
              {service.title}
            </h2>
            <p className="leading-relaxed">{service.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
