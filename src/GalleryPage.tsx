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
import misc_23  from './img/gallery/misc/FatherKatsuno.jpg';
import misc_24  from './img/gallery/misc/GHSstudents46.jpg';
import misc_25  from './img/gallery/misc/nikkeiGirls.jpg';
import misc_26  from './img/gallery/misc/GreenwoodMothers.jpg';
import misc_27  from './img/gallery/misc/rcmp.jpg';
import misc_28  from './img/gallery/misc/Class1940.jpg';
import misc_29  from './img/gallery/misc/Greenwood1942-43IwasakiandYuasa.jpg';
import misc_30  from './img/gallery/misc/Greenwoodboys40s.jpg';
import misc_31  from './img/gallery/misc/GreenwoodUnitedChurchGroup9.jpg';
import misc_32  from './img/gallery/misc/HDSHSGrads.jpg';
import misc_33  from './img/gallery/misc/wedding.jpg';

import restoration1  from './img/gallery/restoration/restoration1.JPG';
import restoration2  from './img/gallery/restoration/restoration2.JPG';
import restoration3  from './img/gallery/restoration/restoration3.JPG';
import restoration4  from './img/gallery/restoration/restoration4.JPG';
import restoration5  from './img/gallery/restoration/restoration5.JPG';
import restoration6  from './img/gallery/restoration/restoration6.JPG';
import restoration7  from './img/gallery/restoration/restoration7.JPG';

import housing1943_1  from './img/gallery/1943Housing/housing1943_1.jpeg';
import housing1943_2  from './img/gallery/1943Housing/housing1943_2.jpeg';
import housing1943_3  from './img/gallery/1943Housing/housing1943_3.jpeg';
import housing1943_4  from './img/gallery/1943Housing/housing1943_4.jpeg';

import labourDay_1  from './img/gallery/labourDay/labourDay1.jpg';
import labourDay_2  from './img/gallery/labourDay/labourDay2.jpg';
import labourDay_3  from './img/gallery/labourDay/labourDay3.jpg';
import labourDay_4  from './img/gallery/labourDay/labourDay4.jpg';
import labourDay_5  from './img/gallery/labourDay/labourDay5.jpg';
import labourDay_6  from './img/gallery/labourDay/labourDay6.jpg';
import labourDay_7  from './img/gallery/labourDay/labourDay7.jpg';
import labourDay_8  from './img/gallery/labourDay/labourDay8.jpg';
import labourDay_9  from './img/gallery/labourDay/labourDay9.jpg';
import labourDay_10  from './img/gallery/labourDay/labourDay10.jpg';

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
    alt: 'Ohairi Park',
    caption: <>Ohairi Park</>,
  },
  {
    src: misc_2,
    alt: 'Ohairi Park Flooding',
    caption: <>Ohairi Park Flooding, April to May 2018</>,
  },
  {
    src: misc_20,
    alt: 'Ohairi Park',
    caption: <>Ohairi Park with the original red bridge and picnic hut with no walls.</>,
  },
  {
    src: misc_21,
    alt: 'Ohairi Park',
    caption: <>Faux creek</>,
  },
  {
    src: misc_22,
    alt: 'Ohairi Park',
    caption: <>Walls added in 2015</>,
  },
];

const RESTORATION_IMAGES: GalleryImage[] = [
  {
    src: restoration1,
    alt: 'Restoration Image 1',
    caption: <>Making of Nikkei Legacy Park front platform. Framing done by Greenwood Yardwork (2018)</>,
  },
  {
    src: restoration2,
    alt: 'Restoration Image 2',
    caption: <>Public Works pouring concrete (2018)</>,
  },
  {
    src: restoration3,
    alt: 'Restoration Image 3',
    caption: <>Making of Nikkei Legacy Park front platform. Framing done by Greenwood Yardwork (2018)</>,
  },
  {
    src: restoration4,
    alt: 'Restoration Image 4',
    caption: <>2018 ribbon-cutting for the new Nikkei Legacy Park.   Left to right: CAO Wendy Higashi, Everett Baker Grand Forks, MLA Katrina Conroy and Mayor Ed Smith.</>,
  },
  {
    src: restoration6,
    alt: 'Restoration Image 6',
    caption: <>Prepping to lay aggregates (2018).</>,
  },
  {
    src: restoration5,
    alt: 'Restoration Image 5',
    caption: <>The front platform taking shape (2018).</>,
  },
  {
    src: restoration7,
    alt: 'Restoration Image 7',
    caption: <>2019.</>,
  },
];

const BUILDING_IMAGES: GalleryImage[] = [
  {
    src: misc_10,
    alt: 'Building #1',
    caption: (
      <>
        #1 Building on the right, next is Windsor Hotel and Guess Block (Greenwood Grocery) and now Copper Eagle. #1 Building is where about 90 people were squeezed on each floor with one stove and one toilet.
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
  {
    src: misc_3,
    alt: 'Building #2',
    caption: (
      <>
        #2 Building was formerly Armstrong Hotel. During the internment part of the building was the
        hospital and the rest were accommodation for the new arrivals. In the 50’s became extra classrooms when Sacred Heart School closed down in 1954.
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
    src: misc_9,
    alt: 'Building #3',
    caption: (
      <>
        #3 Building for the Japanese Canadians became McArthur Centre.
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
        #4 Building for the Japanese Canadians and Rendell Block to the locals (#8 and #9 Buildings were beside #4 Building).
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
  {
    src: misc_11,
    alt: 'Buildings 5, 7 and 11',
    caption: (
      <>
        #5 Building (left) - Miller Block, #7 Building (middle), #11 Building (right) - Mellor Block. 
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
  {
    src: misc_8,
    alt: '#10 Building',
    caption: <>#10 building that later became primary classroom, boxing gym and presently the Greenwood Volunteer Fire Dept.
        <br /><br />
        Photo courtesy of Eiko Kimoto</>,
  },
  {
    src: misc_7,
    alt: 'Sacred Heart Catholic Church',
    caption: (
      <>Sacred Heart Catholic Church.  Built in 1898, but officially opened in 1901 where many Japanese Canadian Catholics attended Mass.</>
    ),
  },
];

const BW_IMAGES: GalleryImage[] = [
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
];

const BW_IMAGES_2: GalleryImage[] = [
  {
    src: misc_17,
    alt: 'Fr. Benedict and Mayor McArthur',
    caption: <>Father Benedict Quigley (left) and Mayor W.E. McArthur Sr (right).  Responsible for making Greenwood the first internment site
        <br /><br />
        Photo courtesy of Greenwood Museum</>,
  },
  {
    src: misc_18,
    alt: 'Train ride to Greenwood',
    caption: <>Train ride to Greenwood (1942). Little boy in the front is Isao Mori
        <br /><br />
        Photo courtesy of Greenwood Museum</>,
  },
  {
    src: misc_19,
    alt: 'Getting off the train and meeting a welcoming group from Mayor McArthur and Franciscan Sisters.',
    caption: (
      <>Sister Eugenia and Sister Jerome were at the train station  to greet their parishioners.
        <br /><br />
        Photo courtesy of Greenwood Museum</>
    ),
  },
  {
    src: misc_16,
    alt: 'Greenwood 1942',
    caption: (
      <>
        Greenwood 1942 First day
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
  {
    src: misc_15,
    alt: 'Greenwood 1942',
    caption: (
      <>
        RCMP and BCSC supervising the arrival of the Japanese Canadians.
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
    {
      src: misc_24,
      alt: 'GHS students in 1946',
      caption: (
        <>Greenwood Public High School students circa 1946-47
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
];


const INTERNEES_IMAGES: GalleryImage[] = [
    {
      src: misc_23,
      alt: 'Father Katsuno',
      caption: (
        <>Father Peter Katsuno (Sacred Heart High School in the background)
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: misc_25,
      alt: 'Nikkei girls',
      caption: (
        <>Young Nisei girls hiking up to the smelter for a picnic.
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: misc_26,
      alt: 'Greenwood mothers',
      caption: (
        <>Greenwood mothers 1940s
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: misc_27,
      alt: 'RCMP',
      caption: (
        <>The police and Mrs. Fumi  Matsubuchi.
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: misc_28,
      alt: 'Embroidery Club',
      caption: (
        <>Greenwood Embroidery Club 1940s
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: misc_29,
      alt: 'Iwasaki and Yuasa ladies.',
      caption: (
        <>Iwasaki and Yuasa ladies.
          <br /><br />
          Photo courtesy of Moira Matsubuchi-Shaw</>
      ),
    },
    {
      src: misc_30,
      alt: 'Greenwood boys',
      caption: (
        <>Teenage JC and local boys
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: misc_31,
      alt: 'United Church',
      caption: (
        <>Unitd Church group in Greenwood, 1940s
          <br /><br />
          Photo courtesy of United Church of Canada</>
      ),
    },
    {
      src: misc_32,
      alt: 'Sacred Heart School Grade 8 grad class 1945-46',
      caption: (
        <>Sacred Heart School Grade 8 grad class 1945-46
          <br /><br />
          Photo courtesy of Francis Nakagawa</>
      ),
    },
    {
      src: misc_33,
      alt: 'Fumi Nasu’s wedding with Maid of Honour Mitsi Sasaki',
      caption: (
        <>Fumi Nasu’s wedding with Maid of Honour Mitsi Sasaki
          <br /><br />
          Photo courtesy of Mytsuu Fugeta</>
      ),
    },
];


const HOUSING_IMAGES: GalleryImage[] = [
    {
      src: housing1943_4,
      alt: '1943 census',
      caption: (
        <>Map on the Wall.
          <br /><br />
          Donated by Greenwood Museum with grant from JCLS</>
      ),
    },
    {
      src: housing1943_1,
      alt: '1943 Map',
      caption: (
        <>Map with family names pasted.
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: housing1943_2,
      alt: '1943 census',
      // caption: (
      //   <>1943 Japanese Canadian Housing census of Greenwood City.  Some stayed in “self-supporting” houses shared by three or four families.
      //     <br /><br />
      //     Photo courtesy of Greenwood Museum</>
      // ),
    },
    {
      src: housing1943_3,
      alt: '1943 census',
      // caption: (
      //   <>1943 Japanese Canadian Housing census of Greenwood City.  Some stayed in “self-supporting” houses shared by three or four families.
      //     <br /><br />
      //     Photo courtesy of Greenwood Museum</>
      // ),
    },
];

const LAOBUR_DAY_IMAGES: GalleryImage[] = [
    {
      src: labourDay_1,
      alt: 'Labour Day 1940s',
      caption: (
        <>Mayor McArthur asked Sacred Heart School parents and Sisters to participate in the annual local Labour Day celebration to “break the ice”.  It was a big success.
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: labourDay_2,
      alt: 'Labour Day 1940s',
      caption: (
        <>The beginning float entrance.  Notice Marion Maclean enjoyed being part of the Japanese Canadian float.
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: labourDay_3,
      alt: 'Labour Day 1940s',
      caption: (
        <>Labour Day parade in the 1940s.  
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: labourDay_4,
      alt: 'Labour Day 1940s',
      caption: (
        <>Sacred Heart School float representing the provinces of Canada.
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: labourDay_5,
      alt: 'Labour Day 1940s',
      caption: (
        <>CGIT United Church girls marching.
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: labourDay_7,
      alt: 'Labour Day 1940s',
      caption: (
        <>Labour Day parade was a big event in Greenwood. 
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: labourDay_6,
      alt: 'Labour Day 1940s',
      caption: (
        <>Sacred Heart School float.  
          <br /><br />
          Photo courtesy of Francis Nakagawa</>
      ),
    },
    {
      src: labourDay_8,
      alt: 'Labour Day 1940s',
      caption: (
        <>Japanese kimono was a crowd-pleaser. 
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: labourDay_9,
      alt: 'Labour Day 1940s',
      caption: (
        <>Sacred Heart School Kindergarden float.  
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: labourDay_10,
      alt: 'Labour Day 1940s',
      caption: (
        <>Japanese Canadian girls in tradtional Kimono   
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

type GalleryFilter = 'all' | 'nikkei' | 'historical' | 'restoration' | 'ohairi' ;

const FILTER_BUTTONS: { key: GalleryFilter; label: string }[] = [
  { key: 'all',        label: 'All' },
  { key: 'nikkei',     label: 'Nikkei Legacy Park' },
  { key: 'historical', label: 'Historical Photos' },
  { key: 'restoration', label: 'Restoration' },
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
          <Carousel images={BUILDING_IMAGES}   title="HistoricalBuildings" />
          <Carousel images={BW_IMAGES_2} title="Arrival of Japanese Canadians to Greenwood: 1942" />
          <Carousel images={BW_IMAGES}   title="Historical Photos" />
          <Carousel images={INTERNEES_IMAGES} title="Early Internees 1942-45" />
          <Carousel images={HOUSING_IMAGES} title="1943 Japanese Canadian Housing" />
          <Carousel images={LAOBUR_DAY_IMAGES} title="Labour Day Parades 1940s" />
        </>
      )}
      {(filter === 'all' || filter === 'restoration') && (
        <Carousel images={RESTORATION_IMAGES} title="Restoration and Renovation: 2016-2018" />
      )}
      {(filter === 'all' || filter === 'ohairi') && (
        <Carousel images={MISC_IMAGES} title="A Look Back: Ohairi Park (Pre-2014)" />
      )}

    </main>
  );
};

export default GalleryPage;