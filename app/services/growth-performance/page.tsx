import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO, CRO and Growth Performance Agency",
  description: "Orkyn drives measurable growth through technical SEO, conversion rate optimisation and analytics focused entirely on revenue, not vanity metrics. Manchester UK and Chennai India.",
  alternates: { canonical: "https://orkyn.co.uk/services/growth-performance" },
  openGraph: {
    title: "SEO, CRO and Growth Performance | Orkyn Technologies",
    description: "Your next customer is searching right now. Make sure they find you. SEO, CRO and analytics built around real revenue growth.",
    images: [{ url: "/og-image.png" }],
  },
};

import Link from "next/link";
import { TrendingUp, Search, BarChart3, Target, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  { icon: Search,    title: "SEO & Visibility",     desc: "Technical SEO, content strategy, and authority building to dominate search and drive organic growth." },
  { icon: TrendingUp, title: "Performance Optimisation", desc: "Page speed, Core Web Vitals, and conversion rate optimisation that turns traffic into revenue." },
  { icon: Target,    title: "Growth Strategy",      desc: "Data-driven growth experiments, funnel analysis, and acquisition channel development." },
  { icon: BarChart3, title: "Analytics & Insights", desc: "Custom dashboards, tracking setup, and actionable reporting so you always know what is working." },
];

const outcomes = [
  "Higher organic rankings and sustainable traffic growth",
  "Improved conversion rates across every channel",
  "Clear attribution of what drives real revenue",
  "Reduced cost per acquisition over time",
  "Data infrastructure that supports smarter decisions",
  "Monthly reporting with clear, actionable insights",
];

const process = [
  { step: "01", title: "Audit",     desc: "Full-stack growth audit — SEO, performance, analytics, and conversion — to find your biggest opportunities." },
  { step: "02", title: "Strategy",  desc: "A prioritised roadmap of high-impact initiatives, built around your goals and your market." },
  { step: "03", title: "Execute",   desc: "We implement, test, and optimise — running experiments that compound results month over month." },
  { step: "04", title: "Report",    desc: "Clear monthly reporting tied to business outcomes — not vanity metrics." },
];

export default function GrowthPerformancePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-28 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500 opacity-10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Link href="/" className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors mb-8">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Back to home
            </Link>
            <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
              <TrendingUp size={12} className="text-emerald-400" />
              <span className="text-xs font-semibold text-emerald-300 uppercase tracking-widest">Growth & Performance</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Growth that is <span className="text-emerald-400">measurable</span> and built to last
            </h1>
            <p className="text-xl text-white/50 leading-relaxed mb-10 max-w-2xl">
              We drive measurable growth by improving visibility, optimising performance, and leveraging data to scale your business strategically.
            </p>
            <Link href="/#contact"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(16,185,129,0.5)]"
              style={{ background: "#10B981" }}>
              Start Growing <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">What We Do</p>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-4">Growth that compounds month after month</h2>
            <p className="text-lg text-muted-foreground">We find the levers that move the needle — and pull them consistently.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="group p-7 rounded-2xl border border-border hover:border-emerald-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                    <Icon size={20} className="text-emerald-600" />
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
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Outcomes</p>
              <h2 className="font-display text-4xl font-bold tracking-tight mb-6">What results look like when growth is done right</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Growth without strategy is just noise. We build systems that create compounding, sustainable results.</p>
            </div>
            <ul className="space-y-4">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
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
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">How We Work</p>
            <h2 className="font-display text-4xl font-bold tracking-tight">Our growth process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#FAFAFA] border border-border">
                <span className="font-mono text-5xl font-black text-emerald-100 block mb-4">{p.step}</span>
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
          <h2 className="font-display text-4xl font-bold text-white mb-4">Ready to accelerate your growth?</h2>
          <p className="text-white/50 mb-8">Let us identify your biggest growth opportunities and start moving the needle.</p>
          <Link href="/#contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(16,185,129,0.5)]"
            style={{ background: "#10B981" }}>
            Let us grow together <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
