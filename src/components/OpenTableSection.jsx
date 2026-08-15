import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import {
  Calendar,
  Clock,
  Users,
  Utensils,
  ExternalLink,
  ShieldCheck,
  Crown,
  Sparkles,
  Star,
  CheckCircle2
} from 'lucide-react';

export default function OpenTableSection({ openBookingModal }) {
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('18:30');

  const timeSlots = [
    { label: '5:30 PM (17:30)', value: '17:30' },
    { label: '6:00 PM (18:00)', value: '18:00' },
    { label: '6:30 PM (18:30)', value: '18:30' },
    { label: '7:00 PM (19:00)', value: '19:00' },
    { label: '7:30 PM (19:30)', value: '19:30' },
    { label: '8:00 PM (20:00)', value: '20:00' },
    { label: '8:30 PM (20:30)', value: '20:30' },
    { label: '9:00 PM (21:00)', value: '21:00' }
  ];

  const handleOpenTableSubmit = (e) => {
    e.preventDefault();
    const covers = guests.replace('+', '');
    const targetUrl = `https://www.opentable.com.au/r/pera-palace-ottoman-wynnum?covers=${covers}&dateTime=${date}T${timeSlot}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="opentable-reservation"
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(180deg, var(--bg-surface) 0%, #0d0d12 100%)',
        borderTop: '1px solid rgba(218, 55, 67, 0.25)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          className="gold-card"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '3rem 2.5rem',
            background: 'linear-gradient(135deg, rgba(218, 55, 67, 0.12) 0%, rgba(18, 18, 24, 0.98) 50%, rgba(212, 175, 55, 0.08) 100%)',
            border: '1px solid rgba(218, 55, 67, 0.35)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(218, 55, 67, 0.15)',
            borderRadius: '20px'
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(218, 55, 67, 0.2)',
                border: '1px solid rgba(218, 55, 67, 0.4)',
                borderRadius: '30px',
                padding: '0.4rem 1rem',
                marginBottom: '1rem'
              }}
            >
              <div
                style={{
                  background: '#DA3743',
                  color: '#FFF',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontWeight: '900',
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em'
                }}
              >
                OpenTable
              </div>
              <span style={{ color: '#FFF', fontSize: '0.85rem', fontWeight: '700' }}>
                Official Reservation Partner
              </span>
              <ShieldCheck size={15} color="#4ade80" />
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.25rem',
                color: '#FFF',
                marginBottom: '0.6rem'
              }}
            >
              Reserve Your Royal Ottoman Table
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                maxWidth: '650px',
                margin: '0 auto'
              }}
            >
              Book in seconds with live real-time availability on OpenTable. Perfect for romantic dinners, family feasts, and group banquets in Wynnum.
            </p>
          </div>

          {/* Booking Form Widget */}
          <form onSubmit={handleOpenTableSubmit}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
                marginBottom: '2rem'
              }}
            >
              {/* Guests */}
              <div className="form-group" style={{ margin: 0 }}>
                <label
                  className="form-label"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Users size={15} color="#DA3743" />
                  <span>Number of Guests</span>
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="form-select"
                  style={{
                    borderColor: 'rgba(218, 55, 67, 0.4)',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem'
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map((n) => (
                    <option key={n} value={n.toString()}>
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                  <option value="20+">20+ Guests (Large Banquet)</option>
                </select>
              </div>

              {/* Date */}
              <div className="form-group" style={{ margin: 0 }}>
                <label
                  className="form-label"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Calendar size={15} color="#DA3743" />
                  <span>Dining Date</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-input"
                  style={{
                    borderColor: 'rgba(218, 55, 67, 0.4)',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              {/* Time */}
              <div className="form-group" style={{ margin: 0 }}>
                <label
                  className="form-label"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Clock size={15} color="#DA3743" />
                  <span>Dinner Time</span>
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="form-select"
                  style={{
                    borderColor: 'rgba(218, 55, 67, 0.4)',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem'
                  }}
                >
                  {timeSlots.map((slot) => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'
              }}
            >
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #DA3743 0%, #B82530 100%)',
                  color: '#FFF',
                  padding: '1rem 2.5rem',
                  fontSize: '1.05rem',
                  fontWeight: '800',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: '0 8px 30px rgba(218, 55, 67, 0.5)',
                  transition: 'transform 0.2s ease'
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Utensils size={18} />
                <span>Find Table on OpenTable</span>
                <ExternalLink size={16} />
              </button>

              <button
                type="button"
                onClick={openBookingModal}
                className="btn-secondary"
                style={{ padding: '0.95rem 1.75rem', fontSize: '0.95rem' }}
              >
                <Crown size={16} color="var(--gold-primary)" />
                <span>Palace In-House Booking</span>
              </button>
            </div>

            {/* Trust Features */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '0.825rem',
                color: 'var(--text-muted)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={15} color="#4ade80" />
                <span>Instant Confirmation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={15} color="#4ade80" />
                <span>100% Halal Certified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={15} color="#4ade80" />
                <span>Indoor & Alfresco Garden Seating</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Star size={15} color="var(--gold-primary)" fill="var(--gold-primary)" />
                <span>4.8★ (667 Reviews)</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
