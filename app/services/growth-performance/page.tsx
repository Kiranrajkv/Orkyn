import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, Search, BarChart3, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerChildren } from "@/components/FadeIn";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { ModalCTA } from "@/components/ModalCTA";
import { buildServiceSchema, buildBreadcrumbSchema, jsonLdScript, SITE_URL } from "@/lib/seo/jsonld";


export const metadata: Metadata = {
  title: { absolute: "SEO, B2B & Growth Marketing Agency | Orkyn" },
  description:
    "SEO, B2B marketing, performance marketing, growth marketing, lead generation and CRO for SaaS and enterprise. UK, UAE, India, USA.",
  alternates: { canonical: "https://orkyn.ai/services/growth-performance" },
  keywords: [
    "digital marketing agency",
    "performance marketing agency",
    "growth marketing agency",
    "B2B marketing agency",
    "SEO company",
    "search engine optimisation company",
    "marketing automation company",
    "lead generation company",
    "branding and marketing agency",
    "conversion optimisation agency",
    "paid advertising agency",
    "content marketing agency",
    "inbound marketing agency",
    "demand generation agency",
    "PPC management company",
    "B2B lead generation services",
    "marketing strategy consulting company",
    "revenue growth marketing agency",
    "customer acquisition agency",
    "data-driven marketing agency",
    "marketing analytics company",
    "AI marketing automation company",
    "CRM marketing automation agency",
    "email marketing automation agency",
    "SaaS marketing agency",
    "SaaS growth marketing company",
    "startup marketing agency",
    "B2B demand generation agency",
    "SEO optimisation services",
    "marketing technology company",
    "enterprise marketing automation services",
    "digital marketing agency UK",
    "B2B marketing agency UK",
    "SEO company UK",
    "growth marketing agency London",
    "lead generation company Manchester",
    "marketing automation agency Birmingham",
    "SaaS marketing agency UK",
    "performance marketing agency Leeds",
    "branding agency Liverpool",
    "enterprise SEO agency London",
    "digital marketing agency Dubai",
    "SEO company Dubai",
    "growth marketing agency UAE",
    "lead generation company Dubai",
    "marketing automation company UAE",
    "branding agency Dubai",
    "performance marketing agency UAE",
    "B2B marketing company Dubai",
    "AI marketing company UAE",
    "enterprise marketing solutions Dubai",
    "digital marketing company India",
    "SEO services company India",
    "SaaS marketing agency India",
    "B2B lead generation company India",
    "marketing automation agency India",
    "performance marketing company India",
    "branding and digital agency India",
    "growth marketing services India",
    "AI-powered marketing company India",
    "SEO agency Sheffield",
    "SEO agency Bristol",
    "SEO agency Edinburgh",
    "SEO agency Cambridge",
    "SEO agency Newcastle",
    "marketing agency New York",
    "marketing agency San Francisco",
    "marketing agency Los Angeles",
    "marketing agency Chicago",
    "marketing agency Boston",
    "marketing agency Austin",
    "marketing agency Seattle",
    "marketing agency Toronto",
    "marketing agency Sydney",
    "marketing agency Singapore",
    "marketing agency Dublin",
    "marketing agency Noida",
    "marketing agency Gurgaon",
    "marketing agency Ahmedabad",
    "marketing agency Kolkata",
    "SEO agency Ajman",
    "SEO agency Sharjah",
    "Power BI development services",
    "Tableau implementation services",
    "Looker development services",
    "data warehouse design",
    "dbt consulting",
    "Snowflake integration",
    "BigQuery consulting",
    "marketing analytics company",
    "marketing attribution consulting",
    "GA4 implementation services",
    "Google Analytics 4 consulting",
    "server-side tracking implementation",
    "cookieless tracking implementation",
    "marketing data warehouse",
    "revenue attribution agency",
    "fractional CMO services",
    "outsourced marketing team",
    "outsourced SEO team",
    "outsourced content team",
    "MVP marketing services",
    "growth marketing for SaaS startups",
    "lead generation for B2B fintech",
    "lead generation for healthtech",
    "lead generation for SaaS",
    "marketing for enterprise SaaS",
    "marketing for Series A SaaS",
    "marketing for Series B SaaS",
    "marketing for startups",
    "marketing for scale-ups",
    "marketing for B2B SMBs",
    "ABM agency for SaaS",
    "account-based marketing agency",
    "intent data marketing",
    "LinkedIn lead generation agency",
    "LinkedIn Ads agency",
    "Google Ads agency",
    "Meta Ads agency",
    "alternative to HubSpot agency",
    "alternative to in-house marketing team",
    "fixed price SEO services",
    "fixed price growth marketing",
    "monthly retainer marketing agency",
    "SEO for eCommerce",
    "SEO for SaaS",
    "SEO for fintech",
    "SEO for healthtech",
    "SEO for legaltech",
    "SEO for marketplaces",
    "international SEO services",
    "multilingual SEO services",
    "programmatic SEO services",
    "technical SEO audit",
    "Core Web Vitals optimisation",
    "page experience optimisation",
    "schema markup services",
    "JSON-LD implementation",
    "AI search optimisation",
    "LLM SEO services",
    "answer engine optimisation",
    "AEO services",
  ],
  openGraph: {
    type: "website",
    title: "SEO, B2B & Growth Marketing Agency | Orkyn",
    description: "SEO, B2B marketing, performance marketing, growth marketing, lead generation and CRO. UK, UAE, India, USA, Europe.",
    images: [{ url: "/og-image.svg" }],
  },
};

const PAGE_URL = `${SITE_URL}/services/growth-performance`;

const serviceSchema = buildServiceSchema({
  name: "SEO, B2B Marketing, Performance and Growth Marketing",
  description:
    "Search engine optimisation, performance marketing, growth marketing, conversion rate optimisation, B2B marketing, lead generation, marketing automation, content marketing, PPC management, brand strategy, SaaS marketing and demand generation for B2B and SaaS businesses across the UK, UAE, India, USA and Europe.",
  url: PAGE_URL,
  serviceType: [
    "Search Engine Optimisation",
    "Performance Marketing",
    "Growth Marketing",
    "Conversion Rate Optimisation",
    "B2B Marketing",
    "Lead Generation",
    "Marketing Automation",
    "Content Marketing",
    "PPC Management",
    "Brand Strategy",
    "SaaS Marketing",
    "Demand Generation",
    "Digital Marketing",
  ],
  keywords:
    "digital marketing agency, performance marketing agency, growth marketing agency, full-service marketing agency, B2B marketing agency, marketing automation company, SEO and marketing company, creative digital agency, lead generation company, branding and marketing agency, conversion optimisation agency, paid advertising agency, search engine optimisation company, content marketing agency, demand generation agency, SaaS marketing agency, startup marketing agency, ROI-focused marketing agency, digital marketing agency UK, digital marketing agency Dubai, digital marketing company India",
});

const leadGenServiceSchema = buildServiceSchema({
  id: `${PAGE_URL}#service-leadgen`,
  name: "B2B Lead Generation and Demand Generation",
  description:
    "B2B lead generation services, demand generation campaigns and customer acquisition systems for SaaS, professional services and enterprise businesses across the UK, UAE, India, USA and Europe.",
  url: PAGE_URL,
  serviceType: [
    "Lead Generation",
    "B2B Lead Generation",
    "Demand Generation",
    "Customer Acquisition",
    "Sales Funnel Optimisation",
  ],
  keywords:
    "B2B lead generation services, lead generation company, demand generation agency, B2B demand generation, lead generation UK, lead generation company Manchester, lead generation company Dubai, lead generation India, B2B lead generation company India, customer acquisition agency, sales funnel optimisation company, automated lead generation systems, enterprise customer acquisition agency, data-driven lead generation company",
});

const saasMarketingServiceSchema = buildServiceSchema({
  id: `${PAGE_URL}#service-saas-marketing`,
  name: "SaaS Marketing and Growth Marketing",
  description:
    "SaaS marketing, B2B SaaS growth marketing, account-based marketing and startup marketing engagements built around revenue outcomes for SaaS companies across the UK, UAE, India, USA and Europe.",
  url: PAGE_URL,
  serviceType: [
    "SaaS Marketing",
    "B2B SaaS Marketing",
    "Growth Marketing",
    "Startup Marketing",
    "Product-Led Growth",
  ],
  keywords:
    "SaaS marketing agency, SaaS growth marketing company, B2B SaaS marketing agency, startup marketing agency, SaaS marketing UK, SaaS marketing India, SaaS marketing agency India, growth marketing services, growth marketing agency London, performance marketing agency Leeds, scalable marketing systems company, B2B marketing company Dubai, growth-focused digital agency, growth acceleration agency",
});

const marketingAutomationServiceSchema = buildServiceSchema({
  id: `${PAGE_URL}#service-marketing-automation`,
  name: "Marketing Automation and CRM Marketing",
  description:
    "Marketing automation, CRM marketing automation, email marketing automation and AI-powered marketing systems integrated with HubSpot, Salesforce Marketing Cloud and bespoke CRM platforms.",
  url: PAGE_URL,
  serviceType: [
    "Marketing Automation",
    "CRM Marketing Automation",
    "Email Marketing Automation",
    "Marketing Systems Integration",
    "AI Marketing Automation",
  ],
  keywords:
    "marketing automation company, CRM marketing automation agency, email marketing automation agency, sales and marketing automation agency, marketing systems integration company, marketing automation UK, marketing automation agency Birmingham, marketing automation company UAE, marketing automation agency India, AI marketing automation company, AI-powered marketing solutions, AI-powered customer acquisition systems, marketing workflow automation agency",
});

const analyticsServiceSchema = buildServiceSchema({
  id: `${PAGE_URL}#service-analytics`,
  name: "Marketing Analytics, Attribution and Business Intelligence",
  description:
    "Marketing analytics, revenue attribution, GA4 implementation, server-side tracking, data warehouse design, Power BI development, Tableau implementation and BI dashboards for marketing and revenue teams across the UK, UAE, India, USA, Australia and Europe.",
  url: PAGE_URL,
  serviceType: [
    "Marketing Analytics",
    "Marketing Attribution",
    "GA4 Implementation",
    "Server-Side Tracking",
    "Data Warehouse Design",
    "Power BI Development",
    "Tableau Implementation",
    "Looker Development",
    "Marketing Data Engineering",
  ],
  keywords:
    "marketing analytics company, marketing attribution consulting, GA4 implementation services, Google Analytics 4 consulting, server-side tracking implementation, cookieless tracking implementation, marketing data warehouse, revenue attribution agency, Power BI development services, Tableau implementation services, Looker development services, data warehouse design, dbt consulting, Snowflake integration, BigQuery consulting, marketing data engineering, revenue dashboard development, ROI dashboard agency, CAC LTV analytics, B2B marketing analytics agency, SaaS marketing analytics partner",
});

const aeoSeoServiceSchema = buildServiceSchema({
  id: `${PAGE_URL}#service-aeo-seo`,
  name: "AI Search Optimisation and Answer Engine Optimisation (AEO)",
  description:
    "Optimisation for AI search engines (ChatGPT, Claude, Perplexity, Google AI Overviews) including schema markup, llms.txt authoring, content structure for LLM retrieval, technical SEO and Core Web Vitals. Engineered for businesses across the UK, UAE, India, USA and Europe.",
  url: PAGE_URL,
  serviceType: [
    "AI Search Optimisation",
    "Answer Engine Optimisation",
    "LLM SEO",
    "Schema Markup Services",
    "Technical SEO Audit",
    "Core Web Vitals Optimisation",
    "International SEO",
    "Programmatic SEO",
  ],
  keywords:
    "AI search optimisation, AEO services, answer engine optimisation, LLM SEO services, ChatGPT SEO, Perplexity SEO, Claude search optimisation, Google AI Overviews optimisation, schema markup services, JSON-LD implementation, technical SEO audit, Core Web Vitals optimisation, page experience optimisation, international SEO services, multilingual SEO services, programmatic SEO services, llms.txt authoring, generative engine optimisation, GEO services",
});

const ppcServiceSchema = buildServiceSchema({
  id: `${PAGE_URL}#service-ppc`,
  name: "PPC, Paid Media and Performance Advertising",
  description:
    "PPC management, paid search, paid social, Google Ads, LinkedIn Ads and performance advertising campaigns optimised for revenue and customer acquisition across the UK, UAE, India, USA and Europe.",
  url: PAGE_URL,
  serviceType: [
    "PPC Management",
    "Paid Search Marketing",
    "Paid Social Marketing",
    "Google Ads Management",
    "LinkedIn Ads Management",
    "Performance Advertising",
  ],
  keywords:
    "PPC management company, paid advertising agency, performance marketing agency, digital advertising company, performance branding agency, ROI-focused marketing agency, paid social marketing, search marketing agency, performance marketing agency UAE, performance marketing company India, digital campaign management agency, multi-channel marketing agency, enterprise customer acquisition agency",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: SITE_URL },
  { name: "Services", url: `${SITE_URL}/#services` },
  { name: "Growth and Performance", url: PAGE_URL },
]);

const features = [
  { icon: Search,     title: "Technical SEO",               desc: "Site structure, Core Web Vitals, schema markup and content strategy built to rank for the terms your customers are actually searching." },
  { icon: TrendingUp, title: "Conversion Rate Optimisation", desc: "We identify exactly where your funnel is losing people and systematically fix it. More revenue from the traffic you already have." },
  { icon: Target,     title: "Performance Marketing",        desc: "Paid search and social campaigns built entirely around real business outcomes rather than impressions and click-through rates." },
  { icon: BarChart3,  title: "Analytics and Reporting",      desc: "Custom dashboards and attribution models that show exactly what is driving revenue and what is wasting budget." },
];

const outcomes = [
  "Higher organic rankings for the exact search terms your customers use",
  "Improved conversion rates across every channel and touchpoint",
  "Clear visibility on what is driving real revenue versus what is not",
  "Reducing cost per acquisition as campaigns compound and improve over time",
  "Data infrastructure that supports smarter decisions every month",
  "Monthly reporting tied entirely to revenue outcomes rather than vanity metrics",
];

const process = [
  { step: "01", title: "Audit",    desc: "A full-stack growth audit across SEO, performance, analytics and conversion. We identify the biggest gaps and opportunities before changing anything." },
  { step: "02", title: "Strategy", desc: "A prioritised roadmap of high-impact initiatives built around your goals, your market and your budget. Everything is specific to your business." },
  { step: "03", title: "Execute",  desc: "We implement, test and optimise continuously. Experiments that compound month over month. Every decision is driven by data rather than instinct." },
  { step: "04", title: "Report",   desc: "Monthly reporting that tells you exactly what changed, why it changed and what we are doing next. Reports you will actually read and use." },
];

const problems = [
  "You are spending on marketing but cannot see what is actually working",
  "Your organic traffic has plateaued or is declining month on month",
  "Visitors are landing on your site but leaving without converting",
  "Your competitors are outranking you for the terms that matter most",
];

export default function GrowthPerformancePage() {
  return (
    <div className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(serviceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(leadGenServiceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(saasMarketingServiceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(marketingAutomationServiceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(analyticsServiceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(aeoSeoServiceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ppcServiceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema)} />

      <section className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "32px 32px" }} aria-hidden="true" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-500 opacity-10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <FadeIn delay={0}>
              <Link href="/" className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors mb-8">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Back to home
              </Link>
            </FadeIn>
            <FadeIn delay={80}>
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
                <TrendingUp size={12} className="text-emerald-400" aria-hidden="true" />
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-widest">Growth and Performance Marketing</span>
              </div>
            </FadeIn>
            <FadeIn delay={160}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                Your next customer is searching<br /><span className="text-emerald-400">right now. Make sure they find you.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={240}>
              <p className="text-lg lg:text-xl text-white/55 leading-relaxed mb-4 max-w-2xl">
                Most businesses are either invisible in search, converting poorly from the traffic they have, or spending on marketing with no clear picture of what is actually working.
              </p>
              <p className="text-lg lg:text-xl text-white/55 leading-relaxed mb-10 max-w-2xl">
                We drive measurable growth through technical SEO, conversion rate optimisation and performance marketing. Every decision tied directly to revenue. Not vanity metrics.
              </p>
            </FadeIn>
            <FadeIn delay={320}>
              <div className="flex flex-wrap gap-4">
                <ModalCTA label="Start Growing" color="#10B981" glow="rgba(16,185,129,0.35)" size="lg" />
                <Link href="#process"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full font-semibold text-sm text-white/70 border border-white/15 hover:border-white/30 hover:text-white transition-all duration-300">
                  See how it works
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAFA] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn direction="left">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Sound familiar?</p>
              <h2 className="font-display text-2xl lg:text-3xl font-bold tracking-tight mb-3">
                Growth that does not compound is just noise. Here is what is actually holding you back.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These are the most common growth blockers we see when businesses come to us. If any of these ring true, you are not alone and there is a clear way forward.
              </p>
            </FadeIn>
            <StaggerChildren className="space-y-3" stagger={100}>
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border">
                  <span className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true"><path d="M2 2l4 4M6 2l-4 4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </span>
                  <span className="text-sm text-foreground font-medium">{p}</span>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">What We Do</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4">Growth that compounds. Month after month.</h2>
            <p className="text-lg text-muted-foreground">We find the levers that move the needle and pull them consistently. No one-off campaigns. No vanity dashboards.</p>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch" stagger={80}>
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="group p-6 lg:p-7 rounded-2xl border border-border hover:border-emerald-200 hover:shadow-lg transition-all duration-300 bg-white flex flex-col h-full">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors flex-shrink-0">
                    <Icon size={18} className="text-emerald-600" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-base lg:text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      <section id="process" className="py-20 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">How We Work</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4">Four stages. Built for results that build on themselves.</h2>
            <p className="text-lg text-muted-foreground">Growth without a process is just gambling. We follow a proven sequence that compounds results over time.</p>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch" stagger={100}>
            {process.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-border hover:border-emerald-200 hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                <span className="font-mono text-5xl font-black text-emerald-100 group-hover:text-emerald-200 block mb-4 transition-colors">{p.step}</span>
                <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">What You Get</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-5">
                Growth without strategy is just noise. We build systems that create results you can measure.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Every engagement includes full-stack growth execution and reporting tied directly to revenue. You will always know exactly what is working and why.
              </p>
              <ModalCTA label="Start Growing" color="#10B981" glow="rgba(16,185,129,0.35)" size="sm" />
            </FadeIn>
            <StaggerChildren className="space-y-3" stagger={80}>
              {outcomes.map((o, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFAFA] border border-border">
                  <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-foreground font-medium leading-relaxed">{o}</span>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>


      {/* Related services */}
      <section className="py-16 bg-[#FAFAFA] border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-6">Related Services</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/services/systems-development"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-white hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Systems and Product Development</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Custom software, ERP and Salesforce</p>
                </div>
                <ArrowRight size={14} className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true" />
              </Link>
              <Link href="/services/design-experience"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-white hover:border-purple-200 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 12l4-4 4 4M12 8v8"/></svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">UX and Product Design</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Interfaces your users will actually love</p>
                </div>
                <ArrowRight size={14} className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="p-8 rounded-3xl border border-emerald-100 bg-emerald-50/30">
              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <blockquote className="text-lg font-medium text-foreground leading-relaxed mb-6">
                I have worked with agencies before who promised to understand the brief and then delivered something generic. Orkyn was different from the first call. They asked questions no one had ever asked us before, and what they built actually reflects how we run our business. The results were immediate and measurable.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">KR</div>
                <div>
                  <p className="font-semibold text-sm">Krishna</p>
                  <p className="text-xs text-muted-foreground">CEO, Support Studio</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
            {/* FAQ accordion */}
      <section className="py-16 bg-[#FAFAFA] border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2">FAQ</p>
            <h2 className="font-display text-2xl font-bold tracking-tight mb-8">Common questions about SEO and growth marketing</h2>
            <ServiceFAQ accentColor="#10B981" questions={[
              { q: "How long does SEO take to show results?", a: "Technical SEO improvements can show results within 4 to 8 weeks. Content and authority building typically takes 3 to 6 months to compound. We focus on quick wins in the first month while building the longer-term strategy in parallel." },
              { q: "What is conversion rate optimisation (CRO)?", a: "CRO is the process of improving the percentage of visitors who take a desired action on your site, filling in a form, clicking a CTA or making a purchase. We identify where users are dropping off and systematically test and improve those points." },
              { q: "How much does SEO and growth marketing cost?", a: "Our Ongoing Partnership starts at $4,499 per month and includes full-stack SEO, CRO, performance marketing and analytics. This is significantly less than hiring a single in-house digital marketing manager and covers everything from technical audits to content strategy, paid media and monthly reporting." },
              { q: "Do you do paid advertising as well as SEO?", a: "Yes. We manage paid search and paid social campaigns alongside organic SEO. Combining both channels means we drive immediate traffic while the organic strategy builds. All campaigns are optimised for revenue, not clicks or impressions." },
              { q: "How do you measure and report on growth results?", a: "We build custom dashboards tied directly to business outcomes, leads generated, revenue attributed and cost per acquisition rather than vanity metrics like page views or follower counts. Monthly reports are clear, honest and actionable." },
              { q: "Are you a B2B marketing agency for SaaS companies?", a: "Yes. SaaS marketing and B2B marketing are core specialisms. We drive demand generation, lead generation, content marketing, account-based marketing and product-led growth motions for B2B SaaS companies across the UK, UAE, India, USA and Europe." },
              { q: "Do you provide SEO services in the UK?", a: "Yes. We work as an SEO company and digital marketing agency across the UK, London, Manchester, Birmingham, Leeds, Glasgow and Liverpool. Technical SEO, on-page SEO, content strategy, link building and analytics for UK B2B businesses." },
              { q: "Are you a digital marketing agency in Dubai or the UAE?", a: "Yes. We deliver digital marketing, SEO, performance marketing, lead generation and marketing automation for Dubai and UAE businesses. AI marketing automation and enterprise marketing solutions are also available across the region." },
              { q: "Do you do performance marketing for India-based companies?", a: "Yes. Performance marketing, B2B lead generation and SaaS marketing for India-based businesses, alongside offshore marketing support for global clients. Our India team handles paid advertising, SEO and growth marketing as part of every engagement." },
              { q: "What does B2B growth marketing actually look like?", a: "B2B growth marketing is the system that turns strangers into qualified pipeline. Technical SEO, content marketing tied to buyer intent, demand generation paid campaigns, lead nurture automation and conversion rate optimisation working as one machine. Measured against revenue, not vanity metrics." },
              { q: "Do you offer marketing automation and CRM marketing automation?", a: "Yes. Marketing automation, CRM marketing automation (HubSpot, Salesforce, Customer.io), email marketing automation and sales and marketing automation workflows are part of our growth engagements. We connect your marketing stack to your CRM so the entire funnel is measurable." },
              { q: "Can you do AI-powered marketing automation?", a: "Yes. AI marketing automation, AI-powered customer acquisition systems and AI-driven marketing workflows are increasingly central to what we deliver, lead scoring, content personalisation, segmentation, automated outbound and AI-powered analytics tied to revenue." },
            ]} />
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">Ready to grow?</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              More visibility. Better conversion. Revenue you can see.
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              Book a 30-minute strategy call. We will audit your current growth, identify your biggest opportunities and show you exactly what we would do first.
            </p>
            <p className="text-xs text-white/25 mb-6">No commitment required. We respond within 4 hours.</p>
            <ModalCTA label="Book a Strategy Call" color="#10B981" glow="rgba(16,185,129,0.35)" size="lg" />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
