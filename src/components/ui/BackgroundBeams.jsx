import React from 'react';

export default function BackgroundBeams({ className = '' }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Radial Glow Halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-purple-600/15 blur-[120px] rounded-full" />
      
      {/* Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
        }}
      />

      {/* Beam Lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-pulse" />
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-500/25 to-transparent animate-pulse delay-1000" />
      <div className="absolute top-0 left-2/3 w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse delay-500" />
    </div>
  );
}
