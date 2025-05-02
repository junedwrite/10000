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

export const TrafficTrendSection: React.FC = () => {
  const chartData = {
    labels: ["Jan '24", "Apr '24", "Aug '24", "Oct '24", "Jan '25", "Apr '25"],
    datasets: [
      {
        label: 'Direct Sessions',
        data: [40, 50, 60, 100, 600, 800],
        borderColor: '#00c851',
        backgroundColor: 'rgba(0, 200, 81, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4
      },
      {
        label: 'Organic Sessions',
        data: [15, 20, 25, 45, 450, 550],
        borderColor: '#1b263b',
        backgroundColor: 'rgba(27, 38, 59, 0.1)',
        borderWidth: 2,
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
          color: '#fff',
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
            return `${label}: ${value} sessions`;
          }
        },
        backgroundColor: 'rgba(17, 18, 19, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(0, 200, 81, 0.1)',
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
          color: '#fff',
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
          color: '#fff',
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
          Traffic <span className="text-primary-400 bg-primary-500/10 px-3 py-1 rounded">Growth</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card hover:shadow-card-hover transition-all duration-300">
              <Line data={chartData} options={options} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card hover:shadow-card-hover transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Growth Overview</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm font-medium text-gray-300">Direct Traffic</span>
                    <span className="text-lg font-bold text-primary-400">800</span>
                  </div>
                  <div className="w-full h-2 bg-dark-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-400 to-primary-500 rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm font-medium text-gray-300">Organic Search</span>
                    <span className="text-lg font-bold text-gray-300">550</span>
                  </div>
                  <div className="w-full h-2 bg-dark-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-dark-300 to-dark-400 rounded-full" style={{ width: '40%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
              <h4 className="font-semibold mb-3 text-primary-400">Key Milestones</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  Flat growth until automation (Oct '24)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  6× increase in direct traffic post-launch
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  10× growth in organic search
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  Consistent upward trend maintained
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};