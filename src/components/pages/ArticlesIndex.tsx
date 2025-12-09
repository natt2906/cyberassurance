import { Link } from "react-router-dom";
import MainNavbar from "../layout/MainNavbar";
import { articlesMeta } from "../../data/articlesMeta";
import SeoHead from "../seo/SeoHead";
import { baseSiteUrl } from "../../data/articlesSeo";

export default function ArticlesIndex() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <MainNavbar />

      <main className="px-4 pt-24 pb-16">
        <SeoHead
          title="Articles & conseils sur l’assurance cyber | Assurance Cyber Sécurité"
          description="Guides et conseils pour TPE/PME : assurance cyber, ransomware, phishing, sauvegardes, RGPD, messagerie et choix de garantie."
          canonical={`${baseSiteUrl}/articles`}
          ogImage={`${baseSiteUrl}/og-image.png`}
        />
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
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
              >
                <div className="h-40 w-full overflow-hidden">
                  <img loading="lazy"
                    src={`/articles/${art.slug}.png`}
                    alt={art.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" style={{ clipPath: "inset(2%)" }}
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-xl lg:text-2xl font-semibold text-white mb-3 group-hover:text-blue-200">
                    {art.title}
                  </h2>

                  <span className="inline-flex items-center text-sm font-semibold text-blue-300 group-hover:text-blue-200">
                    Lire l’article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
