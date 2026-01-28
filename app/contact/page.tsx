import PageHero from "@/components/ui/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contactez-nous"
        subtitle="Discutons de vos projets et de vos besoins."
      />

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Infos */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-horizon-dark">
              Coordonnées
            </h2>
            <p>📍 Abidjan – Côte d’Ivoire</p>
            <p>📧 contact@horizon.plus.org</p>
            <p>📞 +225 27 00 00 00 00</p>
            <p>📱 +225 07 00 00 00 00</p>
          </div>

          {/* Formulaire */}
          <form className="space-y-6 bg-gray-50 p-8 rounded-xl shadow">
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full border p-3 rounded"
            />
            <input
              type="email"
              placeholder="Adresse email"
              className="w-full border p-3 rounded"
            />
            <textarea
              placeholder="Votre message"
              rows={5}
              className="w-full border p-3 rounded"
            ></textarea>

            <button
              type="submit"
              className="bg-horizon-blue text-white px-6 py-3 rounded-lg hover:bg-horizon-dark transition"
            >
              Envoyer le message
            </button>
          </form>

        </div>
      </section>
    </>
  );
}
