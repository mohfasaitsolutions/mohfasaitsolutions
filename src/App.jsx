import React, { useState, useEffect } from 'react';
import SEOHead from './components/seo/SEOHead';
import Lenis from 'lenis';

// UI Utility Components
import Preloader from './components/ui/Preloader';
import ScrollProgress from './components/ui/ScrollProgress';
import ScrollToTop from './components/ui/ScrollToTop';
import ConsultationModal from './components/ui/ConsultationModal';

// Landing Page Sections
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Process from './components/sections/Process';
import FeaturedWork from './components/sections/FeaturedWork';
import TechMarquee from './components/sections/TechMarquee';
import Statistics from './components/sections/Statistics';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initial preloader display
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  const handleOpenConsultation = () => setIsConsultationOpen(true);
  const handleCloseConsultation = () => setIsConsultationOpen(false);

  return (
    <div className="relative bg-[#FAFAFA] text-[#09090B] min-h-screen selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
      {/* SEO: Dynamic JSON-LD schemas injected into <head> */}
      <SEOHead />
      {/* Structural Architectural Light Background Grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Noise Texture Overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Micro-Interactions */}
      <ScrollProgress />
      <Preloader isLoading={isLoading} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />

      {/* Sticky Shrinking Header */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-0">
        <Hero onOpenConsultation={handleOpenConsultation} />
        <About />
        <Services onOpenConsultation={handleOpenConsultation} />
        <WhyChooseUs />
        <Process />
        <FeaturedWork onOpenConsultation={handleOpenConsultation} />
        <TechMarquee />
        <Statistics />
        <Testimonials />
        <CTA onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Scroll to Top Floating Button */}
      <ScrollToTop />
    </div>
  );
}
