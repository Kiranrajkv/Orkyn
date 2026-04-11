"use client";
import { useState } from "react";
import { FadeIn, StaggerChildren } from "@/components/FadeIn";

const befores = [
  "Guessing instead of knowing",
  "Multiple tools. No connection.",
  "Hours lost. Every single week.",
  "Growth that breaks everything.",
];
const afters = [
  "Decisions backed by real data",
  "One system. Total connection.",
  "Hours back. Every single week.",
  "Growth that strengthens everything.",
];
const stats = [
  { value: "3x", label: "Faster operations" },
  { value: "80%", label: "Less manual work" },
  { value: "100%", label: "Data visibility" },
  { value: "1", label: "System that does it all" },
];

export function Transformation() {
  const [hb, setHb] = useState<number | null>(null);
  const [ha, setHa] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0a] text-white relative overflow-hidden" aria-label="Before and after Orkyn">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "32px 32px" }} aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] lg:w-[800px] h-[300px] lg:h-[400px] bg-[#F5A623] opacity-[0.06] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5A623] mb-4">Before and After Orkyn</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 text-white">
            Everything changes when your systems work the way they should.
          </h2>
          <p className="text-white/55 text-base lg:text-lg leading-relaxed">
            When the right system replaces the ones holding you back, every part of your business feels it. Here is what that looks like in practice.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr,64px,1fr] gap-6 lg:gap-4 items-start mb-12 lg:mb-16">

          {/* Before */}
          <FadeIn direction="left">
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">Before Orkyn</span>
              </div>
              {befores.map((item, i) => (
                <div key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl border cursor-default transition-all duration-300"
                  style={{ borderColor: hb === i ? "rgba(239,68,68,0.4)" : "rgba(255,255,255,0.06)", background: hb === i ? "rgba(239,68,68,0.06)" : "rgba(255,255,255,0.02)" }}
                  onMouseEnter={() => setHb(i)} onMouseLeave={() => setHb(null)}>
                  <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M2 2l4 4M6 2l-4 4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <p className="font-semibold text-sm text-white/55 line-through decoration-red-500/50">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Arrow */}
          <div className="hidden lg:flex flex-col items-center justify-center h-full gap-3 py-8">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
            <div className="w-10 h-10 rounded-full border border-[#F5A623]/40 flex items-center justify-center bg-[#F5A623]/10 flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          </div>

          {/* After */}
          <FadeIn direction="right" delay={150}>
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#F5A623]" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#F5A623]">After Orkyn</span>
              </div>
              {afters.map((item, i) => (
                <div key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl border cursor-default transition-all duration-300"
                  style={{ borderColor: ha === i ? "rgba(245,166,35,0.5)" : "rgba(255,255,255,0.08)", background: ha === i ? "rgba(245,166,35,0.08)" : "rgba(255,255,255,0.03)", boxShadow: ha === i ? "0 0 24px rgba(245,166,35,0.12)" : "none" }}
                  onMouseEnter={() => setHa(i)} onMouseLeave={() => setHa(null)}>
                  <span className="w-5 h-5 rounded-full bg-[#F5A623]/15 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 4L3 6L7 2" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <p className="font-semibold text-sm text-white">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Stats */}
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4" stagger={80}>
          {stats.map((s) => (
            <div key={s.value} className="text-center py-5 lg:py-6 px-4 rounded-2xl border border-white/8 bg-white/3 hover:border-[#F5A623]/30 hover:bg-[#F5A623]/5 transition-all duration-300 cursor-default">
              <p className="font-display text-3xl lg:text-4xl font-black text-[#F5A623] mb-1">{s.value}</p>
              <p className="text-xs text-white/40 font-medium">{s.label}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
