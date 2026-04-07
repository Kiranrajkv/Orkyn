import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UX UI Design and Product Design Agency",
  description: "Orkyn creates intuitive UX, UI and design systems that convert visitors, retain customers and make your brand impossible to ignore. Premium design from Manchester UK and Chennai India.",
  alternates: { canonical: "https://orkyn.co.uk/services/design-experience" },
  openGraph: {
    title: "UX UI Design and Product Design | Orkyn Technologies",
    description: "Interfaces your users will actually love. UX, UI and design systems built to convert, retain and represent your brand at its best.",
    images: [{ url: "/og-image.png" }],
  },
};

import Link from "next/link";
import { Palette, Layout, Layers, MousePointer2, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  { icon: Palette,      title: "UX/UI Design",       desc: "User-centred interfaces that reduce friction, increase engagement, and convert visitors into customers." },
  { icon: Layout,       title: "Product Design",      desc: "End-to-end product design — from wireframes and flows to pixel-perfect, production-ready screens." },
  { icon: Layers,       title: "Design Systems",      desc: "Scalable, consistent component libraries that keep your brand coherent across every touchpoint." },
  { icon: MousePointer2, title: "Interaction Design", desc: "Purposeful micro-interactions and motion that make every tap, click, and scroll feel premium." },
];

const outcomes = [
  "Interfaces that feel intuitive from the first interaction",
  "Consistent design language across every product surface",
  "Reduced user drop-off and increased task completion",
  "Accessible, WCAG-compliant designs as standard",
  "Handoff-ready assets and developer specifications",
  "Ongoing design iteration aligned to user feedback",
];

const process = [
  { step: "01", title: "Research",   desc: "User interviews, competitive analysis, and heuristic review to uncover what really needs solving." },
  { step: "02", title: "Wireframes", desc: "Low-fidelity flows and information architecture to validate structure before we invest in detail." },
  { step: "03", title: "Design",     desc: "High-fidelity screens, design system components, and interaction specs — ready for engineering." },
  { step: "04", title: "Iterate",    desc: "User testing, feedback loops, and refinement until the experience is truly exceptional." },
];

export default function DesignExperiencePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-28 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Link href="/" className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors mb-8">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Back to home
            </Link>
            <div className="inline-flex items-center gap-2 bg-purple-500/15 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
              <Palette size={12} className="text-purple-400" />
              <span className="text-xs font-semibold text-purple-300 uppercase tracking-widest">Design & Experience</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Design that <span className="text-purple-400">moves people</span> and drives results
            </h1>
            <p className="text-xl text-white/50 leading-relaxed mb-10 max-w-2xl">
              We create intuitive, user-focused experiences that make your products simple, effective, and genuinely enjoyable to use.
            </p>
            <Link href="/#contact"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(168,85,247,0.5)]"
              style={{ background: "#a855f7" }}>
              Start a Design Project <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-500 mb-3">What We Design</p>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-4">Design that solves real problems</h2>
            <p className="text-lg text-muted-foreground">Beautiful is not enough — everything we design has purpose.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="group p-7 rounded-2xl border border-border hover:border-purple-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center mb-5 group-hover:bg-purple-100 transition-colors">
                    <Icon size={20} className="text-purple-600" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-500 mb-4">Outcomes</p>
              <h2 className="font-display text-4xl font-bold tracking-tight mb-6">What great design delivers for your business</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Design is not decoration — it is the difference between a product people use and one they love.</p>
            </div>
            <ul className="space-y-4">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-500 mb-3">How We Work</p>
            <h2 className="font-display text-4xl font-bold tracking-tight">Our design process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#FAFAFA] border border-border">
                <span className="font-mono text-5xl font-black text-purple-100 block mb-4">{p.step}</span>
                <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Ready to elevate your product experience?</h2>
          <p className="text-white/50 mb-8">Let us design something your users will actually love using.</p>
          <Link href="/#contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(168,85,247,0.5)]"
            style={{ background: "#a855f7" }}>
            Start designing <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
