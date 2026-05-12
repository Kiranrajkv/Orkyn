import { describe, it, expect } from "vitest";
import { buildServiceSchema, buildBreadcrumbSchema, jsonLdScript, SITE_URL } from "@/lib/seo/jsonld";

describe("buildServiceSchema", () => {
  it("returns a schema.org Service with required fields", () => {
    const s = buildServiceSchema({
      name: "Test Service",
      description: "Test desc",
      url: "https://orkyn.ai/test",
      serviceType: ["A", "B"],
    });
    expect(s["@type"]).toBe("Service");
    expect(s["@context"]).toBe("https://schema.org");
    expect(s.name).toBe("Test Service");
    expect(s.serviceType).toEqual(["A", "B"]);
    expect(s.inLanguage).toBe("en");
    expect(s.areaServed).toHaveLength(5);
  });

  it("includes optional keywords when provided", () => {
    const s = buildServiceSchema({
      name: "n",
      description: "d",
      url: "u",
      serviceType: "x",
      keywords: "kw1, kw2",
    }) as { keywords?: string };
    expect(s.keywords).toBe("kw1, kw2");
  });

  it("uses custom @id when provided", () => {
    const s = buildServiceSchema({
      name: "n",
      description: "d",
      url: "https://orkyn.ai/x",
      serviceType: "x",
      id: "https://orkyn.ai/x#custom",
    });
    expect(s["@id"]).toBe("https://orkyn.ai/x#custom");
  });

  it("falls back to url-derived @id when none provided", () => {
    const s = buildServiceSchema({
      name: "n",
      description: "d",
      url: "https://orkyn.ai/x",
      serviceType: "x",
    });
    expect(s["@id"]).toBe("https://orkyn.ai/x#service");
  });
});

describe("buildBreadcrumbSchema", () => {
  it("returns a BreadcrumbList with sequential positions", () => {
    const s = buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Services", url: `${SITE_URL}/#services` },
      { name: "Systems", url: `${SITE_URL}/services/systems-development` },
    ]);
    expect(s["@type"]).toBe("BreadcrumbList");
    expect(s.itemListElement).toHaveLength(3);
    expect(s.itemListElement[0].position).toBe(1);
    expect(s.itemListElement[2].position).toBe(3);
    expect(s.inLanguage).toBe("en");
  });
});

describe("jsonLdScript", () => {
  it("returns a dangerouslySetInnerHTML-compatible object", () => {
    const result = jsonLdScript({ "@type": "Test" });
    expect(result).toHaveProperty("__html");
    expect(typeof result.__html).toBe("string");
    expect(JSON.parse(result.__html)["@type"]).toBe("Test");
  });
});
