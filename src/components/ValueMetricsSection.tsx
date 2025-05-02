import React from 'react';
import { User, TrendingUp, BarChart, DollarSign, Settings, Star } from 'lucide-react';

export const ValueMetricsSection: React.FC = () => {
  const metrics = [
    { label: 'Trader LTV', value: '$688K', icon: <User className="w-5 h-5" /> },
    { label: 'Brand exposure', value: '$7.9K', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Labour & content savings', value: '$1.424M', icon: <DollarSign className="w-5 h-5" /> },
    { label: 'Organic-search uplift', value: '$11K', icon: <BarChart className="w-5 h-5" /> },
    { label: 'Automation spend', value: '$61K', icon: <Settings className="w-5 h-5" /> },
    { label: 'Value : Cost', value: '≈ 35×', icon: <Star className="w-5 h-5" /> }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-radial from-dark-100 to-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,81,0.03),transparent_70%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card from-dark-50 to-dark-100 p-8 rounded-lg border border-primary-700/20 shadow-card text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Total 6-Month <span className="text-primary-400">Value Generated</span>
            </h2>
            <div className="text-5xl md:text-7xl font-bold text-primary-400 mb-6">
              $2.13M
            </div>
            <div className="max-w-2xl mx-auto space-y-2 text-gray-300">
              <p>Total value created vs <span className="text-white font-semibold">$61K</span> automation investment</p>
              <ul className="text-sm space-y-1">
                <li>• $688K trader LTV</li>
                <li>• $7.9K brand exposure</li>
                <li>• $1.424M labour & content savings</li>
                <li>• $11K organic SEO uplift</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-primary-500/10 text-primary-400">
                    {metric.icon}
                  </div>
                  <span className="text-gray-300">{metric.label}</span>
                </div>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};