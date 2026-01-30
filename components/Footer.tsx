"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Smartphone, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-horizon-dark text-gray-400 relative overflow-hidden">
      {/* Effet de lumière subtil en fond */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-horizon-blue/5 rounded-full blur-[100px] -mr-48 -mt-48" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="grid gap-16 md:grid-cols-12">
          
          {/* Logo + Slogan (4 colonnes) */}
          <div className="md:col-span-4 space-y-8">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Image
                src="/lelogo.jpeg"
                alt="Horizon Plus"
                width={200}
                height={90}
                className="rounded-xl shadow-2xl border border-white/5"
              />
            </Link>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed font-light italic text-gray-400">
                "Horizon Plus est un cabinet engagé pour le développement durable 
                et inclusif en Afrique, apportant une expertise innovante pour 
                des actions à fort impact."
              </p>
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-horizon-gold"></span>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-horizon-gold">
                  Au-delà de l'horizon
                </span>
              </div>
            </div>
          </div>

          {/* Navigation (2 colonnes) */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm">
              {[
                ["Qui sommes-nous", "/about"],
                ["Que faisons-nous", "/services"],
                ["Nos moyens d’action", "/actions"],
                ["Publications", "/publications"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="flex items-center group hover:text-white transition-colors">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-horizon-gold" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (3 colonnes) */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-8">Expertises</h4>
            <ul className="space-y-4 text-sm">
              {["Formation Professionnelle", "Assistance-conseil", "Études & Audit social", "Gestion de projets"].map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-horizon-blue/40" />
                  <span className="hover:text-horizon-blue transition-colors cursor-default">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (3 colonnes) */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-8">Nous Joindre</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="text-horizon-gold shrink-0" size={18} />
                <span className="leading-tight">Abidjan – Côte d’Ivoire</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-horizon-gold shrink-0" size={18} />
                <a href="mailto:contact@horizon.plus.org" className="hover:text-white transition-colors">contact@horizon.plus.org</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <Phone className="text-horizon-gold shrink-0" size={18} />
                    <span>+225 27 00 00 00 00</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Smartphone className="text-horizon-gold shrink-0" size={18} />
                    <span>+225 07 00 00 00 00</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Barre de bas de page */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-medium tracking-widest uppercase opacity-50">
            © {currentYear} Horizon Plus — Cabinet de Conseil RSE & Audit Social
          </p>
          <div className="flex gap-8 text-[11px] font-bold tracking-widest uppercase">
            <Link href="/mentions" className="hover:text-horizon-gold transition-colors">Mentions Légales</Link>
            <Link href="/cookies" className="hover:text-horizon-gold transition-colors">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}