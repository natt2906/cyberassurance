import MainNavbar from "../layout/MainNavbar";
import BackToArticles from "../ui/BackToAricles";

export default function ArticleCloudResponsabilite() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <MainNavbar />
      <main className="px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <p className="inline-flex items-center px-3 py-1 mb-6 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-200 border border-blue-500/40">
            Article · Assurance cyber
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Cloud, logiciels en ligne et responsabilité : qui est responsable en cas d’attaque ?
          </h1>

          <p className="text-sm text-blue-300 mb-8">
            Même si vos données sont chez un prestataire, vous gardez une part de responsabilité.
          </p>

          <p className="text-lg text-blue-200 leading-relaxed mb-8">
  Même si vos données sont chez un prestataire, vous gardez une part de responsabilité.
</p>

<h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
  Pourquoi ce sujet est crucial pour les petites entreprises
</h2>
<p className="text-blue-200 leading-relaxed mb-4">
  Le thème <strong>Cloud, logiciels en ligne et responsabilité : qui est responsable en cas d’attaque ?</strong> peut sembler abstrait tant que tout va bien.
  Mais pour une TPE, une PME, un artisan ou un indépendant, un incident cyber peut
  bloquer l’activité, faire perdre des données importantes ou casser la relation
  de confiance avec les clients. Les grandes entreprises ont des équipes
  informatiques, des plans de continuité et des procédures. Les petites structures,
  elles, comptent souvent sur la chance ou quelques réflexes “maison”.
</p>
<p className="text-blue-200 leading-relaxed mb-6">
  La réalité, c’est que les attaquants automatisent désormais leurs actions. Ils
  scannent le web à la recherche d’entreprises mal protégées, d’identifiants
  réutilisés, de boîtes mail peu sécurisées ou de logiciels non mis à jour.
  Votre structure n’a pas besoin d’être connue pour être une cible. Elle doit
  simplement être vulnérable, et c’est malheureusement le cas d’une majorité
  de petites entreprises.
</p>

<h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
  Les risques concrets liés à ce sujet
</h2>
<p className="text-blue-200 leading-relaxed mb-4">
  En pratique, ignorer le sujet “Cloud, logiciels en ligne et responsabilité : qui est responsable en cas d’attaque ?” peut se traduire par plusieurs types
  de conséquences : perte de fichiers, chantage financier, blocage de plusieurs
  jours, relations clients dégradées, atteinte à l’image de l’entreprise, voire
  dépôt de plainte ou mise en cause juridique. Ce n’est pas seulement un sujet
  informatique, c’est un sujet de continuité d’activité et de gestion de risque.
</p>
<ul className="list-disc ml-6 space-y-2 text-blue-200 mb-6">
  <li>Interruption partielle ou totale de votre activité ;</li>
  <li>Perte de données clients, de devis, de factures ou de dossiers ;</li>
  <li>Retards de chantiers, de livraisons ou de projets ;</li>
  <li>Clients inquiets ou mécontents, qui perdent confiance ;</li>
  <li>Coûts imprévus pour faire intervenir des prestataires en urgence.</li>
</ul>

<h2 className="text-2xl lg:text-3xl font-bold mt-10 mb-4">
  Ce qu’une petite entreprise peut mettre en place concrètement
</h2>
<p className="text-blue-200 leading-relaxed mb-4">
  La bonne nouvelle, c’est qu’il n’est pas nécessaire de devenir expert en sécurité
  pour réduire fortement le risque. Quelques actions simples, alignées avec le sujet
  “Cloud, logiciels en ligne et responsabilité : qui est responsable en cas d’attaque ?”, peuvent déjà faire une vraie différence : mieux protéger les accès,
  sensibiliser les équipes, mettre en place des sauvegardes sérieuses et prévoir
  un minimum de plan de secours si quelque chose se passe mal.
</p>
<p className="text-blue-200 leading-relaxed mb-4">
  Dans l’idéal, ces mesures techniques sont complétées par une <strong>assurance
  cyber adaptée</strong> à votre taille et à votre secteur. La sécurité réduit
  la probabilité d’une attaque réussie, l’assurance limite les conséquences
  financières et opérationnelles si l’attaque se produit malgré tout. Les deux
  ensemble offrent un cadre de protection beaucoup plus solide que l’un ou l’autre
  pris isolément.
</p>
<p className="text-blue-200 leading-relaxed mb-8">
  L’important est de ne pas attendre l’incident pour agir. Plus vous anticipez,
  plus il sera simple et peu coûteux de renforcer votre protection. Et si vous
  souhaitez être accompagné pour faire le point sur votre situation, un courtier
  spécialisé en assurance cyber peut vous aider à y voir clair en quelques
  questions seulement.
</p>
        </div>
      </main>
      <BackToArticles />  {/* ← AUTOMATIQUE */}
    </div>
  );
}
