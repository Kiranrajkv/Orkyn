import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingBadges = [
  { label: "Design", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { label: "Build", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { label: "Grow", color: "bg-amber-50 text-amber-700 border-amber-200" },
];

const trustedLogos = [
  { name: "Apple", icon: "🍎" },
  { name: "Figma", icon: "🎨" },
  { name: "Vue", icon: "💚" },
  { name: "Salesforce", icon: "☁️" },
  { name: "Notion", icon: "📝" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#F5A623] opacity-[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500 opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 bg-[#F5A623] rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-[#C47D00] uppercase tracking-widest">
                Custom Built Solutions
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Software,{" "}
              <span className="relative">
                Applications
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C50 4 100 2 150 5C200 8 250 4 298 8"
                    stroke="#F5A623"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              &amp; Systems{" "}
              <span className="text-[#F5A623]">Designed to Scale</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-body">
              Custom built solutions tailored to your business, covering
              everything from apps and websites to ERP and Salesforce systems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button variant="brand" size="lg" className="gap-2 group" asChild>
                <Link href="#contact">
                  Start Your Project
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>

          {/* Right — floating badges */}
          <div className="relative hidden lg:flex items-center justify-center h-80">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-dashed border-border rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-44 h-44 border border-border/50 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            </div>
            {floatingBadges.map((badge, i) => {
              const positions = [
                "top-4 right-12",
                "top-1/2 -translate-y-1/2 right-0",
                "bottom-4 right-12",
              ];
              return (
                <div
                  key={badge.label}
                  className={`absolute ${positions[i]} flex items-center gap-2 px-5 py-2.5 rounded-full border font-display font-semibold text-sm ${badge.color} shadow-sm`}
                >
                  {badge.label}
                </div>
              );
            })}
          </div>
        </div>

        {/* Trusted by */}
        <div className="mt-20 pt-10 border-t border-border">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Trusted by businesses building for scale
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            {trustedLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity"
              >
                <span className="text-2xl">{logo.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
