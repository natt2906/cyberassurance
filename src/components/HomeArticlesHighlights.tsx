import { Link } from "react-router-dom";

const picks = [
  {
    slug: "assurance-cyber-cest-quoi",
    title: "Assurance cyber : c’est quoi ?",
    excerpt: "Comprendre l’assurance cyber pour TPE/PME et pourquoi elle complète vos outils de sécurité.",
    contextual: {
      text: "Découvrez également notre analyse sur le coût d’une cyberattaque pour une PME.",
      link: "/articles/combien-coute-une-cyberattaque",
    },
  },
  {
    slug: "ransomware-que-faire",
    title: "Ransomware : que faire si votre entreprise est bloquée ?",
    excerpt: "Les réflexes à adopter en cas de rançongiciel et comment l’assurance peut limiter l’impact financier.",
    contextual: {
      text: "Voir aussi : comment reconnaître un mail de phishing pour éviter les attaques.",
      link: "/articles/reconnaitre-mail-phishing",
    },
  },
  {
    slug: "checklist-cyber-pme",
    title: "Checklist cybersécurité : 15 points à vérifier dans votre PME",
    excerpt: "Un plan d’action rapide pour renforcer vos accès, sauvegardes et sensibiliser vos équipes.",
    contextual: {
      text: "Consultez également notre guide complet sur l’assurance cyber pour TPE/PME.",
      link: "/articles/assurance-cyber-cest-quoi",
    },
  },
  {
    slug: "combien-coute-une-cyberattaque",
    title: "Combien coûte une cyberattaque pour une PME ?",
    excerpt: "Une analyse claire des coûts directs et indirects d’une attaque, et comment l’assurance cyber limite les pertes.",
    contextual: {
      text: "Découvrez aussi nos conseils pour réagir face à un ransomware.",
      link: "/articles/ransomware-que-faire",
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
              Ressources cyber : nos articles essentiels pour protéger votre PME
            </h2>
            <p className="text-blue-200 mt-2">
              Découvrez trois articles indispensables pour comprendre l’assurance cyber, anticiper les cyberattaques et sécuriser efficacement votre PME.
            </p>
            <div className="flex flex-wrap gap-3 mt-3 text-sm text-blue-200">
              <Link to="/articles/combien-coute-une-cyberattaque" className="underline underline-offset-4 hover:text-white">
                Coût d’une cyberattaque
              </Link>
              <Link to="/articles/ransomware-que-faire" className="underline underline-offset-4 hover:text-white">
                Réagir à un ransomware
              </Link>
              <Link to="/articles/checklist-cyber-pme" className="underline underline-offset-4 hover:text-white">
                Checklist sécurité PME
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
                  src={`/articles/${art.slug}.png`}
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
            Voir tous nos articles et ressources cyber →
          </Link>
        </div>
      </div>
    </section>
  );
}
