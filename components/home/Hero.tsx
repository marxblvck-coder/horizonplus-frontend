"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center bg-eliaviv-green text-white overflow-hidden">
      {/* Éléments de design d'arrière-plan */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-eliaviv-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-eliaviv-soft/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-20">
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-[2px] bg-eliaviv-gold" />
              <span className="text-eliaviv-gold font-bold tracking-[0.4em] uppercase text-xs">
                {t.home.hero.badge}
              </span>
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              {t.home.hero.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-eliaviv-gold via-[#f3d39a] to-eliaviv-soft">
                {t.home.hero.title2}
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-eliaviv-light/70 max-w-xl leading-relaxed font-light">
            "{t.home.hero.quote}"
          </p>

          <div className="flex flex-wrap gap-6">
            <Link href="/contact">
              <button className="px-10 py-5 rounded-full bg-eliaviv-gold text-eliaviv-green font-bold hover:shadow-[0_20px_40px_rgba(212,163,86,0.3)] transition-all duration-300 hover:scale-105 uppercase tracking-widest text-xs">
                {t.home.hero.btnContact}
              </button>
            </Link>
            <Link href="/about">
              <button className="px-10 py-5 rounded-full border border-white/30 backdrop-blur-sm hover:bg-white hover:text-eliaviv-green transition-all duration-300 font-bold uppercase tracking-widest text-xs">
                {t.home.hero.btnVision}
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Visuel Premium : Le Cercle de Vie Eliaviv */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="hidden lg:flex justify-center relative"
        >
          {/* Cercles concentriques animés */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[520px] h-[520px] rounded-full border border-white/5 border-dashed"
          />
          
          <div className="relative w-[480px] h-[480px] rounded-full bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-md border border-white/10 flex items-center justify-center p-12 shadow-2xl">
            <div className="text-center space-y-8">
              <div className="relative w-32 h-32 mx-auto">
                 {/* Ton nouveau logo ici */}
                 <Image src="/lelogo.jpeg" alt="Eliaviv Logo" fill className="object-contain" />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight text-white uppercase italic">{t.home.hero.circleTitle}</h2>
                <div className="w-12 h-[1px] bg-eliaviv-gold mx-auto" />
                <p className="text-xs font-bold tracking-[0.5em] uppercase text-eliaviv-gold opacity-80">
                  {t.home.hero.circleSlogan}
                </p>
              </div>

              <p className="text-eliaviv-light/50 text-xs max-w-[240px] mx-auto font-medium leading-relaxed tracking-widest">
                {t.home.hero.circleExpertise}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}