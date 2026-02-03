"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

export default function CallToAction() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-eliaviv-green relative overflow-hidden">
      {/* Décoration d'arrière-plan (Texture Arbre abstraite) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[-50%] left-[-10%] w-full h-[200%] rotate-12 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-eliaviv-gold/20 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {t.home.cta.title.split('?')[0]} <br/>
            <span className="text-eliaviv-gold"> {t.home.cta.title.includes('?') ? '?' : ''} </span>
          </h2>

          <p className="max-w-2xl mx-auto text-eliaviv-light/70 text-lg md:text-xl font-light leading-relaxed">
            {t.home.cta.desc}
          </p>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link href="/contact">
              <button className="px-12 py-6 rounded-full bg-eliaviv-gold text-eliaviv-green font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-black/20 hover:bg-white transition-all duration-300">
                {t.home.cta.btn}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Accents visuels sur les bords */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-eliaviv-soft/10 blur-3xl rounded-full" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-eliaviv-gold/10 blur-3xl rounded-full" />
    </section>
  );
}