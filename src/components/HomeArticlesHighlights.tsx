import { Link } from "react-router-dom";

const imageBySlug: Record<string, string> = {
  "extorsion-cyber-activite-bloquee": "ransomware-que-faire",
  "fraude-email-usurpation": "reconnaitre-mail-phishing",
  "continuité-activite-restauration": "sauvegardes-strategie-pme",
  "assurance-cyber-vs-prevention": "assurance-cyber-vs-antivirus",
};

const picks = [
  {
    slug: "assurance-cyber-cest-quoi",
    title: "Assurance cyber : c’est quoi ?",
    excerpt: "Comprendre l’assurance cyber pour TPE/PME/ETI et l’impact sur votre trésorerie.",
    contextual: {
      text: "Découvrez notre analyse sur le coût d’un sinistre pour une PME.",
      link: "/articles/combien-coute-une-cyberattaque",
    },
  },
  {
    slug: "extorsion-cyber-activite-bloquee",
    title: "Extorsion cyber : que faire si l’activité est bloquée ?",
    excerpt: "Déclaration, assistance 24/7 et déclenchement des garanties financières.",
    contextual: {
      text: "Voir aussi : obligations de l’assuré face aux fraudes par email.",
      link: "/articles/fraude-email-usurpation",
    },
  },
  {
    slug: "checklist-cyber-pme",
    title: "Checklist assurance cyber : informations clés pour souscrire",
    excerpt: "Préparez les éléments demandés pour un devis clair et adapté.",
    contextual: {
      text: "Consultez également notre guide complet sur l’assurance cyber pour TPE/PME.",
      link: "/articles/assurance-cyber-cest-quoi",
    },
  },
  {
    slug: "combien-coute-une-cyberattaque",
    title: "Combien coûte un sinistre cyber pour une PME ?",
    excerpt: "Une analyse claire des coûts directs et indirects, et comment l’assurance limite les pertes.",
    contextual: {
      text: "Découvrez aussi notre guide de gestion d’un sinistre d’extorsion cyber.",
      link: "/articles/extorsion-cyber-activite-bloquee",
    },
  },
];

export default function HomeArticlesHighlights() {
  return (
    <section className="px-4 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-300/80">Ressources</p>
            <h2 className="text-3xl font-bold text-white mt-2">
              Ressources assurance cyber : l’essentiel pour les pros
            </h2>
            <p className="text-blue-200 mt-2">
              Découvrez trois articles pour comprendre garanties, sinistres et impacts financiers.
            </p>
            <div className="flex flex-wrap gap-3 mt-3 text-sm text-blue-200">
              <Link to="/articles/combien-coute-une-cyberattaque" className="underline underline-offset-4 hover:text-white">
                Coût d’un sinistre
              </Link>
              <Link to="/articles/extorsion-cyber-activite-bloquee" className="underline underline-offset-4 hover:text-white">
                Gestion d’extorsion
              </Link>
              <Link to="/articles/checklist-cyber-pme" className="underline underline-offset-4 hover:text-white">
                Checklist assurance
              </Link>
            </div>
          </div>
          <Link
            to="/articles"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-100 hover:border-blue-400/60 hover:text-white transition-colors whitespace-nowrap"
          >
            Tous les articles →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {picks.map((art) => (
            <Link
              key={art.slug}
              to={`/articles/${art.slug}`}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="h-36 w-full overflow-hidden">
                <img
                  loading="lazy"
                  width="400"
                  height="225"
                  src={`/articles/${imageBySlug[art.slug] ?? art.slug}.png`}
                  alt={art.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-200">{art.title}</h3>
                <p className="text-sm text-blue-200/90 leading-relaxed">{art.excerpt}</p>
            <span className="inline-flex items-center text-sm font-semibold text-blue-300 group-hover:text-blue-200">
              Lire l’article
              <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
            </span>
                {art.contextual && (
                  <Link
                    to={art.contextual.link}
                    className="text-sm text-blue-200/90 hover:text-white underline underline-offset-4"
                  >
                    {art.contextual.text}
                  </Link>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-blue-100 hover:border-blue-400/60 hover:text-white transition-colors whitespace-nowrap"
          >
            Voir tous nos articles et ressources assurance →
          </Link>
        </div>
      </div>
    </section>
  );
}
