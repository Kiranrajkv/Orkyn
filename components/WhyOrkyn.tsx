import {
  Target,
  Puzzle,
  Zap,
  Link2,
  Eye,
  TrendingUp,
} from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Business-First",
    description:
      "We start with your business, not the technology, so every solution is aligned with real goals and delivers measurable impact.",
  },
  {
    icon: Puzzle,
    title: "Custom Built Systems",
    description:
      "Nothing is off the shelf. Every system is designed to fit your workflows with precision and clarity.",
  },
  {
    icon: Zap,
    title: "Built to Scale",
    description:
      "Your systems are designed to grow with you, handling complexity without breaking or slowing down.",
  },
  {
    icon: Link2,
    title: "Seamless Integration",
    description:
      "Everything works together as one. We connect your tools, data, and processes into a unified system.",
  },
  {
    icon: Eye,
    title: "Clarity & Control",
    description:
      "You stay informed at every stage, with clear communication and complete visibility from start to finish.",
  },
  {
    icon: TrendingUp,
    title: "Long Term Value",
    description:
      "We build for longevity, supporting and evolving your systems as your business grows.",
  },
];

export function WhyOrkyn() {
  return (
    <section className="py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">
            Why Orkyn
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Built for performance. Designed for scale.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We design systems around how your business works, ensuring they are
            structured, scalable, and built to last.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group bg-white border border-border rounded-2xl p-7 hover:border-foreground/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center mb-5 group-hover:bg-[#F5A623] transition-colors duration-300">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
