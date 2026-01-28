"use client";
import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const services = [
  { 
    title: "Formation", 
    shortText: "Programmes de formation personnalisés en développement durable, RSE, DRDH, suivi-évaluation et management.", 
    fullText: "Nous proposons des programmes de formation personnalisés adaptés aux besoins des entreprises, des ONG et des particuliers. Ces formations couvrent des domaines variés tels que le développement durable, la RSE, la DRDH, le monitoring, le suivi et évaluation de projets, etc. D'autres domaines touchant le management des organisations, la communication et le développement personnel sont aussi abordés. Chaque module est élaboré par un expert qualifié et peut être dispensé en présentiel ou en ligne.",
    num: "01" 
  },
  { 
    title: "Assistance-conseil", 
    shortText: "Conseils stratégiques basés sur l’analyse de données et les meilleures pratiques.", 
    fullText: "Nous offrons des services d'assistance conseil pour aider les entreprises et les ONG à prendre des décisions éclairées. Cela comprend des conseils stratégiques en terme de formation, de gestion, de recrutement, d'analyse de rentabilité, etc. Notre approche est axée sur l’analyse de données pertinentes et sur l'élaboration de recommandations fondées sur des preuves.",
    num: "02" 
  },
  { 
    title: "Étude et Audit social", 
    shortText: "Études sectorielles, audits sociaux et monitoring avec des outils innovants.", 
    fullText: "Nous entendons nous positionner comme un cabinet de référence en termes d'audit et de monitoring. Nous offrons aussi des services pour des études thématiques et/ou sectorielles à la demande. Nous disposons d'outils innovants de collecte et d'analyse de données et un réseau de consultants qualifiés et fiables, doublé de notre contrôle qualité pour assurer une qualité et une crédibilité optimale à toutes nos études.",
    num: "03" 
  },
  { 
    title: "Gestion de projets", 
    shortText: "Conception, mise en œuvre et suivi-évaluation de projets de développement.", 
    fullText: "Nous proposons notre expertise pour la gestion de projets de développement. En plus d'implémenter de bout en bout des projets, nous proposons aussi notre expertise en terme de suivi et évaluation de projets de développement. Nous avons la maîtrise et l'expertise d'approches et de méthodologies innovantes qui ont fait leur preuve.",
    num: "04" 
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <main className="bg-gray-50/50 min-h-screen">
      <PageHero title="Que faisons-nous" subtitle="Des solutions concrètes pour accompagner la transformation durable." />

      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }} 
            onClick={() => setSelectedService(s)}
            className="group relative bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:bg-horizon-blue transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between h-full"
          >
            <span className="absolute -right-4 -top-4 text-8xl font-black text-gray-50 group-hover:text-white/10 transition-all duration-700">
              {s.num}
            </span>

            <div className="relative z-10">
              <h3 className="font-bold text-2xl text-horizon-dark mb-6 group-hover:text-white transition-all duration-500 leading-tight">
                {s.title}
              </h3>
              <p className="text-gray-500 group-hover:text-blue-50 leading-relaxed italic transition-colors">
                {s.shortText}
              </p>
            </div>

            <div className="mt-8 flex justify-end">
               <div className="w-12 h-12 rounded-2xl bg-gray-50 group-hover:bg-white/20 flex items-center justify-center text-horizon-blue group-hover:text-white transition-all duration-500 transform group-hover:rotate-[-45deg]">
                  <ArrowRight size={20} strokeWidth={2.5} />
               </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* MODALE DE DÉTAIL */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            {/* Overlay Flou */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-horizon-dark/40 backdrop-blur-md"
            />

            {/* Carte Modale */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden p-8 md:p-12"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 p-2 rounded-full bg-gray-100 hover:bg-horizon-gold transition-colors text-horizon-dark"
              >
                <X size={24} />
              </button>

              <div className="space-y-6">
                <span className="inline-block px-4 py-1 bg-horizon-blue/10 text-horizon-blue rounded-full font-bold text-sm tracking-widest uppercase">
                  Service {selectedService.num}
                </span>
                <h2 className="text-4xl font-black text-horizon-dark leading-tight">
                  {selectedService.title}
                </h2>
                <div className="h-1 w-20 bg-horizon-gold" />
                <p className="text-gray-600 text-lg leading-relaxed font-light italic">
                  {selectedService.fullText}
                </p>
                
                <button 
                  onClick={() => setSelectedService(null)}
                  className="mt-8 px-8 py-4 bg-horizon-dark text-white rounded-2xl font-bold hover:bg-horizon-blue transition-colors shadow-lg"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}