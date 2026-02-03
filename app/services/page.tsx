"use client";
import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const servicesItems = t.servicesPage.items;
  const selectedService = selectedIndex !== null ? servicesItems[selectedIndex] : null;

  return (
    <main className="bg-[#fcfdfc] min-h-screen">
      <PageHero 
        title={t.servicesPage.heroTitle} 
        subtitle={t.servicesPage.heroSubtitle} 
      />

      <section className="py-32 max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesItems.map((s: any, i: number) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -12 }} 
            onClick={() => setSelectedIndex(i)}
            className="group relative bg-white p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-eliaviv-gold/30 hover:shadow-[0_40px_80px_rgba(10,61,48,0.1)] transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[400px]"
          >
            {/* Numérotation stylisée */}
            <span className="absolute -right-2 -top-2 text-9xl font-black text-gray-50 group-hover:text-eliaviv-gold/10 transition-all duration-700 select-none">
              {i + 1}
            </span>

            <div className="relative z-10">
              <div className="w-12 h-1 mb-8 bg-eliaviv-gold group-hover:w-full transition-all duration-700" />
              <h3 className="font-bold text-3xl text-eliaviv-green mb-6 group-hover:text-eliaviv-gold transition-all duration-500 leading-tight">
                {s.title}
              </h3>
              <p className="text-xl text-gray-500 group-hover:text-gray-700 leading-relaxed font-light transition-colors">
                {s.short}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between relative z-10">
               <span className="text-xs font-black uppercase tracking-[0.2em] text-eliaviv-soft opacity-0 group-hover:opacity-100 transition-opacity">
                 Expertise
               </span>
               <div className="w-14 h-14 rounded-2xl bg-gray-50 group-hover:bg-eliaviv-green flex items-center justify-center text-eliaviv-green group-hover:text-eliaviv-gold transition-all duration-500 transform group-hover:rotate-[-45deg] shadow-inner">
                  <ArrowRight size={24} strokeWidth={2} />
               </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* MODALE DE DÉTAIL PREMIUM */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="absolute inset-0 bg-eliaviv-green/60 backdrop-blur-xl"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative bg-white w-full max-w-4xl rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row"
            >
              {/* Côté gauche décoratif (Mobile: caché ou réduit) */}
              <div className="hidden md:flex w-1/3 bg-eliaviv-green p-12 flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#d4a356 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <ShieldCheck size={60} className="text-eliaviv-gold relative z-10" />
                <div className="relative z-10">
                  <p className="text-eliaviv-gold font-black text-6xl opacity-20">0{selectedIndex! + 1}</p>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mt-4">{t.servicesPage.badge}</p>
                </div>
              </div>

              {/* Contenu de la modale */}
              <div className="flex-1 p-10 md:p-20 relative">
                <button 
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 hover:bg-eliaviv-gold hover:text-white transition-all text-eliaviv-green"
                >
                  <X size={24} />
                </button>

                <div className="space-y-10">
                  <div className="space-y-4">
                    <span className="text-eliaviv-gold font-bold tracking-[0.4em] uppercase text-xs">
                      Solution Stratégique
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-eliaviv-green leading-[1.1]">
                      {selectedService.title}
                    </h2>
                  </div>
                  
                  <div className="h-1.5 w-24 bg-eliaviv-gold rounded-full" />
                  
                  <p className="text-2xl text-gray-600 leading-[1.6] font-light italic">
                    {selectedService.full}
                  </p>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedIndex(null)}
                    className="px-12 py-5 bg-eliaviv-green text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-eliaviv-green/20 transition-all flex items-center gap-4 group"
                  >
                    <span>{t.servicesPage.btnClose}</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}