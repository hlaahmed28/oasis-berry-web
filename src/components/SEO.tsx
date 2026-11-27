import { useEffect } from "react";

export const SITE_URL = "https://strawberryoasis.com";
export const SITE_NAME = "Strawberry Oasis";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/hero-crate.jpg`;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "product";
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    el!.setAttribute(key, value);
  });
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const SEO = ({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
  imageAlt = "Fresh premium Egyptian strawberries from Strawberry Oasis",
  type = "website",
  noindex = false,
  breadcrumbs,
  structuredData,
}: SEOProps) => {
  useEffect(() => {
    const canonicalUrl = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const absoluteImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noindex
        ? "noindex, follow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    });

    if (keywords) {
      upsertMeta('meta[name="keywords"]', { name: "keywords", content: keywords });
    }

    upsertLink("canonical", canonicalUrl);

    // Open Graph
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "en_US" });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: absoluteImage });
    upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: imageAlt });

    // Twitter Cards
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: absoluteImage });
    upsertMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt", content: imageAlt });

    // Per-page JSON-LD structured data
    const schemas: Record<string, unknown>[] = [];

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: crumb.name,
          item: crumb.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${crumb.path}`,
        })),
      });
    }

    if (structuredData) {
      if (Array.isArray(structuredData)) {
        schemas.push(...structuredData);
      } else {
        schemas.push(structuredData);
      }
    }

    // Remove previous route-scoped JSON-LD scripts
    document.head
      .querySelectorAll('script[data-seo-jsonld="route"]')
      .forEach((node) => node.remove());

    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "route");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document.head
        .querySelectorAll('script[data-seo-jsonld="route"]')
        .forEach((node) => node.remove());
    };
  }, [title, description, path, keywords, image, imageAlt, type, noindex, breadcrumbs, structuredData]);

  return null;
};

export default SEO;
