'use client';

import HeroSection from './components/brdc/HeroSection';
import OverviewSection from './components/brdc/OverviewSection';
import VisionSection from './components/brdc/VisionSection';
import MissionSection from './components/brdc/MissionSection';
import PoliciesAccordion from './components/brdc/PoliciesAccordion';
import WhyBrdcSection from './components/brdc/WhyBrdcSection';
import ResearchDomains from './components/brdc/ResearchDomains';
import AchievementsCarousel from './components/brdc/AchievementsCarousel';
import StatsSection from './components/brdc/StatsSection';
import QuickNavGrid from './components/brdc/QuickNavGrid';
import CallToAction from './components/brdc/CallToAction';
import BrdcFooter from './components/brdc/BrdcFooter';

export default function BrdcCellPage() {
  return (
    <main className="min-h-screen bg-[#05060a] pt-20 text-white">
      <div className="mx-auto max-w-7xl space-y-16 px-4 pb-16 sm:px-6 lg:px-8">
        <HeroSection />
        <OverviewSection />
        <VisionSection />
        <MissionSection />
        <PoliciesAccordion />
        <WhyBrdcSection />
        <ResearchDomains />
        <AchievementsCarousel />
        <StatsSection />
        <QuickNavGrid />
        <CallToAction />
        <BrdcFooter />
      </div>
    </main>
  );
}
