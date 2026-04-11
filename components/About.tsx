import { MapPin, Clock, Award } from "lucide-react";
import { FadeIn, StaggerChildren } from "@/components/FadeIn";

const stats = [
  { icon: MapPin,  value: "2",        label: "Global offices" },
  { icon: Clock,   value: "Same-day", label: "Response time" },
  { icon: Award,   value: "100%",     label: "On-time delivery" },
];

const values = [
  { num: "01", title: "Your business first. The technology follows.", desc: "Every engagement starts with your operations, your bottlenecks and your goals. The right technology is chosen around that, not the other way round." },
  { num: "02", title: "Systems that stay yours and grow with you.",   desc: "Custom-built around your workflows, your systems scale as your business does and give you complete ownership from day one." },
  { num: "03", title: "You always know exactly where you stand.",     desc: "Fixed pricing, clear timelines and no hidden costs from the first conversation to the final delivery and everything in between." },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white" aria-label="About Orkyn Technologies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-24 lg:mb-32">
          <FadeIn direction="left">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">Our Story</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Engineering the systems businesses actually deserve.
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-5">
              A team of engineers, designers and strategists based in the UK and India, working with ambitious businesses who are ready to replace generic tools with custom systems built precisely for how they operate.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Every project we take on is a long-term commitment. We do not just deliver and disappear. We build, learn and evolve your systems alongside your business.
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={150}>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label}
                    className="p-5 lg:p-7 rounded-2xl border border-border bg-[#FAFAFA] hover:border-[#F5A623]/30 hover:shadow-md transition-all duration-300 group text-center">
                    <div className="w-9 h-9 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-[#F5A623]/20 transition-colors">
                      <Icon size={16} className="text-[#C47D00]" aria-hidden="true" />
                    </div>
                    <p className="font-display text-2xl lg:text-3xl font-black tracking-tight mb-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground font-medium leading-tight">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>

        <div className="border-t border-border pt-16 lg:pt-24">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-10">How We Think</p>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" stagger={100}>
            {values.map((v) => (
              <div key={v.num}>
                <div className="w-8 h-8 rounded-full bg-[#F5A623] flex items-center justify-center text-white text-xs font-bold mb-4 flex-shrink-0">
                  {v.num}
                </div>
                <h3 className="font-display font-bold text-lg mb-3 leading-snug">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
