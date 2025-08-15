import Image from "next/image";
import Hero from "@/component/hero";
import ServicesSection from "@/component/service";
import AboutSection from "@/component/about";
import Testimonials from "@/component/testimonial";
import Navbar from "@/component/desktopNavbar";
import MobileNavbar from "@/component/mobile";
import ContactSection from "@/component/contanct";
import PreviewMyWork from "@/component/work";
import VisionSection from "@/component/vision";
import Faq from "@/component/faq";

export default function Home() {
  return (
    <div className=" border-red-800 ">
      <header>
        <Navbar />
        <MobileNavbar />
      </header>
      <Hero />
      <ServicesSection />
      <VisionSection />
      <AboutSection />
      <PreviewMyWork />
      <Testimonials />
      <Faq />
      <ContactSection />
    </div>
  );
}
