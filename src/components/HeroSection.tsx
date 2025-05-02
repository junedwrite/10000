import React, { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { ConfettiAnimation } from './ConfettiAnimation';

export const HeroSection: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#050607] min-h-screen">
      {showConfetti && <ConfettiAnimation />}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto text-[#f6fafc]">
          <h1 className="mb-8 space-y-4">
            <div className="text-6xl">🎉</div>
            <div className="text-4xl md:text-5xl font-bold">Zimtra Reaches</div>
            <div className="text-7xl md:text-8xl font-extrabold text-[#00ff8e] leading-none tracking-tight">
              10,000
            </div>
            <div className="text-4xl md:text-5xl font-bold">Organic Clicks!</div>
          </h1>
          
          <div className="bg-dark-50/50 backdrop-blur-sm border border-primary-700/20 rounded-lg px-8 py-4 mb-8">
            <p className="text-xl md:text-2xl">
              <span className="font-semibold">27 weeks</span> · 
              <span className="font-semibold"> 13,500 automated posts</span> · 
              <span className="font-semibold text-[#00ff8e]"> $0 ad‑spend</span>
            </p>
          </div>
          
          <button 
            className="bg-[#00ff8e] hover:bg-[#00e67d] text-[#050607] px-8 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 font-semibold"
          >
            <TrendingUp className="w-5 h-5" />
            100% Organic Growth
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050607] via-[#050607]/80 to-transparent"></div>
    </div>
  );
};