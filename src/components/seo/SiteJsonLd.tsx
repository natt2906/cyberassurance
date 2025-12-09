import { baseSiteUrl } from "../../data/articlesSeo";

export default function SiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Assurance Cyber Sécurité",
    url: baseSiteUrl,
    logo: `${baseSiteUrl}/og-image.png`,
    sameAs: [
      "https://www.linkedin.com",
      "https://twitter.com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@assurance-cyber-securite.fr",
      availableLanguage: ["fr"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
