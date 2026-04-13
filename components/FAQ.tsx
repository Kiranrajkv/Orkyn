"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

const faqs = [
  {
    q: "How do I know Orkyn is the right fit for my business?",
    a: "We will tell you honestly if we are not. Our discovery session is designed to understand your business, your goals and your challenges before either side commits to anything. We will be straightforward about it rather than take on work we cannot deliver exceptionally.",
  },
  {
    q: "What happens if the project takes longer than expected?",
    a: "We scope every project carefully before we start so this rarely happens. But when complexity emerges, we absorb it. We do not send change request invoices for things that were always part of the problem we agreed to solve. Fixed price means fixed price.",
  },
  {
    q: "How do you handle projects that become more complex mid-build?",
    a: "We design for complexity from the start. Our discovery process is thorough precisely because we want to understand the full picture before we write a single line of code. If something genuinely changes in your business mid-project we will have an honest conversation about what that means and find the right path forward together.",
  },
  {
    q: "What does the first week actually look like?",
    a: "Day one we are in your world. The first week is entirely focused on understanding your operations, your team and your goals through structured discovery sessions. By the end of week one you will have a clear picture of exactly what we are building, why every decision was made and what the full timeline looks like.",
  },
  {
    q: "What if we are not happy with the direction?",
    a: "We offer a two-week satisfaction guarantee on every project. If you are not confident in the direction within the first two weeks we will refund you in full. No questions asked. We are only interested in working with clients who are genuinely confident in what we are building together.",
  },
  {
    q: "Do you work with our existing team or replace them?",
    a: "We work alongside your team, not instead of them. We integrate with your existing people, processes and tools from day one. Our job is to make your team more capable, not to make ourselves indispensable. Everything we build is fully documented and handed over so your team owns it completely.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Always. We treat your business information, your systems and your strategy with complete confidentiality as standard. NDAs are signed before any substantive conversation about your business begins. Your ideas and your data stay yours.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden" aria-label="Frequently asked questions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left */}
          <FadeIn direction="left">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">FAQ</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              Every question worth asking before you commit.
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8">
              Straight answers to what every serious client wants to know before they make a decision.
            </p>

            <div className="p-5 lg:p-6 rounded-2xl bg-[#F5A623]/6 border border-[#F5A623]/20">
              <p className="text-sm font-semibold text-foreground mb-2">Still not sure?</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Book a 30-minute strategy call and we will answer everything directly, honestly and without the sales pitch.
              </p>
              <Link href="#contact"
                className="inline-flex items-center justify-center h-11 px-6 rounded-full text-sm font-semibold text-white transition-all duration-300"
                style={{ background: "#0a0a0a" }}>
                Book a Strategy Call
              </Link>
            </div>
          </FadeIn>

          {/* Right */}
          <FadeIn direction="right" delay={120}>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#F5A623]/30">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-5 lg:px-6 py-4 lg:py-5 text-left gap-4"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="font-semibold text-sm leading-snug">{faq.q}</span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
                      style={{ background: open === i ? "#F5A623" : "#f3f4f6", border: `1px solid ${open === i ? "#F5A623" : "#e5e7eb"}` }}>
                      {open === i
                        ? <Minus size={11} color="white" aria-hidden="true" />
                        : <Plus size={11} className="text-muted-foreground" aria-hidden="true" />}
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-64" : "max-h-0"}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                  >
                    <p className="px-5 lg:px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
