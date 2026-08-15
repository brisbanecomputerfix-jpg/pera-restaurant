import React, { useState } from 'react';
import { Trophy, Award, Sparkles, X, Maximize2, Star } from 'lucide-react';

// Exact 3 Award Photos from perapalace.com.au
import award1 from '../assets/images/1.png';
import award2 from '../assets/images/2.png';
import award3 from '../assets/images/3.png';

export default function TrophyCabinet() {
  const [lightboxImg, setLightboxImg] = useState(null);

  const officialAwards = [
    {
      id: 1,
      year: '2025',
      badge: 'National Winner',
      title: 'National Award for Specialty Restaurant',
      org: 'Awards for Excellence 2025',
      image: award1,
      alt: 'Excellence Award 2025 National Winner'
    },
    {
      id: 2,
      year: '2025',
      badge: 'State Finalist',
      title: 'Specialty Dining Excellence Queensland',
      org: 'Restaurant & Catering Hostplus Awards',
      image: award2,
      alt: 'Excellence Award 2025 State Winner'
    },
    {
      id: 3,
      year: '2024',
      badge: 'Excellence Honor',
      title: 'Authentic Hospitality & Dining Award',
      org: 'Awards for Excellence 2024',
      image: award3,
      alt: 'Excellence Award 2024'
    }
  ];

  return (
    <section
      id="trophy-cabinet"
      style={{
        padding: '4.5rem 0',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-gold)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <div className="section-tag">
            <Trophy size={14} />
            <span>Trophy Cabinet</span>
          </div>

          <h2 className="section-title">A Tradition of Excellence</h2>

          <p className="section-desc" style={{ margin: '0 auto 1.5rem' }}>
            We are honored to receive the <strong>National Award for Specialty Restaurant</strong>{' '}
            at the Awards for Excellence 2025. Huge thank you to our incredible team and loyal
            guests.
          </p>

          {/* Highlight Banner */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.6rem 1.5rem',
              borderRadius: 'var(--radius-full)',
              background:
                'linear-gradient(135deg, rgba(120, 29, 38, 0.4) 0%, rgba(212, 175, 55, 0.15) 100%)',
              border: '1px solid var(--border-gold)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
            }}
          >
            <Sparkles size={16} color="var(--gold-primary)" />
            <span style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--gold-light)' }}>
              Proudly celebrating{' '}
              <span style={{ textDecoration: 'underline', color: '#FFF' }}>
                THREE awards in two years
              </span>
            </span>
          </div>
        </div>

        {/* 3 Awards Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          {officialAwards.map((award) => (
            <div
              key={award.id}
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--border-gold)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-md)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              {/* Year & Badge Header Bar */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem 1.25rem',
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Award size={16} color="var(--gold-primary)" />
                  <span
                    style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--gold-light)' }}
                  >
                    {award.year}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    background: 'var(--gold-gradient-subtle)',
                    border: '1px solid var(--border-gold)',
                    color: 'var(--gold-light)'
                  }}
                >
                  {award.badge}
                </span>
              </div>

              {/* Award Photo Container (Click to enlarge) */}
              <div
                onClick={() => setLightboxImg(award.image)}
                style={{
                  position: 'relative',
                  height: '320px',
                  background: '#0a0a0d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  padding: '1rem'
                }}
                className="award-photo-wrapper"
              >
                <img
                  src={award.image}
                  alt={award.alt}
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.4s ease',
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.6))'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Enlarge Hint Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    right: '0.75rem',
                    background: 'rgba(0,0,0,0.75)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.35rem 0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.75rem',
                    color: 'var(--gold-light)',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  <Maximize2 size={12} />
                  <span>Enlarge</span>
                </div>
              </div>

              {/* Award Details Description */}
              <div
                style={{
                  padding: '1.25rem 1.25rem 1.5rem',
                  textAlign: 'center',
                  marginTop: 'auto'
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.1rem',
                    color: 'var(--text-primary)',
                    fontWeight: '700',
                    marginBottom: '0.35rem'
                  }}
                >
                  {award.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{award.org}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal for Full-Size Award Inspection */}
        {lightboxImg && (
          <div
            onClick={() => setLightboxImg(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(0, 0, 0, 0.92)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid var(--border-gold)',
                color: '#FFF',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Close award modal"
            >
              <X size={24} />
            </button>

            <img
              src={lightboxImg}
              alt="Official Award Certificate"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '8px',
                border: '2px solid var(--gold-primary)',
                boxShadow: '0 0 40px rgba(212,175,55,0.4)'
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
