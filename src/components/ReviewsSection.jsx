import React from 'react';
import { reviewsData } from '../data/reviewsData';
import { siteConfig } from '../data/siteConfig';
import { Star, Quote, MessageSquare, ExternalLink, MessageSquarePlus } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section style={{ padding: '5.5rem 0', background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Guest Experiences</span>
          </div>
          <h2 className="section-title">What People Are Saying</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            From romantic dates and family celebrations to corporate banquets, our guests share
            their love for Pera Palace Ottoman.
          </p>
        </div>

        {/* Reviews Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem'
          }}
        >
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Rating stars */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#F0DC82" color="#F0DC82" />
                  ))}
                </div>

                <Quote
                  size={24}
                  color="var(--gold-dark)"
                  style={{ opacity: 0.6, marginBottom: '0.75rem' }}
                />

                <p
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    lineHeight: '1.65',
                    marginBottom: '1.5rem',
                    fontStyle: 'italic'
                  }}
                >
                  "{rev.content}"
                </p>
              </div>

              <div
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  paddingTop: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div
                    style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.95rem' }}
                  >
                    {rev.author}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {rev.badge || rev.role}
                  </div>
                </div>
                {rev.dish && (
                  <span
                    style={{
                      fontSize: '0.72rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      background: 'rgba(212,175,55,0.15)',
                      color: 'var(--gold-light)',
                      border: '1px solid var(--border-gold)'
                    }}
                  >
                    {rev.dish}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Google Review Callout Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <a
            href={siteConfig.contact.googleWriteReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}
          >
            <MessageSquarePlus size={16} />
            <span>Write a Review on Google</span>
          </a>
          <a
            href={siteConfig.contact.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}
          >
            <span>Read All 667 Reviews on Google (4.8 ★)</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
