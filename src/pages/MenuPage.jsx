import React from 'react';
import MenuExplorer from '../components/MenuExplorer';
import { Crown, Sparkles, UtensilsCrossed, Calendar } from 'lucide-react';
import heroImg from '../assets/images/pera-landing-1.png';

export default function MenuPage({ openBookingModal }) {
  return (
    <main style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Page Header */}
      <section
        style={{
          padding: '4rem 0 2rem',
          background:
            'radial-gradient(circle at 50% 20%, rgba(120, 29, 38, 0.25) 0%, transparent 70%), var(--bg-surface)',
          borderBottom: '1px solid var(--border-subtle)',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <div className="section-tag">
            <UtensilsCrossed size={14} />
            <span>Grand Palace Dining</span>
          </div>
          <h1 className="section-title">Our Imperial Menu</h1>
          <p className="section-desc" style={{ margin: '0 auto 2rem' }}>
            Explore centuries of Ottoman culinary art. All meats are 100% Halal certified,
            slow-cooked in traditional copperware or grilled over natural ironbark charcoal.
          </p>

          <button onClick={openBookingModal} className="btn-primary">
            <Calendar size={18} />
            <span>Book a Table for Dinner</span>
          </button>
        </div>
      </section>

      {/* Interactive Explorer */}
      <MenuExplorer openBookingModal={openBookingModal} />
    </main>
  );
}
