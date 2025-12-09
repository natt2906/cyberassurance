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
    title: "Pourquoi les PME sont devenues la cible n°1 des cyberattaques",
    description: "Les raisons pour lesquelles les TPE/PME sont massivement ciblées et comment réduire leur exposition au risque.",
    image: `${baseUrl}/articles/pourquoi-pme-cibles-cyberattaques.png`,
    datePublished: "2024-05-02",
  },
  {
    slug: "combien-coute-une-cyberattaque",
    title: "Combien coûte réellement une cyberattaque pour une petite entreprise ?",
    description: "Estimation des coûts visibles et cachés d’une cyberattaque pour une PME : arrêt d’activité, données perdues, rançon.",
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
    title: "7 erreurs de cybersécurité que font (presque) toutes les petites entreprises",
    description: "Les pièges courants (mots de passe, sauvegardes, phishing) et comment les corriger rapidement dans une PME.",
    image: `${baseUrl}/articles/erreurs-courantes-cyber-petites-entreprises.png`,
    datePublished: "2024-05-05",
  },
  {
    slug: "ransomware-que-faire",
    title: "Ransomware : que faire si votre entreprise est bloquée ?",
    description: "Les réflexes en cas de ransomware : isoler, alerter, restaurer, déclarer et faire jouer son assurance cyber.",
    image: `${baseUrl}/articles/ransomware-que-faire.png`,
    datePublished: "2024-05-06",
  },
  {
    slug: "securiser-messagerie-pro",
    title: "Comment sécuriser votre messagerie professionnelle en 5 étapes",
    description: "Guide express pour durcir sa messagerie pro : MFA, filtres, DKIM/DMARC, sensibilisation et sauvegardes.",
    image: `${baseUrl}/articles/securiser-messagerie-pro.png`,
    datePublished: "2024-05-07",
  },
  {
    slug: "reconnaitre-mail-phishing",
    title: "Comment reconnaître un mail de phishing en moins de 10 secondes",
    description: "Les indices clés pour repérer un phishing et éviter les clics à risque, même pour les non-techniciens.",
    image: `${baseUrl}/articles/reconnaitre-mail-phishing.png`,
    datePublished: "2024-05-08",
  },
  {
    slug: "sauvegardes-strategie-pme",
    title: "Sauvegardes : la stratégie minimale pour ne pas tout perdre",
    description: "Mettre en place une stratégie de sauvegarde 3-2-1 simple et testée pour sécuriser les données d’une PME.",
    image: `${baseUrl}/articles/sauvegardes-strategie-pme.png`,
    datePublished: "2024-05-09",
  },
  {
    slug: "assurance-cyber-vs-antivirus",
    title: "Assurance cyber vs antivirus : pourquoi les deux sont indispensables",
    description: "Comprendre la complémentarité entre outils de sécurité et assurance cyber pour couvrir les conséquences financières.",
    image: `${baseUrl}/articles/assurance-cyber-vs-antivirus.png`,
    datePublished: "2024-05-10",
  },
  {
    slug: "former-equipes-risque-cyber",
    title: "Former ses équipes au risque cyber : le meilleur pare-feu humain",
    description: "Sensibilisation, ateliers courts et tests de phishing : comment réduire le risque humain en PME.",
    image: `${baseUrl}/articles/former-equipes-risque-cyber.png`,
    datePublished: "2024-05-11",
  },
  {
    slug: "freelances-independants-cyber-risques",
    title: "Freelances & indépendants : pourquoi vous êtes vulnérables aux cyberattaques",
    description: "Les risques spécifiques aux freelances : vols de données clients, rançongiciels et interruption d’activité.",
    image: `${baseUrl}/articles/freelances-independants-cyber-risques.png`,
    datePublished: "2024-05-12",
  },
  {
    slug: "artisans-btp-assurance-cyber",
    title: "Artisans du BTP : avez-vous vraiment besoin d’une assurance cyber ?",
    description: "Chantiers, devis, factures et planning : pourquoi un incident cyber peut bloquer l’activité d’un artisan.",
    image: `${baseUrl}/articles/artisans-btp-assurance-cyber.png`,
    datePublished: "2024-05-13",
  },
  {
    slug: "ecommerce-vol-donnees",
    title: "E-commerce & vol de données : comment limiter les dégâts ?",
    description: "Sécuriser les paiements, protéger les données clients et plan de réponse en cas de fuite pour un site e-commerce.",
    image: `${baseUrl}/articles/ecommerce-vol-donnees.png`,
    datePublished: "2024-05-14",
  },
  {
    slug: "cloud-et-responsabilite",
    title: "Cloud, logiciels en ligne et responsabilité : qui est responsable en cas d’attaque ?",
    description: "Partage de responsabilité entre éditeur SaaS et entreprise utilisatrice, et rôle de l’assurance cyber.",
    image: `${baseUrl}/articles/cloud-et-responsabilite.png`,
    datePublished: "2024-05-15",
  },
  {
    slug: "cyber-et-rgpd",
    title: "Cyber-risque et RGPD : ce que doit savoir une petite entreprise",
    description: "Obligations RGPD, notification de violations et sanctions : comment l’assurance et la conformité se complètent.",
    image: `${baseUrl}/articles/cyber-et-rgpd.png`,
    datePublished: "2024-05-16",
  },
  {
    slug: "checklist-cyber-pme",
    title: "Checklist cybersécurité : 15 points à vérifier dans votre PME",
    description: "Une checklist actionnable pour durcir postes, messagerie, accès distants, sauvegardes et sensibilisation.",
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
    title: "Cas concret : comment une PME a géré une cyberattaque majeure",
    description: "Retour d’expérience : déroulé de l’attaque, impacts, interventions et leçons pour mieux se préparer.",
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
