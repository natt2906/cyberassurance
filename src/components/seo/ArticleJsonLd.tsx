import { articlesSeo, baseSiteUrl } from "../../data/articlesSeo";

type Props = {
  slug: string;
};

export default function ArticleJsonLd({ slug }: Props) {
  const article = articlesSeo.find((a) => a.slug === slug);
  if (!article) return null;

  const articleUrl = `${baseSiteUrl}/articles/${article.slug}`;
  const publisher = {
    "@type": "Organization",
    name: "Assurance Cyber Sécurité",
    url: baseSiteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseSiteUrl}/og-image.png`,
    },
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: article.title,
      description: article.description,
      image: [article.image],
      datePublished: article.datePublished,
      dateModified: article.datePublished,
      author: publisher,
      publisher,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": articleUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: baseSiteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Articles",
          item: `${baseSiteUrl}/articles`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: articleUrl,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
