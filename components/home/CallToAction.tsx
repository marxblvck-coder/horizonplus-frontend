import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-24 bg-horizon-dark text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold">
          Prêt à collaborer avec nous ?
        </h2>

        <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
          Contactez Horizon Plus pour bénéficier d’un accompagnement
          professionnel, durable et adapté à vos enjeux.
        </p>

        <div className="mt-10">
          <Link href="/contact">
            <button className="px-8 py-4 rounded-xl bg-horizon-gold text-black font-semibold text-lg hover:scale-105 transition">
              Contactez-nous
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
