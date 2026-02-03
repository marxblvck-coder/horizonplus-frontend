"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Smartphone, ArrowRight, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.actions, href: "/actions" },
    { label: t.nav.publications, href: "/publications" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="bg-eliaviv-green text-eliaviv-light/70 relative overflow-hidden border-t border-white/5">
      {/* Accent de lumière or en arrière-plan */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-eliaviv-gold/5 rounded-full blur-[120px] -mb-40" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid gap-16 lg:grid-cols-12">
          
          {/* Colonne Identité - Agrandie */}
          <div className="lg:col-span-4 space-y-10">
            <Link href="/" className="inline-block hover:opacity-90 transition-all hover:scale-[1.02]">
              <Image
                src="/lelogo.jpeg"
                alt="Eliaviv Consulting"
                width={240} // Logo plus grand
                height={110}
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </Link>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed font-light italic text-eliaviv-light/80 max-w-sm">
                "{t.footer.desc}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-eliaviv-gold"></div>
                <span className="text-xs font-bold tracking-[0.4em] uppercase text-eliaviv-gold">
                  {t.footer.slogan}
                </span>
              </div>
            </div>
            {/* Réseaux Sociaux */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-eliaviv-gold hover:text-eliaviv-green transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-eliaviv-gold hover:text-eliaviv-green transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Navigation - Liens plus lisibles */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white uppercase tracking-[0.2em] text-sm mb-10">{t.footer.navTitle}</h4>
            <ul className="space-y-5 text-sm"> {/* Text-sm passé en text-base */}
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center group hover:text-eliaviv-gold transition-colors">
                    <ArrowRight size={15} className="mr-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-eliaviv-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise - Items plus espacés */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white uppercase tracking-[0.2em] text-sm mb-10">{t.footer.expTitle}</h4>
            <ul className="space-y-5 text-sm">
              {t.footer.services.map((service: string) => (
                <li key={service} className="flex items-start gap-4 group">
                  <span className="w-2 h-2 rounded-full bg-eliaviv-gold/30 mt-2 group-hover:bg-eliaviv-gold transition-colors" />
                  <span className="leading-tight group-hover:text-white transition-colors">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Infos claires */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white uppercase tracking-[0.2em] text-sm mb-10">{t.footer.contactTitle}</h4>
            <ul className="space-y-8 text-base">
              <li className="flex items-start gap-5 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-eliaviv-gold/20 transition-colors">
                  <MapPin className="text-eliaviv-gold" size={20} />
                </div>
                <span className="leading-relaxed pt-1">{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-5 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-eliaviv-gold/20 transition-colors">
                  <Mail className="text-eliaviv-gold" size={20} />
                </div>
                <a href="mailto:contact@eliaviv.com" className="hover:text-white transition-colors pt-1 italic">contact@eliaviv.com</a>
              </li>
              <li className="flex items-start gap-5 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-eliaviv-gold/20 transition-colors">
                  <Smartphone className="text-eliaviv-gold" size={20} />
                </div>
                <div className="flex flex-col gap-1 pt-1 font-medium text-white">
                  <span> +225 27 22 59 43 24</span>
                  <span className="text-eliaviv-light/50 text-sm tracking-widest">+225 27 22 59 43 24</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Agrandie et plus d'espacement */}
        <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase opacity-40">
            © {currentYear} Eliaviv Consulting — {t.footer.rights}
          </p>
          <div className="flex gap-10 text-xs font-bold tracking-[0.2em] uppercase">
            <Link href="/mentions" className="hover:text-eliaviv-gold transition-colors">{t.footer.legal}</Link>
            <Link href="/cookies" className="hover:text-eliaviv-gold transition-colors">{t.footer.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}