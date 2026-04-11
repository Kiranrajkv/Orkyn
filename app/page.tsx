import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Transformation } from "@/components/Transformation";
import { WhyOrkyn } from "@/components/WhyOrkyn";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Impact } from "@/components/Impact";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CtaBanner } from "@/components/CtaBanner";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Transformation />
      <WhyOrkyn />
      <Process />
      <About />
      <Impact />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CtaBanner />
      <Contact />
    </main>
  );
}
