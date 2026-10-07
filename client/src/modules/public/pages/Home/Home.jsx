import React from 'react';
import { Hero } from '../../components/Hero/Hero';
import { ToppersShowcase } from '../../components/ToppersShowcase/ToppersShowcase';
import { ExploreExams } from '../../components/ExploreExams/ExploreExams';
import { AppDownloadBanner } from '../../components/AppDownloadBanner/AppDownloadBanner';
import { Testimonials } from '../../components/Testimonials/Testimonials';
import { WhyChoose } from '../../components/WhyChoose/WhyChoose';
import { FreeResources } from '../../components/FreeResources/FreeResources';

export function Home() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Banner with Character & CTA */}
      <Hero />

      {/* 2. Record Breaking Results Every Year (8 Topper Cards) */}
      <ToppersShowcase />

      {/* 3. Explore Upcoming & Popular Exams (Horizontal Scrollable Tiles) */}
      <ExploreExams />

      {/* 4. Download Free App Banner (With 3D Isometric Pattern & Carousel Controls) */}
      <AppDownloadBanner />

      {/* 5. Testimonials (Speech Bubbles with View More / View Less) */}
      <Testimonials />

      {/* 6. Trust & Stats Bar + Why Choose Us (Exact Oliveboard Match) */}
      <WhyChoose />

      {/* 7. Access Free Resources (Mock Tests, PYQs, Syllabus, Notification cards) */}
      <FreeResources />
    </div>
  );
}

export default Home;
