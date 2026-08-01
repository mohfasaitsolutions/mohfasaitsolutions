import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMessageSquare } from 'react-icons/fi';
import MagneticButton from '../ui/MagneticButton';
import BackgroundBeams from '../ui/BackgroundBeams';

export default function CTA({ onOpenConsultation }) {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#FAFAFA] border-t border-black/10 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-md bg-gradient-to-r from-[#0B0F19] via-[#0F172A] to-[#1E1B4B] p-10 md:p-16 text-center text-white overflow-hidden shadow-2xl border border-white/10"
        >
          {/* Aceternity UI Background Beams inside card */}
          <BackgroundBeams />

          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <span className="inline-block text-xs font-mono text-blue-400 px-4 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 uppercase tracking-widest font-semibold">
              LET'S BUILD SOMETHING EXTRAORDINARY
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Build the Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                of Your Business?
              </span>
            </h2>

            <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
              Let’s discuss how Mohfasa IT Solutions can help automate operations, optimize workflows, and scale your technology with confidence.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <MagneticButton variant="primary" onClick={onOpenConsultation}>
                <span>Book a Free Consultation</span>
                <FiArrowRight className="w-4 h-4" />
              </MagneticButton>

              <button 
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-sm transition-all duration-300 shadow-lg backdrop-blur-md"
              >
                <FiMessageSquare className="w-4 h-4 text-blue-400" />
                <span>Let's Talk</span>
              </button>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-mono">
              <span>✓ Zero Obligation Strategy Call</span>
              <span>✓ NDA Protected</span>
              <span>✓ Response Within 24 Hours</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



