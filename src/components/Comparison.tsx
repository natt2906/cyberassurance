import { X, Check } from 'lucide-react';

export default function Comparison() {
  const withoutInsurance = [
    "0€ remboursé en cas de perte d'activité",
    'Aucune aide technique',
    'Pas de prise en charge du rançongiciel',
    'Gestion de crise à vos frais',
    'Dommages illimités sur votre trésorerie'
  ];

  const withInsurance = [
    "Perte d'exploitation couverte",
    'Experts mobilisés immédiatement',
    'Aide juridique & RGPD incluse',
    'Couverture financière claire',
    "Continuité d'activité assurée"
  ];

  return (
    <section className="relative px-4 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Votre activité dépend du numérique.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Votre protection aussi.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/10 blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border-2 border-red-500/30 rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-red-500/20 rounded-xl">
                  <X className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">Sans assurance cyber</h3>
              </div>

              <div className="space-y-4">
                {withoutInsurance.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-red-500/5 rounded-xl border border-red-500/20">
                    <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    <span className="text-lg text-red-100">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-red-500/10 rounded-xl border border-red-500/30">
                <p className="text-xl font-bold text-red-300 text-center">
                  Risque : Fermeture définitive
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-blue-500/10 to-violet-500/10 backdrop-blur-xl border-2 border-blue-400/50 rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Avec assurance cyber</h3>
              </div>

              <div className="space-y-4">
                {withInsurance.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-blue-400/30">
                    <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-lg text-blue-100">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-xl border border-blue-400/50">
                <p className="text-xl font-bold text-white text-center">
                  Sérénité totale garantie
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center text-center
              bg-gradient-to-r from-blue-500 to-violet-500
              text-white px-6 py-4
              rounded-full
              text-base sm:text-lg font-semibold
              shadow-xl shadow-blue-500/40 hover:shadow-blue-500/60
              transition-all duration-300
              hover:scale-105
              whitespace-normal
            "
          >
            Protéger mon entreprise maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
