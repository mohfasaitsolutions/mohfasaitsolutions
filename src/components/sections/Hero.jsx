import React from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiShield,
  FiCpu,
  FiTrendingUp
} from 'react-icons/fi';

export default function Hero({ onOpenConsultation }) {
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
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden xl:flex absolute top-36 left-10 animate-float-slow items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-blue-400/30 shadow-[0_8px_25px_rgba(37,99,235,0.1)] z-10"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2563EB] to-indigo-600 flex items-center justify-center text-white text-xs shadow-sm font-bold">
            ⚡
          </div>
          <div>
            <p className="text-xs font-bold text-[#09090B]">Autonomous AI</p>
            <p className="text-[10px] text-slate-500 font-mono">v4.2 Engine Active</p>
          </div>
        </motion.div>

        {/* Floating Light Geometric Background Badges/Shapes (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden xl:flex absolute top-52 right-10 animate-float-reverse items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-indigo-400/30 shadow-[0_8px_25px_rgba(99,102,241,0.1)] z-10"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xs shadow-sm font-bold">
            📈
          </div>
          <div>
            <p className="text-xs font-bold text-[#09090B]">Cloud Auto-Scale</p>
            <p className="text-[10px] text-emerald-600 font-mono font-semibold">+320% Performance</p>
          </div>
        </motion.div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12">

        {/* ========================================================================= */}
        {/* CENTERED HERO HEADER & TYPOGRAPHY MATCHING SCREENSHOT LAYOUT STYLING */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto space-y-6">



          {/* Main Headline styled like screenshot */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#09090B] leading-[1.08]"
          >
            Elevate Your Digital Ecosystem with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-indigo-600 to-purple-600 inline-block pb-2">
              Mohfasa
            </span>{' '}
            <br className="hidden sm:inline" />

          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-[#52525B] leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Streamline, optimize, and scale your business operations with our powerful AI agents, custom cloud architecture, and modern enterprise software.
          </motion.p>

          {/* Action CTA Buttons Styled exactly like screenshot (Solid filled primary + outlined secondary) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-md bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-base shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Free Consultation
            </button>

            <a href="#services">
              <button
                className="px-8 py-3.5 rounded-md  bg-transparent border border-black/20 hover:border-black/40 text-[#09090B] font-semibold text-base transition-all duration-300 hover:bg-black/5"
              >
                Explore Solutions
              </button>
            </a>
          </motion.div>

          {/* Trust Highlights Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="pt-2 flex flex-wrap justify-center items-center gap-6 text-xs font-medium text-[#52525B]"
          >
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
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* CENTERED DASHBOARD SHOWCASE FRAME WITH 4K DARK GRADIENT IMAGE */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto pt-4"
        >

          {/* Ambient Glow Halo behind Mockup */}
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-purple-600/30 blur-3xl opacity-80 pointer-events-none" />

          {/* Outer Glass Container Frame (Dark High-Tech Frame) */}
          <div className="relative rounded-[24px] p-[1px] bg-gradient-to-b from-blue-500/40 via-indigo-500/30 to-slate-800/60 shadow-[0_25px_80px_-15px_rgba(15,23,42,0.6)] bg-[#0B0F19] overflow-hidden transition-all duration-500 hover:shadow-[0_35px_100px_-15px_rgba(37,99,235,0.3)]">

            {/* Top Glowing Shimmer Border */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563EB]/80 to-transparent z-30" />

            {/* Dark Dashboard Window Header Bar */}
            <div className="bg-[#0D121F]/95 backdrop-blur-md px-5 py-3 border-b border-white/10 flex items-center justify-between gap-3 z-20 relative">

              {/* Window Dots & Live OS Badge */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/90 border border-red-400/30" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/90 border border-amber-400/30" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90 border border-emerald-400/30" />
                </div>
                <div className="h-4 w-[1px] bg-white/15 mx-1 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-300 font-medium">mohfasa-os // live v2.4 4K</span>
                </div>
              </div>

              {/* Centered Search/URL Bar Mockup */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#161D2F] border border-white/10 text-xs text-slate-300 w-48 sm:w-72 shadow-inner">
                <span className="text-slate-400 font-mono text-[11px] truncate">https://app.mohfasa.com/dashboard</span>
              </div>
            </div>

            {/* Dashboard 4K Image Display Screen */}
            <div className="relative overflow-hidden bg-[#070A11] aspect-[16/10] sm:aspect-[16/9] w-full">
              <img
                src="/hero_dashboard.png"
                alt="Mohfasa Enterprise 4K Dark Digital Ecosystem SaaS Dashboard"
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>

          </div>

          {/* Floating Action Badge 1 (Top-Right) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute -top-4 -right-4 hidden sm:flex bg-white/90 backdrop-blur-md border border-blue-500/30 p-3.5 rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.15)] items-center gap-3 animate-pulse z-20"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              ⚡
            </div>
            <div>
              <p className="text-xs font-bold text-[#09090B]">Workflow Speed +400%</p>
              <p className="text-[10px] text-[#52525B]">Automated Execution Active</p>
            </div>
          </motion.div>

          {/* Floating Action Badge 2 (Bottom-Left) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-4 -left-4 hidden sm:flex bg-white/90 backdrop-blur-md border border-emerald-500/30 p-3.5 rounded-2xl shadow-[0_10px_30px_rgba(16,185,129,0.12)] items-center gap-3 z-20"
          >
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            <div>
              <p className="text-xs font-bold text-[#09090B]">Enterprise Security Shield</p>
              <p className="text-[10px] text-[#52525B]">Zero Vulnerabilities • Verified</p>
            </div>
          </motion.div>

        </motion.div>

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



