// Components/SolutionServices.tsx

import {
  BrainCircuit,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "Intelligence Artificielle",
    description:
      "Solutions IA avancées pour automatiser et optimiser vos processus.",
    gradient: "from-[#4186d8] to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description:
      "Applications Android & iOS modernes avec expérience utilisateur fluide.",
    gradient: "from-[#964cb2] to-pink-500",
  },
  {
    icon: Globe,
    title: "Plateformes Web",
    description:
      "Sites web et plateformes professionnelles rapides et sécurisées.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Database,
    title: "Gestion de Données",
    description:
      "Architecture de données performante et scalable pour votre activité.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Déploiement cloud sécurisé avec intégration continue et automatisation.",
    gradient: "from-sky-500 to-blue-700",
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description:
      "Protection de vos systèmes et sécurisation de vos infrastructures.",
    gradient: "from-slate-700 to-slate-900",
  },
];

function SolutionServices() {
  return (
    <section className="w-full px-6 lg:px-16 py-14 lg:py-20 bg-white">
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#0e1934] mb-5">
          Nos Solutions
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Des technologies modernes et intelligentes conçues pour accélérer la
          croissance de votre entreprise.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="group relative bg-[#f9fcf8] rounded-3xl p-8 border border-slate-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg mb-6`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[#0e1934] mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SolutionServices;