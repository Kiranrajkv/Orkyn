"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send, Loader2, CheckCircle2, AlertCircle, Search } from "lucide-react";

const COUNTRIES = [
  { code: "+93", flag: "🇦🇫", name: "Afghanistan" },
  { code: "+355", flag: "🇦🇱", name: "Albania" },
  { code: "+213", flag: "🇩🇿", name: "Algeria" },
  { code: "+376", flag: "🇦🇩", name: "Andorra" },
  { code: "+244", flag: "🇦🇴", name: "Angola" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+374", flag: "🇦🇲", name: "Armenia" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+43", flag: "🇦🇹", name: "Austria" },
  { code: "+994", flag: "🇦🇿", name: "Azerbaijan" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+32", flag: "🇧🇪", name: "Belgium" },
  { code: "+501", flag: "🇧🇿", name: "Belize" },
  { code: "+229", flag: "🇧🇯", name: "Benin" },
  { code: "+975", flag: "🇧🇹", name: "Bhutan" },
  { code: "+591", flag: "🇧🇴", name: "Bolivia" },
  { code: "+387", flag: "🇧🇦", name: "Bosnia" },
  { code: "+267", flag: "🇧🇼", name: "Botswana" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+673", flag: "🇧🇳", name: "Brunei" },
  { code: "+359", flag: "🇧🇬", name: "Bulgaria" },
  { code: "+226", flag: "🇧🇫", name: "Burkina Faso" },
  { code: "+855", flag: "🇰🇭", name: "Cambodia" },
  { code: "+237", flag: "🇨🇲", name: "Cameroon" },
  { code: "+1", flag: "🇨🇦", name: "Canada" },
  { code: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+57", flag: "🇨🇴", name: "Colombia" },
  { code: "+506", flag: "🇨🇷", name: "Costa Rica" },
  { code: "+385", flag: "🇭🇷", name: "Croatia" },
  { code: "+53", flag: "🇨🇺", name: "Cuba" },
  { code: "+357", flag: "🇨🇾", name: "Cyprus" },
  { code: "+420", flag: "🇨🇿", name: "Czech Republic" },
  { code: "+45", flag: "🇩🇰", name: "Denmark" },
  { code: "+593", flag: "🇪🇨", name: "Ecuador" },
  { code: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "+503", flag: "🇸🇻", name: "El Salvador" },
  { code: "+372", flag: "🇪🇪", name: "Estonia" },
  { code: "+251", flag: "🇪🇹", name: "Ethiopia" },
  { code: "+679", flag: "🇫🇯", name: "Fiji" },
  { code: "+358", flag: "🇫🇮", name: "Finland" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+241", flag: "🇬🇦", name: "Gabon" },
  { code: "+995", flag: "🇬🇪", name: "Georgia" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+233", flag: "🇬🇭", name: "Ghana" },
  { code: "+30", flag: "🇬🇷", name: "Greece" },
  { code: "+502", flag: "🇬🇹", name: "Guatemala" },
  { code: "+224", flag: "🇬🇳", name: "Guinea" },
  { code: "+592", flag: "🇬🇾", name: "Guyana" },
  { code: "+509", flag: "🇭🇹", name: "Haiti" },
  { code: "+504", flag: "🇭🇳", name: "Honduras" },
  { code: "+852", flag: "🇭🇰", name: "Hong Kong" },
  { code: "+36", flag: "🇭🇺", name: "Hungary" },
  { code: "+354", flag: "🇮🇸", name: "Iceland" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+62", flag: "🇮🇩", name: "Indonesia" },
  { code: "+98", flag: "🇮🇷", name: "Iran" },
  { code: "+964", flag: "🇮🇶", name: "Iraq" },
  { code: "+353", flag: "🇮🇪", name: "Ireland" },
  { code: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+1876", flag: "🇯🇲", name: "Jamaica" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+962", flag: "🇯🇴", name: "Jordan" },
  { code: "+7", flag: "🇰🇿", name: "Kazakhstan" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+996", flag: "🇰🇬", name: "Kyrgyzstan" },
  { code: "+856", flag: "🇱🇦", name: "Laos" },
  { code: "+371", flag: "🇱🇻", name: "Latvia" },
  { code: "+961", flag: "🇱🇧", name: "Lebanon" },
  { code: "+231", flag: "🇱🇷", name: "Liberia" },
  { code: "+218", flag: "🇱🇾", name: "Libya" },
  { code: "+370", flag: "🇱🇹", name: "Lithuania" },
  { code: "+352", flag: "🇱🇺", name: "Luxembourg" },
  { code: "+853", flag: "🇲🇴", name: "Macao" },
  { code: "+261", flag: "🇲🇬", name: "Madagascar" },
  { code: "+265", flag: "🇲🇼", name: "Malawi" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+960", flag: "🇲🇻", name: "Maldives" },
  { code: "+223", flag: "🇲🇱", name: "Mali" },
  { code: "+356", flag: "🇲🇹", name: "Malta" },
  { code: "+222", flag: "🇲🇷", name: "Mauritania" },
  { code: "+230", flag: "🇲🇺", name: "Mauritius" },
  { code: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "+373", flag: "🇲🇩", name: "Moldova" },
  { code: "+976", flag: "🇲🇳", name: "Mongolia" },
  { code: "+212", flag: "🇲🇦", name: "Morocco" },
  { code: "+258", flag: "🇲🇿", name: "Mozambique" },
  { code: "+95", flag: "🇲🇲", name: "Myanmar" },
  { code: "+264", flag: "🇳🇦", name: "Namibia" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+64", flag: "🇳🇿", name: "New Zealand" },
  { code: "+505", flag: "🇳🇮", name: "Nicaragua" },
  { code: "+227", flag: "🇳🇪", name: "Niger" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+47", flag: "🇳🇴", name: "Norway" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+507", flag: "🇵🇦", name: "Panama" },
  { code: "+675", flag: "🇵🇬", name: "Papua New Guinea" },
  { code: "+595", flag: "🇵🇾", name: "Paraguay" },
  { code: "+51", flag: "🇵🇪", name: "Peru" },
  { code: "+63", flag: "🇵🇭", name: "Philippines" },
  { code: "+48", flag: "🇵🇱", name: "Poland" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+40", flag: "🇷🇴", name: "Romania" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+250", flag: "🇷🇼", name: "Rwanda" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+221", flag: "🇸🇳", name: "Senegal" },
  { code: "+381", flag: "🇷🇸", name: "Serbia" },
  { code: "+232", flag: "🇸🇱", name: "Sierra Leone" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+421", flag: "🇸🇰", name: "Slovakia" },
  { code: "+386", flag: "🇸🇮", name: "Slovenia" },
  { code: "+252", flag: "🇸🇴", name: "Somalia" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "+211", flag: "🇸🇸", name: "South Sudan" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+249", flag: "🇸🇩", name: "Sudan" },
  { code: "+597", flag: "🇸🇷", name: "Suriname" },
  { code: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "+41", flag: "🇨🇭", name: "Switzerland" },
  { code: "+963", flag: "🇸🇾", name: "Syria" },
  { code: "+886", flag: "🇹🇼", name: "Taiwan" },
  { code: "+992", flag: "🇹🇯", name: "Tajikistan" },
  { code: "+255", flag: "🇹🇿", name: "Tanzania" },
  { code: "+66", flag: "🇹🇭", name: "Thailand" },
  { code: "+228", flag: "🇹🇬", name: "Togo" },
  { code: "+216", flag: "🇹🇳", name: "Tunisia" },
  { code: "+90", flag: "🇹🇷", name: "Turkey" },
  { code: "+993", flag: "🇹🇲", name: "Turkmenistan" },
  { code: "+256", flag: "🇺🇬", name: "Uganda" },
  { code: "+380", flag: "🇺🇦", name: "Ukraine" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+598", flag: "🇺🇾", name: "Uruguay" },
  { code: "+998", flag: "🇺🇿", name: "Uzbekistan" },
  { code: "+58", flag: "🇻🇪", name: "Venezuela" },
  { code: "+84", flag: "🇻🇳", name: "Vietnam" },
  { code: "+967", flag: "🇾🇪", name: "Yemen" },
  { code: "+260", flag: "🇿🇲", name: "Zambia" },
  { code: "+263", flag: "🇿🇼", name: "Zimbabwe" },
];

type Status = "idle" | "loading" | "success" | "error";

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [cc, setCC] = useState("+44");
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");
  const [search, setSearch] = useState("");
  const [showCC, setShowCC] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  const firstRef = useRef<HTMLInputElement>(null);
  const ccRef = useRef<HTMLDivElement>(null);

  const filtered = COUNTRIES.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.code.includes(search)
  );
  const selected =
    COUNTRIES.find((c) => c.code === cc) ||
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

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) });
        const data = await res.json();
        const dialCode = data.country_calling_code;
        if (dialCode && COUNTRIES.find((c) => c.code === dialCode)) {
          setCC(dialCode);
          return;
        }
      } catch {}

      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const tzMap: Record<string, string> = {
          "Asia/Kolkata": "+91",
          "Asia/Calcutta": "+91",
          "America/New_York": "+1",
          "America/Chicago": "+1",
          "America/Los_Angeles": "+1",
          "America/Toronto": "+1",
          "America/Vancouver": "+1",
          "America/Denver": "+1",
          "Australia/Sydney": "+61",
          "Australia/Melbourne": "+61",
          "Australia/Brisbane": "+61",
          "Australia/Perth": "+61",
          "Asia/Dubai": "+971",
          "Asia/Abu_Dhabi": "+971",
          "Asia/Singapore": "+65",
          "Asia/Karachi": "+92",
          "Asia/Dhaka": "+880",
          "Asia/Colombo": "+94",
          "Asia/Kuala_Lumpur": "+60",
          "Asia/Tokyo": "+81",
          "Asia/Seoul": "+82",
          "Asia/Shanghai": "+86",
          "Asia/Hong_Kong": "+852",
          "America/Sao_Paulo": "+55",
          "America/Mexico_City": "+52",
          "Africa/Johannesburg": "+27",
          "Africa/Lagos": "+234",
          "Africa/Nairobi": "+254",
          "Africa/Cairo": "+20",
          "Asia/Riyadh": "+966",
          "Asia/Qatar": "+974",
          "Europe/Amsterdam": "+31",
          "Europe/Stockholm": "+46",
          "Europe/Oslo": "+47",
          "Europe/Copenhagen": "+45",
          "Europe/Zurich": "+41",
          "Europe/Dublin": "+353",
          "Europe/Madrid": "+34",
          "Europe/Rome": "+39",
          "Europe/Berlin": "+49",
          "Europe/Paris": "+33",
          "Pacific/Auckland": "+64",
          "Europe/London": "+44",
        };
        const match = tzMap[tz] || Object.entries(tzMap).find(([k]) => tz.startsWith(k.split("/")[0]))?.[1];
        if (match) setCC(match);
      } catch {}
    };

    detectCountry();
  }, []);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, countryCode: cc }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch {
      setErrMsg("Check your connection and try again.");
      setStatus("error");
    }
  };

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
                  onClick={() => {
                    setStatus("idle");
                    onClose();
                  }}
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
                        style={{
                          display: "block",
                          fontSize: "12px",
                          fontWeight: 500,
                          color: "#555",
                          marginBottom: 6,
                        }}
                      >
                        {label as string} {req && <span style={{ color: "#f87171" }}>*</span>}
                      </label>
                      <input
                        ref={id === "firstName" ? firstRef : undefined}
                        type="text"
                        value={form[id as keyof typeof form]}
                        onChange={set(id as string)}
                        placeholder={label as string}
                        required={!!req}
                        disabled={status === "loading"}
                        style={{
                          width: "100%",
                          height: 40,
                          padding: "0 14px",
                          borderRadius: 12,
                          border: "1px solid #e5e5e5",
                          fontSize: 14,
                          color: "#0a0a0a",
                          outline: "none",
                          transition: "border-color 0.15s",
                          boxSizing: "border-box",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#0a0a0a")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e5e5")}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#555",
                      marginBottom: 6,
                    }}
                  >
                    Email <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@company.com"
                    required
                    disabled={status === "loading"}
                    style={{
                      width: "100%",
                      height: 40,
                      padding: "0 14px",
                      borderRadius: 12,
                      border: "1px solid #e5e5e5",
                      fontSize: 14,
                      color: "#0a0a0a",
                      outline: "none",
                      transition: "border-color 0.15s",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#0a0a0a")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e5e5")}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#555",
                      marginBottom: 6,
                    }}
                  >
                    Phone number
                  </label>
                  <div style={{ display: "flex", gap: 8 }}>
                    <div ref={ccRef} style={{ position: "relative", flexShrink: 0 }}>
                      <button
                        type="button"
                        onClick={() => setShowCC((s) => !s)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          height: 40,
                          padding: "0 12px",
                          borderRadius: 12,
                          border: "1px solid #e5e5e5",
                          background: "#fff",
                          cursor: "pointer",
                          fontSize: 14,
                          minWidth: 84,
                          transition: "border-color 0.15s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#0a0a0a")}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e5e5e5")}
                      >
                        <span style={{ fontSize: 16, lineHeight: 1 }}>{selected.flag}</span>
                        <span style={{ fontSize: 13, fontWeight: 500 }}>{selected.code}</span>
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          style={{
                            color: "#aaa",
                            transform: showCC ? "rotate(180deg)" : "none",
                            transition: "transform 0.2s",
                          }}
                        >
                          <path
                            d="M1 1l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {showCC && (
                        <div
                          style={{
                            position: "absolute",
                            top: "calc(100% + 6px)",
                            left: 0,
                            width: 240,
                            borderRadius: 16,
                            border: "1px solid #e5e5e5",
                            background: "#fff",
                            zIndex: 50,
                            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                            overflow: "hidden",
                          }}
                        >
                          <div style={{ padding: 8, borderBottom: "1px solid #f0f0f0" }}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                background: "#f5f5f5",
                                borderRadius: 10,
                                padding: "8px 12px",
                              }}
                            >
                              <Search size={12} color="#aaa" />
                              <input
                                autoFocus
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search..."
                                style={{
                                  flex: 1,
                                  background: "none",
                                  border: "none",
                                  outline: "none",
                                  fontSize: 13,
                                  color: "#0a0a0a",
                                }}
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
                                  onClick={() => {
                                    setCC(c.code);
                                    setShowCC(false);
                                    setSearch("");
                                  }}
                                  style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: "10px 16px",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    textAlign: "left",
                                    transition: "background 0.1s",
                                  }}
                                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f5f5")}
                                  onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                                >
                                  <span style={{ fontSize: 16, lineHeight: 1 }}>{c.flag}</span>
                                  <span
                                    style={{
                                      flex: 1,
                                      fontSize: 13,
                                      fontWeight: 500,
                                      color: "#0a0a0a",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      whiteSpace: "nowrap",
                                    }}
                                  >
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
                      onChange={set("phone")}
                      placeholder="(555) 000-0000"
                      disabled={status === "loading"}
                      style={{
                        flex: 1,
                        height: 40,
                        padding: "0 14px",
                        borderRadius: 12,
                        border: "1px solid #e5e5e5",
                        fontSize: 14,
                        color: "#0a0a0a",
                        outline: "none",
                        transition: "border-color 0.15s",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#0a0a0a")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e5e5")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#555",
                      marginBottom: 6,
                    }}
                  >
                    Message <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us about your business and what you are looking to build..."
                    rows={4}
                    required
                    disabled={status === "loading"}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: 12,
                      border: "1px solid #e5e5e5",
                      fontSize: 14,
                      color: "#0a0a0a",
                      outline: "none",
                      resize: "none",
                      transition: "border-color 0.15s",
                      boxSizing: "border-box",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#0a0a0a")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e5e5")}
                  />
                </div>

                <p style={{ fontSize: "12px", color: "#aaa", margin: 0 }}>
                  By submitting you agree to our{" "}
                  <a href="/privacy" style={{ color: "#888", textDecoration: "underline" }}>
                    privacy policy
                  </a>.
                </p>

                {status === "error" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      padding: "12px 14px",
                      background: "#fef2f2",
                      border: "1px solid #fee2e2",
                      borderRadius: 12,
                    }}
                  >
                    <AlertCircle size={14} color="#ef4444" style={{ flexShrink: 0, marginTop: 1 }} />
                    <p style={{ fontSize: 13, color: "#dc2626", margin: 0 }}>{errMsg}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    width: "100%",
                    height: 48,
                    borderRadius: 100,
                    border: "none",
                    background: "#0a0a0a",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    opacity: status === "loading" ? 0.6 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.22)",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "loading") {
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(245,166,35,0.2), 0 0 24px rgba(245,166,35,0.4), 0 2px 16px rgba(0,0,0,0.22)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.22)";
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <span>Send message</span> <Send size={13} />
                    </>
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