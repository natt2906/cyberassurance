import { Link } from "react-router-dom";
import BackToArticles from "../ui/BackToAricles";

export default function ArticleAssuranceCyber() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Header avec fil d'Ariane */}
      <header className="w-full border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-2">
          {/* Fil d'Ariane */}
          <nav
            className="text-xs sm:text-sm text-blue-200/80"
            aria-label="Fil d'ariane"
          >
            <ol className="flex flex-wrap items-center gap-1 sm:gap-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-white hover:underline underline-offset-2"
                >
                  Accueil
                </Link>
              </li>
              <li className="opacity-60">/</li>
              <li>
                <Link
                  to="/#articles"
                  className="hover:text-white hover:underline underline-offset-2"
                >
                  Articles
                </Link>
              </li>
              <li className="opacity-60">/</li>
              <li
                aria-current="page"
                className="text-blue-50 font-semibold line-clamp-1"
              >
                Assurance cyber : c’est quoi ?
              </li>
            </ol>
          </nav>

          <div className="flex items-center justify-between">
            <span className="text-[11px] sm:text-xs text-blue-300/80 uppercase tracking-[0.2em]">
              Article · Assurance cyber
            </span>
            <Link
              to="/"
              className="text-[11px] sm:text-xs text-blue-200 hover:text-white hover:underline underline-offset-2"
            >
              ← Retour à la page principale
            </Link>
          </div>
        </div>
      </header>

      <main className="px-4 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <p className="inline-flex items-center px-3 py-1 mb-6 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-200 border border-blue-500/40">
            🔐 Comprendre l’assurance cyber en 5 minutes
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Assurance cyber : c’est quoi ? Explication simple pour PME & artisans
          </h1>

          <p className="text-sm text-blue-300 mb-8">
            Article pédagogique – destiné aux TPE, PME, artisans, indépendants et professions libérales.
          </p>

          <p className="text-lg text-blue-200 leading-relaxed mb-8">
            Une cyberattaque peut arrêter votre entreprise du jour au lendemain. Mais comment fonctionne une{" "}
            <strong>assurance cyber</strong> ? Et surtout : est-ce vraiment indispensable pour une PME,
            un artisan ou un indépendant ? Voici l’explication la plus claire possible, sans jargon technique.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
            Qu’est-ce qu’une assurance cyber ?
          </h2>
          <p className="text-blue-200 leading-relaxed mb-4">
            L’<strong>assurance cyber</strong> est un contrat qui protège votre entreprise contre les conséquences
            d’une cyberattaque : ransomware, vol de données, piratage de messagerie, sabotage, etc. Elle ne bloque
            pas l’attaque (ça c’est le rôle des outils de sécurité), mais elle prend en charge :
          </p>

          <ul className="list-disc ml-6 space-y-2 text-blue-200 mb-6">
            <li>les frais techniques pour remettre vos systèmes en état ;</li>
            <li>la restauration ou la récupération de vos données ;</li>
            <li>les pertes de chiffre d’affaires pendant l’arrêt d’activité ;</li>
            <li>les honoraires d’experts en cybersécurité ;</li>
            <li>les frais juridiques en cas de litige ou de fuite de données ;</li>
            <li>la gestion de crise et la communication auprès de vos clients.</li>
          </ul>

          <p className="text-blue-200 leading-relaxed mb-8">
            Dit simplement : <strong>l’assurance cyber paie les dégâts</strong> pendant que les experts remettent
            votre activité sur pied.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
            Pourquoi les petites entreprises sont les premières cibles ?
          </h2>
          <p className="text-blue-200 leading-relaxed mb-4">
            Contrairement à une idée reçue, les hackers ne s’attaquent pas qu’aux grandes entreprises. Les données
            montrent que <strong>plus de 40 % des cyberattaques visent des TPE / PME</strong>. Pourquoi ?
          </p>

          <ul className="list-disc ml-6 space-y-2 text-blue-200 mb-6">
            <li>Peu ou pas de service informatique interne ;</li>
            <li>mots de passe simples ou réutilisés ;</li>
            <li>aucune vraie politique de sauvegarde ;</li>
            <li>employés peu sensibilisés au phishing ;</li>
            <li>fausse impression de “je suis trop petit pour intéresser les hackers”.</li>
          </ul>

          <p className="text-blue-200 leading-relaxed mb-8">
            Pour un pirate, une petite entreprise est souvent <strong>plus simple à bloquer</strong> et{" "}
            <strong>plus rapide à rançonner</strong> qu’un grand groupe très protégé.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
            Ce que couvre réellement une assurance cyber
          </h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="font-semibold text-lg mb-2">1. Les frais techniques</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Intervention d’experts pour analyser l’attaque, nettoyer vos systèmes, réinstaller les logiciels,
                restaurer les sauvegardes et sécuriser à nouveau votre environnement.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="font-semibold text-lg mb-2">2. Les pertes financières</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Indemnisation de la perte de chiffre d’affaires liée à l’arrêt de votre activité, ainsi que des
                frais supplémentaires engagés pour redémarrer (matériel, sous-traitance, renfort, etc.).
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="font-semibold text-lg mb-2">3. La responsabilité & le juridique</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Prise en charge des frais d’avocat, des procédures et, selon les contrats, des conséquences
                d’une fuite de données client ou d’une mise en cause de votre responsabilité.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="font-semibold text-lg mb-2">4. L’accompagnement humain</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Accès à une cellule de crise, à des experts en cybersécurité et à des conseillers pour gérer la
                communication avec vos clients et partenaires après l’attaque.
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
            C’est souvent <strong>50× moins cher</strong> que le coût réel d’une cyberattaque : perte
            d’exploitation, factures frauduleuses, interventions techniques, gestion de crise, image de marque…
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
            Antivirus ou assurance cyber : les deux sont-ils nécessaires ?
          </h2>
          <p className="text-blue-200 leading-relaxed mb-4">
            On confond souvent les deux, alors qu’ils n’ont pas du tout le même rôle :
          </p>

          <ul className="list-disc ml-6 space-y-2 text-blue-200 mb-6">
            <li>
              <strong>Antivirus / cybersécurité</strong> : empêche ou limite l’attaque quand c’est possible ;
            </li>
            <li>
              <strong>Assurance cyber</strong> : intervient quand l’attaque a réussi et protège financièrement
              votre entreprise.
            </li>
          </ul>

          <p className="text-blue-200 leading-relaxed mb-8">
            Se contenter d’un antivirus, c’est un peu comme mettre une alarme chez soi mais ne jamais assurer la maison.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">Exemple concret</h2>
          <p className="text-blue-200 leading-relaxed mb-4">
            Un artisan se fait pirater sa messagerie pro. Les hackers en profitent pour envoyer de fausses factures
            à ses clients, en remplaçant simplement le RIB par le leur.
          </p>

          <ul className="list-disc ml-6 space-y-2 text-blue-200 mb-6">
            <li>7 900 € de factures payées sur le mauvais compte ;</li>
            <li>2 semaines d’activité bloquée le temps de comprendre ;</li>
            <li>3 clients perdus qui se sentent trompés.</li>
          </ul>

          <p className="text-blue-200 leading-relaxed mb-8">
            Avec une assurance cyber, les pertes financières et les frais d’accompagnement auraient pu être pris
            en charge, et une équipe d’experts aurait été mobilisée dès les premières heures.
          </p>

          {/* Conclusion */}
          <h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
            Faut-il vraiment une assurance cyber ?
          </h2>
          <p className="text-blue-200 leading-relaxed mb-8">
            Si votre activité dépend d’un ordinateur, d’une messagerie, d’un logiciel de facturation ou de données
            clients, la réponse est simple : <strong>oui</strong>. L’assurance cyber est aujourd’hui aussi
            stratégique qu’une RC Pro pour une entreprise moderne.
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
      <BackToArticles />  {/* ← AUTOMATIQUE */}
    </div>
  );
}
