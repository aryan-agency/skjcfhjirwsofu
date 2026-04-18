import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import MissionVision from "@/components/sections/MissionVision";
import Services from "@/components/sections/Services";
import NGO from "@/components/sections/NGO";
import Clinic from "@/components/sections/Clinic";
import Testimonials from "@/components/sections/Testimonials";
import Donate from "@/components/sections/Donate";
import Contact from "@/components/sections/Contact";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <NGO />
      <Clinic />
      <Testimonials />
      <Donate />
      <Contact />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
