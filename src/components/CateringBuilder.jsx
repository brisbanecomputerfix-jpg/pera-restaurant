import React, { useState, useMemo } from 'react';
import { cateringPackages, cateringCategories } from '../data/cateringData';
import { siteConfig } from '../data/siteConfig';
import {
  Users,
  Sparkles,
  Calculator,
  CheckCircle2,
  Send,
  Phone,
  Mail,
  Calendar,
  Clock,
  Check,
  Plus,
  ChevronDown,
  ChevronUp,
  Flame,
  Crown
} from 'lucide-react';

export default function CateringBuilder() {
  const [guestCount, setGuestCount] = useState(40);
  const [selectedPackage, setSelectedPackage] = useState('sultan-banquet');
  const [selectedItems, setSelectedItems] = useState(
    new Set([
      'cm-hummus',
      'cm-babaganoush',
      'cm-beetroot',
      'hff-sigara',
      'hff-pachanga',
      'hff-arancini',
      'hm-lamb',
      'hm-chicken',
      'sl-coban',
      'sl-chickpea',
      'ds-baklava'
    ])
  );
  const [openCategory, setOpenCategory] = useState('cold-meze');
  const [eventType, setEventType] = useState('Wedding / Reception');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    location: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleItem = (itemId) => {
    setSelectedItems((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  };

  // Pricing calculations
  const currentPackageObj = useMemo(() => {
    return cateringPackages.find((p) => p.id === selectedPackage) || cateringPackages[0];
  }, [selectedPackage]);

  const calculation = useMemo(() => {
    let pricePerPerson = currentPackageObj.pricePerPerson;

    if (selectedPackage === 'custom-builder') {
      // Calculate from individual selected items
      let itemsTotal = 0;
      cateringCategories.forEach((cat) => {
        cat.items.forEach((it) => {
          if (selectedItems.has(it.id)) {
            if (!cat.isPlatter) {
              itemsTotal += cat.basePrice;
            }
          }
        });
      });
      pricePerPerson = Math.max(itemsTotal, 25); // base minimum
    }

    // Platters added
    let plattersTotal = 0;
    cateringCategories.forEach((cat) => {
      if (cat.isPlatter) {
        cat.items.forEach((it) => {
          if (selectedItems.has(it.id)) {
            // Count boards needed (1 board per ~15 guests)
            const boardsNeeded = Math.ceil(guestCount / 15);
            plattersTotal += boardsNeeded * cat.basePrice;
          }
        });
      }
    });

    const foodTotal = pricePerPerson * guestCount + plattersTotal;
    const gst = foodTotal * 0.1;
    const grandTotal = foodTotal;

    return {
      pricePerPerson: pricePerPerson.toFixed(2),
      foodTotal: Math.round(foodTotal),
      grandTotal: Math.round(grandTotal),
      itemCount: selectedItems.size
    };
  }, [selectedPackage, guestCount, selectedItems, currentPackageObj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in your name, phone number, and email.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section id="catering" style={{ padding: '5rem 0', background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Anatolia Catering Brisbane</span>
          </div>
          <h2 className="section-title">Anatolia Imperial Catering</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Weddings • Corporate Galas • Birthdays • Baby Showers • Private Celebrations.
            <br />
            <strong>
              Handcrafted with Anatolian passion — no canned products, only real flavours (10 to 500
              Guests).
            </strong>
          </p>
        </div>

        {/* 2-Column Interactive Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Interactive Calculator Controls */}
          <div className="catering-calculator-wrapper">
            {/* 1. Guest Count Slider */}
            <div className="slider-container">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    fontSize: '1.1rem'
                  }}
                >
                  <Users size={20} color="var(--gold-light)" />
                  <span>Number of Guests</span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.75rem',
                    fontWeight: '800',
                    color: 'var(--gold-light)'
                  }}
                >
                  {guestCount}{' '}
                  <span
                    style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '400' }}
                  >
                    People
                  </span>
                </div>
              </div>

              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value))}
                className="custom-range"
                aria-label="Guest count slider"
              />

              {/* Preset Guest Buttons */}
              <div
                style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.75rem' }}
              >
                {[15, 30, 50, 100, 200, 350, 500].map((val) => (
                  <button
                    key={val}
                    onClick={() => setGuestCount(val)}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      background:
                        guestCount === val ? 'var(--gold-primary)' : 'rgba(255,255,255,0.05)',
                      color: guestCount === val ? '#000' : 'var(--text-secondary)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    {val} Guests
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Event Type Selector */}
            <div style={{ marginBottom: '2rem' }}>
              <label className="form-label">Event Type</label>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '0.5rem'
                }}
              >
                {[
                  'Wedding / Reception',
                  'Corporate Event',
                  'Birthday Party',
                  'Baby Shower / Engagement',
                  'Private Dinner'
                ].map((type) => (
                  <button
                    key={type}
                    onClick={() => setEventType(type)}
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: '6px',
                      fontSize: '0.825rem',
                      fontWeight: '600',
                      background:
                        eventType === type
                          ? 'rgba(212, 175, 55, 0.2)'
                          : 'var(--bg-surface-elevated)',
                      border:
                        eventType === type
                          ? '1px solid var(--gold-primary)'
                          : '1px solid var(--border-subtle)',
                      color: eventType === type ? 'var(--gold-light)' : 'var(--text-secondary)',
                      textAlign: 'center'
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Package Selection Cards */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  fontSize: '1.1rem'
                }}
              >
                <Crown size={18} color="var(--gold-primary)" />
                <span>Select a Catering Package</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cateringPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    style={{
                      padding: '1.25rem',
                      borderRadius: '10px',
                      background:
                        selectedPackage === pkg.id
                          ? 'linear-gradient(145deg, rgba(35,32,22,0.95), rgba(20,20,25,0.95))'
                          : 'var(--bg-surface-elevated)',
                      border:
                        selectedPackage === pkg.id
                          ? '2px solid var(--gold-primary)'
                          : '1px solid var(--border-subtle)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      position: 'relative'
                    }}
                  >
                    {pkg.popular && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          background: 'var(--crimson-royal)',
                          color: '#FFF',
                          fontSize: '0.7rem',
                          fontWeight: '700',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '20px',
                          border: '1px solid rgba(255,255,255,0.2)'
                        }}
                      >
                        MOST POPULAR
                      </div>
                    )}

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '0.35rem'
                      }}
                    >
                      <div
                        style={{
                          fontWeight: '700',
                          fontSize: '1.1rem',
                          color: selectedPackage === pkg.id ? 'var(--gold-light)' : '#FFF'
                        }}
                      >
                        {pkg.name}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.25rem',
                          fontWeight: '800',
                          color: 'var(--gold-light)'
                        }}
                      >
                        {pkg.pricePerPerson > 0 ? `$${pkg.pricePerPerson}` : 'Custom'}
                        {pkg.pricePerPerson > 0 && (
                          <span
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: '400',
                              color: 'var(--text-muted)'
                            }}
                          >
                            {' '}
                            / guest
                          </span>
                        )}
                      </div>
                    </div>

                    <div
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        marginBottom: '0.85rem'
                      }}
                    >
                      {pkg.tagline}
                    </div>

                    <ul
                      style={{
                        listStyle: 'none',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '0.35rem',
                        fontSize: '0.825rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {pkg.includes.map((inc, i) => (
                        <li
                          key={i}
                          style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                        >
                          <Check size={13} color="var(--gold-primary)" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Item-by-Item Category Accordions */}
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}
              >
                <h3 style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                  Customise Menu Items ({selectedItems.size} Selected)
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Click to toggle dishes
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {cateringCategories.map((cat) => {
                  const isOpen = openCategory === cat.id;
                  const selectedInCat = cat.items.filter((it) => selectedItems.has(it.id)).length;

                  return (
                    <div
                      key={cat.id}
                      style={{
                        borderRadius: '8px',
                        background: 'var(--bg-surface-elevated)',
                        border:
                          selectedInCat > 0
                            ? '1px solid var(--border-gold)'
                            : '1px solid var(--border-subtle)',
                        overflow: 'hidden'
                      }}
                    >
                      <button
                        onClick={() => setOpenCategory(isOpen ? '' : cat.id)}
                        style={{
                          width: '100%',
                          padding: '1rem 1.25rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          textAlign: 'left',
                          color: '#FFF'
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontWeight: '700',
                              fontSize: '0.95rem',
                              color: selectedInCat > 0 ? 'var(--gold-light)' : '#FFF'
                            }}
                          >
                            {cat.title}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                            {cat.desc} • {selectedInCat}/{cat.items.length} chosen
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          {selectedInCat > 0 && (
                            <span
                              style={{
                                fontSize: '0.75rem',
                                padding: '0.2rem 0.5rem',
                                background: 'rgba(212,175,55,0.2)',
                                color: 'var(--gold-light)',
                                borderRadius: '4px',
                                fontWeight: '700'
                              }}
                            >
                              {selectedInCat}
                            </span>
                          )}
                          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                      </button>

                      {isOpen && (
                        <div
                          style={{
                            padding: '0.75rem 1.25rem 1.25rem',
                            borderTop: '1px solid var(--border-subtle)',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '0.5rem'
                          }}
                        >
                          {cat.items.map((it) => {
                            const isChecked = selectedItems.has(it.id);
                            return (
                              <div
                                key={it.id}
                                onClick={() => toggleItem(it.id)}
                                style={{
                                  padding: '0.65rem 0.85rem',
                                  borderRadius: '6px',
                                  background: isChecked
                                    ? 'rgba(212, 175, 55, 0.15)'
                                    : 'rgba(0,0,0,0.25)',
                                  border: isChecked
                                    ? '1px solid var(--gold-primary)'
                                    : '1px solid rgba(255,255,255,0.06)',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  transition: 'all 0.15s'
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: '0.85rem',
                                    fontWeight: isChecked ? '600' : '400',
                                    color: isChecked ? '#FFF' : 'var(--text-secondary)'
                                  }}
                                >
                                  {it.name}
                                </div>
                                <div
                                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                                >
                                  {it.tags &&
                                    it.tags.map((t, idx) => (
                                      <span
                                        key={idx}
                                        style={{
                                          fontSize: '0.65rem',
                                          padding: '0.1rem 0.35rem',
                                          borderRadius: '3px',
                                          background: 'rgba(255,255,255,0.08)',
                                          color: 'var(--gold-primary)'
                                        }}
                                      >
                                        {t}
                                      </span>
                                    ))}
                                  <div
                                    style={{
                                      width: '18px',
                                      height: '18px',
                                      borderRadius: '4px',
                                      background: isChecked
                                        ? 'var(--gold-primary)'
                                        : 'rgba(255,255,255,0.1)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      marginLeft: '0.3rem'
                                    }}
                                  >
                                    {isChecked && <Check size={12} color="#000" strokeWidth={3} />}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Summary & Instant Quote Form */}
          <div className="calculator-summary-box">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.25rem',
                borderBottom: '1px solid var(--border-gold)',
                paddingBottom: '0.75rem'
              }}
            >
              <Calculator size={20} color="var(--gold-light)" />
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  color: 'var(--gold-light)'
                }}
              >
                Catering Estimate
              </h3>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                marginBottom: '1.5rem',
                fontSize: '0.925rem'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'var(--text-secondary)'
                }}
              >
                <span>Event Type:</span>
                <strong style={{ color: '#FFF' }}>{eventType}</strong>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'var(--text-secondary)'
                }}
              >
                <span>Guest Count:</span>
                <strong style={{ color: 'var(--gold-light)' }}>{guestCount} Guests</strong>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'var(--text-secondary)'
                }}
              >
                <span>Selected Package:</span>
                <strong style={{ color: '#FFF' }}>{currentPackageObj.name}</strong>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'var(--text-secondary)'
                }}
              >
                <span>Dishes Selected:</span>
                <strong style={{ color: '#FFF' }}>{calculation.itemCount} Dishes</strong>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'var(--text-secondary)',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  paddingTop: '0.65rem'
                }}
              >
                <span>Price per Guest:</span>
                <strong style={{ color: 'var(--gold-light)', fontSize: '1.1rem' }}>
                  ~${calculation.pricePerPerson}
                </strong>
              </div>
            </div>

            {/* Total Highlight */}
            <div
              style={{
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid var(--border-gold)',
                borderRadius: '8px',
                padding: '1.25rem',
                textAlign: 'center',
                marginBottom: '1.75rem'
              }}
            >
              <div
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                Estimated Total (Excl. Special Add-ons)
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  color: 'var(--gold-light)',
                  margin: '0.25rem 0'
                }}
              >
                ${calculation.grandTotal.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                *Final price confirmed based on staffing, chafing dish hire & dietary requests.
              </div>
            </div>

            {/* Instant Booking / Quote Form */}
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
              >
                <div
                  style={{
                    fontWeight: '700',
                    color: '#FFF',
                    fontSize: '0.95rem',
                    marginBottom: '0.2rem'
                  }}
                >
                  Request Catering Quote & Check Date Availability
                </div>

                <input
                  type="text"
                  placeholder="Your Full Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="Suburb / Venue"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="form-input"
                  />
                </div>

                <textarea
                  rows={3}
                  placeholder="Dietary requirements (GF, Halal, Nut-free) or special requests..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="form-textarea"
                />

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem' }}
                >
                  <Send size={16} />
                  <span>Send Catering Inquiry Now</span>
                </button>

                <div
                  style={{
                    textAlign: 'center',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.35rem'
                  }}
                >
                  Or call directly:{' '}
                  <a
                    href={`tel:${siteConfig.contact.phoneClean}`}
                    style={{ color: 'var(--gold-light)', fontWeight: '600' }}
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </form>
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  padding: '2rem 1rem',
                  background: 'rgba(25, 83, 61, 0.2)',
                  border: '1px solid rgba(42, 123, 92, 0.5)',
                  borderRadius: '8px'
                }}
              >
                <CheckCircle2 size={42} color="#4ade80" style={{ margin: '0 auto 0.75rem' }} />
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    color: '#FFF',
                    marginBottom: '0.4rem'
                  }}
                >
                  Catering Request Received!
                </h4>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5',
                    marginBottom: '1.25rem'
                  }}
                >
                  Thank you, <strong>{formData.name}</strong>. Our head catering coordinator will
                  review your estimate for <strong>{guestCount} guests</strong> and contact you
                  within 2 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                >
                  Edit / Calculate Another Quote
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
