import React, { useState } from 'react';

export default function MagneticButton({ children, className = '', onClick, variant = 'primary', ...props }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.25;
    const y = (e.clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-full transition-all duration-300 ease-out select-none cursor-pointer active:scale-95";
  
  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-blue-600 border border-transparent shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)]",
    secondary: "bg-white text-[#09090B] border border-black/10 hover:border-black/20 hover:bg-[#F4F4F5] shadow-sm",
    outline: "bg-transparent text-[#09090B] border border-black/15 hover:border-[#2563EB] hover:text-[#2563EB]",
  };

  return (
    <button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 font-semibold tracking-tight">{children}</span>
    </button>
  );
}
