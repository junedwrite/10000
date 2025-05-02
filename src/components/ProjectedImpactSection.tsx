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

export const ProjectedImpactSection: React.FC = () => {
  const chartData = {
    labels: ['Hourly News', 'Podcast Promos', 'Sales Deck', 'Event Teasers'],
    datasets: [
      {
        label: 'Incremental Clicks (6 mo)',
        data: [10000, 5000, 3000, 2200],
        backgroundColor: '#00ff8e',
        borderColor: '#00cc7d',
        borderWidth: 2,
        barThickness: 32
      },
      {
        label: 'Projected Funded Accounts',
        data: [430, 215, 130, 85],
        backgroundColor: '#18b06b',
        borderColor: '#159b5d',
        borderWidth: 2,
        barThickness: 32
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projected 6-Month <span className="text-primary-400 bg-primary-500/10 px-3 py-1 rounded">Impact</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
              <h3 className="text-xl font-bold mb-4">Key Assumptions</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span className="text-gray-300">
                    New content = +500 richer posts/wk (doubling volume)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span className="text-gray-300">
                    CTR uplift: existing posts +10%; new rich posts 2× baseline CTR
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span className="text-gray-300">
                    Baseline: 370 clicks/wk → 9.6K clicks/6 mo
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span className="text-gray-300">
                    Projected total: <span className="font-bold text-white">29.8K clicks</span> (↑ 20.2K)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span className="text-gray-300">
                    4.3% site-conversion ⇒ <span className="font-bold text-white">860 funded accounts</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
              <h3 className="text-xl font-bold mb-4">ROI Snapshot</h3>
              <div className="space-y-4">
                <div className="p-4 bg-dark-50/50 rounded-lg border border-primary-700/10">
                  <div className="text-sm text-gray-400 mb-1">Incremental value</div>
                  <div className="text-lg font-bold">
                    $1.38M trader LTV + $15K ad-equivalent reach
                  </div>
                </div>
                <div className="p-4 bg-dark-50/50 rounded-lg border border-primary-700/10">
                  <div className="text-sm text-gray-400 mb-1">Automation spend (extra)</div>
                  <div className="text-lg font-bold text-primary-400">+ $5K tools</div>
                </div>
                <div className="p-4 bg-dark-50/50 rounded-lg border border-primary-700/10">
                  <div className="text-sm text-gray-400 mb-1">Value : Cost</div>
                  <div className="text-2xl font-bold text-primary-400">&gt; 270×</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card hover:shadow-card-hover transition-all duration-300">
            <Bar data={chartData} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
};