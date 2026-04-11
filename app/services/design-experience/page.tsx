import type { Metadata } from "next";
import Link from "next/link";
import { Palette, Layout, Layers, MousePointer2, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerChildren } from "@/components/FadeIn";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { ModalCTA } from "@/components/ModalCTA";


export const metadata: Metadata = {
  title: "UX and Product Design Agency | Orkyn Technologies",
  description: "Orkyn designs intuitive UX, UI and product interfaces that convert visitors, retain users and make your brand impossible to ignore. UK and India based product design agency.",
  alternates: { canonical: "https://orkyn.ai/services/design-experience" },
  openGraph: {
    title: "UX and Product Design Agency | Orkyn Technologies",
    description: "Design that makes your product the obvious choice. UX, UI and design systems built to convert, retain and represent your brand at its best.",
    images: [{ url: "/og-image.png" }],
  },
};

const features = [
  { icon: Palette,       title: "UX Design",         desc: "User research, journey mapping and wireframes that solve real problems before a single pixel is designed." },
  { icon: Layout,        title: "UI Design",          desc: "High-fidelity interfaces that are visually precise, brand-consistent and immediately intuitive for every user." },
  { icon: Layers,        title: "Design Systems",     desc: "Scalable component libraries that keep your brand coherent across every product surface, every screen and every team." },
  { icon: MousePointer2, title: "Interaction Design", desc: "Micro-interactions and motion that make every tap, click and scroll feel intentional and premium." },
];

const outcomes = [
  "Interfaces that feel intuitive from the very first interaction",
  "Consistent design language across every product touchpoint",
  "Higher conversion rates and measurably reduced user drop-off",
  "WCAG-compliant accessible designs as standard, never an afterthought",
  "Developer-ready assets and complete handoff specifications",
  "Ongoing design iteration as your product and users evolve",
];

const process = [
  { step: "01", title: "Understand", desc: "User interviews, competitive review and heuristic analysis so we understand your users and your market before making a single design decision." },
  { step: "02", title: "Structure",  desc: "Information architecture and low-fidelity wireframes that validate structure and flow before we invest in the visual detail." },
  { step: "03", title: "Design",     desc: "High-fidelity screens, design system components and complete interaction specifications. Pixel-perfect and production-ready." },
  { step: "04", title: "Refine",     desc: "User testing, feedback loops and careful iteration until the experience is not just good but genuinely exceptional." },
];

const problems = [
  "Visitors are landing on your product and leaving without converting",
  "Your design feels inconsistent across different parts of your product",
  "Users keep asking for the same things in support tickets",
  "Your brand does not look like it belongs in the market you are competing in",
];

export default function DesignExperiencePage() {
  return (
    <div className="pt-16">

      <section className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "32px 32px" }} aria-hidden="true" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 opacity-10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <FadeIn delay={0}>
              <Link href="/" className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors mb-8">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Back to home
              </Link>
            </FadeIn>
            <FadeIn delay={80}>
              <div className="inline-flex items-center gap-2 bg-purple-500/15 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
                <Palette size={12} className="text-purple-400" aria-hidden="true" />
                <span className="text-xs font-semibold text-purple-300 uppercase tracking-widest">UX and Product Design</span>
              </div>
            </FadeIn>
            <FadeIn delay={160}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                Design that makes your product<br /><span className="text-purple-400">the obvious choice.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={240}>
              <p className="text-lg lg:text-xl text-white/55 leading-relaxed mb-4 max-w-2xl">
                Most products fail not because of what they do, but because of how they feel to use. If your product is hard to navigate, inconsistent or just not compelling, users will leave and not come back.
              </p>
              <p className="text-lg lg:text-xl text-white/55 leading-relaxed mb-10 max-w-2xl">
                We design UX, UI and product experiences that are intuitive, brand-consistent and built to convert. Not beautiful for its own sake. Beautiful because it works.
              </p>
            </FadeIn>
            <FadeIn delay={320}>
              <div className="flex flex-wrap gap-4">
                <ModalCTA label="Start Your Design Project" color="#a855f7" glow="rgba(168,85,247,0.35)" size="lg" />
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
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-4">Sound familiar?</p>
              <h2 className="font-display text-2xl lg:text-3xl font-bold tracking-tight mb-3">
                Your product might be losing customers before they ever get to see what it really does.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Design problems are often invisible until you see them in the data. If any of these sound like your product right now, it is worth a conversation.
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
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-3">What We Design</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4">Beautiful is not enough. Everything we design has a job to do.</h2>
            <p className="text-lg text-muted-foreground">Every design decision is tied to a user behaviour or a business outcome. Never decoration for its own sake.</p>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch" stagger={80}>
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="group p-6 lg:p-7 rounded-2xl border border-border hover:border-purple-200 hover:shadow-lg transition-all duration-300 bg-white flex flex-col h-full">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-5 group-hover:bg-purple-100 transition-colors flex-shrink-0">
                    <Icon size={18} className="text-purple-600" aria-hidden="true" />
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
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-3">How We Work</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4">A design process built on understanding, not assumption.</h2>
            <p className="text-lg text-muted-foreground">We do not open Figma until we understand your users, your goals and the exact problem we are solving.</p>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch" stagger={100}>
            {process.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-border hover:border-purple-200 hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                <span className="font-mono text-5xl font-black text-purple-100 group-hover:text-purple-200 block mb-4 transition-colors">{p.step}</span>
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
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-4">What You Get</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-5">
                Design is not decoration. It is the difference between a product people use and one they love.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Every design project includes research, strategy and execution. You get something that works, something that converts and something that represents your brand at its absolute best.
              </p>
              <ModalCTA label="Start Your Design Project" color="#a855f7" glow="rgba(168,85,247,0.35)" size="sm" />
            </FadeIn>
            <StaggerChildren className="space-y-3" stagger={80}>
              {outcomes.map((o, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFAFA] border border-border">
                  <CheckCircle2 size={16} className="text-purple-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
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
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="p-8 rounded-3xl border border-purple-100 bg-purple-50/30">
              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <blockquote className="text-lg font-medium text-foreground leading-relaxed mb-6">
                I have worked with agencies before who promised to understand the brief and then delivered something generic. Orkyn was different from the first call. They asked questions no one had ever asked us before, and the system they built actually reflects how we run our business. It just works.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#a855f7] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">KR</div>
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
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-2">FAQ</p>
            <h2 className="font-display text-2xl font-bold tracking-tight mb-8">Common questions about UX and product design</h2>
            <ServiceFAQ accentColor="#a855f7" questions={[
              { q: "How long does a UX design project take?", a: "Most design projects run from 4 to 8 weeks depending on scope. A full product design including research, wireframes, high-fidelity screens and a design system typically takes 6 to 10 weeks. We always agree a clear timeline and deliverable set before starting." },
              { q: "What is the difference between UX and UI design?", a: "UX design focuses on how a product works, the user journey, information architecture and flow. UI design focuses on how it looks, the visual style, components and interactions. We deliver both together so the experience and the interface are designed as a single coherent system." },
              { q: "Do you create design systems?", a: "Yes. Every design project includes a scalable component library that keeps your brand consistent across every product surface. This means your engineering team can build faster and your design stays coherent as the product grows." },
              { q: "Can you improve an existing product design?", a: "Absolutely. We start with a design audit and heuristic review of your current product before making any recommendations. This identifies exactly where users are dropping off, what is causing friction and what would have the biggest positive impact on conversion and retention." },
              { q: "Do you design mobile apps?", a: "Yes. We design for web, iOS, Android and cross-platform applications. Every design is built with responsive behaviour and platform-specific interaction patterns in mind from the start." },
            ]} />
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4">Ready to design?</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              Your product deserves design that works as hard as you do.
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              Book a 30-minute strategy call. We will review your current product, identify the biggest design opportunities and show you exactly what we would do differently.
            </p>
            <p className="text-xs text-white/25 mb-6">No commitment required. We respond within 4 hours.</p>
            <ModalCTA label="Book a Strategy Call" color="#a855f7" glow="rgba(168,85,247,0.35)" size="lg" />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
