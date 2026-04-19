"use client";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "Design and Experience",   href: "/services/design-experience" },
    { label: "Systems and Development", href: "/services/systems-development" },
    { label: "Growth and Performance",  href: "/services/growth-performance" },
  ],
  Company: [
    { label: "About",   href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy",    href: "/privacy" },
    { label: "Terms of Service",  href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 lg:pt-16 pb-8">

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-5">
              <Image src="/Orkyn_Logo.svg" alt="Orkyn Technologies" width={28} height={32}
                className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-6">
              Custom software, ERP, Salesforce and digital systems built to scale your business. Offices in the UK and India.
            </p>
            <div className="space-y-2">
              <a href="mailto:hello@orkyn.ai"
                className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors">
                <span aria-hidden="true">✉</span> hello@orkyn.ai
              </a>
              <p className="flex items-center gap-2 text-xs text-white/40">
                <span aria-hidden="true">📍</span> UK and India
              </p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">{group}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors duration-150">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-white/8 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">2026 Orkyn. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}
