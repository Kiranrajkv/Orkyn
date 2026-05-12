"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface ServiceFAQProps {
  questions: FAQItem[];
  accentColor?: string;
}

export function ServiceFAQ({ questions, accentColor = "#6366F1" }: ServiceFAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {questions.map((item, i) => (
        <div
          key={i}
          className="border border-border rounded-2xl overflow-hidden bg-white transition-all duration-200"
          style={{ borderColor: open === i ? accentColor + "40" : undefined }}
        >
          <button
            type="button"
            className="w-full flex items-center justify-between px-5 py-4 lg:py-5 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`sfaq-answer-${i}`}
          >
            <span className="font-semibold text-sm leading-snug pr-2">{item.q}</span>
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: open === i ? accentColor : "#f3f4f6",
                border: `1px solid ${open === i ? accentColor : "#e5e7eb"}`,
              }}
            >
              {open === i
                ? <Minus size={11} color="white" aria-hidden="true" />
                : <Plus size={11} color="#9ca3af" aria-hidden="true" />}
            </span>
          </button>
          <div
            id={`sfaq-answer-${i}`}
            className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-72" : "max-h-0"}`}
            role="region"
          >
            <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
