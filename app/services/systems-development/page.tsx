import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Database, Zap, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerChildren } from "@/components/FadeIn";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { ModalCTA } from "@/components/ModalCTA";


export const metadata: Metadata = {
  title: "Custom Software & Product Development Agency | Orkyn Technologies",
  description: "Orkyn builds custom software, ERP systems and Salesforce solutions engineered precisely for your business. Fixed-price. On time. No vendor lock-in. UK and India.",
  alternates: { canonical: "https://orkyn.ai/services/systems-development" },
  openGraph: {
    title: "Custom Software & Product Development | Orkyn Technologies",
    description: "Bespoke software, ERP and Salesforce built around how your business actually operates. Not templates. Not shortcuts.",
    images: [{ url: "/og-image.png" }],
  },
};

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

      {/* Testimonial */}
            {/* FAQ accordion */}
      <section className="py-16 bg-[#FAFAFA] border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-2">FAQ</p>
            <h2 className="font-display text-2xl font-bold tracking-tight mb-8">Common questions about custom software development</h2>
            <ServiceFAQ accentColor="#6366F1" questions={[
              { q: "How long does a custom software project take?", a: "Most projects are scoped and delivered within 4 to 12 weeks depending on complexity. Our One-Month Sprint is a fixed 4-week engagement. Larger ERP or Salesforce implementations typically take 8 to 16 weeks. We always agree a clear timeline before starting." },
              { q: "How much does custom software development cost in the UK?", a: "Our One-Month Sprint starts at $4,999 as a fixed one-off fee. Ongoing development partnerships start at $4,499 per month. Every project is fixed-price with no surprise invoices and no change request fees for work within the agreed scope." },
              { q: "Do you build ERP systems for small businesses?", a: "Yes. We build ERP systems for businesses of all sizes. Whether you are a 10-person team needing your first integrated system or an established business replacing a legacy ERP, we scope the right solution for where you are now and where you are going." },
              { q: "Can you integrate with our existing tools and software?", a: "Integrations are a core part of what we do. We connect your existing tools whether that is an accounting platform, CRM, warehouse system or anything else into a single coherent system so your data flows freely between them." },
              { q: "Do you offer Salesforce development services in the UK?", a: "Yes. We design, build and configure Salesforce solutions including custom objects, automation flows, integrations and full CRM implementations. Everything is engineered around how your sales team actually works, not how Salesforce expects you to work." },
            ]} />
          </FadeIn>
        </div>
      </section>

      {/* FAQ for SEO */}
      

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
