import Link from "next/link";
import { ArrowRight, Code2, Palette, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Systems & Development",
    description:
      "We build the core systems your business relies on, designed for performance, scalability, and long-term growth.",
    tags: [
      "Custom Softwares",
      "Applications",
      "ERP",
      "Salesforce",
      "Business Systems",
    ],
    accent: "bg-blue-50 text-blue-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    border: "hover:border-blue-200",
  },
  {
    icon: Palette,
    title: "Design & Experience",
    description:
      "We create intuitive, user-focused experiences that make your products simple, effective, and easy to use.",
    tags: ["UX/UI Design", "Product Design", "Design Systems", "Interaction Design"],
    accent: "bg-purple-50 text-purple-600",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    border: "hover:border-purple-200",
  },
  {
    icon: TrendingUp,
    title: "Growth & Performance",
    description:
      "We drive measurable growth by improving visibility, optimising performance, and leveraging data to scale your business.",
    tags: ["SEO", "Performance", "Conversion", "Growth", "Analytics"],
    accent: "bg-emerald-50 text-emerald-600",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    border: "hover:border-emerald-200",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Softwares, Systems &amp; Digital Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We design and develop software, applications, ERP, and digital
            solutions that simplify operations, improve efficiency, and help your
            business scale with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group bg-white border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${service.border} cursor-pointer`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-6`}
                >
                  <Icon size={22} className={service.iconColor} />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-3 py-1 rounded-full ${service.accent}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn more */}
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:gap-3 transition-all duration-200"
                >
                  Learn more
                  <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
