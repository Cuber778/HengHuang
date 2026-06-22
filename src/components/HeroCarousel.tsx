'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const slides = [
  {
    src: '/images/homepage/promo-banner.jpg',
    alt: 'Peptide Products - Beauty & Wellness Solutions',
  },
  {
    src: '/images/homepage/lab-banner.jpg',
    alt: 'Henghuang Trading - Peptide Manufacturing Facility',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const isPausedRef = useRef(false);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const tick = () => {
      if (!isPausedRef.current) {
        setCurrent((c) => (c + 1) % slides.length);
      }
    };
    const id = setInterval(tick, 5000);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => setCurrent(i);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const pause = () => { isPausedRef.current = true; forceUpdate((n) => n + 1); };
  const resume = () => { isPausedRef.current = false; forceUpdate((n) => n + 1); };

  return (
    <div
      className="homepage-hero"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="hero-slide"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
        >
          <img src={slide.src} alt={slide.alt} />
        </div>
      ))}

      <div className="homepage-hero-overlay">
        <div className="container homepage-hero-content">
          <h1>Leading Peptide Supplier in China</h1>
          <p>GMP-compliant manufacturing &middot; Bulk &amp; custom synthesis &middot; 15+ years of excellence</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
            <Link href="/products" className="btn btn-primary">Shop Products</Link>
            <Link href="/quote" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.4)' }}>Get a Quote</Link>
          </div>
        </div>
      </div>

      <button className="hero-arrow hero-arrow-prev" onClick={prev} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15,18 9,12 15,6" />
        </svg>
      </button>
      <button className="hero-arrow hero-arrow-next" onClick={next} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9,18 15,12 9,6" />
        </svg>
      </button>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
