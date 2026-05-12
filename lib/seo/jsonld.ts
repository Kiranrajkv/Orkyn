export const SITE_URL = "https://orkyn.ai";
export const SITE_NAME = "Orkyn Technologies";

type ServiceSchemaInput = {
  name: string;
  description: string;
  url: string;
  serviceType: string | string[];
  areaServed?: string[];
  keywords?: string;
  id?: string;
};

export function buildServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed = ["United Kingdom", "India", "United States", "United Arab Emirates", "Europe"],
  keywords,
  id,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": id ?? `${url}#service`,
    name,
    description,
    url,
    serviceType,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: areaServed.map((country) => ({ "@type": "Country", name: country })),
    audience: { "@type": "BusinessAudience", audienceType: "Business" },
    inLanguage: "en",
    ...(keywords && { keywords }),
  };
}

type BreadcrumbItem = { name: string; url: string };

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    inLanguage: "en",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

type ArticleSchemaInput = {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  articleSection?: string;
};

export function buildArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = SITE_NAME,
  image = `${SITE_URL}/og-image.png`,
  articleSection,
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { "@type": "Organization", name: author, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(articleSection && { articleSection }),
  };
}

export function jsonLdScript(schema: object) {
  return { __html: JSON.stringify(schema) };
}
