"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const offices = [
  {
    icon: MapPin,
    region: "UK",
    city: "Manchester",
    email: "Orkyntechnologies@gmail.com",
  },
  {
    icon: MapPin,
    region: "India",
    city: "Chennai",
    email: "Orkyntechnologies@gmail.com",
  },
  {
    icon: Phone,
    region: "Phone",
    city: "Mon–Fri from 8am to 10pm",
    email: "+91 9840093574",
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-4">
              Contact
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Chat to our friendly team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              We&apos;d love to hear from you. Please fill out this form or
              shoot us an email.
            </p>

            {/* Office details */}
            <div className="space-y-6">
              {offices.map((office) => {
                const Icon = office.icon;
                return (
                  <div key={office.region} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#C47D00]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{office.region}</p>
                      <p className="text-sm text-muted-foreground">
                        {office.city}
                      </p>
                      <a
                        href={
                          office.email.startsWith("+")
                            ? `tel:${office.email.replace(/\s/g, "")}`
                            : `mailto:${office.email}`
                        }
                        className="text-sm text-[#C47D00] hover:underline"
                      >
                        {office.email}
                      </a>
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
                <h3 className="font-display font-bold text-xl">
                  Message sent!
                </h3>
                <p className="text-muted-foreground text-sm">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      id="firstName"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <div className="flex gap-2">
                    <div className="flex items-center px-3 rounded-xl border border-border bg-white text-sm text-muted-foreground whitespace-nowrap">
                      <Mail size={14} className="mr-1.5" />
                      +1
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="flex-1"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Leave us a message..."
                    rows={4}
                    required
                  />
                </div>

                {/* Privacy */}
                <p className="text-xs text-muted-foreground">
                  You agree to our friendly{" "}
                  <a href="#" className="underline hover:text-foreground">
                    privacy policy
                  </a>
                  .
                </p>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full gap-2"
                >
                  Send message
                  <Send size={15} />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
