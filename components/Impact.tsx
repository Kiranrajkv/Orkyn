import { Clock, Zap, Link2, TrendingUp } from "lucide-react";

const impacts = [
  {
    icon: Clock,
    title: "Less manual work",
    description:
      "Reducing repetitive processes to improve efficiency",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Zap,
    title: "Faster operations",
    description:
      "Structured workflows that help teams move quicker and work smarter",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Link2,
    title: "Connected systems",
    description:
      "All tools and data unified into one seamless system",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Built to scale",
    description:
      "Systems designed to grow with your business without limitations",
    color: "bg-emerald-50 text-emerald-600",
  },
];

export function Impact() {
  return (
    <section className="py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">
            Real Impact
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Real impact, not just features
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Systems designed to simplify operations and support long-term
            growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-border rounded-2xl p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center mb-5`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-bold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
