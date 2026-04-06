"use client";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "Systems and Development", href: "/services/systems-development" },
    { label: "Design and Experience",   href: "/services/design-experience" },
    { label: "Growth and Performance",  href: "/services/growth-performance" },
  ],
  Company: [
    { label: "About",   href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy",    href: "#privacy" },
    { label: "Terms of Service",  href: "#terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 lg:pt-16 pb-8">

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <Image src="/Orkyn_Logo.svg" alt="Orkyn Technologies" width={28} height={32}
                className="h-8 w-auto brightness-0 invert" />
              <span className="font-display font-bold text-xl">Orkyn</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-6">
              Custom software, ERP, Salesforce and digital systems built to scale your business. Offices in the UK and India.
            </p>
            <div className="space-y-2">
              <a href="mailto:Orkyntechnologies@gmail.com"
                className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors">
                <span aria-hidden="true">✉</span> Orkyntechnologies@gmail.com
              </a>
              <a href="tel:+919840093574"
                className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors">
                <span aria-hidden="true">📞</span> +91 98400 93574
              </a>
              <p className="flex items-center gap-2 text-xs text-white/40">
                <span aria-hidden="true">📍</span> Manchester, UK and Chennai, India
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
          <p className="text-xs text-white/25">2026 Orkyn Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="https://linkedin.com/company/orkyn" target="_blank" rel="noopener noreferrer" aria-label="Orkyn on LinkedIn"
              className="w-8 h-8 rounded-lg bg-white/8 hover:bg-white/16 flex items-center justify-center transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://twitter.com/orkyntech" target="_blank" rel="noopener noreferrer" aria-label="Orkyn on X"
              className="w-8 h-8 rounded-lg bg-white/8 hover:bg-white/16 flex items-center justify-center transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-white" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.628zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
