"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Code2, Palette, TrendingUp } from "lucide-react";
import { ContactModal } from "@/components/ContactModal";
import { cn } from "@/lib/utils";
import { SmoothNavLink } from "@/components/SmoothNavLink";
import { usePathname } from "next/navigation";

const serviceLinks = [
  {
    label: "UX and Product Design",
    href: "/services/design-experience",
    icon: Palette,
    color: "#a855f7",
    desc: "UX, UI and design systems",
  },
  {
    label: "Systems and Product Development",
    href: "/services/systems-development",
    icon: Code2,
    color: "#6466FA",
    desc: "Custom software, ERP and Salesforce",
  },
  {
    label: "Growth and Performance Marketing",
    href: "/services/growth-performance",
    icon: TrendingUp,
    color: "#10B981",
    desc: "SEO, CRO and performance marketing",
  },
];

const navLinks = [
  { label: "Home", href: "/", isContact: false },
  { label: "Services", href: "/#services", isContact: false, hasDropdown: true },
  { label: "About", href: "/#about", isContact: false },
  { label: "Pricing", href: "/#pricing", isContact: false },
  { label: "Contact", href: "/#contact", isContact: true },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [showServices, setShowServices] = useState(false);

  const pathname = usePathname();
  const isServicePage = pathname?.startsWith("/services");
  const computedActive = isServicePage ? "Services" : active;

  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const handler = () => setModalOpen(true);
    window.addEventListener("openContactModal", handler);
    return () => window.removeEventListener("openContactModal", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowServices(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setShowServices(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setShowServices(false), 150);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0"
        style={{
          zIndex: 9999,
          borderBottom: "1px solid rgba(255,255,255,0.30)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: scrolled
              ? "rgba(255,255,255,0.82)"
              : "rgba(255,255,255,0.72)",
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
          }}
        />

        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center group flex-shrink-0"
              onClick={() => setActive("Home")}
            >
              <Image
                src="/Orkyn_Logo.svg"
                alt="Orkyn Technologies"
                width={32}
                height={36}
                className="h-8 w-auto transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.label}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={openMenu}
                      onMouseLeave={closeMenu}
                    >
                      <button
                        type="button"
                        onClick={() => setShowServices((s) => !s)}
                        className={cn(
                          "relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                          computedActive === link.label
                            ? "text-foreground bg-black/6"
                            : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          size={13}
                          className={cn(
                            "transition-transform duration-200",
                            showServices ? "rotate-180" : ""
                          )}
                        />
                      </button>

                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                        style={{
                          pointerEvents: showServices ? "auto" : "none",
                          opacity: showServices ? 1 : 0,
                          transform: `translateX(-50%) translateY(${showServices ? "0px" : "-6px"})`,
                          transition: "opacity 0.18s ease, transform 0.18s ease",
                        }}
                      >
                        <div
                          className="w-72 rounded-2xl overflow-hidden"
                          style={{
                            background: "rgba(255,255,255,0.98)",
                            border: "1px solid rgba(0,0,0,0.08)",
                            boxShadow:
                              "0 16px 48px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
                          }}
                        >
                          <div className="p-2">
                            {serviceLinks.map((s) => {
                              const Icon = s.icon;
                              return (
                                <Link
                                  key={s.href}
                                  href={s.href}
                                  onClick={() => {
                                    setActive("Services");
                                    setShowServices(false);
                                  }}
                                  className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-150"
                                  onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.background =
                                      s.color + "10";
                                  }}
                                  onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.background =
                                      "transparent";
                                  }}
                                >
                                  <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: s.color + "15" }}
                                  >
                                    <Icon size={15} style={{ color: s.color }} />
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-sm font-semibold text-foreground leading-tight">
                                      {s.label}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      {s.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          <div className="border-t border-black/6 p-2">
                            <Link
                              href="/#services"
                              onClick={() => {
                                setActive("Services");
                                setShowServices(false);
                              }}
                              className="flex items-center justify-center w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-black/4 transition-all duration-150"
                            >
                              View all services
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (link.isContact) {
                  return (
                    <button
                      key={link.label}
                      type="button"
                      onClick={() => {
                        setActive(link.label);
                        setModalOpen(true);
                      }}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                        computedActive === link.label
                          ? "text-foreground bg-black/6"
                          : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                      )}
                    >
                      {link.label}
                    </button>
                  );
                }

                return (
                  <SmoothNavLink
                    key={link.label}
                    href={link.href}
                    onClick={() => setActive(link.label)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                      active === link.label
                        ? "text-foreground bg-black/6"
                        : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                    )}
                  >
                    {link.label}
                  </SmoothNavLink>
                );
              })}
            </div>

            <div className="hidden md:flex" style={{ isolation: "isolate" }}>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="navbar-cta-breathe relative inline-flex items-center justify-center h-11 px-6 rounded-full text-sm font-semibold text-white"
                style={{ background: "#0a0a0a" }}
              >
                Book a Strategy Call
              </button>
            </div>

            <button
              type="button"
              className="md:hidden p-2 rounded-xl bg-black/6 hover:bg-black/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <div
                style={{
                  transition: "transform 0.2s",
                  transform: mobileOpen ? "rotate(90deg)" : "none",
                }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </button>
          </div>

          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300",
              mobileOpen ? "max-h-[520px] opacity-100 pb-4" : "max-h-0 opacity-0"
            )}
          >
            <div
              className="flex flex-col gap-1 p-3 mt-2 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.96)",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              }}
            >
              <Link
                href="/"
                onClick={() => {
                  setMobileOpen(false);
                  setActive("Home");
                }}
                className="text-sm text-muted-foreground hover:text-foreground px-4 py-3 rounded-xl hover:bg-black/5 transition-colors font-medium"
              >
                Home
              </Link>

              <div className="px-4 py-2">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50 mb-2">
                  Services
                </p>
                {serviceLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setActive("Services");
                      }}
                      className="flex items-center gap-3 py-2.5 px-1 rounded-xl hover:bg-black/5 transition-colors"
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: s.color + "15" }}
                      >
                        <Icon size={13} style={{ color: s.color }} />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {s.label}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {["About", "Pricing"].map((label) => (
                <Link
                  key={label}
                  href={`/#${label.toLowerCase()}`}
                  onClick={() => {
                    setMobileOpen(false);
                    setActive(label);
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground px-4 py-3 rounded-xl hover:bg-black/5 transition-colors font-medium"
                >
                  {label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setModalOpen(true);
                }}
                className="text-sm text-muted-foreground hover:text-foreground px-4 py-3 rounded-xl hover:bg-black/5 transition-colors font-medium text-left"
              >
                Contact
              </button>

              <div className="pt-2 border-t border-black/6 mt-1">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setModalOpen(true);
                  }}
                  className="flex items-center justify-center w-full rounded-full text-sm font-semibold text-white transition-all duration-300"
                  style={{ height: "48px", background: "#0a0a0a" }}
                >
                  Book a Strategy Call
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}