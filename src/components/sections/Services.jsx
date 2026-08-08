import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCpu,
  FiCode,
  FiShoppingBag,
  FiSmartphone,
  FiCloud,
  FiTrendingUp,
  FiBriefcase,
  FiArrowUpRight,
} from 'react-icons/fi';
import SpotlightCard from '../ui/SpotlightCard';

export default function Services({ onOpenConsultation }) {
  const servicesData = [
    {
      icon: FiBriefcase,
      title: 'Custom Business Software',
      desc: 'Tailor-made software built around your exact operational workflows.',
      items: [
        'ERP Systems',
        'CRM Solutions',
        'HRMS & Payroll',
        'Inventory Management',
        'Workflow Automation',
        'Custom Business Platforms',
      ],
    },
    {
      icon: FiCpu,
      title: 'AI & Business Automation',
      desc: 'Leverage artificial intelligence to automate repetitive tasks and boost speed.',
      items: [
        'Autonomous AI Agents',
        'Business Chatbots',
        'Process Automation',
        'Generative AI Integrations',
        'Document Automation',
        'Customer Support Automation',
      ],
    },
    {
      icon: FiCode,
      title: 'Website & Web Application Development',
      desc: 'High-performance, secure web applications and corporate websites.',
      items: [
        'Corporate Websites',
        'Customer Portals',
        'Business Dashboards',
        'SaaS Platforms',
        'Progressive Web Apps (PWA)',
      ],
    },
    {
      icon: FiShoppingBag,
      title: 'E-Commerce Solutions',
      desc: 'Scalable digital storefronts engineered for maximum conversion.',
      items: [
        'Shopify Development',
        'Custom E-Commerce Platforms',
        'B2B Portals',
        'B2C Storefronts',
        'Payment Gateway Integration',
        'Order Management Systems',
      ],
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Application Development',
      desc: 'Native and cross-platform mobile apps with seamless user experience.',
      items: [
        'Android Apps',
        'iOS Apps',
        'Flutter Apps',
        'Cross Platform Solutions',
        'Enterprise Mobility Apps',
      ],
    },
    {
      icon: FiCloud,
      title: 'Cloud & DevOps Solutions',
      desc: 'Secure, reliable cloud infrastructure and automated deployment pipelines.',
      items: [
        'AWS Cloud Infrastructure',
        'Cloud Migration',
        'CI/CD Pipelines',
        'Docker & Kubernetes',
        'Infrastructure Automation',
        'Monitoring & Security',
      ],
    },
    {
      icon: FiTrendingUp,
      title: 'Digital Growth Solutions',
      desc: 'Data-driven marketing, SEO, and lead generation to scale your revenue.',
      items: [
        'Search Engine Optimization (SEO)',
        'Performance Marketing',
        'B2B Lead Generation',
        'Social Media Management',
        'Web Analytics',
        'Conversion Rate Optimization',
      ],
    },
  ];

  return (
    <section
      id="services"
      aria-label="Software Development Services by Mohfasa IT Solutions"
      className="py-24 md:py-32 bg-[#FAFAFA] border-t border-black/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-[#2563EB] tracking-widest uppercase font-semibold">
              OUR CORE CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#09090B] leading-tight">
              Custom Software &amp; AI Development Services <br />
              <span className="text-[#2563EB]">For Modern Business.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#52525B] max-w-md leading-relaxed">
            We provide full-spectrum engineering and digital growth services tailored to transform operational efficiency.
          </p>
        </motion.div>

        {/* Services Grid with Sleek Dark Gradient Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={idx}
                itemScope
                itemType="https://schema.org/Service"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                aria-label={service.title}
              >
                <SpotlightCard
                  spotlightColor="rgba(59, 130, 246, 0.3)"
                  borderColor="rgba(255, 255, 255, 0.12)"
                  hoverBorderColor="rgba(37, 99, 235, 0.6)"
                  className="group flex flex-col justify-between h-full bg-gradient-to-br from-[#0B0F19] via-[#0F172A] to-[#1E1B4B] text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div>
                    {/* Top Bar with Icon & Action Link */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-md bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400 group-hover:bg-[#2563EB] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300">
                        <Icon className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <button
                        onClick={onOpenConsultation}
                        aria-label={`Consult for ${service.title}`}
                        className="text-slate-400 hover:text-blue-400 transition-colors p-2"
                      >
                        <FiArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>

                    <h3
                      className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
                      itemProp="name"
                    >
                      {service.title}
                    </h3>

                    <p
                      className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6 font-normal"
                      itemProp="description"
                    >
                      {service.desc}
                    </p>
                  </div>

                  {/* Sub-items Pill List */}
                  <div className="pt-6 border-t border-white/10 space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {service.items.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] font-mono text-slate-300 group-hover:border-blue-400/40 group-hover:text-white transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}



