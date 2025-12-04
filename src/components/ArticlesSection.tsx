import { Link } from "react-router-dom";

export default function ArticlesSection() {
  return (
    <section id="articles" className="relative px-4 py-16 lg:py-24 bg-gradient-to-b from-blue-950/60 via-blue-900/40 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-300/80">
            Ressources
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">
            Articles & conseils sur l’assurance cyber
          </h2>
          <p className="text-blue-200 mt-3 max-w-2xl">
            Des contenus simples pour comprendre les risques, les coûts et les solutions
            de protection pour les TPE, PME, artisans et indépendants.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Article 1 */}
          <Link
            to="/articles/assurance-cyber-cest-quoi"
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-400/70 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
          >
            <p className="text-xs font-semibold text-blue-300 mb-2">
              Comprendre l’essentiel
            </p>
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3 group-hover:text-blue-200">
              Assurance cyber : c’est quoi ? Explication simple pour PME & artisans
            </h3>
            <p className="text-sm text-blue-200/90 mb-4">
              Une cyberattaque peut bloquer votre activité du jour au lendemain.
              Dans cet article, on explique clairement ce que couvre une assurance cyber,
              pour qui c’est utile et combien ça coûte.
            </p>
            <span className="inline-flex items-center text-sm font-semibold text-blue-300 group-hover:text-blue-200">
              Lire l’article
              <span className="ml-1 group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </span>
          </Link>

          {/* Bloc “bientôt” pour les futurs articles */}
          <div className="bg-white/5 border border-dashed border-white/15 rounded-2xl p-6 flex flex-col justify-center">
            <p className="text-sm text-blue-200/80 mb-2">Bientôt disponible</p>
            <h3 className="text-xl font-semibold text-white mb-3">
              Combien coûte réellement une cyberattaque pour une PME ?
            </h3>
            <p className="text-sm text-blue-200/80">
              Un prochain article analysera le coût global d’un incident cyber :
              pertes d’exploitation, intervention d’urgence, image de marque…
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
