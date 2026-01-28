"use client";
import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import { Globe2, Users2, Zap } from "lucide-react";

export default function ActionsPage() {
  return (
    <main className="bg-white overflow-hidden">
      <PageHero 
        title="Nos moyens d’action" 
        subtitle="Ressources techniques et humaines pour garantir l’excellence." 
      />

      <section className="py-24 max-w-6xl mx-auto px-6 space-y-40">
        
        {/* Section Outils avec Slogan en filigrane */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }}
            className="absolute -top-20 -left-10 text-[8rem] font-black text-gray-50 -z-10 leading-none select-none uppercase"
          >
            Horizon<br/>Plus
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-12 rounded-[4rem] shadow-2xl border border-gray-100 relative z-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <Zap className="text-horizon-gold" size={32} />
              <h2 className="text-3xl font-bold text-horizon-dark">Nos outils</h2>
            </div>
            <p className="text-gray-600 leading-[2] text-xl font-light italic">
              Horizon Plus dispose d’outils matériels et immatériels modernes
              et innovants pour la collecte, l’analyse et le traitement de
              données, adaptés aux exigences des études, audits et projets
              de développement.
            </p>
          </motion.div>
        </div>

        {/* Section Équipe - La Grande Carte Bleue Transformée */}
        <div className="flex flex-col md:flex-row items-center gap-20">
          
          {/* Carte Bleue avec Contenu Dynamique */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
            className="flex-1 w-full aspect-square bg-gradient-to-br from-horizon-dark to-horizon-blue rounded-[4rem] flex flex-col items-center justify-center p-12 shadow-2xl relative overflow-hidden group"
          >
            {/* Effet de grille en fond */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            <Globe2 size={80} className="text-horizon-gold mb-6 animate-pulse" />
            
            <h3 className="text-white text-3xl font-black text-center mb-4 relative z-10">
              Expertise <br/> Sans Frontières
            </h3>
            
            <div className="space-y-2 text-center relative z-10">
              <p className="text-blue-200 font-medium">Afrique • Europe • Asie</p>
              <p className="text-blue-200 font-medium text-sm opacity-80">USA • Amérique Latine</p>
            </div>

            <div className="mt-8 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-white text-xs font-bold tracking-[0.3em] uppercase">Au-delà de l'horizon</span>
            </div>
          </motion.div>

          {/* Texte Équipe */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <Users2 className="text-horizon-blue" size={32} />
              <h2 className="text-4xl font-bold text-horizon-dark tracking-tight">Notre équipe</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Nous travaillons avec une équipe permanente restreinte pour plus
              de flexibilité, appuyée par un vaste réseau de consultants locaux
              et internationaux.
            </p>
            <div className="p-6 border-l-4 border-horizon-gold bg-gray-50 italic text-gray-500">
              "Notre force réside dans la pluridisciplinarité et la mobilité de nos experts pour répondre à chaque défi spécifique."
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}