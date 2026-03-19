import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MembershipSection from "@/components/MembershipSection";
import TrainersSection from "@/components/TrainersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MembershipSection />
      <TrainersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}