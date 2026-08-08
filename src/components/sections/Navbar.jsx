import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import LogoMohfasa from '../ui/LogoMohfasa';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/90 border-b border-black/10 backdrop-blur-md shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="group">
          <LogoMohfasa />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-1 bg-white border border-black/10 px-5 py-2 rounded-md shadow-sm backdrop-blur-sm"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-4 py-1.5 text-xs font-medium transition-colors duration-200 ${
                  isActive ? 'text-[#09090B] font-semibold' : 'text-[#52525B] hover:text-[#09090B]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#2563EB] rounded-md" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#2563EB] text-white text-xs font-semibold hover:bg-blue-600 transition-colors shadow-[0_4px_14px_rgba(37,99,235,0.3)]"
          >
            <span>Book a Free Consultation</span>
            <FiArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#09090B] hover:text-[#2563EB] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-black/10 px-6 py-8 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#52525B] hover:text-[#09090B] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-black/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full text-center py-3 bg-[#2563EB] text-white rounded-md font-medium text-sm shadow-[0_4px_14px_rgba(37,99,235,0.3)]"
              >
                Book a Free Consultation
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
