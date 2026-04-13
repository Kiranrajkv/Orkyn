"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const clientLogos = [
  { name: "Apple", file: "/logo-1.svg", w: 40, h: 40 },
  { name: "Shell", file: "/logo-2.svg", w: 40, h: 37 },
  { name: "ClipAgent", file: "/logo-3.svg", w: 40, h: 37 },
  { name: "Support Studio", file: "/logo-4.svg", w: 28, h: 40 },
  { name: "Assistbot", file: "/logo-5.svg", w: 40, h: 40 },
  { name: "FluxFrame", file: "/logo-6.svg", w: 40, h: 40 },
  { name: "Motionly", file: "/logo-7.svg", w: 40, h: 40 },
];

const hubNodes = [
  {
    label: "Applications",
    icon: "⬡",
    color: "#6366F1",
    glow: "rgba(99,102,241,0.15)",
    angle: 315,
    desc: "Web and mobile apps",
  },
  {
    label: "Data",
    icon: "◈",
    color: "#10B981",
    glow: "rgba(16,185,129,0.15)",
    angle: 45,
    desc: "Pipelines and analytics",
  },
  {
    label: "Integrations",
    icon: "⟳",
    color: "#F5A623",
    glow: "rgba(245,166,35,0.15)",
    angle: 135,
    desc: "APIs and webhooks",
  },
  {
    label: "Systems",
    icon: "⬢",
    color: "#EC4899",
    glow: "rgba(236,72,153,0.15)",
    angle: 225,
    desc: "ERP and CRM",
  },
];

const trustPills = [
  "ISO-ready architecture",
  "Delivered on time",
  "No vendor lock-in",
  "UK and India teams",
];

function InteractiveGrid() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const raf = useRef<number>(0);
  const idle = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const CELL = 52;
    let animating = false;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / CELL) + 1;
      const rows = Math.ceil(canvas.height / CELL) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * CELL;
          const y = r * CELL;
          const dx = x - mouse.current.x;
          const dy = y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const prox = Math.max(0, 1 - dist / 190);

          // Safer top fade so grid never muddies the navbar/logo area
          const topFade = Math.min(1, y / 180);
          if (topFade === 0) continue;

          ctx.beginPath();
          ctx.arc(x, y, 1 + prox * 2.8, 0, Math.PI * 2);
          ctx.fillStyle =
            prox > 0.05
              ? `rgba(245,166,35,${(0.08 + prox * 0.6) * topFade})`
              : `rgba(0,0,0,${0.055 * topFade})`;
          ctx.fill();
        }
      }
    };

    draw();

    const loop = () => {
      if (!animating) return;
      draw();
      raf.current = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - r.left,
        y: e.clientY - r.top,
      };

      if (!animating) {
        animating = true;
        loop();
      }

      if (idle.current) clearTimeout(idle.current);
      idle.current = setTimeout(() => {
        mouse.current = { x: -999, y: -999 };
        animating = false;
        draw();
      }, 2000);
    };

    const onLeave = () => {
      mouse.current = { x: -999, y: -999 };
      animating = false;
      draw();
    };

    canvas.addEventListener("mousemove", onMove, { passive: true });
    canvas.addEventListener("mouseleave", onLeave, { passive: true });

    return () => {
      animating = false;
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      if (idle.current) clearTimeout(idle.current);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 h-full w-full pointer-events-auto"
      aria-hidden="true"
    />
  );
}

function IntegrationHub() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState(0);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % hubNodes.length), 2200);
    return () => clearInterval(t);
  }, []);

  const onMove = useCallback((e: React.MouseEvent) => {
    const r = containerRef.current?.getBoundingClientRect();
    if (!r) return;
    setMouse({
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height,
    });
  }, []);

  const R = 148;
  const focused = hovered !== null ? hovered : active;
  const fn = hubNodes[focused];

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      className="relative flex h-[420px] w-full select-none items-center justify-center lg:h-[460px]"
      aria-label="Orkyn integration hub"
    >
      <div
        className="absolute h-72 w-72 rounded-full blur-3xl pointer-events-none transition-all duration-700"
        style={{
          background: fn.glow,
          opacity: 0.18,
          left: `${mouse.x * 100}%`,
          top: `${mouse.y * 100}%`,
          transform: "translate(-50%,-50%)",
        }}
      />

      <div
        className="absolute inset-6 rounded-3xl border border-white/60 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg,rgba(255,255,255,0.75) 0%,rgba(255,255,255,0.3) 100%)",
          backdropFilter: "blur(20px)",
          boxShadow: `0 32px 80px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9), 0 0 60px ${fn.glow}22`,
          transition: "box-shadow 0.5s",
        }}
      />

      {[R * 2 + 56, R * 2 - 12].map((sz, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-dashed pointer-events-none"
          style={{
            width: sz,
            height: sz,
            borderColor: `rgba(0,0,0,${0.05 + i * 0.03})`,
            animation: `spin ${28 + i * 14}s linear infinite ${i ? "reverse" : ""}`,
          }}
        />
      ))}

      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        style={{ zIndex: 6 }}
        aria-hidden="true"
      >
        {hubNodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const cx = 50;
          const cy = 50;
          const nx = cx + (R / (R * 2 + 56)) * 50 * Math.cos(rad) * 2.35;
          const ny = cy + (R / (R * 2 + 56)) * 50 * Math.sin(rad) * 2.35;
          const on = focused === i;

          return (
            <line
              key={i}
              x1={`${cx}%`}
              y1={`${cy}%`}
              x2={`${nx}%`}
              y2={`${ny}%`}
              stroke={on ? node.color : "#e5e7eb"}
              strokeWidth={on ? "2.5" : "1"}
              strokeDasharray={on ? "none" : "5 5"}
              strokeOpacity={on ? "1" : "0.5"}
              style={{ transition: "all 0.5s ease" }}
            />
          );
        })}
      </svg>

      <div
        className="relative z-10 flex h-24 w-24 flex-col items-center justify-center overflow-hidden rounded-3xl shadow-2xl lg:h-28 lg:w-28"
        style={{
          background: "linear-gradient(135deg,#fff 0%,#f8f8f8 100%)",
          boxShadow: `0 20px 60px rgba(0,0,0,0.14), 0 0 0 1px rgba(255,255,255,0.9), 0 0 40px ${fn.glow}`,
          transition: "box-shadow 0.5s",
          padding: "12px",
        }}
      >
        <Image
          src="/Orkyn_Logo.svg"
          alt="Orkyn Core Hub"
          width={36}
          height={40}
          className="w-auto object-contain"
          style={{ maxHeight: "40px", maxWidth: "80px" }}
        />
        <span className="mt-1.5 text-[8px] font-bold uppercase tracking-widest text-muted-foreground">
          Core Hub
        </span>

        {[0, 1].map((i) => (
          <span
            key={i}
            className="absolute inset-0 rounded-3xl border-2 animate-ping"
            style={{
              borderColor: fn.color,
              opacity: 0.15,
              animationDuration: `${2 + i}s`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {hubNodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const x = 50 + (R * Math.cos(rad)) / 2.22;
        const y = 50 + (R * Math.sin(rad)) / 2.22;
        const on = focused === i;

        return (
          <div
            key={i}
            className="absolute z-20 cursor-pointer"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%,-50%) scale(${on ? 1.1 : 1})`,
              transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className="absolute inset-0 rounded-2xl blur-xl transition-all duration-500"
              style={{
                background: node.glow,
                opacity: on ? 0.7 : 0,
                transform: "scale(1.5)",
              }}
            />

            <div
              className="relative flex flex-col items-center gap-1 rounded-2xl border px-3 py-2.5 transition-all duration-300 lg:px-4 lg:py-3"
              style={{
                background: on
                  ? `linear-gradient(135deg,${node.color}18,${node.color}06)`
                  : "rgba(255,255,255,0.95)",
                borderColor: on ? node.color : "rgba(0,0,0,0.08)",
                boxShadow: on
                  ? `0 12px 40px ${node.glow},0 0 0 1px ${node.color}40`
                  : "0 4px 12px rgba(0,0,0,0.06)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span
                className="block text-lg"
                style={{
                  color: node.color,
                  transition: "transform 0.3s",
                  transform: on ? "scale(1.2)" : "scale(1)",
                }}
              >
                {node.icon}
              </span>

              <span
                className="whitespace-nowrap text-xs font-bold"
                style={{ color: on ? node.color : "#374151" }}
              >
                {node.label}
              </span>

              <span className="hidden whitespace-nowrap text-[9px] text-gray-400 lg:block">
                {node.desc}
              </span>

              <span
                className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full transition-all duration-300"
                style={{
                  background: on ? node.color : "#d1d5db",
                  boxShadow: on ? `0 0 6px ${node.color}` : "none",
                }}
              />
            </div>
          </div>
        );
      })}

      {hubNodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const x = 50 + (R * 0.44 * Math.cos(rad)) / 2.22;
        const y = 50 + (R * 0.44 * Math.sin(rad)) / 2.22;

        return (
          <div
            key={`p${i}`}
            className="absolute z-10 h-2 w-2 rounded-full pointer-events-none"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              background: node.color,
              boxShadow: `0 0 8px ${node.color}`,
              animation: `ping ${1.6 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
              opacity: 0.8,
            }}
            aria-hidden="true"
          />
        );
      })}

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-black/8 bg-white/85 px-4 py-1.5 shadow-sm backdrop-blur-sm">
        <span
          className="h-1.5 w-1.5 rounded-full animate-pulse"
          style={{ background: fn.color }}
        />
        <span className="text-xs font-semibold text-gray-600">
          {fn.label} active
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-label="Orkyn Technologies hero section"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-16"
      style={{ isolation: "isolate" }}
    >
      <InteractiveGrid />

      <div className="absolute top-1/4 right-0 h-[200px] w-[200px] rounded-full bg-[#F5A623] opacity-[0.07] blur-3xl pointer-events-none sm:h-[360px] sm:w-[360px] lg:h-[500px] lg:w-[500px]" />
      <div className="absolute bottom-1/4 left-1/4 h-[180px] w-[180px] rounded-full bg-indigo-500 opacity-[0.05] blur-3xl pointer-events-none sm:h-[280px] sm:w-[280px] lg:h-[400px] lg:w-[400px]" />

      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "140px",
          zIndex: 5,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="space-y-6 sm:space-y-7 lg:space-y-8">
            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex -space-x-1.5">
                {["#6366F1", "#F5A623", "#10B981", "#EC4899", "#0a0a0a"].map(
                  (c, i) => (
                    <div
                      key={i}
                      className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-white text-[9px] font-bold text-white"
                      style={{ background: c, zIndex: 5 - i }}
                    >
                      {["J", "A", "S", "M", "K"][i]}
                    </div>
                  )
                )}
              </div>

              <div className="flex shrink-0 items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={10}
                    className="fill-[#F5A623] text-[#F5A623]"
                  />
                ))}
              </div>

              <span className="text-xs font-medium leading-snug text-muted-foreground sm:text-sm">
                Trusted by 100+ businesses
              </span>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#F5A623]/20 bg-[#F5A623]/10 px-3 py-2 sm:px-4 sm:py-1.5">
              <span
                className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F5A623] animate-pulse"
                aria-hidden="true"
              />
              <span className="text-[11px] font-semibold uppercase leading-snug tracking-[0.12em] text-[#C47D00] sm:text-xs">
                Software · ERP · Salesforce · Digital Systems
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[12ch] font-display text-[clamp(2.6rem,9vw,4.75rem)] font-bold leading-[0.96] tracking-tight sm:max-w-none sm:leading-[1.02]">
              Systems built{" "}
              <span className="relative inline-block">
                precisely
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 220 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7C40 3 80 1 110 4C140 7 180 3 218 7"
                    stroke="#F5A623"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              for <span className="text-[#F5A623]">your business.</span>
            </h1>

            {/* Subtext */}
            <p className="max-w-xl text-base leading-[1.75] text-muted-foreground sm:text-lg lg:text-xl">
              Custom software, ERP and Salesforce built around how you work, so
              your systems grow with your business instead of holding it back.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {trustPills.map((pill) => (
                <div
                  key={pill}
                  className="flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-sm"
                >
                  <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#F5A623]/15">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 4L3 6L7 2"
                        stroke="#C47D00"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-xs font-medium leading-snug text-gray-700 sm:text-sm">
                    {pill}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("openContactModal"))
                }
                className="group relative inline-flex h-[52px] w-full items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-sm font-bold text-white transition-all duration-300 sm:w-auto sm:px-8"
                style={{
                  background: "#0a0a0a",
                  boxShadow: "0 4px 20px rgba(245,166,35,0.45)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 4px rgba(245,166,35,0.2), 0 0 28px rgba(245,166,35,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 20px rgba(245,166,35,0.45)";
                }}
              >
                <span className="relative z-10">Book a Strategy Call</span>
                <ArrowRight
                  size={15}
                  className="relative z-10 transition-transform group-hover:translate-x-1"
                />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>

              <Link
                href="#services"
                className="inline-flex h-[52px] w-full items-center justify-center rounded-full border border-black/15 bg-white/80 px-6 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:border-black/30 hover:bg-white sm:w-auto sm:px-8"
              >
                See Our Services
              </Link>
            </div>
          </div>

          {/* Right hub */}
          <div className="hidden lg:flex items-center justify-center">
            <IntegrationHub />
          </div>
        </div>

        {/* Trusted by marquee */}
        <div className="mt-14 overflow-hidden border-t border-border pt-10 lg:mt-20">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:mb-10">
            Trusted by growing businesses worldwide
          </p>

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20" />

            <div
              className="flex items-center"
              style={{
                animation: "marquee 80s linear infinite",
                width: "max-content",
                gap: "170px",
              }}
            >
              {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                <div
                  key={i}
                  className="group flex flex-shrink-0 flex-col items-center gap-2 cursor-default sm:gap-2.5"
                  style={{ filter: "grayscale(1)", transition: "all 0.3s" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.filter = "grayscale(0)";
                    el.style.transform = "scale(1.1) translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.filter = "grayscale(1)";
                    el.style.transform = "scale(1) translateY(0)";
                  }}
                >
                  <Image
                    src={logo.file}
                    alt={`${logo.name} logo`}
                    width={logo.w * 1.3}
                    height={logo.h * 1.3}
                    className="h-8 w-auto object-contain opacity-50 transition-opacity duration-300 group-hover:opacity-100 sm:h-9"
                  />
                  <span className="whitespace-nowrap text-[11px] font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-xs">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}