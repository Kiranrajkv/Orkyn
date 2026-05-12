"use client";

import { useState, useEffect } from "react";
import { COUNTRIES, TIMEZONE_TO_DIAL } from "./countries";

export type ContactStatus = "idle" | "loading" | "success" | "error";

const EMPTY_FORM = { firstName: "", lastName: "", email: "", phone: "", message: "" };

export function useContactForm() {
  const [countryCode, setCountryCode] = useState("+44");
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState(EMPTY_FORM);

  useEffect(() => {
    const detect = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) });
        const data = await res.json();
        const dialCode = data.country_calling_code;
        if (dialCode && COUNTRIES.find(c => c.code === dialCode)) {
          setCountryCode(dialCode);
          return;
        }
      } catch {}
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const match =
          TIMEZONE_TO_DIAL[tz] ||
          Object.entries(TIMEZONE_TO_DIAL).find(([k]) => tz.startsWith(k.split("/")[0]))?.[1];
        if (match) setCountryCode(match);
      } catch {}
    };
    detect();
  }, []);

  // For components using e.target.id as the field key (Contact.tsx)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // For components using a curried setter (ContactModal.tsx)
  const setField = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [key]: e.target.value }));
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
      setForm(EMPTY_FORM);
    } catch {
      setErrorMsg("Something went wrong. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const reset = () => setStatus("idle");

  return { form, countryCode, setCountryCode, status, errorMsg, handleChange, setField, handleSubmit, reset };
}
