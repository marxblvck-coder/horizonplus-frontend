"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-horizon-dark via-[#1a2a44] to-horizon-blue text-white overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-horizon-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-horizon-blue/20 rounded-full blur-[100px]" />
        {/* Lignes de structure légères pour le style "Cabinet d'étude" */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Identité Mise en avant */}
          <div className="space-y-2">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1 rounded-full bg-horizon-gold/20 text-horizon-gold text-sm font-bold tracking-[0.3em] uppercase"
            >
              Horizon Plus
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter">
              AU-DELÀ DE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-horizon-gold via-yellow-200 to-white">
                L'HORIZON
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed font-light italic">
            "Construire un avenir durable et inclusif par l'expertise et l'innovation."
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <Link href="/contact">
              <button className="px-10 py-5 rounded-2xl bg-horizon-gold text-black font-black hover:shadow-[0_20px_40px_rgba(255,184,0,0.3)] transition-all duration-300 hover:scale-105 uppercase tracking-widest text-sm">
                Nous contacter
              </button>
            </Link>

            <Link href="/about">
              <button className="px-10 py-5 rounded-2xl border-2 border-white/20 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-sm">
                Notre Vision
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Le Cercle de Marque à droite */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:flex justify-center relative"
        >
          {/* Effet d'anneau rotatif */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-white/10"
          />

          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[450px] h-[450px] rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl border border-white/20 flex items-center justify-center text-center p-12 shadow-[0_0_100px_rgba(0,0,0,0.3)]"
          >
            <div className="space-y-6">
               <h2 className="text-5xl font-black tracking-tighter text-white">
                HORIZON <br /> PLUS
               </h2>
               <div className="w-16 h-1 bg-horizon-gold mx-auto"></div>
               <p className="text-sm font-bold tracking-[0.4em] uppercase text-horizon-gold">
                Au-delà de l'horizon
              </p>
               <p className="text-gray-400 text-sm max-w-[200px] mx-auto font-medium leading-relaxed">
                Expertise • Durabilité • Impact Social
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}