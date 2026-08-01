import React from 'react';

export default function LogoMohfasa({ className = 'h-9', showText = true }) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <img
        src="logo.png"
        alt="MOHFASA IT Solutions Logo"
        className="h-9 w-auto object-contain rounded-md shadow-sm"
      />
      {showText && (
        <span className="font-bold text-lg text-[#09090B] tracking-tight">
          Mohfasa IT Solutions<span className="text-[#2563EB]">.</span>
        </span>
      )}
    </div>
  );
}
