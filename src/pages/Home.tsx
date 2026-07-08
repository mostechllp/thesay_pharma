import React from 'react';

import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { GlobalPresence } from '../components/GlobalPresence';
import { Banner } from '../components/Banner';
import { BusinessSegments } from '../components/BusinessSegments';
import { NewsUpdates } from '../components/NewsUpdates';
import { DrivenByExcellence } from '../components/DrivenByExcellence';
import { OurServices } from '../components/OurServices';
import { UpcomingEvents } from '../components/UpcomingEvents';
import { CEOMessage } from '../components/CEOMessage';
import { OurTeam } from '../components/OurTeam';
import { OurPartners } from '../components/OurPartners';
import { Footer } from '../components/Footer';
export function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#27ae3f] selection:text-white">
      
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <GlobalPresence />
        <Banner />
        <BusinessSegments />
        <NewsUpdates />
        <DrivenByExcellence />
        <OurServices />
        <UpcomingEvents />
        <CEOMessage />
        <OurTeam />
        <OurPartners />
      </main>
      <Footer />
    </div>);

}