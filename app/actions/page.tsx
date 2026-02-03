"use client";
import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import { Globe2, Users2, Zap } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ActionsPage() {
  const { t } = useLanguage();

  return (
    <main className="bg-[#fcfdfc] overflow-hidden">
      <PageHero 
        title={t.actionsPage.heroTitle} 
        subtitle={t.actionsPage.heroSubtitle} 
      />

      <section className="py-32 max-w-7xl mx-auto px-6 space-y-56">
        
        {/* Section Outils avec Filigrane Eliaviv */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 0.03 }}
            className="absolute -top-32 -left-10 text-[12rem] font-black text-eliaviv-green -z-10 leading-none select-none uppercase pointer-events-none"
          >
            Eliaviv<br/>Consulting
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-16 rounded-[4rem] shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-gray-100 relative z-10"
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-eliaviv-gold/10 flex items-center justify-center">
                <Zap className="text-eliaviv-gold" size={40} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-eliaviv-green tracking-tight">
                {t.actionsPage.toolsTitle}
              </h2>
            </div>
            <p className="text-2xl md:text-3xl text-gray-600 leading-[1.7] font-light italic">
              {t.actionsPage.toolsText}
            </p>
          </motion.div>
        </div>

        {/* Section Équipe - Vision Globale */}
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          {/* Carte Eliaviv Green Transformée */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full aspect-square bg-gradient-to-br from-eliaviv-green to-[#05261e] rounded-[5rem] flex flex-col items-center justify-center p-16 shadow-[0_50px_100px_rgba(10,61,48,0.3)] relative overflow-hidden group"
          >
            {/* Pattern organique en fond */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#d4a356 2px, transparent 1px)', backgroundSize: '30px 30px' }} />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="p-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 group-hover:scale-110 transition-transform duration-700">
                <Globe2 size={90} className="text-eliaviv-gold animate-pulse" />
              </div>
              
              <h3 className="text-white text-4xl font-bold text-center mb-6 leading-tight">
                {t.actionsPage.cardTitle}
              </h3>
              
              <div className="space-y-3 text-center mb-10">
                <p className="text-eliaviv-gold text-xl font-bold tracking-widest uppercase">{t.actionsPage.regions[0]}</p>
                <p className="text-eliaviv-light/60 font-medium text-lg uppercase tracking-wider">{t.actionsPage.regions[1]}</p>
              </div>

              <div className="px-8 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                <span className="text-white text-sm font-bold tracking-[0.4em] uppercase">{t.actionsPage.slogan}</span>
              </div>
            </div>
          </motion.div>

          {/* Texte Équipe Agrandi */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-eliaviv-soft">
                <Users2 size={32} />
                <span className="text-sm font-bold tracking-[0.3em] uppercase">Capital Humain</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-eliaviv-green tracking-tight leading-tight">
                {t.actionsPage.teamTitle}
              </h2>
            </div>
            
            <p className="text-2xl text-gray-600 leading-relaxed font-light">
              {t.actionsPage.teamText}
            </p>
            
            <div className="p-10 border-l-8 border-eliaviv-gold bg-white shadow-sm rounded-r-3xl italic text-2xl text-eliaviv-green/70 font-serif leading-relaxed">
              "{t.actionsPage.teamQuote}"
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}