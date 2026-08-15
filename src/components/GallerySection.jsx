import React, { useState, useEffect } from 'react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Utensils, GlassWater, Landmark } from 'lucide-react';

// Import all verified authentic restaurant photography
import imgPeraLanding1 from '../assets/images/pera-landing-1.png';
import img3145 from '../assets/images/IMG_3145-scaled.png';
import img2829 from '../assets/images/IMG_2829-2-scaled.png';
import imgPeraLanding from '../assets/images/pera-landing.png';
import img3795 from '../assets/images/IMG_3795-scaled.jpg';
import imgPeraLanding2 from '../assets/images/pera-landing-2.png';
import img3800 from '../assets/images/IMG_3800-scaled.jpg';
import img1747 from '../assets/images/IMG_1747-scaled.jpg';
import img1441 from '../assets/images/IMG_1441-scaled.jpg';
import img1437 from '../assets/images/IMG_1437-scaled.jpg';
import img1177 from '../assets/images/IMG_1177.png';
import img7786 from '../assets/images/MGJ_7786-scaled.jpg';
import imgPeraLanding3 from '../assets/images/pera-landing-3.png';
import img1765 from '../assets/images/IMG_1765-scaled.jpg';
import img1772 from '../assets/images/IMG_1772-scaled.jpg';
import img3862 from '../assets/images/IMG_3862-scaled.jpg';
import img7759 from '../assets/images/MGJ_7759-scaled.jpg';
import img1510 from '../assets/images/IMG_1510-scaled.jpg';
import img1635 from '../assets/images/IMG_1635.jpg';
import img7810 from '../assets/images/MGJ_7810-1-scaled.jpg';
import img7822 from '../assets/images/MGJ_7822-scaled.jpg';
import img3861 from '../assets/images/IMG_3861-scaled.jpg';
import img7834 from '../assets/images/MGJ_7834-scaled.jpg';
import img2850 from '../assets/images/IMG_2850-scaled.jpg';
import imgAmbianceHorizontal from '../assets/images/ambiance-horizontal.jpg';

const imageFileMap = {
  'ambiance-horizontal.jpg': imgAmbianceHorizontal,
  'pera-landing-1.png': imgPeraLanding1,
  'IMG_3145-scaled.png': img3145,
  'IMG_2829-2-scaled.png': img2829,
  'pera-landing.png': imgPeraLanding,
  'IMG_3795-scaled.jpg': img3795,
  'pera-landing-2.png': imgPeraLanding2,
  'IMG_3800-scaled.jpg': img3800,
  'IMG_1747-scaled.jpg': img1747,
  'IMG_1441-scaled.jpg': img1441,
  'IMG_1437-scaled.jpg': img1437,
  'IMG_1177.png': img1177,
  'MGJ_7786-scaled.jpg': img7786,
  'pera-landing-3.png': imgPeraLanding3,
  'IMG_1765-scaled.jpg': img1765,
  'IMG_1772-scaled.jpg': img1772,
  'IMG_3862-scaled.jpg': img3862,
  'MGJ_7759-scaled.jpg': img7759,
  'IMG_1510-scaled.jpg': img1510,
  'IMG_1635.jpg': img1635,
  'MGJ_7810-1-scaled.jpg': img7810,
  'MGJ_7822-scaled.jpg': img7822,
  'IMG_3861-scaled.jpg': img3861,
  'MGJ_7834-scaled.jpg': img7834,
  'IMG_2850-scaled.jpg': img2850
};

export default function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filteredGallery =
    selectedFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredGallery.length]);

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const prevLightbox = () => {
    setActiveLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredGallery.length - 1));
  };

  const nextLightbox = () => {
    setActiveLightboxIndex((prev) => (prev < filteredGallery.length - 1 ? prev + 1 : 0));
  };

  const getCategoryIcon = (catId) => {
    switch (catId) {
      case 'dishes':
        return <Utensils size={14} style={{ marginRight: '6px' }} />;
      case 'ambiance':
        return <Landmark size={14} style={{ marginRight: '6px' }} />;
      case 'drinks':
        return <GlassWater size={14} style={{ marginRight: '6px' }} />;
      default:
        return <Camera size={14} style={{ marginRight: '6px' }} />;
    }
  };

  const getItemCount = (catId) => {
    if (catId === 'all') return galleryItems.length;
    return galleryItems.filter((item) => item.category === catId).length;
  };

  return (
    <section id="gallery" style={{ padding: '5.5rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag">
            <Camera size={14} />
            <span>Visual Tour</span>
          </div>
          <h2 className="section-title">Palace Gallery & Moments</h2>
          <p className="section-desc" style={{ margin: '0 auto', maxWidth: '720px' }}>
            A curated visual celebration of Pera Palace Ottoman — from 15th-century imperial dishes
            and hand-rolled pistachio baklava to our illuminated palace chandelier and bar lounge.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '2.75rem'
          }}
        >
          {galleryCategories.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`menu-tab-btn ${selectedFilter === f.id ? 'active' : ''}`}
              style={{
                fontSize: '0.88rem',
                padding: '0.65rem 1.35rem',
                display: 'inline-flex',
                alignItems: 'center',
                borderRadius: '50px',
                transition: 'all 0.3s ease'
              }}
            >
              {getCategoryIcon(f.id)}
              <span>{f.label}</span>
              <span
                style={{
                  marginLeft: '8px',
                  fontSize: '0.75rem',
                  padding: '2px 7px',
                  borderRadius: '10px',
                  background: selectedFilter === f.id ? 'rgba(255,255,255,0.2)' : 'rgba(212,175,55,0.15)',
                  color: selectedFilter === f.id ? '#FFF' : 'var(--gold)'
                }}
              >
                {getItemCount(f.id)}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredGallery.map((item, idx) => {
            const imgSrc = imageFileMap[item.image] || imgPeraLanding;
            return (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => openLightbox(idx)}
                style={{ cursor: 'pointer' }}
              >
                <img src={imgSrc} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                      width: '100%'
                    }}
                  >
                    <div style={{ paddingRight: '0.75rem' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '0.68rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: 'var(--gold)',
                          fontWeight: '700',
                          marginBottom: '0.25rem'
                        }}
                      >
                        {item.category === 'dishes'
                          ? 'Imperial Dish'
                          : item.category === 'drinks'
                          ? 'Mixology & Bar'
                          : 'Palace Ambiance'}
                      </span>
                      <h4
                        style={{
                          fontFamily: 'var(--font-heading)',
                          color: '#FFF',
                          fontSize: '1.02rem',
                          fontWeight: '700',
                          lineHeight: '1.3',
                          marginBottom: '0.25rem'
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontSize: '0.78rem',
                          color: 'rgba(245, 230, 211, 0.85)',
                          lineHeight: '1.35',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <div
                      style={{
                        padding: '0.45rem',
                        borderRadius: '50%',
                        background: 'rgba(212,175,55,0.4)',
                        color: '#FFF',
                        flexShrink: 0,
                        backdropFilter: 'blur(4px)'
                      }}
                    >
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxIndex !== null && (
          <div className="modal-overlay" onClick={closeLightbox} style={{ zIndex: 9999 }}>
            <div
              style={{
                position: 'relative',
                maxWidth: '900px',
                width: '92vw',
                maxHeight: '92vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                style={{
                  position: 'absolute',
                  top: '-45px',
                  right: '0',
                  color: '#FFF',
                  padding: '0.5rem',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(212,175,55,0.4)',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                aria-label="Close lightbox"
              >
                <X size={22} />
              </button>

              {/* Prev / Next buttons */}
              <button
                onClick={prevLightbox}
                style={{
                  position: 'absolute',
                  left: '-55px',
                  top: '45%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.7)',
                  border: '1px solid var(--border-gold)',
                  color: '#FFF',
                  borderRadius: '50%',
                  width: '46px',
                  height: '46px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={26} />
              </button>

              <button
                onClick={nextLightbox}
                style={{
                  position: 'absolute',
                  right: '-55px',
                  top: '45%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.7)',
                  border: '1px solid var(--border-gold)',
                  color: '#FFF',
                  borderRadius: '50%',
                  width: '46px',
                  height: '46px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                }}
                aria-label="Next image"
              >
                <ChevronRight size={26} />
              </button>

              {/* Image Frame */}
              <div
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-gold)',
                  background: '#090707',
                  maxHeight: '72vh',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.8)'
                }}
              >
                <img
                  src={imageFileMap[filteredGallery[activeLightboxIndex].image] || imgPeraLanding}
                  alt={filteredGallery[activeLightboxIndex].title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>

              {/* Caption & Counter */}
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '1.1rem',
                  color: '#FFF',
                  maxWidth: '750px',
                  padding: '0 1rem'
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: '0.72rem',
                    color: 'var(--gold)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '0.3rem',
                    fontWeight: '600'
                  }}
                >
                  Photo {activeLightboxIndex + 1} of {filteredGallery.length} •{' '}
                  {filteredGallery[activeLightboxIndex].category === 'dishes'
                    ? 'Imperial Dish & Dessert'
                    : filteredGallery[activeLightboxIndex].category === 'drinks'
                    ? 'Mixology & Wine'
                    : 'Palace Ambiance & Heritage'}
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.28rem',
                    color: '#FFF',
                    marginBottom: '0.35rem',
                    fontWeight: '700'
                  }}
                >
                  {filteredGallery[activeLightboxIndex].title}
                </h4>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.45'
                  }}
                >
                  {filteredGallery[activeLightboxIndex].desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
