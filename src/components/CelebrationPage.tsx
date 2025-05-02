import React from 'react';
import { HeroSection } from './HeroSection';
import { TimelineSection } from './TimelineSection';
import { MetricsSection } from './MetricsSection';
import { CostSavingsSection } from './CostSavingsSection';
import { ReachMetricsSection } from './ReachMetricsSection';
import { PlatformMetricsSection } from './PlatformMetricsSection';
import { FundedAccountsSection } from './FundedAccountsSection';
import { TrafficTrendSection } from './TrafficTrendSection';
import { OrganicSearchLiftSection } from './OrganicSearchLiftSection';
import { GrowthProjectionSection } from './GrowthProjectionSection';
import { AssumptionsSection } from './AssumptionsSection';
import { ValueMetricsSection } from './ValueMetricsSection';
import { AutomationSection } from './AutomationSection';
import { ProjectedImpactSection } from './ProjectedImpactSection';
import { ProjectedSessionsSection } from './ProjectedSessionsSection';

export const CelebrationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-radial from-dark-100 to-dark text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,200,81,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,200,81,0.05),transparent_50%)]" />
        <div className="relative">
          <HeroSection />
          <TimelineSection />
          <MetricsSection />
          <CostSavingsSection />
          <ReachMetricsSection />
          <PlatformMetricsSection />
          <FundedAccountsSection />
          <TrafficTrendSection />
          <OrganicSearchLiftSection />
          <GrowthProjectionSection />
          <AssumptionsSection />
          <ValueMetricsSection />
          <AutomationSection />
          <ProjectedImpactSection />
          <ProjectedSessionsSection />
        </div>
      </div>
    </div>
  );
};