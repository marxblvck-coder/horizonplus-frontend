"use client";

import { motion } from "framer-motion";

export default function Mission() {
  const missions = [
    { 
      title: "Engagement social", 
      desc: "Actions locales à fort impact communautaire pour réduire les inégalités.", 
      num: "01",
      color: "text-horizon-gold"
    },
    { 
      title: "Développement durable", 
      desc: "Solutions respectueuses de l’environnement pour préserver les générations futures.", 
      num: "02",
      color: "text-horizon-blue"
    },
    { 
      title: "Innovation", 
      desc: "Approches modernes et technologiques pour optimiser chaque projet.", 
      num: "03",
      color: "text-white"
    }
  ];

  return (
    <section className="py-32 bg-horizon-dark text-white relative overflow-hidden">
      {/* Pattern de fond subtil (grille de points) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Texte de gauche */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Notre <span className="text-horizon-gold">ADN</span>,<br />
              Votre impact.
            </h2>
            <p className="mt-8 text-gray-400 text-lg leading-relaxed">
              Plus qu’un simple cabinet, nous sommes votre partenaire dans la transition vers un modèle plus juste et efficace.
            </p>
            <div className="mt-10 inline-block p-[1px] bg-gradient-to-r from-horizon-gold to-transparent rounded-full">
               <div className="px-6 py-2 bg-horizon-dark rounded-full text-sm font-mono tracking-widest text-horizon-gold uppercase">
                  Driven by values
               </div>
            </div>
          </motion.div>

          {/* Cartes de droite avec décalage (Stagger) */}
          <div className="lg:col-span-7 space-y-6">
            {missions.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group flex gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <span className={`text-4xl font-black opacity-20 group-hover:opacity-100 transition-opacity duration-500 ${m.color}`}>
                  {m.num}
                </span>
                <div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">{m.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}