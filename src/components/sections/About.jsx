import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiTarget, FiLayers, FiZap } from 'react-icons/fi';

export default function About() {
  const audienceIndustries = [
    'SMEs & Startups',
    'Enterprises',
    'Restaurants & Hospitality',
    'Healthcare & Clinics',
    'NGOs & Non-Profits',
    'Manufacturing & Logistics',
    'Service Businesses',
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#FAFAFA] border-t border-black/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Core Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-mono text-[#2563EB] tracking-widest uppercase font-semibold">
              ABOUT MOHFASA IT SOLUTIONS
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#09090B] leading-tight">
              Your Long-Term <br />
              <span className="text-[#2563EB]">Technology Partner.</span>
            </h2>

            <p className="text-base md:text-lg text-[#52525B] leading-relaxed font-normal">
              At Mohfasa IT Solutions, we build technology that solves real business challenges. Whether you need custom software, AI-powered automation, scalable cloud architecture, or digital growth strategies, we deliver solutions that create measurable business value.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="bg-white border border-black/10 p-6 rounded-[20px] space-y-2.5 shadow-xs hover:border-[#2563EB] transition-colors">
                <FiTarget className="w-6 h-6 text-[#2563EB]" />
                <h3 className="text-[#09090B] font-semibold text-base">Business Outcomes First</h3>
                <p className="text-xs text-[#52525B] leading-relaxed">
                  We eliminate tech jargon and focus on revenue, efficiency, and scale.
                </p>
              </div>

              <div className="bg-white border border-black/10 p-6 rounded-[20px] space-y-2.5 shadow-xs hover:border-[#2563EB] transition-colors">
                <FiZap className="w-6 h-6 text-[#2563EB]" />
                <h3 className="text-[#09090B] font-semibold text-base">Rapid Deployment</h3>
                <p className="text-xs text-[#52525B] leading-relaxed">
                  Modular architecture engineered to launch faster without sacrificing quality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Target Audience & Industry Expertise */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-white border border-black/10 rounded-[24px] p-8 space-y-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                <FiLayers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#09090B]">Industries We Empower</h3>
            </div>

            <p className="text-xs text-[#52525B] leading-relaxed">
              We engineer custom digital solutions tailored to the operational demands of diverse sectors:
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {audienceIndustries.map((industry, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#F4F4F5] border border-black/5 rounded-full text-xs font-medium text-[#09090B] hover:border-[#2563EB] transition-colors cursor-default"
                >
                  <FiCheckCircle className="text-[#2563EB] w-3.5 h-3.5" />
                  <span>{industry}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-black/10 text-xs text-[#52525B] font-mono">
              // Scalable architecture for 10x business growth
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

