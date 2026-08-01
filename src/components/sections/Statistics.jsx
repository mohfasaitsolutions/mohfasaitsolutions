import React, { useState, useEffect, useRef } from 'react';

export default function Statistics() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statsData = [
    { target: 100, suffix: '+', label: 'Projects Delivered', desc: 'Across 10+ industries worldwide' },
    { target: 98, suffix: '%', label: 'Client Satisfaction', desc: 'Based on long-term client retention' },
    { static: '24/7', label: 'Support & Monitoring', desc: 'Real-time proactive uptime surveillance' },
    { target: 99.9, suffix: '%', isDecimal: true, label: 'Reliable Solutions', desc: 'SLA uptime for cloud systems' },
  ];

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-28 bg-[#FAFAFA] border-t border-black/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <StatCard key={idx} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible || stat.static) return;

    let startTime = null;
    const duration = 2000;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const val = progress * stat.target;
      setCount(val);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, stat]);

  return (
    <div className="bg-white border border-black/10 rounded-[20px] p-8 text-center space-y-2 shadow-xs hover:border-[#2563EB] transition-colors">
      <div className="text-4xl md:text-5xl font-extrabold text-[#09090B] tracking-tight font-mono">
        {stat.static ? (
          <span className="text-[#2563EB]">{stat.static}</span>
        ) : (
          <span className="text-[#2563EB]">
            {stat.isDecimal
              ? count.toFixed(1)
              : Math.floor(count)}
            {stat.suffix}
          </span>
        )}
      </div>
      <h3 className="text-sm font-bold text-[#09090B] pt-2">{stat.label}</h3>
      <p className="text-xs text-[#52525B] leading-relaxed">{stat.desc}</p>
    </div>
  );
}


