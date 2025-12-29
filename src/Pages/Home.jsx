import React from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />

      <main>
        <HeroSection />
        <div className="space-y-24 pb-24">
          <AboutMe />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};