"use client";

import { useState, useEffect } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const offices = [
  { icon: MapPin, region: "UK", city: "Manchester", email: "Orkyntechnologies@gmail.com" },
  { icon: MapPin, region: "India", city: "Chennai",    email: "Orkyntechnologies@gmail.com" },
  { icon: Phone,  region: "Phone", city: "Mon–Fri 8am–10pm", email: "+91 9840093574" },
];

// Country codes list (most common)
const countryCodes = [
  { code: "+1",   flag: "🇺🇸", name: "US" },
  { code: "+44",  flag: "🇬🇧", name: "GB" },
  { code: "+91",  flag: "🇮🇳", name: "IN" },
  { code: "+61",  flag: "🇦🇺", name: "AU" },
  { code: "+49",  flag: "🇩🇪", name: "DE" },
  { code: "+33",  flag: "🇫🇷", name: "FR" },
  { code: "+971", flag: "🇦🇪", name: "AE" },
  { code: "+65",  flag: "🇸🇬", name: "SG" },
  { code: "+1",   flag: "🇨🇦", name: "CA" },
  { code: "+64",  flag: "🇳🇿", name: "NZ" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [countryCode, setCountryCode] = useState("+44"); // default GB (Cannock, UK)

  // Auto-detect country code from browser timezone
  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz.includes("London") || tz.includes("Europe/London")) setCountryCode("+44");
      else if (tz.includes("India") || tz.includes("Kolkata")) setCountryCode("+91");
      else if (tz.includes("America")) setCountryCode("+1");
      else if (tz.includes("Australia")) setCountryCode("+61");
      else if (tz.includes("Dubai") || tz.includes("Abu_Dhabi")) setCountryCode("+971");
      else if (tz.includes("Singapore")) setCountryCode("+65");
    } catch {}
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">Contact</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Chat to our friendly team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              We&apos;d love to hear from you. Fill out the form or shoot us an email.
            </p>
            <div className="space-y-6">
              {offices.map((o) => {
                const Icon = o.icon;
                return (
                  <div key={o.region} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#C47D00]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{o.region}</p>
                      <p className="text-sm text-muted-foreground">{o.city}</p>
                      <a href={o.email.startsWith("+") ? `tel:${o.email.replace(/\s/g,"")}` : `mailto:${o.email}`}
                        className="text-sm text-[#C47D00] hover:underline">{o.email}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#FAFAFA] border border-border rounded-2xl p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Send size={24} className="text-emerald-600" />
                </div>
                <h3 className="font-display font-bold text-xl">Message sent!</h3>
                <p className="text-muted-foreground text-sm">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="First name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Last name" required />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@company.com" required />
                </div>

                {/* Phone with country code dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={e => setCountryCode(e.target.value)}
                      className="h-11 rounded-xl border border-border bg-white px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all duration-200 flex-shrink-0"
                      style={{ minWidth: "90px" }}
                    >
                      {countryCodes.map((c, i) => (
                        <option key={i} value={c.code}>{c.flag} {c.code}</option>
                      ))}
                    </select>
                    <Input id="phone" type="tel" placeholder="(555) 000-0000" className="flex-1" />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Leave us a message..." rows={4} required />
                </div>

                <p className="text-xs text-muted-foreground">
                  You agree to our friendly <a href="#" className="underline hover:text-foreground">privacy policy</a>.
                </p>

                <button type="submit"
                  className="flex items-center justify-center w-full gap-2 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(0,0,0,0.2)]"
                  style={{ height: "48px", background: "#0a0a0a", boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}
                >
                  Send message <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
