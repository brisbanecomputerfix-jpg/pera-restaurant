import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import {
  Phone,
  Mail,
  Calendar,
  Menu as MenuIcon,
  X,
  Clock,
  MapPin,
  ChevronRight,
  Sparkles,
  Eye,
  ExternalLink,
  Star
} from 'lucide-react';
import logoImg from '../assets/images/pera-palacelogo-scaled.png';
import { getLiveOperatingStatus } from '../utils/operatingStatus';

export default function Navbar({
  activePage,
  setActivePage,
  openBookingModal,
  theme = 'dark',
  toggleTheme
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [liveStatus, setLiveStatus] = useState(() => getLiveOperatingStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    // Update live status every minute
    const interval = setInterval(() => {
      setLiveStatus(getLiveOperatingStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Our Menu' },
    { id: 'catering', label: 'Anatolia Catering' },
    { id: 'story', label: 'Our Story' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`header-fixed ${isScrolled ? 'header-scrolled' : ''}`}>
        {/* =========================================================================
            TOPBAR UTILITY CONTACT BAR (Always Visible for Maximum CTA & Conversions)
            ========================================================================= */}
        <div className="topbar-utility">
          <div
            className="container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.8125rem'
            }}
          >
            {/* Left: Location & Live Open/Closed Status Light & Google 4.8 (667) Rating */}
            <div
              className="topbar-left"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                color: 'var(--text-secondary)'
              }}
            >
              {/* Green / Red Live Operating Status Light */}
              <div
                className={`live-status-badge ${liveStatus.isOpen ? 'open' : 'closed'}`}
                title={liveStatus.displayText}
              >
                <span className={`status-dot ${liveStatus.isOpen ? 'open' : 'closed'}`} />
                <span>{liveStatus.displayText}</span>
              </div>

              {/* Google Reviews 4.8 (667) CTA Badge */}
              <a
                href={siteConfig.contact.googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="topbar-google-cta"
                title="Pera Palace Ottoman - 4.8 Stars (667 Google Reviews)"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(251, 188, 5, 0.45)',
                  color: '#FFF',
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg viewBox="0 0 24 24" width="13" height="13" style={{ flexShrink: 0 }}>
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span style={{ color: '#FBBC05', fontWeight: '700' }}>4.8 ★</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.74rem' }}>(667 reviews)</span>
              </a>

              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'inherit',
                  transition: 'color 0.2s'
                }}
                className="topbar-link"
              >
                <MapPin size={13} color="var(--gold-primary)" />
                <span>2/70 Edith St, Wynnum QLD</span>
              </a>
            </div>

            {/* Right: Phone & Email Direct CTAs */}
            <div
              className="topbar-right"
              style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}
            >
              {/* Direct Phone Call */}
              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="topbar-cta-link phone"
                title="Call Pera Palace Ottoman"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--gold-light)',
                  fontWeight: '700',
                  letterSpacing: '0.02em',
                  textDecoration: 'none'
                }}
              >
                <Phone size={13} color="var(--gold-primary)" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              {/* Direct Email */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="topbar-cta-link email"
                title="Email Pera Palace Ottoman"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-primary)',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                <Mail size={13} color="var(--gold-primary)" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MAIN NAVIGATION BAR
            ========================================================================= */}
        <div className="main-navbar-wrapper">
          <div className="container nav-container">
            {/* Brand Full-Size Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="brand-logo"
              aria-label="Pera Palace Ottoman Cuisine Home"
              style={{
                background: 'transparent',
                border: 'none',
                padding: '0.2rem 0',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <img
                src={logoImg}
                alt="Pera Palace Ottoman Cuisine"
                className="brand-logo-img"
                style={{
                  height: isScrolled ? '48px' : '56px',
                  width: 'auto',
                  maxWidth: '210px',
                  objectFit: 'contain',
                  transition: 'height 0.3s ease, transform 0.3s ease',
                  filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.5))'
                }}
              />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="nav-links" aria-label="Main Navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link-btn ${activePage === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right Action CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {/* Eye Symbol Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="theme-toggle-btn"
                title={
                  theme === 'dark' ? 'Switch to Palace Day Mode' : 'Switch to Palace Dark Mode'
                }
                aria-label={theme === 'dark' ? 'Switch to Day Mode' : 'Switch to Dark Mode'}
              >
                <Eye size={16} color={theme === 'dark' ? '#F0DC82' : '#B8860B'} />
                <span style={{ fontSize: '0.78rem' }}>{theme === 'dark' ? 'Day' : 'Dark'}</span>
              </button>

              {/* Royal Table Booking CTA */}
              <button
                onClick={openBookingModal}
                className="btn-primary nav-book-btn"
                style={{ padding: '0.7rem 1.35rem', fontSize: '0.88rem' }}
              >
                <Calendar size={16} />
                <span>Book a Table</span>
              </button>

              {/* Mobile Phone Quick Action Icon */}
              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="mobile-phone-btn"
                aria-label="Call Pera Palace"
                style={{
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  background: 'var(--gold-gradient)',
                  color: '#000'
                }}
              >
                <Phone size={18} />
              </a>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setMobileDrawerOpen(true)}
                className="mobile-toggle-btn"
                style={{
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.5rem',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-gold)',
                  borderRadius: '6px',
                  background: 'rgba(255,255,255,0.05)'
                }}
                aria-label="Open Navigation Menu"
              >
                <MenuIcon size={22} color="var(--gold-light)" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileDrawerOpen && (
        <div className="drawer-backdrop" onClick={() => setMobileDrawerOpen(false)} />
      )}

      {/* Mobile Navigation Drawer */}
      <aside className={`mobile-drawer ${mobileDrawerOpen ? 'open' : ''}`}>
        {/* Drawer Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.25rem',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '0.85rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logoImg}
              alt="Pera Palace Ottoman"
              style={{
                height: '46px',
                width: 'auto',
                maxWidth: '180px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))'
              }}
            />
          </div>
          <button
            onClick={() => setMobileDrawerOpen(false)}
            style={{
              padding: '0.4rem',
              color: 'var(--text-muted)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Live Operating Status Light (Mobile) */}
        <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div
            className={`live-status-badge ${liveStatus.isOpen ? 'open' : 'closed'}`}
            style={{ width: '100%', justifyContent: 'center', padding: '0.45rem 0.75rem' }}
          >
            <span className={`status-dot ${liveStatus.isOpen ? 'open' : 'closed'}`} />
            <span style={{ fontSize: '0.82rem' }}>{liveStatus.displayText}</span>
          </div>

          <a
            href={siteConfig.contact.googleReviewUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              padding: '0.45rem 0.75rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(251, 188, 5, 0.4)',
              color: '#FFF',
              fontSize: '0.82rem',
              textDecoration: 'none'
            }}
          >
            <svg viewBox="0 0 24 24" width="14" height="14">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span style={{ color: '#FBBC05', fontWeight: '700' }}>Google 4.8 ★</span>
            <span style={{ color: 'var(--text-secondary)' }}>(667 Reviews)</span>
          </a>
        </div>

        {/* Mobile Quick Action Contact Bar in Drawer */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.5rem',
            marginBottom: '1.25rem'
          }}
        >
          <a
            href={`tel:${siteConfig.contact.phoneClean}`}
            className="btn-primary"
            style={{ padding: '0.65rem 0.5rem', fontSize: '0.825rem', justifyContent: 'center' }}
          >
            <Phone size={14} />
            <span>Call Us</span>
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="btn-secondary"
            style={{ padding: '0.65rem 0.5rem', fontSize: '0.825rem', justifyContent: 'center' }}
          >
            <Mail size={14} color="var(--gold-primary)" />
            <span>Email</span>
          </a>
        </div>

        {/* Mobile Eye Theme Switcher */}
        <div style={{ marginBottom: '1.25rem' }}>
          <button
            onClick={toggleTheme}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.7rem 1rem',
              borderRadius: '8px',
              background: 'var(--gold-gradient-subtle)',
              border: '1px solid var(--border-gold)',
              color: 'var(--gold-light)',
              fontWeight: '600',
              fontSize: '0.88rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Eye size={17} color="var(--gold-primary)" />
              <span>Theme: {theme === 'dark' ? 'Night Palace' : 'Day Palace'}</span>
            </div>
            <span
              style={{
                fontSize: '0.72rem',
                padding: '0.2rem 0.5rem',
                background: 'var(--gold-primary)',
                color: '#000',
                borderRadius: '4px',
                fontWeight: '700'
              }}
            >
              Toggle
            </span>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            marginBottom: '1.5rem'
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                background: activePage === item.id ? 'var(--gold-gradient-subtle)' : 'transparent',
                border:
                  activePage === item.id ? '1px solid var(--border-gold)' : '1px solid transparent',
                color: activePage === item.id ? 'var(--gold-light)' : 'var(--text-secondary)',
                fontWeight: activePage === item.id ? '700' : '500',
                textAlign: 'left'
              }}
            >
              <span>{item.label}</span>
              <ChevronRight size={16} opacity={0.6} />
            </button>
          ))}
        </nav>

        {/* Mobile Drawer Footer with Contact Information */}
        <div
          style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          <button
            onClick={() => {
              setMobileDrawerOpen(false);
              openBookingModal();
            }}
            className="btn-primary"
            style={{ width: '100%', padding: '0.85rem' }}
          >
            <Calendar size={18} />
            <span>Reserve a Table</span>
          </button>

          <div
            style={{
              padding: '0.85rem',
              background: 'rgba(0,0,0,0.2)',
              borderRadius: '8px',
              fontSize: '0.825rem',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginBottom: '0.4rem',
                color: 'var(--gold-light)',
                fontWeight: '700'
              }}
            >
              <Phone size={13} color="var(--gold-primary)" />
              <a href={`tel:${siteConfig.contact.phoneClean}`} style={{ color: 'inherit' }}>
                {siteConfig.contact.phone}
              </a>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginBottom: '0.4rem',
                color: 'var(--text-secondary)'
              }}
            >
              <Mail size={13} color="var(--gold-primary)" />
              <a href={`mailto:${siteConfig.contact.email}`} style={{ color: 'inherit' }}>
                {siteConfig.contact.email}
              </a>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginBottom: '0.4rem',
                color: 'var(--text-muted)',
                fontSize: '0.78rem'
              }}
            >
              <Clock size={13} color="var(--gold-primary)" />
              <span>Tue – Sun: from 17:30 PM (Mon Closed)</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-muted)',
                fontSize: '0.78rem'
              }}
            >
              <MapPin size={13} color="var(--gold-primary)" />
              <span>2/70 Edith St, Wynnum QLD 4178</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
