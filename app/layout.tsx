import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const siteUrl = "https://orkyn.co.uk";
const siteName = "Orkyn Technologies";

const defaultTitle = "Orkyn – Custom Software, ERP & Systems Built for Your Business | UK & India";
const defaultDescription =
  "Orkyn engineers bespoke software, ERP systems and Salesforce solutions built precisely for your business. Fixed-price engagements from $4,999. Offices in Manchester UK and Chennai India.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Orkyn Technologies",
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: "Orkyn Technologies", url: siteUrl }],
  creator: "Orkyn Technologies",
  publisher: "Orkyn Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Orkyn Technologies – Custom Software and Systems Built for Your Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@orkyntech",
    creator: "@orkyntech",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  keywords: [
    "custom software development UK",
    "bespoke software Manchester",
    "ERP system development UK",
    "Salesforce development agency",
    "custom software agency India",
    "business systems integration",
    "digital transformation agency UK",
    "custom web application development",
    "UX UI design agency UK",
    "SEO agency Manchester",
    "scalable business software",
    "CRM development UK",
    "software development Manchester",
    "Salesforce implementation UK",
    "custom ERP development",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Orkyn Technologies",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/Orkyn_Logo.svg`,
      width: 145,
      height: 161,
    },
    description: defaultDescription,
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Manchester",
        addressRegion: "England",
        addressCountry: "GB",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9840093574",
      contactType: "sales",
      availableLanguage: "English",
      hoursAvailable: "Mo-Fr 08:00-22:00",
    },
    sameAs: [
      "https://linkedin.com/company/orkyn",
      "https://twitter.com/orkyntech",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "One-Month Sprint",
          price: "4999",
          priceCurrency: "USD",
          priceValidUntil: "2027-01-01",
          description: "Fixed-scope custom software project delivered in 4 weeks",
          eligibleCustomer: { "@type": "BusinessAudience" },
        },
        {
          "@type": "Offer",
          name: "Ongoing Partnership",
          price: "4499",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingDuration: "P1M",
            price: "4499",
            priceCurrency: "USD",
          },
          description: "Monthly continuous software development and support partnership",
          eligibleCustomer: { "@type": "BusinessAudience" },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-GB",
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: defaultTitle,
    description: defaultDescription,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-GB",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I know Orkyn is the right fit for my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We will tell you honestly if we are not. Our discovery session is designed to understand your business, your goals and your challenges before either side commits to anything. We will be straightforward about it rather than take on work we cannot deliver exceptionally.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if the project takes longer than expected?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We scope every project carefully before we start so this rarely happens. But when complexity emerges, we absorb it. We do not send change request invoices for things that were always part of the problem we agreed to solve. Fixed price means fixed price.",
        },
      },
      {
        "@type": "Question",
        name: "What does the first week actually look like?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Day one we are in your world. The first week is entirely focused on understanding your operations, your team and your goals through structured discovery sessions. By the end of week one you will have a clear picture of exactly what we are building, why every decision was made and what the full timeline looks like.",
        },
      },
      {
        "@type": "Question",
        name: "What if we are not happy with the direction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer a two-week satisfaction guarantee on every project. If you are not confident in the direction within the first two weeks we will refund you in full. No questions asked.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with our existing team or replace them?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work alongside your team, not instead of them. Our job is to make your team more capable, not to make ourselves indispensable. Everything we build is fully documented and handed over so your team owns it completely.",
        },
      },
      {
        "@type": "Question",
        name: "Do you sign NDAs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Always. We treat your business information, your systems and your strategy with complete confidentiality as standard. NDAs are signed before any substantive conversation about your business begins.",
        },
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#localbusiness`,
    name: "Orkyn Technologies",
    image: `${siteUrl}/og-image.png`,
    url: siteUrl,
    telephone: "+91-9840093574",
    email: "Orkyntechnologies@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manchester",
      addressRegion: "England",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.4808,
      longitude: -2.2426,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      opens: "08:00",
      closes: "22:00",
    },
    priceRange: "$$$$",
    currenciesAccepted: "USD, GBP",
    paymentAccepted: "Bank Transfer, Credit Card",
    areaServed: ["United Kingdom", "India", "United States", "Australia"],
    serviceType: [
      "Custom Software Development",
      "ERP Development",
      "Salesforce Development",
      "UX UI Design",
      "SEO and Growth",
    ],
  };

  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="format-detection" content="telephone=no" />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* JSON-LD schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}

        {/* Vercel Analytics */}
        <Analytics />

        {/* Google Analytics 4 — add NEXT_PUBLIC_GA_ID to .env.local to enable */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
          id="ga4-script"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLACEHOLDER', { page_path: window.location.pathname });
          `}
        </Script>
      </body>
    </html>
  );
}
