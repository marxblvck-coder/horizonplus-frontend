"use client";

import { GraduationCap, Briefcase, BarChart3, ClipboardList } from "lucide-react";

const actions = [
  {
    title: "Formation",
    description:
      "Programmes de formation sur mesure en développement durable, RSE, DRDH, suivi-évaluation et management.",
    icon: GraduationCap,
  },
  {
    title: "Assistance-conseil",
    description:
      "Accompagnement stratégique des entreprises et ONG basé sur l’analyse de données et les meilleures pratiques.",
    icon: Briefcase,
  },
  {
    title: "Études & Audit social",
    description:
      "Études sectorielles, audits sociaux et monitoring avec des outils innovants et une exigence de qualité.",
    icon: BarChart3,
  },
  {
    title: "Gestion de projets",
    description:
      "Conception, mise en œuvre et suivi-évaluation de projets de développement à fort impact.",
    icon: ClipboardList,
  },
];

export default function Actions() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-horizon-dark">
          Que faisons-nous
        </h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {actions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-horizon-blue/10 text-horizon-blue group-hover:bg-horizon-blue group-hover:text-white transition">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-horizon-dark">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
