import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import GoogleReviewsTicker from './components/GoogleReviewsTicker';
import OpenTableSection from './components/OpenTableSection';
import OpenTableBottomExtension from './components/OpenTableBottomExtension';

// Pages
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CateringPage from './pages/CateringPage';
import StoryPage from './pages/StoryPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

import { siteConfig } from './data/siteConfig';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('pera_theme') || 'dark';
  });

  // Sync theme with DOM and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pera_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Sync with URL Hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'menu', 'catering', 'story', 'gallery', 'contact'].includes(hash)) {
        setActivePage(hash);
      } else if (hash === 'booking' || hash === 'reserve' || hash === 'opentable') {
        setIsBookingOpen(true);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when activePage changes
  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'menu':
        return <MenuPage openBookingModal={() => setIsBookingOpen(true)} />;
      case 'catering':
        return <CateringPage />;
      case 'story':
        return <StoryPage openBookingModal={() => setIsBookingOpen(true)} />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return (
          <HomePage
            setActivePage={handlePageChange}
            openBookingModal={() => setIsBookingOpen(true)}
          />
        );
    }
  };

  return (
    <div
      className="app-container"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '85px' // Space for OpenTable persistent bottom extension
      }}
    >
      {/* Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        openBookingModal={() => setIsBookingOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Page View */}
      <div style={{ flex: 1 }}>{renderPage()}</div>

      {/* OpenTable Reservation Section (Full-Width Palace Card) */}
      <OpenTableSection openBookingModal={() => setIsBookingOpen(true)} />

      {/* Real-time Rolling Google Reviews Feed Ticker */}
      <GoogleReviewsTicker />

      {/* Footer */}
      <Footer setActivePage={handlePageChange} openBookingModal={() => setIsBookingOpen(true)} />

      {/* Table Reservation Modal (with OpenTable & Direct tabs) */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Persistent OpenTable Bottom Extension Widget Bar */}
      <OpenTableBottomExtension openBookingModal={() => setIsBookingOpen(true)} />
    </div>
  );
}
