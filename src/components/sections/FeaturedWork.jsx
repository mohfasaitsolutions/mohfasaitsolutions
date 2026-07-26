import React from 'react';
import { FiCheckCircle, FiArrowUpRight, FiServer, FiActivity, FiGlobe, FiDatabase } from 'react-icons/fi';

export default function FeaturedWork({ onOpenConsultation }) {
  const projects = [
    {
      title: 'Restaurant Management Platform',
      category: 'Hospitality Tech',
      problem: 'High order latency during peak hours causing inventory mismatches.',
      solution: 'Real-time kitchen display system (KDS), online ordering portal, and automated inventory sync.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
      result: '70% Faster Kitchen Dispatch • +35% Online Sales',
      mockupIcon: FiActivity,
      stats: '120k+ Orders Processed',
    },
    {
      title: 'Healthcare Management System',
      category: 'Medical Tech',
      problem: 'Fragmented patient records & inefficient appointment scheduling.',
      solution: 'HIPAA-compliant EHR database, patient portal, SMS reminders, and Telehealth video integration.',
      tech: ['Next.js', 'NestJS', 'Docker', 'AWS'],
      result: '95% No-Show Reduction • Zero Security Breaches',
      mockupIcon: FiServer,
      stats: '50k+ Active Patients',
    },
    {
      title: 'Enterprise Business ERP',
      category: 'Manufacturing & Retail',
      problem: 'Unsynchronized multi-warehouse inventory leading to order delays.',
      solution: 'Unified ERP dashboard managing procurement, logistics, billing, and workforce schedules.',
      tech: ['TypeScript', 'FastAPI', 'Redis', 'TailwindCSS'],
      result: '$450k Annual Cost Savings • 99.9% Inventory Accuracy',
      mockupIcon: FiDatabase,
      stats: '8 Warehouses Connected',
    },
    {
      title: 'NGO Donor & Operations CRM',
      category: 'Non-Profit Platform',
      problem: 'Manual donation tracking and lack of automated campaign reporting.',
      solution: 'Automated recurring donor billing, impact reports generator, and volunteer management platform.',
      tech: ['React', 'Laravel', 'PostgreSQL', 'Stripe API'],
      result: '3x Increase in Recurring Giving • 100% Tax Automated',
      mockupIcon: FiGlobe,
      stats: '$2.5M+ Raised',
    },
    {
      title: 'High-Conversion Corporate Website',
      category: 'Enterprise Web',
      problem: 'Slow legacy site with poor mobile conversion and low organic search rankings.',
      solution: 'Headless CMS build with sub-second page loads, SEO optimization, and interactive product demos.',
      tech: ['Vite', 'TailwindCSS', 'OpenAI'],
      result: '98/100 Lighthouse Performance • 4x Inbound Leads',
      mockupIcon: FiGlobe,
      stats: '<300ms First Paint',
    },
    {
      title: 'AI Customer Support Agent',
      category: 'AI & Automation',
      problem: 'Overwhelmed support team with 18-hour average response turnaround.',
      solution: 'Custom fine-tuned RAG AI Agent capable of instantly answering 85% of tier-1 support tickets.',
      tech: ['Python', 'FastAPI', 'Claude API', 'OpenAI'],
      result: '<5 Second Resolution Time • 85% Ticket Automation',
      mockupIcon: FiActivity,
      stats: '24/7 Zero Human Overhead',
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-[#FAFAFA] border-t border-black/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-[#2563EB] tracking-widest uppercase font-semibold">
              FEATURED CASE STUDIES
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#09090B]">
              Proven Digital Solutions <br />
              <span className="text-[#2563EB]">Delivering Real Impact.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#52525B] max-w-md">
            Explore how our custom engineering transformed operational efficiency across diverse industries.
          </p>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const MockupIcon = project.mockupIcon;
            return (
              <div
                key={idx}
                className="project-card bg-white border border-black/10 rounded-[20px] p-8 space-y-6 flex flex-col justify-between shadow-sm hover:border-[#2563EB] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-5">
                  {/* Top Minimal UI Mockup Header */}
                  <div className="bg-[#F8FAFC] border border-black/5 rounded-xl p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MockupIcon className="w-5 h-5 text-[#2563EB]" />
                        <span className="text-xs font-mono text-[#52525B]">{project.category}</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-1 rounded-full border border-[#2563EB]/20 font-semibold">
                        {project.stats}
                      </span>
                    </div>

                    {/* Result Badge */}
                    <div className="pt-2 border-t border-black/5 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                      <FiCheckCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{project.result}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#09090B] group-hover:text-[#2563EB] transition-colors">
                    {project.title}
                  </h3>

                  {/* Problem & Solution Breakdown */}
                  <div className="space-y-3 text-xs md:text-sm">
                    <div>
                      <span className="font-semibold text-[#09090B]">Challenge: </span>
                      <span className="text-[#52525B]">{project.problem}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#09090B]">Solution: </span>
                      <span className="text-[#52525B]">{project.solution}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Badges & CTA */}
                <div className="pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-[#F4F4F5] border border-black/5 rounded-md text-[11px] font-mono text-[#52525B]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:text-[#09090B] transition-colors"
                  >
                    <span>Request Similar Solution</span>
                    <FiArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
