import React from 'react';
import { siteConfig } from '../data/siteConfig';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  ExternalLink,
  Crown,
  Heart
} from 'lucide-react';
import logoImg from '../assets/images/pera-palacelogo-scaled.png';

export default function Footer({ setActivePage, openBookingModal }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#070709',
        borderTop: '1px solid var(--border-gold)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Column 1: Brand & Story */}
          <div>
            <div
              style={{
                marginBottom: '1.25rem'
              }}
            >
              <img
                src={logoImg}
                alt="Pera Palace Ottoman Cuisine"
                style={{
                  height: '65px',
                  width: 'auto',
                  maxWidth: '240px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))'
                }}
              />
            </div>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.925rem',
                lineHeight: '1.65',
                marginBottom: '1.5rem'
              }}
            >
              Bringing centuries of royal Ottoman palace dining, charcoal embers, and Anatolian
              hospitality to the bayside of Wynnum, Brisbane.
            </p>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}
            >
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '0.6rem',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--gold-primary)',
                  display: 'inline-flex'
                }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '0.6rem',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--gold-primary)',
                  display: 'inline-flex'
                }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={siteConfig.contact.googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-gold)',
                  color: 'var(--gold-light)',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
                title="View Pera Palace on Google Reviews"
              >
                <span>Google 4.8★ (667)</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                color: 'var(--gold-light)',
                fontSize: '1.1rem',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Crown size={16} color="var(--gold-primary)" />
              <span>Explore PERA</span>
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                fontSize: '0.925rem'
              }}
            >
              <li>
                <button
                  onClick={() => handleNav('menu')}
                  style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseOver={(e) => (e.target.style.color = '#F0DC82')}
                  onMouseOut={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  Our Imperial Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('catering')}
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseOver={(e) => (e.target.style.color = '#F0DC82')}
                  onMouseOut={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  Anatolia Catering Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('story')}
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseOver={(e) => (e.target.style.color = '#F0DC82')}
                  onMouseOut={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  Our Palace Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseOver={(e) => (e.target.style.color = '#F0DC82')}
                  onMouseOut={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  Contact & Location
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseOver={(e) => (e.target.style.color = '#F0DC82')}
                  onMouseOut={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  Atmosphere & Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={openBookingModal}
                  style={{ color: 'var(--gold-light)', fontWeight: '600' }}
                >
                  Book a Table Online →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Trading Hours */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                color: 'var(--gold-light)',
                fontSize: '1.1rem',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Clock size={16} color="var(--gold-primary)" />
              <span>Dining Hours</span>
            </h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                fontSize: '0.875rem'
              }}
            >
              {siteConfig.tradingHours.map((h, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: '0.65rem',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  <div
                    style={{
                      fontWeight: '600',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {h.days}
                  </div>
                  <div
                    style={{
                      color: h.status === 'Closed' ? 'var(--text-muted)' : 'var(--gold-primary)',
                      fontWeight: h.status === 'Closed' ? '400' : '600',
                      fontSize: '0.85rem'
                    }}
                  >
                    {h.hours}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                color: 'var(--gold-light)',
                fontSize: '1.1rem',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <MapPin size={16} color="var(--gold-primary)" />
              <span>Wynnum Palace</span>
            </h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.9rem',
                fontSize: '0.9rem'
              }}
            >
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem'
                }}
              >
                <span>{siteConfig.contact.address}</span>
                <ExternalLink size={14} style={{ marginTop: '3px', flexShrink: 0 }} />
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                style={{
                  color: 'var(--gold-light)',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Phone size={15} />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                style={{
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Mail size={15} />
                <span>{siteConfig.contact.email}</span>
              </a>

              <div style={{ marginTop: '0.5rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    background: 'rgba(25, 83, 61, 0.3)',
                    border: '1px solid rgba(42, 123, 92, 0.4)',
                    color: '#86efac',
                    fontWeight: '600'
                  }}
                >
                  ✓ 100% Halal Certified Meats
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.825rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Pera Palace Ottoman (PERA). All Rights Reserved. 2/70 Edith
            St, Wynnum QLD 4178.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Imperial Palace Dining</span>
            <span>•</span>
            <span>Anatolia Catering Brisbane</span>
            <span>•</span>
            <span>Google SEO Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
