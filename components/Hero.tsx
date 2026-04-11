"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const clientLogos = [
  { name: "Apple",          file: "/logo-1.svg", w: 40, h: 40 },
  { name: "Shell",          file: "/logo-2.svg", w: 40, h: 37 },
  { name: "Virlo",          file: "/logo-3.svg", w: 40, h: 37 },
  { name: "Support Studio", file: "/logo-4.svg", w: 28, h: 40 },
  { name: "Assistbot",      file: "/logo-5.svg", w: 40, h: 40 },
];

const hubNodes = [
  { label: "Applications", icon: "⬡", color: "#6366F1", glow: "rgba(99,102,241,0.15)",  angle: 315, desc: "Web and mobile apps" },
  { label: "Data",         icon: "◈", color: "#10B981", glow: "rgba(16,185,129,0.15)",  angle: 45,  desc: "Pipelines and analytics" },
  { label: "Integrations", icon: "⟳", color: "#F5A623", glow: "rgba(245,166,35,0.15)",  angle: 135, desc: "APIs and webhooks" },
  { label: "Systems",      icon: "⬢", color: "#EC4899", glow: "rgba(236,72,153,0.15)",  angle: 225, desc: "ERP and CRM" },
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
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const CELL = 52;
    let running = true;
    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width / CELL) + 1;
      const rows = Math.ceil(canvas.height / CELL) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * CELL, y = r * CELL;
          const dx = x - mouse.current.x, dy = y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const prox = Math.max(0, 1 - dist / 190);
          // Fade dots out in the top 100 px so the glass navbar has nothing dark to pick up
          const topFade = Math.min(1, y / 100);
          if (topFade === 0) continue;
          ctx.beginPath();
          ctx.arc(x, y, 1 + prox * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = prox > 0.05
            ? `rgba(245,166,35,${(0.08 + prox * 0.6) * topFade})`
            : `rgba(0,0,0,${0.055 * topFade})`;
          ctx.fill();
        }
      }
      raf.current = requestAnimationFrame(draw);
    };
    draw();
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
      running = true;
      if (!raf.current) draw();
      if (idle.current) clearTimeout(idle.current);
      idle.current = setTimeout(() => { mouse.current = { x: -999, y: -999 }; }, 2000);
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", () => { mouse.current = { x: -999, y: -999 }; });
    return () => { running = false; cancelAnimationFrame(raf.current); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-auto" aria-hidden="true" />;
}

function IntegrationHub() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState(0);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % hubNodes.length), 2200);
    return () => clearInterval(t);
  }, []);
  const onMove = useCallback((e: React.MouseEvent) => {
    const r = containerRef.current?.getBoundingClientRect();
    if (!r) return;
    setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
  }, []);
  const R = 148, focused = hovered !== null ? hovered : active, fn = hubNodes[focused];
  return (
    <div ref={containerRef} onMouseMove={onMove}
      className="relative w-full h-[420px] lg:h-[460px] flex items-center justify-center select-none"
      aria-label="Orkyn integration hub">
      <div className="absolute w-72 h-72 rounded-full blur-3xl pointer-events-none transition-all duration-700"
        style={{ background: fn.glow, opacity: 0.18, left: `${mouse.x * 100}%`, top: `${mouse.y * 100}%`, transform: "translate(-50%,-50%)" }} />
      <div className="absolute inset-6 rounded-3xl border border-white/60 pointer-events-none"
        style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.75) 0%,rgba(255,255,255,0.3) 100%)", backdropFilter: "blur(20px)", boxShadow: `0 32px 80px rgba(0,0,0,0.08),inset 0 1px 0 rgba(255,255,255,0.9),0 0 60px ${fn.glow}22`, transition: "box-shadow 0.5s" }} />
      {[R*2+56, R*2-12].map((sz, i) => (
        <div key={i} className="absolute rounded-full border border-dashed pointer-events-none"
          style={{ width: sz, height: sz, borderColor: `rgba(0,0,0,${0.05+i*0.03})`, animation: `spin ${28+i*14}s linear infinite ${i?"reverse":""}` }} />
      ))}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 6 }} aria-hidden="true">
        {hubNodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180, cx = 50, cy = 50;
          const nx = cx + (R/(R*2+56))*50*Math.cos(rad)*2.35;
          const ny = cy + (R/(R*2+56))*50*Math.sin(rad)*2.35;
          const on = focused === i;
          return <line key={i} x1={`${cx}%`} y1={`${cy}%`} x2={`${nx}%`} y2={`${ny}%`}
            stroke={on ? node.color : "#e5e7eb"} strokeWidth={on ? "2.5" : "1"}
            strokeDasharray={on ? "none" : "5 5"} strokeOpacity={on ? "1" : "0.5"}
            style={{ transition: "all 0.5s ease" }} />;
        })}
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center w-24 h-24 lg:w-28 lg:h-28 rounded-3xl shadow-2xl overflow-hidden"
        style={{ background: "linear-gradient(135deg,#fff 0%,#f8f8f8 100%)", boxShadow: `0 20px 60px rgba(0,0,0,0.14),0 0 0 1px rgba(255,255,255,0.9),0 0 40px ${fn.glow}`, transition: "box-shadow 0.5s", padding: "12px" }}>
        <Image src="/Orkyn_Logo.svg" alt="Orkyn Core Hub" width={36} height={40} className="w-auto object-contain" style={{ maxHeight: "40px", maxWidth: "80px" }} />
        <span className="text-[8px] font-bold text-muted-foreground mt-1.5 tracking-widest uppercase">Core Hub</span>
        {[0,1].map(i => (
          <span key={i} className="absolute inset-0 rounded-3xl border-2 animate-ping"
            style={{ borderColor: fn.color, opacity: 0.15, animationDuration: `${2+i}s`, animationDelay: `${i*0.5}s` }} />
        ))}
      </div>
      {hubNodes.map((node, i) => {
        const rad = (node.angle*Math.PI)/180;
        const x = 50 + R*Math.cos(rad)/2.22, y = 50 + R*Math.sin(rad)/2.22;
        const on = focused === i;
        return (
          <div key={i} className="absolute z-20 cursor-pointer"
            style={{ left:`${x}%`, top:`${y}%`, transform:`translate(-50%,-50%) scale(${on?1.1:1})`, transition:"transform 0.4s cubic-bezier(0.34,1.56,0.64,1)" }}
            onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
            <div className="absolute inset-0 rounded-2xl blur-xl transition-all duration-500"
              style={{ background: node.glow, opacity: on ? 0.7 : 0, transform: "scale(1.5)" }} />
            <div className="relative flex flex-col items-center gap-1 px-3 py-2.5 lg:px-4 lg:py-3 rounded-2xl border transition-all duration-300"
              style={{ background: on ? `linear-gradient(135deg,${node.color}18,${node.color}06)` : "rgba(255,255,255,0.95)", borderColor: on ? node.color : "rgba(0,0,0,0.08)", boxShadow: on ? `0 12px 40px ${node.glow},0 0 0 1px ${node.color}40` : "0 4px 12px rgba(0,0,0,0.06)", backdropFilter: "blur(12px)" }}>
              <span className="text-lg" style={{ color: node.color, transition:"transform 0.3s", transform: on?"scale(1.2)":"scale(1)", display:"block" }}>{node.icon}</span>
              <span className="text-xs font-bold whitespace-nowrap" style={{ color: on ? node.color : "#374151" }}>{node.label}</span>
              <span className="text-[9px] text-gray-400 whitespace-nowrap hidden lg:block">{node.desc}</span>
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{ background: on ? node.color : "#d1d5db", boxShadow: on ? `0 0 6px ${node.color}` : "none" }} />
            </div>
          </div>
        );
      })}
      {hubNodes.map((node, i) => {
        const rad = (node.angle*Math.PI)/180;
        const x = 50 + R*0.44*Math.cos(rad)/2.22, y = 50 + R*0.44*Math.sin(rad)/2.22;
        return <div key={`p${i}`} className="absolute w-2 h-2 rounded-full z-10 pointer-events-none"
          style={{ left:`${x}%`, top:`${y}%`, background:node.color, boxShadow:`0 0 8px ${node.color}`, animation:`ping ${1.6+i*0.5}s ease-in-out infinite`, animationDelay:`${i*0.6}s`, opacity:0.8 }} aria-hidden="true" />;
      })}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 border border-black/8 shadow-sm backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: fn.color }} />
        <span className="text-xs font-semibold text-gray-600">{fn.label} active</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-label="Orkyn Technologies hero section"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
    >
      <InteractiveGrid />
      <div className="absolute top-1/4 right-1/3 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#F5A623] opacity-[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-indigo-500 opacity-[0.05] rounded-full blur-3xl pointer-events-none" />
      {/* White gradient at top so the glass navbar never picks up dot-grid darkness */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "140px",
          zIndex: 5,
          background: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="space-y-7 lg:space-y-8">

            {/* Social proof */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex -space-x-1.5">
                {["#6366F1","#F5A623","#10B981","#EC4899","#0a0a0a"].map((c,i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0"
                    style={{ background: c, zIndex: 5-i }}>
                    {["J","A","S","M","K"][i]}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-[#F5A623] text-[#F5A623]" />)}
              </div>
              <span className="text-xs text-muted-foreground font-medium">Trusted by 100+ businesses</span>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 bg-[#F5A623] rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-xs font-semibold text-[#C47D00] uppercase tracking-widest">
                Software · ERP · Salesforce · Digital Systems
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
              Systems built{" "}
              <span className="relative inline-block">
                precisely
                <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 220 10" fill="none" aria-hidden="true">
                  <path d="M2 7C40 3 80 1 110 4C140 7 180 3 218 7" stroke="#F5A623" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              for <span className="text-[#F5A623]">your business.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Custom software, ERP and Salesforce built around how you work, so your systems grow with your business instead of holding it back.
            </p>

            {/* Trust pills above CTA */}
            <div className="flex flex-wrap gap-2.5">
              {trustPills.map((pill) => (
                <div key={pill} className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-black/8 rounded-full px-3 py-1.5 shadow-sm">
                  <span className="w-4 h-4 rounded-full bg-[#F5A623]/15 flex items-center justify-center flex-shrink-0">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                      <path d="M1 4L3 6L7 2" stroke="#C47D00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{pill}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))}
                className="relative inline-flex items-center gap-2 rounded-full font-bold text-sm text-white px-7 sm:px-8 overflow-hidden group transition-all duration-300 "
                style={{ height:"48px", background:"#0a0a0a", boxShadow:"0 4px 20px rgba(245,166,35,0.45)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 4px rgba(245,166,35,0.2), 0 0 28px rgba(245,166,35,0.5)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(245,166,35,0.45)"; }}
              >
                <span className="relative z-10">Book a Strategy Call</span>
                <ArrowRight size={15} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
              <Link href="#services"
                className="inline-flex items-center justify-center rounded-full font-semibold text-sm px-7 sm:px-8 border border-black/15 bg-white/80 hover:bg-white hover:border-black/30 transition-all duration-300 backdrop-blur-sm"
                style={{ height:"48px" }}>
                See Our Services
              </Link>
            </div>
          </div>

          {/* Right hub — hidden on mobile */}
          <div className="hidden lg:block">
            <IntegrationHub />
          </div>
        </div>

        {/* Trusted by — smooth marquee */}
        <div className="mt-16 lg:mt-20 pt-10 border-t border-border overflow-hidden">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-10 text-center">
            Trusted by growing businesses worldwide
          </p>
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
            <div
              className="flex items-center"
              style={{ animation: "marquee 40s linear infinite", width: "max-content", gap: "120px" }}
            >
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={i}
                  className="flex flex-col items-center gap-2.5 cursor-default group flex-shrink-0"
                  style={{ filter: "grayscale(1)", transition: "all 0.3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.filter = "grayscale(0)"; el.style.transform = "scale(1.1) translateY(-3px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.filter = "grayscale(1)"; el.style.transform = "scale(1) translateY(0)"; }}
                >
                  <Image
                    src={logo.file}
                    alt={`${logo.name} logo`}
                    width={logo.w * 1.3}
                    height={logo.h * 1.3}
                    className="h-9 w-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
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
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
