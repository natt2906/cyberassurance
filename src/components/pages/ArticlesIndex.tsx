import { Link } from "react-router-dom";
import MainNavbar from "../layout/MainNavbar";
import { articlesMeta } from "../../data/articlesMeta";



export default function ArticlesIndex() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <MainNavbar />

      <main className="px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-3">
            Ressources
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Articles & conseils sur l’assurance cyber
          </h1>
          <p className="text-blue-200 mb-10 max-w-2xl">
            Une sélection d’articles pédagogiques pour comprendre les risques
            cyber, les coûts d’une attaque et les solutions pour protéger votre
            entreprise.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {articlesMeta.map((art) => (
              <Link
                key={art.slug}
                to={`/articles/${art.slug}`}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-400/70 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
              >
                <h2 className="text-xl lg:text-2xl font-semibold text-white mb-3 group-hover:text-blue-200">
                  {art.title}
                </h2>

                <span className="inline-flex items-center text-sm font-semibold text-blue-300 group-hover:text-blue-200">
                  Lire l’article →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
