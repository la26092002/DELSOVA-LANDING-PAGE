import React from 'react';
import playstore from '../assets/playstore.png';
import appstore from '../assets/appstore.png';

function Presentation() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 lg:py-16 bg-[#FBFBFB] gap-8 lg:gap-12">
      {/* === LEFT SIDE === */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
        {/* Text Section */}
        <div className="space-y-4">
          <h1 className="text-black text-3xl lg:text-5xl xl:text-6xl font-bold font-['Poppins'] leading-tight">
            Gagne du temps
          </h1>
          <h2 className="text-zinc-600 text-xl lg:text-3xl xl:text-4xl font-normal font-['Poppins']">
            évite les files d'attente avec
          </h2>
          <p className="text-zinc-600 text-base lg:text-lg xl:text-xl font-normal font-['Poppins'] leading-7 lg:leading-8 max-w-full lg:max-w-[668px] mt-2">
            Dtour est une application innovante qui te permet de réserver ton passage à l'avance,
            d'organiser ton temps et d'éviter les longues files d'attente dans les centres et les institutions.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          {/* Google Play Button */}
          <div className="w-full sm:w-64 h-16 bg-black rounded-2xl shadow-[0px_0px_28.8px_0px_rgba(0,0,0,0.40)] flex items-center px-4 cursor-pointer hover:bg-zinc-800 transition">
            <img src={playstore} alt="Google Play" className="w-8 h-8 mr-3" />
            <div className="flex flex-col">
              <div className="text-white text-xs font-semibold font-['Poppins']">
                Télécharger l'app
              </div>
              <div className="text-white text-lg font-semibold font-['Poppins']">
                Google Play
              </div>
            </div>
          </div>

          {/* App Store Button */}
          <div className="w-full sm:w-64 h-16 bg-black rounded-2xl shadow-[0px_0px_28.8px_0px_rgba(0,0,0,0.40)] flex items-center px-4 cursor-pointer hover:bg-zinc-800 transition">
            <img src={appstore} alt="App Store" className="w-8 h-8 mr-3" />
            <div className="flex flex-col">
              <div className="text-white text-xs font-semibold font-['Poppins']">
                Télécharger l'app
              </div>
              <div className="text-white text-lg font-semibold font-['Poppins']">
                App Store
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === RIGHT SIDE === */}
      <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <div className="w-full max-w-md lg:max-w-[550px] h-64 lg:h-80 bg-black/40 rounded-2xl lg:rounded-[30px] shadow-[0px_0px_36.5px_0px_rgba(0,0,0,0.25)] border-2 border-zinc-500" />
      </div>
    </section>
  );
}

export default Presentation;