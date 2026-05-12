import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Database, Zap, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerChildren } from "@/components/FadeIn";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { ModalCTA } from "@/components/ModalCTA";
import { buildServiceSchema, buildBreadcrumbSchema, jsonLdScript, SITE_URL } from "@/lib/seo/jsonld";


export const metadata: Metadata = {
  title: { absolute: "Custom Software & ERP Development Company | Orkyn" },
  description:
    "Custom software, ERP, SaaS, AI and Salesforce development. Business automation and systems integration. UK, UAE, India, USA, Europe.",
  alternates: { canonical: "https://orkyn.ai/services/systems-development" },
  keywords: [
    "custom software development company",
    "ERP software development company",
    "ERP solutions company",
    "ERP implementation company",
    "Salesforce development company",
    "CRM development company",
    "SaaS development company",
    "SaaS product development services",
    "AI software development company",
    "AI-powered software solutions",
    "business automation company",
    "business process automation services",
    "workflow automation company",
    "digital transformation company",
    "enterprise software development company",
    "enterprise software solutions provider",
    "enterprise application development",
    "systems integration company",
    "API integration services company",
    "web application development company",
    "mobile app development company",
    "cloud software company",
    "software consulting company",
    "software engineering company",
    "software modernisation services",
    "legacy system modernisation company",
    "B2B software development company",
    "offshore software development company",
    "software outsourcing company",
    "software development company UK",
    "software development company London",
    "software development company Manchester",
    "ERP software company UK",
    "Salesforce consultants UK",
    "SaaS development company UK",
    "AI software development company UK",
    "software development company Dubai",
    "ERP solutions provider Dubai",
    "custom software company UAE",
    "SaaS company Dubai",
    "Salesforce partner Dubai",
    "AI software company UAE",
    "ERP software company UAE",
    "business automation company Dubai",
    "software development company India",
    "ERP software company India",
    "offshore software development India",
    "custom CRM software company India",
    "Salesforce development India",
    "SaaS development services India",
    "AI development company India",
    "enterprise application development India",
    "custom ERP software for growing businesses",
    "ERP systems for scaling companies",
    "replace spreadsheets with custom software",
    "scalable SaaS application development",
    "integrated business management systems",
    "software development company Sheffield",
    "software development company Bristol",
    "software development company Edinburgh",
    "software development company Cambridge",
    "software development company Newcastle",
    "software development company Belfast",
    "software development company Cardiff",
    "software development company Ajman",
    "software development company Ras Al Khaimah",
    "software development company Noida",
    "software development company Gurgaon",
    "software development company Ahmedabad",
    "software development company Kolkata",
    "software development company Kochi",
    "software development company New York",
    "software development company San Francisco",
    "software development company Los Angeles",
    "software development company Boston",
    "software development company Austin",
    "software development company Seattle",
    "software development company Toronto",
    "software development company Sydney",
    "software development company Singapore",
    "software development company Dublin",
    "MVP development services",
    "POC development services",
    "discovery sprint software development",
    "tech audit services",
    "code review service",
    "software architecture consulting",
    "fractional CTO services",
    "outsourced engineering team",
    "rescue project software development",
    "legacy system replacement services",
    "Salesforce Lightning developer",
    "Salesforce Apex developer",
    "Salesforce Service Cloud implementation",
    "Salesforce Marketing Cloud consultant",
    "Salesforce Sales Cloud implementation",
    "Salesforce CPQ implementation",
    "Salesforce consulting partner UK",
    "Salesforce consulting partner India",
    "HubSpot integration services",
    "Shopify development services",
    "Stripe integration developer",
    "QuickBooks integration developer",
    "Xero integration developer",
    "Zapier development services",
    "Make.com automation developer",
    "AWS migration services",
    "Azure consulting services",
    "GCP architecture consulting",
    "Kubernetes consulting",
    "serverless development services",
    "Microsoft Dynamics 365 consultant",
    "NetSuite implementation partner",
    "SAP integration services",
    "Acumatica implementation partner",
    "Odoo implementation partner",
    "ERPNext consulting",
    "alternative to SAP",
    "alternative to Oracle ERP",
    "alternative to Salesforce",
    "alternative to HubSpot",
    "switch from QuickBooks",
    "migrate from Excel to ERP",
    "software for CTO",
    "ERP for CFO",
    "operations tools for COO",
    "software for founders",
    "software for product managers",
    "software for startups",
    "ERP for SMBs",
    "software for scale-ups",
    "software for Series A startups",
    "enterprise software solutions",
    "MVP for SaaS startup",
    "ERP for manufacturing",
    "ERP for logistics",
    "ERP for retail",
    "ERP for healthcare",
    "ERP for fintech",
    "ERP for eCommerce",
    "ERP for construction",
    "SaaS for B2B",
    "SaaS for fintech",
    "SaaS for healthcare",
    "SaaS for marketplaces",
    "AI software for finance",
    "AI software for healthcare",
    "AI software for retail",
    "AI software for logistics",
    "CRM for professional services",
    "CRM for B2B sales teams",
    "fixed price software development guarantee",
    "two-week refund software development",
    "offshore software development from India",
    "remote-first software agency",
    "EdTech software development",
    "PropTech development partner",
    "LegalTech software development",
    "InsurTech development partner",
    "FoodTech software development",
    "HealthTech development",
    "AgriTech software development",
    "GovTech development partner",
    "automotive software development",
    "hospitality software development",
  ],
  openGraph: {
    type: "website",
    title: "Custom Software & ERP Development Company | Orkyn",
    description:
      "Custom software, ERP, SaaS, AI, CRM, Salesforce and business automation built around how your business operates. UK, UAE, India, USA, Europe.",
    images: [{ url: "/og-image.svg" }],
  },
};

const PAGE_URL = `${SITE_URL}/services/systems-development`;

const serviceSchema = buildServiceSchema({
  name: "Custom Software, ERP, SaaS, AI and Salesforce Development",
  description:
    "Custom software development, ERP systems, SaaS product development, AI software, CRM and Salesforce development, business process automation, workflow automation, digital transformation, systems integration, web and mobile app development. Serving SMEs and enterprises across the UK, UAE, India, USA and Europe.",
  url: PAGE_URL,
  serviceType: [
    "Custom Software Development",
    "ERP Development",
    "ERP Implementation",
    "SaaS Product Development",
    "AI Software Development",
    "CRM Development",
    "Salesforce Development",
    "Salesforce Implementation",
    "Business Process Automation",
    "Workflow Automation",
    "Digital Transformation",
    "Systems Integration",
    "Enterprise Software Development",
    "Web Application Development",
    "Mobile App Development",
    "Cloud Software Development",
    "Software Modernisation",
    "Legacy System Modernisation",
    "API Integration",
  ],
  keywords:
    "custom software development company, software development company, ERP solutions company, SaaS development company, AI software development company, Salesforce development company, CRM development company, business automation company, workflow automation company, digital transformation company, enterprise software solutions provider, systems integration company, web application development company, mobile app development company, cloud software company, software engineering company, software consulting company, software outsourcing company, offshore software development company, B2B software development company",
});

const erpServiceSchema = buildServiceSchema({
  id: `${PAGE_URL}#service-erp`,
  name: "Custom ERP Development and Implementation",
  description:
    "Custom ERP development, ERP implementation, ERP migration and ERP integration services. Finance, inventory, logistics, sales and operations unified into one platform for SMEs and scaling enterprises across the UK, UAE, India, USA and Europe.",
  url: PAGE_URL,
  serviceType: [
    "ERP Development",
    "ERP Implementation",
    "ERP Migration",
    "ERP Integration",
    "Cloud ERP Development",
    "Enterprise Resource Planning",
  ],
  keywords:
    "ERP solutions company, ERP software development company, ERP implementation company, ERP software service provider, ERP integration services company, ERP migration and transformation services, custom ERP development, custom ERP software for growing businesses, ERP for small business, affordable ERP software company, ERP systems for scaling companies, ERP systems for multi-location businesses, cloud ERP software company, ERP consulting and implementation services, ERP and CRM solutions provider, AI-powered ERP solutions provider UAE, ERP software company UK, ERP software company India, ERP software company UAE, ERP solutions provider Dubai, ERP transformation company Dubai",
});

const saasServiceSchema = buildServiceSchema({
  id: `${PAGE_URL}#service-saas`,
  name: "SaaS Product Development",
  description:
    "End-to-end SaaS product development including multi-tenant architecture, subscription billing, onboarding flows, admin tooling and product engineering for B2B and B2C SaaS companies across the UK, UAE, India, USA and Europe.",
  url: PAGE_URL,
  serviceType: [
    "SaaS Product Development",
    "Multi-tenant SaaS Development",
    "SaaS MVP Development",
    "B2B SaaS Development",
    "SaaS Engineering",
    "Scalable SaaS Architecture",
  ],
  keywords:
    "SaaS development company, SaaS product development services, custom SaaS product development, scalable SaaS application development, scalable SaaS software company, SaaS platform engineering company, enterprise SaaS solutions provider, B2B SaaS development, SaaS MVP development, multi-tenant SaaS, SaaS architecture, SaaS development UK, SaaS development USA, SaaS development India, SaaS company Dubai, SaaS development company UAE, offshore SaaS product development India, custom SaaS development company India, offshore SaaS engineering India, SaaS engineering services UK",
});

const aiServiceSchema = buildServiceSchema({
  id: `${PAGE_URL}#service-ai`,
  name: "AI Software Development",
  description:
    "Custom AI software development, LLM-powered applications, AI agents, AI workflow automation and integration of AI capabilities into existing business systems. Production-grade AI engineered into operations, not just demos. UK, UAE, India, USA and Europe.",
  url: PAGE_URL,
  serviceType: [
    "AI Software Development",
    "LLM Application Development",
    "AI Agent Development",
    "AI Workflow Automation",
    "AI Integration Services",
    "Intelligent Automation",
  ],
  keywords:
    "AI software development company, AI-powered software solutions company, AI automation, AI software development services, custom AI software, AI integration services, LLM development, AI agent development, intelligent automation software company, intelligent business systems company, AI-driven software solutions company, AI-enhanced business automation systems, AI-driven operational efficiency systems, AI-powered operational systems, smart workflow management solutions, AI workflow automation company, AI-driven business growth company, AI software UK, AI software company UAE, AI software company Dubai, AI development company India",
});

const crmServiceSchema = buildServiceSchema({
  id: `${PAGE_URL}#service-crm`,
  name: "CRM and Salesforce Development",
  description:
    "Salesforce implementation, Salesforce custom development with Apex and Lightning, Salesforce integrations and custom CRM software development for businesses across the UK, UAE, India, USA and Europe.",
  url: PAGE_URL,
  serviceType: [
    "CRM Development",
    "Salesforce Development",
    "Salesforce Implementation",
    "Salesforce Custom Development",
    "Salesforce Integration",
    "Custom CRM Development",
  ],
  keywords:
    "CRM software development, CRM development company, Salesforce implementation, Salesforce implementation company, Salesforce development company, Salesforce development agency, custom CRM software developers, custom CRM development, Salesforce integration, Salesforce consulting, Salesforce CRM implementation company, CRM integration and automation company, ERP and CRM solutions provider, Salesforce consultants UK, Salesforce partner Dubai, Salesforce development India, CRM development UK, CRM development India, Salesforce UAE, Salesforce Dubai",
});

const salesforceBrandServiceSchema = buildServiceSchema({
  id: `${PAGE_URL}#service-salesforce-brand`,
  name: "Salesforce Lightning, Apex and Cloud-Specific Development",
  description:
    "Salesforce Lightning Web Component development, Apex development, Salesforce Sales Cloud, Service Cloud, Marketing Cloud and CPQ implementations. Certified Salesforce consulting partner work for businesses across the UK, UAE, India, USA, Australia, Canada and Europe.",
  url: PAGE_URL,
  serviceType: [
    "Salesforce Lightning Development",
    "Salesforce Apex Development",
    "Salesforce Sales Cloud Implementation",
    "Salesforce Service Cloud Implementation",
    "Salesforce Marketing Cloud Implementation",
    "Salesforce CPQ Implementation",
    "Salesforce Consulting Partner",
  ],
  keywords:
    "Salesforce Lightning developer, Salesforce Apex developer, Salesforce Lightning Web Components developer, Salesforce Sales Cloud implementation, Salesforce Service Cloud consultant, Salesforce Marketing Cloud consultant, Salesforce CPQ implementation, Salesforce consulting partner UK, Salesforce consulting partner India, Salesforce partner Dubai, Salesforce partner UAE, certified Salesforce developer, Salesforce admin services, Salesforce Flow developer, Salesforce Pardot consultant, Salesforce field service implementation, Salesforce experience cloud",
});

const cloudIntegrationServiceSchema = buildServiceSchema({
  id: `${PAGE_URL}#service-cloud-integration`,
  name: "Cloud Platform Migration and Integration",
  description:
    "AWS migration, Azure consulting, GCP architecture, Kubernetes engineering, serverless development and integration services for HubSpot, Shopify, Stripe, QuickBooks, Xero, Zapier and Make.com. Cloud-native engineering for businesses across the UK, UAE, India, USA and Europe.",
  url: PAGE_URL,
  serviceType: [
    "AWS Migration",
    "Azure Consulting",
    "GCP Architecture",
    "Cloud Migration",
    "Kubernetes Consulting",
    "Serverless Development",
    "API Integration",
    "Third-Party Platform Integration",
  ],
  keywords:
    "AWS migration services, AWS consulting partner, Azure consulting services, Azure migration, GCP architecture consulting, Google Cloud consulting, cloud migration services, Kubernetes consulting, serverless development, HubSpot integration services, HubSpot CRM integration, Shopify development services, Shopify Plus development, Stripe integration developer, payment integration services, QuickBooks integration, Xero integration, Zapier development services, Make.com automation developer, n8n workflow developer, API integration services UK, API integration company India, API integration company UAE",
});

const erpBrandsServiceSchema = buildServiceSchema({
  id: `${PAGE_URL}#service-erp-brands`,
  name: "Microsoft Dynamics, NetSuite, Odoo and Major ERP Brand Implementation",
  description:
    "Implementation, integration and customisation for Microsoft Dynamics 365, NetSuite, SAP, Acumatica, Odoo and ERPNext. Vendor-neutral ERP advisory followed by hands-on delivery for businesses across the UK, UAE, India, USA and Europe.",
  url: PAGE_URL,
  serviceType: [
    "Microsoft Dynamics 365 Consulting",
    "NetSuite Implementation",
    "SAP Integration",
    "Acumatica Implementation",
    "Odoo Implementation",
    "ERPNext Consulting",
    "ERP Brand Migration",
  ],
  keywords:
    "Microsoft Dynamics 365 consultant, Microsoft Dynamics implementation partner, NetSuite implementation partner, NetSuite consultant UK, NetSuite consultant India, SAP integration services, SAP B1 implementation, Acumatica partner, Acumatica implementation partner, Odoo implementation partner, Odoo consultant UK, Odoo consultant India, ERPNext consulting, alternative to SAP, alternative to Oracle ERP, alternative to NetSuite, switch from QuickBooks to ERP, migrate from Excel to ERP, replace legacy ERP, ERP comparison consulting, vendor-neutral ERP advisory",
});

const automationServiceSchema = buildServiceSchema({
  id: `${PAGE_URL}#service-automation`,
  name: "Business Process Automation and Workflow Automation",
  description:
    "Custom business process automation, workflow automation and operational efficiency software development. Replace manual workflows and spreadsheets with reliable automated systems across the UK, UAE, India, USA and Europe.",
  url: PAGE_URL,
  serviceType: [
    "Business Process Automation",
    "Workflow Automation",
    "Process Orchestration",
    "Operational Efficiency Software",
    "AI Workflow Automation",
    "Business Process Management",
  ],
  keywords:
    "business automation services, business process automation, workflow automation, business automation company, operational workflow automation solutions, business process management software company, process automation services, automation software company, operational efficiency software, advanced workflow automation systems, business workflow software company, workflow management software company, AI workflow automation company, automation-first software company, automation systems for modern businesses, smart workflow management solutions, replace spreadsheets with custom software, business workflow automation for growing companies, business automation UK, workflow automation UAE, business automation company Dubai, process automation India",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: SITE_URL },
  { name: "Services", url: `${SITE_URL}/#services` },
  { name: "Systems and Development", url: PAGE_URL },
]);

const features = [
  { icon: Code2,    title: "Custom Software",       desc: "Built from scratch around your exact workflows. No off-the-shelf compromises, no bloat and no features you will never use." },
  { icon: Database, title: "ERP Systems",            desc: "One platform that connects your finance, inventory, logistics and operations so your team works from a single source of truth." },
  { icon: Zap,      title: "Salesforce Development", desc: "CRM that mirrors how your team actually sells. Custom objects, automations and integrations built precisely around your pipeline." },
  { icon: Shield,   title: "Systems Integration",    desc: "Your existing tools connected and working together. One source of truth across every team, tool and process." },
];

const outcomes = [
  "A system built for how you operate today and designed to grow with you",
  "Full ownership of your codebase with zero vendor lock-in",
  "Seamless integration with your existing tools and data",
  "Complete handover documentation and team knowledge transfer",
  "Post-launch support and continuous improvement built into every engagement",
  "Fixed price agreed before a single line of code is written",
];

const process = [
  { step: "01", title: "Discovery",         desc: "We spend the first week inside your business. Stakeholder interviews, process mapping and systems audit so we understand the full picture before designing anything." },
  { step: "02", title: "Architecture",      desc: "A complete technical blueprint built around your goals and your growth trajectory. Every decision is intentional and explained to you before we build." },
  { step: "03", title: "Build",             desc: "Iterative sprint cycles with weekly demos. You see real progress throughout rather than a finished product at the end with no input along the way." },
  { step: "04", title: "Launch and Evolve", desc: "We deploy, monitor and stay on through go-live. Delivery is where most agencies stop. For us it is where the real work begins." },
];

const problems = [
  "Your team is copying data between tools every single day",
  "Your current system cannot keep up with how fast you are growing",
  "You have outgrown your off-the-shelf software but feel stuck with it",
  "Your operations run on spreadsheets and manual processes",
];

export default function SystemsDevelopmentPage() {
  return (
    <div className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(serviceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(erpServiceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(saasServiceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(aiServiceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(crmServiceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(salesforceBrandServiceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(cloudIntegrationServiceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(erpBrandsServiceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(automationServiceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema)} />

      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "32px 32px" }} aria-hidden="true" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500 opacity-10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <FadeIn delay={0}>
              <Link href="/" className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors mb-8">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Back to home
              </Link>
            </FadeIn>
            <FadeIn delay={80}>
              <div className="inline-flex items-center gap-2 bg-indigo-500/15 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-6">
                <Code2 size={12} className="text-indigo-400" aria-hidden="true" />
                <span className="text-xs font-semibold text-indigo-300 uppercase tracking-widest">Systems and Product Development</span>
              </div>
            </FadeIn>
            <FadeIn delay={160}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                Software built for your business.<br />
                <span className="text-indigo-400">Not adapted from a template.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={240}>
              <p className="text-lg lg:text-xl text-white/55 leading-relaxed mb-4 max-w-2xl">
                Most businesses are running on systems that were never built for them. Generic tools that slow your team down, fragment your data and break every time you try to grow.
              </p>
              <p className="text-lg lg:text-xl text-white/55 leading-relaxed mb-10 max-w-2xl">
                We build custom software, ERP systems and Salesforce solutions engineered precisely around how your business operates. Built once. Built right. Yours completely.
              </p>
            </FadeIn>
            <FadeIn delay={320}>
              <div className="flex flex-wrap gap-4">
                <ModalCTA label="Start Your Project" color="#6366F1" glow="rgba(99,102,241,0.35)" size="lg" />
                <Link href="#process"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full font-semibold text-sm text-white/70 border border-white/15 hover:border-white/30 hover:text-white transition-all duration-300">
                  See how it works
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Problem hook */}
      <section className="py-16 bg-[#FAFAFA] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn direction="left">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-4">Sound familiar?</p>
              <h2 className="font-display text-2xl lg:text-3xl font-bold tracking-tight mb-3">
                The system you have is holding you back from the growth you want.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These are the problems every growing business hits when their tools stop keeping up. If any of these feel familiar, you are in the right place.
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

      {/* What we build */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3">What We Build</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Every system your business runs on, built precisely for it.
            </h2>
            <p className="text-lg text-muted-foreground">From startup MVPs to enterprise ERP, we engineer systems that fit your exact operations and scale with your growth.</p>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch" stagger={80}>
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="group p-6 lg:p-7 rounded-2xl border border-border hover:border-indigo-200 hover:shadow-lg transition-all duration-300 bg-white flex flex-col h-full">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors flex-shrink-0">
                    <Icon size={18} className="text-indigo-600" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-base lg:text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3">How We Deliver</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4">Four stages. Complete clarity at every step.</h2>
            <p className="text-lg text-muted-foreground">No assumptions. No surprises. Nothing left to chance.</p>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch" stagger={100}>
            {process.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-border hover:border-indigo-200 hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                <span className="font-mono text-5xl font-black text-indigo-100 group-hover:text-indigo-200 block mb-4 transition-colors">{p.step}</span>
                <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-4">What You Get</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-5">
                We do not just deliver code. We deliver a system your business actually relies on.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Every project includes everything you need to launch confidently, own your system completely and keep improving it as your business grows.
              </p>
              <ModalCTA label="Start Your Project" color="#6366F1" glow="rgba(99,102,241,0.35)" size="sm" />
            </FadeIn>
            <StaggerChildren className="space-y-3" stagger={80}>
              {outcomes.map((o, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFAFA] border border-border">
                  <CheckCircle2 size={16} className="text-indigo-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-foreground font-medium leading-relaxed">{o}</span>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>


      {/* Related services. internal linking for SEO */}
      <section className="py-16 bg-[#FAFAFA] border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-6">Related Services</p>
            <div className="grid sm:grid-cols-2 gap-4">
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
              <Link href="/services/growth-performance"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-white hover:border-emerald-200 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Growth and Performance Marketing</p>
                  <p className="text-xs text-muted-foreground mt-0.5">More visibility, better conversion, real revenue</p>
                </div>
                <ArrowRight size={14} className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAFA] border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-2">FAQ</p>
            <h2 className="font-display text-2xl font-bold tracking-tight mb-8">Common questions about custom software development</h2>
            <ServiceFAQ accentColor="#6366F1" questions={[
              { q: "How long does a custom software project take?", a: "Most projects are scoped and delivered within 4 to 12 weeks depending on complexity. Our One-Month Sprint is a fixed 4-week engagement. Larger ERP, SaaS or Salesforce implementations typically take 8 to 16 weeks. We always agree a clear timeline before starting." },
              { q: "How much does custom software development cost?", a: "Our One-Month Sprint starts at $4,999 as a fixed one-off fee. Ongoing development partnerships start at $4,499 per month. Every project is fixed-price with no surprise invoices and no change request fees for work within the agreed scope." },
              { q: "Do you build ERP systems for small businesses?", a: "Yes. We build custom ERP software for growing businesses of all sizes. Whether you are a 10-person team needing your first integrated system or an established business replacing a legacy ERP, we scope the right solution for where you are now and where you are going." },
              { q: "Do you offer ERP software development in the UK?", a: "Yes. We deliver ERP software development, ERP implementation and ERP integration services across the United Kingdom, including London, Manchester, Birmingham and Leeds. UK businesses get an ERP system built around how they actually operate, not generic templates." },
              { q: "Are you an ERP solutions provider in Dubai or the UAE?", a: "Yes. We deliver ERP solutions, ERP implementation and AI-powered ERP for UAE businesses including Dubai and Abu Dhabi. Engagements are remote-first with on-site discovery and user training when needed." },
              { q: "Do you do offshore software development from India?", a: "Yes. We run a dedicated software development team in India delivering custom software, SaaS product development, enterprise application development and offshore Salesforce development. Our India office serves clients globally with the same fixed-price model." },
              { q: "Do you build SaaS products for UAE, UK or India businesses?", a: "Yes. We build B2B SaaS products end-to-end, multi-tenant architecture, subscription billing, onboarding, admin tooling and the boring operational engineering that determines whether a SaaS scales. Available as a SaaS development company across UAE, UK, India, USA and Europe." },
              { q: "Are you an AI software development company?", a: "Yes. We build production AI software, LLM-powered applications, AI agents, AI workflow automation and AI integrations into existing systems. Claude, GPT and open-source models. AI engineered to work in production, not just demos." },
              { q: "Do you offer Salesforce development and CRM implementation?", a: "Yes. We design, build and configure Salesforce including custom objects, Apex, Lightning Web Components, automation flows and full CRM implementations. We also build custom CRM software when Salesforce is genuinely the wrong tool for your sales process." },
              { q: "Can you handle digital transformation and software modernisation?", a: "Yes. Digital transformation, legacy system modernisation and replatforming are core engagements. We migrate businesses off spreadsheets, off legacy ERPs and off outgrown SaaS into modern systems engineered around current operations and future growth." },
              { q: "What about business process automation and workflow automation?", a: "Business process automation, workflow automation and operational efficiency software are part of every engagement where they help. We replace manual processes, automate multi-step business workflows and orchestrate data across CRM, ERP and your bespoke internal systems." },
              { q: "Can you integrate with our existing tools and software?", a: "Integrations are a core part of what we do. API integration services, ERP integration, CRM integration, marketing automation integration and bespoke systems integration. Your data flows freely between every tool your business runs on." },
            ]} />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">Ready to build?</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              The right system starts with the right conversation.
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              Book a 30-minute strategy call. We will listen to exactly what your business needs and give you a clear picture of what we would build and why.
            </p>
            <p className="text-xs text-white/25 mb-6">No commitment required. We respond within 4 hours.</p>
            <ModalCTA label="Book a Strategy Call" color="#6366F1" glow="rgba(99,102,241,0.35)" size="lg" />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
