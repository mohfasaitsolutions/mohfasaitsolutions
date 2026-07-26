import React, { useState } from 'react';
import { 
  FiArrowRight, 
  FiShield, 
  FiCpu, 
  FiTrendingUp, 
  FiActivity, 
  FiServer, 
  FiDatabase, 
  FiSearch,
  FiZap,
  FiCheckCircle
} from 'react-icons/fi';
import MagneticButton from '../ui/MagneticButton';

export default function Hero({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('ai');
  const [hoveredBar, setHoveredBar] = useState(null);

  const chartData = [
    { label: 'Jan', value: 45, count: '12.4k' },
    { label: 'Feb', value: 62, count: '14.1k' },
    { label: 'Mar', value: 55, count: '13.8k' },
    { label: 'Apr', value: 78, count: '16.5k' },
    { label: 'May', value: 68, count: '15.2k' },
    { label: 'Jun', value: 92, count: '18.4k' },
    { label: 'Jul', value: 85, count: '17.9k' },
    { label: 'Aug', value: 98, count: '19.8k' },
  ];

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#FAFAFA]"
    >
      {/* ========================================================================= */}
      {/* 45-DEGREE ALTERNATING GRADIENT GRID & MOVING SHAPES BACKGROUND LAYER */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* 45-Degree Primary Gradient Grid with Top-to-Bottom Fade Mask */}
        <div className="grid-45-fade opacity-80" />

        {/* Alternate 45-Degree Diamond Grid Accent */}
        <div className="grid-45-alternate opacity-40" />

        {/* Animated Moving Fluid Gradient Mesh */}
        <div 
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[750px] opacity-75 animate-gradient-mesh blur-3xl"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.2) 0%, rgba(99, 102, 241, 0.15) 35%, rgba(168, 85, 247, 0.12) 70%, transparent 100%)'
          }}
        />

        {/* Floating Moving Blob 1 (Top Left) */}
        <div className="absolute -top-12 -left-20 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-blue-400/25 via-indigo-300/18 to-purple-300/10 blur-3xl animate-blob-1" />

        {/* Floating Moving Blob 2 (Top Right) */}
        <div className="absolute top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-400/20 via-indigo-400/20 to-blue-300/15 blur-3xl animate-blob-2" />

        {/* Floating Moving Blob 3 (Center Bottom) */}
        <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-sky-300/20 via-blue-400/15 to-transparent blur-3xl animate-blob-3" />

        {/* Floating Light Geometric Background Badges/Shapes (Left) */}
        <div className="hidden xl:flex absolute top-36 left-10 animate-float-slow items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-blue-400/30 shadow-[0_8px_25px_rgba(37,99,235,0.1)] z-10">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2563EB] to-indigo-600 flex items-center justify-center text-white text-xs shadow-sm font-bold">
            ⚡
          </div>
          <div>
            <p className="text-xs font-bold text-[#09090B]">Autonomous AI</p>
            <p className="text-[10px] text-slate-500 font-mono">v4.2 Engine Active</p>
          </div>
        </div>

        {/* Floating Light Geometric Background Badges/Shapes (Right) */}
        <div className="hidden xl:flex absolute top-52 right-10 animate-float-reverse items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-indigo-400/30 shadow-[0_8px_25px_rgba(99,102,241,0.1)] z-10">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xs shadow-sm font-bold">
            📈
          </div>
          <div>
            <p className="text-xs font-bold text-[#09090B]">Cloud Auto-Scale</p>
            <p className="text-[10px] text-emerald-600 font-mono font-semibold">+320% Performance</p>
          </div>
        </div>

        {/* Floating Geometric Accent Rings */}
        <div className="hidden lg:block absolute top-72 left-24 w-16 h-16 rounded-full border-2 border-blue-400/25 border-t-[#2563EB] animate-spin-slow" />
        <div className="hidden lg:block absolute bottom-40 right-24 w-20 h-20 rounded-full border-2 border-indigo-400/25 border-b-purple-500 animate-float-slow" />

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
        
        {/* ========================================================================= */}
        {/* CENTERED HERO HEADER & TYPOGRAPHY */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Top Shiny Gradient Pill Badge */}
          <div className="inline-flex items-center">
            <button 
              onClick={onOpenConsultation}
              className="group relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50/90 via-indigo-50/90 to-purple-50/90 border border-blue-500/25 text-xs font-semibold text-[#2563EB] shadow-[0_2px_12px_rgba(37,99,235,0.1)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.2)] hover:border-blue-500/50 transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
              </span>
              <span>14-Day Free Technical Audit & Architecture Blueprint</span>
              <FiArrowRight className="w-3.5 h-3.5 text-[#2563EB] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Main Headline with Editorial Serif Italic Accent */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#09090B] leading-[1.08]">
            Elevate Your{' '}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-indigo-600 to-purple-600 px-1 inline-block">
              Digital Ecosystem
            </span>{' '}
            <br className="hidden sm:inline" />
            with Mohfasa
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#52525B] leading-relaxed max-w-2xl mx-auto font-normal">
            Streamline, optimize, and scale your business operations with our powerful AI agents, custom cloud architecture, and modern enterprise software.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <MagneticButton variant="primary" onClick={onOpenConsultation}>
              <span>Book a Free Consultation</span>
              <FiArrowRight className="w-4 h-4" />
            </MagneticButton>

            <a href="#services">
              <MagneticButton variant="secondary">
                <span>Explore Solutions</span>
              </MagneticButton>
            </a>
          </div>

          {/* Trust Highlights Row */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-xs font-medium text-[#52525B]">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-black/5 shadow-2xs">
              <FiShield className="text-[#2563EB] w-4 h-4" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-black/5 shadow-2xs">
              <FiCpu className="text-[#2563EB] w-4 h-4" />
              <span>Autonomous AI Agents</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-black/5 shadow-2xs">
              <FiTrendingUp className="text-[#2563EB] w-4 h-4" />
              <span>Scalable Infrastructure</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CENTERED DASHBOARD SHOWCASE FRAME (Light Theme SaaS UI) */}
        {/* ========================================================================= */}
        <div className="relative max-w-5xl mx-auto pt-4">
          
          {/* Ambient Glow Halo behind Mockup */}
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-blue-400/25 via-indigo-300/30 to-purple-400/25 blur-2xl opacity-80 pointer-events-none" />

          {/* Outer Glass Container Frame */}
          <div className="relative rounded-[24px] p-[1px] bg-gradient-to-b from-blue-400/40 via-indigo-200/35 to-slate-200/40 shadow-[0_25px_70px_-15px_rgba(37,99,235,0.16)] bg-white overflow-hidden transition-all duration-500 hover:shadow-[0_35px_90px_-15px_rgba(37,99,235,0.22)]">
            
            {/* Top Glowing Shimmer Border */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563EB]/60 to-transparent z-30" />

            {/* Dashboard Window Header Bar */}
            <div className="bg-[#F8FAFC]/90 backdrop-blur-md px-5 py-3 border-b border-black/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              
              {/* Window Dots & Live OS Badge */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80 border border-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80 border border-amber-500/20" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80 border border-emerald-500/20" />
                </div>
                <div className="h-4 w-[1px] bg-black/10 mx-1 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-[#52525B] font-medium">mohfasa-os // live v2.4</span>
                </div>
              </div>

              {/* Centered Search Bar Mockup */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-black/10 text-xs text-[#52525B] w-64 shadow-2xs">
                <FiSearch className="text-slate-400 w-3.5 h-3.5" />
                <span className="text-slate-400 font-mono text-[11px]">Search Fleet, Workflows...</span>
                <span className="ml-auto text-[10px] font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200">⌘K</span>
              </div>

              {/* Interactive Module Tabs */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-black/5 text-xs font-medium">
                {[
                  { id: 'ai', label: 'AI Agents' },
                  { id: 'erp', label: 'ERP & Ops' },
                  { id: 'cloud', label: 'Cloud EKS' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 rounded-lg transition-all duration-300 font-sans text-xs ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#2563EB] to-indigo-600 text-white shadow-sm font-semibold'
                        : 'text-[#52525B] hover:text-[#09090B] hover:bg-white/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Inner Workspace Grid */}
            <div className="p-6 md:p-8 bg-gradient-to-b from-white via-[#FAFAFA] to-white grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Sidebar Navigation Mockup (Left Column) */}
              <div className="hidden lg:block lg:col-span-3 space-y-4 border-r border-black/[0.06] pr-6">
                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 px-3">
                  Core Modules
                </div>
                
                <nav className="space-y-1">
                  {[
                    { id: 'ai', name: 'AI Workflows', icon: FiCpu, count: 'Active' },
                    { id: 'erp', name: 'ERP Management', icon: FiDatabase, count: '8 Live' },
                    { id: 'cloud', name: 'Cloud Clusters', icon: FiServer, count: '99.99%' },
                    { id: 'analytics', name: 'Analytics & ROI', icon: FiTrendingUp, count: '+320%' },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                          isSelected 
                            ? 'bg-blue-50/80 text-[#2563EB] border border-blue-200/50 shadow-2xs font-semibold' 
                            : 'text-[#52525B] hover:bg-slate-100/70 hover:text-[#09090B]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-[#2563EB]' : 'text-slate-400'}`} />
                          <span>{item.name}</span>
                        </div>
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          isSelected ? 'bg-blue-100 text-[#2563EB]' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {item.count}
                        </span>
                      </button>
                    );
                  })}
                </nav>

                <div className="pt-4 border-t border-black/[0.06] space-y-3">
                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-blue-50/60 to-indigo-50/40 border border-blue-100 space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#09090B]">
                      <span>System Status</span>
                      <FiCheckCircle className="text-emerald-500 w-4 h-4" />
                    </div>
                    <p className="text-[11px] text-[#52525B]">All 14 microservices running smoothly.</p>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full w-[100%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area (Center Column) */}
              <div className="lg:col-span-9 space-y-6">
                
                {/* Greeting & Header Stats */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-black/[0.06]">
                  <div>
                    <h2 className="text-xl font-bold text-[#09090B] tracking-tight">
                      Welcome back, Mohfasa Partner
                    </h2>
                    <p className="text-xs text-[#52525B]">
                      Enterprise automation & infrastructure overview • Realtime sync
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Live Stream Active
                    </span>
                  </div>
                </div>

                {/* Tab 1: AI Agents */}
                {activeTab === 'ai' && (
                  <div className="space-y-6 animate-fadeIn">
                    
                    {/* Top KPI Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      
                      <div className="bg-white p-4 rounded-xl border border-black/[0.08] shadow-2xs space-y-2 hover:border-blue-500/30 transition-all">
                        <div className="flex items-center justify-between text-xs text-[#52525B]">
                          <span>Automation Speed</span>
                          <FiZap className="text-[#2563EB] w-4 h-4" />
                        </div>
                        <div className="text-2xl font-extrabold text-[#09090B] tracking-tight">4.2x Faster</div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full w-[92%]" />
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-black/[0.08] shadow-2xs space-y-2 hover:border-blue-500/30 transition-all">
                        <div className="flex items-center justify-between text-xs text-[#52525B]">
                          <span>RAG Accuracy</span>
                          <span className="text-emerald-600 text-[10px] font-mono font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">VERIFIED</span>
                        </div>
                        <div className="text-2xl font-extrabold text-[#09090B] tracking-tight">99.8%</div>
                        <div className="text-[11px] text-[#52525B]">Zero hallucinations guarantee</div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-black/[0.08] shadow-2xs space-y-2 hover:border-blue-500/30 transition-all">
                        <div className="flex items-center justify-between text-xs text-[#52525B]">
                          <span>Active AI Workflows</span>
                          <FiCpu className="text-[#2563EB] w-4 h-4" />
                        </div>
                        <div className="text-2xl font-extrabold text-[#09090B] tracking-tight">18,400 / hr</div>
                        <div className="text-[11px] text-emerald-600 font-semibold">+24% throughput this week</div>
                      </div>

                    </div>

                    {/* Chart & Live Activity Feed */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      
                      {/* Interactive Bar Chart (lg:col-span-7) */}
                      <div className="lg:col-span-7 bg-white p-5 rounded-xl border border-black/[0.08] shadow-2xs space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#52525B]">
                              Task Throughput History
                            </h3>
                            <p className="text-sm font-bold text-[#09090B]">18.4k tasks executed / hr</p>
                          </div>
                          <span className="text-[11px] font-mono text-[#2563EB] bg-blue-50 px-2 py-1 rounded-md border border-blue-100 font-semibold">
                            Peak 98%
                          </span>
                        </div>

                        {/* Bar Graph Visualizer */}
                        <div className="pt-4 pb-2">
                          <div className="flex items-end gap-2.5 h-36 justify-between">
                            {chartData.map((item, idx) => (
                              <div 
                                key={idx} 
                                className="flex-1 flex flex-col items-center gap-2 group cursor-pointer relative"
                                onMouseEnter={() => setHoveredBar(idx)}
                                onMouseLeave={() => setHoveredBar(null)}
                              >
                                {hoveredBar === idx && (
                                  <div className="absolute -top-9 bg-[#09090B] text-white text-[10px] font-mono py-1 px-2 rounded shadow-md z-20 whitespace-nowrap">
                                    {item.count} tasks
                                  </div>
                                )}
                                <div className="w-full bg-slate-100 rounded-t-md h-full flex items-end overflow-hidden">
                                  <div
                                    className="w-full bg-gradient-to-t from-[#2563EB] via-blue-500 to-indigo-500 rounded-t-md transition-all duration-500 group-hover:from-blue-600 group-hover:to-indigo-400"
                                    style={{ height: `${item.value}%` }}
                                  />
                                </div>
                                <span className="text-[10px] font-mono text-slate-400 group-hover:text-[#09090B]">
                                  {item.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Recent Execution Activity Feed */}
                      <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-black/[0.08] shadow-2xs space-y-4">
                        <div className="flex items-center justify-between border-b border-black/[0.06] pb-2">
                          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#52525B]">
                            Live Execution Stream
                          </h3>
                          <span className="text-[10px] text-slate-400">Just now</span>
                        </div>

                        <div className="space-y-3.5 text-xs">
                          {[
                            {
                              id: '#01',
                              title: 'AI Agent Deployment',
                              desc: 'Autonomous agent connected to AWS cluster.',
                              time: 'Just now',
                              badge: 'Success',
                              badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            },
                            {
                              id: '#02',
                              title: 'Invoice Reconciliation',
                              desc: 'Processed 1,240 records with zero anomalies.',
                              time: '12m ago',
                              badge: 'Completed',
                              badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
                            },
                            {
                              id: '#03',
                              title: 'Cloud Node Auto-Scale',
                              desc: 'Scaled EKS capacity from 4 to 12 instances.',
                              time: '1h ago',
                              badge: 'Active',
                              badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
                            },
                          ].map((log) => (
                            <div key={log.id} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 space-y-1 hover:bg-blue-50/40 transition-colors">
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-[#09090B] text-xs">{log.title}</span>
                                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${log.badgeColor}`}>
                                  {log.badge}
                                </span>
                              </div>
                              <p className="text-[11px] text-[#52525B]">{log.desc}</p>
                              <span className="text-[10px] text-slate-400 block pt-0.5">{log.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>
                )}

                {/* Tab 2: ERP Systems */}
                {activeTab === 'erp' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      
                      <div className="bg-white p-4 rounded-xl border border-black/[0.08] shadow-2xs space-y-2">
                        <div className="flex items-center justify-between text-xs text-[#52525B]">
                          <span>Inventory Sync</span>
                          <FiDatabase className="text-[#2563EB]" />
                        </div>
                        <div className="text-2xl font-extrabold text-[#09090B]">Realtime</div>
                        <div className="text-[11px] text-[#52525B]">8 Warehouses connected</div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-black/[0.08] shadow-2xs space-y-2">
                        <div className="flex items-center justify-between text-xs text-[#52525B]">
                          <span>Cost Reduction</span>
                          <span className="text-emerald-600 text-[10px] font-mono font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">ANNUAL</span>
                        </div>
                        <div className="text-2xl font-extrabold text-[#09090B]">$450,000</div>
                        <div className="text-[11px] text-[#52525B]">35% Overhead saved</div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-black/[0.08] shadow-2xs space-y-2">
                        <div className="flex items-center justify-between text-xs text-[#52525B]">
                          <span>Dispatch On-Time Rate</span>
                          <FiCheckCircle className="text-emerald-600" />
                        </div>
                        <div className="text-2xl font-extrabold text-[#09090B]">99.9%</div>
                        <div className="text-[11px] text-emerald-600 font-semibold">Over 45,000 orders fulfilled</div>
                      </div>

                    </div>

                    <div className="bg-white p-5 rounded-xl border border-black/[0.08] shadow-2xs space-y-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono font-semibold text-[#52525B]">SUPPLY CHAIN AUTOMATION INDEX</span>
                        <span className="text-[#2563EB] font-mono font-bold">96% Optimal</span>
                      </div>
                      <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5 border border-black/5">
                        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 h-full rounded-full w-[96%]" />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-400 font-mono pt-1">
                        <span>Automated Purchasing</span>
                        <span>Zero Stockouts</span>
                        <span>Multi-Currency Sync</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Cloud EKS */}
                {activeTab === 'cloud' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      
                      <div className="bg-white p-4 rounded-xl border border-black/[0.08] shadow-2xs space-y-2">
                        <div className="flex items-center justify-between text-xs text-[#52525B]">
                          <span>Cluster Uptime</span>
                          <FiServer className="text-[#2563EB]" />
                        </div>
                        <div className="text-2xl font-extrabold text-[#09090B]">99.99%</div>
                        <div className="text-[11px] text-emerald-600 font-semibold font-mono">ZERO UNPLANNED DOWNTIME</div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-black/[0.08] shadow-2xs space-y-2">
                        <div className="flex items-center justify-between text-xs text-[#52525B]">
                          <span>Global Latency</span>
                          <FiActivity className="text-[#2563EB]" />
                        </div>
                        <div className="text-2xl font-extrabold text-[#09090B]">18 ms</div>
                        <div className="text-[11px] text-[#52525B]">AWS Edge Acceleration</div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-black/[0.08] shadow-2xs space-y-2">
                        <div className="flex items-center justify-between text-xs text-[#52525B]">
                          <span>Security Compliance</span>
                          <FiShield className="text-[#2563EB]" />
                        </div>
                        <div className="text-2xl font-extrabold text-[#09090B]">SOC2 & ISO</div>
                        <div className="text-[11px] text-[#52525B]">End-to-End Encryption</div>
                      </div>

                    </div>

                    <div className="bg-white p-5 rounded-xl border border-black/[0.08] shadow-2xs space-y-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono font-semibold text-[#52525B]">AUTOSCALING KUBERNETES NODE CAPACITY</span>
                        <span className="text-[#2563EB] font-mono font-bold">Dynamic Scaling</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-[#52525B] p-3 rounded-lg bg-slate-50 border border-slate-100">
                        <span>Min Target: 4 Nodes</span>
                        <span className="text-emerald-600 font-bold font-mono">Active Nodes: 12</span>
                        <span>Max Capacity: 64 Nodes</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>

          {/* Floating Action Badge 1 (Top-Right) */}
          <div className="absolute -top-4 -right-4 hidden sm:flex bg-white/90 backdrop-blur-md border border-blue-500/30 p-3.5 rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.15)] items-center gap-3 animate-pulse z-20">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              ⚡
            </div>
            <div>
              <p className="text-xs font-bold text-[#09090B]">Workflow Speed +400%</p>
              <p className="text-[10px] text-[#52525B]">Automated Execution Active</p>
            </div>
          </div>

          {/* Floating Action Badge 2 (Bottom-Left) */}
          <div className="absolute -bottom-4 -left-4 hidden sm:flex bg-white/90 backdrop-blur-md border border-emerald-500/30 p-3.5 rounded-2xl shadow-[0_10px_30px_rgba(16,185,129,0.12)] items-center gap-3 z-20">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            <div>
              <p className="text-xs font-bold text-[#09090B]">Enterprise Security Shield</p>
              <p className="text-[10px] text-[#52525B]">Zero Vulnerabilities • Verified</p>
            </div>
          </div>

        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <div className="mt-16 flex flex-col items-center justify-center gap-2 text-xs font-mono text-[#52525B] relative z-10">
        <span>SCROLL TO EXPLORE</span>
        <div className="w-5 h-8 border border-black/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#2563EB] rounded-full animate-bounce" />
        </div>
      </div>

    </section>
  );
}
