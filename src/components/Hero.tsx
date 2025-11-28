import { Shield, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/10 to-transparent"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Votre entreprise pourrait{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                s'arrêter demain.
              </span>{' '}
              Protégez-la maintenant.
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100">
              L'assurance cyber qui couvre vos pertes financières, votre arrêt d'activité et vos données.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#devis"
                className="bg-gradient-to-r from-blue-500/80 to-violet-500/80 text-white px-8 py-4 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-blue-400 hover:to-violet-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Obtenir un tarif en 30 secondes
              </a>

              <a
                href="#devis"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
              >
                Parler à un expert cyber
              </a>
            </div>

            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Users className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">+1200</div>
                  <div className="text-sm text-blue-200">entreprises protégées</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-violet-500/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-violet-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-blue-200">satisfaction client</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-500/20 to-violet-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Shield className="w-32 h-32 text-blue-400" strokeWidth={1.5} />
                  <div className="absolute inset-0 bg-blue-400/30 blur-2xl"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white">Protection active 24/7</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-white">Experts certifiés disponibles</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-3 h-3 bg-violet-400 rounded-full animate-pulse"></div>
                  <span className="text-white">Couverture complète</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
