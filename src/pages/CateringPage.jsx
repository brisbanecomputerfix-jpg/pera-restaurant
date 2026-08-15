import React from 'react';
import CateringBuilder from '../components/CateringBuilder';
import { Sparkles, Users, Award, ShieldCheck, Heart } from 'lucide-react';
import cateringHero from '../assets/images/pera-landing-2.png';

export default function CateringPage() {
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
            <Sparkles size={14} />
            <span>Brisbane & Gold Coast Catering</span>
          </div>
          <h1 className="section-title">Anatolia Ottoman Catering</h1>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Elevate your wedding, corporate banquet, birthday, or private gathering with authentic
            Ottoman spreads. Handcrafted from scratch — zero canned products, 10 to 500 guests.
          </p>
        </div>
      </section>

      {/* Interactive Builder */}
      <CateringBuilder />
    </main>
  );
}
