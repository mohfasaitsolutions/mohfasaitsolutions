import React, { useRef, useState } from 'react';

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(37, 99, 235, 0.15)',
  borderColor = 'rgba(255, 255, 255, 0.1)',
  hoverBorderColor = 'rgba(37, 99, 235, 0.4)',
  onClick,
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative rounded-2xl border bg-[#111726]/80 p-8 backdrop-blur-md overflow-hidden transition-all duration-300 ${className}`}
      style={{
        borderColor: opacity > 0 ? hoverBorderColor : borderColor,
      }}
    >
      {/* Spotlight Gradient Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
}
