import { articlesSeo, baseSiteUrl } from "../../data/articlesSeo";
import SeoHead from "./SeoHead";

type Props = {
  slug: string;
};

export default function ArticleSeoMeta({ slug }: Props) {
  const article = articlesSeo.find((a) => a.slug === slug);
  if (!article) return null;

  const canonical = `${baseSiteUrl}/articles/${article.slug}`;

  return (
    <SeoHead
      title={`${article.title} | Assurance Cyber Sécurité`}
      description={article.description}
      canonical={canonical}
      ogImage={article.image}
    />
  );
}
