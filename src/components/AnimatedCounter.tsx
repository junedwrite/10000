import React, { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  animate: boolean;
  duration?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  animate, 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!animate) return;
    
    let startTime: number;
    let animationFrameId: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const progressRatio = Math.min(progress / duration, 1);
      // Use easeOutExpo for smoother animation
      const easeOutExpo = 1 - Math.pow(2, -10 * progressRatio);
      
      setCount(Math.floor(easeOutExpo * value));
      
      if (progress < duration) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };
    
    animationFrameId = requestAnimationFrame(updateCount);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [animate, value, duration]);
  
  return <>{count.toLocaleString()}</>;
};