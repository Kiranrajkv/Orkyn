import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Database, Zap, Shield, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software & ERP Development | Systems & Development",
  description: "Orkyn builds bespoke software, ERP systems, Salesforce solutions, and custom business applications for UK and global businesses. Fixed-price from $2,999. Manchester & Chennai.",
  openGraph: {
    title: "Custom Software & ERP Development | Orkyn Technologies",
    description: "Bespoke software, ERP, and Salesforce systems built to match your business. Fixed-price, on-time delivery.",
    images: [{ url: "/og-image.png" }],
  },
  alternates: { canonical: "https://orkyn.co.uk/services/systems-development" },
};

const features = [
  { icon: Code2,    title: "Custom Software",   desc: "Bespoke applications built from the ground up to fit your exact workflows — no off-the-shelf compromises." },
  { icon: Database, title: "ERP Systems",        desc: "Enterprise resource planning that unifies your operations — finance, inventory, logistics, HR — into one platform." },
  { icon: Zap,      title: "Salesforce",         desc: "CRM configuration, custom objects, automation flows, and integrations that mirror how your sales team actually works." },
  { icon: Shield,   title: "Business Systems",   desc: "Mission-critical infrastructure designed for reliability, security, and scalability from day one." },
];
const outcomes = [
  "End-to-end ownership from discovery to deployment",
  "Scalable architecture designed for your next 3 years of growth",
  "Seamless integration with your existing tools and data",
  "Ongoing support, monitoring, and continuous improvement",
  "Full documentation and internal team knowledge transfer",
  "Performance-first engineering standards throughout",
];
const process = [
  { step:"01", title:"Discovery",    desc:"We map your operations, pain points, and goals through structured stakeholder interviews — before writing a single line of code." },
  { step:"02", title:"Architecture", desc:"We design a scalable technical blueprint aligned to your business goals, not just your current requirements." },
  { step:"03", title:"Build",        desc:"Iterative development with regular demos and quality gates. You see progress weekly, not at the end." },
  { step:"04", title:"Launch",       desc:"We deploy, monitor, and support through go-live — and stay on to iterate as your team adapts." },
];

export default function SystemsDevelopmentPage() {
  return (
    <div className="pt-16">
      <section className="relative py-28 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage:"radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize:"32px 32px" }} />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-500 opacity-10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Link href="/" className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors mb-8">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Back to home
            </Link>
            <div className="inline-flex items-center gap-2 bg-indigo-500/15 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-6">
              <Code2 size={12} className="text-indigo-400" />
              <span className="text-xs font-semibold text-indigo-300 uppercase tracking-widest">Systems & Development</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Your business systems, <span className="text-indigo-400">finally working together</span>
            </h1>
            <p className="text-xl text-white/55 leading-relaxed mb-10 max-w-2xl">
              We build bespoke software, ERP systems, and Salesforce solutions that replace fragmented tools and manual processes — engineered precisely for how your business operates.
            </p>
            <Link href="/#contact"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(99,102,241,0.5)]"
              style={{ background:"#6366F1" }}>
              Start a Systems Project <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">What We Build</p>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-4">Everything your business runs on</h2>
            <p className="text-lg text-muted-foreground">From startup MVPs to enterprise-grade ERP — we engineer systems that last.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => { const Icon = f.icon; return (
              <div key={f.title} className="group p-7 rounded-2xl border border-border hover:border-indigo-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
                  <Icon size={20} className="text-indigo-600" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-4">What You Get</p>
              <h2 className="font-display text-4xl font-bold tracking-tight mb-5">What to expect when we build your system</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">We do not just deliver code. We deliver systems that make your business faster, clearer, and genuinely ready to scale.</p>
            </div>
            <ul className="space-y-3.5">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">How We Deliver</p>
            <h2 className="font-display text-4xl font-bold tracking-tight">A process built for clarity and speed</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#FAFAFA] border border-border hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                <span className="font-mono text-5xl font-black text-indigo-100 block mb-4">{p.step}</span>
                <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Ready to build something your business relies on?</h2>
          <p className="text-white/50 mb-8">Book a free 30-minute consultation. No commitment, no pressure — just a clear picture of what's possible.</p>
          <Link href="/#contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(99,102,241,0.5)]"
            style={{ background:"#6366F1" }}>
            Book free consultation <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
