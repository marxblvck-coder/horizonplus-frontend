"use client";
import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Smartphone, Send } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  const contactInfos = [
    { icon: MapPin, text: "Abidjan – Côte d’Ivoire", label: t.contact.labels.loc },
    { icon: Mail, text: "contact@eliaviv.com", label: t.contact.labels.email },
    { icon: Phone, text: "+225 27 22 59 43 24", label: t.contact.labels.office },
    { icon: Smartphone, text: "+225 27 22 59 43 24", label: t.contact.labels.mobile }
  ];

  return (
    <main className="bg-[#fcfdfc]">
      <PageHero 
        title={t.contact.heroTitle} 
        subtitle={t.contact.heroSubtitle} 
      />

      <section className="py-32 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
        {/* Infos de Contact */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-6xl font-bold text-eliaviv-green mb-12 tracking-tighter leading-tight">
            {t.contact.infoTitle}
          </h2>
          <div className="space-y-8">
            {contactInfos.map((info, i) => (
              <div key={i} className="flex items-center gap-8 p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-eliaviv-gold/30 shadow-sm transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-eliaviv-green/5 flex items-center justify-center group-hover:bg-eliaviv-green transition-colors">
                  <info.icon className="text-eliaviv-green group-hover:text-eliaviv-gold transition-colors" size={28} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-eliaviv-soft font-black mb-1">{info.label}</p>
                  <p className="text-2xl font-bold text-eliaviv-green">{info.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Formulaire Premium */}
        <motion.form 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white p-16 rounded-[4rem] shadow-[0_40px_120px_rgba(10,61,48,0.1)] border border-gray-100 space-y-8"
        >
          <div className="space-y-6">
            <div className="group">
              <input type="text" placeholder={t.contact.form.name} className="w-full bg-gray-50 border-2 border-transparent p-6 rounded-2xl focus:border-eliaviv-gold focus:bg-white outline-none transition-all text-lg" />
            </div>
            <div className="group">
              <input type="email" placeholder={t.contact.form.email} className="w-full bg-gray-50 border-2 border-transparent p-6 rounded-2xl focus:border-eliaviv-gold focus:bg-white outline-none transition-all text-lg" />
            </div>
            <div className="group">
              <textarea placeholder={t.contact.form.message} rows={5} className="w-full bg-gray-50 border-2 border-transparent p-6 rounded-2xl focus:border-eliaviv-gold focus:bg-white outline-none transition-all text-lg" />
            </div>
          </div>
          
          <button className="w-full bg-eliaviv-green text-white py-6 rounded-2xl font-bold text-xl hover:bg-eliaviv-gold hover:text-eliaviv-green transition-all shadow-2xl flex items-center justify-center gap-4 group">
            <span>{t.contact.form.send}</span>
            <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.form>
      </section>
    </main>
  );
}