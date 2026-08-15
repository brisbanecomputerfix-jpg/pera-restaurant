import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Navigation
} from 'lucide-react';
import { getLiveOperatingStatus } from '../utils/operatingStatus';

export default function ContactSection() {
  const [liveStatus] = useState(() => getLiveOperatingStatus());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in your name, email, and message.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '5.5rem 0', background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <MapPin size={14} />
            <span>Visit Us in Wynnum</span>
          </div>
          <h2 className="section-title">Where to Find Us</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Conveniently situated in the vibrant heart of Wynnum Bayside. Dine in our
            air-conditioned palace hall or enjoy our breezy outdoor patio.
          </p>
        </div>

        {/* 2-Column Contact & Map Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Location Cards & Trading Hours */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Address Card */}
            <div className="gold-card" style={{ padding: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div
                  style={{
                    padding: '0.75rem',
                    borderRadius: '50%',
                    background: 'var(--gold-gradient)',
                    color: '#000'
                  }}
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      color: '#FFF',
                      marginBottom: '0.35rem'
                    }}
                  >
                    Wynnum Bayside Location
                  </h3>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {siteConfig.contact.address}
                  </p>
                  <a
                    href={siteConfig.contact.googleDirectionsUrl || siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.825rem' }}
                  >
                    <Navigation size={14} color="var(--gold-primary)" />
                    <span>Get Google Maps Directions</span>
                  </a>
                </div>
              </div>

              <div
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  paddingTop: '1.25rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '0.2rem'
                    }}
                  >
                    Phone / Booking
                  </div>
                  <a
                    href={`tel:${siteConfig.contact.phoneClean}`}
                    style={{ color: 'var(--gold-light)', fontWeight: '700', fontSize: '0.95rem' }}
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '0.2rem'
                    }}
                  >
                    Email Inquiries
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Trading Hours Schedule */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                  color: 'var(--gold-light)',
                  fontWeight: '700'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={18} color="var(--gold-primary)" />
                  <span>Operating Hours</span>
                </div>
                <div className={`live-status-badge ${liveStatus.isOpen ? 'open' : 'closed'}`}>
                  <span className={`status-dot ${liveStatus.isOpen ? 'open' : 'closed'}`} />
                  <span>{liveStatus.badgeText}</span>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  fontSize: '0.875rem'
                }}
              >
                {siteConfig.tradingHours.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      paddingBottom: '0.65rem'
                    }}
                  >
                    <div>
                      <strong style={{ color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                        {h.days}
                      </strong>
                    </div>
                    <div
                      style={{
                        textAlign: 'right',
                        color: h.status === 'Closed' ? 'var(--text-muted)' : 'var(--gold-light)',
                        fontWeight: h.status === 'Closed' ? '400' : '700',
                        fontSize: '0.88rem'
                      }}
                    >
                      {h.hours}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* OpenTable Partner Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(218, 55, 67, 0.15) 0%, rgba(20, 20, 20, 0.95) 100%)',
                border: '1px solid rgba(218, 55, 67, 0.35)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <div
                    style={{
                      background: '#DA3743',
                      color: '#FFF',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontWeight: '800',
                      fontSize: '0.75rem'
                    }}
                  >
                    OpenTable
                  </div>
                  <span style={{ color: '#FFF', fontWeight: '700', fontSize: '0.95rem' }}>
                    Online Table Booking
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.825rem', margin: 0 }}>
                  Real-time table confirmation for parties of 1 to 20 guests.
                </p>
              </div>

              <a
                href={siteConfig.openTable.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #DA3743 0%, #B82530 100%)',
                  color: '#FFF',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 4px 15px rgba(218, 55, 67, 0.4)'
                }}
              >
                <span>Book on OpenTable</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Google Maps Embed iframe */}
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--border-gold)',
                height: '240px',
                background: '#111'
              }}
            >
              <iframe
                title="Pera Palace Ottoman Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.3308819875417!2d153.1712144!3d-27.4448851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915f31f09e24e1%3A0x777c4044b5212c71!2sPera%20Palace%20Ottoman!5e0!3m2!1sen!2sau!4v1718000000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div
            className="glass-card"
            style={{ padding: '2.5rem', border: '1px solid var(--border-gold)' }}
          >
            <div style={{ marginBottom: '1.75rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  color: '#FFF',
                  marginBottom: '0.4rem'
                }}
              >
                Send Us a Message
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Have a question regarding dietary options, private event hire, or special
                celebrations? Write to us below.
              </p>
            </div>

            {!submitted ? (
              <form
                onSubmit={handleContactSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
              >
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="0400 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Private Dining Inquiry / Dietary Question"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.95rem',
                    fontSize: '1rem',
                    marginTop: '0.5rem'
                  }}
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  padding: '2.5rem 1rem',
                  background: 'rgba(25, 83, 61, 0.2)',
                  border: '1px solid rgba(42, 123, 92, 0.5)',
                  borderRadius: '8px'
                }}
              >
                <CheckCircle2 size={42} color="#4ade80" style={{ margin: '0 auto 0.75rem' }} />
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    color: '#FFF',
                    marginBottom: '0.4rem'
                  }}
                >
                  Message Sent Successfully!
                </h4>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  Thank you, <strong>{formData.name}</strong>. Our management team will reply to{' '}
                  <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
