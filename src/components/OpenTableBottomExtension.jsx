import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import {
  Calendar,
  Clock,
  Users,
  ExternalLink,
  Crown,
  ChevronUp,
  ChevronDown,
  X,
  ShieldCheck,
  Utensils,
  Phone
} from 'lucide-react';

export default function OpenTableBottomExtension({ openBookingModal }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('18:30');

  const timeSlots = [
    { label: '5:30 PM', value: '17:30' },
    { label: '6:00 PM', value: '18:00' },
    { label: '6:30 PM', value: '18:30' },
    { label: '7:00 PM', value: '19:00' },
    { label: '7:30 PM', value: '19:30' },
    { label: '8:00 PM', value: '20:00' },
    { label: '8:30 PM', value: '20:30' },
    { label: '9:00 PM', value: '21:00' }
  ];

  const handleOpenTableSubmit = (e) => {
    e.preventDefault();
    const covers = guests.replace('+', '');
    const targetUrl = `https://www.opentable.com.au/r/pera-palace-ottoman-wynnum?covers=${covers}&dateTime=${date}T${timeSlot}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating Bottom OpenTable Extension Bar */}
      <div
        className="opentable-bottom-extension"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: 'rgba(14, 14, 18, 0.95)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(218, 55, 67, 0.4)',
          boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.7), 0 -2px 15px rgba(218, 55, 67, 0.2)',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isExpanded ? 'translateY(0)' : 'translateY(calc(100% - 46px))'
        }}
      >
        {/* Toggle / Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.45rem 1.25rem',
            background: 'linear-gradient(90deg, rgba(218, 55, 67, 0.25) 0%, rgba(20, 20, 26, 0.95) 50%, rgba(212, 175, 55, 0.15) 100%)',
            borderBottom: isExpanded ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
            cursor: 'pointer'
          }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                background: '#DA3743',
                color: '#FFF',
                padding: '2px 8px',
                borderRadius: '4px',
                fontWeight: '900',
                fontSize: '0.75rem',
                letterSpacing: '0.04em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                boxShadow: '0 2px 8px rgba(218, 55, 67, 0.4)'
              }}
            >
              <span>OpenTable</span>
            </div>
            <span style={{ color: '#FFF', fontSize: '0.85rem', fontWeight: '700' }}>
              Instant Table Reservation
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                color: '#4ade80',
                fontSize: '0.75rem',
                fontWeight: '600'
              }}
            >
              <ShieldCheck size={13} />
              <span className="hidden sm:inline">Verified Partner</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              {isExpanded ? 'Minimize' : 'Click to Reserve'}
            </span>
            <button
              type="button"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#FFF',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label={isExpanded ? 'Collapse OpenTable Bar' : 'Expand OpenTable Bar'}
            >
              {isExpanded ? <ChevronDown size={15} /> : <ChevronUp size={15} />}
            </button>
          </div>
        </div>

        {/* Interactive Booking Controls Strip */}
        <div style={{ padding: '0.85rem 1.25rem 1rem' }}>
          <form
            onSubmit={handleOpenTableSubmit}
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.85rem'
            }}
          >
            {/* 1. Guests Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flex: '1 1 140px', minWidth: '130px' }}>
              <Users size={16} color="#DA3743" />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>
                  Guests
                </div>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(218, 55, 67, 0.35)',
                    borderRadius: '6px',
                    color: '#FFF',
                    padding: '0.35rem 0.5rem',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map((n) => (
                    <option key={n} value={n.toString()} style={{ background: '#181820', color: '#FFF' }}>
                      {n} {n === 1 ? 'Person' : 'People'}
                    </option>
                  ))}
                  <option value="20+" style={{ background: '#181820', color: '#FFF' }}>
                    20+ Banquet
                  </option>
                </select>
              </div>
            </div>

            {/* 2. Date Picker */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flex: '1 1 160px', minWidth: '140px' }}>
              <Calendar size={16} color="#DA3743" />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>
                  Date
                </div>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(218, 55, 67, 0.35)',
                    borderRadius: '6px',
                    color: '#FFF',
                    padding: '0.35rem 0.5rem',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    outline: 'none',
                    colorScheme: 'dark',
                    cursor: 'pointer'
                  }}
                />
              </div>
            </div>

            {/* 3. Time Picker */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flex: '1 1 140px', minWidth: '130px' }}>
              <Clock size={16} color="#DA3743" />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>
                  Time
                </div>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(218, 55, 67, 0.35)',
                    borderRadius: '6px',
                    color: '#FFF',
                    padding: '0.35rem 0.5rem',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {timeSlots.map((slot) => (
                    <option key={slot.value} value={slot.value} style={{ background: '#181820', color: '#FFF' }}>
                      {slot.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 4. Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flex: '2 1 300px', justifyContent: 'flex-end' }}>
              {/* Primary OpenTable Search Button */}
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #DA3743 0%, #B82530 100%)',
                  color: '#FFF',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.65rem 1.4rem',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  boxShadow: '0 4px 15px rgba(218, 55, 67, 0.45)',
                  transition: 'transform 0.15s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Utensils size={15} />
                <span>Find Table on OpenTable</span>
                <ExternalLink size={13} />
              </button>

              {/* In-House Concierge Button */}
              <button
                type="button"
                onClick={openBookingModal}
                style={{
                  background: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid var(--border-gold)',
                  color: 'var(--gold-light)',
                  borderRadius: '8px',
                  padding: '0.65rem 1rem',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  whiteSpace: 'nowrap'
                }}
              >
                <Crown size={14} color="var(--gold-primary)" />
                <span>Palace Concierge</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
