"use client";
import Link from "next/link";
import { ArrowRight, Code2, Palette, TrendingUp } from "lucide-react";
import { FadeIn, StaggerChildren } from "@/components/FadeIn";

const services = [
  {
    icon: Code2,
    slug: "systems-development",
    category: "Systems and Product Development",
    headline: "Built for your business from the ground up. No templates. No shortcuts.",
    description: "Custom software, ERP and Salesforce engineered precisely for how you operate today, and strong enough to carry you through what comes next.",
    chips: ["Scales with you", "No vendor lock-in", "Built from scratch"],
    color: "#6466FA",
    glow: "rgba(100,102,250,0.2)",
    iconBg: "#6466FA15",
    cta: "Explore Systems",
    href: "/services/systems-development",
  },
  {
    icon: Palette,
    slug: "design-experience",
    category: "UX and Product Design",
    headline: "Design that makes your product the obvious choice.",
    description: "UX, UI and design systems built to convert visitors, retain customers and make your brand impossible to ignore.",
    chips: ["Converts visitors", "Retains users", "Looks world-class"],
    color: "#a855f7",
    glow: "rgba(168,85,247,0.2)",
    iconBg: "#a855f715",
    cta: "Explore Design",
    href: "/services/design-experience",
  },
  {
    icon: TrendingUp,
    slug: "growth-performance",
    category: "Growth and Performance Marketing",
    headline: "Your next customer is searching right now. Make sure they find you.",
    description: "SEO, CRO and analytics focused entirely on bringing in revenue, not producing reports that sit unread in someone's inbox.",
    chips: ["More organic traffic", "Higher conversion", "Growth you can see"],
    color: "#10B981",
    glow: "rgba(16,185,129,0.2)",
    iconBg: "#10B98115",
    cta: "Explore Growth",
    href: "/services/growth-performance",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAFAFA]" aria-label="Orkyn services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">Our Services</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            One team. Everything built to work together.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When your systems, design and growth strategy come from the same team, nothing gets lost in translation and everything moves faster.
          </p>
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6" stagger={100}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.slug} href={service.href}
                className="group bg-white border border-border rounded-2xl p-7 lg:p-8 transition-all duration-300 cursor-pointer flex flex-col h-full"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${service.glow}, 0 4px 20px rgba(0,0,0,0.06)`; (e.currentTarget as HTMLElement).style.borderColor = service.color + "40"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = ""; }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{ background: service.iconBg }}>
                  <Icon size={20} style={{ color: service.color }} />
                </div>

                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: service.color + "99" }}>
                  {service.category}
                </p>
                <h3 className="font-display text-lg lg:text-xl font-bold mb-3 leading-snug">{service.headline}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {service.chips.map((chip) => (
                    <span key={chip} className="text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300"
                      style={{ background: service.color + "12", color: service.color }}>
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:gap-3 transition-all duration-200 mt-auto pt-2">
                  {service.cta} <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
