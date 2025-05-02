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

export const ReachMetricsSection: React.FC = () => {
  const chartData = {
    labels: ['Impressions', 'Engagements', 'Clicks'],
    datasets: [{
      label: 'Volume',
      data: [1150000, 20000, 10000],
      backgroundColor: '#00ff8e',
      borderColor: '#00cc7d',
      borderWidth: 2
    }]
  };

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: '#ffffff',
          font: {
            weight: 'bold'
          }
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
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(0, 255, 156, 0.1)',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        titleFont: {
          size: 14,
          weight: '700'
        },
        bodyFont: {
          size: 14,
          weight: '700'
        }
      }
    },
    scales: {
      x: {
        max: 1200000,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)'
        },
        ticks: {
          color: '#ffffff',
          callback: (value: number) => value.toLocaleString(),
          font: {
            weight: '600'
          }
        }
      },
      y: {
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
    },
    barThickness: 26
  };

  const metrics = [
    { label: 'Impressions', value: '1.15 M', cost: '$7,500 (at $6.52 CPM)' },
    { label: 'Engagements', value: '20 K', cost: '—' },
    { label: 'Clicks', value: '10 K', cost: '—' }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-radial from-dark-100 to-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,81,0.03),transparent_70%)]" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Reach <span className="text-primary-400 bg-primary-500/10 px-3 py-1 rounded">Generated</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
              <h3 className="text-xl font-bold mb-6">Campaign Funnel</h3>
              <div className="space-y-4">
                {metrics.map((metric) => (
                  <div 
                    key={metric.label}
                    className="p-4 bg-dark-50/50 rounded-lg border border-primary-700/10 backdrop-blur-sm"
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-semibold text-gray-300">{metric.label}</span>
                      <span className="text-lg font-bold text-white">{metric.value}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Cost-equivalent: {metric.cost}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
              <h3 className="text-xl font-bold mb-4">Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                    <span className="text-gray-300">CTR</span>
                    <span className="font-bold text-white">0.88%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                    <span className="text-gray-300">ER</span>
                    <span className="font-bold text-white">1.8%</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  <span className="text-gray-300">Each click produced ≈</span>
                  <span className="font-bold text-white">114</span>
                  <span className="text-gray-300">impressions &</span>
                  <span className="font-bold text-white">2</span>
                  <span className="text-gray-300">engagements</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  <span className="text-gray-300">Earned-media value (impressions alone) ≈</span>
                  <span className="font-bold text-white">$7.5K</span>
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