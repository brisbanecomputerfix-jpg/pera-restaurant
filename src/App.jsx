import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import GoogleReviewsTicker from './components/GoogleReviewsTicker';

// Pages
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CateringPage from './pages/CateringPage';
import StoryPage from './pages/StoryPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

import { Calendar, Phone, Sparkles } from 'lucide-react';
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
      } else if (hash === 'booking' || hash === 'reserve') {
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
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
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

      {/* Real-time Rolling Google Reviews Feed Ticker */}
      <GoogleReviewsTicker />

      {/* Footer */}
      <Footer setActivePage={handlePageChange} openBookingModal={() => setIsBookingOpen(true)} />

      {/* Table Reservation Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Floating Bottom Quick Action Bar (Mobile & Tablet) */}
      <div
        style={{
          position: 'fixed',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 900,
          background: 'rgba(18, 18, 24, 0.95)',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-full)',
          padding: '0.4rem 0.6rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          boxShadow: '0 8px 30px rgba(0,0,0,0.8), 0 0 20px rgba(212,175,55,0.2)',
          backdropFilter: 'blur(12px)'
        }}
      >
        <button
          onClick={() => setIsBookingOpen(true)}
          className="btn-primary"
          style={{
            padding: '0.6rem 1.25rem',
            fontSize: '0.85rem',
            borderRadius: 'var(--radius-full)'
          }}
        >
          <Calendar size={15} />
          <span>Book Table</span>
        </button>

        <button
          onClick={() => handlePageChange('catering')}
          className="btn-crimson"
          style={{
            padding: '0.6rem 1.15rem',
            fontSize: '0.85rem',
            borderRadius: 'var(--radius-full)'
          }}
        >
          <Sparkles size={15} />
          <span>Catering</span>
        </button>

        <a
          href={`tel:${siteConfig.contact.phoneClean}`}
          style={{
            padding: '0.6rem',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid var(--border-gold)',
            color: 'var(--gold-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label="Call Pera Palace"
        >
          <Phone size={16} />
        </a>
      </div>
    </div>
  );
}
