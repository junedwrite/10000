import React, { useEffect, useState } from 'react';
import { MousePointer, Hash, Clock, DollarSign } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export const MetricsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    const element = document.getElementById('metrics-section');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="metrics-section" className="py-16 md:py-24 bg-gradient-radial from-dark-100 to-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Achieving Amazing <span className="text-primary-400 bg-primary-500/10 px-3 py-1 rounded">Results</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard 
            icon={<MousePointer className="w-8 h-8 text-primary-400" />}
            title="Organic Clicks"
            value={10000}
            animate={isVisible}
            suffix="+"
            color="primary"
          />
          
          <MetricCard 
            icon={<Hash className="w-8 h-8 text-primary-400" />}
            title="Automated Posts"
            value={13500}
            animate={isVisible}
            suffix=""
            color="primary"
          />
          
          <MetricCard 
            icon={<Clock className="w-8 h-8 text-primary-400" />}
            title="Weeks"
            value={27}
            animate={isVisible}
            suffix=""
            color="primary"
          />
          
          <MetricCard 
            icon={<DollarSign className="w-8 h-8 text-primary-400" />}
            title="Ad Spend"
            value={0}
            animate={isVisible}
            prefix="$"
            suffix=""
            color="primary"
          />
        </div>
      </div>
    </section>
  );
};

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  animate: boolean;
  prefix?: string;
  suffix?: string;
  color: 'primary';
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  icon, 
  title, 
  value, 
  animate, 
  prefix = '', 
  suffix = '', 
  color 
}) => {
  return (
    <div className="bg-gradient-card from-dark-50 to-dark-100 rounded-xl p-6 border border-primary-700/20 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
      <div className="mb-4 bg-primary-500/10 p-3 rounded-full w-fit">{icon}</div>
      <h3 className="text-lg font-medium text-gray-300 mb-2">{title}</h3>
      <div className="text-3xl md:text-4xl font-bold text-white">
        {prefix}<AnimatedCounter value={value} animate={animate} />{suffix}
      </div>
    </div>
  );
};