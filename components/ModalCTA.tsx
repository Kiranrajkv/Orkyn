"use client";

import { ArrowRight } from "lucide-react";

interface ModalCTAProps {
  label: string;
  color: string;
  glow: string;
  size?: "sm" | "lg";
}

export function ModalCTA({ label, color, glow, size = "lg" }: ModalCTAProps) {
  const dispatch = () => window.dispatchEvent(new CustomEvent("openContactModal"));
  const baseShadow = `0 4px 20px ${glow}`;
  const hoverShadow = `0 0 0 4px ${glow.replace('0.35', '0.2')}, 0 0 28px ${glow.replace('0.35', '0.6')}, 0 4px 20px ${glow}`;

  return (
    <button
      type="button"
      onClick={dispatch}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        height: size === "lg" ? "48px" : "44px",
        padding: size === "lg" ? "0 32px" : "0 24px",
        borderRadius: 100,
        border: "none",
        background: color,
        color: "#fff",
        fontSize: 14,
        fontWeight: 700,
        cursor: "pointer",
        boxShadow: baseShadow,
        transition: "box-shadow 0.25s ease",
        fontFamily: "inherit",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = hoverShadow; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = baseShadow; }}
    >
      {label}
      <ArrowRight size={size === "lg" ? 15 : 14} aria-hidden="true" />
    </button>
  );
}
