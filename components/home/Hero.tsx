"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-horizon-dark via-horizon-blue to-horizon-gold text-white">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Construire un avenir <br />
            <span className="text-horizon-gold">durable et inclusif</span>
          </h1>

          <p className="text-lg text-gray-200 max-w-xl">
            Horizon Plus agit pour le développement humain, social et durable
            à travers des actions concrètes et mesurables.
          </p>

          <div className="flex gap-4">
            <Link href="/contact">
              <button className="px-6 py-3 rounded-lg bg-horizon-gold text-black font-semibold hover:scale-105 transition">
                Nous contacter
              </button>
            </Link>

            <Link href="/about">
              <button className="px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-black transition">
                En savoir plus
              </button>
            </Link>
          </div>
        </div>

        {/* Visual */}
        <div className="hidden md:flex justify-center">
          <div className="w-80 h-80 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-center p-6">
            <p className="text-lg font-medium">
              Impact <br /> Innovation <br /> Engagement
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
