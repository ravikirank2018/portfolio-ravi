
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Import profile image
import profileImage from "/ravi-profile.jpg";

const Index = () => {
  // State to track if image loaded successfully
  const [imageLoaded, setImageLoaded] = useState(false);

  // Check if image exists
  useEffect(() => {
    const img = new Image();
    img.src = profileImage;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <main>
        <HeroSection imageSrc={imageLoaded ? profileImage : undefined} />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
