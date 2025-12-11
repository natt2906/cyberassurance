import { baseSiteUrl } from "../../data/articlesSeo";

export default function HomeServiceJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Assurance cyber pour PME, artisans et indépendants",
      url: baseSiteUrl,
      description:
        "Couverture financière en cas de cyberattaque, assistance 24/7, accompagnement messagerie sécurisée et plan de continuité pour TPE/PME.",
      provider: {
        "@type": "Organization",
        name: "Assurance Cyber Sécurité",
        url: baseSiteUrl,
        logo: `${baseSiteUrl}/og-image.png`,
      },
      areaServed: {
        "@type": "Country",
        name: "France",
      },
      category: "Cyber insurance",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Pourquoi une assurance cyber pour une petite entreprise ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Elle couvre les coûts d'une cyberattaque (arrêt d'activité, restauration des données, assistance experte) et réduit l'impact financier pour les TPE/PME.",
          },
        },
        {
          "@type": "Question",
          name: "Que couvre l'assurance cyber ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Intervention d'urgence, prise en charge des frais techniques, pertes d'exploitation, gestion de crise et accompagnement juridique en cas de fuite ou de rançon.",
          },
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
