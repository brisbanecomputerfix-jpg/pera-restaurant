import React from 'react';
import HeroSection from '../components/HeroSection';
import TrophyCabinet from '../components/TrophyCabinet';
import MenuExplorer from '../components/MenuExplorer';
import StorySection from '../components/StorySection';
import CateringBuilder from '../components/CateringBuilder';
import ReviewsSection from '../components/ReviewsSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ setActivePage, openBookingModal }) {
  return (
    <main>
      <HeroSection setActivePage={setActivePage} openBookingModal={openBookingModal} />
      <TrophyCabinet />
      <StorySection openBookingModal={openBookingModal} />
      <MenuExplorer openBookingModal={openBookingModal} />
      <CateringBuilder />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
}
