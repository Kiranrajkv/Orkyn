import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Orkyn Technologies" },
  description: "The page you are looking for does not exist. Explore Orkyn's custom software, ERP, SaaS and AI development services.",
  robots: { index: false, follow: true },
};

const popularLinks = [
  { label: "Systems and Development", href: "/services/systems-development" },
  { label: "Design and Experience", href: "/services/design-experience" },
  { label: "Growth and Performance", href: "/services/growth-performance" },
  { label: "Contact", href: "/#contact" },
];

export default function NotFound() {
  return (
    <main className="min-h-screen pt-24 pb-24 bg-white flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">404</p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          That page doesn&apos;t exist.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl">
          The link may be broken or the page may have moved. Here are some places you might be looking for instead.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-12">
          {popularLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between rounded-2xl border border-border bg-white px-5 py-4 text-sm font-medium hover:border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-colors"
            >
              <span>{link.label}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" aria-hidden="true" />
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] text-white px-6 py-3 text-sm font-semibold hover:bg-black/85 transition-colors"
        >
          Back to home
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
