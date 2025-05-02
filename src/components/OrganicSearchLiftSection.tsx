import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const OrganicSearchLiftSection: React.FC = () => {
  const chartData = {
    labels: ["Jan '24", "Apr '24", "Aug '24", "Oct '24", "Jan '25", "Apr '25"],
    datasets: [
      {
        label: 'Organic Search Sessions',
        data: [500, 600, 700, 900, 4500, 5500],
        borderColor: '#00ff9c',
        backgroundColor: 'rgba(0, 255, 156, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Organic Search <span className="text-primary-400 bg-primary-500/10 px-3 py-1 rounded">Lift</span>
            </h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Why it matters</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                    <span className="text-gray-300">Strong social buzz → more branded queries & backlinks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                    <span className="text-gray-300">Organic sessions rose <span className="font-bold text-white">15×</span> post-campaign</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                    <span className="text-gray-300">
                      Equivalent ad cost saved ≈ <span className="font-bold text-white">$11K</span>
                      <span className="text-sm text-gray-400 ml-1">
                        (10,000 organic sessions × $1.11 CPC low-end)
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
                <div className="space-y-3">
                  <p className="text-gray-300">
                    <span className="text-primary-400">Baseline (pre-Sept '24):</span> ~650 search sessions/mo
                  </p>
                  <p className="text-gray-300">
                    <span className="text-primary-400">Post-launch (Jan '25):</span> ↑ to 4,500+/mo
                  </p>
                  <p className="text-gray-300">
                    <span className="text-primary-400">Apr '25:</span> stabilizing around 5,500+/mo
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card hover:shadow-card-hover transition-all duration-300">
            <Line data={chartData} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
};