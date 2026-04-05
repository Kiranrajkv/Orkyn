import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orkyn – Software, Applications & Systems Designed to Scale",
  description:
    "Custom built solutions tailored to your business, covering everything from apps and websites to ERP and Salesforce systems.",
  keywords: [
    "software development",
    "ERP",
    "Salesforce",
    "custom applications",
    "web development",
    "UX design",
  ],
  openGraph: {
    title: "Orkyn – Built to Scale",
    description: "Custom software, apps, ERP, and digital solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
