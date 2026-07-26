import React, { useEffect, useState, useRef } from 'react';
import LogoMohfasa from './LogoMohfasa';

export default function Preloader({ isLoading }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1800; // 1.8s

    const updateProgress = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setHidden(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (hidden) return null;

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-between bg-[#FAFAFA] text-[#09090B] p-8 md:p-16 select-none transition-transform duration-700 ease-in-out ${
        !isLoading ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="w-full flex justify-between items-center text-xs tracking-widest uppercase text-[#52525B]">
        <span>MOHFASA IT SOLUTIONS</span>
        <span>BUILD FASTER</span>
      </div>

      <div className="text-center max-w-xl space-y-4">
        <div className="flex justify-center">
          <LogoMohfasa className="scale-125" />
        </div>
        <p className="text-sm md:text-base text-[#52525B]">
          Transforming businesses with smart digital solutions.
        </p>
      </div>

      <div className="w-full max-w-xs space-y-3">
        <div className="flex justify-between items-center text-xs font-mono text-[#52525B]">
          <span>INITIALIZING</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-[2px] bg-black/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#2563EB] rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
