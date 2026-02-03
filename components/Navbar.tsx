"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext"; 

export default function Navbar() {
  const { lang, t, switchLanguage } = useLanguage(); 
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.actions, href: "/actions" },
    { label: t.nav.publications, href: "/publications" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] py-3" 
          : "bg-[#05261e]/40 backdrop-blur-sm py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="relative z-50 transition-all duration-500 hover:opacity-90">
          <Image
            src="/lelogo.jpeg"
            alt="Eliaviv Consulting"
            width={isScrolled ? 130 : 150}
            height={65}
            priority
            className={`rounded-xl transition-all duration-500 ${isScrolled ? "shadow-md" : "shadow-2xl border border-white/10"}`}
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`text-[13px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                      isActive 
                        ? "text-eliaviv-gold" 
                        : isScrolled ? "text-eliaviv-green hover:text-eliaviv-gold" : "text-white/90 hover:text-eliaviv-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {/* Indicateur Premium */}
                  {isActive && (
                    <motion.div 
                      layoutId="navBullet"
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-eliaviv-gold"
                    />
                  )}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-1.5 rounded-full bg-eliaviv-gold/30 group-hover:w-1.5 transition-all duration-300" />
                </li>
              );
            })}
          </ul>

          {/* SÉLECTEUR DE LANGUE PREMIUM */}
          <div className={`flex items-center gap-1 p-1 rounded-full border transition-all duration-500 ${
            isScrolled ? "border-gray-200 bg-gray-50" : "border-white/10 bg-white/5"
          }`}>
            <button 
              onClick={() => switchLanguage("fr")}
              className={`text-[10px] font-black w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                lang === "fr" 
                ? "bg-eliaviv-gold text-eliaviv-green shadow-lg" 
                : isScrolled ? "text-gray-400 hover:text-eliaviv-green" : "text-white/50 hover:text-white"
              }`}
            >
              FR
            </button>
            <button 
              onClick={() => switchLanguage("en")}
              className={`text-[10px] font-black w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                lang === "en" 
                ? "bg-eliaviv-gold text-eliaviv-green shadow-lg" 
                : isScrolled ? "text-gray-400 hover:text-eliaviv-green" : "text-white/50 hover:text-white"
              }`}
            >
              EN
            </button> 
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl transition-all ${
            isScrolled ? "text-eliaviv-green bg-gray-100" : "text-white bg-white/10"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MENU MOBILE PREMIUM */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl overflow-hidden"
          >
            <ul className="flex flex-col p-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.href}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-bold text-eliaviv-green hover:text-eliaviv-gold flex items-center justify-between group"
                  >
                    {link.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-eliaviv-gold">→</span>
                  </Link>
                </motion.li>
              ))}
              
              <div className="mt-6 pt-8 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-bold text-gray-400 flex items-center gap-2">
                  <Globe size={16} /> Language
                </span>
                <div className="flex gap-2">
                  {["fr", "en"].map((l) => (
                    <button
                      key={l}
                      onClick={() => { switchLanguage(l as "fr" | "en"); setOpen(false); }}
                      className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest ${
                        lang === l ? "bg-eliaviv-green text-white" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}