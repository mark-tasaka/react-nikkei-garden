// src/GalleryPage.tsx
import React, { useState, useCallback } from 'react';
import './css/Gallery.css';

import img1  from './img/gallery/galleryMay2026/nikkeiGarden1.JPG';
import img2  from './img/gallery/galleryMay2026/nikkeiGarden2.JPG';
import img3  from './img/gallery/galleryMay2026/nikkeiGarden3.JPG';
import img4  from './img/gallery/galleryMay2026/nikkeiGarden4.JPG';
import img5  from './img/gallery/galleryMay2026/nikkeiGarden5.JPG';
import img6  from './img/gallery/galleryMay2026/nikkeiGarden6.JPG';
import img7  from './img/gallery/galleryMay2026/nikkeiGarden7.JPG';
import img8  from './img/gallery/galleryMay2026/nikkeiGarden8.JPG';
import img9  from './img/gallery/galleryMay2026/nikkeiGarden9.JPG';
import img10 from './img/gallery/galleryMay2026/nikkeiGarden10.JPG';
import img11 from './img/gallery/galleryMay2026/nikkeiGarden11.JPG';
import img12 from './img/gallery/galleryMay2026/nikkeiGarden12.JPG';

import spring2026_1  from './img/gallery/galleryJune2026/spring2026-1.jpeg';
import spring2026_2  from './img/gallery/galleryJune2026/spring2026-2.jpeg';
import spring2026_3  from './img/gallery/galleryJune2026/spring2026-3.jpeg';
import spring2026_4  from './img/gallery/galleryJune2026/spring2026-4.jpeg';
import spring2026_5  from './img/gallery/galleryJune2026/spring2026-5.jpeg';
import spring2026_6  from './img/gallery/galleryJune2026/spring2026-6.jpeg';
import spring2026_7  from './img/gallery/galleryJune2026/spring2026-7.jpeg';
import spring2026_8  from './img/gallery/galleryJune2026/spring2026-8.jpeg';
import spring2026_9  from './img/gallery/galleryJune2026/spring2026-9.jpeg';
import spring2026_10 from './img/gallery/galleryJune2026/spring2026-10.jpeg';
import spring2026_11 from './img/gallery/galleryJune2026/spring2026-11.jpeg';
import spring2026_12 from './img/gallery/galleryJune2026/spring2026-12.jpeg';
import spring2026_13 from './img/gallery/galleryJune2026/spring2026-13.jpeg';

import panel2026_1 from './img/gallery/galleryPanels2026/panel2026-1.jpeg';
import panel2026_2 from './img/gallery/galleryPanels2026/panel2026-2.jpeg';
import panel2026_3 from './img/gallery/galleryPanels2026/panel2026-3.jpeg';
import panel2026_4 from './img/gallery/galleryPanels2026/panel2026-4.jpeg';
import panel2026_5 from './img/gallery/galleryPanels2026/panel2026-5.jpeg';
import panel2026_6 from './img/gallery/galleryPanels2026/panel2026-6.jpeg';

import misc_1 from './img/gallery/misc/ohairi-park-1.JPG';
import misc_2 from './img/gallery/misc/ohairi-park-2.JPG';
import misc_3 from './img/gallery/misc/building2.png';
import misc_4 from './img/gallery/misc/building2back.png';
import misc_5 from './img/gallery/misc/building4.JPG';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: React.ReactNode; 
}

const PANEL_IMAGES: GalleryImage[] = [
  { src: panel2026_1, alt: 'Panels June 2026, Photo 1' },
  { src: panel2026_2, alt: 'Panels June 2026, Photo 2' },
  { src: panel2026_3, alt: 'Panels June 2026, Photo 3' },
  { src: panel2026_4, alt: 'Panels June 2026, Photo 4' },
  { src: panel2026_5, alt: 'Panels June 2026, Photo 5' },
  { src: panel2026_6, alt: 'Panels June 2026, Photo 6' },
];

const MAY_IMAGES: GalleryImage[] = [
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

const JUNE_IMAGES: GalleryImage[] = [
  { src: spring2026_1,  alt: 'Spring Time June 2026 (Photo taken by Chuck Tasaka), Photo 1'  },
  { src: spring2026_2,  alt: 'Spring Time June 2026 (Photo taken by Chuck Tasaka), Photo 2'  },
  { src: spring2026_3,  alt: 'Spring Time June 2026 (Photo taken by Chuck Tasaka), Photo 3'  },
  { src: spring2026_4,  alt: 'Spring Time June 2026 (Photo taken by Chuck Tasaka), Photo 4'  },
  { src: spring2026_5,  alt: 'Spring Time June 2026 (Photo taken by Chuck Tasaka), Photo 5'  },
  { src: spring2026_6,  alt: 'Spring Time June 2026 (Photo taken by Chuck Tasaka), Photo 6'  },
  { src: spring2026_7,  alt: 'Spring Time June 2026 (Photo taken by Chuck Tasaka), Photo 7'  },
  { src: spring2026_8,  alt: 'Spring Time June 2026 (Photo taken by Chuck Tasaka), Photo 8'  },
  { src: spring2026_9,  alt: 'Spring Time June 2026 (Photo taken by Chuck Tasaka), Photo 9'  },
  { src: spring2026_10, alt: 'Spring Time June 2026 (Photo taken by Chuck Tasaka), Photo 10' },
  { src: spring2026_11, alt: 'Spring Time June 2026 (Photo taken by Chuck Tasaka), Photo 11' },
  { src: spring2026_12, alt: 'Spring Time June 2026 (Photo taken by Chuck Tasaka), Photo 12' },
  { src: spring2026_13, alt: 'Spring Time June 2026 (Photo taken by Chuck Tasaka), Photo 13' },
];

const MISC_IMAGES: GalleryImage[] = [
  { 
    src: misc_1, 
    alt: 'Ohairi Park – Photo 1', 
    caption: (
      <>
        Ohairi Park
      </>
    )
  },
  { 
    src: misc_2, 
    alt: 'Ohairi Park – Photo 2', 
    caption: (
      <>
        Ohairi Park Flooding 2018
      </>
    )
  },
  { 
    src: misc_3, 
    alt: 'Building #2 – Photo 3', 
    caption: (
      <>
        #2 Building was formerly Armstrong Hotel. During the internment part of the building was the hospital and the rest were accommodation for the new arrivals. Notice the clothesline.
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    )
  },
  { 
    src: misc_4, 
    alt: 'Building #2 – Photo 4', 
    caption: (
      <>
        The back view of the #2 Building.
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    )
  },
  { 
    src: misc_5, 
    alt: 'Building #4 – Photo 5', 
    caption: (
      <>
        #4 Building was the tallest building with the turret.  It was Rendell Block to the locals.
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    )
  },
];

interface CarouselProps {
  images: GalleryImage[];
  title: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const goPrev = useCallback(() => {
    setActiveIndex(prev => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % images.length);
  }, [images.length]);

  const openInNewTab = useCallback(() => {
    window.open(images[activeIndex].src, '_blank', 'noopener,noreferrer');
  }, [activeIndex, images]);

  const activeCaption = images[activeIndex].caption;

  return (
    <section className="gallery-section">
      <h1 className="gallery-title">{title}</h1>
      <div className="gallery-carousel" aria-label="Photo gallery carousel">
        <div className="gallery-track">
          {images.map(({ src, alt }, i) => (
            <img
              key={i}
              src={src}
              alt={alt}
              className={`gallery-slide${i === activeIndex ? ' gallery-slide--active' : ''}`}
              draggable={false}
            />
          ))}

          {activeCaption && (
            <div className="gallery-caption" aria-live="polite">
              {activeCaption}
            </div>
          )}

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

          <button
            className="gallery-open-btn"
            onClick={openInNewTab}
            aria-label="Open image in new tab"
            title="Open in new tab"
          >
            &#x2197;
          </button>

          <div className="hero-dots" role="tablist" aria-label="Gallery navigation">
            {images.map((_, i) => (
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
    </section>
  );
};

const GalleryPage: React.FC = () => {
  return (
    <main className="gallery-page">
      <Carousel images={PANEL_IMAGES} title="Nikkei Legacy Park Panels" />
      <Carousel images={JUNE_IMAGES}  title="Spring Time in the Park: June 2026" />
      <Carousel images={MAY_IMAGES}   title="Nikkei Legacy Park: May 2026" />
      <Carousel images={MISC_IMAGES}  title="A Look Back: Ohairi Park (Pre-2014)" />
    </main>
  );
};

export default GalleryPage;