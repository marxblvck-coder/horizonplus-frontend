"use client";
import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";

export default function AboutPage() {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="bg-white">
      <PageHero
        title="Qui sommes-nous"
        subtitle="Un cabinet engagé pour la durabilité, la conformité et l’impact social en Afrique."
      />

      <section className="py-24 max-w-6xl mx-auto px-6 space-y-24">
        {/* Présentation */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}
          className="grid lg:grid-cols-3 gap-12 items-start"
        >
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-black text-horizon-dark italic border-b-4 border-horizon-gold inline-block">
              Présentation
            </h2>
          </div>
          <div className="lg:col-span-2 text-gray-600 leading-[1.8] text-xl font-light">
            Horizon Plus est un cabinet de formation, d’assistance-conseil,
            d’étude et de gestion de projets basé à Abidjan, en Côte d’Ivoire.
            Son axe stratégique repose sur le développement durable,
            la <span className="text-horizon-blue font-semibold">Responsabilité Sociale des Entreprises (RSE)
            la Diligence Raisonnable des Droits de l’Homme (DRDH)
            et l’Audit Social.</span>,
          </div>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { 
              title: "Notre vision", 
              text: "Rendre la durabilité et la conformité accessibles à toutes les entreprises en Afrique.",
              icon: "✨",
              bg: "bg-horizon-blue/5"
            },
            { 
              title: "Notre mission", 
              text: "Former, outiller et accompagner les entreprises dans leur politique de durabilité et leur recherche de conformité.",
              icon: "🚀",
              bg: "bg-horizon-gold/5"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className={`p-12 rounded-[3rem] ${item.bg} border border-white shadow-xl flex flex-col items-start`}
            >
              <span className="text-4xl mb-6">{item.icon}</span>
              <h3 className="font-bold text-2xl text-horizon-dark mb-4">{item.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}