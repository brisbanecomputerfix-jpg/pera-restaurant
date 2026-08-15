import React from 'react';
import ContactSection from '../components/ContactSection';
import { MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Page Header */}
      <section
        style={{
          padding: '4rem 0 2rem',
          background:
            'radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 70%), var(--bg-surface)',
          borderBottom: '1px solid var(--border-subtle)',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <div className="section-tag">
            <MapPin size={14} />
            <span>Find Us</span>
          </div>
          <h1 className="section-title">Contact & Location</h1>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            We look forward to hosting you. Find directions, phone numbers, parking advice, and
            operating hours below.
          </p>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
