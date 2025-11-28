import { Zap, Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative px-4 py-20 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-violet-500/30 blur-3xl"></div>

          <div className="relative bg-gradient-to-br from-blue-500/20 to-violet-500/20 backdrop-blur-xl border-2 border-blue-400/50 rounded-3xl p-12 lg:p-16">
            <div className="text-center space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Un piratage peut tout arrêter.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Votre protection, non.
                </span>
              </h2>

              <p className="text-2xl text-blue-100">
                Obtenez votre tarif en moins d'une minute.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#devis"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-4 h-4" />
                  Obtenir un devis rapide
                </a>
                <a
                  href="#devis"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white/10 text-sm font-semibold text-blue-100 border border-blue-200/30 hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Réserver un appel gratuit
                </a>
              </div>


              <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-blue-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Réponse immédiate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Protection en 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 text-center text-blue-300/60 text-sm">
          <p>© 2024 Assurance Cyber. Protection professionnelle pour TPE/PME.</p>
        </footer>
      </div>
    </section>
  );
}
