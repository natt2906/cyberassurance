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
      serviceType: "Assurance cyber (sur devis)",
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
      audience: {
        "@type": "Audience",
        audienceType: ["TPE", "PME", "Artisans", "Indépendants"],
      },
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          price: "0",
          description: "Tarification sur devis en fonction du profil et du secteur.",
        },
        availability: "https://schema.org/InStock",
        description: "Tarifs personnalisés après étude du risque (aucun prix fixe public).",
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
        {
          "@type": "Question",
          name: "Combien ça coûte ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le tarif est sur devis, selon votre secteur, votre taille et vos protections en place. Un échange rapide permet d'estimer le prix et d'ajuster les garanties.",
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
