import React from 'react';
import { FiTrendingUp, FiMaximize2, FiCpu, FiHeadphones, FiEye, FiCheckSquare } from 'react-icons/fi';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: FiTrendingUp,
      title: 'Business-first Approach',
      desc: 'We prioritize bottom-line ROI, revenue growth, and operational efficiency over technical fluff.',
    },
    {
      icon: FiMaximize2,
      title: 'Scalable Architecture',
      desc: 'Engineered with modular, micro-service architectures to effortlessly handle 100x traffic spikes.',
    },
    {
      icon: FiCpu,
      title: 'AI-Driven Innovation',
      desc: 'Integrate custom AI agents to automate manual administrative tasks and eliminate workflow bottlenecks.',
    },
    {
      icon: FiHeadphones,
      title: 'Reliable Support',
      desc: '24/7 system monitoring, proactive security patches, and dedicated senior developer assistance.',
    },
    {
      icon: FiEye,
      title: 'Transparent Process',
      desc: 'Full visibility with regular milestone demos, clear documentation, and predictable timelines.',
    },
    {
      icon: FiCheckSquare,
      title: 'Long-Term Partnership',
      desc: 'We don’t just ship code; we remain your strategic tech team as your business expands.',
    },
  ];

  return (
    <section
      id="solutions"
      className="py-24 md:py-32 bg-[#FAFAFA] border-t border-black/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-[#2563EB] tracking-widest uppercase font-semibold">
            WHY MOHFASA IT SOLUTIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#09090B]">
            Built For High-Growth <br />
            <span className="text-[#2563EB]">Forward-Thinking Enterprises.</span>
          </h2>
          <p className="text-sm md:text-base text-[#52525B]">
            We bridge the gap between complex software engineering and tangible business outcomes.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="why-card bg-white border border-black/10 rounded-[20px] p-8 space-y-4 shadow-sm hover:border-[#2563EB] hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F4F4F5] border border-black/5 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-[#09090B] group-hover:text-[#2563EB] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs md:text-sm text-[#52525B] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
