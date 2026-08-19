import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TechStack } from "@/components/TechStack";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main className="pt-20">
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <WhyChooseUs />
        <PortfolioSection />
        <TechStack />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
