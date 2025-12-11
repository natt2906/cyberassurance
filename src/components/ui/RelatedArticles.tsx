import { Link } from "react-router-dom";
import { articlesSeo } from "../../data/articlesSeo";

type Props = {
  currentSlug: string;
};

const suggestionsMap: Record<string, string[]> = {
  "assurance-cyber-cest-quoi": ["comment-choisir-assurance-cyber", "combien-coute-une-assurance-cyber", "assurance-cyber-vs-antivirus"],
  "ransomware-que-faire": ["sauvegardes-strategie-pme", "combien-coute-une-cyberattaque", "securiser-messagerie-pro"],
  "checklist-cyber-pme": ["erreurs-courantes-cyber-petites-entreprises", "former-equipes-risque-cyber", "sauvegardes-strategie-pme"],
  "reconnaitre-mail-phishing": ["securiser-messagerie-pro", "former-equipes-risque-cyber", "freelances-independants-cyber-risques"],
};

export default function RelatedArticles({ currentSlug }: Props) {
  const predefined = suggestionsMap[currentSlug];
  const pool = predefined
    ? predefined
    : articlesSeo.filter((a) => a.slug !== currentSlug).slice(0, 3).map((a) => a.slug);

  const related = pool
    .map((slug) => articlesSeo.find((a) => a.slug === slug))
    .filter(Boolean) as typeof articlesSeo;

  if (!related.length) return null;

  return (
    <section className="px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-3 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-300/80">Articles liés</p>
            <h3 className="text-2xl font-bold text-white mt-1">À lire ensuite</h3>
          </div>
          <Link
            to="/articles"
            className="text-sm text-blue-200 hover:text-white underline underline-offset-4"
          >
            Tous les articles →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {related.map((art) => (
            <Link
              key={art.slug}
              to={`/articles/${art.slug}`}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="h-32 w-full overflow-hidden">
                <img
                  loading="lazy"
                  src={`/articles/${art.slug}.png`}
                  alt={art.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200">
                  {art.title}
                </h4>
                <span className="inline-flex items-center text-sm font-semibold text-blue-300 group-hover:text-blue-200">
                  Lire l’article
                  <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
