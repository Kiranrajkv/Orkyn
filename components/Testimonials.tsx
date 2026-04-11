"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const testimonials = [
  {
    quote: "Before Orkyn, we were running our entire operation across four different tools that barely talked to each other. They came in, understood exactly how we worked, and built us one system that replaced all of it. The time we have saved every week has genuinely changed how our team operates.",
    author: "Asif Kabir",
    role: "Co-founder",
    company: "Virlo",
    avatar: "AK",
    color: "#6366F1",
    rating: 5,
  },
  {
    quote: "I have worked with agencies before who promised to understand the brief and then delivered something generic. Orkyn was different from the first call. They asked questions no one had ever asked us before, and the system they built actually reflects how we run our business. It just works.",
    author: "Krishna",
    role: "CEO",
    company: "Support Studio",
    avatar: "KR",
    color: "#F5A623",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-label="Client testimonials">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "32px 32px" }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <FadeIn className="text-center max-w-xl mx-auto mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5A623] mb-4">Client Stories</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Don&apos;t take our word for it
          </h2>
        </FadeIn>

        <FadeIn delay={100} className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl border p-8 sm:p-12 transition-all duration-500"
            style={{
              borderColor: `${t.color}30`,
              background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
              boxShadow: `0 0 80px ${t.color}12, inset 0 1px 0 rgba(255,255,255,0.06)`,
            }}>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={15} className="fill-[#F5A623] text-[#F5A623]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg sm:text-xl font-medium text-foreground/88 leading-relaxed mb-8 relative">
              <span className="absolute -top-1 -left-1 text-5xl text-[#F5A623]/15 font-serif leading-none" aria-hidden="true">&ldquo;</span>
              {t.quote}
            </blockquote>

            {/* Author + navigation */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-foreground text-sm font-bold border-2 flex-shrink-0"
                  style={{ background: t.color, borderColor: `${t.color}50` }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200 hover:bg-black/5">
                  <ChevronLeft size={16} />
                </button>
                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className="rounded-full transition-all duration-300"
                      style={{ width: i === current ? "20px" : "6px", height: "6px", background: i === current ? t.color : "rgba(255,255,255,0.2)" }} />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200 hover:bg-black/5">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={200} className="mt-12 grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden max-w-xl mx-auto">
          {[
            { value: "4.9★", label: "Average client rating" },
            { value: "100%", label: "On-time delivery rate" },
          ].map((s, i) => (
            <div key={i} className="bg-white py-6 px-6 text-center hover:bg-[#FAFAFA] transition-colors">
              <p className="font-display text-3xl font-black text-[#F5A623] mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground font-medium">{s.label}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
