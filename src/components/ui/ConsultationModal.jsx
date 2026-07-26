import React, { useState } from 'react';
import { FiX, FiCheckCircle } from 'react-icons/fi';

export default function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Custom Business Software',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white border border-black/10 rounded-[20px] p-6 md:p-8 shadow-2xl overflow-hidden text-[#09090B]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 text-[#52525B] hover:text-[#09090B] transition-colors"
        >
          <FiX className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <FiCheckCircle className="w-14 h-14 text-[#2563EB] mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold text-[#09090B]">Consultation Requested!</h3>
            <p className="text-sm text-[#52525B] max-w-xs mx-auto">
              Thank you for reaching out. A Senior Technology Strategist from Mohfasa IT Solutions will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono text-[#2563EB] tracking-wider uppercase font-semibold">START YOUR TRANSFORMATION</span>
              <h3 className="text-2xl font-bold text-[#09090B] mt-1">Book a Free Consultation</h3>
              <p className="text-sm text-[#52525B] mt-1">
                Tell us about your business challenges and we’ll craft a tailored technology roadmap.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#52525B] mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#F4F4F5] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#09090B] placeholder-gray-400 focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#52525B] mb-1.5">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F4F4F5] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#09090B] placeholder-gray-400 focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#52525B] mb-1.5">Company / Business Name</label>
                  <input
                    type="text"
                    placeholder="Apex Innovations"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#F4F4F5] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#09090B] placeholder-gray-400 focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#52525B] mb-1.5">Primary Interest</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#F4F4F5] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#09090B] focus:outline-none focus:border-[#2563EB] transition-colors"
                >
                  <option value="Custom Business Software">Custom Business Software / ERP / CRM</option>
                  <option value="AI & Business Automation">AI & Business Automation Agents</option>
                  <option value="Website & Web Application">Website & Web App Development</option>
                  <option value="E-Commerce Solutions">E-Commerce Platforms</option>
                  <option value="Mobile Application">Mobile Application (iOS / Android)</option>
                  <option value="Cloud & DevOps">Cloud Migration & DevOps</option>
                  <option value="Digital Growth">Digital Growth & SEO</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#52525B] mb-1.5">Project Overview / Goals</label>
                <textarea
                  rows="3"
                  placeholder="Briefly describe your objectives, timeframe, or operational pain points..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#F4F4F5] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#09090B] placeholder-gray-400 focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2563EB] text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-blue-600 transition-colors shadow-[0_4px_14px_rgba(37,99,235,0.3)] mt-2"
              >
                Request Free Consultation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
