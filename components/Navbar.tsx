"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    // 1. Détection du scroll pour changer le style
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // 2. Détection de la section active (pour "Que faisons-nous")
    const observerOptions = { threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

  const navLinks = [
    { label: "Qui sommes-nous", href: "/about" },
    { label: "Que faisons-nous", href: "/services", id: "que-faisons-nous" },
    { label: "Nos moyens d’action", href: "/actions" },
    { label: "Publications", href: "/publications" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl shadow-lg py-2" 
          : "bg-horizon-dark/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="relative z-50 hover:scale-105 transition-transform">
          <Image
            src="/lelogo.jpeg"
            alt="Horizon Plus"
            width={isScrolled ? 140 : 160}
            height={70}
            priority
            className="rounded-lg shadow-sm"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (activeSection === link.id && pathname === "/");
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isActive 
                        ? "text-horizon-gold" 
                        : isScrolled ? "text-horizon-dark hover:text-horizon-blue" : "text-white hover:text-horizon-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {isActive && (
                    <motion.div 
                      layoutId="navActive"
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-horizon-gold"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-gray-300 pl-6 ml-2">
            <button className="border border-white px-3 py-1 rounded hover:bg-horizon-gold hover:text-black transition">

🇨🇮 FR

</button>

<button className="border border-white px-3 py-1 rounded hover:bg-horizon-gold hover:text-black transition">

🇺🇸 EN

</button> 
          </div>
        </div>

        {/* Mobile button */}
        <button
          className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled ? "text-horizon-dark bg-gray-100" : "text-white bg-white/10"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col gap-4 px-8 py-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-bold text-horizon-dark hover:text-horizon-gold block transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <div className="flex gap-3 pt-6 border-t border-gray-100">
                <button className="flex-1 py-3 border border-gray-200 rounded-xl font-bold text-horizon-dark">Français</button>
                <button className="flex-1 py-3 border border-gray-200 rounded-xl font-bold text-horizon-dark">English</button>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}