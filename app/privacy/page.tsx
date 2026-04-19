import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | Orkyn Technologies",
  description: "How Orkyn Technologies collects, uses and protects your personal data. GDPR compliant privacy policy for clients and website visitors.",
  alternates: { canonical: "https://orkyn.ai/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">

      {/* Nav */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/Orkyn_Logo.svg" alt="Orkyn Technologies" width={28} height={32} className="h-7 w-auto" />
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Back to site
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-20">

        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C47D00] mb-3">Legal</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-base">Last updated: April 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10 text-[15px] leading-relaxed text-gray-700">

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Who we are</h2>
            <p>
              Orkyn Technologies is a custom software, ERP and digital systems agency with offices in UK and India. We are the data controller for personal information collected through our website at orkyn.ai and through our client engagements.
            </p>
            <p className="mt-3">
              You can contact us regarding any privacy matters at <a href="mailto:hello@orkyn.ai" className="text-[#C47D00] underline">hello@orkyn.ai</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">2. What information we collect</h2>
            <p>We collect the following categories of personal information:</p>
            <div className="mt-4 space-y-4">
              <div className="pl-4 border-l-2 border-[#F5A623]/30">
                <p className="font-semibold text-foreground">Contact form submissions</p>
                <p className="mt-1">When you submit our contact form, we collect your first name, last name, email address, phone number and the content of your message. This information is used solely to respond to your enquiry.</p>
              </div>
              <div className="pl-4 border-l-2 border-[#F5A623]/30">
                <p className="font-semibold text-foreground">Analytics data</p>
                <p className="mt-1">We collect anonymous usage data including pages visited, time spent on the site, device type, browser, and approximate geographic location. This data is aggregated and cannot be used to identify you personally.</p>
              </div>
              <div className="pl-4 border-l-2 border-[#F5A623]/30">
                <p className="font-semibold text-foreground">Client project data</p>
                <p className="mt-1">During client engagements, we may process business data, operational data and other information necessary to deliver the agreed services. This is governed by a separate Data Processing Agreement and our NDA.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">3. How we use your information</h2>
            <p>We use your personal information for the following purposes:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "To respond to enquiries submitted through our contact form",
                "To communicate with existing and prospective clients about our services",
                "To deliver software development and consulting services to clients",
                "To improve our website and user experience through anonymous analytics",
                "To comply with our legal and contractual obligations",
                "To send project-related communications to clients who have engaged our services",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">We do not use your personal data for automated decision-making or profiling. We do not sell, rent or share your personal information with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Legal basis for processing</h2>
            <p>Under UK GDPR, we process your personal data under the following legal bases:</p>
            <div className="mt-4 space-y-3">
              {[
                { basis: "Legitimate interests", detail: "To respond to enquiries and communicate about our services with people who have expressed interest in working with us." },
                { basis: "Contract performance", detail: "To deliver the services agreed in our client contracts and to fulfil our contractual obligations." },
                { basis: "Legal obligation", detail: "To comply with applicable laws and regulations including tax, financial reporting and data protection requirements." },
                { basis: "Consent", detail: "Where you have provided explicit consent, for example subscribing to communications. You may withdraw consent at any time." },
              ].map((item, i) => (
                <div key={i} className="pl-4 border-l-2 border-[#F5A623]/30">
                  <p className="font-semibold text-foreground">{item.basis}</p>
                  <p className="mt-0.5">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Third-party services we use</h2>
            <p>We use the following third-party services that may process your data on our behalf:</p>
            <div className="mt-4 space-y-4">
              {[
                { name: "Resend", purpose: "Email delivery service used to receive contact form submissions. Form data is transmitted securely and used only to deliver your message to our team. Resend is GDPR compliant.", link: "https://resend.com/privacy" },
                { name: "Vercel", purpose: "Our website is hosted on Vercel. Vercel collects basic server logs and performance data as part of hosting. Vercel is GDPR compliant and processes data within approved regions.", link: "https://vercel.com/legal/privacy-policy" },
                { name: "Vercel Analytics", purpose: "We use Vercel Analytics to collect anonymous page view and performance data. No personally identifiable information is collected. Data is aggregated and anonymised.", link: "https://vercel.com/legal/privacy-policy" },
                { name: "Google Analytics 4", purpose: "We use Google Analytics to understand how visitors use our site. GA4 collects anonymised usage data. We have configured GA4 to anonymise IP addresses. You can opt out using the Google Analytics Opt-out Browser Add-on.", link: "https://policies.google.com/privacy" },
              ].map((service, i) => (
                <div key={i} className="pl-4 border-l-2 border-[#F5A623]/30">
                  <p className="font-semibold text-foreground">{service.name}</p>
                  <p className="mt-0.5">{service.purpose}</p>
                  <a href={service.link} target="_blank" rel="noopener noreferrer" className="text-xs text-[#C47D00] underline mt-1 inline-block">Privacy policy</a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Cookies</h2>
            <p>Our website uses the following types of cookies:</p>
            <div className="mt-4 space-y-3">
              {[
                { type: "Essential cookies", detail: "Required for the website to function correctly. These cannot be disabled." },
                { type: "Analytics cookies", detail: "Used by Google Analytics and Vercel Analytics to collect anonymous usage data. These can be disabled through your browser settings or using the Google Analytics opt-out tool." },
              ].map((item, i) => (
                <div key={i} className="pl-4 border-l-2 border-[#F5A623]/30">
                  <p className="font-semibold text-foreground">{item.type}</p>
                  <p className="mt-0.5">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">7. How long we keep your data</h2>
            <div className="space-y-3">
              {[
                { category: "Contact form enquiries", period: "We retain contact form submissions for 12 months from the date of receipt, unless a client relationship develops in which case data is retained for the duration of the engagement plus 6 years as required by UK law." },
                { category: "Client project data", period: "Retained for the duration of the contract and for 6 years after the end of the engagement to comply with legal and financial record-keeping requirements." },
                { category: "Analytics data", period: "Anonymous analytics data is retained for 26 months as configured in Google Analytics. Vercel Analytics data is retained according to Vercel's standard retention policy." },
              ].map((item, i) => (
                <div key={i} className="pl-4 border-l-2 border-[#F5A623]/30">
                  <p className="font-semibold text-foreground">{item.category}</p>
                  <p className="mt-0.5">{item.period}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Your rights under UK GDPR</h2>
            <p>As a UK resident, you have the following rights regarding your personal data:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Right to access — request a copy of the personal data we hold about you",
                "Right to rectification — request correction of inaccurate or incomplete data",
                "Right to erasure — request deletion of your personal data in certain circumstances",
                "Right to restriction — request that we limit how we use your data",
                "Right to data portability — receive your data in a structured, machine-readable format",
                "Right to object — object to our processing of your data based on legitimate interests",
                "Right to withdraw consent — where processing is based on consent, withdraw it at any time",
              ].map((right, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] mt-2 flex-shrink-0" />
                  {right}
                </li>
              ))}
            </ul>
            <p className="mt-4">To exercise any of these rights, contact us at <a href="mailto:hello@orkyn.ai" className="text-[#C47D00] underline">hello@orkyn.ai</a>. We will respond within 30 days. You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at ico.org.uk.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">9. International data transfers</h2>
            <p>Orkyn Technologies operates from both the United Kingdom and India. When personal data is transferred between these locations, we ensure appropriate safeguards are in place in accordance with UK GDPR requirements. Our third-party service providers are selected to ensure data is processed within approved jurisdictions or under appropriate data transfer agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">10. Data security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure or destruction. These include encrypted data transmission, access controls, and secure hosting infrastructure through Vercel. Despite these measures, no internet transmission is completely secure and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">11. Changes to this policy</h2>
            <p>We may update this privacy policy from time to time to reflect changes in our services, legal requirements or data practices. The date at the top of this page will be updated accordingly. We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">12. Contact us</h2>
            <p>If you have any questions about this privacy policy or how we handle your personal data, please contact us:</p>
            <div className="mt-4 p-5 rounded-2xl bg-[#FAFAFA] border border-border">
              <p className="font-semibold text-foreground">Orkyn Technologies</p>
              <p className="mt-1">UK and India</p>
              <a href="mailto:hello@orkyn.ai" className="text-[#C47D00] underline mt-1 inline-block">hello@orkyn.ai</a>
            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-border mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">2026 Orkyn. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
