// src/GalleryPage.tsx
import React, { useState, useCallback } from 'react';
import './css/Gallery.css';

import img1  from './img/galleryMay2026/nikkeiGarden1.JPG';
import img2  from './img/galleryMay2026/nikkeiGarden2.JPG';
import img3  from './img/galleryMay2026/nikkeiGarden3.JPG';
import img4  from './img/galleryMay2026/nikkeiGarden4.JPG';
import img5  from './img/galleryMay2026/nikkeiGarden5.JPG';
import img6  from './img/galleryMay2026/nikkeiGarden6.JPG';
import img7  from './img/galleryMay2026/nikkeiGarden7.JPG';
import img8  from './img/galleryMay2026/nikkeiGarden8.JPG';
import img9  from './img/galleryMay2026/nikkeiGarden9.JPG';
import img10 from './img/galleryMay2026/nikkeiGarden10.JPG';
import img11 from './img/galleryMay2026/nikkeiGarden11.JPG';
import img12 from './img/galleryMay2026/nikkeiGarden12.JPG';

interface GalleryImage {
  src: string;
  alt: string;
}

const IMAGES: GalleryImage[] = [
  { src: img1,  alt: 'Nikkei Legacy Park – May 2026, Photo 1'  },
  { src: img2,  alt: 'Nikkei Legacy Park – May 2026, Photo 2'  },
  { src: img3,  alt: 'Nikkei Legacy Park – May 2026, Photo 3'  },
  { src: img4,  alt: 'Nikkei Legacy Park – May 2026, Photo 4'  },
  { src: img5,  alt: 'Nikkei Legacy Park – May 2026, Photo 5'  },
  { src: img6,  alt: 'Nikkei Legacy Park – May 2026, Photo 6'  },
  { src: img7,  alt: 'Nikkei Legacy Park – May 2026, Photo 7'  },
  { src: img8,  alt: 'Nikkei Legacy Park – May 2026, Photo 8'  },
  { src: img9,  alt: 'Nikkei Legacy Park – May 2026, Photo 9'  },
  { src: img10, alt: 'Nikkei Legacy Park – May 2026, Photo 10' },
  { src: img11, alt: 'Nikkei Legacy Park – May 2026, Photo 11' },
  { src: img12, alt: 'Nikkei Legacy Park – May 2026, Photo 12' },
];

const GalleryPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const goPrev = useCallback(() => {
    setActiveIndex(prev => (prev - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % IMAGES.length);
  }, []);

  const openInNewTab = useCallback(() => {
    window.open(IMAGES[activeIndex].src, '_blank', 'noopener,noreferrer');
  }, [activeIndex]);

  return (
    <main className="gallery-page">
      <h1 className="gallery-title">Nikkei Legacy Park: May 2026</h1>

      <div className="gallery-carousel" aria-label="Photo gallery carousel">

        {/* ── Slides ── */}
        <div className="gallery-track">
          {IMAGES.map(({ src, alt }, i) => (
            <img
              key={i}
              src={src}
              alt={alt}
              className={`gallery-slide${i === activeIndex ? ' gallery-slide--active' : ''}`}
              draggable={false}
            />
          ))}

          {/* ── Prev / Next arrows ── */}
          <button
            className="gallery-arrow gallery-arrow--prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            &#8249;
          </button>
          <button
            className="gallery-arrow gallery-arrow--next"
            onClick={goNext}
            aria-label="Next image"
          >
            &#8250;
          </button>

          {/* ── Open in new tab ── */}
          <button
            className="gallery-open-btn"
            onClick={openInNewTab}
            aria-label="Open image in new tab"
            title="Open in new tab"
          >
            &#x2197;
          </button>

          {/* ── Dot Navigation ── */}
          <div className="hero-dots" role="tablist" aria-label="Gallery navigation">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to photo ${i + 1}`}
                className={`hero-dot${i === activeIndex ? ' hero-dot--active' : ''}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default GalleryPage;
