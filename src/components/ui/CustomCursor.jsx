import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (isMobile) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let glowX = mouseX;
    let glowY = mouseY;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target;
      const isInteractive = target.closest('a, button, input, select, textarea, [data-interactive], .service-card, .project-card, .why-card');
      setIsHovered(!!isInteractive);
    };

    let animationFrameId;
    const render = () => {
      currentX += (mouseX - currentX) * 0.35;
      currentY += (mouseY - currentY) * 0.35;

      glowX += (mouseX - glowX) * 0.05;
      glowY += (mouseY - glowY) * 0.05;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Background Ambient Blue Glow Dot */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#2563EB]/[0.05] rounded-full blur-[140px] pointer-events-none z-0 hidden lg:block"
      />

      {/* Precision Dark Dot Cursor */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9998] hidden lg:flex items-center justify-center transition-all duration-300 ease-out ${
          isHovered
            ? 'w-12 h-12 bg-[#2563EB]/15 border border-[#2563EB] rounded-full shadow-[0_0_20px_rgba(37,99,235,0.2)]'
            : 'w-3.5 h-3.5 bg-[#09090B] rounded-full shadow-[0_0_12px_rgba(37,99,235,0.4)]'
        }`}
      />
    </>
  );
}
