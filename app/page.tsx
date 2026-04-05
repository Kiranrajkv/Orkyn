import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Transformation } from "@/components/Transformation";
import { WhyOrkyn } from "@/components/WhyOrkyn";
import { Process } from "@/components/Process";
import { Impact } from "@/components/Impact";
import { CtaBanner } from "@/components/CtaBanner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Transformation />
      <WhyOrkyn />
      <Process />
      <Impact />
      <CtaBanner />
      <Contact />
      <Footer />
    </main>
  );
}
