import React from "react";
import { useParams } from "react-router-dom";
import { Sparkles, Phone } from "lucide-react";
import products from "../data/products.json";

const NotreSolution: React.FC = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9fcf8]">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-[#0e1934]">Produit introuvable</h2>
          <p className="text-gray-500 mt-2">Le produit que vous cherchez n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full bg-gradient-to-b from-[#f9fcf8] to-white py-16 lg:py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* ===== HERO SECTION ===== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left column - Text content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#4186d8]/10 to-[#964cb2]/10 text-[#4186d8] text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Solution SaaS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0e1934] leading-tight">
              {product.name}
            </h1>

            <p className="text-[#4186d8] text-xl lg:text-2xl font-semibold mt-3">
              {product.tagline}
            </p>

            <p className="mt-6 text-gray-600 text-base lg:text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {product.stats.uptime && (
                <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#4186d8] to-[#964cb2] bg-clip-text text-transparent">
                    {product.stats.uptime}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Uptime</p>
                </div>
              )}
              {product.stats.clients && (
                <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#4186d8] to-[#964cb2] bg-clip-text text-transparent">
                    {product.stats.clients}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Clients</p>
                </div>
              )}
              {product.stats.transactions && (
                <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#4186d8] to-[#964cb2] bg-clip-text text-transparent">
                    {product.stats.transactions}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Transactions</p>
                </div>
              )}
            </div>

            {/* Informational text (replaces the button) */}
            <div className="mt-8 flex items-center gap-2 text-[#4186d8] bg-[#4186d8]/10 rounded-full px-4 py-2 w-fit">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">
                Contactez-nous pour prendre une démo
              </span>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="rounded-2xl lg:rounded-[30px] overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <div className="aspect-[7/8] w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ===== FEATURES SECTION ===== */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0e1934]">
              Fonctionnalités clés
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#4186d8] to-[#964cb2] mx-auto mt-3"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {product.features.map((f) => (
              <div
                key={f.id}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#4186d8]/30 group"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-[#0e1934] mt-2">
                  {f.title}
                </h3>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== ADVANTAGES SECTION ===== */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0e1934]">
              Avantages exclusifs
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#4186d8] to-[#964cb2] mx-auto mt-3"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {product.advantages.map((a, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-5xl mb-3">{a.icon}</div>
                <h3 className="text-lg font-bold text-[#0e1934] mt-2">
                  {a.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner - Informational only, no button */}
        <div className="mt-20 bg-gradient-to-r from-[#4186d8] to-[#964cb2] rounded-2xl p-8 lg:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl lg:text-3xl font-bold">
            Prêt à transformer votre activité ?
          </h3>
          <p className="mt-2 text-white/80 max-w-2xl mx-auto">
            Une démonstration personnalisée de {product.name} peut vous être présentée.
            <br />
            Utilisez notre formulaire de contact ou appelez-nous directement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotreSolution;