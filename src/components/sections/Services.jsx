import React from 'react';
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
      className="py-24 md:py-32 bg-[#FAFAFA] relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-[#2563EB] tracking-widest uppercase font-semibold">
              OUR CORE CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#09090B]">
              End-to-End Technology Solutions <br />
              <span className="text-[#2563EB]">For Modern Business.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#52525B] max-w-md">
            We provide full-spectrum engineering and digital growth services tailored to transform operational efficiency.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="service-card group relative bg-white border border-black/10 rounded-[20px] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB] hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Action Link */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#F4F4F5] border border-black/5 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <button
                      onClick={onOpenConsultation}
                      aria-label={`Consult for ${service.title}`}
                      className="text-[#52525B] hover:text-[#2563EB] transition-colors p-2"
                    >
                      <FiArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-[#09090B] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[#52525B] leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Sub-items Pill List */}
                <div className="pt-6 border-t border-black/10 space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {service.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="px-2.5 py-1 bg-[#F4F4F5] border border-black/5 rounded-md text-[11px] font-mono text-[#52525B] group-hover:border-black/15 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
