import { Link } from "react-router-dom";
import BackToArticles from "../ui/BackToAricles";
import ArticleSeoMeta from "../seo/ArticleSeoMeta";
import RelatedArticles from "../ui/RelatedArticles";

export default function ArticleAssuranceCyber() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <ArticleSeoMeta slug="assurance-cyber-cest-quoi" />
      {/* Header avec fil d'Ariane */}
      <header className="w-full bg-gradient-to-r from-slate-900/80 via-blue-900/50 to-slate-900/80 border-b border-white/10 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] bg-blue-500/10 text-blue-200 border border-blue-500/40 rounded-full">
              <span className="text-[13px]">🛡️</span>
              Article · Assurance cyber
            </span>
            <Link
              to="/"
              className="text-[11px] sm:text-xs text-blue-200 hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              ← Retour à la page principale
            </Link>
          </div>

          {/* Fil d'Ariane plus riche */}
          <nav aria-label="Fil d'ariane">
            <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-100 hover:border-blue-400/60 hover:text-white transition-colors"
                >
                  <span className="text-[12px]">🏠</span>
                  Accueil
                </Link>
              </li>
              <li className="text-blue-300/60">›</li>
              <li>
                <Link
                  to="/#articles"
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-100 hover:border-blue-400/60 hover:text-white transition-colors"
                >
                  <span className="text-[12px]">📚</span>
                  Articles
                </Link>
              </li>
              <li className="text-blue-300/60">›</li>
              <li
                aria-current="page"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/60 text-blue-50 shadow shadow-blue-900/40"
              >
                <span className="text-[12px]">🧭</span>
                Assurance cyber : c’est quoi ?
              </li>
            </ol>
          </nav>
        </div>
      </header>

      <main className="px-4 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <p className="inline-flex items-center px-3 py-1 mb-6 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-200 border border-blue-500/40">
            🔐 Comprendre l’assurance cyber en 5 minutes
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Assurance cyber : c’est quoi ? Explication simple pour professionnels
          </h1>

          <p className="text-sm text-blue-300 mb-8">
            Article pédagogique – destiné aux TPE, PME, artisans, indépendants et professions libérales.
          </p>

          <p className="text-lg text-blue-200 leading-relaxed mb-8">
            Un sinistre cyber peut arrêter votre activité du jour au lendemain. Mais comment fonctionne une{" "}
            <strong>assurance cyber</strong> ? Et surtout : est-ce indispensable pour une PME,
            un artisan, un indépendant ou une profession libérale ? Voici l’essentiel, sans jargon.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
            Qu’est-ce qu’une assurance cyber ?
          </h2>
          <p className="text-blue-200 leading-relaxed mb-4">
            L’<strong>assurance cyber</strong> est un contrat qui protège votre entreprise contre les conséquences
            d’un sinistre cyber. Elle ne réduit pas le risque en lui‑même : elle couvre l’impact financier et
            organise la réponse. Elle prend en charge notamment :
          </p>

          <ul className="list-disc ml-6 space-y-2 text-blue-200 mb-6">
            <li>les pertes d’exploitation pendant l’arrêt d’activité ;</li>
            <li>les frais de gestion de crise et d’assistance 24/7 ;</li>
            <li>la responsabilité civile vis‑à‑vis des tiers ;</li>
            <li>les frais juridiques et RGPD ;</li>
            <li>la communication de crise ;</li>
            <li>la rançon encadrée selon conditions contractuelles.</li>
          </ul>

          <p className="text-blue-200 leading-relaxed mb-8">
            Dit simplement : <strong>l’assurance cyber paie les dégâts</strong> pendant que les experts remettent
            votre activité sur pied.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
            Pourquoi les petites entreprises doivent se couvrir ?
          </h2>
          <p className="text-blue-200 leading-relaxed mb-4">
            Les TPE/PME/ETI ont souvent la même dépendance au numérique que les grands groupes, avec moins de
            marge financière pour absorber une crise. Résultat : un sinistre peut peser lourd sur la trésorerie.
          </p>

          <ul className="list-disc ml-6 space-y-2 text-blue-200 mb-6">
            <li>Arrêt d’activité difficilement absorbable ;</li>
            <li>Dépendance forte aux flux de facturation ;</li>
            <li>Exposition à des responsabilités contractuelles ;</li>
            <li>Délais de paiement qui amplifient l’effet trésorerie ;</li>
            <li>Moins de marge pour financer une crise sans assurance.</li>
          </ul>

          <p className="text-blue-200 leading-relaxed mb-8">
            L’assurance cyber vise à transformer un choc potentiellement fatal en coût maîtrisé et indemnisable.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
            Ce que couvre réellement une assurance cyber
          </h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white/5 rounded-2xl p-5">
          <h3 className="font-semibold text-lg mb-2">1. Gestion de crise</h3>
          <p className="text-blue-200 text-sm leading-relaxed">
                Coordination des intervenants, assistance 24/7, communication et pilotage du dossier.
          </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-5">
          <h3 className="font-semibold text-lg mb-2">2. Les pertes financières</h3>
          <p className="text-blue-200 text-sm leading-relaxed">
                Indemnisation de la perte de chiffre d’affaires liée à l’arrêt d’activité et frais additionnels.
          </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-5">
          <h3 className="font-semibold text-lg mb-2">3. La responsabilité & le juridique</h3>
          <p className="text-blue-200 text-sm leading-relaxed">
                Prise en charge des frais d’avocat, procédures et responsabilités vis‑à‑vis des tiers.
          </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-5">
          <h3 className="font-semibold text-lg mb-2">4. L’accompagnement humain</h3>
          <p className="text-blue-200 text-sm leading-relaxed">
                Accès à une cellule de crise et conseils pour gérer la communication avec clients et partenaires.
          </p>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
            Combien coûte une assurance cyber ?
          </h2>
          <p className="text-blue-200 leading-relaxed mb-4">
            Pour une TPE, une PME ou un artisan, une assurance cyber coûte généralement :
          </p>

          <p className="text-xl font-bold text-blue-300 mb-4">
            👉 entre <span className="underline">20 € et 80 € / mois</span>
          </p>

          <p className="text-blue-200 leading-relaxed mb-8">
            C’est souvent <strong>50× moins cher</strong> que le coût réel d’un sinistre : pertes
            d’exploitation, frais juridiques, gestion de crise, image de marque…
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
            Conditions d’éligibilité et obligations de l’assuré
          </h2>
          <p className="text-blue-200 leading-relaxed mb-4">
            Les contrats prévoient des obligations et prérequis. Ils doivent être connus avant souscription :
          </p>

          <ul className="list-disc ml-6 space-y-2 text-blue-200 mb-6">
            <li>
              <strong>Obligations de l’assuré</strong> : respect des déclarations et des procédures contractuelles ;
            </li>
            <li>
              <strong>Pré-requis d’éligibilité</strong> : exigences minimales fixées par l’assureur.
            </li>
          </ul>

          <p className="text-blue-200 leading-relaxed mb-8">
            Mieux vaut clarifier ces points pour éviter toute mauvaise surprise en cas de sinistre.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">Exemple concret</h2>
          <p className="text-blue-200 leading-relaxed mb-4">
            Un artisan subit une fraude au paiement : des factures sont réglées sur un mauvais compte.
          </p>

          <ul className="list-disc ml-6 space-y-2 text-blue-200 mb-6">
            <li>7 900 € de factures payées sur le mauvais compte ;</li>
            <li>2 semaines d’activité ralentie le temps de traiter les litiges ;</li>
            <li>3 clients perdus qui se sentent trompés.</li>
          </ul>

          <p className="text-blue-200 leading-relaxed mb-8">
            Avec une assurance cyber, les pertes financières et les frais d’accompagnement peuvent être pris
            en charge selon les garanties prévues.
          </p>

          {/* Conclusion */}
          <h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
            Faut-il vraiment une assurance cyber ?
          </h2>
          <p className="text-blue-200 leading-relaxed mb-8">
            Si votre activité dépend de la continuité de vos flux et de vos données professionnelles, la réponse
            est simple : <strong>oui</strong>. L’assurance cyber est aujourd’hui aussi stratégique qu’une RC Pro
            pour une entreprise moderne.
          </p>

          {/* CTA */}
          <div className="text-center mt-12 mb-16">
            <a
              href="/#devis"
              className="inline-block bg-gradient-to-r from-blue-500 to-violet-600 text-white px-8 py-4 rounded-full text-lg lg:text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-blue-500/40 hover:shadow-blue-500/60 shadow-lg"
            >
              🔒 Obtenir un devis d’assurance cyber pour mon entreprise
            </a>
            <p className="mt-3 text-sm text-blue-300">
              Devis gratuit, sans engagement – réponses rapides avec un courtier spécialisé.
            </p>
          </div>
        </div>
      </main>
      <RelatedArticles currentSlug="assurance-cyber-cest-quoi" />
      <BackToArticles />  {/* ← AUTOMATIQUE */}
    </div>
  );
}
