import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <section
      aria-label="Client Testimonials — Mohfasa IT Solutions Reviews"
      className="py-24 md:py-32 bg-[#FAFAFA] border-t border-black/10 relative"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-3"
        >
          <span className="text-xs font-mono text-[#2563EB] tracking-widest uppercase font-semibold">
            CLIENT SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#09090B]">
            Trusted By Business Leaders.
          </h2>
        </motion.div>

        {/* Minimal Testimonial Card */}
        <div className="relative bg-white border border-black/10 rounded-md p-8 md:p-14 space-y-8 shadow-xl overflow-hidden">
          <FaQuoteLeft className="w-12 h-12 text-[#2563EB]/15 absolute top-8 left-8 -z-0" />

          <div className="relative z-10 space-y-6">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                cite={`https://mohfasaitsolutions.com/#testimonial-${currentIndex}`}
                className="text-lg md:text-2xl text-[#09090B] font-medium leading-relaxed italic min-h-[100px]"
              >
                "{testimonials[currentIndex].quote}"
              </motion.blockquote>
            </AnimatePresence>

            <div className="flex items-center justify-between pt-6 border-t border-black/10">
              <div
                className="flex items-center gap-4"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div
                  className="w-12 h-12 rounded-md bg-gradient-to-tr from-[#2563EB] to-indigo-600 text-white flex items-center justify-center font-bold text-base shadow-md"
                  aria-hidden="true"
                >
                  {testimonials[currentIndex].avatar}
                </div>
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                  <h4
                    className="text-base font-bold text-[#09090B]"
                    itemProp="name"
                  >
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-xs text-[#52525B]">
                    <span itemProp="jobTitle">{testimonials[currentIndex].role}</span>
                    {' '}&mdash;{' '}
                    <span className="text-[#2563EB] font-medium" itemProp="worksFor">
                      {testimonials[currentIndex].company}
                    </span>
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="p-3 bg-[#F4F4F5] border border-black/10 rounded-md text-[#09090B] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="p-3 bg-[#F4F4F5] border border-black/10 rounded-md text-[#09090B] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
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

