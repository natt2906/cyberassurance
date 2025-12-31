import MainNavbar from "../layout/MainNavbar";
import BackToArticles from "../ui/BackToAricles";
import ArticleJsonLd from "../seo/ArticleJsonLd";
import ArticleSeoMeta from "../seo/ArticleSeoMeta";
import RelatedArticles from "../ui/RelatedArticles";

export default function ArticleCasReelPME() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <MainNavbar />
      <main className="px-4 pt-24 pb-16">
        <ArticleJsonLd slug="cas-reel-pme-attaque" />
        <ArticleSeoMeta slug="cas-reel-pme-attaque" />
        <div className="max-w-4xl mx-auto">
        <p className="inline-flex items-center px-3 py-1 mb-6 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-200 border border-blue-500/40">
          Article · Assurance cyber
        </p>


          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Cas concret : gestion d’un sinistre et indemnisation
          </h1>

          <img loading="lazy"
            src="/articles/cas-reel-pme-attaque.png"
            alt="Illustration pour cet article d’assurance cyber"
            className="w-full max-h-96 object-cover object-center rounded-2xl mb-8" style={{ clipPath: "inset(2%)" }}
          />


          <p className="text-sm text-blue-300 mb-8">
            Un scénario inspiré de situations réelles, vu côté dirigeant.
          </p>

          <p className="text-lg text-blue-200 leading-relaxed mb-8">
  Un scénario inspiré de situations réelles, vu côté dirigeant.
</p>

<h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
  Pourquoi ce sujet est crucial pour les petites entreprises
</h2>
<p className="text-blue-200 leading-relaxed mb-4">
  Ce sujet est crucial car un sinistre cyber se traduit d’abord par des pertes d’exploitation, des frais de gestion de crise et une responsabilité vis-à-vis des tiers. L’assurance cyber permet de transférer une partie de ces impacts pour protéger la trésorerie.
</p>
<p className="text-blue-200 leading-relaxed mb-6">
  Au-delà du risque, l’enjeu est d’identifier les garanties, franchises, plafonds, exclusions et obligations de l’assuré. Ces éléments conditionnent l’indemnisation et la continuité d’activité.
</p>

<h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
  Les risques concrets liés à ce sujet
</h2>
<p className="text-blue-200 leading-relaxed mb-4">
  En pratique, ignorer ce sujet peut se traduire par un choc de trésorerie, des litiges et une gestion de crise coûteuse. Ce n’est pas seulement un enjeu opérationnel, c’est un enjeu assurantiel.
</p>
<ul className="list-disc ml-6 space-y-2 text-blue-200 mb-6">
  <li>Pertes d’exploitation non indemnisées ;</li>
  <li>Frais juridiques, RGPD et notifications à votre charge ;</li>
  <li>Responsabilité civile vis-à-vis de clients ou partenaires ;</li>
  <li>Coûts de gestion de crise et de communication ;</li>
  <li>Décalage de trésorerie lié aux franchises et plafonds.</li>
</ul>

<h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
  Ce qu’une petite entreprise peut mettre en place concrètement
</h2>
<p className="text-blue-200 leading-relaxed mb-4">
  La bonne nouvelle, c’est qu’une assurance cyber bien structurée permet d’encadrer les pertes et d’organiser la réponse grâce à des garanties claires.
</p>
<p className="text-blue-200 leading-relaxed mb-4">
  Concrètement, il faut clarifier votre exposition, choisir les garanties prioritaires, définir franchises et plafonds, et vérifier les obligations de l’assuré prévues au contrat.
</p>
<p className="text-blue-200 leading-relaxed mb-8">
  N’attendez pas un sinistre pour agir. Un courtier spécialisé en assurance cyber peut vous aider à ajuster votre couverture en fonction de votre secteur et de votre chiffre d’affaires.
</p>
        </div>
      </main>
      <RelatedArticles currentSlug="cas-reel-pme-attaque" />
      <BackToArticles />  {/* ← AUTOMATIQUE */}
    </div>
  );
}
