"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about" },
  { label: "Pricing",  href: "#pricing" },
  { label: "Contact",  href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.28)",
        backdropFilter: "blur(28px) saturate(200%)",
        WebkitBackdropFilter: "blur(28px) saturate(200%)",
        borderBottom: "1px solid rgba(255,255,255,0.45)",
        boxShadow: scrolled
          ? "0 4px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)"
          : "none",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="flex items-center group flex-shrink-0">
            <Image src="/Orkyn_Logo.svg" alt="Orkyn Technologies" width={32} height={36}
              className="h-8 w-auto transition-all duration-200 group-hover:scale-105" priority />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setActive(link.label)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                  active === link.label
                    ? "text-foreground bg-black/6"
                    : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                )}>
                {link.label}
                {active === link.label && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#F5A623]" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link href="#contact"
              className="relative inline-flex items-center justify-center h-11 px-6 rounded-full text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 group"
              style={{ background: "#0a0a0a", boxShadow: "0 2px 12px rgba(0,0,0,0.18)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(245,166,35,0.5), 0 4px 20px rgba(0,0,0,0.2)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.18)"; }}
            >
              <span className="relative z-10">Book a Strategy Call</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-xl bg-black/6 hover:bg-black/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <div style={{ transition: "transform 0.2s", transform: open ? "rotate(90deg)" : "none" }}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </div>
          </button>
        </div>

        <div className={cn("md:hidden overflow-hidden transition-all duration-300", open ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0")}>
          <div className="flex flex-col gap-1 p-3 mt-2 rounded-2xl border"
            style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)", borderColor: "rgba(0,0,0,0.08)", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => { setOpen(false); setActive(link.label); }}
                className="text-sm text-muted-foreground hover:text-foreground px-4 py-3 rounded-xl hover:bg-black/5 transition-colors font-medium">
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-black/6 mt-1">
              <Link href="#contact" onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full rounded-full text-sm font-semibold text-white transition-all duration-300"
                style={{ height: "48px", background: "#0a0a0a" }}>
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
