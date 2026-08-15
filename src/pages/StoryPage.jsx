import React from 'react';
import StorySection from '../components/StorySection';
import TrophyCabinet from '../components/TrophyCabinet';
import { Crown, Sparkles, Calendar } from 'lucide-react';

export default function StoryPage({ openBookingModal }) {
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
            <Crown size={14} />
            <span>Palace Heritage</span>
          </div>
          <h1 className="section-title">The Story of Pera Palace</h1>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Bridging cultures through imperial cuisine. Discover how centuries of Topkapı Palace
            recipes were brought to life in Wynnum, Australia.
          </p>
        </div>
      </section>

      <StorySection openBookingModal={openBookingModal} />
      <TrophyCabinet />
    </main>
  );
}
