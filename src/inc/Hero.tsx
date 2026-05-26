// src/inc/Hero.tsx
import React, { useState, useEffect, useCallback } from 'react';
import './css/Hero.css';

import slide1  from './img/hero/HeroSlide1.jpg';
import slide2  from './img/hero/HeroSlide2.jpg';
import slide3  from './img/hero/HeroSlide3.jpg';
import slide4  from './img/hero/HeroSlide4.jpg';
import slide5  from './img/hero/HeroSlide5.jpg';
import slide6  from './img/hero/HeroSlide6.jpg';
import slide7  from './img/hero/HeroSlide7.jpg';
import slide8  from './img/hero/HeroSlide8.jpg';
import slide9  from './img/hero/HeroSlide9.jpg';
import slide10 from './img/hero/HeroSlide10.jpg';
import slide11 from './img/hero/HeroSlide11.jpg';
import slide12 from './img/hero/HeroSlide12.jpg';

interface Slide {
  src: string;
  alt: string;
}

const SLIDES: Slide[] = [
  { src: slide1,  alt: 'Nikkei Legacy Park – Slide 1'  },
  { src: slide2,  alt: 'Nikkei Legacy Park – Slide 2'  },
  { src: slide3,  alt: 'Nikkei Legacy Park – Slide 3'  },
  { src: slide4,  alt: 'Nikkei Legacy Park – Slide 4'  },
  { src: slide5,  alt: 'Nikkei Legacy Park – Slide 5'  },
  { src: slide6,  alt: 'Nikkei Legacy Park – Slide 6'  },
  { src: slide7,  alt: 'Nikkei Legacy Park – Slide 7'  },
  { src: slide8,  alt: 'Nikkei Legacy Park – Slide 8'  },
  { src: slide9,  alt: 'Nikkei Legacy Park – Slide 9'  },
  { src: slide10, alt: 'Nikkei Legacy Park – Slide 10' },
  { src: slide11, alt: 'Nikkei Legacy Park – Slide 11' },
  { src: slide12, alt: 'Nikkei Legacy Park – Slide 12' },
];

const SLIDE_INTERVAL_MS = 6000;

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const advance = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section className="hero" aria-label="Featured slideshow">
      <div className="hero-track">

        {SLIDES.map(({ src, alt }, i) => (
          <img
            key={i}
            src={src}
            alt={alt}
            className={`hero-slide${i === activeIndex ? ' hero-slide--active' : ''}`}
            draggable={false}
          />
        ))}

        {/* ── CTA Buttons ── */}
        <div className="hero-cta">
          <a
            href="#about"
            className="hero-btn"
            aria-label="About the Nikkei Legacy Park"
          >
            About
          </a>
          <a
            href="https://maps.google.com/?q=Nikkei+Legacy+Garden+Greenwood+BC"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
            aria-label="Find us on Google Maps"
          >
            Find Us
          </a>
        </div>

        {/* ── Dot Navigation ── */}
        <div className="hero-dots" role="tablist" aria-label="Slideshow navigation">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to slide ${i + 1}`}
              className={`hero-dot${i === activeIndex ? ' hero-dot--active' : ''}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
