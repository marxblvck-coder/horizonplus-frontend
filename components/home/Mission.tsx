export default function Mission() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-horizon-dark">
          Notre mission
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
          Horizon Plus œuvre pour un développement inclusif, durable et
          centré sur l’humain à travers des actions concrètes,
          innovantes et mesurables.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold text-xl text-horizon-blue">
              Engagement social
            </h3>
            <p className="mt-3 text-gray-600">
              Actions locales à fort impact communautaire.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold text-xl text-horizon-blue">
              Développement durable
            </h3>
            <p className="mt-3 text-gray-600">
              Solutions respectueuses de l’environnement.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold text-xl text-horizon-blue">
              Innovation
            </h3>
            <p className="mt-3 text-gray-600">
              Approches modernes et technologiques.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
