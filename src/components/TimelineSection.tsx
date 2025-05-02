import React, { useEffect, useState } from 'react';
import { CalendarDays, Check, Zap, Award } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateTimeline();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    const element = document.getElementById('timeline-section');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const animateTimeline = () => {
    const timelineItems = 4;
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      setActiveIndex(currentIndex);
      currentIndex++;
      
      if (currentIndex >= timelineItems) {
        clearInterval(interval);
      }
    }, 600);
    
    return () => clearInterval(interval);
  };

  return (
    <section id="timeline-section" className="py-16 md:py-24 bg-gradient-radial from-dark-100 to-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,81,0.03),transparent_70%)]" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our <span className="text-primary-400 bg-primary-500/10 px-3 py-1 rounded">Journey</span> to Success
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400/50 via-primary-400/20 to-transparent transform md:translate-x-[-50%]"></div>
          
          <TimelineItem 
            icon={<CalendarDays className="w-6 h-6" />}
            title="Campaign Launch"
            date="27 Weeks Ago"
            description="Started our automated content strategy with zero budget"
            position="left"
            isActive={activeIndex >= 0}
            index={1}
          />
          
          <TimelineItem 
            icon={<Check className="w-6 h-6" />}
            title="First 1,000 Clicks"
            date="20 Weeks Ago"
            description="Hit our first milestone with consistent content creation"
            position="right"
            isActive={activeIndex >= 1}
            index={2}
          />
          
          <TimelineItem 
            icon={<Zap className="w-6 h-6" />}
            title="Growth Acceleration"
            date="17 Weeks Ago"
            description="Optimized our approach and saw exponential growth"
            position="left"
            isActive={activeIndex >= 2}
            index={3}
          />
          
          <TimelineItem 
            icon={<Award className="w-6 h-6" />}
            title="10,000 Clicks Milestone"
            date="Today"
            description="Achieved our major goal with zero ad spend, purely organic"
            position="right"
            isActive={activeIndex >= 3}
            index={4}
            isFinal={true}
          />
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  date: string;
  description: string;
  position: 'left' | 'right';
  isActive: boolean;
  index: number;
  isFinal?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  icon, 
  title, 
  date, 
  description, 
  position, 
  isActive, 
  index,
  isFinal = false
}) => {
  const isLeft = position === 'left';
  
  return (
    <div 
      className={`relative flex items-start mb-12 ${isActive ? 'opacity-100' : 'opacity-0'}`}
      style={{ transition: 'opacity 0.5s ease', transitionDelay: `${index * 0.2}s` }}
    >
      {/* Timeline dot */}
      <div 
        className={`absolute left-0 md:left-1/2 w-5 h-5 rounded-full border-4 ${
          isFinal ? 'border-primary-400 bg-primary-400' : 'border-primary-400/30 bg-dark-50'
        } z-10 transform md:translate-x-[-50%] transition-all duration-500 ${
          isActive ? 'scale-100' : 'scale-0'
        }`}
      ></div>
      
      {/* Content container */}
      <div
        className={`
          md:w-1/2 pt-0 md:pt-0 pl-8 md:pl-0 pr-0 md:pr-0
          ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}
        `}
      >
        <div
          className={`
            bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 
            shadow-card hover:shadow-card-hover transition-all duration-500 
            ${isActive ? 'translate-y-0' : 'translate-y-8'}
            transform hover:-translate-y-1
          `}
        >
          <div className="flex items-center mb-3 gap-2 text-primary-400">
            <div className={`p-2 rounded-full bg-primary-500/10 ${!isLeft && 'md:order-last'}`}>
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
          <p className="text-sm text-primary-400 mb-2">{date}</p>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};