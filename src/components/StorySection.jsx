import React from 'react';
import { siteConfig } from '../data/siteConfig';
import {
  Crown,
  MapPin,
  Phone,
  Mail,
  Navigation,
  Sparkles,
  Quote,
  Star,
  Clock,
  Calendar
} from 'lucide-react';

// Exact images from https://perapalace.com.au/our-story/
import imgLanding1 from '../assets/images/pera-landing-1.png';
import imgLanding from '../assets/images/pera-landing.png';
import imgLanding2 from '../assets/images/pera-landing-2.png';
import imgLanding3 from '../assets/images/pera-landing-3.png';
import bgVisit from '../assets/images/IMG_1510-scaled.jpg';
import imgAmbianceHorizontal from '../assets/images/ambiance-horizontal.jpg';
import author1 from '../assets/images/quote-author-1-150x150.png';
import author2 from '../assets/images/author-150x150.png';
import author3 from '../assets/images/quote-author-3-150x150.jpg';

export default function StorySection({ openBookingModal }) {
  return (
    <section
      id="story"
      style={{ padding: '5.5rem 0 3.5rem', background: 'var(--bg-primary)', position: 'relative' }}
    >
      <div className="container">
        {/* =========================================================================
            SECTION 1: THE STORY BEHIND - THE SECRET OF OUR SUCCESS
            ========================================================================= */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Crown size={14} />
            <span>The Story Behind</span>
          </div>

          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
            The Secret of Our Success
          </h2>

          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                fontStyle: 'italic',
                color: 'var(--gold-light)',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}
            >
              “A distinctive, well-preserved and comfortable space, high-quality products, authentic
              cuisine, food and drinks are done flawlessly.”
            </p>
          </div>
        </div>

        {/* 4-Photo Quad Collage (Exact dimensions & layout from original site) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginBottom: '5rem'
          }}
        >
          {[
            { img: imgLanding1, title: 'Authentic Imperial Cuisine', alt: 'Imperial Ottoman Dish' },
            { img: imgLanding, title: 'Palace Interior Atmosphere', alt: 'Pera Palace Interior' },
            { img: imgLanding2, title: 'Anatolia Catering & Banquets', alt: 'Anatolia Catering' },
            { img: imgLanding3, title: 'Alfresco Bayside Patio', alt: 'Outdoor Patio Seating' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--border-gold)',
                padding: '0.4rem',
                position: 'relative'
              }}
            >
              <div style={{ borderRadius: '8px', overflow: 'hidden', height: '260px' }}>
                <img
                  src={item.img}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseOver={(e) => (e.target.style.transform = 'scale(1.06)')}
                  onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ padding: '0.75rem 0.5rem 0.35rem', textAlign: 'center' }}>
                <span
                  style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}
                >
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            ATMOSPHERE SHOWCASE BANNER
            ========================================================================= */}
        <div
          className="glass-card"
          style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border-gold)',
            marginBottom: '5rem',
            padding: '0.6rem',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              maxHeight: '420px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#0a0808'
            }}
          >
            <img
              src={imgAmbianceHorizontal}
              alt="Pera Palace Ottoman Atmosphere & Heritage Decor"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(10, 8, 8, 0.92) 0%, rgba(10, 8, 8, 0.4) 60%, transparent 100%)',
                padding: '2rem 1.5rem 1rem',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--gold-primary)',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem'
                }}
              >
                <Sparkles size={14} />
                <span>Ottoman Palace Atmosphere</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: '720px', margin: '0 auto' }}>
                Hand-carved furnishings, glowing mosaic glass chandeliers, antique copperware, and intimate candlelit dining in Wynnum.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 2: A ROYAL DINING EXPERIENCE - IMPERIAL GRANDEUR, AT YOUR TABLE
            ========================================================================= */}
        <div
          className="gold-card"
          style={{
            padding: '3.5rem 2.5rem',
            marginBottom: '5rem',
            border: '1px solid var(--border-gold-bright)',
            textAlign: 'center'
          }}
        >
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--gold-primary)',
                fontSize: '0.875rem',
                fontWeight: '700',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}
            >
              <Sparkles size={16} />
              <span>A Royal Dining Experience</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.8vw, 2.85rem)',
                color: 'var(--text-primary)',
                lineHeight: '1.2',
                marginBottom: '1.75rem'
              }}
            >
              Imperial Grandeur, At Your Table
            </h3>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                marginBottom: '2.5rem'
              }}
            >
              At Pera Palace Ottoman, you don't just dine; you become part of a legacy. From the
              mystical scents of the Middle East to the bounty of Anatolia, and the freshness of the
              Mediterranean to the character of the Balkans, this gastronomic journey is served with
              palace elegance. You are invited to history's most magnificent table in Wynnum; where
              every guest is royalty, and every bite is heritage.
            </p>

            <button
              onClick={openBookingModal}
              className="btn-primary"
              style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}
            >
              <Calendar size={18} />
              <span>Reserve Your Royal Table</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            SECTION 3: RIGHT HERE WAITING - VISIT OUR RESTAURANT
            ========================================================================= */}
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: '5rem',
            border: '1px solid var(--border-gold)',
            backgroundImage: `url(${bgVisit})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '380px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {/* Dark luxury overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, rgba(10, 10, 13, 0.92) 0%, rgba(10, 10, 13, 0.78) 50%, rgba(10, 10, 13, 0.95) 100%)'
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              padding: '3rem 2.5rem',
              width: '100%',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--gold-light)',
                fontSize: '0.85rem',
                fontWeight: '700',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem'
              }}
            >
              <MapPin size={16} color="var(--gold-primary)" />
              <span>Right Here Waiting</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: '#FFF',
                marginBottom: '1.5rem'
              }}
            >
              VISIT OUR RESTAURANT
            </h3>

            {/* Address & Contact Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.5rem',
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                marginBottom: '2rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FFF' }}>
                <MapPin size={16} color="var(--gold-primary)" />
                <span>2/70 Edith St, Wynnum QLD 4178, Australia</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Phone size={16} color="var(--gold-primary)" />
                <a
                  href={`tel:${siteConfig.contact.phoneClean}`}
                  style={{ color: 'var(--gold-light)', fontWeight: '700' }}
                >
                  +61 421 777 741
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Mail size={16} color="var(--gold-primary)" />
                <a
                  href="mailto:booking@perapalace.com.au"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  booking@perapalace.com.au
                </a>
              </div>
            </div>

            <a
              href={siteConfig.contact.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '0.85rem 1.85rem', fontSize: '0.95rem' }}
            >
              <Navigation size={16} color="var(--gold-primary)" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* =========================================================================
            SECTION 4: TESTIMONIALS - WHAT PEOPLE ARE SAYING
            ========================================================================= */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag">
              <Quote size={14} />
              <span>Testimonials</span>
            </div>
            <h3 className="section-title">What People Are Saying</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {/* Review 1 */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F0DC82" color="#F0DC82" />
                  ))}
                </div>
                <p
                  style={{
                    fontStyle: 'italic',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}
                >
                  “Food is the foundation of true happiness. We see our customers as invited guests
                  to a party, and we are the hosts. It's our job every day to make every important
                  aspect of the customer experience a little bit better.”
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  paddingTop: '1rem'
                }}
              >
                <img
                  src={author1}
                  alt="Alice Wayne"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '1px solid var(--border-gold)'
                  }}
                />
                <div>
                  <div style={{ fontWeight: '700', color: '#FFF', fontSize: '0.95rem' }}>
                    Alice Wayne
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Guest Testimonial
                  </div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F0DC82" color="#F0DC82" />
                  ))}
                </div>
                <p
                  style={{
                    fontStyle: 'italic',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}
                >
                  “At Pera Palace Ottoman, you become part of a culinary legacy. The authentic
                  slow-braised meats, wood-fired bread, and Turkish hospitality are unlike anything
                  else in Brisbane.”
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  paddingTop: '1rem'
                }}
              >
                <img
                  src={author2}
                  alt="Verified Guest"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '1px solid var(--border-gold)'
                  }}
                />
                <div>
                  <div style={{ fontWeight: '700', color: '#FFF', fontSize: '0.95rem' }}>
                    Verified Dine-in Guest
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Wynnum Local
                  </div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F0DC82" color="#F0DC82" />
                  ))}
                </div>
                <p
                  style={{
                    fontStyle: 'italic',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}
                >
                  “Modern-Ottoman Fusion. Experience the authentic flavors of 19th-century Istanbul
                  in Wynnum.”
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  paddingTop: '1rem'
                }}
              >
                <img
                  src={author3}
                  alt="Bayside Guide"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '1px solid var(--border-gold)'
                  }}
                />
                <div>
                  <div style={{ fontWeight: '700', color: '#FFF', fontSize: '0.95rem' }}>
                    Bayside Dining Guide
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Culinary Review
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 5: BRAND FOOTER HERO CARD
            ========================================================================= */}
        <div
          style={{
            textAlign: 'center',
            padding: '2.5rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <h4
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.45rem',
              color: 'var(--gold-light)',
              marginBottom: '0.4rem',
              fontWeight: '800'
            }}
          >
            PERA PALACE OTTOMAN
          </h4>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
            Modern-Ottoman Fusion. Experience the authentic flavors of 19th-century Istanbul in
            Wynnum.
          </p>
        </div>
      </div>
    </section>
  );
}
