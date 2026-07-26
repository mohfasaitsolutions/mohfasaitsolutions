import React from 'react';
import logoMohfasa from '../../logo_mohfasa.png';

export default function LogoMohfasa({ className = 'h-9', showText = true }) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <img
        src={logoMohfasa}
        alt="MOHFASA IT Solutions Logo"
        className="h-9 w-auto object-contain rounded-lg shadow-sm"
      />
      {showText && (
        <span className="font-bold text-lg text-[#09090B] tracking-tight">
          Mohfasa IT Solutions<span className="text-[#2563EB]">.</span>
        </span>
      )}
    </div>
  );
}
