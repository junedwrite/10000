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

export const PlatformMetricsSection: React.FC = () => {
  const chartData = {
    labels: ['Twitter', 'LinkedIn', 'Facebook', 'TikTok'],
    datasets: [
      {
        label: 'Clicks',
        data: [3300, 2700, 2000, 2000],
        backgroundColor: '#00ff9c',
        borderColor: '#00cc7d',
        borderWidth: 2
      },
      {
        label: 'Engagements',
        data: [6600, 5400, 4000, 6000],
        backgroundColor: '#1a1d22',
        borderColor: '#22262c',
        borderWidth: 2
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#e8f0ff',
          font: {
            weight: 'bold'
          },
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.dataset.label || '';
            const value = context.raw.toLocaleString();
            return `${label}: ${value}`;
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
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)'
        },
        ticks: {
          color: '#e8f0ff',
          callback: (value: number) => value.toLocaleString()
        }
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-radial from-dark-100 to-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,81,0.03),transparent_70%)]" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Platform <span className="text-primary-400 bg-primary-500/10 px-3 py-1 rounded">Performance</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card hover:shadow-card-hover transition-all duration-300">
              <Bar data={chartData} options={options} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card hover:shadow-card-hover transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Platform Distribution</h3>
              <div className="space-y-4">
                <PlatformStat platform="Twitter" percentage={33} clicks={3300} />
                <PlatformStat platform="LinkedIn" percentage={27} clicks={2700} />
                <PlatformStat platform="Facebook" percentage={20} clicks={2000} />
                <PlatformStat platform="TikTok" percentage={20} clicks={2000} />
              </div>
            </div>

            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
              <h4 className="font-semibold mb-3 text-primary-400">Key Insights</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  <span className="text-gray-300">Twitter leads with 33% of total clicks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  <span className="text-gray-300">TikTok shows highest engagement ratio</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  <span className="text-gray-300">Instagram is our largest audience channel (tracking limited)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  <span className="text-gray-300">BlueSky launch pending</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface PlatformStatProps {
  platform: string;
  percentage: number;
  clicks: number;
}

const PlatformStat: React.FC<PlatformStatProps> = ({ platform, percentage, clicks }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium text-gray-300">{platform}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-primary-400">{percentage}%</span>
        <span className="text-sm font-medium text-white">{clicks.toLocaleString()}</span>
      </div>
    </div>
    <div className="w-full h-2 bg-dark-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-primary-400 to-primary-500 rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);