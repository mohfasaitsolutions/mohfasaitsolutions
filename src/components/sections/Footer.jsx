import React, { useState } from 'react';
import { FiArrowRight, FiCheck, FiMail, FiPhone } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';
import LogoMohfasa from '../ui/LogoMohfasa';

export default function Footer({ onOpenConsultation }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white border-t border-black/10 text-[#52525B] pt-16 pb-12 text-sm relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Tagline with logo_mohfasa */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-block">
              <LogoMohfasa />
            </a>

            <p className="text-xs text-[#52525B] leading-relaxed max-w-sm">
              MOHFASA IT Solutions is a premium technology partner helping businesses digitize, automate, and scale with high-performance software.
            </p>

            <div className="pt-2 text-xs font-mono text-[#09090B] font-semibold">
              Tagline: <span className="text-[#2563EB]">Build FASTER With MOHFASA.</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: FaLinkedinIn, href: '#' },
                { icon: FaTwitter, href: '#' },
                { icon: FaGithub, href: '#' },
                { icon: FaInstagram, href: 'https://www.instagram.com/mohfasaitsolutions/', external: true },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noopener noreferrer" : undefined}
                    className="p-2.5 bg-[#F4F4F5] border border-black/10 rounded-full text-[#09090B] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[#09090B] uppercase tracking-wider font-semibold">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'Services', 'Solutions', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#09090B] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[#09090B] uppercase tracking-wider font-semibold">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-[#09090B] transition-colors">Custom Business Software</a></li>
              <li><a href="#services" className="hover:text-[#09090B] transition-colors">AI & Business Automation</a></li>
              <li><a href="#services" className="hover:text-[#09090B] transition-colors">Web Applications</a></li>
              <li><a href="#services" className="hover:text-[#09090B] transition-colors">E-Commerce Solutions</a></li>
              <li><a href="#services" className="hover:text-[#09090B] transition-colors">Mobile App Engineering</a></li>
              <li><a href="#services" className="hover:text-[#09090B] transition-colors">Cloud & DevOps</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[#09090B] uppercase tracking-wider font-semibold">Tech Insights</h4>
            <p className="text-xs text-[#52525B]">
              Subscribe for monthly briefings on AI automation and digital growth strategies.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F4F4F5] border border-black/10 rounded-xl px-3.5 py-2.5 text-xs text-[#09090B] placeholder-gray-400 focus:outline-none focus:border-[#2563EB] transition-colors pr-10"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#2563EB] text-white rounded-lg text-xs hover:bg-blue-600 transition-colors"
                >
                  {subscribed ? <FiCheck className="w-3.5 h-3.5" /> : <FiArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[10px] text-emerald-600 font-mono font-semibold">✓ Subscribed successfully!</p>
              )}
            </form>

            <div className="pt-2 space-y-1.5 text-xs text-[#52525B]">
              <div className="flex items-center gap-2">
                <FiMail className="text-[#2563EB] w-3.5 h-3.5" />
                <span>mohfasaitsolutions@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="text-[#2563EB] w-3.5 h-3.5" />
                <span>+91 9340401205</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#52525B]">
          <p>© {new Date().getFullYear()} MOHFASA IT Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="#home" className="hover:text-[#09090B] transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-[#09090B] transition-colors">Terms of Service</a>
            <a href="#home" className="hover:text-[#09090B] transition-colors">Security Overview</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
