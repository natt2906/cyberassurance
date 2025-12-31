export type ArticleSeo = {
  slug: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
};

const baseUrl = "https://assurance-cyber-securite.fr";

export const articlesSeo: ArticleSeo[] = [
  {
    slug: "assurance-cyber-cest-quoi",
    title: "Assurance cyber : c’est quoi ?",
    description: "Définition simple de l’assurance cyber pour PME et indépendants : ce que ça couvre et pourquoi en avoir une.",
    image: `${baseUrl}/articles/assurance-cyber-cest-quoi.png`,
    datePublished: "2024-05-01",
  },
  {
    slug: "pourquoi-pme-cibles-cyberattaques",
    title: "Pourquoi les PME sont les plus exposées aux pertes d’exploitation",
    description: "Comprendre les impacts financiers d’un sinistre et les garanties clés pour protéger la trésorerie.",
    image: `${baseUrl}/articles/pourquoi-pme-cibles-cyberattaques.png`,
    datePublished: "2024-05-02",
  },
  {
    slug: "combien-coute-une-cyberattaque",
    title: "Combien coûte un sinistre cyber pour une petite entreprise ?",
    description: "Estimation des coûts visibles et cachés : pertes d’exploitation, gestion de crise, responsabilité.",
    image: `${baseUrl}/articles/combien-coute-une-cyberattaque.png`,
    datePublished: "2024-05-03",
  },
  {
    slug: "combien-coute-une-assurance-cyber",
    title: "Combien coûte une assurance cyber pour une PME ou un indépendant ?",
    description: "Fourchettes de prix, facteurs qui influencent le tarif et pistes pour choisir une assurance cyber adaptée.",
    image: `${baseUrl}/articles/combien-coute-une-assurance-cyber.png`,
    datePublished: "2024-05-04",
  },
  {
    slug: "erreurs-courantes-cyber-petites-entreprises",
    title: "7 erreurs d’assurabilité qui augmentent le coût d’un sinistre",
    description: "Les erreurs qui fragilisent l’indemnisation : obligations de l’assuré, exclusions et défauts de déclaration.",
    image: `${baseUrl}/articles/erreurs-courantes-cyber-petites-entreprises.png`,
    datePublished: "2024-05-05",
  },
  {
    slug: "extorsion-cyber-activite-bloquee",
    title: "Extorsion cyber : que faire si l’activité est bloquée ?",
    description: "Déclaration, assistance 24/7, gestion de crise et déclenchement des garanties.",
    image: `${baseUrl}/articles/ransomware-que-faire.png`,
    datePublished: "2024-05-06",
  },
  {
    slug: "securiser-messagerie-pro",
    title: "Messagerie pro : prérequis d’éligibilité à l’assurance cyber",
    description: "Les exigences minimales de souscription et les obligations de l’assuré.",
    image: `${baseUrl}/articles/securiser-messagerie-pro.png`,
    datePublished: "2024-05-07",
  },
  {
    slug: "fraude-email-usurpation",
    title: "Fraudes par email : obligations de l’assuré et bonnes pratiques",
    description: "Prévention et responsabilités contractuelles en cas de fraude.",
    image: `${baseUrl}/articles/reconnaitre-mail-phishing.png`,
    datePublished: "2024-05-08",
  },
  {
    slug: "continuité-activite-restauration",
    title: "Continuité d’activité : exigences minimales d’assurabilité",
    description: "Ce que les assureurs attendent pour garantir la reprise d’activité.",
    image: `${baseUrl}/articles/sauvegardes-strategie-pme.png`,
    datePublished: "2024-05-09",
  },
  {
    slug: "assurance-cyber-vs-prevention",
    title: "Assurance cyber et prérequis techniques : ce que l’assureur attend",
    description: "Conditions d’éligibilité et obligations minimales pour souscrire.",
    image: `${baseUrl}/articles/assurance-cyber-vs-antivirus.png`,
    datePublished: "2024-05-10",
  },
  {
    slug: "former-equipes-risque-cyber",
    title: "Obligations de l’assuré : sensibilisation des équipes",
    description: "Ce que les contrats attendent en matière d’organisation interne.",
    image: `${baseUrl}/articles/former-equipes-risque-cyber.png`,
    datePublished: "2024-05-11",
  },
  {
    slug: "freelances-independants-cyber-risques",
    title: "Indépendants : pourquoi l’assurance cyber protège votre trésorerie",
    description: "Pertes d’exploitation, responsabilité et frais juridiques adaptés aux indépendants.",
    image: `${baseUrl}/articles/freelances-independants-cyber-risques.png`,
    datePublished: "2024-05-12",
  },
  {
    slug: "artisans-btp-assurance-cyber",
    title: "Artisans du BTP : avez-vous vraiment besoin d’une assurance cyber ?",
    description: "Chantiers, devis, factures et planning : pourquoi un sinistre peut bloquer l’activité d’un artisan.",
    image: `${baseUrl}/articles/artisans-btp-assurance-cyber.png`,
    datePublished: "2024-05-13",
  },
  {
    slug: "ecommerce-vol-donnees",
    title: "E-commerce : responsabilité et coûts en cas de sinistre",
    description: "Responsabilité civile, frais juridiques et pertes d’exploitation spécifiques au e‑commerce.",
    image: `${baseUrl}/articles/ecommerce-vol-donnees.png`,
    datePublished: "2024-05-14",
  },
  {
    slug: "cloud-et-responsabilite",
    title: "Cloud et responsabilité contractuelle : qui assume quoi ?",
    description: "Partage des responsabilités entre éditeur et entreprise, et rôle de l’assurance cyber.",
    image: `${baseUrl}/articles/cloud-et-responsabilite.png`,
    datePublished: "2024-05-15",
  },
  {
    slug: "cyber-et-rgpd",
    title: "RGPD et assurance cyber : responsabilités et frais couverts",
    description: "Obligations RGPD, notifications et frais juridiques pris en charge selon garanties.",
    image: `${baseUrl}/articles/cyber-et-rgpd.png`,
    datePublished: "2024-05-16",
  },
  {
    slug: "checklist-cyber-pme",
    title: "Checklist assurance cyber : informations clés pour souscrire",
    description: "Les informations demandées par les assureurs : activité, exposition, garanties, plafonds.",
    image: `${baseUrl}/articles/checklist-cyber-pme.png`,
    datePublished: "2024-05-17",
  },
  {
    slug: "comment-choisir-assurance-cyber",
    title: "Comment choisir la bonne assurance cyber pour votre entreprise",
    description: "Critères clés : garanties, plafonds, franchises, exclusions, assistance en cas d’incident et budget.",
    image: `${baseUrl}/articles/comment-choisir-assurance-cyber.png`,
    datePublished: "2024-05-18",
  },
  {
    slug: "cas-reel-pme-attaque",
    title: "Cas concret : gestion d’un sinistre et indemnisation",
    description: "Retour d’expérience : impacts financiers, gestion de crise et indemnisation.",
    image: `${baseUrl}/articles/cas-reel-pme-attaque.png`,
    datePublished: "2024-05-19",
  },
  {
    slug: "faq-assurance-cyber-complet",
    title: "FAQ complète : tout ce que vous avez toujours voulu savoir sur l’assurance cyber",
    description: "Réponses claires aux questions fréquentes sur l’assurance cyber : couverture, prix, exclusions et assistance.",
    image: `${baseUrl}/articles/faq-assurance-cyber-complet.png`,
    datePublished: "2024-05-20",
  },
];

export const baseSiteUrl = baseUrl;
