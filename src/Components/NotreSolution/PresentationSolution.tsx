// Components/PresentationSolution.tsx

import {
  Brain,
  ShieldCheck,
  Smartphone,
  Globe,
  ArrowRight,
} from "lucide-react";

function PresentationSolution() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 lg:py-20 bg-[#f9fcf8] gap-10 overflow-hidden">
      {/* LEFT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4186d8]/10 to-[#964cb2]/10 border border-[#4186d8]/20 w-fit">
            <div className="w-2 h-2 rounded-full bg-[#4186d8] animate-pulse"></div>
            <span className="text-sm font-semibold text-[#0e1934]">
              NOS SOLUTIONS DIGITALES
            </span>
          </div>

          <h1 className="text-[#0e1934] text-4xl lg:text-6xl font-bold leading-tight">
            Des Solutions
            <span className="block bg-gradient-to-r from-[#4186d8] to-[#964cb2] bg-clip-text text-transparent">
              Innovantes & Performantes
            </span>
          </h1>

          <p className="text-gray-600 text-lg lg:text-xl leading-8 max-w-2xl">
            Nous développons des solutions intelligentes adaptées aux besoins
            des entreprises modernes : IA, plateformes web, applications
            mobiles et automatisation.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-100">
            <Brain className="w-8 h-8 text-[#964cb2] mb-3" />
            <h3 className="font-bold text-[#0e1934]">Intelligence Artificielle</h3>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-100">
            <Smartphone className="w-8 h-8 text-[#4186d8] mb-3" />
            <h3 className="font-bold text-[#0e1934]">Apps Mobiles</h3>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-100">
            <Globe className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-bold text-[#0e1934]">Solutions Web</h3>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-100">
            <ShieldCheck className="w-8 h-8 text-cyan-600 mb-3" />
            <h3 className="font-bold text-[#0e1934]">Sécurité & Fiabilité</h3>
          </div>
        </div>

        {/* CTA */}
        <div>
          <button className="group px-8 py-5 rounded-xl bg-gradient-to-r from-[#0e1934] to-[#4186d8] text-white font-semibold flex items-center gap-3 hover:shadow-2xl transition-all duration-300">
            <span>Découvrir nos services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-6 bg-gradient-to-r from-[#4186d8]/20 to-[#964cb2]/20 blur-3xl rounded-full"></div>

          {/* Main Card */}
          <div className="relative bg-white rounded-[32px] shadow-2xl p-6 lg:p-8 border border-slate-100 max-w-[550px]">
            <img
              src="/assets/home.png"
              alt="Solutions Delsova"
              className="w-full rounded-2xl object-cover"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
              <p className="text-3xl font-bold bg-gradient-to-r from-[#4186d8] to-[#964cb2] bg-clip-text text-transparent">
                +120%
              </p>
              <p className="text-sm text-gray-500">
                Performance & Productivité
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PresentationSolution;