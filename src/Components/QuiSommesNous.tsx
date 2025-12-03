import React from 'react';
import { Smartphone, Code, Brain, Target, Globe, Users } from 'lucide-react';

function QuiSommesNous() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 lg:py-16 bg-[#f9fcf8] gap-8 lg:gap-12">
      {/* === LEFT SIDE === */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
        {/* Text Section */}
        <div className="space-y-4">
          <h1 className="text-[#0e1934] text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Qui Sommes-Nous?
            <span className="block bg-gradient-to-r from-[#4186d8] to-[#964cb2] bg-clip-text text-transparent">
              Delsova Technologies
            </span>
          </h1>
          <h2 className="text-[#4186d8] text-xl lg:text-3xl xl:text-4xl font-normal">
            Expertise Technologique B2B
          </h2>
          <p className="text-[#0e1934] text-base lg:text-lg xl:text-xl font-normal leading-7 lg:leading-8 max-w-full lg:max-w-[668px] mt-2">
            Delsova Technologies est une entreprise technologique B2B (business to business) innovante, 
            spécialisée dans le développement de solutions adaptées aux besoins du marché international.
          </p>
        </div>

        {/* Services Section */}
        <div className="space-y-4">
          <h3 className="text-[#0e1934] text-xl lg:text-2xl font-bold">
            Nous Offrons :
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 flex-shrink-0">
                <Smartphone className="text-[#4186d8] w-6 h-6" />
              </div>
              <span className="text-[#0e1934] text-base lg:text-lg">
                Conception d'applications mobiles et tablettes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 flex-shrink-0">
                <Code className="text-[#4186d8] w-6 h-6" />
              </div>
              <span className="text-[#0e1934] text-base lg:text-lg">
                Développement de sites web
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 flex-shrink-0">
                <Brain className="text-[#4186d8] w-6 h-6" />
              </div>
              <span className="text-[#0e1934] text-base lg:text-lg">
                Intelligence Artificielle et automatisation des processus
              </span>
            </li>
          </ul>
        </div>

        {/* Mission Section */}
        <div className="mt-4 p-6 bg-gradient-to-r from-[#4186d8]/10 to-[#964cb2]/10 rounded-2xl border-l-4 border-[#4186d8]">
          <div className="flex items-center gap-3 mb-3">
            <Target className="text-[#4186d8] w-6 h-6" />
            <h3 className="text-[#0e1934] text-xl font-bold">
              Notre Mission
            </h3>
          </div>
          <p className="text-[#0e1934] text-base lg:text-lg font-medium italic">
            "Assurer le succès des entreprises au moyen d'outils numériques."
          </p>
        </div>
      </div>

      {/* === RIGHT SIDE === */}
      <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        
      </div>
    </section>
  );
}

export default QuiSommesNous;