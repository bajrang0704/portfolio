import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompaniesMarquee from "@/components/CompaniesMarquee";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CompaniesMarquee />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
