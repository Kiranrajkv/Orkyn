"use client";

import { useEffect, useRef, useState } from "react";
import { Search, Pencil, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Listen",
    description: "We start by listening. Before anything is designed or built, we get complete clarity on how your business operates, where the gaps are and what success looks like for you.",
    chips: ["Discovery", "Business Analysis", "Stakeholder Interviews"],
    color: "#6366F1",
    glow: "rgba(99,102,241,0.18)",
    bg: "linear-gradient(135deg,rgba(99,102,241,0.06) 0%,rgba(99,102,241,0.02) 100%)",
    border: "rgba(99,102,241,0.28)",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Design",
    description: "Every decision is intentional. We design a system structured precisely around your operations, your goals and the scale you are building towards.",
    chips: ["System Design", "Architecture", "Prototyping"],
    color: "#F5A623",
    glow: "rgba(245,166,35,0.18)",
    bg: "linear-gradient(135deg,rgba(245,166,35,0.06) 0%,rgba(245,166,35,0.02) 100%)",
    border: "rgba(245,166,35,0.28)",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Build. Evolve.",
    description: "We build, launch and keep going. Delivery is where most agencies stop. For us it is where the real work begins.",
    chips: ["Development", "QA and Testing", "Continuous Improvement"],
    color: "#10B981",
    glow: "rgba(16,185,129,0.18)",
    bg: "linear-gradient(135deg,rgba(16,185,129,0.06) 0%,rgba(16,185,129,0.02) 100%)",
    border: "rgba(16,185,129,0.28)",
  },
];

const TOTAL = steps.length;
const SECTION_HEIGHT = "280vh"; // how much scroll space the pinned section occupies

function StepTracker({ active }: { active: number }) {
  return (
    <div className="space-y-3 lg:space-y-4">
      {steps.map((step, i) => {
        const done = i < active;
        const current = i === active;
        return (
          <div key={i} className="flex items-center gap-4">
            <div
              className="relative flex items-center justify-center flex-shrink-0 rounded-full border-2 transition-all duration-500"
              style={{
                width: 36, height: 36,
                borderColor: done || current ? step.color : "#e5e7eb",
                background: done || current ? step.color : "white",
                boxShadow: current ? `0 0 16px ${step.glow}` : "none",
              }}
            >
              {done ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <span className="text-[10px] font-bold" style={{ color: current ? "white" : "#9ca3af" }}>{i + 1}</span>
              )}
            </div>
            <div>
              <p className="text-sm font-semibold transition-colors duration-300" style={{ color: done || current ? step.color : "#9ca3af" }}>
                {step.title}
              </p>
              {current && (
                <div className="h-0.5 mt-1 rounded-full" style={{ background: step.color, width: 36, transition: "width 0.4s" }} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CardStack({ active }: { active: number }) {
  return (
    <div className="relative" style={{ minHeight: "clamp(260px, 40vw, 320px)" }}>
      {steps.map((step, i) => {
        const Icon = step.icon;
        const isActive = i === active;
        const isPast = i < active;
        const isFuture = i > active;

        let translateY = "0px";
        let scale = 1;
        let opacity = 1;

        if (isFuture) { translateY = "48px"; scale = 0.92; opacity = 0; }
        if (isPast)   { translateY = "-12px"; scale = 0.96; opacity = 0; }

        return (
          <div
            key={i}
            className="rounded-3xl border overflow-hidden w-full"
            aria-hidden={!isActive}
            style={{
              position: isActive ? "relative" : "absolute",
              inset: isActive ? "auto" : 0,
              background: isActive ? step.bg : "white",
              borderColor: isActive ? step.border : "#e5e7eb",
              boxShadow: isActive
                ? `0 24px 64px ${step.glow}, 0 0 0 1px ${step.color}22`
                : "0 2px 8px rgba(0,0,0,0.04)",
              transform: isActive ? "none" : `translateY(${translateY}) scale(${scale})`,
              opacity,
              zIndex: isActive ? 10 : 5,
              transition: "all 0.6s cubic-bezier(0.34,1.1,0.64,1)",
              pointerEvents: isActive ? "auto" : "none",
              padding: "clamp(20px, 4vw, 32px)",
            }}
          >
            <div className="flex items-start justify-between mb-4 lg:mb-6">
              <div
                className="rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500"
                style={{
                  width: 48, height: 48,
                  background: isActive ? step.color : "#f3f4f6",
                  boxShadow: isActive ? `0 8px 20px ${step.glow}` : "none",
                }}
              >
                <Icon size={20} color={isActive ? "white" : "#9ca3af"} aria-hidden="true" />
              </div>
              <span
                className="font-mono font-black tracking-tight transition-all duration-500 select-none"
                style={{ fontSize: "clamp(36px,6vw,52px)", color: isActive ? step.color + "28" : "#f3f4f6" }}
              >
                {step.step}
              </span>
            </div>

            <h3
              className="font-display font-bold mb-2 lg:mb-3 transition-colors duration-300"
              style={{ fontSize: "clamp(18px,3vw,24px)", color: isActive ? "#0a0a0a" : "#9ca3af" }}
            >
              {step.title}
            </h3>

            <p
              className="text-sm text-muted-foreground leading-relaxed mb-4"
              style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.3s 0.1s" }}
            >
              {step.description}
            </p>

            <div
              className="flex flex-wrap gap-2"
              style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.3s 0.15s" }}
            >
              {step.chips.map((chip) => (
                <span
                  key={chip}
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: step.color + "14", color: step.color }}
                >
                  {chip}
                </span>
              ))}
            </div>

            {isActive && (
              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full"
                style={{ background: `linear-gradient(90deg,transparent,${step.color},transparent)` }}
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* Single scroll-driven sticky section — same behaviour on mobile and desktop */
export function Process() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;                          // how far we've scrolled INTO the section
      const scrollable = rect.height - window.innerHeight; // total scrollable distance
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      // Map 0-1 across the three steps using equal bands
      const idx = Math.min(TOTAL - 1, Math.floor(progress * TOTAL));
      setActive(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /* Outer wrapper gives the scrollable height that "pins" the section */
    <div ref={wrapRef} className="relative bg-white" style={{ height: SECTION_HEIGHT }} aria-label="Our process">

      {/* Sticky inner — stays visible while user scrolls through SECTION_HEIGHT */}
      <div className="sticky top-0 overflow-hidden" style={{ height: "100vh" }}>
        <div className="h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ── Mobile layout: text top, card below ── */}
            <div className="flex flex-col gap-6 lg:hidden">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-3">How We Work</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                  Built around your business, not ours.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Three stages. Complete clarity at every step.
                </p>
                <StepTracker active={active} />
              </div>
              <CardStack active={active} />
            </div>

            {/* ── Desktop layout: side by side ── */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">How We Work</p>
                <h2 className="font-display text-4xl xl:text-5xl font-bold tracking-tight mb-5">
                  Built around your business, not ours.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Three stages. Complete clarity at every step. No assumptions, no surprises and nothing left to chance.
                </p>
                <StepTracker active={active} />
              </div>
              <CardStack active={active} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
