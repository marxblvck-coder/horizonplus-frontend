"use client";
import PageHero from "@/components/ui/PageHero";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";
import { BookOpen, FileText } from "lucide-react";

export default function PublicationsPage() {
  const { t } = useLanguage();

  return (
    <main className="bg-[#fcfdfc]">
      <PageHero
        title={t.publications.heroTitle}
        subtitle={t.publications.heroSubtitle}
      />

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Livres */}
          <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
            <BookOpen className="text-eliaviv-gold" size={32} />
            <h2 className="text-4xl font-bold text-eliaviv-green">
              {t.publications.booksTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.publications.books.map((book: string, index: number) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-between group"
              >
                <h3 className="text-2xl font-bold text-eliaviv-green group-hover:text-eliaviv-gold transition-colors leading-snug">
                  {book}
                </h3>
                <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between text-xs font-bold tracking-widest text-eliaviv-soft uppercase">
                  <span>Ouvrage</span>
                  <span>Eliaviv Editions</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section Rapports */}
          <div className="mt-32 p-16 rounded-[4rem] bg-eliaviv-green text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-eliaviv-gold/10 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <FileText className="text-eliaviv-gold" size={32} />
                <h2 className="text-4xl font-bold italic">{t.publications.reportsTitle}</h2>
              </div>
              <p className="text-2xl text-eliaviv-light/60 font-light tracking-wide italic">
                {t.publications.comingSoon}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}