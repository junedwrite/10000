import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Globe2, TrendingUp } from 'lucide-react';
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

export const GrowthProjectionSection: React.FC = () => {
  const chartData = {
    labels: ['Current 10K', 'Future 55K'],
    datasets: [{
      label: 'Projected Clicks',
      data: [10000, 55000],
      backgroundColor: ['#1a1d22', '#00ff9c'],
      borderColor: ['#22262c', '#00cc7d'],
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
          label: (context: any) => {
            const value = context.raw.toLocaleString();
            return `Clicks: ${value}`;
          }
        },
        backgroundColor: 'rgba(13, 15, 20, 0.9)',
        titleColor: '#e8f0ff',
        bodyColor: '#e8f0ff',
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
          color: '#e8f0ff',
          callback: (value: number) => `${(value / 1000).toFixed(0)}K`
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#e8f0ff',
          font: {
            weight: 'bold'
          }
        }
      }
    }
  };

  const regions = [
    { name: 'EMEA', growth: '15K-18K' },
    { name: 'LATAM', growth: '12K-15K' },
    { name: 'APAC', growth: '10K-12K' },
    { name: 'ANZ', growth: '8K-10K' }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-radial from-dark-100 to-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,81,0.03),transparent_70%)]" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Global <span className="text-primary-400 bg-primary-500/10 px-3 py-1 rounded">Expansion</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-card from-dark-50 to-dark-100 p-8 rounded-lg border border-primary-700/20 shadow-card hover:shadow-card-hover transition-all duration-300">
            <Bar data={chartData} options={options} />
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary-500/10">
                  <Globe2 className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold">Regional Growth Targets</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {regions.map((region) => (
                  <div key={region.name} className="p-4 bg-dark-50/50 rounded-lg border border-primary-700/10 backdrop-blur-sm">
                    <p className="text-sm text-gray-400 mb-1">{region.name}</p>
                    <p className="text-lg font-bold">{region.growth} clicks</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary-500/10">
                  <TrendingUp className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold">5× Growth Potential</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  <span className="text-gray-300">Localized content for each region</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  <span className="text-gray-300">Region-specific engagement strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  <span className="text-gray-300">Multi-language support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  <span className="text-gray-300">24/7 automated posting schedule</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};