import Link from "next/link";
import { ArrowRight, Search, Pencil, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Understand",
    description:
      "We get clarity on how your business operates and where systems are slowing you down.",
    tags: ["Discovery", "Business Analysis"],
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Design",
    description:
      "We design a system around your business, structured for performance and scale.",
    tags: ["System Design", "Architecture"],
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Build & Evolve",
    description:
      "We build, launch, and continuously refine your system as your business grows.",
    tags: ["Development", "Continuous Improvement"],
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

export function Process() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">
              Our Process
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Systems that actually work
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most systems create complexity. Ours remove it, bringing
              structure, clarity, and scalability to how your business operates.
            </p>
          </div>

          {/* Right — steps */}
          <div className="space-y-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group flex gap-5 bg-[#FAFAFA] border border-border rounded-2xl p-6 hover:border-foreground/20 hover:shadow-sm transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon size={20} className={step.color} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-muted-foreground/50 font-mono">
                        {step.step}
                      </span>
                      <h3 className="font-display font-bold text-lg">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-white border border-border text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold mt-3 text-foreground hover:gap-2 transition-all"
                    >
                      Learn more <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
