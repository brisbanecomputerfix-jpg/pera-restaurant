import React from 'react';
import { googleReviewsData } from '../data/reviewsData';
import { siteConfig } from '../data/siteConfig';
import { Star, ExternalLink, MessageSquarePlus, CheckCircle2 } from 'lucide-react';

export default function GoogleReviewsTicker() {
  // Duplicate reviews to create a seamless infinite marquee loop
  const duplicatedReviews = [...googleReviewsData, ...googleReviewsData];

  return (
    <section className="google-reviews-ticker-section" aria-label="Recent Google Reviews Live Feed">
      {/* Top Header & Direct Action Bar */}
      <div className="container">
        <div className="google-ticker-header">
          {/* Left: Google Rating Badge */}
          <div className="google-brand-summary">
            {/* Google Multicolored "G" Logo */}
            <div className="google-icon-wrapper" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <div className="google-rating-details">
              <div className="google-rating-stars-row">
                <span className="google-score">4.8</span>
                <div className="stars-cluster" aria-label="4.8 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#FBBC05" color="#FBBC05" />
                  ))}
                </div>
                <span className="google-reviews-count">(667 Google Reviews)</span>
              </div>
              <p className="google-live-subtext">Real-Time Customer Experiences & Reviews</p>
            </div>
          </div>

          {/* Right: Direct Actions to Google Reviews */}
          <div className="google-action-buttons">
            <a
              href={siteConfig.contact.googleWriteReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-google-write"
              title="Leave an Official Google Review for Pera Palace"
            >
              <MessageSquarePlus size={15} />
              <span>Write a Review</span>
            </a>

            <a
              href={siteConfig.contact.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-google-view"
              title="View all Pera Palace Google Reviews"
            >
              <span>Read All on Google</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ROLLING HORIZONTAL REVIEWS MARQUEE (Continuous Stream)
          ========================================================================= */}
      <div className="google-ticker-track-container">
        <div className="google-ticker-track">
          {duplicatedReviews.map((review, idx) => (
            <a
              key={`${review.id}-${idx}`}
              href={siteConfig.contact.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="google-review-card"
              title={`Read ${review.author}'s review on Google`}
            >
              {/* Card Top: Avatar, Name & Google Verified Badge */}
              <div className="google-card-header">
                <div
                  className="google-avatar"
                  style={{ backgroundColor: review.avatarBg || '#4285F4' }}
                >
                  {review.initials}
                </div>
                <div className="google-author-info">
                  <div className="google-author-name-row">
                    <span className="google-author-name">{review.author}</span>
                    {review.verified && (
                      <CheckCircle2 size={13} color="#4285F4" className="verified-check" />
                    )}
                  </div>
                  <span className="google-author-badge">{review.badge}</span>
                </div>
              </div>

              {/* Stars & Time Row */}
              <div className="google-card-rating-row">
                <div className="google-card-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="#FBBC05" color="#FBBC05" />
                  ))}
                </div>
                <span className="google-card-time">{review.timeAgo}</span>
              </div>

              {/* Review Text Body */}
              <p className="google-card-body">“{review.content}”</p>

              {/* Highlighted Dish Tag */}
              {review.dish && (
                <div className="google-dish-tag">
                  <span>Ordered: {review.dish}</span>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
