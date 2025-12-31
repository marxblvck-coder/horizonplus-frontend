import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-horizon-dark text-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Colonne 1 : Présentation */}
        <div>
          <h3 className="text-horizon-gold text-lg font-semibold mb-4">
            Horizon Plus
          </h3>
          <p className="text-sm leading-relaxed">
            Cabinet de formation, d’assistance-conseil, d’étude et de gestion de projets
            basé à Abidjan, spécialisé en durabilité, RSE, DRDH et audit social.
          </p>
        </div>

        {/* Colonne 2 : Liens */}
        <div>
          <h3 className="text-horizon-gold text-lg font-semibold mb-4">
            Navigation
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-horizon-gold">Qui sommes-nous</Link></li>
            <li><Link href="/services" className="hover:text-horizon-gold">Nos services</Link></li>
            <li><Link href="/publications" className="hover:text-horizon-gold">Publications</Link></li>
            <li><Link href="/contact" className="hover:text-horizon-gold">Contact</Link></li>
          </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div>
          <h3 className="text-horizon-gold text-lg font-semibold mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li>📍 Abidjan, Côte d’Ivoire</li>
            <li>📧 xxxxx@horizon.plus.org</li>
            <li>☎️ +225 27 00 00 00 00</li>
            <li>📱 +225 07 00 00 00 00</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Horizon Plus — Tous droits réservés
      </div>
    </footer>
  );
}
