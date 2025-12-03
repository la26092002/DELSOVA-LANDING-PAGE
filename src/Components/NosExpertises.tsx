import React, { useState } from 'react';
import { 
  Brain, 
  Cpu, 
  Code2, 
  Smartphone, 
  ChevronDown, 
  ChevronUp,
  CheckCircle
} from 'lucide-react';

const expertisesCompact = [
  {
    id: 1,
    title: "Intelligence Artificielle",
    description: "Chatbots, Computer Vision, Modèles génératifs, Analyse prédictive",
    icon: Brain,
    details: [
      "Automatisation intelligente",
      "Chatbots/Voicebots",
      "Computer Vision",
      "Modèles génératifs"
    ]
  },
  {
    id: 2,
    title: "Digitalisation Entreprises",
    description: "GED, ERP/CRM/RH, Workflows automatisés, Intégration",
    icon: Cpu,
    details: [
      "Gestion Électronique Documents",
      "ERP/CRM/RH personnalisés",
      "Workflows automatisés",
      "Intégration systèmes"
    ]
  },
  {
    id: 3,
    title: "Smart Software",
    description: "Solutions sur mesure, Applications data-driven, Scalable & Sécurisé",
    icon: Code2,
    details: [
      "Solutions sur mesure",
      "Applications data-driven",
      "Scalable & Sécurisé",
      "Performance optimisée"
    ]
  },
  {
    id: 4,
    title: "Web & Mobile",
    description: "Applications web, iOS/Android, UX moderne, API avancées",
    icon: Smartphone,
    details: [
      "Applications web robustes",
      "iOS & Android natives",
      "UX/UI moderne",
      "API avancées"
    ]
  }
];

const projetsParCategorie = {
  "Développement Web": 3,
  "Applications Mobile": 5,
  "Logiciels & ERP": 2,
  "Programmes IA": 4
};

function NosExpertisesCompact() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="w-full px-6 lg:px-12 py-12 lg:py-16 bg-gradient-to-b from-white to-[#f9fcf8]">
      
      {/* En-tête */}
      <div className="text-center mb-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-[#0e1934] mb-3">
          Nos Expertises & Réalisations
        </h1>
        <p className="text-[#4186d8] text-lg">
          14+ projets réalisés avec 100% de satisfaction
        </p>
      </div>

      {/* Stats rapides */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {Object.entries(projetsParCategorie).map(([categorie, nombre]) => (
          <div key={categorie} className="bg-white rounded-xl p-4 shadow border border-gray-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4186d8]">{nombre}</div>
              <div className="text-sm text-gray-600">{categorie}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Expertises accordéon */}
      <div className="space-y-4 mb-10">
        {expertisesCompact.map((expertise) => {
          const isExpanded = expandedId === expertise.id;
          const Icon = expertise.icon;
          
          return (
            <div 
              key={expertise.id}
              className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : expertise.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#4186d8]" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-800">{expertise.title}</h3>
                    <p className="text-sm text-gray-600">{expertise.description}</p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {isExpanded && (
                <div className="px-4 pb-4">
                  <div className="pt-4 border-t border-gray-100">
                    <div className="space-y-2">
                      {expertise.details.map((detail, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Points forts */}
      <div className="bg-gradient-to-r from-[#0e1934] to-[#1a2a4a] rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Nos Atouts</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Brain className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <div className="font-medium">Expertise IA avancée</div>
              <div className="text-sm text-blue-200">94%+ de précision</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="font-medium">Multi-plateforme</div>
              <div className="text-sm text-blue-200">Web, Mobile, Desktop</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <div className="font-medium">Solutions complètes</div>
              <div className="text-sm text-blue-200">De l'IA aux ERP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { NosExpertisesCompact };