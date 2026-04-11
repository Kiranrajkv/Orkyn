import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Service | Orkyn Technologies",
  description: "Terms and conditions for engaging Orkyn Technologies for custom software, ERP, Salesforce and digital systems development services.",
  alternates: { canonical: "https://orkyn.ai/terms" },
};

export default function TermsOfService() {
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
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
          <p className="text-muted-foreground text-base">Last updated: April 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10 text-[15px] leading-relaxed text-gray-700">

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Agreement to terms</h2>
            <p>
              These Terms of Service govern your engagement with Orkyn Technologies, a custom software and digital systems agency with offices in UK and India. By engaging our services, submitting an enquiry through our website, or entering into a project agreement with us, you agree to these terms in full.
            </p>
            <p className="mt-3">
              If you do not agree to these terms, please do not engage our services. For any questions, contact us at <a href="mailto:Orkyntechnologies@gmail.com" className="text-[#C47D00] underline">Orkyntechnologies@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Our services</h2>
            <p>Orkyn Technologies provides the following categories of professional services:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Custom software development including web and mobile applications",
                "ERP system design, development and implementation",
                "Salesforce development, configuration and integration",
                "UX and UI design and product design",
                "Design systems and brand interface development",
                "Technical SEO, conversion rate optimisation and growth strategy",
                "Systems integration and business process automation",
                "Ongoing maintenance, support and system evolution",
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] mt-2 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4">The specific scope, deliverables and timeline for each engagement are agreed in writing before work commences. We do not begin any billable work until scope has been confirmed by both parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Engagement process</h2>
            <div className="space-y-4">
              {[
                { title: "Discovery session", detail: "All engagements begin with a discovery session at no cost to you. This session allows both parties to assess fit, understand requirements and confirm that Orkyn is the right partner for your project. No payment is required until discovery confirms we are the right fit for each other." },
                { title: "Scope agreement", detail: "Following discovery, we provide a written scope of work detailing deliverables, timeline, pricing and any assumptions. Work commences only once the scope is agreed in writing by both parties." },
                { title: "Project execution", detail: "We deliver work in structured sprint cycles with regular communication and progress updates. You will always know where your project stands." },
                { title: "Handover and support", detail: "All projects include full handover documentation and a post-launch support period as specified in your scope agreement." },
              ].map((item, i) => (
                <div key={i} className="pl-4 border-l-2 border-[#F5A623]/30">
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="mt-0.5">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Pricing and payment</h2>
            <div className="space-y-4">
              {[
                { title: "Fixed pricing", detail: "All engagements are quoted at a fixed price as agreed in the scope of work. We do not add change request fees for work that falls within the agreed scope. If your requirements change materially after scope is agreed, we will discuss the impact and agree any adjustments before proceeding." },
                { title: "Payment terms", detail: "Payment terms are specified in your scope agreement. Typically, a deposit is due upon project commencement with the balance due on delivery or on a milestone basis for larger engagements. All invoices are payable within 14 days of issue unless otherwise agreed." },
                { title: "Late payments", detail: "Orkyn Technologies reserves the right to suspend work on projects where invoices remain unpaid beyond 30 days of the due date. We will always attempt to resolve payment issues directly before taking this step." },
                { title: "Currency", detail: "All pricing is quoted in the currency specified in your scope agreement. Bank transfer fees and currency conversion costs are the responsibility of the client." },
              ].map((item, i) => (
                <div key={i} className="pl-4 border-l-2 border-[#F5A623]/30">
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="mt-0.5">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Two-week satisfaction guarantee</h2>
            <p>
              We offer a two-week satisfaction guarantee on all projects. If you are not confident in the direction of your project within the first two weeks of engagement, we will refund your payment in full. No questions asked, no penalties and no damage to the relationship.
            </p>
            <p className="mt-3">
              This guarantee applies to the initial two-week period of any new project engagement. It does not apply to ongoing partnership retainers after the initial two-week period has passed, or to projects where the dissatisfaction arises from client-side scope changes made after the project commenced.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Intellectual property</h2>
            <div className="space-y-4">
              {[
                { title: "Client ownership", detail: "Upon receipt of full payment, all custom code, designs and deliverables created specifically for your project transfer to you as the client. You own everything we build for you." },
                { title: "Orkyn tools and frameworks", detail: "Orkyn Technologies retains ownership of any pre-existing tools, frameworks, libraries or methodologies used in delivering your project. These may be used across multiple client projects but your specific implementation remains yours." },
                { title: "Third-party components", detail: "Some projects may incorporate open-source libraries or third-party components. These remain subject to their respective licences, which we will identify in your handover documentation." },
                { title: "Portfolio rights", detail: "Unless otherwise agreed, Orkyn Technologies reserves the right to reference your project as part of our portfolio and to describe the nature of the work completed. We will always seek your approval before publishing specific details or case studies." },
              ].map((item, i) => (
                <div key={i} className="pl-4 border-l-2 border-[#F5A623]/30">
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="mt-0.5">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Confidentiality and NDAs</h2>
            <p>
              We treat all client information with complete confidentiality as standard practice. Non-Disclosure Agreements are signed before any substantive conversation about your business, systems or strategy begins. Your business information, technical specifications and operational data remain strictly confidential and are never shared with third parties without your explicit written consent.
            </p>
            <p className="mt-3">
              Our confidentiality obligations survive the termination of any project engagement and remain in effect indefinitely unless both parties agree otherwise in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Client responsibilities</h2>
            <p>To enable us to deliver your project successfully, you agree to:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Provide timely access to information, systems and personnel required to complete the agreed scope",
                "Designate a primary point of contact who is authorised to make decisions on behalf of your organisation",
                "Review and provide feedback on deliverables within the timeframes agreed in your scope",
                "Ensure that any content, data or materials provided to us do not infringe third-party intellectual property rights",
                "Make payments in accordance with the agreed payment schedule",
                "Notify us promptly of any changes to your requirements that may affect the agreed scope or timeline",
              ].map((r, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] mt-2 flex-shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">9. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Orkyn Technologies shall not be liable for any indirect, incidental, special, consequential or punitive damages arising from your use of our services, including but not limited to loss of revenue, loss of data, business interruption or loss of profits.
            </p>
            <p className="mt-3">
              Our total liability to you for any claim arising from or related to our services shall not exceed the total amount paid by you to Orkyn Technologies in the three months preceding the claim.
            </p>
            <p className="mt-3">
              Nothing in these terms limits our liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded under English law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">10. Termination</h2>
            <div className="space-y-3">
              {[
                { title: "By either party", detail: "Either party may terminate an ongoing engagement with 30 days written notice. For One-Month Sprint projects, termination is not available after the project has commenced unless the satisfaction guarantee conditions are met." },
                { title: "Ongoing Partnership", detail: "The Ongoing Partnership plan may be cancelled at any time with no lock-in. Cancellation takes effect at the end of the current monthly billing period. No refunds are issued for partial months." },
                { title: "Work completed", detail: "On termination, you will receive all completed work and deliverables up to the termination date, upon settlement of any outstanding invoices." },
              ].map((item, i) => (
                <div key={i} className="pl-4 border-l-2 border-[#F5A623]/30">
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="mt-0.5">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">11. Governing law and disputes</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes arising from or related to these terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
            <p className="mt-3">
              Before initiating any formal dispute proceedings, both parties agree to attempt resolution through good faith negotiation for a period of 30 days from the date the dispute is first raised in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">12. Changes to these terms</h2>
            <p>
              We may update these terms from time to time. The date at the top of this page reflects the most recent update. For existing client engagements, the terms in effect at the time of your scope agreement apply unless both parties agree to updated terms in writing. For new enquiries and engagements, the current version of these terms applies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">13. Contact us</h2>
            <p>For any questions about these terms, please contact us:</p>
            <div className="mt-4 p-5 rounded-2xl bg-[#FAFAFA] border border-border">
              <p className="font-semibold text-foreground">Orkyn Technologies</p>
              <p className="mt-1">UK and India</p>
              <a href="mailto:Orkyntechnologies@gmail.com" className="text-[#C47D00] underline mt-1 inline-block">
                Orkyntechnologies@gmail.com
              </a>
            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-border mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">2026 Orkyn Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
