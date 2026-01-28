"use client";

import { GraduationCap, Briefcase, BarChart3, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";

const actions = [
  { title: "Formation", description: "Programmes de formation sur mesure en développement durable, RSE, DRDH, suivi-évaluation et management.", icon: GraduationCap },
  { title: "Assistance-conseil", description: "Accompagnement stratégique des entreprises et ONG basé sur l’analyse de données et les meilleures pratiques.", icon: Briefcase },
  { title: "Études & Audit social", description: "Études sectorielles, audits sociaux et monitoring avec des outils innovants et une exigence de qualité.", icon: BarChart3 },
  { title: "Gestion de projets", description: "Conception, mise en œuvre et suivi-évaluation de projets de développement à fort impact.", icon: ClipboardList },
];

export default function Actions() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Background Decor - Bulles de couleur subtiles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-horizon-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-horizon-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-black text-horizon-dark tracking-tight">
              Nos champs <br/><span className="text-horizon-blue italic">d'expertise</span>
            </h2>
          </motion.div>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-gray-500 max-w-sm border-l-2 border-horizon-gold pl-4 italic"
          >
            Des solutions innovantes pour un impact social et environnemental durable.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative group h-full"
            >
              {/* Card Background avec effet de glassmorphism au hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 rounded-3xl -z-10 group-hover:to-horizon-blue/5 transition-colors duration-500" />
              
              <div className="p-8 h-full border border-gray-100 rounded-3xl group-hover:border-horizon-blue/20 transition-all duration-500 flex flex-col shadow-sm group-hover:shadow-xl">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-lg text-horizon-blue group-hover:bg-horizon-blue group-hover:text-white transition-all duration-500 mb-8">
                  <item.icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-horizon-dark mb-4 group-hover:text-horizon-blue transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>

                <div className="mt-6 w-8 h-1 bg-gray-200 group-hover:w-full group-hover:bg-horizon-blue transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}