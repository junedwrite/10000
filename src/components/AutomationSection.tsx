import React from 'react';
import { Podcast, LineChart, Presentation, Globe2 } from 'lucide-react';

export const AutomationSection: React.FC = () => {
  const automations = [
    {
      title: "Podcast Promos",
      icon: <Podcast className="w-6 h-6 text-primary-400" />,
      cadence: "3–5 posts / wk → 24 multi-platform posts",
      launch: "Week 1",
      notes: "Key insights → traffic to YouTube pods"
    },
    {
      title: "U.S.-Equities Hourly News",
      icon: <LineChart className="w-6 h-6 text-primary-400" />,
      cadence: "8 clips/day (9:30–16:00 ET), 5 d/wk → 40 posts",
      launch: "Week 1",
      notes: "If traction, scale to 16 clips/day"
    },
    {
      title: "Sales-Deck Snippets",
      icon: <Presentation className="w-6 h-6 text-primary-400" />,
      cadence: "5 posts/wk (3 weekday + 2 weekend)",
      launch: "Week 2",
      notes: "Position Zimtra vs competitors"
    },
    {
      title: "Global-Event Teasers",
      icon: <Globe2 className="w-6 h-6 text-primary-400" />,
      cadence: "5 posts/wk (3 weekday + 2 weekend)",
      launch: "Week 3",
      notes: "Highlight speakers & benefits"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-radial from-dark-100 to-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,81,0.03),transparent_70%)]" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Proposed <span className="text-primary-400 bg-primary-500/10 px-3 py-1 rounded">Automations</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {automations.map((automation, index) => (
            <div
              key={index}
              className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary-500/10">
                  {automation.icon}
                </div>
                <h3 className="text-xl font-bold">{automation.title}</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span>Cadence: {automation.cadence}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span>Launch: {automation.launch}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                  <span>{automation.notes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
            <h3 className="text-xl font-bold mb-4">Volume Uplift</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                <span className="text-gray-300">
                  Adds ≈ <span className="font-bold text-white">500 posts/wk</span> (total ~1,000/wk with existing)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                <span className="text-gray-300">
                  <span className="font-bold text-white">6 regional profile sets</span> planned → full global reach
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-card from-dark-50 to-dark-100 p-6 rounded-lg border border-primary-700/20 shadow-card">
            <h3 className="text-xl font-bold mb-4">Cost Impact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                <span className="text-gray-300">
                  Automation tooling budget doubles: <span className="font-bold text-white">$5K → $10K (6 mo)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2"></span>
                <span className="text-gray-300">
                  Oversight labour unchanged (absorbed by current <span className="font-bold text-white">$51K</span>)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};