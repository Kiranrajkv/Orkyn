"use client";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 lg:py-24 bg-white" aria-label="Call to action">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#0a0a0a] rounded-3xl px-7 py-14 sm:px-12 sm:py-16 lg:px-16 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 lg:w-96 lg:h-96 bg-[#F5A623] opacity-10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 lg:w-64 lg:h-64 bg-indigo-500 opacity-10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F5A623] mb-4">Ready to build?</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
                The right system starts with the right conversation.
              </h2>
              <p className="text-white/55 text-base lg:text-lg leading-relaxed">
                Book a 30-minute strategy call and we will listen to exactly what your business needs, show you what is possible and give you a clear picture of what working together looks like.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 flex-shrink-0">
              <Link href="#contact"
                className="relative inline-flex items-center gap-2 rounded-full font-bold text-sm text-white px-7 lg:px-8 overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(255,255,255,0.2)]"
                style={{ height: "48px", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.15)" }}>
                <Calendar size={15} aria-hidden="true" />
                <span>Book a Strategy Call</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <p className="text-xs text-white/30 text-center">No commitment required. We respond within 4 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
