"use client";

import { useState, useEffect } from "react";
import { MapPin, Phone, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const offices = [
  { icon: MapPin, region: "UK",    city: "Manchester", contact: "Orkyntechnologies@gmail.com", href: "mailto:Orkyntechnologies@gmail.com" },
  { icon: MapPin, region: "India", city: "Chennai",    contact: "Orkyntechnologies@gmail.com", href: "mailto:Orkyntechnologies@gmail.com" },
  { icon: Phone,  region: "Phone", city: "Mon to Fri, 8am to 10pm", contact: "+91 98400 93574", href: "tel:+919840093574" },
];

const countryCodes = [
  { code: "+44",  flag: "🇬🇧", name: "GB" },
  { code: "+91",  flag: "🇮🇳", name: "IN" },
  { code: "+1",   flag: "🇺🇸", name: "US" },
  { code: "+61",  flag: "🇦🇺", name: "AU" },
  { code: "+49",  flag: "🇩🇪", name: "DE" },
  { code: "+33",  flag: "🇫🇷", name: "FR" },
  { code: "+971", flag: "🇦🇪", name: "AE" },
  { code: "+65",  flag: "🇸🇬", name: "SG" },
  { code: "+64",  flag: "🇳🇿", name: "NZ" },
];

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [countryCode, setCountryCode] = useState("+44");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz.includes("London") || tz.includes("Europe/London")) setCountryCode("+44");
      else if (tz.includes("India") || tz.includes("Kolkata"))   setCountryCode("+91");
      else if (tz.includes("America"))                           setCountryCode("+1");
      else if (tz.includes("Australia"))                         setCountryCode("+61");
      else if (tz.includes("Dubai") || tz.includes("Abu_Dhabi")) setCountryCode("+971");
      else if (tz.includes("Singapore"))                         setCountryCode("+65");
    } catch {}
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

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch {
      setErrorMsg("Something went wrong. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white" aria-label="Contact Orkyn Technologies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">Contact</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Let us start the conversation.
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10">
              Tell us about your business and what you are trying to build. We will get back to you within 4 hours.
            </p>

            <div className="space-y-6">
              {offices.map((office) => {
                const Icon = office.icon;
                return (
                  <div key={office.region} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#C47D00]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{office.region}</p>
                      <p className="text-sm text-muted-foreground">{office.city}</p>
                      <a href={office.href}
                        className="text-sm text-[#C47D00] hover:underline transition-colors">
                        {office.contact}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-col gap-2.5">
              {["Same-day response guaranteed", "No commitment until discovery is complete", "NDAs signed before any conversation"].map((t) => (
                <div key={t} className="flex items-center gap-2.5">
                  <CheckCircle2 size={14} className="text-[#F5A623] flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#FAFAFA] border border-border rounded-2xl p-7 lg:p-8">

            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 size={28} className="text-emerald-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">Message sent.</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We have received your message and will be in touch within 4 hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                {/* Name row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name <span className="text-red-400" aria-hidden="true">*</span></Label>
                    <Input id="firstName" value={form.firstName} onChange={handleChange}
                      placeholder="First name" required disabled={status === "loading"} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name <span className="text-red-400" aria-hidden="true">*</span></Label>
                    <Input id="lastName" value={form.lastName} onChange={handleChange}
                      placeholder="Last name" required disabled={status === "loading"} />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email <span className="text-red-400" aria-hidden="true">*</span></Label>
                  <Input id="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="you@company.com" required disabled={status === "loading"} />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={e => setCountryCode(e.target.value)}
                      disabled={status === "loading"}
                      aria-label="Country code"
                      className="h-11 rounded-xl border border-border bg-white px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all duration-200 flex-shrink-0"
                      style={{ minWidth: "88px" }}
                    >
                      {countryCodes.map((c) => (
                        <option key={c.name} value={c.code}>{c.flag} {c.code}</option>
                      ))}
                    </select>
                    <Input id="phone" type="tel" value={form.phone} onChange={handleChange}
                      placeholder="(555) 000-0000" className="flex-1" disabled={status === "loading"} />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message <span className="text-red-400" aria-hidden="true">*</span></Label>
                  <Textarea id="message" value={form.message} onChange={handleChange}
                    placeholder="Tell us about your business and what you are looking to build..."
                    rows={5} required disabled={status === "loading"} />
                </div>

                {/* Privacy */}
                <p className="text-xs text-muted-foreground">
                  By submitting this form you agree to our{" "}
                  <a href="#privacy" className="underline hover:text-foreground transition-colors">privacy policy</a>.
                </p>

                {/* Error message */}
                {status === "error" && (
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-100">
                    <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-sm text-red-600">{errorMsg}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center justify-center w-full gap-2 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(0,0,0,0.2)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  style={{ height: "48px", background: "#0a0a0a", boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={14} aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
