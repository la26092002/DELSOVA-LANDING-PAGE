import React from "react";
import {
  Users,
  MapPin,
  Building,
  Flag,
  Mail,
  Phone,
  Calendar,
  Award,
  Globe,
  Briefcase,
} from "lucide-react";

// Données de l'équipe mise à jour
const equipe = [
  {
    id: 1,
    prenom: "Maalem",
    nom: "Nouredine",
    role: "Leader & Directeur",
    expertise: "Leadership & Management",
    description:
      "Ancien Directeur du site industriel – Oran/Arzew, Sonatrach. Plus de 60 ans d'expérience en leadership et management stratégique.",
    initiales: "MN",
    couleur: "from-blue-500 to-cyan-500",
    competences: ["Leadership Stratégique", "Management Industriel", "Vision d'Entreprise", "Excellence Opérationnelle"],
  },
  {
    id: 2,
    prenom: "Chrair",
    nom: "Mohammed Nadir",
    role: "Ingénieur Informatique",
    expertise: "Management & Innovation",
    description:
      "Ingénieur informatique avec plus de 6 ans d'expérience. Spécialisé dans la gestion de projets, le leadership d'équipe et la recherche de solutions innovantes.",
    initiales: "CN",
    couleur: "from-purple-500 to-pink-500",
    competences: ["Gestion de Projets", "Leadership d'Équipe", "Innovation & Recherche", "Stratégie Digitale"],
  },
  {
    id: 3,
    prenom: "Benyakhou",
    nom: "Elhadj Larbi",
    role: "Ingénieur Informatique",
    expertise: "Gestion & Analyse",
    description:
      "Ingénieur informatique avec plus de 6 ans d'expérience. Expert en gestion de projets, analyse des besoins et coordination d'équipes techniques.",
    initiales: "BE",
    couleur: "from-emerald-500 to-green-500",
    competences: ["Gestion de Projets", "Analyse & Conseil", "Leadership d'Équipe", "Coordination Technique"],
  },
];

// Données du siège social simplifiées
const siegeSocial = {
  ville: "Oran",
  pays: "Algérie",
  description:
    "Notre siège social est situé au cœur de la vibrante ville d'Oran, capitale économique de l'Ouest algérien.",
};

function AProposDeNous() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-[#f9fcf8]">
      {/* En-tête */}
      <div className="text-center mb-12 lg:mb-16 max-w-5xl mx-auto">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#4186d8] to-[#964cb2] flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0e1934]">
            À Propos de Delsova
          </h1>
        </div>
        <p className="text-[#4186d8] text-lg sm:text-xl lg:text-2xl font-medium mb-3">
          Leadership Expérimenté & Expertise Technique
        </p>
        <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto px-4">
          Delsova Technologies combine une vision stratégique forte avec une expertise technique de pointe pour offrir des solutions digitales innovantes.
        </p>
      </div>

      {/* Section principale avec deux colonnes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
        {/* Colonne gauche : Notre équipe */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#4186d8] to-[#964cb2] flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0e1934]">
              Nos Fondateurs
            </h2>
          </div>

          <div className="space-y-6">
            {equipe.map((membre) => (
              <div
                key={membre.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar avec initiales */}
                  <div className="flex-shrink-0">
                    <div
                      className={`
                      w-16 h-16 rounded-xl flex items-center justify-center
                      bg-gradient-to-br ${membre.couleur} shadow-md
                    `}
                    >
                      <span className="text-white text-xl font-bold">
                        {membre.initiales}
                      </span>
                    </div>
                  </div>

                  {/* Informations */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {membre.prenom}{" "}
                      <span className="text-[#4186d8]">{membre.nom}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-gray-600 font-medium">
                        {membre.role}
                      </span>
                      <span className="text-xs text-[#964cb2] font-medium px-2 py-1 bg-[#964cb2]/10 rounded-full">
                        {membre.expertise}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      {membre.description}
                    </p>

                    {/* Compétences */}
                    <div className="flex flex-wrap gap-2">
                      {membre.competences.map((competence, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                        >
                          {competence}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne droite : Notre siège social */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0e1934]">
              Notre Siège Social
            </h2>
          </div>

          {/* Carte ou représentation du siège */}
          <div className="bg-gradient-to-br from-[#0e1934] to-[#1a2a4a] rounded-2xl shadow-xl overflow-hidden mb-6">
            <div className="p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-6 h-6 text-blue-300" />
                <div>
                  <h3 className="text-xl font-bold">Delsova Technologies</h3>
                  <div className="flex items-center gap-2 text-blue-200">
                    <Flag className="w-4 h-4" />
                    <span>Siège Social</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                  <div>
                    <div className="font-medium text-lg">
                      {siegeSocial.ville}, {siegeSocial.pays}
                    </div>
                  </div>
                </div>

                <p className="text-blue-100 text-sm">
                  {siegeSocial.description}
                </p>
              </div>
            </div>

            {/* Représentation visuelle d'Oran */}
            <div className="relative h-48 bg-gradient-to-r from-blue-900 to-cyan-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-12 h-12 text-white/30 mx-auto mb-2" />
                  <div className="text-white font-bold text-lg">
                    ORAN, ALGÉRIE
                  </div>
                  <div className="text-white/70 text-sm">
                    Méditerranée • Innovation • Croissance
                  </div>
                </div>
              </div>

              {/* Points de repère */}
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
              <div className="absolute bottom-8 right-8 w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/30"></div>
              <div className="absolute top-12 right-12 w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/30"></div>
            </div>
          </div>

          {/* Contact et informations */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Contact & Informations
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#4186d8]/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#4186d8]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Téléphone</div>
                  <div className="font-medium text-gray-800">
                    +213 XXX XX XX XX
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#964cb2]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#964cb2]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium text-gray-800">
                    contact@delsova.com
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">Année de création :</span>
                <span className="text-[#4186d8] font-bold">2026</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Award className="w-4 h-4" />
                <span className="font-medium">Spécialisation :</span>
                <span className="text-[#964cb2] font-bold">
                  Solutions Digitales B2B (business to business)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AProposDeNous;