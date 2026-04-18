"use client";
import { Check, Zap, RefreshCw, Layers } from "lucide-react";
import { FadeIn, StaggerChildren } from "@/components/FadeIn";

const plans = [
  {
    icon: Zap,
    name: "One-Month Sprint",
    price: "$4,999",
    period: "one-off",
    tag: "Fixed scope",
    tagColor: "#6366F1",
    tagline: "A clear vision. Built precisely. Delivered in four weeks.",
    description: "A focused, fixed-scope project from discovery to deployment. No retainer, no ongoing commitment and no loose ends.",
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
    customPrice: false,
  },
  {
    icon: RefreshCw,
    name: "Ongoing Partnership",
    price: "$4,499",
    period: "/month",
    tag: "Most popular",
    tagColor: "#F5A623",
    tagline: "Your engineering team. On your side. Every month.",
    description: "A dedicated team that builds, iterates and evolves your systems every month. More output than a full-time hire at a fraction of the cost.",
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
    customPrice: false,
  },
  {
    icon: Layers,
    name: "Custom Engagement",
    price: "Let's Talk",
    period: "",
    tag: "Built around you",
    tagColor: "#10B981",
    tagline: "Not every business fits a standard plan — and that is fine.",
    description: "Multiple systems, larger teams, enterprise scale or complex builds. Tell us what you are building and we will scope it properly with a fixed price.",
    features: [
      "Full discovery across all systems and teams",
      "Custom architecture and delivery plan",
      "Fixed price — scoped before we start",
      "Dedicated team for the duration",
      "Priority support and direct access",
      "Built to scale with your business",
    ],
    cta: "Tell Us What You Need",
    popular: false,
    customPrice: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#0a0a0a] overflow-hidden" aria-label="Pricing plans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center max-w-2xl mx-auto mb-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5A623] mb-4">Pricing</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            Transparent pricing. Zero surprises.
          </h2>
          <p className="text-base lg:text-lg text-white/50 leading-relaxed">
            No discovery fees, no hidden costs and no change-request games. Every engagement is fixed price, fully scoped and yours to adjust any time.
          </p>
        </FadeIn>

        <p className="text-center text-sm text-white/30 mb-10 lg:mb-14">
          No payment required until our discovery session confirms we are the right fit for each other.
        </p>

        <StaggerChildren className="grid md:grid-cols-3 gap-4 lg:gap-5 max-w-6xl mx-auto items-stretch" stagger={120}>
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className="relative flex flex-col rounded-3xl p-7 lg:p-8 transition-all duration-500 h-full"
                style={{
                  background: plan.popular
                    ? "linear-gradient(135deg, #1a1a1a 0%, #111 100%)"
                    : "rgba(255,255,255,0.04)",
                  border: plan.popular
                    ? "1px solid rgba(245,166,35,0.4)"
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: plan.popular
                    ? "0 0 0 1px rgba(245,166,35,0.15), 0 24px 80px rgba(245,166,35,0.15), inset 0 1px 0 rgba(255,255,255,0.06)"
                    : "none",

                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full text-xs font-bold text-white"
                      style={{ background: "#F5A623", boxShadow: "0 4px 16px rgba(245,166,35,0.5)" }}
                    >
                      ✦ Most Popular
                    </span>
                  </div>
                )}

                {/* Glow orb for popular */}
                {plan.popular && (
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)", transform: "translate(20%, -30%)" }}
                    aria-hidden="true"
                  />
                )}

                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: plan.tagColor + "20" }}
                  >
                    <Icon size={18} style={{ color: plan.tagColor }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-lg leading-tight text-white">{plan.name}</p>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: plan.tagColor + "20", color: plan.tagColor }}
                    >
                      {plan.tag}
                    </span>
                  </div>
                </div>

                <p className="text-sm font-semibold text-white mb-1.5 min-h-[2.5rem]">{plan.tagline}</p>
                <p className="text-sm text-white/40 leading-relaxed mb-6 min-h-[5rem]">{plan.description}</p>

                {/* Price */}
                <div className="flex items-end gap-1.5 mb-7">
                  {plan.customPrice ? (
                    <div>
                      <span className="font-display text-3xl font-black tracking-tight" style={{ color: "#10B981" }}>
                        Let&apos;s Talk
                      </span>
                      <p className="text-xs text-white/30 mt-1">Typically from $8,000</p>
                    </div>
                  ) : (
                    <>
                      <span
                        className="font-display text-4xl lg:text-5xl font-black tracking-tight"
                        style={{ color: plan.popular ? "#F5A623" : "#ffffff" }}
                      >
                        {plan.price}
                      </span>
                      <span className="text-white/40 text-sm pb-2">{plan.period}</span>
                    </>
                  )}
                </div>

                {/* Divider */}
                <div
                  className="h-px mb-6"
                  style={{ background: plan.popular ? "rgba(245,166,35,0.2)" : "rgba(255,255,255,0.08)" }}
                />

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: plan.tagColor + "20" }}
                      >
                        <Check size={11} style={{ color: plan.tagColor }} aria-hidden="true" />
                      </span>
                      <span className="text-sm text-white/60">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))}
                  className="flex items-center justify-center w-full rounded-full font-bold text-sm transition-all duration-300 mt-auto"
                  style={{
                    height: "48px",
                    background: plan.popular ? "#F5A623" : "rgba(255,255,255,0.08)",
                    color: plan.popular ? "#0a0a0a" : "#ffffff",
                    border: plan.popular ? "none" : "1px solid rgba(255,255,255,0.15)",
                    boxShadow: plan.popular ? "0 4px 20px rgba(245,166,35,0.35)" : "none",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = plan.popular
                      ? "0 0 0 4px rgba(245,166,35,0.2), 0 0 28px rgba(245,166,35,0.55)"
                      : "0 0 0 3px rgba(245,166,35,0.2), 0 0 20px rgba(245,166,35,0.3)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = plan.popular ? "0 4px 20px rgba(245,166,35,0.35)" : "none";
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </StaggerChildren>

        {/* Guarantee */}
        <FadeIn>
          <div className="mt-10 max-w-2xl mx-auto text-center p-5 lg:p-6 rounded-2xl"
            style={{ background: "rgba(245,166,35,0.06)", border: "1px solid rgba(245,166,35,0.2)" }}>
            <p className="text-sm font-semibold text-white mb-1">Two-week satisfaction guarantee</p>
            <p className="text-xs text-white/40">If you are not confident in the direction within the first two weeks, we will refund you in full. No questions asked.</p>
          </div>
          <p className="text-center text-xs text-white/25 mt-5">
            Need something more tailored?{" "}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))}
              className="text-white/50 underline underline-offset-2 hover:text-[#F5A623] transition-colors"
            >
              Let us talk about a custom engagement
            </button>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
