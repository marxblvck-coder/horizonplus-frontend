import PageHero from "@/components/ui/PageHero";

const services = [
  {
    title: "Formation",
    text: "Formations personnalisées en développement durable, RSE, DRDH, suivi-évaluation et management.",
  },
  {
    title: "Assistance-conseil",
    text: "Conseils stratégiques basés sur l’analyse de données et les meilleures pratiques.",
  },
  {
    title: "Études & Audit social",
    text: "Études sectorielles, audits sociaux et monitoring avec des outils innovants.",
  },
  {
    title: "Gestion de projets",
    text: "Conception, mise en œuvre et suivi-évaluation de projets de développement.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Que faisons-nous"
        subtitle="Des solutions concrètes pour accompagner la transformation durable des organisations."
      />

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl text-horizon-dark mb-4">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
