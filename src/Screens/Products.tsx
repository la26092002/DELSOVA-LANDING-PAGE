import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ChevronRight } from "lucide-react";
import products from "../data/products.json";

const Products: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-b from-[#f9fcf8] to-white py-16 lg:py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header – same style as "À Propos de Nous" */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#4186d8] to-[#964cb2] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0e1934]">
              Nos Produits
            </h1>
          </div>
          <p className="text-[#4186d8] text-lg sm:text-xl lg:text-2xl font-medium mb-4">
            Des solutions digitales prêtes à l’emploi
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#4186d8] to-[#964cb2] mx-auto mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Explorez notre catalogue de solutions logicielles conçues pour
            accélérer la transformation de votre entreprise.
          </p>
        </div>

        {/* Grid – same responsive breakpoints, enhanced cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              onClick={() => navigate(`/solution/${p.id}`)}
              className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden hover:border-[#4186d8]/50"
            >
              {/* Image container – subtle scale on hover */}
              <div className="relative aspect-[7/8] overflow-hidden bg-gray-50">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                {/* Badge – Delsova gradient style */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-[#4186d8] to-[#964cb2] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  SaaS
                </div>
              </div>

              {/* Content – aligned with Delsova typography */}
              <div className="p-5">
                <h2 className="text-lg font-bold text-[#0e1934] line-clamp-1">
                  {p.name}
                </h2>
                <p className="text-sm text-[#4186d8] font-semibold mt-1">
                  {p.tagline}
                </p>
                <p className="text-sm text-gray-600 mt-3 line-clamp-2 leading-relaxed">
                  {p.description}
                </p>

                {/* Button – same as "Réserver une réunion" style */}
                <div className="mt-5">
                  <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#0e1934] to-[#4186d8] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group/btn">
                    <span>Voir détails</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;