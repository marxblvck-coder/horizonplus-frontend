import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-horizon-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

        {/* Logo + description */}
        <div className="space-y-4">
          <Image
            src="/lelogo.jpeg"
            alt="Horizon Plus"
            width={180}
            height={80}
          />
          <p className="text-sm leading-relaxed">
            Horizon Plus est un cabinet de formation, d’assistance-conseil,
            d’étude et de gestion de projets engagé pour un développement
            durable et inclusif en Afrique.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-horizon-gold">Qui sommes-nous</Link></li>
            <li><Link href="/services" className="hover:text-horizon-gold">Que faisons-nous</Link></li>
            <li><Link href="/actions" className="hover:text-horizon-gold">Nos moyens d’action</Link></li>
            <li><Link href="/publications" className="hover:text-horizon-gold">Publications</Link></li>
            <li><Link href="/contact" className="hover:text-horizon-gold">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-white mb-4">Nos services</h4>
          <ul className="space-y-2 text-sm">
            <li>Formation</li>
            <li>Assistance-conseil</li>
            <li>Études & Audit social</li>
            <li>Gestion de projets</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Abidjan – Côte d’Ivoire</li>
            <li>📧 contact@horizon.plus.org</li>
            <li>📞 +225 27 00 00 00 00</li>
            <li>📱 +225 07 00 00 00 00</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6 text-center text-sm">
        © {new Date().getFullYear()} Horizon Plus — Tous droits réservés
      </div>
    </footer>
  );
}
