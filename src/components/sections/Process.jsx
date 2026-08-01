import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      subtitle: 'Understanding your business goals',
      desc: 'We analyze your operational workflows, identify pain points, and define exact key performance indicators.',
    },
    {
      step: '02',
      title: 'Strategise',
      subtitle: 'Planning the best technology solution',
      desc: 'Architecting system specs, tech stack selection, database schemas, and UX wireframes designed to scale.',
    },
    {
      step: '03',
      title: 'Build',
      subtitle: 'Designing and developing your product',
      desc: 'Agile development with bi-weekly sprint demos, clean code practices, security audits, and continuous integration.',
    },
    {
      step: '04',
      title: 'Launch',
      subtitle: 'Testing, deployment and optimisation',
      desc: 'Rigorous QA testing, stress testing, seamless server deployment with zero downtime, and team training.',
    },
    {
      step: '05',
      title: 'Scale',
      subtitle: 'Continuous improvements and support',
      desc: 'Ongoing performance tuning, feature expansion, cloud monitoring, and dedicated 24/7 technical support.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] border-t border-black/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <span className="text-xs font-mono text-[#2563EB] tracking-widest uppercase font-semibold">
            OUR PROVEN METHODOLOGY
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#09090B]">
            The Trusted 5-Step <br />
            <span className="text-[#2563EB]">Engineering Roadmap.</span>
          </h2>
          <p className="text-sm md:text-base text-[#52525B]">
            A structured, transparent delivery process built for speed, quality, and predictability.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="process-step flex flex-col justify-between"
            >
              <div className="bg-white border border-black/10 rounded-md p-6 space-y-4 h-full flex flex-col justify-between shadow-xs hover:border-[#2563EB] hover:shadow-md transition-all duration-300 group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-[#2563EB]">
                      {item.step}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-black/10 group-hover:bg-[#2563EB] transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-[#09090B] group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#09090B]">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-[#52525B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Arrow Connector for Mobile / Tablet */}
              {idx < steps.length - 1 && (
                <div className="md:hidden flex justify-center py-3 text-[#2563EB]">
                  <FiArrowDown className="w-5 h-5 animate-bounce" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


