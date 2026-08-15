import React from 'react';
import GallerySection from '../components/GallerySection';
import { Camera } from 'lucide-react';

export default function GalleryPage() {
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
            <Camera size={14} />
            <span>Photography</span>
          </div>
          <h1 className="section-title">Palace Moments & Dishes</h1>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Explore our visual gallery of authentic Ottoman cuisine, hand-rolled baklava, and
            memorable dining moments.
          </p>
        </div>
      </section>

      <GallerySection />
    </main>
  );
}
