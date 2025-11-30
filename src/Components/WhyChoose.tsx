import React from "react";
import { CheckCircle, Clock, UserCheck } from "lucide-react";
import logo from "../assets/Group 150.png";
import iconSafe from "../assets/mdi_shield-lock-outline.png";
import headset from "../assets/tabler_headset.png";

const WhyChoose: React.FC = () => {
  return (
    <div className="w-full bg-[#FBFBFB] flex flex-col lg:flex-row justify-between items-start px-6 lg:px-16 py-12 lg:py-16 gap-8 lg:gap-12">
      {/* ---------- Left Section ---------- */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
        <div className="text-black text-2xl lg:text-3xl font-normal font-['Poppins']">
          Pourquoi choisir
        </div>

        {/* Logo and ? inline */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-12 lg:h-14 object-contain" />
          <div className="text-[#000000] text-7xl lg:text-8xl font-normal font-['Great_Vibes'] leading-none">
            ?
          </div>
        </div>

        <div className="text-zinc-600 text-base font-normal font-['Poppins'] max-w-full lg:max-w-sm">
          Grâce à une interface claire et fluide, vous pouvez planifier, suivre
          et gérer vos passages en toute simplicité.
        </div>
      </div>

      {/* ---------- Right Section (Cards Grid) ---------- */}
      <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ---------- Top Left: Gradient Card ---------- */}
        <div className="h-32 lg:h-36 bg-gradient-to-r from-[#CBED00] to-[#97B101] rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.10)] flex items-center gap-4 lg:gap-5 px-4 lg:px-6">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
            <Clock className="text-[#CBED00] w-6 h-6 lg:w-7 lg:h-7" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-white text-lg lg:text-xl font-extrabold font-['Poppins']">
              Gain de temps
            </div>
            <div className="text-white text-xs font-normal font-['Poppins'] max-w-full lg:max-w-[14rem]">
              Plus besoin de perdre des heures à attendre, tout se fait depuis
              votre téléphone.
            </div>
          </div>
        </div>

        {/* ---------- Top Right: White Card ---------- */}
        <div className="h-32 lg:h-36 bg-white rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.10)] flex items-center gap-4 lg:gap-5 px-4 lg:px-6">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#F7FDD7] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
            <UserCheck className="text-[#CBED00] w-6 h-6 lg:w-7 lg:h-7" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-black text-lg lg:text-xl font-extrabold font-['Poppins']">
              Simplicité
            </div>
            <div className="text-zinc-600 text-xs font-normal font-['Poppins'] max-w-full lg:max-w-[14rem]">
              Une interface intuitive et fluide pour tout gérer en un seul
              endroit.
            </div>
          </div>
        </div>

        {/* ---------- Bottom Left: White Card ---------- */}
        <div className="h-32 lg:h-36 bg-white rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.10)] flex items-center gap-4 lg:gap-5 px-4 lg:px-6">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#F7FDD7] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
            <img
              src={iconSafe}
              alt="Sécurité"
              className="w-6 h-6 lg:w-7 lg:h-7 object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-black text-lg lg:text-xl font-extrabold font-['Poppins']">
              Sécurité
            </div>
            <div className="text-zinc-600 text-xs font-normal font-['Poppins'] max-w-full lg:max-w-[14rem]">
              Vos données sont protégées grâce à nos protocoles de sécurité
              avancés.
            </div>
          </div>
        </div>

        {/* ---------- Bottom Right: White Card ---------- */}
        <div className="h-32 lg:h-36 bg-white rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.10)] flex items-center gap-4 lg:gap-5 px-4 lg:px-6">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#F7FDD7] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
            <img
              src={headset}
              alt="Accessibilité"
              className="w-6 h-6 lg:w-7 lg:h-7 object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-black text-lg lg:text-xl font-extrabold font-['Poppins']">
              Accessibilité
            </div>
            <div className="text-zinc-600 text-xs font-normal font-['Poppins'] max-w-full lg:max-w-[14rem]">
              Accédez à vos informations à tout moment, où que vous soyez.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;