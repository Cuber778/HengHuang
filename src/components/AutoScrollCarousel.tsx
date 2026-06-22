'use client';

import { useState, useEffect, useRef } from 'react';

interface CarouselPhoto {
  src: string;
  alt: string;
}

interface AutoScrollCarouselProps {
  photos: CarouselPhoto[];
}

export default function AutoScrollCarousel({ photos }: AutoScrollCarouselProps) {
  const [current, setCurrent] = useState(0);
  const isPausedRef = useRef(false);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const tick = () => {
      if (!isPausedRef.current) {
        setCurrent((c) => (c + 1) % photos.length);
      }
    };
    const id = setInterval(tick, 3500);
    return () => clearInterval(id);
  }, [photos.length]);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  const pause = () => { isPausedRef.current = true; forceUpdate((n) => n + 1); };
  const resume = () => { isPausedRef.current = false; forceUpdate((n) => n + 1); };

  return (
    <div
      className="carousel-root"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <div className="carousel-track">
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className="carousel-slide"
            style={{
              opacity: i === current ? 1 : 0,
              pointerEvents: i === current ? 'auto' : 'none',
            }}
          >
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>

      <button className="carousel-btn carousel-btn-prev" onClick={prev} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15,18 9,12 15,6" />
        </svg>
      </button>
      <button className="carousel-btn carousel-btn-next" onClick={next} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9,18 15,12 9,6" />
        </svg>
      </button>

      <div className="carousel-dots">
        {photos.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>

      <div className="carousel-counter">
        {current + 1} / {photos.length}
      </div>
    </div>
  );
}
