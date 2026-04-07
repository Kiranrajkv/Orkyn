"use client";
import Link from "next/link";
import { Check, Zap, RefreshCw } from "lucide-react";

const plans = [
  {
    icon: Zap,
    name: "One-Month Sprint",
    price: "$4,999",
    period: "one-off",
    tag: "Fixed scope",
    tagColor: "#6366F1",
    tagline: "You have a clear vision. We will build it precisely.",
    description: "A focused, fixed-scope project from discovery to deployment in four weeks. No retainer, no ongoing commitment and no loose ends.",
    features: [
      "Full discovery and requirements session",
      "System design and architecture",
      "Build, test and deploy within 4 weeks",
      "One revision round included",
      "Full handover documentation",
      "Two weeks of post-launch support",
    ],
    cta: "Start Your Sprint",
    popular: false,
    borderColor: "rgba(99,102,241,0.2)",
    glowColor: "rgba(99,102,241,0.04)",
  },
  {
    icon: RefreshCw,
    name: "Ongoing Partnership",
    price: "$4,499",
    period: "/month",
    tag: "Most popular",
    tagColor: "#F5A623",
    tagline: "A senior engineering team. On your side. Every month.",
    description: "Continuous development, support and evolution for businesses that need to keep moving. More output for less than a single mid-level hire.",
    features: [
      "Everything in the One-Month Sprint",
      "Dedicated monthly sprint cycle",
      "Unlimited revisions and iterations",
      "Priority support and same-day response",
      "Quarterly strategy and roadmap reviews",
      "Cancel any time with no lock-in",
    ],
    cta: "Start Your Partnership",
    popular: true,
    borderColor: "rgba(245,166,35,0.35)",
    glowColor: "rgba(245,166,35,0.05)",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#FAFAFA]" aria-label="Pricing plans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">Pricing</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Transparent pricing. Zero surprises.
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            No discovery fees, no hidden costs and no change-request games. Every engagement is fixed price, fully scoped and yours to adjust any time.
          </p>
        </div>

        <p className="text-center text-sm text-muted-foreground mb-10 lg:mb-12">
          No payment required until our discovery session confirms we are the right fit for each other.
        </p>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div key={plan.name}
                className="relative rounded-3xl border p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white"
                style={{ borderColor: plan.borderColor, boxShadow: plan.popular ? `0 8px 40px ${plan.glowColor},0 0 0 1px rgba(245,166,35,0.1)` : "0 4px 20px rgba(0,0,0,0.04)" }}>

                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: "#F5A623", boxShadow: "0 4px 14px rgba(245,166,35,0.4)" }}>
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: plan.tagColor + "15" }}>
                    <Icon size={18} style={{ color: plan.tagColor }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-lg leading-tight">{plan.name}</p>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: plan.tagColor + "12", color: plan.tagColor }}>{plan.tag}</span>
                  </div>
                </div>

                <p className="text-sm font-semibold text-foreground mb-2">{plan.tagline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{plan.description}</p>

                <div className="flex items-end gap-1.5 mb-7">
                  <span className="font-display text-4xl lg:text-5xl font-black tracking-tight">{plan.price}</span>
                  <span className="text-muted-foreground text-sm pb-2">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: plan.tagColor + "15" }}>
                        <Check size={11} style={{ color: plan.tagColor }} aria-hidden="true" />
                      </span>
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link href="#contact"
                  className="flex items-center justify-center w-full rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{ height: "48px", background: plan.popular ? "#F5A623" : "#0a0a0a", boxShadow: plan.popular ? "0 4px 20px rgba(245,166,35,0.3)" : "0 4px 12px rgba(0,0,0,0.15)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = plan.popular ? "0 0 28px rgba(245,166,35,0.55)" : "0 0 24px rgba(0,0,0,0.25)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = plan.popular ? "0 4px 20px rgba(245,166,35,0.3)" : "0 4px 12px rgba(0,0,0,0.15)"; }}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-8 max-w-2xl mx-auto text-center p-5 lg:p-6 rounded-2xl border border-[#F5A623]/20 bg-[#F5A623]/4">
          <p className="text-sm font-semibold mb-1">Two-week satisfaction guarantee</p>
          <p className="text-xs text-muted-foreground">If you are not confident in the direction within the first two weeks, we will refund you in full. No questions asked.</p>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-5">
          Need something more tailored?{" "}
          <Link href="#contact" className="text-foreground underline underline-offset-2 hover:text-[#C47D00] transition-colors">
            Let us talk about a custom engagement
          </Link>
        </p>
      </div>
    </section>
  );
}
