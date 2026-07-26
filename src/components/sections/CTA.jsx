import React from 'react';
import { FiArrowRight, FiMessageSquare } from 'react-icons/fi';
import MagneticButton from '../ui/MagneticButton';

export default function CTA({ onOpenConsultation }) {
  return (
    <section
      id="contact"
      className="py-28 md:py-36 bg-[#F4F4F5] border-t border-black/10 relative overflow-hidden text-center"
    >
      {/* Subtle Light Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#2563EB 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-8">
        <span className="inline-block text-xs font-mono text-[#2563EB] px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 uppercase tracking-widest font-semibold">
          LET'S BUILD SOMETHING EXTRAORDINARY
        </span>

        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#09090B] leading-tight">
          Ready to Build the Future <br />
          <span className="text-[#2563EB]">of Your Business?</span>
        </h2>

        <p className="text-base md:text-lg text-[#52525B] max-w-2xl mx-auto leading-relaxed">
          Let’s discuss how Mohfasa IT Solutions can help automate operations, optimize workflows, and scale your technology with confidence.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <MagneticButton variant="primary" onClick={onOpenConsultation}>
            <span>Book a Free Consultation</span>
            <FiArrowRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton variant="secondary" onClick={onOpenConsultation}>
            <FiMessageSquare className="w-4 h-4 text-[#2563EB]" />
            <span>Let's Talk</span>
          </MagneticButton>
        </div>

        <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-xs text-[#52525B] font-mono">
          <span>✓ Zero Obligation Strategy Call</span>
          <span>✓ NDA Protected</span>
          <span>✓ Response Within 24 Hours</span>
        </div>
      </div>
    </section>
  );
}
