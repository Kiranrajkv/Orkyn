"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send, Loader2, CheckCircle2, AlertCircle, Search } from "lucide-react";
import { COUNTRIES } from "@/lib/countries";
import { useContactForm } from "@/lib/useContactForm";

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { form, countryCode, setCountryCode, status, errorMsg, setField, handleSubmit, reset } = useContactForm();

  const [search, setSearch] = useState("");
  const [showCC, setShowCC] = useState(false);

  const firstRef = useRef<HTMLInputElement>(null);
  const ccRef = useRef<HTMLDivElement>(null);

  const filtered = COUNTRIES.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.code.includes(search)
  );
  const selected =
    COUNTRIES.find((c) => c.code === countryCode) ||
    COUNTRIES.find((c) => c.name === "United Kingdom") ||
    COUNTRIES[0];

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    setTimeout(() => firstRef.current?.focus(), 400);
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ccRef.current && !ccRef.current.contains(e.target as Node)) {
        setShowCC(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes cmFadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes cmSlideIn { from { transform:translateX(100%) } to { transform:translateX(0) } }
        @keyframes cmSlideUp { from { transform:translateY(100%) } to { transform:translateY(0) } }
      `}</style>

      <div
        style={{ position: "fixed", inset: 0, zIndex: 99999 }}
        role="dialog"
        aria-modal="true"
        aria-label="Contact Orkyn Technologies"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            animation: "cmFadeIn 0.2s ease forwards",
          }}
          onClick={onClose}
          aria-hidden="true"
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "min(480px, 100vw)",
            background: "#ffffff",
            display: "flex",
            flexDirection: "column",
            boxShadow: "-20px 0 60px rgba(0,0,0,0.15)",
            animation: "cmSlideIn 0.32s cubic-bezier(0.32,0.72,0,1) forwards",
            zIndex: 1,
          }}
          className="cm-panel"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 24px",
              borderBottom: "1px solid #f0f0f0",
              flexShrink: 0,
            }}
          >
            <div>
              <p style={{ fontWeight: 600, fontSize: "16px", color: "#0a0a0a", margin: 0 }}>
                Let us start the conversation.
              </p>
              <p style={{ fontSize: "12px", color: "#888", margin: "3px 0 0" }}>
                We respond within 4 hours.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#f3f3f3",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#e8e8e8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#f3f3f3")}
              aria-label="Close"
            >
              <X size={15} color="#555" />
            </button>
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
            {status === "success" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "60px 0",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#f0fdf4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircle2 size={26} color="#22c55e" />
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "18px", color: "#0a0a0a", marginBottom: 6 }}>
                    Message sent.
                  </p>
                  <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.6 }}>
                    We will be in touch within 4 hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => { reset(); onClose(); }}
                  style={{
                    fontSize: "14px",
                    color: "#888",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                    marginTop: 8,
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", marginBottom: 4 }}>
                  {["No commitment required", "NDA signed first", "Same-day response"].map((t) => (
                    <div key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <CheckCircle2 size={11} color="#F5A623" />
                      <span style={{ fontSize: "11px", color: "#888" }}>{t}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[["firstName", "First name", true], ["lastName", "Last name", true]].map(([id, label, req]) => (
                    <div key={id as string}>
                      <label
                        style={{ display: "block", fontSize: "12px", fontWeight: 500, color: "#555", marginBottom: 6 }}
                      >
                        {label as string} {req && <span style={{ color: "#f87171" }}>*</span>}
                      </label>
                      <input
                        ref={id === "firstName" ? firstRef : undefined}
                        type="text"
                        value={form[id as keyof typeof form]}
                        onChange={setField(id as string)}
                        placeholder={label as string}
                        required={!!req}
                        disabled={status === "loading"}
                        style={{
                          width: "100%", height: 40, padding: "0 14px", borderRadius: 12,
                          border: "1px solid #e5e5e5", fontSize: 16, color: "#0a0a0a",
                          outline: "none", transition: "border-color 0.15s", boxSizing: "border-box",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#0a0a0a")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e5e5")}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 500, color: "#555", marginBottom: 6 }}>
                    Email <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={setField("email")}
                    placeholder="you@company.com"
                    required
                    disabled={status === "loading"}
                    style={{
                      width: "100%", height: 40, padding: "0 14px", borderRadius: 12,
                      border: "1px solid #e5e5e5", fontSize: 16, color: "#0a0a0a",
                      outline: "none", transition: "border-color 0.15s", boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#0a0a0a")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e5e5")}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 500, color: "#555", marginBottom: 6 }}>
                    Phone number
                  </label>
                  <div style={{ display: "flex", gap: 8 }}>
                    <div ref={ccRef} style={{ position: "relative", flexShrink: 0 }}>
                      <button
                        type="button"
                        onClick={() => setShowCC((s) => !s)}
                        style={{
                          display: "flex", alignItems: "center", gap: 6, height: 40, padding: "0 12px",
                          borderRadius: 12, border: "1px solid #e5e5e5", background: "#fff",
                          cursor: "pointer", fontSize: 14, minWidth: 84, transition: "border-color 0.15s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#0a0a0a")}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e5e5e5")}
                      >
                        <span style={{ fontSize: 16, lineHeight: 1 }}>{selected.flag}</span>
                        <span style={{ fontSize: 13, fontWeight: 500 }}>{selected.code}</span>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                          style={{ color: "#aaa", transform: showCC ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
                        >
                          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {showCC && (
                        <div
                          style={{
                            position: "absolute", top: "calc(100% + 6px)", left: 0, width: 240,
                            borderRadius: 16, border: "1px solid #e5e5e5", background: "#fff",
                            zIndex: 50, boxShadow: "0 8px 32px rgba(0,0,0,0.12)", overflow: "hidden",
                          }}
                        >
                          <div style={{ padding: 8, borderBottom: "1px solid #f0f0f0" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#f5f5f5", borderRadius: 10, padding: "8px 12px" }}>
                              <Search size={12} color="#aaa" />
                              <input
                                autoFocus
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search..."
                                style={{ flex: 1, background: "none", border: "none", outline: "none", fontSize: 16, color: "#0a0a0a" }}
                              />
                            </div>
                          </div>

                          <div style={{ maxHeight: 176, overflowY: "auto" }}>
                            {filtered.length === 0 ? (
                              <p style={{ fontSize: 13, color: "#888", textAlign: "center", padding: "18px 12px", margin: 0 }}>
                                No results
                              </p>
                            ) : (
                              filtered.map((c, i) => (
                                <button
                                  key={i}
                                  type="button"
                                  onClick={() => { setCountryCode(c.code); setShowCC(false); setSearch(""); }}
                                  style={{
                                    width: "100%", display: "flex", alignItems: "center", gap: 10,
                                    padding: "10px 16px", background: "none", border: "none",
                                    cursor: "pointer", textAlign: "left", transition: "background 0.1s",
                                  }}
                                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f5f5")}
                                  onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                                >
                                  <span style={{ fontSize: 16, lineHeight: 1 }}>{c.flag}</span>
                                  <span style={{ flex: 1, fontSize: 13, fontWeight: 500, color: "#0a0a0a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                    {c.name}
                                  </span>
                                  <span style={{ fontSize: 11, color: "#aaa" }}>{c.code}</span>
                                </button>
                              ))
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <input
                      type="tel"
                      value={form.phone}
                      onChange={setField("phone")}
                      placeholder="(555) 000-0000"
                      disabled={status === "loading"}
                      style={{
                        flex: 1, height: 40, padding: "0 14px", borderRadius: 12,
                        border: "1px solid #e5e5e5", fontSize: 16, color: "#0a0a0a",
                        outline: "none", transition: "border-color 0.15s", boxSizing: "border-box",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#0a0a0a")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e5e5")}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 500, color: "#555", marginBottom: 6 }}>
                    Message <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={setField("message")}
                    placeholder="Tell us about your business and what you are looking to build..."
                    rows={4}
                    required
                    disabled={status === "loading"}
                    style={{
                      width: "100%", padding: "12px 14px", borderRadius: 12,
                      border: "1px solid #e5e5e5", fontSize: 16, color: "#0a0a0a",
                      outline: "none", resize: "none", transition: "border-color 0.15s",
                      boxSizing: "border-box", fontFamily: "inherit",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#0a0a0a")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e5e5")}
                  />
                </div>

                <p style={{ fontSize: "12px", color: "#aaa", margin: 0 }}>
                  By submitting you agree to our{" "}
                  <a href="/privacy" style={{ color: "#888", textDecoration: "underline" }}>privacy policy</a>.
                </p>

                {status === "error" && (
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 14px", background: "#fef2f2", border: "1px solid #fee2e2", borderRadius: 12 }}>
                    <AlertCircle size={14} color="#ef4444" style={{ flexShrink: 0, marginTop: 1 }} />
                    <p style={{ fontSize: 13, color: "#dc2626", margin: 0 }}>{errorMsg}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    width: "100%", height: 48, borderRadius: 100, border: "none",
                    background: "#0a0a0a", color: "#fff", fontSize: 14, fontWeight: 600,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    opacity: status === "loading" ? 0.6 : 1,
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.22)",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "loading") {
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(245,166,35,0.2), 0 0 24px rgba(245,166,35,0.4), 0 2px 16px rgba(0,0,0,0.22)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.22)";
                  }}
                >
                  {status === "loading" ? (
                    <><Loader2 size={15} className="animate-spin" /> Sending...</>
                  ) : (
                    <><span>Send message</span> <Send size={13} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 639px) {
          .cm-panel {
            top: auto !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 92dvh !important;
            border-radius: 20px 20px 0 0 !important;
            animation: cmSlideUp 0.32s cubic-bezier(0.32,0.72,0,1) forwards !important;
          }
        }
      `}</style>
    </>
  );
}
