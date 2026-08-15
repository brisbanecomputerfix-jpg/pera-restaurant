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
  Heart
} from 'lucide-react';
import lambHero from '../assets/images/pera-book.png';

export default function BookingModal({ isOpen, onClose }) {
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

  const handleBookingSubmit = (e) => {
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
        style={{ maxWidth: '640px' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            color: 'var(--text-muted)',
            padding: '0.25rem'
          }}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {!isBooked ? (
          <div>
            {/* Modal Header */}
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <div className="section-tag" style={{ margin: '0 auto 0.75rem' }}>
                <Crown size={14} />
                <span>Royal Reservation</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: '#FFF' }}>
                Reserve Your Royal Table
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                2/70 Edith St, Wynnum QLD • Halal Certified • Ottoman Palace Experience
              </p>
            </div>

            <form
              onSubmit={handleBookingSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
            >
              {/* Party Size & Date */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label
                    className="form-label"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                  >
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
                  <label
                    className="form-label"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                  >
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

              {/* Time Slots */}
              <div>
                <label
                  className="form-label"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                >
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
                            : '1px solid var(--border-subtle)'
                      }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating Preference */}
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

              {/* Contact Information */}
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
                placeholder="Dietary requests (e.g. Halal, Gluten-Free, High Chair, etc.)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="form-input"
              />

              {/* Policy note */}
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                * We hold tables for 15 minutes past booking time. For groups larger than 12 guests,
                please call us directly at {siteConfig.contact.phoneDisplay}.
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '0.95rem', fontSize: '1rem', marginTop: '0.5rem' }}
              >
                <Crown size={18} />
                <span>Confirm Royal Reservation</span>
              </button>
            </form>
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
            <p
              style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}
            >
              We look forward to welcoming you to Pera Palace Ottoman,{' '}
              <strong>{customerName}</strong>.
            </p>

            {/* Summary card */}
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
