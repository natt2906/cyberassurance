import { baseSiteUrl } from "../../data/articlesSeo";

export default function HomeServiceJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Assurance cyber pour PME, artisans et indépendants",
      url: baseSiteUrl,
      description:
        "Couverture financière en cas de sinistre cyber, assistance 24/7, frais juridiques/RGPD et continuité d’activité pour TPE/PME/ETI.",
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
            text: "Elle protège la trésorerie en couvrant les pertes d’exploitation, la gestion de crise et la responsabilité civile après un sinistre.",
          },
        },
        {
          "@type": "Question",
          name: "Que couvre l'assurance cyber ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Selon contrat : pertes d’exploitation, frais de gestion de crise, responsabilité civile, assistance 24/7, frais juridiques et RGPD.",
          },
        },
        {
          "@type": "Question",
          name: "Combien ça coûte ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le tarif est sur devis selon votre secteur, taille et garanties choisies (plafonds, franchises, options).",
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
