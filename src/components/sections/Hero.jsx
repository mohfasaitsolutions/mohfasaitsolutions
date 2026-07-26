import React, { useState } from 'react';
import { FiArrowRight, FiShield, FiCpu, FiTrendingUp, FiActivity, FiServer, FiDatabase } from 'react-icons/fi';
import MagneticButton from '../ui/MagneticButton';

export default function Hero({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('ai');

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headline & Value Proposition */}
        <div className="lg:col-span-7 space-y-8 z-10 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs font-mono text-[#52525B] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            BUILD FASTER WITH MOHFASA
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-[#09090B] leading-[1.08]">
            Transform Your Business <br />
            <span className="text-[#2563EB]">With Smart Digital Solutions.</span>
          </h1>

          <p className="text-base md:text-lg text-[#52525B] leading-relaxed max-w-2xl">
            From custom software and AI automation to cloud infrastructure and digital growth, we help businesses streamline operations, increase efficiency, and scale with confidence.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton variant="primary" onClick={onOpenConsultation}>
              <span>Book a Free Consultation</span>
              <FiArrowRight className="w-4 h-4" />
            </MagneticButton>

            <a href="#services">
              <MagneticButton variant="secondary">
                <span>Explore Services</span>
              </MagneticButton>
            </a>
          </div>

          {/* Social Proof / Business Impact Badges */}
          <div className="pt-6 border-t border-black/10 flex flex-wrap gap-6 text-xs text-[#52525B]">
            <div className="flex items-center gap-2">
              <FiShield className="text-[#2563EB] w-4 h-4" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCpu className="text-[#2563EB] w-4 h-4" />
              <span>Autonomous AI Agents</span>
            </div>
            <div className="flex items-center gap-2">
              <FiTrendingUp className="text-[#2563EB] w-4 h-4" />
              <span>Scalable Architecture</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Light Theme HTML/CSS Dashboard */}
        <div className="lg:col-span-5 relative z-10 animate-fadeIn">
          <div className="relative bg-white border border-black/10 rounded-[20px] p-6 shadow-xl space-y-5 overflow-hidden group hover:border-[#2563EB]/40 transition-colors duration-500">
            
            {/* Header bar with window buttons & Interactive Tab Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-black/10 pb-4 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-[11px] font-mono text-[#52525B] ml-2">mohfasa-os // live</span>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center gap-1 bg-[#F4F4F5] p-1 rounded-lg border border-black/5 text-[11px]">
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-2.5 py-1 rounded-md transition-all font-mono ${
                    activeTab === 'ai' ? 'bg-[#2563EB] text-white shadow-sm' : 'text-[#52525B] hover:text-[#09090B]'
                  }`}
                >
                  AI Agents
                </button>
                <button
                  onClick={() => setActiveTab('erp')}
                  className={`px-2.5 py-1 rounded-md transition-all font-mono ${
                    activeTab === 'erp' ? 'bg-[#2563EB] text-white shadow-sm' : 'text-[#52525B] hover:text-[#09090B]'
                  }`}
                >
                  ERP
                </button>
                <button
                  onClick={() => setActiveTab('cloud')}
                  className={`px-2.5 py-1 rounded-md transition-all font-mono ${
                    activeTab === 'cloud' ? 'bg-[#2563EB] text-white shadow-sm' : 'text-[#52525B] hover:text-[#09090B]'
                  }`}
                >
                  Cloud
                </button>
              </div>
            </div>

            {/* Dynamic Content Based on Selected Tab */}
            {activeTab === 'ai' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F8FAFC] border border-black/5 p-4 rounded-xl space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#52525B]">
                      <span>Automation Speed</span>
                      <FiCpu className="text-[#2563EB]" />
                    </div>
                    <div className="text-2xl font-bold text-[#09090B]">4.2x Faster</div>
                    <div className="w-full bg-black/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#2563EB] h-full w-[92%] transition-all duration-700" />
                    </div>
                  </div>

                  <div className="bg-[#F8FAFC] border border-black/5 p-4 rounded-xl space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#52525B]">
                      <span>RAG Accuracy</span>
                      <span className="text-emerald-600 text-[10px] font-mono font-semibold">VERIFIED</span>
                    </div>
                    <div className="text-2xl font-bold text-[#09090B]">99.8%</div>
                    <div className="text-[11px] text-[#52525B]">Zero hallucinations</div>
                  </div>
                </div>

                <div className="bg-[#F8FAFC] border border-black/5 p-4 rounded-xl space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-[#52525B]">LIVE TASK THROUGHPUT</span>
                    <span className="text-[#2563EB] font-mono font-semibold">18.4k tasks / hr</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-16 pt-2 justify-between">
                    {[45, 70, 50, 85, 60, 95, 80, 100, 90, 95].map((val, idx) => (
                      <div key={idx} className="flex-1 bg-black/5 rounded-t h-full flex items-end">
                        <div
                          className="w-full bg-[#2563EB] rounded-t transition-all duration-500 hover:bg-blue-600"
                          style={{ height: `${val}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'erp' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F8FAFC] border border-black/5 p-4 rounded-xl space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#52525B]">
                      <span>Inventory Sync</span>
                      <FiDatabase className="text-[#2563EB]" />
                    </div>
                    <div className="text-2xl font-bold text-[#09090B]">Realtime</div>
                    <div className="text-[11px] text-[#52525B]">8 Warehouses connected</div>
                  </div>

                  <div className="bg-[#F8FAFC] border border-black/5 p-4 rounded-xl space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#52525B]">
                      <span>Cost Reduction</span>
                      <span className="text-emerald-600 text-[10px] font-mono font-semibold">ANNUAL</span>
                    </div>
                    <div className="text-2xl font-bold text-[#09090B]">$450,000</div>
                    <div className="text-[11px] text-[#52525B]">35% Overhead saved</div>
                  </div>
                </div>

                <div className="bg-[#F8FAFC] border border-black/5 p-4 rounded-xl space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-[#52525B]">DISPATCH EFFICIENCY</span>
                    <span className="text-[#2563EB] font-mono font-semibold">99.9% On-Time</span>
                  </div>
                  <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#2563EB] h-full w-[96%]" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cloud' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F8FAFC] border border-black/5 p-4 rounded-xl space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#52525B]">
                      <span>Cluster Uptime</span>
                      <FiServer className="text-[#2563EB]" />
                    </div>
                    <div className="text-2xl font-bold text-[#09090B]">99.99%</div>
                    <div className="text-[11px] text-emerald-600 font-mono font-semibold">ZERO DOWNTIME</div>
                  </div>

                  <div className="bg-[#F8FAFC] border border-black/5 p-4 rounded-xl space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#52525B]">
                      <span>Latency (Global)</span>
                      <FiActivity className="text-[#2563EB]" />
                    </div>
                    <div className="text-2xl font-bold text-[#09090B]">24 ms</div>
                    <div className="text-[11px] text-[#52525B]">AWS CloudFront Edge</div>
                  </div>
                </div>

                <div className="bg-[#F8FAFC] border border-black/5 p-4 rounded-xl space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-[#52525B]">AUTOSCALING NODE CAPACITY</span>
                    <span className="text-[#2563EB] font-mono font-semibold">Dynamic EKS</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#52525B]">
                    <span>Min Nodes: 4</span>
                    <span>Max Nodes: 64</span>
                    <span className="text-emerald-600 font-semibold">Current: 12</span>
                  </div>
                </div>
              </div>
            )}

            {/* Floating Mini Action Card 1 */}
            <div className="absolute -top-3 -right-3 bg-white border border-[#2563EB]/30 p-3 rounded-xl shadow-lg flex items-center gap-3 animate-pulse">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] font-bold text-xs">
                ⚡
              </div>
              <div>
                <p className="text-xs font-semibold text-[#09090B]">Workflow Optimized</p>
                <p className="text-[10px] text-[#52525B]">Process speed +400%</p>
              </div>
            </div>

            {/* Floating Mini Action Card 2 */}
            <div className="absolute -bottom-3 -left-3 bg-white border border-black/10 p-3 rounded-xl shadow-lg flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <div>
                <p className="text-xs font-semibold text-[#09090B]">Cloud Infrastructure</p>
                <p className="text-[10px] text-[#52525B]">Live System Health OK</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono text-[#52525B]">
        <span>SCROLL TO EXPLORE</span>
        <div className="w-5 h-8 border border-black/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#2563EB] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
