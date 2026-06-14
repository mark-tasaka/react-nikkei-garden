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
import misc_34  from './img/gallery/misc/hunterKendrickBuilding.jpg';
import misc_35  from './img/gallery/misc/iceRink.jpg';
import misc_36  from './img/gallery/misc/greenwoodSchool.jpg';
import misc_37  from './img/gallery/misc/sacredHeart.JPG';
import misc_38  from './img/gallery/misc/internees_1.JPG';
import misc_39  from './img/gallery/misc/internees_2.JPG';
import misc_40  from './img/gallery/misc/arrivals_1.jpg';
import misc_41  from './img/gallery/misc/arrivals_2.jpg';
import misc_42  from './img/gallery/misc/arrivals_3.jpg';
import misc_43  from './img/gallery/misc/arrivals_4.jpg';
import misc_44  from './img/gallery/misc/arrival_5.jpg';
import misc_45  from './img/gallery/misc/arrival_6.jpg';
import misc_46  from './img/gallery/misc/arrival_7.jpg';
import misc_47  from './img/gallery/misc/arrival_8.jpg';
import misc_48  from './img/gallery/misc/arrival_9.jpg';
import building2_2  from './img/gallery/misc/building2_2.jpg';
import building2_3  from './img/gallery/misc/building2_3.jpg';
import building2_4  from './img/gallery/misc/building2_4.jpg';

import restoration1  from './img/gallery/restoration/restoration1.JPG';
import restoration2  from './img/gallery/restoration/restoration2.JPG';
import restoration3  from './img/gallery/restoration/restoration3.JPG';
import restoration4  from './img/gallery/restoration/restoration4.JPG';
import restoration5  from './img/gallery/restoration/restoration5.JPG';
import restoration6  from './img/gallery/restoration/restoration6.JPG';
import restoration7  from './img/gallery/restoration/restoration7.JPG';

import landscaping_1  from './img/gallery/landscaping/landscaping_1.jpg';
import landscaping_2  from './img/gallery/landscaping/landscaping_2.jpg';

import housing1943_1  from './img/gallery/1943Housing/housing1943_1.jpeg';
import housing1943_2  from './img/gallery/1943Housing/housing1943_2.jpeg';
import housing1943_3  from './img/gallery/1943Housing/housing1943_3.jpeg';
import housing1943_4  from './img/gallery/1943Housing/housing1943_4.jpeg';


import location_1  from './img/gallery/locations/location_1.jpg';
import location_2  from './img/gallery/locations/location_2.jpg';
import location_3  from './img/gallery/locations/location_3.jpg';

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
import labourDay_11  from './img/gallery/labourDay/labourDay11.jpg';
import labourDay_12  from './img/gallery/labourDay/labourDay12.jpg';
import labourDay_13  from './img/gallery/labourDay/labourDay13.jpg';
import labourDay_14  from './img/gallery/labourDay/labourDay14.jpg';
import labourDay_15  from './img/gallery/labourDay/labourDay15.jpg';
import labourDay_16  from './img/gallery/labourDay/labourDay16.jpg';

import labourDay50_1  from './img/gallery/labourDay1950/labourDay50_1.jpg';
import labourDay50_2  from './img/gallery/labourDay1950/labourDay50_2.jpg';
import labourDay50_3  from './img/gallery/labourDay1950/labourDay50_3.jpg';
import labourDay50_4  from './img/gallery/labourDay1950/labourDay50_4.jpg';
import labourDay50_5  from './img/gallery/labourDay1950/labourDay50_5.jpg';
import labourDay50_6  from './img/gallery/labourDay1950/labourDay50_6.jpg';
import labourDay50_7  from './img/gallery/labourDay1950/labourDay50_7.jpg';
import labourDay50_8  from './img/gallery/labourDay1950/labourDay50_8.jpg';
import labourDay50_9  from './img/gallery/labourDay1950/labourDay50_9.jpg';
import labourDay50_10  from './img/gallery/labourDay1950/labourDay50_10.jpg';
import labourDay50_11  from './img/gallery/labourDay1950/labourDay50_11.jpg';
import labourDay50_12  from './img/gallery/labourDay1950/labourDay50_12.jpg';

import historical1960_1  from './img/gallery/historical1960/historical1960_1.jpg';
import historical1960_2  from './img/gallery/historical1960/historical1960_2.jpg';
import historical1960_3  from './img/gallery/historical1960/historical1960_3.jpg';
import historical1960_4  from './img/gallery/historical1960/historical1960_4.jpg';
import historical1960_5  from './img/gallery/historical1960/historical1960_5.jpg';
import historical1960_6  from './img/gallery/historical1960/historical1960_6.jpg';

import sacredHeart_1  from './img/gallery/SacredHeart/sacredHeart_1.jpg';
import sacredHeart_2  from './img/gallery/SacredHeart/sacredHeart_2.jpg';
import sacredHeart_3  from './img/gallery/SacredHeart/sacredHeart_3.jpg';
import sacredHeart_4  from './img/gallery/SacredHeart/sacredHeart_4.jpg';
import sacredHeart_5  from './img/gallery/SacredHeart/sacredHeart_5.jpg';
import sacredHeart_6  from './img/gallery/SacredHeart/sacredHeart_6.jpg';
import sacredHeart_7  from './img/gallery/SacredHeart/sacredHeart_7.jpg';
import sacredHeart_8  from './img/gallery/SacredHeart/sacredHeart_8.jpg';
import sacredHeart_9  from './img/gallery/SacredHeart/sacredHeart_9.jpg';
import sacredHeart_10  from './img/gallery/SacredHeart/sacredHeart_10.jpg';
import sacredHeart_11  from './img/gallery/SacredHeart/sacredHeart_11.jpg';
import sacredHeart_12  from './img/gallery/SacredHeart/sacredHeart_12.jpg';
import sacredHeart_13  from './img/gallery/SacredHeart/sacredHeart_13.jpg';
import sacredHeart_14  from './img/gallery/SacredHeart/sacredHeart_14.jpg';
import sacredHeart_15  from './img/gallery/SacredHeart/sacredHeart_15.jpg';
import sacredHeart_16  from './img/gallery/SacredHeart/sacredHeart_16.jpg';
import sacredHeart_17  from './img/gallery/SacredHeart/sacredHeart_17.jpg';

import sawmill_1  from './img/gallery/sawmills/sawmill_1.jpg';
import sawmill_2  from './img/gallery/sawmills/sawmill_2.jpg';
import sawmill_3  from './img/gallery/sawmills/sawmill_3.jpg';
import sawmill_4  from './img/gallery/sawmills/sawmill_4.jpg';
import sawmill_5  from './img/gallery/sawmills/sawmill_5.jpg';
import sawmill_6  from './img/gallery/sawmills/sawmill_6.jpg';

import unitedChurch_1  from './img/gallery/unitedChurch/unitedChurch_1.jpg';
import unitedChurch_2  from './img/gallery/unitedChurch/unitedChurch_2.jpg';
import unitedChurch_3  from './img/gallery/unitedChurch/unitedChurch_3.jpg';

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


const LANDSCAPING_IMAGES: GalleryImage[] = [
  {
    src: landscaping_1,
    alt: 'Landscaping Image 1',
    caption: <>Kunon Landscaping Company and Japonica Landscaping & Environment Farm Ltd and crew created a beautiful but serene 15th century rock garden (Karesansui) to enhance the landscape of Greenwood.  Kumpei Wakino, Yusuke, Myles Berney, Hiro Okusa.</>,
  },
  {
    src: landscaping_2,
    alt: 'Landscaping Image 2',
    caption: <>Winter scene:  Greenwood Nikkei Memorial Garden dedicated to the 1200 Japanese Canadians who came to Greenwood April 26th, 1942.  Most stayed and made their homes after 1945.  There are still a few JCs are still residing in this community.</>,
  }
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
    src: building2_2,
    alt: 'Building #2',
    caption: (
      <>
        The former Armstrong Hotel turned hospital and internment housing (1940’s) to extra classrooms (1954) burnt to the ground in July of 1957.  Area is now the Thrift Shop and Senior Centre. 
        <br /><br />
        Photo courtesy of Joan Scott Tice
      </>
    ),
  },
  {
    src: building2_3,
    alt: 'Building #2',
    caption: (
      <>
        The former Armstrong Hotel turned hospital and internment housing (1940’s) to extra classrooms (1954) burnt to the ground in July of 1957.  Area is now the Thrift Shop and Senior Centre. 
        <br /><br />
        Photo courtesy of Joan Scott Tice
      </>
    ),
  },
  {
    src: building2_4,
    alt: 'Building #2',
    caption: (
      <>
        The former Armstrong Hotel turned hospital and internment housing (1940’s) to extra classrooms (1954) burnt to the ground in July of 1957.  Area is now the Thrift Shop and Senior Centre. 
        <br /><br />
        Photo courtesy of Joan Scott Tice
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
  {
    src: misc_37,
    alt: 'Sacred Heart Catholic Church Inside',
    caption: (
      <>View of the inside of Sacred Heart Church.  Church was full every Sunday.
        <br /><br />
        Photo courtesy of Greenwood Museum</>
    ),
  },
  {
    src: misc_34,
    alt: 'Hunter Kenrick Building',
    caption: (
      <>Hunter-Kendrick Building had Cowdrill Surplus Store (left) to supply beds and stoves for the JCs.  Jewel Theatre (right) showing Hollywood and Japanese movies on the weekend.  Upstairs was for Boy Scouts and Cubs.
        <br /><br />
        Photo courtesy of Greenwood Museum</>
    ),
  },
  {
    src: misc_35,
    alt: 'Ice Rink',
    caption: (
      <>The old natural ice curling rink was located where the Route 3 Race Track next to Nikkei Legacy Park.
        <br /><br />
        Photo courtesy of Greenwood Museum</>
    ),
  },
  {
    src: misc_36,
    alt: 'Greenwood School',
    caption: (
      <>Greenwood Elementary-High School on Government Street now burnt down where many Nikkei children attended.  School was built in 1953.
        <br /><br />
        Photo courtesy of Greenwood Museum</>
    ),
  },
];

const BW_IMAGES: GalleryImage[] = [
  {
    src: misc_12,
    alt: 'Greenwood 1942',
    caption: (
      <>
        Panoramic view of Greenwood 1942
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
        Registering at the Greenwood Court House.
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
  {
    src: misc_6,
    alt: 'Ladies working at BC Security Commission office.',
    caption: ( 
      <>Ladies working at BC Security Commission office.
        <br /><br />
        Photo courtesy of Greenwood Museum</>
    ),
  },

];

const LOCATIONS_IMAGES: GalleryImage[] = [
  {
    src: location_1,
    alt: 'Old Mother Lode Mine',
    caption: (
      <>
        Old Mother Lode mine where the copper was transported to the smelter.  Maeda family visiting the site.
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
    {
    src: location_2,
    alt: 'Greenwood City Park',
    caption: (
      <>
        Greenwood City Park where Lions Park is now located.  Children played on the swings and teeter-totter.  JC children called it (bucking) bronco.  Daring children on the swings would go as high as possible and then jump off at its peak.
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
    {
    src: location_3,
    alt: 'Greenwood City Park Pond',
    caption: (
      <>
        At the park, children called it THE POND where they swam in the summer and skated in the winter.  You might see a raft. Special events were held at the park. 
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
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
    caption: <>Train ride to Greenwood (1942). Father Matthias making sure the parishioners are comfortable. Little boy in the front is Isao Mori
        <br /><br />
        Photo courtesy of Greenwood Museum</>,
  },
  {
    src: misc_19,
    alt: 'Getting off the train and meeting a welcoming group from Mayor McArthur and Franciscan Sisters.',
    caption: (
      <>Sr. Jerome (left) and Sr. Eugenia (right) were at the train station  to greet their parishioners.
        <br /><br />
        Photo courtesy of Greenwood Museum</>
    ),
  },
  {
    src: misc_16,
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
    src: misc_15,
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
      src: misc_27,
      alt: 'RCMP',
      caption: (
        <>Fumi Matsubuchi with RCMP and BCSC Leonard Cowdrill.
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
  {
    src: misc_40,
    alt: 'Greenwood 1942',
    caption: (
      <>
        Dentist Dr. George Ishiwara was sent to provide dental care to the JCs.
        <br /><br />
        Photo courtesy of Vyvyan Dorsett
      </>
    ),
  },
  {
    src: misc_41,
    alt: 'Greenwood 1942',
    caption: (
      <>
        Mrs. Ishiwara (Shimokura) with daughter Vyvyan near Bob Brown Store and Rendell Block (#4 Building) in the background.  Empty lot behind later became Mook’s Cafe. 
        <br /><br />
        Photo courtesy of Vyvyan Dorsett
      </>
    ),
  },
  {
    src: misc_42,
    alt: 'Greenwood 1942',
    caption: (
      <>
        Sacred Heart School couldn’t accommodate 364 children in a four-room school therefore half of the students attended class in the morning and the other half in the afternoon.
      </>
    ),
  },
  {
    src: misc_43,
    alt: 'Greenwood 1942',
    caption: (
      <>
        Early arrivals in 1942 were placed in #5 Building (Miller Block).
      </>
    ),
  },
  {
    src: misc_44,
    alt: 'Greenwood 1942',
    caption: (
      <>
        Greenwood Hospital Staff.
        <br /><br />
        Photo courtesy of Molly Fukui
      </>
    ),
  },
  {
    src: misc_45,
    alt: 'Greenwood 1942',
    caption: (
      <>
        Sacred Heart Church Confirmation Day.
        <br /><br />
        Photo courtesy of Mitsy Sasaki
      </>
    ),
  },
  {
    src: misc_46,
    alt: 'Greenwood 1942',
    caption: (
      <>
        Nurses Aides.
        <br /><br />
        Photo courtesy of Molly Fukui
      </>
    ),
  },
  {
    src: misc_47,
    alt: 'Greenwood 1942',
    caption: (
      <>
        Twosome Molly Madokoro and Jim Fukui later got married.
        <br /><br />
        Photo courtesy of Molly Fukui
      </>
    ),
  },
  {
    src: misc_48,
    alt: 'Greenwood 1942',
    caption: (
      <>
        One of the first friendships in Greenwood.  Teresa Kurisu taught Marion Maclean piano and they became \'life-long\' friends even though they lost touch.  Teresa followed her parents to Japan in 1946.  An article is written in Discover Nikkei (Resources).
        <br /><br />
        Photo courtesy of Teresa Ogawa
      </>
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
          Photo courtesy of Francis Nakagawa</>
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
    {
      src: misc_24,
      alt: 'GHS students in 1946',
      caption: (
        <>Greenwood Public High School students circa 1946-47
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: misc_38,
      alt: 'Greenwood mothers picking potatoes',
      caption: (
        <>Greenwood mothers woke up early in the morning to pick potatoes in Midway.  Students picked before school commenced.
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: misc_39,
      alt: 'Mrs. Den Oye and Mrs. Ruth Hamaguchi',
      caption: (
        <>Mrs. Den Oye with a dog and Mrs. Ruth Hamaguchi with a child posed in front of the woodshed that was the children’s playground where ‘Katana kiri and Bang Bang’ were played and many more games.
          <br /><br />
          Photo courtesy of Greenwood Museum</>
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
      src: labourDay_2,
      alt: 'Labour Day 1940s',
      caption: (
        <>Mayor McArthur asked Sacred Heart School parents and Sisters to participate in the annual local Labour Day celebration to “break the ice”.  It was a big success.
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },  
  {
      src: labourDay_1,
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
    // {
    //   src: labourDay_4,
    //   alt: 'Labour Day 1940s',
    //   caption: (
    //     <>Sacred Heart School float representing the provinces of Canada.
    //       <br /><br />
    //       Photo courtesy of Greenwood Museum</>
    //   ),
    // },
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
    {
      src: labourDay_11,
      alt: 'Labour Day 1940s',
      caption: (
        <>Early parade featuring ladies with kimono
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: labourDay_12,
      alt: 'Labour Day 1940s',
      caption: (
        <>Float: Greenwodd Japanese Catholic Group
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: labourDay_13,
      alt: 'Labour Day 1940s',
      caption: (
        <>Sacred Heart School children marching behind the float of many nations.
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: labourDay_14,
      alt: 'Labour Day 1940s',
      caption: (
        <>Nations of the World
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: labourDay_15,
      alt: 'Labour Day 1940s',
      caption: (
        <>Big crowd enjoying the parade with horses
          <br /><br />
          Photo courtesy of Greenwood Museum</>
      ),
    },
    {
      src: labourDay_16,
      alt: 'Labour Day 1940s',
      caption: (
        <>Sacred Heart School float
          <br /><br />
          Photo courtesy of Francis Nakagawa</>
      ),
    },
];

const LAOBUR_DAY1950_IMAGES: GalleryImage[] = [
    {
      src: labourDay50_1,
      alt: 'Labour Day 1950s',
      caption: (
        <>Greenwood Labour Day parade in the 1950s.  
          <br /><br />
          Photo courtesy of Miyamoto Photograph of Grand Forks</>
      ),
    },
    {
      src: labourDay50_2,
      alt: 'Labour Day 1950s',
      caption: (
        <>Greenwood Labour Day parade in the 1950s.  
          <br /><br />
          Photo courtesy of Miyamoto Photograph of Grand Forks</>
      ),
    },
    {
      src: labourDay50_3,
      alt: 'Labour Day 1950s',
      caption: (
        <>Greenwood Labour Day parade in the 1950s.  
          <br /><br />
          Photo courtesy of Miyamoto Photograph of Grand Forks</>
      ),
    },
    {
      src: labourDay50_4,
      alt: 'Labour Day 1950s',
      caption: (
        <>Greenwood Labour Day parade in the 1950s.  
          <br /><br />
          Photo courtesy of Miyamoto Photograph of Grand Forks</>
      ),
    },       
    {
      src: labourDay50_5,
      alt: 'Labour Day 1950s',
      caption: (
        <>Greenwood Labour Day parade in the 1950s.  
          <br /><br />
          Photo courtesy of Miyamoto Photograph of Grand Forks</>
      ),
    }, 
    {
      src: labourDay50_6,
      alt: 'Labour Day 1950s',
      caption: (
        <>Greenwood Labour Day parade in the 1950s.  
          <br /><br />
          Photo courtesy of Miyamoto Photograph of Grand Forks</>
      ),
    },
    {
      src: labourDay50_7,
      alt: 'Labour Day 1950s',
      caption: (
        <>Greenwood Labour Day parade in the 1950s.  
          <br /><br />
          Photo courtesy of Miyamoto Photograph of Grand Forks</>
      ),
    },                  
    {
      src: labourDay50_8,
      alt: 'Labour Day 1950s',
      caption: (
        <>Greenwood Labour Day parade in the 1950s.  
          <br /><br />
          Photo courtesy of Miyamoto Photograph of Grand Forks</>
      ),
    },                    
    {
      src: labourDay50_9,
      alt: 'Labour Day 1950s',
      caption: (
        <>Labour Day parade was very popular and the highlight was the fireworks display to end Labour Day celebration.  #8 and #9 Building in the background.   
          <br /><br />
          Photo courtesy of Miyamoto Photograph of Grand Forks</>
      ),
    },       
    {
      src: labourDay50_10,
      alt: 'Labour Day 1950s',
      caption: (
        <>Floats were popular and people spent hours building them.
          <br /><br />
          Photo courtesy of Miyamoto Photograph of Grand Forks</>
      ),
    },        
    {
      src: labourDay50_11,
      alt: 'Labour Day 1950s',
      caption: (
        <>Mrs. Takahashi, daughter Michi, Mrs. Suzuki and friend taking in the parade.
          <br /><br />
          Photo courtesy of Miyamoto Photograph of Grand Forks</>
      ),
    },        
    {
      src: labourDay50_12,
      alt: 'Labour Day 1950s',
      caption: (
        <>Mook’s Cafe ladies preparing and helping Ken and Shirley Mukai to serve hungry customers after the parade.
          <br /><br />
          Photo courtesy of Miyamoto Photograph of Grand Forks</>
      ),
    },                               
];


const HISTORICAL1960_IMAGES: GalleryImage[] = [
    {
      src: historical1960_1,
      alt: 'Historical 1960s',
      caption: (
        <>Husband Jim Fukui, former Asahi player is prepared to pull his wife Molly Fukui in the parade. Stan Tanizawa is behind the rickshaw. </>
      ),
    },
    {
      src: historical1960_2,
      alt: 'Historical 1960s',
      caption: (
        <>More local Japanese Canadian dancers strutting down Copper Street. </>
      ),
    },
    {
      src: historical1960_3,
      alt: 'Historical 1960s',
      caption: (
        <>Judo demonstration was a big hit. </>
      ),
    },
    {
      src: historical1960_4,
      alt: 'Historical 1960s',
      caption: (
        <>Arizo Tasaka is pulling 'Geisha' Bob Maeda in a jinrikisha.</>
      ),
    },
    {
      src: historical1960_5,
      alt: 'Historical 1960s',
      caption: (
        <>Summer of 1964: One of the most successful Labour Day celebrations in Greenwood was the NATSU MATSURI or Summer Festival.  The whole community got involved and produced a gala affair.  Watch Mamoru Madokoro’s home movie.  Platform was built by local carpenters for the grand opening.</>
      ),
    },
    {
      src: historical1960_6,
      alt: 'Historical 1960s',
      caption: (
        <>Matsuri dancers marching past Johnny’s Market, Tanizawa Greenwood Bakery and Imai Bros Electric.</>
      ),
    },
  ];


const SACREDHEART_IMAGES: GalleryImage[] = [
    {
      src: sacredHeart_1,
      alt: 'Sacred Heart Church',
      caption: (
        <>Sacred Heart School or SHS began with Summer School and by October of 1942, classes were in session.  With 364 students, resources were limited, but JCs had education. </>
      ),
    },
    {
      src: sacredHeart_2,
      alt: 'Sacred Heart Church',
      caption: (
        <>The old fire hall was converted to SHS.  Fire escape was added.  Where the truck was stored, that became the multi-purpose room.  Buntaro Nakatsu spear-headed a workforce to build a playing field. </>
      ),
    },
    {
      src: sacredHeart_3,
      alt: 'Sacred Heart Church',
      caption: (
        <>Fr. Katsuno in front of Sacred Heart School. </>
      ),
    },
    {
      src: sacredHeart_4,
      alt: 'Sacred Heart Church',
      caption: (
        <>Sr. Donata and other nuns were teachers. </>
      ),
    },
    {
      src: sacredHeart_5,
      alt: 'Sacred Heart Church',
      caption: (
        <>Sr. Donata and other nuns were teachers. </>
      ),
    },
    {
      src: sacredHeart_6,
      alt: 'Sacred Heart Church',
      caption: (
        <>Fr. Katsuno and SHS students enjoying winter activities. </>
      ),
    },
    {
      src: sacredHeart_7,
      alt: 'Sacred Heart Church',
      caption: (
        <>Early days of Sacred Heart School. </>
      ),
    },
    {
      src: sacredHeart_8,
      alt: 'Sacred Heart Church',
      caption: (
        <>Baptism for young Japanese Canadian Catholic. </>
      ),
    },
    {
      src: sacredHeart_9,
      alt: 'Sacred Heart Church',
      caption: (
        <>New converts in front of the convent </>
      ),
    },
    {
      src: sacredHeart_10,
      alt: 'Sacred Heart Church',
      caption: (
        <>Kindergarten graduation.  Notice classes were larger in the 40’s. </>
      ),
    },
    {
      src: sacredHeart_11,
      alt: 'Sacred Heart Church',
      caption: (
        <>Kindergarten class was much smaller in the early 50’s.  Families started returning to the coast after April 1st, 1949. 
          <br /><br />
          Photo courtesy of Yamaguchi family</>
      ),
    },
    {
      src: sacredHeart_12,
      alt: 'Sacred Heart Church',
      caption: (
        <>Baptism in the 50’s.</>
      ),
    },
    {
      src: sacredHeart_13,
      alt: 'Sacred Heart Church',
      caption: (
        <>By 1950, the kindergarten class was smaller.  In 1953-54, SHS closed due to dwindling enrolment, but kept the kindergarten class open.  In 1967, the Franciscan Sisters left Greenwood.
          <br /><br />
          Photo courtesy of Yamaguchi family </>
      ),
    },
    {
      src: sacredHeart_14,
      alt: 'Sacred Heart Church',
      caption: (
        <>Picnics were one of the highlights.
          <br /><br />
          Photo courtesy of Yamaguchi family </>
      ),
    },
    {
      src: sacredHeart_15,
      alt: 'Sacred Heart Church',
      caption: (
        <>Another picnic group.
          <br /><br />
          Photo courtesy of Yamaguchi family </>
      ),
    },
    {
      src: sacredHeart_16,
      alt: 'Sacred Heart Church',
      caption: (
        <>Children looked forward to hiking up towards Phoenix and enjoyed the camaraderie.  Notice the nun still wearing heavy clothing even on a warm day </>
      ),
    },
    {
      src: sacredHeart_17,
      alt: 'Sacred Heart Church',
      caption: (
        <>Franciscans of the Atonement’s contribution to Greenwood was enormous.  </>
      ),
    },
  ];

  
const UNITEDCHURCH_IMAGES: GalleryImage[] = [
    {
      src: unitedChurch_1,
      alt: 'United Church',
      caption: (
        <>CGIT or Canadian Girls in Training was the favourite of Madeleine Bock’s activity.
          <br /><br />
          Photo courtesy of United Church of Canada</>
      ),
    },
    {
      src: unitedChurch_2,
      alt: 'United Church',
      caption: (
        <>Jr. Red Cross picnic at Jewel Lake. Left to right: Joanne Cowdrill, Joan Aldham, Lily Sakamoto, Joan Miura.  Front is May Watanabe and Mitsy Haraga.
          <br /><br />
          Photo courtesy of United Church of Canada</>
      ),
    },
    {
      src: unitedChurch_3,
      alt: 'United Church',
      caption: (
        <>United Church left Grace Namba, Visiting Supervisor and Madeleine Bock
          <br /><br />
          Photo courtesy of United Church of Canada</>
      ),
    },
  ];



const SAWMILLS_IMAGES: GalleryImage[] = [
    {
      src: sawmill_1,
      alt: 'Sawmill',
      caption: (
        <>Sawmill and logging were the main industry of Greenwood.  Many Japanese Canadians were employed by various sawmills in town.  Cooke Lumber Ltd, Folvik Mill, Boundary Falls Mill and Sandner’s Box Mill.  There were smaller mills Tedesco and Forshaw.</>
      ),
    },
    {
      src: sawmill_2,
      alt: 'Sawmill',
      caption: (
        <>Sawmill and logging were the main industry of Greenwood.  Many Japanese Canadians were employed by various sawmills in town.  Cooke Lumber Ltd, Folvik Mill, Boundary Falls Mill and Sandner’s Box Mill.  There were smaller mills Tedesco and Forshaw. </>
      ),
    },
    {
      src: sawmill_3,
      alt: 'Sawmill',
      caption: (
        <>Sawmill and logging were the main industry of Greenwood.  Many Japanese Canadians were employed by various sawmills in town.  Cooke Lumber Ltd, Folvik Mill, Boundary Falls Mill and Sandner’s Box Mill.  There were smaller mills Tedesco and Forshaw. </>
      ),
    },
    {
      src: sawmill_4,
      alt: 'Sawmill',
      caption: (
        <>Sawmill and logging were the main industry of Greenwood.  Many Japanese Canadians were employed by various sawmills in town.  Cooke Lumber Ltd, Folvik Mill, Boundary Falls Mill and Sandner’s Box Mill.  There were smaller mills Tedesco and Forshaw. </>
      ),
    },
    {
      src: sawmill_5,
      alt: 'Sawmill',
      caption: (
        <>Sawmill and logging were the main industry of Greenwood.  Many Japanese Canadians were employed by various sawmills in town.  Cooke Lumber Ltd, Folvik Mill, Boundary Falls Mill and Sandner’s Box Mill.  There were smaller mills Tedesco and Forshaw. </>
      ),
    },
    {
      src: sawmill_6,
      alt: 'Sawmill',
      caption: (
        <>Sawmill and logging were the main industry of Greenwood.  Many Japanese Canadians were employed by various sawmills in town.  Cooke Lumber Ltd, Folvik Mill, Boundary Falls Mill and Sandner’s Box Mill.  There were smaller mills Tedesco and Forshaw. </>
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

type GalleryFilter = 'all' | 'nikkei' | 'places' | 'internment' | 'community' | 'restoration' | 'ohairi' ;

// const FILTER_BUTTONS: { key: GalleryFilter; label: string }[] = [
//   { key: 'all',        label: 'All' },
//   { key: 'nikkei',     label: 'Nikkei Legacy Park' },
//   // { key: 'historical', label: 'Historical: Locations' },
//   { key: 'restoration', label: 'Restoration' },
//   { key: 'ohairi',     label: 'Ohairi Park' },
//   { key: 'places',     label: 'Historical: Places' },
//   { key: 'internment', label: 'Historical: Internment' },
//   { key: 'community',  label: 'Historical: Community Life' },
// ];

const PRIMARY_FILTER_BUTTONS: { key: GalleryFilter; label: string }[] = [
  { key: 'all',        label: 'All' },
  { key: 'nikkei',     label: 'Nikkei Legacy Park' },
  { key: 'restoration', label: 'Restoration' },
  { key: 'ohairi',     label: 'Ohairi Park' },
];

const ARCHIVAL_FILTER_BUTTONS: { key: GalleryFilter; label: string }[] = [
  { key: 'places',     label: 'Buildings & Industries' },
  { key: 'internment', label: 'Arrival & Internment' },
  { key: 'community',  label: 'Community Life' },
];

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<GalleryFilter>('all');

  return (
    <main className="gallery-page">

      <h1 className="gallery-page-title">Photo Galleries</h1>

      {/* ── Filter buttons ── */}
      {/* ── Filter buttons ── */}
      <div className="gallery-filter-wrapper">
        {PRIMARY_FILTER_BUTTONS.map(({ key, label }) => (
          <button
            key={key}
            className={`gallery-filter-btn${filter === key || filter === 'all' ? ' gallery-filter-btn--active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className="gallery-filter-section-label">Archival Photos</h2>

      <div className="gallery-filter-wrapper">
        {ARCHIVAL_FILTER_BUTTONS.map(({ key, label }) => (
          <button
            key={key}
            className={`gallery-filter-btn${filter === key || filter === 'all' ? ' gallery-filter-btn--active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>
      {/* <div className="gallery-filter-wrapper"> */}
        {/* {FILTER_BUTTONS.map(({ key, label }) => (
          <button
            key={key}
            className={`gallery-filter-btn${filter === key || filter === 'all' ? ' gallery-filter-btn--active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div> */}

      {(filter === 'all' || filter === 'nikkei') && (
        <>
          <Carousel images={PANEL_IMAGES} title="Nikkei Legacy Park Panels" />
          <Carousel images={JUNE_IMAGES}  title="Spring Time in the Park: June 2026" />
          <Carousel images={MAY_IMAGES}   title="Nikkei Legacy Park: May 2026" />
        </>
      )}
      {/* {(filter === 'all' || filter === 'historical') && (
        <>
          <Carousel images={BUILDING_IMAGES}   title="Historical Buildings" />
          <Carousel images={BW_IMAGES_2} title="Arrival of Japanese Canadians to Greenwood: 1942" />
          <Carousel images={BW_IMAGES}   title="Historical Photos" />
          
          <Carousel images={LOCATIONS_IMAGES}   title="Historical Locations" />
          <Carousel images={INTERNEES_IMAGES} title="Early Internees 1942-45" />
          <Carousel images={HOUSING_IMAGES} title="1943 Japanese Canadian Housing" />
          <Carousel images={LAOBUR_DAY_IMAGES} title="Labour Day Parades 1940s" />
          <Carousel images={LAOBUR_DAY1950_IMAGES} title="Labour Day Parades 1950s" />
          <Carousel images={HISTORICAL1960_IMAGES} title="Natsu Matsuri - Summer Festival 1964" />
          <Carousel images={SACREDHEART_IMAGES} title="Sacred Heart School Life" />
          <Carousel images={UNITEDCHURCH_IMAGES} title="United Church" />
          <Carousel images={SAWMILLS_IMAGES} title="Sawmill & Logging Industry in Greenwood" />
        </>
      )} */}
      {(filter === 'all' || filter === 'restoration') && (
        <>
        <Carousel images={RESTORATION_IMAGES} title="Restoration and Renovation: 2016-2018" />
        <Carousel images={LANDSCAPING_IMAGES} title="Japanese Rock Garden Landscaping" />
        </>
      )}
      {(filter === 'all' || filter === 'ohairi') && (
        <Carousel images={MISC_IMAGES} title="A Look Back: Ohairi Park (Pre-2014)" />
      )}
      {(filter === 'all' || filter === 'places') && (
        <>
          <Carousel images={HOUSING_IMAGES} title="1943 Japanese Canadian Housing" />
          <Carousel images={BUILDING_IMAGES}   title="Historical Buildings" />
          <Carousel images={LOCATIONS_IMAGES}   title="Historical Locations" />
          <Carousel images={SAWMILLS_IMAGES} title="Sawmill & Logging Industry in Greenwood" />
        </>
      )}
      {(filter === 'all' || filter === 'internment') && (
        <>
          <Carousel images={BW_IMAGES_2} title="Arrival of Japanese Canadians to Greenwood: 1942" />
          <Carousel images={BW_IMAGES}   title="Historical Photos" />
          <Carousel images={INTERNEES_IMAGES} title="Early Internees 1942-45" />
        </>
      )}
      {(filter === 'all' || filter === 'community') && (
        <>
          <Carousel images={SACREDHEART_IMAGES} title="Sacred Heart School Life" />
          <Carousel images={UNITEDCHURCH_IMAGES} title="United Church" />
          <Carousel images={LAOBUR_DAY_IMAGES} title="Labour Day Parades 1940s" />
          <Carousel images={LAOBUR_DAY1950_IMAGES} title="Labour Day Parades 1950s" />
          <Carousel images={HISTORICAL1960_IMAGES} title="Natsu Matsuri - Summer Festival 1964" />
        </>
      )}

    </main>
  );
};

export default GalleryPage;