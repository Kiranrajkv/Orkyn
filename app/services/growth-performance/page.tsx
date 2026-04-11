import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, Search, BarChart3, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerChildren } from "@/components/FadeIn";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { ModalCTA } from "@/components/ModalCTA";


export const metadata: Metadata = {
  title: "SEO, CRO and Growth Performance Marketing Agency | Orkyn Technologies",
  description: "Orkyn drives measurable revenue growth through technical SEO, conversion rate optimisation and performance marketing. No vanity metrics. Real results. UK and India.",
  alternates: { canonical: "https://orkyn.ai/services/growth-performance" },
  openGraph: {
    title: "SEO, CRO and Growth Performance Marketing | Orkyn Technologies",
    description: "Your next customer is searching right now. Make sure they find you. SEO, CRO and performance marketing built around real revenue growth.",
    images: [{ url: "/og-image.png" }],
  },
};

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
              { q: "What is conversion rate optimisation?", a: "CRO is the process of improving the percentage of visitors who take a desired action on your site, filling in a form, clicking a CTA or making a purchase. We identify where users are dropping off and systematically test and improve those points." },
              { q: "How much does SEO cost for a UK business?", a: "Our Ongoing Partnership starts at $4,499 per month and includes full-stack SEO, CRO and analytics. This is significantly less than hiring a single in-house digital marketing manager and covers everything from technical audits to content strategy and reporting." },
              { q: "Do you do paid advertising as well as SEO?", a: "Yes. We manage paid search and paid social campaigns alongside organic SEO. Combining both channels means we can drive immediate traffic while the organic strategy builds. All campaigns are optimised for revenue, not clicks or impressions." },
              { q: "How do you measure and report on growth results?", a: "We build custom dashboards tied directly to business outcomes including leads generated, revenue attributed and cost per acquisition rather than vanity metrics like page views or follower counts. Monthly reports are clear, honest and actionable." },
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
