import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://orkyn.co.uk";
  const now = new Date();
  return [
    { url: base,                                    lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/services/systems-development`,  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/design-experience`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/growth-performance`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
