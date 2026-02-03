"use client";
import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="bg-[#fcfdfc]">
      <PageHero
        title={t.about.heroTitle}
        subtitle={t.about.heroSubtitle}
      />

      <section className="py-32 max-w-7xl mx-auto px-6 space-y-32">
        
        {/* Présentation Agrandie */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={revealVariants}
          className="grid lg:grid-cols-12 gap-16 items-start"
        >
          <div className="lg:col-span-4">
            <div className="space-y-4">
              <span className="text-eliaviv-gold font-bold tracking-[0.3em] uppercase text-xs">Notre Essence</span>
              <h2 className="text-5xl font-bold text-eliaviv-green leading-tight">
                {t.about.presentationTitle}
              </h2>
              <div className="w-20 h-1 bg-eliaviv-soft"></div>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <p className="text-2xl md:text-3xl text-gray-600 leading-[1.6] font-light">
              {t.about.presentationText}
              <span className="text-eliaviv-green font-semibold block mt-6">
                {t.about.presentationHighlights}
              </span>
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission - Cartes Spacieuses */}
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { 
              title: t.about.visionTitle, 
              text: t.about.visionText,
              icon: "🌱", // Icône plus organique pour le renouveau
              label: "L'Avenir",
              gradient: "from-eliaviv-green/5 to-transparent"
            },
            { 
              title: t.about.missionTitle, 
              text: t.about.missionText,
              icon: "💎", // Icône d'excellence
              label: "L'Engagement",
              gradient: "from-eliaviv-gold/5 to-transparent"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`group relative p-16 rounded-[4rem] bg-gradient-to-br ${item.gradient} border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden`}
            >
              {/* Filigrane décoratif */}
              <div className="absolute -right-8 -top-8 text-9xl opacity-[0.03] group-hover:rotate-12 transition-transform duration-700">
                {item.icon}
              </div>

              <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-eliaviv-soft mb-8">
                {item.label}
              </span>
              
              <div className="flex flex-col gap-6">
                <h3 className="font-bold text-4xl text-eliaviv-green group-hover:text-eliaviv-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xl text-gray-500 leading-relaxed font-light">
                  {item.text}
                </p>
              </div>

              {/* Barre de progression décorative */}
              <div className="mt-12 w-12 h-[2px] bg-eliaviv-gold group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* Section Citation / Valeur (Optionnel mais Premium) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center py-20 border-y border-gray-100"
        >
          <p className="text-4xl md:text-5xl font-serif italic text-eliaviv-green/80">
            "Cultiver l'excellence pour faire éclore votre potentiel."
          </p>
        </motion.div>

      </section>
    </main>
  );
}