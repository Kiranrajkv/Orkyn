import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PageTransition } from "@/components/PageTransition";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://orkyn.ai";
const siteName = "Orkyn Technologies";
const GA_ID = "G-6GCKL61EL5";

const defaultTitle = "Orkyn | Custom Software, ERP & Salesforce | UK, UAE, India";
const defaultDescription =
  "Custom software, ERP and Salesforce solutions engineered for your business. Fixed-price from $4,999. UK, UAE, India, USA, Europe.";

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
        url: "/og-image.svg",
        secureUrl: `${siteUrl}/og-image.svg`,
        type: "image/svg+xml",
        width: 1200,
        height: 630,
        alt: "Orkyn Technologies, Custom Software and Systems Built for Your Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "x-default": siteUrl,
      "en": siteUrl,
      "en-GB": siteUrl,
      "en-US": siteUrl,
      "en-AE": siteUrl,
      "en-IN": siteUrl,
      "en-AU": siteUrl,
      "en-CA": siteUrl,
      "en-NZ": siteUrl,
      "en-IE": siteUrl,
      "en-SG": siteUrl,
      "en-ZA": siteUrl,
    },
  },
  category: "technology",
  keywords: [
    "custom software development company",
    "ERP solutions company",
    "ERP implementation company",
    "ERP software service provider",
    "SaaS development company",
    "SaaS product development services",
    "AI software development company",
    "AI-powered software solutions",
    "CRM software development",
    "Salesforce development agency",
    "Salesforce implementation",
    "Salesforce Lightning developer",
    "Salesforce consulting partner",
    "HubSpot integration partner",
    "business automation services",
    "business process automation",
    "workflow automation",
    "digital transformation services",
    "enterprise software development",
    "custom web application development",
    "mobile app development company",
    "systems integration",
    "software development UK",
    "software development India",
    "software development UAE",
    "software development Dubai",
    "software development USA",
    "software development Australia",
    "software development Singapore",
    "software development Canada",
    "custom ERP development",
    "scalable business software",
    "bespoke software agency",
    "fixed price software development",
    "monthly retainer software development",
    "offshore software development",
    "outsourced software development",
    "software for startups",
    "software for SMBs",
    "software for scale-ups",
    "MVP development services",
    "POC development services",
    "discovery sprint",
    "tech audit services",
    "fractional CTO services",
    "software architecture consulting",
    "rescue project software",
    "legacy system replacement",
    "alternative to SAP",
    "alternative to Oracle ERP",
    "alternative to Salesforce",
    "alternative to HubSpot",
    "migrate from QuickBooks",
    "replace spreadsheets with software",
    "AWS migration services",
    "Azure consulting",
    "Microsoft Dynamics consultant",
    "NetSuite implementation",
    "Odoo implementation",
    "Power BI development",
    "Tableau implementation",
    "data warehouse design",
    "software for CTO",
    "ERP for CFO",
    "marketing software for CMO",
    "operations tools for COO",
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
      { "@type": "PostalAddress", addressRegion: "England", addressCountry: "GB" },
      { "@type": "PostalAddress", addressRegion: "Tamil Nadu", addressCountry: "IN" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@orkyn.ai",
      contactType: "sales",
      availableLanguage: "English",
      hoursAvailable: "Mo-Sa 00:00-23:59",
    },
    sameAs: [
      "https://www.linkedin.com/company/orkyntechnologies/",
      "https://x.com/Orkyntech",
      "https://github.com/orkyn?tab=repositories",
    ],
    knowsAbout: [
      "Custom Software Development",
      "ERP Development",
      "ERP Implementation",
      "ERP Solutions",
      "SaaS Product Development",
      "AI Software Development",
      "AI Automation",
      "CRM Development",
      "Salesforce Implementation",
      "Salesforce Development",
      "Business Process Automation",
      "Workflow Automation",
      "Digital Transformation",
      "Systems Integration",
      "Enterprise Software Development",
      "Web Application Development",
      "Mobile App Development",
      "Cloud Software",
      "Software Modernisation",
      "Legacy System Modernisation",
      "API Integration",
      "Search Engine Optimisation",
      "Technical SEO",
      "Performance Marketing",
      "Growth Marketing",
      "B2B Marketing",
      "Lead Generation",
      "Conversion Rate Optimisation",
      "Marketing Automation",
      "Content Marketing",
      "PPC Management",
      "SaaS Marketing",
      "Demand Generation",
      "UX Design",
      "UI Design",
      "Product Design",
      "Design Systems",
      "Interaction Design",
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
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How do I know Orkyn is the right fit for my business?", acceptedAnswer: { "@type": "Answer", text: "We will tell you honestly if we are not. Our discovery session is designed to understand your business, your goals and your challenges before either side commits to anything. We will be straightforward about it rather than take on work we cannot deliver exceptionally." } },
      { "@type": "Question", name: "What happens if the project takes longer than expected?", acceptedAnswer: { "@type": "Answer", text: "We scope every project carefully before we start so this rarely happens. But when complexity emerges, we absorb it. We do not send change request invoices for things that were always part of the problem we agreed to solve. Fixed price means fixed price." } },
      { "@type": "Question", name: "What does the first week actually look like?", acceptedAnswer: { "@type": "Answer", text: "Day one we are in your world. The first week is entirely focused on understanding your operations, your team and your goals through structured discovery sessions." } },
      { "@type": "Question", name: "What if we are not happy with the direction?", acceptedAnswer: { "@type": "Answer", text: "We offer a two-week satisfaction guarantee on every project. If you are not confident in the direction within the first two weeks we will refund you in full. No questions asked." } },
      { "@type": "Question", name: "Do you work with our existing team or replace them?", acceptedAnswer: { "@type": "Answer", text: "We work alongside your team, not instead of them. Our job is to make your team more capable, not to make ourselves indispensable." } },
      { "@type": "Question", name: "Do you sign NDAs?", acceptedAnswer: { "@type": "Answer", text: "Always. NDAs are signed before any substantive conversation about your business begins. Your ideas and your data stay yours." } },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#localbusiness`,
    name: "Orkyn Technologies",
    image: `${siteUrl}/og-image.svg`,
    url: siteUrl,
    email: "hello@orkyn.ai",
    address: { "@type": "PostalAddress", addressRegion: "England", addressCountry: "GB" },
    geo: { "@type": "GeoCoordinates", latitude: 53.4808, longitude: -2.2426 },
    openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "00:00", closes: "23:59" },
    priceRange: "$$$$",
    currenciesAccepted: "USD, GBP",
    paymentAccepted: "Bank Transfer, Credit Card",
    areaServed: ["United Kingdom", "India", "United States", "United Arab Emirates", "Europe", "Australia"],
    serviceType: ["Custom Software Development", "ERP Development", "SaaS Product Development", "AI Software Development", "CRM and Salesforce Development", "Business Process Automation", "Web and Mobile App Development", "Systems Integration", "Digital Transformation", "UX UI Design", "SEO and Growth"],
  };

  return (
    <html lang="en-GB" className={`scroll-smooth overflow-x-hidden ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="format-detection" content="telephone=no" />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="msapplication-config" content="none" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="google-site-verification" content="zqHdtk01UNrK4i8gpiBe2pZvonEcpC-xeGcksZxQ1i4" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Skip to main content, keyboard accessibility */}
        <a href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#0a0a0a] focus:text-white focus:rounded-full focus:text-sm focus:font-semibold">
          Skip to main content
        </a>

        <Navbar />
        <div id="main-content">
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />

        {process.env.VERCEL && <Analytics />}
        {process.env.VERCEL && <SpeedInsights />}

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
            });
            function trackEvent(action, category, label) {
              gtag('event', action, { event_category: category, event_label: label });
            }
            document.addEventListener('click', function(e) {
              var el = e.target.closest('a[href="#contact"], button[type="submit"]');
              if (!el) return;
              if (el.href && el.href.includes('#contact')) {
                trackEvent('cta_click', 'engagement', el.textContent.trim());
              }
              if (el.type === 'submit') {
                trackEvent('form_submit', 'conversion', 'contact_form');
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
