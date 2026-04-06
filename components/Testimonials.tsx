"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Orkyn replaced three disconnected tools with a single custom system. Our team saves 15+ hours a week, and we finally have a real-time view of our entire operation.",
    author: "Sarah Mitchell",
    role: "COO",
    company: "Apex Logistics",
    avatar: "SM",
    color: "#6366F1",
    rating: 5,
  },
  {
    quote: "We'd tried two agencies before Orkyn. The difference? They actually understood our business before writing a single line of code. The ERP they built has scaled with us through 3x growth.",
    author: "James Okafor",
    role: "Founder & CEO",
    company: "TrueScale Commerce",
    avatar: "JO",
    color: "#F5A623",
    rating: 5,
  },
  {
    quote: "The Salesforce overhaul Orkyn delivered transformed how our sales team works. Pipeline visibility, automated follow-ups, and a system that actually mirrors how we sell. Outstanding.",
    author: "Priya Nair",
    role: "VP of Sales",
    company: "Meridian SaaS",
    avatar: "PN",
    color: "#10B981",
    rating: 5,
  },
  {
    quote: "From the first discovery call to the final handover, Orkyn were transparent, fast, and genuinely invested in our success. Fixed price, on time, no surprises. Rare in this industry.",
    author: "David Chen",
    role: "Head of Technology",
    company: "BrightPath Capital",
    avatar: "DC",
    color: "#EC4899",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="py-28 bg-[#0a0a0a] text-white relative overflow-hidden" aria-label="Client testimonials">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage:"radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize:"32px 32px" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5A623] mb-4">Client Stories</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Don't take our word for it
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl border p-10 sm:p-14 transition-all duration-500"
            style={{
              borderColor: `${t.color}30`,
              background: `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)`,
              boxShadow: `0 0 80px ${t.color}15, inset 0 1px 0 rgba(255,255,255,0.06)`,
            }}>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={16} className="fill-[#F5A623] text-[#F5A623]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl sm:text-2xl font-medium text-white/90 leading-relaxed mb-8 relative">
              <span className="absolute -top-2 -left-2 text-6xl text-[#F5A623]/20 font-serif leading-none">"</span>
              {t.quote}
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold border-2"
                  style={{ background: t.color, borderColor: `${t.color}60` }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-sm text-white/50">{t.role}, {t.company}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button onClick={prev}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-200 hover:bg-white/5">
                  <ChevronLeft size={18} />
                </button>
                <div className="flex gap-1.5">
                  {testimonials.map((_,i) => (
                    <button key={i} onClick={() => setCurrent(i)}
                      className="rounded-full transition-all duration-300"
                      style={{ width: i===current ? "20px" : "6px", height:"6px",
                        background: i===current ? t.color : "rgba(255,255,255,0.2)" }} />
                  ))}
                </div>
                <button onClick={next}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-200 hover:bg-white/5">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom summary stats */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
          {[
            { value: "40+", label: "Projects delivered" },
            { value: "4.9★", label: "Average client rating" },
            { value: "100%", label: "On-time delivery rate" },
            { value: "3+", label: "Years in business" },
          ].map((s, i) => (
            <div key={i} className="bg-[#0a0a0a] py-7 px-6 text-center hover:bg-white/3 transition-colors">
              <p className="font-display text-3xl font-black text-[#F5A623] mb-1">{s.value}</p>
              <p className="text-xs text-white/40 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
