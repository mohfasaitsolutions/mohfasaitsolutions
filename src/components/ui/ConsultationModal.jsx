import React, { useState } from 'react';
import { FiX, FiCheckCircle, FiLoader } from 'react-icons/fi';

// ─────────────────────────────────────────────────────────────────────────────
// WEB3FORMS SETUP — 100% FREE (250 submissions/month, no credit card)
// 1. Go to https://web3forms.com
// 2. Enter: mohfasaitsolutions@gmail.com
// 3. Click "Create your Access Key"
// 4. Paste the key below (replace YOUR_WEB3FORMS_ACCESS_KEY)
// ─────────────────────────────────────────────────────────────────────────────
const WEB3FORMS_KEY = '1a5378c0-90aa-4111-adff-00a47e24eeb9';
const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

export default function ConsultationModal({ isOpen, onClose }) {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Custom Business Software',
    message: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `🚀 New Consultation Request — ${formData.service} | ${formData.name}`,
          from_name: 'Mohfasa IT Solutions Website',
          reply_to: formData.email,
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          service: formData.service,
          message: formData.message || 'No additional details provided.',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          setFormData({
            name: '',
            email: '',
            company: '',
            service: 'Custom Business Software',
            message: '',
          });
          onClose();
        }, 3000);
      } else {
        console.error('Web3Forms error response:', data);
        setErrorMsg(data?.message || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch (err) {
      console.error('Web3Forms network error:', err);
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white border border-black/10 rounded-md p-6 md:p-8 shadow-2xl overflow-hidden text-[#09090B]">

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close consultation modal"
          className="absolute top-5 right-5 text-[#52525B] hover:text-[#09090B] transition-colors"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* ── SUCCESS STATE ── */}
        {status === 'success' ? (
          <div className="py-12 text-center space-y-4">
            <FiCheckCircle className="w-14 h-14 text-[#2563EB] mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold text-[#09090B]">Consultation Requested!</h3>
            <p className="text-sm text-[#52525B] max-w-xs mx-auto">
              Thank you! A Senior Technology Strategist from Mohfasa IT Solutions will contact you at{' '}
              <span className="font-semibold text-[#2563EB]">{formData.email}</span> within 24 hours.
            </p>
            <p className="text-xs text-[#52525B] font-mono">
              Check your spam folder if you don't see our reply.
            </p>
          </div>
        ) : (

          /* ── FORM STATE ── */
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono text-[#2563EB] tracking-wider uppercase font-semibold">
                START YOUR TRANSFORMATION
              </span>
              <h3
                id="consultation-modal-title"
                className="text-2xl font-bold text-[#09090B] mt-1"
              >
                Book a Free Consultation
              </h3>
              <p className="text-sm text-[#52525B] mt-1">
                Tell us about your business challenges and we'll craft a tailored technology roadmap.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>

              {/* Full Name */}
              <div>
                <label htmlFor="consultation-name" className="block text-xs font-medium text-[#52525B] mb-1.5">
                  Full Name *
                </label>
                <input
                  id="consultation-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#F4F4F5] border border-black/10 rounded-md px-4 py-3 text-sm text-[#09090B] placeholder-gray-400 focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>

              {/* Email + Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="consultation-email" className="block text-xs font-medium text-[#52525B] mb-1.5">
                    Work Email *
                  </label>
                  <input
                    id="consultation-email"
                    type="email"
                    name="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#F4F4F5] border border-black/10 rounded-md px-4 py-3 text-sm text-[#09090B] placeholder-gray-400 focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="consultation-company" className="block text-xs font-medium text-[#52525B] mb-1.5">
                    Company / Business Name
                  </label>
                  <input
                    id="consultation-company"
                    type="text"
                    name="company"
                    placeholder="Apex Innovations"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-[#F4F4F5] border border-black/10 rounded-md px-4 py-3 text-sm text-[#09090B] placeholder-gray-400 focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="consultation-service" className="block text-xs font-medium text-[#52525B] mb-1.5">
                  Primary Interest
                </label>
                <select
                  id="consultation-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#F4F4F5] border border-black/10 rounded-md px-4 py-3 text-sm text-[#09090B] focus:outline-none focus:border-[#2563EB] transition-colors"
                >
                  <option value="Custom Business Software">Custom Business Software / ERP / CRM</option>
                  <option value="AI & Business Automation">AI &amp; Business Automation Agents</option>
                  <option value="Website & Web Application">Website &amp; Web App Development</option>
                  <option value="E-Commerce Solutions">E-Commerce Platforms</option>
                  <option value="Mobile Application">Mobile Application (iOS / Android)</option>
                  <option value="Cloud & DevOps">Cloud Migration &amp; DevOps</option>
                  <option value="Digital Growth">Digital Growth &amp; SEO</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="consultation-message" className="block text-xs font-medium text-[#52525B] mb-1.5">
                  Project Overview / Goals
                </label>
                <textarea
                  id="consultation-message"
                  name="message"
                  rows="3"
                  placeholder="Briefly describe your objectives, timeframe, or operational pain points..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#F4F4F5] border border-black/10 rounded-md px-4 py-3 text-sm text-[#09090B] placeholder-gray-400 focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                />
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-md text-xs text-red-600 font-medium">
                  ⚠️ {errorMsg}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#2563EB] text-white py-3.5 rounded-md font-semibold text-sm hover:bg-blue-600 transition-colors shadow-[0_4px_14px_rgba(37,99,235,0.3)] mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <FiLoader className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  'Request Free Consultation'
                )}
              </button>

              {/* Trust line */}
              <p className="text-center text-[11px] text-[#52525B] font-mono pt-1">
                🔒 NDA protected &nbsp;·&nbsp; No spam, ever &nbsp;·&nbsp; Reply within 24 hours
              </p>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
