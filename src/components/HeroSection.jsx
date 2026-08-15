import React from 'react';
import { siteConfig } from '../data/siteConfig';
import {
  Calendar,
  UtensilsCrossed,
  Sparkles,
  ChevronRight,
  Flame,
  Star,
  MapPin,
  Clock
} from 'lucide-react';
import heroBg from '../assets/images/pera-landing.png';
import lambHero from '../assets/images/pera-landing-1.png';

export default function HeroSection({ setActivePage, openBookingModal }) {
  return (
    <section
      className="hero-wrapper"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: 'center 35%'
      }}
    >
      <div className="hero-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Text Column */}
          <div>
            <div className="hero-badge">
              <Sparkles size={15} color="#F0DC82" />
              <span>PERA PALACE OTTOMAN • WYNNUM</span>
            </div>

            <h1 className="hero-title">
              Imperial Palace Cuisine in <span className="text-gold-gradient">Wynnum</span>
            </h1>

            <p className="hero-subtitle">
              Pera Palace Ottoman brings centuries of authentic royal Ottoman palace recipes,
              copperware slow-braising, and ironbark charcoal grills to the heart of Brisbane's
              bayside.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <button
                onClick={openBookingModal}
                className="btn-primary"
                style={{ padding: '1rem 2rem', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
              >
                <Calendar size={18} />
                <span>Reserve a Table</span>
                <span
                  style={{
                    background: '#DA3743',
                    color: '#FFF',
                    fontSize: '0.7rem',
                    fontWeight: '800',
                    padding: '2px 7px',
                    borderRadius: '4px',
                    marginLeft: '4px',
                    letterSpacing: '0.02em'
                  }}
                >
                  OpenTable
                </span>
              </button>

              <button
                onClick={() => {
                  setActivePage('menu');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-secondary"
                style={{ padding: '1rem 1.85rem' }}
              >
                <UtensilsCrossed size={18} color="var(--gold-primary)" />
                <span>View Imperial Menu</span>
              </button>

              <button
                onClick={() => {
                  setActivePage('catering');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-crimson"
                style={{ padding: '1rem 1.85rem' }}
              >
                <Sparkles size={18} />
                <span>Anatolia Catering (10-500)</span>
              </button>
            </div>

            {/* Live Location / Status Snippet */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.5rem',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--gold-light)'
                }}
              >
                <MapPin size={15} color="var(--gold-primary)" />
                <span>2/70 Edith St, Wynnum QLD</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={15} color="var(--gold-primary)" />
                <span>Tue–Thu & Sun: 17:30–21:00 | Fri–Sat: 17:30–22:00 (Mon Closed)</span>
              </div>
            </div>
          </div>

          {/* Right Showcase Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="gold-card"
              style={{
                maxWidth: '420px',
                width: '100%',
                border: '1px solid var(--border-gold-bright)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  marginBottom: '1.25rem'
                }}
              >
                <img
                  src={lambHero}
                  alt="Ottoman Bundle Kuzu Tandir"
                  style={{ width: '100%', height: '230px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(10,10,13,0.85)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '20px',
                    border: '1px solid var(--gold-primary)',
                    color: 'var(--gold-light)',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <Flame size={13} color="#f97316" />
                  <span>13th Century Recipe</span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.6rem'
                }}
              >
                <div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.35rem',
                      color: '#FFF',
                      fontWeight: '700'
                    }}
                  >
                    Ottoman Bundle
                  </h2>
                  <span style={{ fontSize: '0.8rem', color: 'var(--gold-primary)' }}>
                    12-Hour Slow Kuzu Tandır
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.45rem',
                    fontWeight: '800',
                    color: 'var(--gold-light)'
                  }}
                >
                  $44
                </div>
              </div>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                  marginBottom: '1.25rem'
                }}
              >
                Fork-tender Australian lamb shoulder braised in rich aromatics, encased in crisp
                golden pastry over saffron almond rice pilaf.
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(212,175,55,0.2)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    color: '#F0DC82',
                    fontSize: '0.85rem',
                    fontWeight: '700'
                  }}
                >
                  <Star size={15} fill="#FBBC05" color="#FBBC05" />
                  <span style={{ color: '#FFF' }}>4.8 / 5.0</span>
                  <span style={{ color: 'var(--text-muted)', fontWeight: '400' }}>
                    (667 Reviews)
                  </span>
                </div>

                <button
                  onClick={() => {
                    setActivePage('menu');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    color: 'var(--gold-light)',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}
                >
                  <span>Explore Menu</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlights Row */}
        <div className="hero-stats-grid">
          {siteConfig.badges.map((b, idx) => (
            <div key={idx} className="hero-stat-item">
              <div className="hero-stat-val">{b.title}</div>
              <div className="hero-stat-label">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
