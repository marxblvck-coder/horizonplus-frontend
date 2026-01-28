"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-20 bg-horizon-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-horizon-gold via-transparent to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Prêt à collaborer avec nous ?
        </motion.h2>

        <p className="mt-8 text-gray-300 text-lg md:text-xl font-light">
          Contactez Horizon Plus pour bénéficier d’un accompagnement professionnel et durable.
        </p>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12"
        >
          <Link href="/contact">
            <button className="px-10 py-5 rounded-full bg-horizon-gold text-black font-black text-lg shadow-xl hover:shadow-horizon-gold/20 transition-all">
              Contactez-nous maintenant
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}