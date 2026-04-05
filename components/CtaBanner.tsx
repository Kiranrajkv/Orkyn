import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-foreground rounded-3xl px-8 py-16 sm:px-16 overflow-hidden">
          {/* Decorative orb */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F5A623] opacity-10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                Ready to build a{" "}
                <span className="text-[#F5A623]">scalable solution?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Let&apos;s talk about your business, your challenges, and how we
                can build systems that actually work.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button variant="brand" size="lg" className="gap-2 group" asChild>
                <Link href="#contact">
                  Start Your Project
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
