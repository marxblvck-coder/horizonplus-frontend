"use client";
import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Smartphone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <PageHero title="Contactez-nous" subtitle="Discutons de vos projets et de vos besoins." />

      <section className="py-24 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-5xl font-black text-horizon-dark mb-10 tracking-tighter">Coordonnées</h2>
          <div className="space-y-6">
            {[
              { icon: MapPin, text: "Abidjan – Côte d’Ivoire", label: "Localisation" },
              { icon: Mail, text: "contact@horizon.plus.org", label: "Email" },
              { icon: Phone, text: "+225 27 00 00 00 00", label: "Bureau" },
              { icon: Smartphone, text: "+225 07 00 00 00 00", label: "Mobile" }
            ].map((info, i) => (
              <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-gray-50 hover:bg-horizon-blue/5 transition-colors group">
                <info.icon className="text-horizon-blue group-hover:scale-110 transition-transform" size={28} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">{info.label}</p>
                  <p className="text-lg font-semibold text-horizon-dark">{info.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white p-12 rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-gray-100 space-y-6"
        >
          <div className="space-y-4">
            <input type="text" placeholder="Nom complet" className="w-full bg-gray-50 border-none p-5 rounded-2xl focus:ring-2 focus:ring-horizon-blue outline-none" />
            <input type="email" placeholder="Adresse email" className="w-full bg-gray-50 border-none p-5 rounded-2xl focus:ring-2 focus:ring-horizon-blue outline-none" />
            <textarea placeholder="Votre message" rows={5} className="w-full bg-gray-50 border-none p-5 rounded-2xl focus:ring-2 focus:ring-horizon-blue outline-none" />
          </div>
          <button className="w-full bg-horizon-dark text-white py-5 rounded-2xl font-black text-lg hover:bg-horizon-blue transition-all shadow-xl active:scale-95">
            Envoyer le message
          </button>
        </motion.form>
      </section>
    </main>
  );
}