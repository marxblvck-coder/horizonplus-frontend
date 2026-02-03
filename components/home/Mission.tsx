"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Mission() {
  const { t } = useLanguage();
  // Couleurs adaptées au nouveau logo
  const colors = ["text-eliaviv-gold", "text-eliaviv-soft", "text-white"];

  return (
    <section className="py-32 bg-[#05261e] text-white relative overflow-hidden">
      {/* Subtile texture de feuilles ou lignes de croissance */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-[1.1]">
                {t.home.mission.adn}<br />
                <span className="text-eliaviv-gold">{t.home.mission.impact}</span>
              </h2>
              <div className="h-1 w-20 bg-eliaviv-soft" />
              <p className="text-eliaviv-light/60 text-xl leading-relaxed font-light">
                {t.home.mission.desc}
              </p>
              
              <div className="pt-6">
                <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eliaviv-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-eliaviv-gold"></span>
                  </span>
                  <span className="text-base font-bold tracking-widest text-eliaviv-gold uppercase">
                    {t.home.mission.badge}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid gap-6">
            {t.home.mission.items.map((m: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative flex gap-8 p-10 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-eliaviv-gold/30 transition-all duration-500 hover:shadow-2xl"
              >
                <div className={`text-5xl font-black opacity-10 group-hover:opacity-100 transition-all duration-500 ${colors[i]}`}>
                  {m.num}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-eliaviv-gold transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-base text-eliaviv-light/50 leading-relaxed italic">
                    {m.desc}
                  </p>
                </div>
                
                {/* Petit accent décoratif au survol */}
                <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-eliaviv-gold opacity-0 group-hover:opacity-100 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}