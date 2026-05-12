"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Mail, Clock, Send, Loader2, CheckCircle2, AlertCircle, Search, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/FadeIn";

const offices = [
  { icon: MapPin, region: "Location",   detail: "UK and India",               sub: null,             href: null },
  { icon: Mail,   region: "Email",      detail: null,                         sub: null,             href: "mailto:hello@orkyn.ai", linkLabel: "hello@orkyn.ai" },
  { icon: Clock,  region: "Open Hours", detail: "Monday to Saturday",         sub: "Available 24/7", href: null },
];

// Full world country codes list
const ALL_COUNTRIES = [
  { code: "+93",  flag: "🇦🇫", name: "Afghanistan" },
  { code: "+355", flag: "🇦🇱", name: "Albania" },
  { code: "+213", flag: "🇩🇿", name: "Algeria" },
  { code: "+376", flag: "🇦🇩", name: "Andorra" },
  { code: "+244", flag: "🇦🇴", name: "Angola" },
  { code: "+54",  flag: "🇦🇷", name: "Argentina" },
  { code: "+374", flag: "🇦🇲", name: "Armenia" },
  { code: "+61",  flag: "🇦🇺", name: "Australia" },
  { code: "+43",  flag: "🇦🇹", name: "Austria" },
  { code: "+994", flag: "🇦🇿", name: "Azerbaijan" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+32",  flag: "🇧🇪", name: "Belgium" },
  { code: "+501", flag: "🇧🇿", name: "Belize" },
  { code: "+229", flag: "🇧🇯", name: "Benin" },
  { code: "+975", flag: "🇧🇹", name: "Bhutan" },
  { code: "+591", flag: "🇧🇴", name: "Bolivia" },
  { code: "+387", flag: "🇧🇦", name: "Bosnia" },
  { code: "+267", flag: "🇧🇼", name: "Botswana" },
  { code: "+55",  flag: "🇧🇷", name: "Brazil" },
  { code: "+673", flag: "🇧🇳", name: "Brunei" },
  { code: "+359", flag: "🇧🇬", name: "Bulgaria" },
  { code: "+226", flag: "🇧🇫", name: "Burkina Faso" },
  { code: "+855", flag: "🇰🇭", name: "Cambodia" },
  { code: "+237", flag: "🇨🇲", name: "Cameroon" },
  { code: "+1",   flag: "🇨🇦", name: "Canada" },
  { code: "+56",  flag: "🇨🇱", name: "Chile" },
  { code: "+86",  flag: "🇨🇳", name: "China" },
  { code: "+57",  flag: "🇨🇴", name: "Colombia" },
  { code: "+506", flag: "🇨🇷", name: "Costa Rica" },
  { code: "+385", flag: "🇭🇷", name: "Croatia" },
  { code: "+53",  flag: "🇨🇺", name: "Cuba" },
  { code: "+357", flag: "🇨🇾", name: "Cyprus" },
  { code: "+420", flag: "🇨🇿", name: "Czech Republic" },
  { code: "+45",  flag: "🇩🇰", name: "Denmark" },
  { code: "+593", flag: "🇪🇨", name: "Ecuador" },
  { code: "+20",  flag: "🇪🇬", name: "Egypt" },
  { code: "+503", flag: "🇸🇻", name: "El Salvador" },
  { code: "+372", flag: "🇪🇪", name: "Estonia" },
  { code: "+251", flag: "🇪🇹", name: "Ethiopia" },
  { code: "+679", flag: "🇫🇯", name: "Fiji" },
  { code: "+358", flag: "🇫🇮", name: "Finland" },
  { code: "+33",  flag: "🇫🇷", name: "France" },
  { code: "+241", flag: "🇬🇦", name: "Gabon" },
  { code: "+995", flag: "🇬🇪", name: "Georgia" },
  { code: "+49",  flag: "🇩🇪", name: "Germany" },
  { code: "+233", flag: "🇬🇭", name: "Ghana" },
  { code: "+30",  flag: "🇬🇷", name: "Greece" },
  { code: "+502", flag: "🇬🇹", name: "Guatemala" },
  { code: "+224", flag: "🇬🇳", name: "Guinea" },
  { code: "+592", flag: "🇬🇾", name: "Guyana" },
  { code: "+509", flag: "🇭🇹", name: "Haiti" },
  { code: "+504", flag: "🇭🇳", name: "Honduras" },
  { code: "+852", flag: "🇭🇰", name: "Hong Kong" },
  { code: "+36",  flag: "🇭🇺", name: "Hungary" },
  { code: "+354", flag: "🇮🇸", name: "Iceland" },
  { code: "+91",  flag: "🇮🇳", name: "India" },
  { code: "+62",  flag: "🇮🇩", name: "Indonesia" },
  { code: "+98",  flag: "🇮🇷", name: "Iran" },
  { code: "+964", flag: "🇮🇶", name: "Iraq" },
  { code: "+353", flag: "🇮🇪", name: "Ireland" },
  { code: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "+39",  flag: "🇮🇹", name: "Italy" },
  { code: "+1876",flag: "🇯🇲", name: "Jamaica" },
  { code: "+81",  flag: "🇯🇵", name: "Japan" },
  { code: "+962", flag: "🇯🇴", name: "Jordan" },
  { code: "+7",   flag: "🇰🇿", name: "Kazakhstan" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "+82",  flag: "🇰🇷", name: "South Korea" },
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
  { code: "+60",  flag: "🇲🇾", name: "Malaysia" },
  { code: "+960", flag: "🇲🇻", name: "Maldives" },
  { code: "+223", flag: "🇲🇱", name: "Mali" },
  { code: "+356", flag: "🇲🇹", name: "Malta" },
  { code: "+222", flag: "🇲🇷", name: "Mauritania" },
  { code: "+230", flag: "🇲🇺", name: "Mauritius" },
  { code: "+52",  flag: "🇲🇽", name: "Mexico" },
  { code: "+373", flag: "🇲🇩", name: "Moldova" },
  { code: "+976", flag: "🇲🇳", name: "Mongolia" },
  { code: "+212", flag: "🇲🇦", name: "Morocco" },
  { code: "+258", flag: "🇲🇿", name: "Mozambique" },
  { code: "+95",  flag: "🇲🇲", name: "Myanmar" },
  { code: "+264", flag: "🇳🇦", name: "Namibia" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+31",  flag: "🇳🇱", name: "Netherlands" },
  { code: "+64",  flag: "🇳🇿", name: "New Zealand" },
  { code: "+505", flag: "🇳🇮", name: "Nicaragua" },
  { code: "+227", flag: "🇳🇪", name: "Niger" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+47",  flag: "🇳🇴", name: "Norway" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+92",  flag: "🇵🇰", name: "Pakistan" },
  { code: "+507", flag: "🇵🇦", name: "Panama" },
  { code: "+675", flag: "🇵🇬", name: "Papua New Guinea" },
  { code: "+595", flag: "🇵🇾", name: "Paraguay" },
  { code: "+51",  flag: "🇵🇪", name: "Peru" },
  { code: "+63",  flag: "🇵🇭", name: "Philippines" },
  { code: "+48",  flag: "🇵🇱", name: "Poland" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+40",  flag: "🇷🇴", name: "Romania" },
  { code: "+7",   flag: "🇷🇺", name: "Russia" },
  { code: "+250", flag: "🇷🇼", name: "Rwanda" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+221", flag: "🇸🇳", name: "Senegal" },
  { code: "+381", flag: "🇷🇸", name: "Serbia" },
  { code: "+232", flag: "🇸🇱", name: "Sierra Leone" },
  { code: "+65",  flag: "🇸🇬", name: "Singapore" },
  { code: "+421", flag: "🇸🇰", name: "Slovakia" },
  { code: "+386", flag: "🇸🇮", name: "Slovenia" },
  { code: "+252", flag: "🇸🇴", name: "Somalia" },
  { code: "+27",  flag: "🇿🇦", name: "South Africa" },
  { code: "+211", flag: "🇸🇸", name: "South Sudan" },
  { code: "+34",  flag: "🇪🇸", name: "Spain" },
  { code: "+94",  flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+249", flag: "🇸🇩", name: "Sudan" },
  { code: "+597", flag: "🇸🇷", name: "Suriname" },
  { code: "+46",  flag: "🇸🇪", name: "Sweden" },
  { code: "+41",  flag: "🇨🇭", name: "Switzerland" },
  { code: "+963", flag: "🇸🇾", name: "Syria" },
  { code: "+886", flag: "🇹🇼", name: "Taiwan" },
  { code: "+992", flag: "🇹🇯", name: "Tajikistan" },
  { code: "+255", flag: "🇹🇿", name: "Tanzania" },
  { code: "+66",  flag: "🇹🇭", name: "Thailand" },
  { code: "+228", flag: "🇹🇬", name: "Togo" },
  { code: "+216", flag: "🇹🇳", name: "Tunisia" },
  { code: "+90",  flag: "🇹🇷", name: "Turkey" },
  { code: "+993", flag: "🇹🇲", name: "Turkmenistan" },
  { code: "+256", flag: "🇺🇬", name: "Uganda" },
  { code: "+380", flag: "🇺🇦", name: "Ukraine" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+44",  flag: "🇬🇧", name: "United Kingdom" },
  { code: "+1",   flag: "🇺🇸", name: "United States" },
  { code: "+598", flag: "🇺🇾", name: "Uruguay" },
  { code: "+998", flag: "🇺🇿", name: "Uzbekistan" },
  { code: "+58",  flag: "🇻🇪", name: "Venezuela" },
  { code: "+84",  flag: "🇻🇳", name: "Vietnam" },
  { code: "+967", flag: "🇾🇪", name: "Yemen" },
  { code: "+260", flag: "🇿🇲", name: "Zambia" },
  { code: "+263", flag: "🇿🇼", name: "Zimbabwe" },
];

type Status = "idle" | "loading" | "success" | "error";

function CountryCodePicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = ALL_COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.code.includes(search)
  );

  const selected = ALL_COUNTRIES.find(c => c.code === value) || ALL_COUNTRIES.find(c => c.name === "United Kingdom")!;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  return (
    <div ref={ref} className="relative flex-shrink-0">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 h-11 px-3 rounded-xl border border-border bg-white text-sm font-medium hover:border-foreground/30 transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/10"
        style={{ minWidth: "90px" }}
        aria-label="Select country code"
        aria-expanded={open}
      >
        <span>{selected.flag}</span>
        <span className="text-foreground">{selected.code}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true">
          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1.5 z-50 w-64 rounded-2xl border border-border bg-white shadow-xl overflow-hidden"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
          {/* Search */}
          <div className="p-2 border-b border-border">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F5F5F5]">
              <Search size={13} className="text-muted-foreground flex-shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search country..."
                className="flex-1 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground"
                aria-label="Search country code"
              />
              {search && (
                <button type="button" onClick={() => setSearch("")} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Clear search">
                  <X size={12} />
                </button>
              )}
            </div>
          </div>
          {/* List */}
          <div className="max-h-52 overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-6">No results</p>
            ) : (
              filtered.map((c, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => { onChange(c.code); setOpen(false); setSearch(""); }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-[#F5F5F5] transition-colors text-left"
                  style={{ background: c.code === value && c.name === selected.name ? "#F5F5F5" : undefined }}
                >
                  <span className="text-base flex-shrink-0">{c.flag}</span>
                  <span className="flex-1 text-foreground font-medium truncate">{c.name}</span>
                  <span className="text-muted-foreground text-xs flex-shrink-0">{c.code}</span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function Contact() {
  const [countryCode, setCountryCode] = useState("+44");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) });
        const data = await res.json();
        const dialCode = data.country_calling_code;
        if (dialCode && ALL_COUNTRIES.find(c => c.code === dialCode)) {
          setCountryCode(dialCode);
          return;
        }
      } catch {}
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const tzMap: Record<string, string> = {
          "Asia/Kolkata": "+91", "Asia/Calcutta": "+91",
          "America/New_York": "+1", "America/Chicago": "+1",
          "America/Los_Angeles": "+1", "America/Toronto": "+1",
          "America/Vancouver": "+1", "America/Denver": "+1",
          "Australia/Sydney": "+61", "Australia/Melbourne": "+61",
          "Australia/Brisbane": "+61", "Australia/Perth": "+61",
          "Asia/Dubai": "+971", "Asia/Abu_Dhabi": "+971",
          "Asia/Singapore": "+65",
          "Asia/Karachi": "+92",
          "Asia/Dhaka": "+880",
          "Asia/Colombo": "+94",
          "Asia/Kuala_Lumpur": "+60",
          "Asia/Tokyo": "+81",
          "Asia/Seoul": "+82",
          "Asia/Shanghai": "+86", "Asia/Hong_Kong": "+852",
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
        if (match) setCountryCode(match);
      } catch {}
    };
    detectCountry();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, countryCode }),
      });
      const data = await res.json();
      if (!res.ok) { setErrorMsg(data.error || "Something went wrong. Please try again."); setStatus("error"); return; }
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch {
      setErrorMsg("Something went wrong. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white overflow-hidden" aria-label="Contact Orkyn Technologies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left */}
          <FadeIn direction="left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">Contact</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Let us start the conversation.
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10">
              Tell us about your business and what you are trying to build. We will get back to you within 4 hours.
            </p>

            <div className="space-y-5">
              {offices.map((office) => {
                const Icon = office.icon;
                return (
                  <div key={office.region} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#C47D00]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{office.region}</p>
                      {office.detail && <p className="text-sm text-muted-foreground">{office.detail}</p>}
                      {office.sub && <p className="text-sm text-muted-foreground">{office.sub}</p>}
                      {office.href && office.linkLabel && (
                        <a href={office.href} className="text-sm text-[#C47D00] hover:underline transition-colors">{office.linkLabel}</a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col gap-2.5">
              {["Same-day response guaranteed", "No commitment until discovery is complete", "NDAs signed before any conversation"].map((t) => (
                <div key={t} className="flex items-center gap-2.5">
                  <CheckCircle2 size={14} className="text-[#F5A623] flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{t}</span>
                </div>
              ))}
            </div>
          </div>
          </FadeIn>

          {/* Right form */}
          <FadeIn direction="right" delay={150}>
          <div className="bg-[#FAFAFA] border border-border rounded-2xl p-7 lg:p-8">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 size={28} className="text-emerald-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">Message sent.</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">We have received your message and will be in touch within 4 hours.</p>
                </div>
                <button type="button" onClick={() => setStatus("idle")}
                  className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name <span className="text-red-400" aria-hidden="true">*</span></Label>
                    <Input id="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" required disabled={status === "loading"} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name <span className="text-red-400" aria-hidden="true">*</span></Label>
                    <Input id="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" required disabled={status === "loading"} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email <span className="text-red-400" aria-hidden="true">*</span></Label>
                  <Input id="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required disabled={status === "loading"} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <div className="flex gap-2">
                    <CountryCodePicker value={countryCode} onChange={setCountryCode} />
                    <Input id="phone" type="tel" value={form.phone} onChange={handleChange}
                      placeholder="(555) 000-0000" className="flex-1" disabled={status === "loading"} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message <span className="text-red-400" aria-hidden="true">*</span></Label>
                  <Textarea id="message" value={form.message} onChange={handleChange}
                    placeholder="Tell us about your business and what you are looking to build..."
                    rows={5} required disabled={status === "loading"} />
                </div>

                <p className="text-xs text-muted-foreground">
                  By submitting this form you agree to our{" "}
                  <a href="/privacy" className="underline hover:text-foreground transition-colors">privacy policy</a>.
                </p>

                {status === "error" && (
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-100">
                    <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-sm text-red-600">{errorMsg}</p>
                  </div>
                )}

                <button type="submit" disabled={status === "loading"}
                  className="flex items-center justify-center w-full gap-2 rounded-full font-semibold text-sm text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ height: "48px", background: "#0a0a0a", boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 4px rgba(245,166,35,0.28), 0 0 36px rgba(245,166,35,0.22), 0 2px 12px rgba(0,0,0,0.15)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.15)"; }}>
                  {status === "loading" ? (
                    <><Loader2 size={15} className="animate-spin" aria-hidden="true" />Sending...</>
                  ) : (
                    <>Send message<Send size={14} aria-hidden="true" /></>
                  )}
                </button>
              </form>
            )}
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
