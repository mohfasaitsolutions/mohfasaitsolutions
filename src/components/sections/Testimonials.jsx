import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Mohfasa IT Solutions automated our entire order dispatch pipeline. We cut customer wait times by 70% within the first month. They act like an internal engineering team, not an agency.",
      name: "Marcus Vance",
      role: "Chief Operating Officer",
      company: "Apex Hospitality Group",
      avatar: "MV",
    },
    {
      quote: "The custom EHR database Mohfasa developed for our clinics handled 50,000+ patient records seamlessly with zero security compliance issues. Highly recommended for enterprise software.",
      name: "Dr. Elena Rostova",
      role: "Director of Digital Health",
      company: "Vanguard Medical Systems",
      avatar: "ER",
    },
    {
      quote: "Their AI customer support agent resolves 85% of our tier-1 tickets automatically. We saved over $180,000 in support overhead while delivering 24/7 instant responses.",
      name: "David Sterling",
      role: "Head of Customer Experience",
      company: "Luminary SaaS Corp",
      avatar: "DS",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] border-t border-black/10 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono text-[#2563EB] tracking-widest uppercase font-semibold">
            CLIENT SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#09090B]">
            Trusted By Business Leaders.
          </h2>
        </div>

        {/* Minimal Light Testimonial Card */}
        <div className="relative bg-white border border-black/10 rounded-[20px] p-8 md:p-14 space-y-8 shadow-xl overflow-hidden">
          <FaQuoteLeft className="w-10 h-10 text-[#2563EB]/20 absolute top-8 left-8 -z-0" />

          <div className="relative z-10 space-y-6">
            <p className="text-lg md:text-2xl text-[#09090B] font-medium leading-relaxed italic">
              "{testimonials[currentIndex].quote}"
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-black/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-base shadow-sm">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#09090B]">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-xs text-[#52525B]">
                    {testimonials[currentIndex].role} — <span className="text-[#2563EB] font-medium">{testimonials[currentIndex].company}</span>
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="p-3 bg-[#F4F4F5] border border-black/10 rounded-full text-[#09090B] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="p-3 bg-[#F4F4F5] border border-black/10 rounded-full text-[#09090B] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
