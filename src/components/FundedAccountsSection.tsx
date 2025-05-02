import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const FundedAccountsSection: React.FC = () => {
  const chartData = {
    labels: ['Funded Accounts', 'Other Visits'],
    datasets: [{
      data: [430, 9570],
      backgroundColor: ['#00ff8e', '#1b1d24'],
      borderColor: ['#00cc7d', '#22262c'],
      borderWidth: 2,
      hoverOffset: 4
    }]
  };

  const options = {
    responsive: true,
    cutout: '60%',
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#ffffff',
          padding: 20,
          font: {
            size: 14,
            weight: 'bold'
          },
          generateLabels: (chart: any) => {
            const datasets = chart.data.datasets[0];
            return chart.data.labels.map((label: string, i: number) => ({
              text: `${label}: ${datasets.data[i].toLocaleString()}`,
              fillStyle: datasets.backgroundColor[i],
              strokeStyle: datasets.borderColor[i],
              lineWidth: 2,
              hidden: false,
              index: i
            }));
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || '';
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
      },
      datalabels: {
        color: '#ffffff',
        font: {
          size: 16,
          weight: '700'
        }
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-radial from-dark-100 to-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,81,0.03),transparent_70%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-card from-dark-50 to-dark-100 p-8 rounded-lg border border-primary-700/20 shadow-card hover:shadow-card-hover transition-all duration-300">
            <Doughnut data={chartData} options={options} />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Projected Funded <span className="text-primary-400 bg-primary-500/10 px-3 py-1 rounded">Accounts</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
                <h3 className="text-xl font-bold mb-4">Conversion logic</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                    <span className="text-gray-300">
                      10,000 social visits × <span className="font-bold text-white">4.3%</span> site conversion → 
                      <span className="font-bold text-white"> 430</span> funded traders
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                    <span className="text-gray-300">
                      Minimum deposit <span className="font-bold text-white">$1,000</span> → $430,000 capital onboarded
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                    <span className="text-gray-300">
                      Avg LTV per trader <span className="font-bold text-white">$1.6K</span> → 
                      <span className="font-bold text-white"> $688K</span> lifetime revenue
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
                <p className="text-sm italic text-gray-300">
                  Projection based on Zimtra funnel averages & fin-tech LP benchmarks (4–5%).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};