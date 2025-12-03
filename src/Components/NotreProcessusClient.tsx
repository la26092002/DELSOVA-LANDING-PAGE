import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  ClipboardCheck, 
  Target, 
  Lightbulb, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight,
  Shield,
  TrendingUp,
  ArrowRightCircle
} from 'lucide-react';

// Données des étapes du processus
const processSteps = [
  {
    id: 1,
    number: "01",
    title: "ANALYSE DE SITUATION",
    description: "Compréhension complète de votre contexte, ressources existantes et infrastructure.",
    icon: Search,
    color: "from-blue-500 to-cyan-400",
    shortDesc: "Analyse initiale"
  },
  {
    id: 2,
    number: "02",
    title: "ÉTAT DES LIEUX",
    description: "Audit détaillé des processus actuels, systèmes en place et points d'amélioration identifiés.",
    icon: FileText,
    color: "from-cyan-500 to-teal-400",
    shortDesc: "Audit complet"
  },
  {
    id: 3,
    number: "03",
    title: "DIAGNOSTIC",
    description: "Évaluation des forces/faiblesses, identification des goulots d'étranglement et blocages opérationnels.",
    icon: ClipboardCheck,
    color: "from-teal-500 to-emerald-400",
    shortDesc: "Diagnostic approfondi"
  },
  {
    id: 4,
    number: "04",
    title: "ANALYSE DE PROBLÈME",
    description: "Définition précise des enjeux prioritaires et impact sur votre activité.",
    icon: Target,
    color: "from-emerald-500 to-green-400",
    shortDesc: "Identification des enjeux"
  },
  {
    id: 5,
    number: "05",
    title: "PROPOSITION DE SOLUTION",
    description: "Recommandations adaptées avec roadmap d'implémentation et ROI estimé.",
    icon: Lightbulb,
    color: "from-green-500 to-lime-400",
    shortDesc: "Solution personnalisée"
  }
];

function NotreProcessusClient() {
  const [activeStep, setActiveStep] = useState(2); // Milieu par défaut

  // Fonction pour passer à l'étape suivante
  const nextStep = () => {
    if (activeStep < processSteps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  // Fonction pour revenir à l'étape précédente
  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-[#f9fcf8] to-white overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-[#0e1934] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
          NOTRE PROCESSUS CLIENT
        </h1>
        <p className="text-[#4186d8] text-sm sm:text-base lg:text-lg xl:text-xl max-w-4xl mx-auto px-4">
          Une méthodologie structurée pour garantir le succès de votre transformation digitale
        </p>
      </div>

      {/* Desktop Timeline - Optimisé pour tous les écrans */}
      <div className="hidden sm:block">
        {/* Ligne de connexion principale */}
        <div className="relative mb-8 lg:mb-12 xl:mb-16">
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gray-200 z-0"></div>
          <div 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r from-[#4186d8] to-[#964cb2] z-0 transition-all duration-500"
            style={{ width: `${((activeStep) / (processSteps.length - 1)) * 100}%` }}
          ></div>
          
          {/* Points d'étape avec disposition flexible */}
          <div className="relative flex justify-between z-10 px-2">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              const isInactive = index > activeStep;
              
              return (
                <div 
                  key={step.id}
                  className="flex flex-col items-center relative group"
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Cercle d'étape - Taille adaptative */}
                  <div className={`
                    w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center 
                    transition-all duration-300 transform ${!isInactive ? 'hover:scale-110' : ''} cursor-pointer
                    ${isActive 
                      ? `bg-gradient-to-br ${step.color} shadow-lg sm:shadow-xl ring-4 ring-white ring-opacity-50` 
                      : isCompleted
                      ? 'bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-gray-300'
                      : 'bg-white border-2 sm:border-3 md:border-4 border-gray-200'
                    }
                  `}>
                    <div className={`
                      w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center
                      ${isActive ? 'bg-white' : isCompleted ? 'bg-gray-100' : 'bg-gray-50'}
                    `}>
                      <Icon className={`
                        w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 mb-0.5 sm:mb-1
                        ${isActive ? 'text-gray-800' : isCompleted ? 'text-gray-500' : 'text-gray-400'}
                      `} />
                      <span className={`
                        text-xs sm:text-sm font-bold
                        ${isActive ? 'text-gray-800' : isCompleted ? 'text-gray-500' : 'text-gray-400'}
                      `}>
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Ligne de connexion */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-6 sm:top-8 md:top-10 left-full w-full h-1 -ml-1">
                      <div className={`
                        absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2
                        ${index < activeStep ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gray-200'}
                      `}></div>
                    </div>
                  )}

                  {/* Titre de l'étape - Toujours visible */}
                  <div className="mt-4 sm:mt-6 md:mt-8 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] text-center">
                    <h3 className={`
                      text-[10px] xs:text-xs sm:text-xs md:text-sm font-bold mb-1 line-clamp-2
                      ${isActive ? 'text-gray-800' : isCompleted ? 'text-gray-600' : 'text-gray-400'}
                    `}>
                      {step.title}
                    </h3>
                  </div>

                  {/* Détails de l'étape - Au hover */}
                  <div className={`
                    absolute top-[calc(100%+100px)] w-[280px] sm:w-[300px] md:w-[320px] lg:w-[360px] p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-xl
                    transform transition-all duration-300 z-50
                    ${index === 0 ? 'left-0' : ''}
                    ${index === 4 ? 'right-0' : ''}
                    ${index > 0 && index < 4 ? 'left-1/2 transform -translate-x-1/2' : ''}
                    ${isActive 
                      ? 'opacity-100 translate-y-0 visible' 
                      : 'opacity-0 translate-y-4 invisible pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible'
                    }
                    ${isActive ? 'bg-white' : 'bg-white/95 backdrop-blur-sm'}
                  `}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        ${isActive ? `bg-gradient-to-br ${step.color}` : 'bg-gray-200'}
                      `}>
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                      </div>
                      <div>
                        <span className={`text-xs font-bold ${isActive ? 'text-gray-500' : 'text-gray-400'}`}>
                          {step.number}
                        </span>
                        <h3 className={`
                          text-sm sm:text-base md:text-lg font-bold
                          ${isActive ? 'text-gray-800' : 'text-gray-600'}
                        `}>
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                      {step.description}
                    </p>
                    {isActive && index < processSteps.length - 1 && (
                      <div 
                        className="flex items-center text-[#4186d8] text-xs sm:text-sm font-medium cursor-pointer hover:text-[#964cb2] transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextStep();
                        }}
                      >
                        <ArrowRightCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                        <span>Passer à l'étape suivante</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contrôles de navigation desktop */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button 
              onClick={prevStep}
              disabled={activeStep === 0}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                ${activeStep === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }
              `}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Étape précédente</span>
            </button>
            
            <div className="flex items-center gap-2">
              {processSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`
                    w-2 h-2 rounded-full transition-all
                    ${index === activeStep 
                      ? 'bg-[#4186d8] w-6' 
                      : index < activeStep
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                    }
                  `}
                />
              ))}
            </div>
            
            <button 
              onClick={nextStep}
              disabled={activeStep === processSteps.length - 1}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                ${activeStep === processSteps.length - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-[#4186d8] text-white hover:bg-[#3573c7]'
                }
              `}
            >
              <span className="text-sm font-medium">Étape suivante</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Engagement Delsova - Version responsive */}
        <div className="mt-8 sm:mt-12 lg:mt-16 xl:mt-20 bg-gradient-to-r from-[#0e1934] to-[#1a2a4a] rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#4186d8] to-[#964cb2] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 leading-tight">
                    Engagement Delsova
                  </h2>
                  <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
                    Solutions sur mesure pour votre succès
                  </p>
                  <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
                    Des solutions sur mesure conçues pour assurer le succès de votre entreprise 
                    par des outils digitaux performants et sécurisés.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-0.5">Outils Performants</h4>
                    <p className="text-blue-100 text-xs sm:text-sm">Solutions digitales optimisées</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-0.5">Sécurité Maximale</h4>
                    <p className="text-blue-100 text-xs sm:text-sm">Protection des données garantie</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-auto mt-4 lg:mt-0 lg:ml-6 xl:ml-8 flex-shrink-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center w-full lg:w-48 xl:w-56">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-2 leading-none">100%</div>
                <div className="text-blue-200 font-medium text-sm sm:text-base mb-3">Satisfaction Client</div>
                <div className="w-full h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mb-2"></div>
                <div className="text-white/80 text-xs sm:text-sm">Garantie de résultat</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Timeline - Pour les très petits écrans */}
      <div className="sm:hidden">
        <div className="relative">
          {/* Ligne verticale centrale */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4186d8] via-[#964cb2] to-green-500 z-0"></div>
          
          {/* Étapes pour mobile */}
          <div className="relative space-y-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              const isInactive = index > activeStep;
              
              return (
                <div 
                  key={step.id}
                  className="flex items-start gap-4"
                  onClick={() => setActiveStep(index)}
                >
                  {/* Cercle d'étape */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center
                      transition-all duration-300
                      ${isActive 
                        ? `bg-gradient-to-br ${step.color} shadow-md ring-2 ring-white ring-opacity-50` 
                        : isCompleted
                        ? 'bg-gradient-to-br from-gray-300 to-gray-400 border border-gray-300'
                        : 'bg-white border-2 border-gray-300'
                      }
                    `}>
                      <Icon className={`
                        w-4 h-4
                        ${isActive ? 'text-white' : isCompleted ? 'text-gray-500' : 'text-gray-400'}
                      `} />
                    </div>
                    <div className={`absolute -top-1 -right-1 rounded-full p-0.5 shadow-sm ${isActive ? 'bg-white' : isCompleted ? 'bg-gray-100' : 'bg-gray-50'}`}>
                      <span className={`text-[8px] font-bold ${isActive ? 'text-gray-800' : isCompleted ? 'text-gray-600' : 'text-gray-400'}`}>
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Contenu */}
                  <div className={`
                    flex-1 p-4 rounded-lg transition-all duration-300 min-h-[120px]
                    ${isActive ? 'bg-white shadow-md' : isCompleted ? 'bg-gray-50' : 'bg-gray-50 opacity-80'}
                  `}>
                    <h3 className={`font-bold mb-2 text-sm ${isActive ? 'text-gray-800' : isCompleted ? 'text-gray-600' : 'text-gray-400'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs leading-relaxed mb-3 ${isActive ? 'text-gray-600' : 'text-gray-500'}`}>
                      {step.description}
                    </p>
                    {isActive && index < processSteps.length - 1 && (
                      <div 
                        className="flex items-center text-[#4186d8] text-xs font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextStep();
                        }}
                      >
                        <ArrowRight className="w-3 h-3 mr-1" />
                        <span>Étape suivante</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation mobile */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button 
            onClick={prevStep}
            disabled={activeStep === 0}
            className={`
              w-10 h-10 rounded-full flex items-center justify-center shadow-sm
              ${activeStep === 0 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white border border-gray-200 text-gray-600'
              }
            `}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex gap-1">
            {processSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`
                  w-2 h-2 rounded-full transition-all
                  ${index === activeStep 
                    ? 'bg-[#4186d8] w-6' 
                    : index < activeStep
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                  }
                `}
              />
            ))}
          </div>
          
          <button 
            onClick={nextStep}
            disabled={activeStep === processSteps.length - 1}
            className={`
              w-10 h-10 rounded-full flex items-center justify-center shadow-sm
              ${activeStep === processSteps.length - 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white border border-gray-200 text-gray-600'
              }
            `}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Engagement Delsova Mobile */}
        <div className="mt-8 bg-gradient-to-r from-[#0e1934] to-[#1a2a4a] rounded-xl p-4 shadow-md">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#4186d8] to-[#964cb2] rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-base mb-1">Engagement Delsova</h3>
              <p className="text-blue-100 text-xs mb-3">
                Solutions sur mesure pour votre succès
              </p>
              <p className="text-white/90 text-xs leading-relaxed">
                Des solutions sur mesure conçues pour assurer le succès de votre entreprise 
                par des outils digitaux performants et sécurisés.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3 h-3 text-green-400" />
              </div>
              <div>
                <h4 className="text-white text-xs font-semibold">Outils Performants</h4>
                <p className="text-blue-100 text-[10px]">Solutions optimisées</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-3 h-3 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-white text-xs font-semibold">Sécurité Maximale</h4>
                <p className="text-blue-100 text-[10px]">Données protégées</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-blue-200 text-xs">Satisfaction Client</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-1.5 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mb-1"></div>
              <div className="text-white/80 text-[10px]">Garantie de résultat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotreProcessusClient;