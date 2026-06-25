'use client';

import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    src: '/images/homepage/lab-banner.jpg',
    alt: 'Henghuang Trading - Peptide Manufacturing Facility',
  },
  {
    src: '/images/homepage/851782239076_.pic_hd.jpg',
    alt: 'Peptide research laboratory',
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
        <div className="container homepage-hero-content" />
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
