
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CyberneticsSection from '../components/CyberneticsSection';
import IntelligenceSection from '../components/IntelligenceSection';
import CTPSSection from '../components/CTPSSection';
import VenturesSection from '../components/VenturesSection';
import UniversitySection from '../components/UniversitySection';
import CitiesSection from '../components/CitiesSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Scroll animation handler
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    // Initial check for elements already in viewport
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CyberneticsSection />
      <IntelligenceSection />
      <CTPSSection />
      <VenturesSection />
      <UniversitySection />
      <CitiesSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
