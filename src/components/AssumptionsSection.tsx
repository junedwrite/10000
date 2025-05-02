import React from 'react';
import { Calculator, LineChart, Users, DollarSign } from 'lucide-react';

export const AssumptionsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-radial from-dark-100 to-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,81,0.03),transparent_70%)]" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Key <span className="text-primary-400 bg-primary-500/10 px-3 py-1 rounded">Metrics</span> & Assumptions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <MetricsCard
              icon={<Calculator className="w-6 h-6 text-primary-400" />}
              title="Cost Metrics"
              items={[
                'CPC Range: $1.11–$3.77',
                'CPM: $6.52',
                'CPE: $0.015',
                'Content Team: $8K/mo',
                'SMM Specialist: $4.7K/mo'
              ]}
            />
            
            <MetricsCard
              icon={<LineChart className="w-6 h-6 text-primary-400" />}
              title="Performance Rates"
              items={[
                'Click-through Rate: 0.88%',
                'Engagement Rate: 1.8%',
                'Site Conversion: 4.3%',
                'Posts per Day: 100',
                'Campaign Duration: 27 weeks'
              ]}
            />
          </div>

          <div className="space-y-6">
            <MetricsCard
              icon={<Users className="w-6 h-6 text-primary-400" />}
              title="Volume & Scale"
              items={[
                'Total Posts: 13,500',
                'Avg Daily Posts: 100',
                'Content Categories: 5',
                'Platforms Covered: 6',
                'Regional Markets: 4'
              ]}
            />
            
            <MetricsCard
              icon={<DollarSign className="w-6 h-6 text-primary-400" />}
              title="Value Metrics"
              items={[
                'Trader LTV: ~$1.6K',
                'Challenge Fee + Profit Share',
                'Brand Value: CPM-based',
                'Cost Savings vs Manual',
                'ROI: 1,600×'
              ]}
            />
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card backdrop-blur-sm">
            <p className="text-sm text-gray-300">
              <span className="text-primary-400 font-semibold">Note:</span> Metrics sourced from industry standards (WordStream, Brafton, Hootsuite) and fin-tech sector averages. All figures are rounded for clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

interface MetricsCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const MetricsCard: React.FC<MetricsCardProps> = ({ icon, title, items }) => {
  return (
    <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-full bg-primary-500/10">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-300 flex items-center gap-2">
            <span className="text-primary-400">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};