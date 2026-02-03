"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../lib/translations";

type Language = "fr" | "en";

interface LanguageContextType {
  lang: Language;
  t: any;
  switchLanguage: (newLang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>("fr");

  // On récupère les traductions correspondant à la langue active
  const t = translations[lang];

  const switchLanguage = (newLang: Language) => {
    setLang(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLang", newLang);
      // Optionnel: change l'attribut lang de la balise <html>
      document.documentElement.lang = newLang;
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("preferredLang") as Language;
    if (saved && (saved === "fr" || saved === "en")) {
      setLang(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};