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

export const ProjectedSessionsSection: React.FC = () => {
  const chartData = {
    labels: ["Jan '24", "Apr '24", "Jul '24", "Oct '24", "Jan '25", "Apr '25", "Jul '25", "Oct '25"],
    datasets: [
      {
        label: 'Direct Sessions',
        data: [40, 60, 80, 100, 600, 800, 1080, 1350],
        borderColor: '#00ff8e',
        backgroundColor: 'rgba(0, 255, 142, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      },
      {
        label: 'Organic Sessions',
        data: [15, 25, 35, 45, 450, 550, 960, 1200],
        borderColor: '#18b06b',
        backgroundColor: 'rgba(24, 176, 107, 0.1)',
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Projected <span className="text-primary-400 bg-primary-500/10 px-3 py-1 rounded">Growth</span>
            </h2>

            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
              <h3 className="text-xl font-bold mb-4">Projection Logic</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span className="text-gray-300">
                    Baseline (Apr '25): Direct 800/wk • Organic 550/wk
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span className="text-gray-300">
                    New automations + 6 regional feeds → <span className="font-bold text-white">+35% Direct</span> and <span className="font-bold text-white">+75% Organic</span> by Oct '25
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span className="text-gray-300">
                    4.3% site-conversion unchanged → <span className="font-bold text-white">+560 funded accts</span> in next 6 mo
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
              <h3 className="text-xl font-bold mb-4">Disclaimer</h3>
              <p className="text-gray-300 mb-4">Forecasts assume:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span className="text-gray-300">All four automations fully live by Week 4</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span className="text-gray-300">Regional feeds achieve 12% of global engagement each</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span className="text-gray-300">No major market or platform-algorithm shocks</span>
                </li>
              </ul>
              <p className="text-sm text-gray-400 mt-4 italic">
                Actual performance may differ.
              </p>
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