import { X, Check } from "lucide-react";

const before = [
  "Limited scalability",
  "Scattered data",
  "Manual workflow",
  "Disconnected systems",
];

const after = [
  "Unified systems",
  "Automated workflows",
  "Scalable systems",
  "Centralised data",
];

export function Transformation() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">
            The Orkyn Effect
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            From fragmented systems to structured scale
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We replace fragmented systems and manual processes with structured,
            scalable solutions built for clarity and growth.
          </p>
        </div>

        {/* Before / After */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Before */}
          <div className="relative bg-[#FAFAFA] border border-border rounded-2xl p-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                <X size={12} className="text-red-500" />
              </div>
              <span className="font-display font-bold text-lg">Before</span>
            </div>
            <ul className="space-y-3">
              {before.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full border-2 border-red-200 flex items-center justify-center flex-shrink-0">
                    <X size={10} className="text-red-400" />
                  </span>
                  <span className="text-muted-foreground text-sm font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            {/* Dashed overlay effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-border pointer-events-none" />
          </div>

          {/* After */}
          <div className="relative bg-foreground border border-foreground rounded-2xl p-8 text-white">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-[#F5A623] flex items-center justify-center">
                <Check size={12} className="text-black" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                After
              </span>
            </div>
            <ul className="space-y-3">
              {after.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#F5A623]/20 border border-[#F5A623]/40 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-[#F5A623]" />
                  </span>
                  <span className="text-white/80 text-sm font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
