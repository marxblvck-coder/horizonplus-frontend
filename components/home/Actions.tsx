"use client";
import { GraduationCap, Briefcase, BarChart3, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";

export default function Actions() {
  const { t } = useLanguage();
  const icons = [GraduationCap, Briefcase, BarChart3, ClipboardList];

  return (
    <section className="py-32 bg-[#fcfdfc] relative overflow-hidden">
      {/* Éléments de fond organiques */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-eliaviv-soft/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-eliaviv-green tracking-tight leading-tight">
              {t.home.actionsHome.title1} <br/>
              <span className="text-eliaviv-gold italic font-serif">{t.home.actionsHome.title2}</span>
            </h2>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="max-w-md"
          >
            <p className="text-gray-600 text-lg border-l-4 border-eliaviv-gold pl-6 py-2 leading-relaxed font-light">
              {t.home.actionsHome.desc}
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.home.actionsHome.items.map((item: any, index: number) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-full"
              >
                {/* Carte au design minimaliste et luxueux */}
                <div className="p-10 h-full bg-white border border-gray-100 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_60px_-10px_rgba(10,61,48,0.15)] group-hover:border-eliaviv-soft/30 transition-all duration-500 flex flex-col relative overflow-hidden">
                  
                  {/* Effet de brillance au hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-eliaviv-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-eliaviv-green text-eliaviv-gold mb-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-eliaviv-green mb-5 group-hover:text-eliaviv-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-500 text-base leading-relaxed font-light flex-grow">
                    {item.description}
                  </p>
                  <Link href="/services">
                  <div className="mt-8 flex items-center gap-2 text-eliaviv-green font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    En savoir plus <span className="text-eliaviv-gold">→</span>
                  </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}