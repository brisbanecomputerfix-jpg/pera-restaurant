import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import {
  Calendar,
  Clock,
  Users,
  X,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Crown,
  Heart,
  ExternalLink,
  Utensils,
  ShieldCheck
} from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [bookingMode, setBookingMode] = useState('opentable'); // 'opentable' | 'direct'
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('06:30 PM');
  const [seatingArea, setSeatingArea] = useState('Palace Main Dining Room');
  const [occasion, setOccasion] = useState('Dinner / Casual');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const timeSlots = [
    '05:30 PM (17:30)',
    '06:00 PM (18:00)',
    '06:30 PM (18:30)',
    '07:00 PM (19:00)',
    '07:30 PM (19:30)',
    '08:00 PM (20:00)',
    '08:30 PM (20:30)',
    '09:00 PM (21:00)'
  ];

  if (!isOpen) return null;

  const handleOpenTableRedirect = (e) => {
    e.preventDefault();
    // Build OpenTable search / direct reservation URL with parameters
    const timeClean = timeSlot.split(' ')[0]; // e.g. 06:30
    const covers = guests.replace('+', '');
    const otUrl = `https://www.opentable.com.au/r/pera-palace-ottoman-wynnum?covers=${covers}&dateTime=${date}T${timeClean}`;
    window.open(otUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDirectBookingSubmit = (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !customerEmail) {
      alert('Please fill in your name, phone number, and email.');
      return;
    }
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '680px', borderRadius: '16px' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            color: 'var(--text-muted)',
            padding: '0.25rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            zIndex: 10
          }}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {!isBooked ? (
          <div>
            {/* Modal Header */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div className="section-tag" style={{ margin: '0 auto 0.6rem' }}>
                <Crown size={14} />
                <span>Online Reservations</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: '#FFF', marginBottom: '0.35rem' }}>
                Reserve Your Table
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                2/70 Edith St, Wynnum QLD • 100% Halal Certified • Instant Confirmation
              </p>
            </div>

            {/* Mode Switcher: OpenTable vs Direct Concierge */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.5rem',
                padding: '0.35rem',
                background: 'var(--bg-surface)',
                borderRadius: '12px',
                border: '1px solid var(--border-gold)',
                marginBottom: '1.5rem'
              }}
            >
              <button
                type="button"
                onClick={() => setBookingMode('opentable')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '9px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  background:
                    bookingMode === 'opentable'
                      ? 'linear-gradient(135deg, #DA3743 0%, #B82530 100%)'
                      : 'transparent',
                  color: bookingMode === 'opentable' ? '#FFF' : 'var(--text-secondary)',
                  boxShadow:
                    bookingMode === 'opentable' ? '0 4px 15px rgba(218, 55, 67, 0.4)' : 'none'
                }}
              >
                {/* OpenTable Red Dot Icon */}
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: bookingMode === 'opentable' ? '#FFF' : '#DA3743'
                  }}
                />
                <span>OpenTable Reservation</span>
              </button>

              <button
                type="button"
                onClick={() => setBookingMode('direct')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '9px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  background:
                    bookingMode === 'direct'
                      ? 'var(--gradient-gold)'
                      : 'transparent',
                  color: bookingMode === 'direct' ? '#000' : 'var(--text-secondary)',
                  boxShadow:
                    bookingMode === 'direct' ? 'var(--shadow-gold)' : 'none'
                }}
              >
                <Crown size={15} color={bookingMode === 'direct' ? '#000' : 'var(--gold-primary)'} />
                <span>Palace Direct Booking</span>
              </button>
            </div>

            {/* =========================================================================
                TAB 1: OPENTABLE RESERVATION WIDGET INTERFACE
                ========================================================================= */}
            {bookingMode === 'opentable' && (
              <div>
                {/* OpenTable Trust Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    background: 'rgba(218, 55, 67, 0.08)',
                    border: '1px solid rgba(218, 55, 67, 0.25)',
                    borderRadius: '10px',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div
                      style={{
                        background: '#DA3743',
                        color: '#FFF',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontWeight: '800',
                        fontSize: '0.75rem',
                        letterSpacing: '0.04em'
                      }}
                    >
                      OpenTable
                    </div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      Real-time live table availability & instant booking
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#4ade80', fontSize: '0.78rem', fontWeight: '600' }}>
                    <ShieldCheck size={14} />
                    <span>Verified</span>
                  </div>
                </div>

                <form onSubmit={handleOpenTableRedirect} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  {/* Guests & Date */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Users size={14} color="#DA3743" />
                        <span>Number of Guests</span>
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="form-select"
                        style={{ borderColor: 'rgba(218, 55, 67, 0.3)' }}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map((n) => (
                          <option key={n} value={n.toString()}>
                            {n} {n === 1 ? 'Person' : 'People'}
                          </option>
                        ))}
                        <option value="20+">20+ People (Large Banquet)</option>
                      </select>
                    </div>

                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Calendar size={14} color="#DA3743" />
                        <span>Date</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="form-input"
                        style={{ borderColor: 'rgba(218, 55, 67, 0.3)' }}
                      />
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Clock size={14} color="#DA3743" />
                      <span>Select Dining Time</span>
                    </label>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(85px, 1fr))',
                        gap: '0.4rem',
                        maxHeight: '130px',
                        overflowY: 'auto',
                        padding: '0.25rem'
                      }}
                    >
                      {timeSlots.map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setTimeSlot(slot)}
                          style={{
                            padding: '0.5rem 0.25rem',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            fontWeight: '600',
                            textAlign: 'center',
                            background: timeSlot === slot ? '#DA3743' : 'var(--bg-surface)',
                            color: timeSlot === slot ? '#FFF' : 'var(--text-secondary)',
                            border:
                              timeSlot === slot
                                ? '1px solid #DA3743'
                                : '1px solid var(--border-subtle)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Seating preference */}
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Seating Preference</label>
                    <select
                      value={seatingArea}
                      onChange={(e) => setSeatingArea(e.target.value)}
                      className="form-select"
                    >
                      <option value="Palace Main Dining Room">Palace Main Dining Room (Chandelier Hall)</option>
                      <option value="Alfresco Garden Patio">Alfresco Garden Patio</option>
                      <option value="VIP Banquet Lounge">VIP Banquet Lounge (Near Fireplace)</option>
                      <option value="No Preference">No Preference (First Available)</option>
                    </select>
                  </div>

                  {/* Primary OpenTable CTA Button */}
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.02rem',
                      fontWeight: '700',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #DA3743 0%, #B82530 100%)',
                      color: '#FFF',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      boxShadow: '0 8px 25px rgba(218, 55, 67, 0.45)',
                      marginTop: '0.5rem',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.01)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    <Utensils size={18} />
                    <span>Find Table on OpenTable ({guests} Guests • {timeSlot.split(' ')[0]})</span>
                    <ExternalLink size={16} />
                  </button>

                  <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Instant confirmation via OpenTable. No booking fees.
                  </div>
                </form>
              </div>
            )}

            {/* =========================================================================
                TAB 2: PALACE DIRECT CONCIERGE BOOKING
                ========================================================================= */}
            {bookingMode === 'direct' && (
              <form onSubmit={handleDirectBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Users size={14} color="var(--gold-primary)" />
                      <span>Number of Guests</span>
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="form-select"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map((n) => (
                        <option key={n} value={n.toString()}>
                          {n} {n === 1 ? 'Person' : 'People'}
                        </option>
                      ))}
                      <option value="20+">20+ People (Large Banquet)</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={14} color="var(--gold-primary)" />
                      <span>Date</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={14} color="var(--gold-primary)" />
                    <span>Select Dining Time</span>
                  </label>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(85px, 1fr))',
                      gap: '0.4rem',
                      maxHeight: '130px',
                      overflowY: 'auto',
                      padding: '0.25rem'
                    }}
                  >
                    {timeSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setTimeSlot(slot)}
                        style={{
                          padding: '0.5rem 0.25rem',
                          borderRadius: '6px',
                          fontSize: '0.78rem',
                          fontWeight: '600',
                          textAlign: 'center',
                          background: timeSlot === slot ? 'var(--gold-primary)' : 'var(--bg-surface)',
                          color: timeSlot === slot ? '#000' : 'var(--text-secondary)',
                          border:
                            timeSlot === slot
                              ? '1px solid var(--gold-primary)'
                              : '1px solid var(--border-subtle)',
                          cursor: 'pointer'
                        }}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Seating Preference</label>
                    <select
                      value={seatingArea}
                      onChange={(e) => setSeatingArea(e.target.value)}
                      className="form-select"
                    >
                      <option value="Palace Main Dining Room">Palace Main Dining Room</option>
                      <option value="Alfresco Garden Patio">Alfresco Garden Patio</option>
                      <option value="VIP Banquet Table">VIP Banquet Table</option>
                      <option value="No Preference">No Preference</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Occasion</label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="form-select"
                    >
                      <option value="Dinner / Casual">Dinner / Casual</option>
                      <option value="Birthday Celebration">Birthday Celebration</option>
                      <option value="Anniversary / Romance">Anniversary / Romance</option>
                      <option value="Business Dining">Business Dining</option>
                      <option value="Family Gathering">Family Gathering</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="form-input"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (for SMS) *"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="form-input"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address (for confirmation) *"
                  required
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="form-input"
                />

                <input
                  type="text"
                  placeholder="Special notes / dietary requests (e.g. Halal, Gluten-Free, High Chair)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="form-input"
                />

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.95rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  <Crown size={18} />
                  <span>Confirm Royal Reservation</span>
                </button>
              </form>
            )}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(25, 83, 61, 0.3)',
                border: '2px solid #4ade80',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem'
              }}
            >
              <CheckCircle2 size={36} color="#4ade80" />
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                color: 'var(--gold-light)',
                marginBottom: '0.5rem'
              }}
            >
              Table Reservation Confirmed!
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              We look forward to welcoming you to Pera Palace Ottoman,{' '}
              <strong>{customerName}</strong>.
            </p>

            <div
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-gold)',
                borderRadius: '10px',
                padding: '1.5rem',
                textAlign: 'left',
                marginBottom: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                fontSize: '0.9rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Date & Time:</span>
                <strong style={{ color: 'var(--gold-light)' }}>
                  {date} at {timeSlot}
                </strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Party Size:</span>
                <strong style={{ color: '#FFF' }}>{guests} Guests</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Seating:</span>
                <strong style={{ color: '#FFF' }}>{seatingArea}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Occasion:</span>
                <strong style={{ color: '#FFF' }}>{occasion}</strong>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  paddingTop: '0.5rem'
                }}
              >
                <span style={{ color: 'var(--text-muted)' }}>Location:</span>
                <strong style={{ color: 'var(--gold-light)' }}>2/70 Edith St, Wynnum QLD</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button
                onClick={handleReset}
                className="btn-primary"
                style={{ padding: '0.75rem 1.75rem' }}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
