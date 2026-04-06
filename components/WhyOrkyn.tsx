import { Target, Puzzle, Zap, Link2, Eye, TrendingUp } from "lucide-react";

const pillars = [
  { icon: Target,     title: "Your business before everything else.",  description: "Every engagement starts with how you operate, what you need and where you are going. The technology is always chosen last." },
  { icon: Puzzle,     title: "Built from scratch. Every time.",         description: "Generic solutions create generic results. Every system we design is built around your exact workflows with nothing borrowed from a template." },
  { icon: Zap,        title: "Designed for where you are going.",       description: "We build for your next stage of growth, not just your current one. Your systems get stronger as your business scales." },
  { icon: Link2,      title: "Everything connected. Nothing siloed.",   description: "Your tools, your data and your processes working together in one coherent system so nothing falls through the gaps." },
  { icon: Eye,        title: "No surprises. Ever.",                     description: "Fixed pricing, clear timelines and honest communication from the first conversation to the final delivery." },
  { icon: TrendingUp, title: "We stay until it is right.",              description: "We do not build and disappear. We iterate, improve and evolve your systems for as long as your business needs us." },
];

export function WhyOrkyn() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFA]" aria-label="Why choose Orkyn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">Why Orkyn</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            The standard we hold ourselves to.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Six principles that shape every project, every conversation and every system we build.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title}
                className="group bg-white border border-border rounded-2xl p-7 hover:border-[#F5A623]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] flex items-center justify-center mb-5 group-hover:bg-[#F5A623] transition-colors duration-300 flex-shrink-0">
                  <Icon size={18} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-base lg:text-lg mb-2 leading-snug">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
