import { useEffect } from "react";

type SeoHeadProps = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
};

const setMeta = (name: string, content: string) => {
  if (!content) return;
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setPropertyMeta = (property: string, content: string) => {
  if (!content) return;
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  if (!href) return;
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

export default function SeoHead({ title, description, canonical, ogImage }: SeoHeadProps) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      setMeta("description", description);
    }
    if (canonical) setCanonical(canonical);

    // Open Graph
    if (title) setPropertyMeta("og:title", title);
    if (description) setPropertyMeta("og:description", description);
    if (canonical) setPropertyMeta("og:url", canonical);
    if (ogImage) setPropertyMeta("og:image", ogImage);

    // Twitter
    if (title) setMeta("twitter:title", title);
    if (description) setMeta("twitter:description", description);
    if (ogImage) setMeta("twitter:image", ogImage);
  }, [title, description, canonical, ogImage]);

  return null;
}
