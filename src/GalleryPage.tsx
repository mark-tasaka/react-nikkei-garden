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
import spring2026_14 from './img/gallery/galleryJune2026/spring2026-14.jpeg';

import panel2026_1 from './img/gallery/galleryPanels2026/panel2026-1.jpeg';
import panel2026_2 from './img/gallery/galleryPanels2026/panel2026-2.jpeg';
import panel2026_3 from './img/gallery/galleryPanels2026/panel2026-3.jpeg';
import panel2026_4 from './img/gallery/galleryPanels2026/panel2026-4.jpeg';
import panel2026_5 from './img/gallery/galleryPanels2026/panel2026-5.jpeg';
import panel2026_6 from './img/gallery/galleryPanels2026/panel2026-6.jpeg';
import panel2026_7 from './img/gallery/galleryPanels2026/panel2026-7.jpeg';

import misc_1  from './img/gallery/misc/ohairi-park-1.JPG';
import misc_2  from './img/gallery/misc/ohairi-park-2.JPG';
import misc_3  from './img/gallery/misc/building2.png';
import misc_4  from './img/gallery/misc/building2back.png';
import misc_5  from './img/gallery/misc/building4.JPG';
import misc_6  from './img/gallery/misc/nikkeiWomen.jpg';
import misc_7  from './img/gallery/misc/Sacred_Heart.jpg';
import misc_8  from './img/gallery/misc/firehall.jpg';
import misc_9  from './img/gallery/misc/building5.JPG';
import misc_10 from './img/gallery/misc/building7.JPG';
import misc_11 from './img/gallery/misc/building11.JPG';
import misc_12 from './img/gallery/misc/greenwood-1.jpg';
import misc_13 from './img/gallery/misc/greenwood-2.jpg';
import misc_14 from './img/gallery/misc/greenwood-3.jpg';
import misc_15 from './img/gallery/misc/greenwood-4.jpg';
import misc_16 from './img/gallery/misc/greenwood-5.jpg';
import misc_17 from './img/gallery/misc/greenwood-6.jpg';
import misc_18 from './img/gallery/misc/train-ride.jpg';
import misc_19 from './img/gallery/misc/welcome.jpg';
import misc_20  from './img/gallery/misc/ohairi-park-3.JPG';
import misc_21  from './img/gallery/misc/ohairi-park-4.JPG';
import misc_22  from './img/gallery/misc/ohairi-park-5.JPG';

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
  { src: panel2026_7, alt: 'Panels June 2026, Photo 7' },
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
  { src: spring2026_14, alt: 'Spring Time June 2026 (Photo taken by Chuck Tasaka), Photo 14' },
];

const MISC_IMAGES: GalleryImage[] = [
  {
    src: misc_1,
    alt: 'Ohairi Park1',
    caption: <>Ohairi Park</>,
  },
  {
    src: misc_2,
    alt: 'Ohairi Park Flooding',
    caption: <>Ohairi Park Flooding 2018</>,
  },
  {
    src: misc_20,
    alt: 'Ohairi Park Flooding',
    caption: <>Ohairi Park</>,
  },
  {
    src: misc_21,
    alt: 'Ohairi Park Flooding',
    caption: <>Ohairi Park False Brook (now filled)</>,
  },
  {
    src: misc_22,
    alt: 'Ohairi Park Flooding',
    caption: <>Ohairi Park</>,
  },
];

const BW_IMAGES: GalleryImage[] = [
  {
    src: misc_3,
    alt: 'Building #2',
    caption: (
      <>
        #2 Building was formerly Armstrong Hotel. During the internment part of the building was the
        hospital and the rest were accommodation for the new arrivals. Notice the clothesline.
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
  {
    src: misc_4,
    alt: 'Building #2',
    caption: (
      <>
        The back view of the #2 Building.
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
  {
    src: misc_5,
    alt: 'Building #4',
    caption: (
      <>
        #4 Building was the tallest building with the turret. It was Rendell Block to the locals.
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
  {
    src: misc_9,
    alt: 'Building #3',
    caption: (
      <>
        #3 Building (now McArthur Centre)
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
  {
    src: misc_10,
    alt: 'Building #1',
    caption: (
      <>
        #1 Building where about 90 people were squeezed on each floor with one stove and one toilet.
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
  {
    src: misc_11,
    alt: 'Building #11',
    caption: (
      <>
        #5 Building (left) - Miller Block, #7 Building (middle), #11 Building (right) - Mellor Block. 
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
  {
    src: misc_12,
    alt: 'Greenwood 1942',
    caption: (
      <>
        Greenwood 1942: the first days of arriving in Greenwood, getting off the train, walking to
        the buildings that JCs were designated
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
  {
    src: misc_13,
    alt: 'Greenwood 1942',
    caption: (
      <>
        Greenwood 1942: the first days of arriving in Greenwood, getting off the train, walking to
        the buildings that JCs were designated
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
  {
    src: misc_14,
    alt: 'Greenwood 1942',
    caption: (
      <>
        Greenwood 1942: the first days of arriving in Greenwood, getting off the train, walking to
        the buildings that JCs were designated
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
  {
    src: misc_6,
    alt: 'Ladies working at BC Security Commission office.',
    caption: <>Ladies working at BC Security Commission office.
        <br /><br />
        Photo courtesy of Greenwood Museum</>,
  },
  {
    src: misc_7,
    alt: 'Sacred Heart Catholic Church',
    caption: (
      <>Sacred Heart Catholic Church.  Built in 1898, but officially opened in 1901 where many Japanese Canadian Catholics attended Mass.</>
    ),
  },
  {
    src: misc_8,
    alt: '#10 Building',
    caption: <>#10 Building
        <br /><br />
        Photo courtesy of Eiko Kimoto</>,
  },
];

const BW_IMAGES_2: GalleryImage[] = [
  {
    src: misc_15,
    alt: 'Greenwood 1942',
    caption: (
      <>
        Greenwood 1942: the first days of arriving in Greenwood, getting off the train, walking to
        the buildings that JCs were designated
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
  {
    src: misc_16,
    alt: 'Greenwood 1942',
    caption: (
      <>
        Greenwood 1942: the first days of arriving in Greenwood, getting off the train, walking to
        the buildings that JCs were designated
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
  {
    src: misc_17,
    alt: 'Fr. Benedict and Mayor McArthur',
    caption: <>Father Benedict (left) and Mayor W.E. McArthur Sr (right)
        <br /><br />
        Photo courtesy of Greenwood Museum</>,
  },
  {
    src: misc_18,
    alt: 'Train ride to Greenwood',
    caption: <>Train ride to Greenwood (1942)
        <br /><br />
        Photo courtesy of Greenwood Museum</>,
  },
  {
    src: misc_19,
    alt: 'Getting off the train and meeting a welcoming group from Mayor McArthur and Franciscan Sisters.',
    caption: (
      <>Getting off the train and meeting a welcoming group from Mayor McArthur and Franciscan Sisters. (1942)
        <br /><br />
        Photo courtesy of Greenwood Museum</>
    ),
  },
];

// ── Carousel ────────────────────────────────────────────────────────────────

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

// ── GalleryPage ─────────────────────────────────────────────────────────────

type GalleryFilter = 'all' | 'nikkei' | 'historical' | 'ohairi';

const FILTER_BUTTONS: { key: GalleryFilter; label: string }[] = [
  { key: 'all',        label: 'All' },
  { key: 'nikkei',     label: 'Nikkei Legacy Park' },
  { key: 'historical', label: 'Historical Photos' },
  { key: 'ohairi',     label: 'Ohairi Park' },
];

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<GalleryFilter>('all');

  return (
    <main className="gallery-page">

      {/* ── Filter buttons ── */}
      <div className="gallery-filter-wrapper">
        {FILTER_BUTTONS.map(({ key, label }) => (
          <button
            key={key}
            className={`gallery-filter-btn${filter === key || filter === 'all' ? ' gallery-filter-btn--active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {(filter === 'all' || filter === 'nikkei') && (
        <>
          <Carousel images={PANEL_IMAGES} title="Nikkei Legacy Park Panels" />
          <Carousel images={JUNE_IMAGES}  title="Spring Time in the Park: June 2026" />
          <Carousel images={MAY_IMAGES}   title="Nikkei Legacy Park: May 2026" />
        </>
      )}
      {(filter === 'all' || filter === 'historical') && (
        <>
          <Carousel images={BW_IMAGES}   title="Greenwood Historical Photos: Gallery 1" />
          <Carousel images={BW_IMAGES_2} title="Greenwood Historical Photos: Gallery 2" />
        </>
      )}
      {(filter === 'all' || filter === 'ohairi') && (
        <Carousel images={MISC_IMAGES} title="A Look Back: Ohairi Park (Pre-2014)" />
      )}

    </main>
  );
};

export default GalleryPage;