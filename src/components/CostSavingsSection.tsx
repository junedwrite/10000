import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const CostSavingsSection: React.FC = () => {
  const chartData = {
    labels: ['Low-tier', 'Video-heavy Blend', 'Premium', 'Automation'],
    datasets: [{
      label: 'Total 27-wk Cost (USD)',
      data: [337500, 1485000, 4050000, 61000],
      backgroundColor: ['#0a7d50', '#00ff8e', '#064e34', '#18b06b'],
      borderColor: ['#097548', '#00e67d', '#054028', '#159b5d'],
      borderWidth: 2
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `$${context.raw.toLocaleString()}`
        },
        backgroundColor: 'rgba(13, 15, 20, 0.9)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(0, 255, 156, 0.1)',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)'
        },
        ticks: {
          color: '#ffffff',
          callback: (value: number) => `$${(value / 1000).toFixed(0)}K`,
          font: {
            weight: '600'
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#ffffff',
          font: {
            weight: 'bold'
          }
        }
      }
    }
  };

  const priceBuckets = [
    {
      name: 'Low-tier',
      mix: '100% static images',
      rate: '$25',
      total: '$337,500'
    },
    {
      name: 'Video-heavy blend',
      mix: '70% short video @ $150\n30% static @ $25',
      rate: '$110',
      total: '$1,485,000',
      isChosen: true
    },
    {
      name: 'Premium',
      mix: 'Bespoke motion, high-end creative',
      rate: '$300',
      total: '$4,050,000'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-radial from-dark-100 to-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,81,0.03),transparent_70%)]" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Content Production <span className="text-primary-400 bg-primary-500/10 px-3 py-1 rounded">Cost Matrix</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
              <h3 className="text-xl font-bold mb-6">Price buckets (per post)</h3>
              <div className="space-y-4">
                {priceBuckets.map((bucket) => (
                  <div 
                    key={bucket.name}
                    className={`p-4 bg-dark-50/50 rounded-lg border ${
                      bucket.isChosen ? 'border-primary-400/30' : 'border-primary-700/10'
                    } backdrop-blur-sm`}
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-semibold">
                        {bucket.name}
                        {bucket.isChosen && (
                          <span className="ml-2 text-sm text-primary-400">(chosen)</span>
                        )}
                      </span>
                      <span className="text-lg font-bold">{bucket.total}</span>
                    </div>
                    <div className="text-sm text-gray-300 whitespace-pre-line">
                      <div className="mb-1">Asset mix: {bucket.mix}</div>
                      <div>Per-post rate: {bucket.rate}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
              <h3 className="text-xl font-bold mb-4">Automation Cost Breakdown</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span className="text-gray-300">Content-automation tools: <span className="font-bold text-white">$10,000</span> (6 mo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span className="text-gray-300">Oversight labour: <span className="font-bold text-white">$51,000</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span className="text-gray-300">Total automated spend: <span className="font-bold text-white">$61,000</span></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card hover:shadow-card-hover transition-all duration-300">
              <Bar data={chartData} options={options} />
            </div>

            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary-400">Total savings</h4>
                  <div className="space-y-2">
                    <p className="text-gray-300">
                      <span className="font-bold text-white">$1,424,000</span> saved vs. video-heavy blend
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-primary-400">Sources & notes</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                      Unit rates from Upwork 2024 (low-tier $150/video, $25/static)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                      Schedule PDF shows 70% video weighting
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                      Tools cost doubled for scale-up phase
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};