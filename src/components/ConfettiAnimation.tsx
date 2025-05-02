import React, { useEffect, useRef, useState } from 'react';

export const ConfettiAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Handle scroll events
    let scrollTimeout: number;
    const handleScroll = () => {
      setIsVisible(false);
    };
    window.addEventListener('scroll', handleScroll);

    // Confetti settings
    const confettiCount = 150;
    const confettiColors = [
      '#ffd700', // gold
      '#ffffff', // white
      '#1e90ff', // blue
      '#ff69b4', // pink
      '#32cd32', // lime green
      '#ff4500', // orange red
      '#9370db', // purple
    ];
    const confetti: Confetti[] = [];

    interface Confetti {
      x: number;
      y: number;
      size: number;
      color: string;
      speed: number;
      angle: number;
      spin: number;
      shape: 'circle' | 'square' | 'triangle';
    }

    // Generate confetti particles
    for (let i = 0; i < confettiCount; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * -1, // Start above the canvas
        size: Math.random() * 10 + 5,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        speed: Math.random() * 3 + 2,
        angle: Math.random() * 360,
        spin: Math.random() * 0.2 - 0.1,
        shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
      });
    }

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      if (!isVisible) {
        cancelAnimationFrame(animationFrame);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < confetti.length; i++) {
        const c = confetti[i];
        
        // Update position
        c.y += c.speed;
        c.angle += c.spin;
        
        // Draw confetti
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate((c.angle * Math.PI) / 180);
        ctx.fillStyle = c.color;
        
        if (c.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, c.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (c.shape === 'square') {
          ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
        } else if (c.shape === 'triangle') {
          ctx.beginPath();
          ctx.moveTo(0, -c.size / 2);
          ctx.lineTo(-c.size / 2, c.size / 2);
          ctx.lineTo(c.size / 2, c.size / 2);
          ctx.closePath();
          ctx.fill();
        }
        
        ctx.restore();
        
        // Reset confetti when it goes off screen
        if (c.y > canvas.height) {
          c.y = Math.random() * canvas.height * -0.2;
          c.x = Math.random() * canvas.width;
        }
      }
      
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-50"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  );
};