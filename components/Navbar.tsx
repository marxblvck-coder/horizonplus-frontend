"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-horizon-dark text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/lelogo.jpeg"
            alt="Horizon Plus"
            width={180}
            height={80}
            priority
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {[
            ["Qui sommes-nous", "/about"],
            ["Que faisons-nous", "/services"],
            ["Nos moyens d’action", "/actions"],
            ["Publications", "/publications"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link
                href={href}
                className="hover:text-horizon-gold transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Lang */}
          <button className="border border-white px-3 py-1 rounded hover:bg-horizon-gold hover:text-black transition">
            🇨🇮 FR
          </button>
          <button className="border border-white px-3 py-1 rounded hover:bg-horizon-gold hover:text-black transition">
            🇺🇸 EN
          </button>
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-horizon-dark border-t border-white/10">
          <ul className="flex flex-col gap-5 px-6 py-6 font-medium">
            {[
              ["Qui sommes-nous", "/about"],
              ["Que faisons-nous", "/services"],
              ["Nos moyens d’action", "/actions"],
              ["Publications", "/publications"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-horizon-gold"
                >
                  {label}
                </Link>
              </li>
            ))}

            <div className="flex gap-4 pt-4">
              <button className="border px-3 py-1 rounded">🇨🇮 FR</button>
              <button className="border px-3 py-1 rounded">🇺🇸 EN</button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
