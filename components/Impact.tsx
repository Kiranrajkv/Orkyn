import { Clock, Zap, Link2, Shield } from "lucide-react";
import { FadeIn, StaggerChildren } from "@/components/FadeIn";

const impacts = [
  { icon: Clock,  metric: "15+ hours",     title: "Back in your team's hands every week.",        description: "Automated workflows replace the manual work that was quietly consuming your most valuable resource." },
  { icon: Zap,    metric: "3x faster",     title: "What used to take days now takes minutes.",     description: "Approvals, reporting and data sync that once took days happen in seconds across your entire operation." },
  { icon: Link2,  metric: "100% connected", title: "Every tool talking to every other.",           description: "Your data flows freely across every system. No more spreadsheets emailed between teams or decisions made on incomplete information." },
  { icon: Shield, metric: "Zero rebuilds", title: "Built to handle whatever comes next.",          description: "Systems engineered for where your business is going, not just where it is today. Strong enough to carry you through every next stage." },
];

export function Impact() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFA] overflow-hidden" aria-label="Real results from Orkyn systems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">Real Results</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Outcomes that show up where it matters.
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            Four things that change immediately when your systems are built the right way.
          </p>
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch" stagger={100}>
          {impacts.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title}
                className="group bg-white border border-border rounded-2xl p-6 lg:p-7 hover:shadow-lg hover:border-[#F5A623]/30 transition-all duration-300 flex flex-col h-full">
                <div className="w-11 h-11 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mb-5 group-hover:bg-[#F5A623]/20 transition-colors flex-shrink-0">
                  <Icon size={20} className="text-[#C47D00]" aria-hidden="true" />
                </div>
                <div className="text-xs font-bold text-[#F5A623] mb-2 uppercase tracking-wide">{item.metric}</div>
                <h3 className="font-display font-bold text-base mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
