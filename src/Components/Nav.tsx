import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Group 150.png';
import frFlag from '../assets/flag.png';

function Nav() {
  return (
    <nav className="flex items-center justify-between w-full bg-[#FBFBFB] px-4 lg:px-8 py-4 shadow-sm">
      {/* === DESKTOP LAYOUT (lg and up) === */}
      <div className="hidden lg:flex items-center w-full">
        {/* Logo (20%) */}
        <div className="w-[20%] flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-10 object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Blank (45%) */}
        <div className="w-[45%]" />

        {/* Navigation + Lang Selector (35%) */}
        <div className="w-[35%] flex justify-around items-center">
          <Link
            to="/"
            className="text-black text-lg font-normal font-['Inter'] hover:text-blue-600 transition px-2 py-1"
          >
            Accueil
          </Link>

          <Link
            to="/comment-ca-marche"
            className="text-black text-lg font-normal font-['Inter'] hover:text-blue-600 transition px-2 py-1"
          >
            Comment ça marche
          </Link>

          {/* Langue Selector */}
          <div className="w-36 h-12 flex items-center justify-start gap-3 rounded-[28.5px] border-[1.5px] border-[#C6E700] px-3 cursor-pointer hover:bg-[#F9FFCC] transition">
            <div className="w-8 h-8 bg-[#F3FFAD] rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={frFlag}
                alt="French Flag"
                className="w-4 h-4 object-cover"
              />
            </div>
            <div className="text-black text-base font-normal font-['Inter']">
              Français
            </div>
          </div>
        </div>
      </div>

      {/* === MOBILE + TABLET LAYOUT (under lg) === */}
      <div className="flex lg:hidden w-full justify-between items-center px-2">
        {/* Logo */}
        <div className="w-1/4 flex justify-start">
          <img src={logo} alt="Logo" className="h-8 object-contain" />
        </div>

        {/* Navigation Links */}
        <div className="flex w-2/4 justify-center gap-4">
          <Link
            to="/"
            className="text-black text-sm font-normal font-['Inter'] hover:text-blue-600 transition px-2 py-1"
          >
            Accueil
          </Link>

          <Link
            to="/comment-ca-marche"
            className="text-black text-sm font-normal font-['Inter'] hover:text-blue-600 transition px-2 py-1"
          >
            Comment ça marche
          </Link>
        </div>

        {/* Language Selector */}
        <div className="w-1/4 flex justify-end">
          <div className="flex flex-col items-center justify-center">
            <div className="w-8 h-8 bg-[#F3FFAD] rounded-full flex items-center justify-center overflow-hidden border-[1.5px] border-[#C6E700]">
              <img
                src={frFlag}
                alt="French Flag"
                className="w-4 h-4 object-cover"
              />
            </div>
            <div className="text-black text-xs font-normal font-['Inter'] mt-1">
              FR
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;