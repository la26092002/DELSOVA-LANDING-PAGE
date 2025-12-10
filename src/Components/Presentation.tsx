import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, TrendingUp, Zap } from "lucide-react";

function Presentation() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 lg:py-16 bg-[#f9fcf8] gap-8 lg:gap-12">
      {/* === LEFT SIDE === */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
        {/* Text Section */}
        <div className="space-y-4">
          <h1 className="text-[#0e1934] text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Delsova Technologies
            <span className="block bg-gradient-to-r from-[#4186d8] to-[#964cb2] bg-clip-text text-transparent">
              Innovation – IA – Digitalisation
            </span>
          </h1>
          <h2 className="text-[#4186d8] text-xl lg:text-2xl xl:text-3xl font-semibold">
            Nous accompagnons la transformation des entreprises
          </h2>
          <p className="text-[#0e1934] text-base lg:text-lg xl:text-xl font-normal leading-7 lg:leading-8 max-w-full lg:max-w-[668px] mt-2">
            Nous sommes des bâtisseurs. Nous sommes des visionnaires. Nous créons des solutions qui font avancer votre entreprise au moyen d'outils numériques et digitaux performants.
          </p>
        </div>

        {/* Features Pills */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
            <Sparkles className="w-4 h-4 text-[#4186d8]" />
            <span className="text-sm font-medium text-gray-700">Innovation</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
            <Zap className="w-4 h-4 text-[#964cb2]" />
            <span className="text-sm font-medium text-gray-700">Performance</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-gray-700">Succès Durable</span>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          {/* Contact Button */}
          <div className="w-full sm:w-64 h-16 bg-gradient-to-r from-[#4186d8] to-[#964cb2] rounded-2xl shadow-lg flex items-center justify-center px-4 cursor-pointer hover:opacity-90 transition">
            <div className="flex flex-col items-center">
              <div className="text-white text-lg font-semibold">
                Nous Contacter
              </div>
              <div className="text-white text-xs font-medium">
                Discutons de votre projet
              </div>
            </div>
          </div>

          {/* Portfolio Button */}
          <div className="w-full sm:w-64 h-16 bg-[#0e1934] rounded-2xl shadow-lg flex items-center justify-center px-4 cursor-pointer hover:bg-[#1a2a4a] transition">
            <div className="flex flex-col items-center">
              <div className="text-white text-lg font-semibold">
                Voir nos Réalisations
              </div>
              <div className="text-white text-xs font-medium">
                Découvrez nos projets
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === RIGHT SIDE === */}
      <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <div className="relative w-full max-w-md lg:max-w-[550px] h-full lg:h-full rounded-2xl lg:rounded-[30px] shadow-2xl overflow-hidden">
          <img
            src="/assets/home.png"
            alt="Delsova Technologies - Innovation, IA et Digitalisation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Presentation;