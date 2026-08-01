import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiLaravel,
  SiPython,
  SiFastapi,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { FiCpu, FiTerminal } from 'react-icons/fi';

export default function TechMarquee() {
  const stack = [
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'NestJS', icon: SiNestjs },
    { name: 'Laravel', icon: SiLaravel },
    { name: 'Python', icon: SiPython },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'AWS Cloud', icon: FaAws },
    { name: 'Docker', icon: SiDocker },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Redis', icon: SiRedis },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'TailwindCSS', icon: SiTailwindcss },
    { name: 'OpenAI API', icon: FiCpu },
    { name: 'Claude API', icon: FiTerminal },
  ];

  return (
    <section className="py-16 bg-[#FAFAFA] border-t border-b border-black/10 overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 text-center">
        <span className="text-xs font-mono text-[#52525B] uppercase tracking-widest font-semibold">
          ENTERPRISE-GRADE STACK & INFRASTRUCTURE
        </span>
      </div>

      <div className="flex w-full overflow-hidden mask-gradient">
        <div className="flex gap-6 animate-marquee whitespace-nowrap min-w-full flex-shrink-0">
          {stack.concat(stack).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-black/10 rounded-full text-sm font-medium text-[#09090B] shadow-xs hover:border-[#2563EB] transition-colors"
              >
                <Icon className="w-5 h-5 text-[#2563EB]" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


