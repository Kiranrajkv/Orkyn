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
    glow: "rgba(99,102,241,0.2)",
    bg: "linear-gradient(135deg,rgba(99,102,241,0.05) 0%,rgba(99,102,241,0.02) 100%)",
    border: "rgba(99,102,241,0.25)",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Design",
    description: "Every decision is intentional. We design a system structured precisely around your operations, your goals and the scale you are building towards.",
    chips: ["System Design", "Architecture", "Prototyping"],
    color: "#F5A623",
    glow: "rgba(245,166,35,0.2)",
    bg: "linear-gradient(135deg,rgba(245,166,35,0.05) 0%,rgba(245,166,35,0.02) 100%)",
    border: "rgba(245,166,35,0.25)",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Build. Evolve.",
    description: "We build, launch and keep going. Delivery is where most agencies stop. For us it is where the real work begins.",
    chips: ["Development", "QA and Testing", "Continuous Improvement"],
    color: "#10B981",
    glow: "rgba(16,185,129,0.2)",
    bg: "linear-gradient(135deg,rgba(16,185,129,0.05) 0%,rgba(16,185,129,0.02) 100%)",
    border: "rgba(16,185,129,0.25)",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = rect.height - window.innerHeight;
      const prog = Math.max(0, Math.min(1, scrolled / total));
      setProgress(prog);
      setActiveCard(Math.min(steps.length - 1, Math.floor(prog * steps.length)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-white" style={{ height: "280vh" }} aria-label="Our process">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-10 lg:py-16">

            {/* Left */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">How We Work</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
                Built around your business, not ours.
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10">
                Three stages. Complete clarity at every step. No assumptions, no surprises and nothing left to chance.
              </p>

              <div className="space-y-4">
                {steps.map((step, i) => {
                  const done = i < activeCard;
                  const current = i === activeCard;
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className="relative w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all duration-500"
                        style={{ borderColor: done || current ? step.color : "#e5e7eb", background: done || current ? step.color : "white", boxShadow: current ? `0 0 18px ${step.glow}` : "none" }}>
                        {done ? (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <span className="text-[10px] font-bold" style={{ color: current ? "white" : "#9ca3af" }}>{i + 1}</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold transition-all duration-300" style={{ color: done || current ? step.color : "#9ca3af" }}>
                          {step.title}
                        </p>
                        {current && (
                          <div className="h-0.5 mt-1 rounded-full transition-all duration-700" style={{ background: step.color, width: "40px" }} />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right — stacked cards */}
            <div className="relative h-72 lg:h-80">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i === activeCard;
                const isPast = i < activeCard;
                const isFuture = i > activeCard;
                const translateY = isPast ? `${(i - activeCard) * 10}px` : isFuture ? "40px" : "0px";
                const scale = isPast ? Math.max(0.9, 0.97 - (activeCard - i) * 0.04) : isFuture ? 0.92 : 1;
                const opacity = isFuture ? 0 : isPast ? 0 : 1;
                const zIndex = steps.length * 10 - Math.abs(i - activeCard) * 5;

                return (
                  <div key={i}
                    className="absolute inset-0 rounded-3xl p-7 lg:p-8 border"
                    style={{
                      transform: `translateY(${translateY}) scale(${scale})`,
                      opacity,
                      zIndex,
                      background: isActive ? step.bg : "white",
                      borderColor: isActive ? step.border : "#e5e7eb",
                      boxShadow: isActive ? `0 32px 80px ${step.glow},0 0 0 1px ${step.color}20` : "0 2px 8px rgba(0,0,0,0.04)",
                      transition: "all 0.65s cubic-bezier(0.34,1.1,0.64,1)",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    aria-hidden={!isActive}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500"
                        style={{ background: isActive ? step.color : "#f3f4f6", boxShadow: isActive ? `0 8px 24px ${step.glow}` : "none" }}>
                        <Icon size={20} color={isActive ? "white" : "#9ca3af"} aria-hidden="true" />
                      </div>
                      <span className="font-mono text-5xl font-black tracking-tight transition-all duration-500"
                        style={{ color: isActive ? step.color + "25" : "#f3f4f6" }}>
                        {step.step}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl lg:text-2xl mb-3 transition-all duration-300"
                      style={{ color: isActive ? "#0a0a0a" : "#9ca3af" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5"
                      style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.3s" }}>
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2" style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.3s" }}>
                      {step.chips.map((chip) => (
                        <span key={chip} className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{ background: step.color + "12", color: step.color }}>
                          {chip}
                        </span>
                      ))}
                    </div>
                    {isActive && (
                      <div className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full"
                        style={{ background: `linear-gradient(90deg,transparent,${step.color},transparent)` }} aria-hidden="true" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
