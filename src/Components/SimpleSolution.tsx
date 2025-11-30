import React from 'react';
import rightImage from '../assets/rightImage.png'; // Replace with your actual image path

function SimpleSolution() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-[#FBFBFB] gap-10">
      {/* === LEFT SIDE (75%) === */}
      <div className="w-full lg:w-3/4 flex flex-col gap-4">
        <div className="text-black text-3xl lg:text-4xl font-normal font-['Poppins']">
          Une solution simple
        </div>

        <div className="flex flex-wrap items-baseline gap-2">
         <div className="text-[#CBED00] text-6xl lg:text-8xl font-normal font-['Great_Vibes']">
  pour{' '}
</div>




          <div className="text-black text-3xl lg:text-4xl font-normal font-['Poppins']">
            un grand problème
          </div>
        </div>

        <p className="text-zinc-600 text-lg lg:text-2xl font-normal font-['Poppins'] leading-8 max-w-[1002px] mt-4">
          Nous savons combien le temps est précieux. WinNselm est conçu pour faciliter la gestion de vos
          rendez-vous et réduire le stress lié à l’attente.
        </p>

        <p className="text-zinc-600 text-lg lg:text-2xl font-normal font-['Poppins'] leading-8 max-w-[1002px]">
          Grâce à une interface claire et fluide, vous pouvez planifier, suivre et gérer vos passages en toute
          simplicité.
        </p>
      </div>

      {/* === RIGHT SIDE (25%) === */}
      <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
        <img
          src={rightImage}
          alt="Illustration"
          className="w-64 lg:w-full max-w-[400px] object-contain rounded-2xl"
        />
      </div>
    </section>
  );
}

export default SimpleSolution;
