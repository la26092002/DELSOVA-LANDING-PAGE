import { Sparkles, TrendingUp, Zap, PlayCircle, X } from "lucide-react";
import { useState } from "react";
import BookingModal from "../Screens/BookingSystem.tsx";

const STORYLANE_URL = "https://demo.storylane.com/share/s2odquzstlcg";

function Presentation() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(true);

  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 lg:py-16 bg-[#f9fcf8] gap-8 lg:gap-12">
      {/* === LEFT SIDE === */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
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
            Nous sommes des visionnaires. Nous créons des solutions qui font
            avancer votre entreprise au moyen d'outils numériques performants.
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

        {/* CTA Buttons */}
        <div className="mt-2 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-9 py-6 bg-gradient-to-r from-[#0e1934] to-[#4186d8] text-white text-base font-bold rounded-lg hover:shadow-lg transition-shadow duration-200 flex items-center gap-3 whitespace-nowrap"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Réserver une réunion
          </button>

          <button
            onClick={() => setIsVideoOpen(true)}
            className="px-9 py-6 bg-white border-2 border-[#4186d8] text-[#4186d8] text-base font-bold rounded-lg hover:bg-[#4186d8]/5 hover:shadow-lg transition-all duration-200 flex items-center gap-3 whitespace-nowrap"
          >
            <PlayCircle className="w-5 h-5 text-[#964cb2]" />
            Voir notre système
          </button>
        </div>
      </div>

      {/* === RIGHT SIDE === */}
      <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <div className="relative w-full max-w-md lg:max-w-[550px] rounded-2xl lg:rounded-[30px] shadow-2xl overflow-hidden">
          <img
            src="/assets/home.png"
            alt="Delsova Technologies - Innovation, IA et Digitalisation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* ===== STORYLANE VIDEO POPUP ===== */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6"
          style={{ backgroundColor: "rgba(14,25,52,0.85)" }}
          onClick={() => setIsVideoOpen(false)}
        >
          {/* Bottom sheet on mobile, centered card on sm+ */}
          <div
            className="relative w-full sm:max-w-3xl bg-white sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#0e1934] to-[#4186d8] shrink-0">
              <div className="flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-white shrink-0" />
                <span className="text-white font-bold text-sm sm:text-base">
                  Découvrez notre nouveau système
                </span>
              </div>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/20 shrink-0 ml-2"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Storylane iframe — fixed 500px height so it always renders fully */}
            <div className="w-full shrink-0" style={{ height: "500px" }}>
              <iframe
                src={STORYLANE_URL}
                title="Pilot Import – Démo interactive"
                allow="fullscreen"
                style={{ width: "100%", height: "100%", border: "none", display: "block" }}
              />
            </div>

            {/* Footer */}
            <div className="px-4 py-3 bg-[#f9fcf8] flex items-center justify-between gap-3 shrink-0">
              <a
                href="/solution/pilot-import"
                onClick={() => setIsVideoOpen(false)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4186d8] to-[#964cb2] text-white text-sm font-bold rounded-lg hover:shadow-md transition-all duration-200 whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Voir Pilot Import
              </a>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="text-sm font-semibold text-gray-400 hover:text-gray-600 hover:underline transition-colors whitespace-nowrap"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Presentation;