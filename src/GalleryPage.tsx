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
import spring2026_15 from './img/gallery/galleryJune2026/spring2026-15.jpeg';
import spring2026_16 from './img/gallery/galleryJune2026/spring2026-16.jpeg';

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
import fundraiser  from './img/gallery/misc/fundraiser.jpg';
import interneeArticle_1  from './img/gallery/misc/internee_article1.jpg';
import interneeArticle_2  from './img/gallery/misc/internee_article2.jpg';
import buildingArticle_1  from './img/gallery/misc/building_article1.jpg';
import buildingArticle_2  from './img/gallery/misc/building_article2.jpg';
import buildingArticle_3  from './img/gallery/misc/building_article3.jpg';
import buildingArticle_4  from './img/gallery/misc/building_article4.jpg';
import buildingArticle_5  from './img/gallery/misc/building_article5.jpg';

import restoration1  from './img/gallery/restoration/restoration1.JPG';
import restoration2  from './img/gallery/restoration/restoration2.JPG';
import restoration3  from './img/gallery/restoration/restoration3.JPG';
import restoration4  from './img/gallery/restoration/restoration4.JPG';
import restoration5  from './img/gallery/restoration/restoration5.JPG';
import restoration6  from './img/gallery/restoration/restoration6.JPG';
import restoration7  from './img/gallery/restoration/restoration7.JPG';
import restoration8  from './img/gallery/restoration/restoration8.JPG';
import restoration9  from './img/gallery/restoration/restoration9.JPG';
import restoration10  from './img/gallery/restoration/restoration10.JPG';

import landscaping_1  from './img/gallery/landscaping/landscaping_1.jpg';
import landscaping_2  from './img/gallery/landscaping/landscaping_2.jpg';
import landscaping_3  from './img/gallery/landscaping/landscaping_3.jpg';
import landscaping_4  from './img/gallery/landscaping/landscaping_4.jpg';
import landscaping_5  from './img/gallery/landscaping/landscaping_5.jpg';
import landscaping_6  from './img/gallery/landscaping/landscaping_6.jpg';


import housing1943_1  from './img/gallery/1943Housing/housing1943_1.jpeg';
import housing1943_2  from './img/gallery/1943Housing/housing1943_2.jpeg';
import housing1943_3  from './img/gallery/1943Housing/housing1943_3.jpeg';
import housing1943_4  from './img/gallery/1943Housing/housing1943_4.jpeg';


import location_1  from './img/gallery/locations/location_1.jpg';
import location_2  from './img/gallery/locations/location_2.jpg';
import location_3  from './img/gallery/locations/location_3.jpg';
import location_4  from './img/gallery/locations/location_4.jpg';
import location_5  from './img/gallery/locations/location_5.jpg';
import location_6  from './img/gallery/locations/location_6.jpg';
import location_7  from './img/gallery/locations/location_7.jpg';
import location_8  from './img/gallery/locations/location_8.jpg';

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
import labourDay_17  from './img/gallery/labourDay/labourDay17.jpg';

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
import historical1960_7  from './img/gallery/historical1960/historical1960_7.jpg';
import historical1960_8  from './img/gallery/historical1960/historical1960_8.jpg';

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

import cementery_1  from './img/gallery/cementery/cementery_1.jpg';
import cementery_2  from './img/gallery/cementery/cementery_2.jpg';
import cementery_3  from './img/gallery/cementery/cementery_3.jpg';
import cementery_4  from './img/gallery/cementery/cementery_4.jpg';
import cementery_5  from './img/gallery/cementery/cementery_5.jpg';
import cementery_6  from './img/gallery/cementery/cementery_6.jpg';
import cementery_7  from './img/gallery/cementery/cementery_7.jpg';

import opening_1  from './img/gallery/opening2025/opening_1.jpg';
import opening_2  from './img/gallery/opening2025/opening_2.jpg';
import opening_3  from './img/gallery/opening2025/opening_3.jpg';
import opening_4  from './img/gallery/opening2025/opening_4.jpg';
import opening_5  from './img/gallery/opening2025/opening_5.jpg';
import opening_6  from './img/gallery/opening2025/opening_6.jpg';
import opening_7  from './img/gallery/opening2025/opening_7.jpg';
import opening_8  from './img/gallery/opening2025/opening_8.jpg';
import opening_9  from './img/gallery/opening2025/opening_9.jpg';

import visitors_1  from './img/gallery/visitors/visitors_1.jpg';
import visitors_2  from './img/gallery/visitors/visitors_2.jpg';
import visitors_3  from './img/gallery/visitors/visitors_3.jpg';
import visitors_4  from './img/gallery/visitors/visitors_4.jpg';
import visitors_5  from './img/gallery/visitors/visitors_5.jpg';
import visitors_6  from './img/gallery/visitors/visitors_6.jpg';
import visitors_7  from './img/gallery/visitors/visitors_7.jpg';
import visitors_8  from './img/gallery/visitors/visitors_8.jpg';
import visitors_9  from './img/gallery/visitors/visitors_9.jpg';
import visitors_9a  from './img/gallery/visitors/visitors_9a.jpg';
import visitors_10  from './img/gallery/visitors/visitors_10.jpg';
import visitors_11  from './img/gallery/visitors/visitors_11.jpg';
import visitors_12  from './img/gallery/visitors/visitors_12.jpg';
import visitors_13  from './img/gallery/visitors/visitors_13.jpg';
import visitors_14  from './img/gallery/visitors/visitors_14.jpg';
import visitors_15  from './img/gallery/visitors/visitors_15.jpg';
import visitors_16  from './img/gallery/visitors/visitors_16.jpg';
import visitors_17  from './img/gallery/visitors/visitors_17.jpg';
import visitors_18  from './img/gallery/visitors/visitors_18.jpg';
import visitors_19  from './img/gallery/visitors/visitors_19.jpg';
import visitors_20  from './img/gallery/visitors/visitors_20.jpg';
import visitors_20a  from './img/gallery/visitors/visitors_20a.jpg';
import visitors_21  from './img/gallery/visitors/visitors_21.jpg';
import visitors_22  from './img/gallery/visitors/visitors_22.jpg';
import visitors_23  from './img/gallery/visitors/visitors_23.jpg';
import visitors_24  from './img/gallery/visitors/visitors_24.jpg';
import visitors_25  from './img/gallery/visitors/visitors_25.jpg';
import visitors_26  from './img/gallery/visitors/visitors_26.jpg';
import visitors_27  from './img/gallery/visitors/visitors_27.jpg';
import visitors_28  from './img/gallery/visitors/visitors_28.jpg';
import visitors_29  from './img/gallery/visitors/visitors_29.jpg';

import food_1  from './img/gallery/food/food_1.jpg';
import food_2  from './img/gallery/food/food_2.jpg';
import food_3  from './img/gallery/food/food_3.jpg';
import food_4  from './img/gallery/food/food_4.jpg';
import food_5  from './img/gallery/food/food_5.jpg';
import food_6  from './img/gallery/food/food_6.jpg';
import food_7  from './img/gallery/food/food_7.jpg';
import food_8  from './img/gallery/food/food_8.jpg';
import food_9  from './img/gallery/food/food_9.jpg';
import food_10  from './img/gallery/food/food_10.jpg';

import sports_1  from './img/gallery/sports/sports_1.jpg';
import sports_2  from './img/gallery/sports/sports_2.jpg';
import sports_3  from './img/gallery/sports/sports_3.jpg';
import sports_4  from './img/gallery/sports/sports_4.jpg';
import sports_5  from './img/gallery/sports/sports_5.jpg';
import sports_6  from './img/gallery/sports/sports_6.jpg';
import sports_7  from './img/gallery/sports/sports_7.jpg';
import sports_8  from './img/gallery/sports/sports_8.jpg';
import sports_9  from './img/gallery/sports/sports_9.jpg';
import sports_10  from './img/gallery/sports/sports_10.jpg';
import sports_11  from './img/gallery/sports/sports_11.jpg';
import sports_12  from './img/gallery/sports/sports_12.jpg';
import sports_13  from './img/gallery/sports/sports_13.jpg';
import sports_14  from './img/gallery/sports/sports_14.jpg';
import sports_15  from './img/gallery/sports/sports_15.jpg';
import sports_16  from './img/gallery/sports/sports_16.jpg';
import sports_17  from './img/gallery/sports/sports_17.jpg';
import sports_18  from './img/gallery/sports/sports_18.jpg';
import sports_19  from './img/gallery/sports/sports_19.jpg';
import sports_20  from './img/gallery/sports/sports_20.jpg';
import sports_21  from './img/gallery/sports/sports_21.jpg';
import sports_22  from './img/gallery/sports/sports_22.jpg';
import sports_23  from './img/gallery/sports/sports_23.jpg';
import sports_24  from './img/gallery/sports/sports_24.jpg';
import sports_25  from './img/gallery/sports/sports_25.jpg';

import active_life_1  from './img/gallery/activeLife/active_life_1.jpg';
import active_life_2  from './img/gallery/activeLife/active_life_2.jpg';
import active_life_3  from './img/gallery/activeLife/active_life_3.jpg';
import active_life_4  from './img/gallery/activeLife/active_life_4.jpg';
import active_life_5  from './img/gallery/activeLife/active_life_5.jpg';
import active_life_6  from './img/gallery/activeLife/active_life_6.jpg';
import active_life_7  from './img/gallery/activeLife/active_life_7.jpg';
import active_life_8  from './img/gallery/activeLife/active_life_8.jpg';
import active_life_9  from './img/gallery/activeLife/active_life_9.jpg';
import active_life_10  from './img/gallery/activeLife/active_life_10.jpg';
import active_life_11  from './img/gallery/activeLife/active_life_11.jpg';
import active_life_12  from './img/gallery/activeLife/active_life_12.jpg';
import active_life_13  from './img/gallery/activeLife/active_life_13.jpg';
import active_life_14  from './img/gallery/activeLife/active_life_14.jpg';
import active_life_15  from './img/gallery/activeLife/active_life_15.jpg';
import active_life_16  from './img/gallery/activeLife/active_life_16.jpg';
import active_life_17  from './img/gallery/activeLife/active_life_17.jpg';
import active_life_18  from './img/gallery/activeLife/active_life_18.jpg';
import active_life_19  from './img/gallery/activeLife/active_life_19.jpg';
import active_life_20  from './img/gallery/activeLife/active_life_20.jpg';
import active_life_21  from './img/gallery/activeLife/active_life_21.jpg';
import active_life_22  from './img/gallery/activeLife/active_life_22.jpg';
import active_life_23  from './img/gallery/activeLife/active_life_23.jpg';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: React.ReactNode;
}

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
  { src: spring2026_1,  alt: 'Springtime June 2026 (Photo taken by Chuck Tasaka), Photo 1'  },
  { src: spring2026_2,  alt: 'Springtime June 2026 (Photo taken by Chuck Tasaka), Photo 2'  },
  { src: spring2026_3,  alt: 'Springtime June 2026 (Photo taken by Chuck Tasaka), Photo 3'  },
  { src: spring2026_4,  alt: 'Springtime June 2026 (Photo taken by Chuck Tasaka), Photo 4'  },
  { src: spring2026_5,  alt: 'Springtime June 2026 (Photo taken by Chuck Tasaka), Photo 5'  },
  { src: spring2026_6,  alt: 'Springtime June 2026 (Photo taken by Chuck Tasaka), Photo 6'  },
  { src: spring2026_7,  alt: 'Springtime June 2026 (Photo taken by Chuck Tasaka), Photo 7'  },
  { src: spring2026_8,  alt: 'Springtime June 2026 (Photo taken by Chuck Tasaka), Photo 8'  },
  { src: spring2026_9,  alt: 'Springtime June 2026 (Photo taken by Chuck Tasaka), Photo 9'  },
  { src: spring2026_10, alt: 'Springtime June 2026 (Photo taken by Chuck Tasaka), Photo 10' },
  { src: spring2026_11, alt: 'Springtime June 2026 (Photo taken by Chuck Tasaka), Photo 11' },
  { src: spring2026_12, alt: 'Springtime June 2026 (Photo taken by Chuck Tasaka), Photo 12' },
  { src: spring2026_13, alt: 'Springtime June 2026 (Photo taken by Chuck Tasaka), Photo 13' },
  { src: spring2026_14, alt: 'Springtime June 2026 (Photo taken by Chuck Tasaka), Photo 14' },
  { src: spring2026_15, alt: 'Springtime June 2026 (Photo taken by Chuck Tasaka), Photo 15' },
  { src: spring2026_16, alt: 'Springtime June 2026 (Photo taken by Chuck Tasaka), Photo 16' },
];


const PANEL_IMAGES: GalleryImage[] = [
  { src: panel2026_1, alt: 'Panels June 2026, Photo 1' },
  { src: panel2026_2, alt: 'Panels June 2026, Photo 2' },
  { src: panel2026_3, alt: 'Panels June 2026, Photo 3' },
  { src: panel2026_4, alt: 'Panels June 2026, Photo 4' },
  { src: panel2026_5, alt: 'Panels June 2026, Photo 5' },
  { src: panel2026_6, alt: 'Panels June 2026, Photo 6' },
  { src: panel2026_7, alt: 'Panels June 2026, Photo 7' },
];

const OPENING_IMAGES: GalleryImage[] = [
  {
    src: opening_1,
    alt: 'Opening Image 1',
    caption: <>Nikkei Memorial Garden was completed by joint Kunon and Japonica Landscaping Company with the grant from JCLS.  In kind service by City of Greenwood Public Works.
    <br /><br />
    Photos Courtesy of Peter Kalasz Photography</>,
  },
  {
    src: opening_2,
    alt: 'Opening Image 2',
    caption: <>Entertainment was provided by Southern Wave Music and Dance Society from Vancouver.
    <br /><br />
    Photos Courtesy of Peter Kalasz Photography</>,
  },
  {
    src: opening_3,
    alt: 'Opening Image 3',
    caption: <>Chuck Tasaka thanking JCLS, City of Greenwood, Landscaping crew  and Greenwood Museum.
    <br /><br />
    Photos Courtesy of Peter Kalasz Photography</>,
  },
  {
    src: opening_4,
    alt: 'Opening Image 4',
    caption: <>Welcome dance Okinawa style.
    <br /><br />
    Photos Courtesy of Peter Kalasz Photography</>,
  },
  {
    src: restoration8,
    alt: 'Restoration Image 8',
    caption: <>Grand Opening of Nikkei Memorial Garden July 20th, 2025.  Many thanks to JCLS, City of Greenwood Public Works and Greenwood Museum for your unbelievable support.
    <br /> <br />
    Mayor John Bolt, Linda Kawamoto-Reid, JCLS CEO Susanne Tabata,  Clare Folvik, Kumpei Wakino.  Holding the ribbons are Laura Yamaguchi and Rachel Yamaguchi.</>,
  },
  {
    src: opening_6,
    alt: 'Family members attending the grand opening.',
    caption: <>Family members attending the 2025 grand opening of the memorial garden.</>,
  },
  {
    src: opening_7,
    alt: 'Family members attending the grand opening.',
    caption: <>Nieces friends Derek Imai, Anthony Yamamura and Wayne Durban with Jodi and Maureen.</>,
  },
  {
    src: opening_8,
    alt: 'Family members attending the grand opening.',
    caption: <>Nieces Kathleen, Jodi, Patti, Cindy and Maureen.</>,
  },
  {
    src: opening_9,
    alt: 'Yamaguchi-Greaves Family',
    caption: <>Yamaguchi-Greaves Family.  Laura and Rachel in there colourful yukata were the ribbon holders.</>,
  },
  {
    src: opening_5,
    alt: 'Opening Image 5',
    caption: <>As is the Japanese custom is when you start a project, you add one eye.  When the project is completed, you colour in the other eye to signify a successful result.</>,
  },
];


const VISITORS_IMAGES: GalleryImage[] = [
  {
    src: visitors_1,
    alt: 'Duke of Edinburgh Commonwealth Study Conference group',
    caption: <>A Duke of Edinburgh Commonwealth Study Conference group visited Greenwood a few years ago.  Nikkei Legacy Park was not in their itinerary and I mentioned the park in passing.  It was a pleasant surprise for this group and they were amazed to learn about the Japanese Canadian history in Greenwood.  Members were from many Commonwealth countries.
    <br /><br />
    Photos Courtesy of Amy Fleming, Canada</>,
  },
  {
    src: visitors_2,
    alt: 'Duke of Edinburgh Commonwealth Study Conference group',
    caption: <>CSC members enjoyed learning about the Greenwood’s JC history
    <br /><br />
    Photos Courtesy of Amy Fleming, Canada</>,
  },
  {
    src: visitors_3,
    alt: 'Point Grey Secondary',
    caption: <>Teacher Mori Hamilton (Nakanishi) brought his Point Grey Secondary’s special group on a tour of the Japanese Canadian internment camps.  Greenwood was one of the stops since his mother Hisami Nakanishi was interned in Greenwood. 
    <br /><br />
    Photos Courtesy of Mr. Hamilton</>,
  },
  {
    src: visitors_4,
    alt: 'Bus tour group',
    caption: <>Every year since the 80’s, the Nikkei Place JC internment camp bus tour stops in Greenwood on their second day of the trip.  This is one of the tours. I believe this bus group had researchers from Australia, Japan, Brazil and U.S.A. 
    <br /><br />
    Photos Courtesy of Nikkei Place coordinator</>,
  },
  {
    src: visitors_5,
    alt: 'Attorney General Nikki Sharma',
    caption: <>Attorney General Nikki Sharma came to thank the Japanese Canadians for their resilience and perseverance. Some of the remaining JCs who made Greenwood their home postwar.
    <br /><br />
    February 2, 2024</>,
  },
  {
    src: visitors_7,
    alt: 'Attorney General Nikki Sharma',
    caption: <>Chuck Tasaka giving the history of how Greenwood became the first internment site.
    <br /><br />
    February 2, 2024</>,
  },
  {
    src: visitors_6,
    alt: 'Attorney General Nikki Sharma',
    caption: <>Attorney General Nikki Sharma enjoyed high tea at Greenwood Museum listening to shared stories by the local elders.
    <br /><br />
    February 2, 2024</>,
  },
  {
    src: visitors_8,
    alt: 'Mana and Manami Saito-Calvo',
    caption: <>Nikkei Legacy Park gets frequent visitors to learn about the Greenwood internment history. Mana and Manami Saito-Calvo standing in front of the pavilion.</>,
  },
  {
    src: visitors_9,
    alt: 'Researchers from Japan and U.S.',
    caption: <>We had researchers from Japan and U.S. visiting Greenwood.  Left to right:  front row Susan Tasaka, Karli Messer-Tasaka, Masumi Izumi of Doshisha University.  Back Chuck Tasaka, Takae Mio of Canada Museum in Mio, Japan, Kaz Tasaka, Sachiko Kawakami of Kyoto University, Norifumi Kawahara of Ritsumeikan University and Dr. Ian Baird of University of Wisconsin-Madison.</>,
  },
  {
    src: visitors_9a,
    alt: 'Nikei Food',
    caption: <>Nikkei Food</>,
  },
  {
    src: visitors_10,
    alt: 'Nikkei internment bus tour',
    caption: <>Nikkei Internment Bus Tour:<br />Stephanie Kawamoto with Chuck and Dr. Sachiko Kawakami.</>,
  },
  {
    src: visitors_11,
    alt: 'Nikkei internment bus tour',
    caption: <>Nikkei Internment Bus Tour:<br />Stephanie Kawamoto with Chuck and Janis Bridger, co-author of ‘Obaasan’s Boots’.</>,
  },
  {
    src: visitors_12,
    alt: 'Nikkei internment bus tour',
    caption: <>Nikkei Internment Bus Tour:<br />Lara Okihiro, co-author of ‘Obaasan’s Boots’ with cousin Janis Bridger with her daughters Imogene and Kira.</>,
  },

];


const VISITORS2_IMAGES: GalleryImage[] = [
  {
    src: visitors_13,
    alt: 'Lynn Enomoto',
    caption: <>Lynn Enomoto chatting with Nikkei Legacy Park caretaker</>,
  },
  {
    src: visitors_14,
    alt: 'Randy Enomoto and his dogs enjoy visiting Greenwood',
    caption: <>Randy Enomoto and his dogs enjoy visiting Greenwood</>,
  },
  {
    src: visitors_15,
    alt: 'Former Greenwood internee Mary Miki-Nomura at the Greenwood Museum',
    caption: <>Former Greenwood internee Mary Miki-Nomura at the Greenwood Museum</>,
  },
  {
    src: visitors_16,
    alt: 'Mary and brother Joe Miki returning to Greenwood in 2025',
    caption: <>Mary and brother Joe Miki returning to Greenwood in 2025</>,
  },
  {
    src: visitors_17,
    alt: 'Lara Okihiro ',
    caption: <>Lara Okihiro brought her family to Greenwood since her relatives were in Greenwood, the Okinobu and Hisaoka family.  Husband Mario with daughters Imogene and Kira.</>,
  },
  {
    src: visitors_18,
    alt: 'Kenzie McGruer',
    caption: <>Kenzie McGruer, granddaughter of Ichio Miki paid a visit and toured the places of her grandfather.  She made a spiritual connection with her family in Greenwood.</>,
  },
  {
    src: visitors_19,
    alt: 'David and Arlene Yoshida',
    caption: <>David and Arlene Yoshida visited Greenwood in 2026.  David wanted to visit his old stomping ground where his parents, uncles and aunts were interned here. 
    <br /><br />
    Photos Courtesy of Arlene Nishi-Yoshida</>,
  },
  {
    src: visitors_20a,
    alt: 'Masako Oka Stilwell',
    caption: <>Masako Oka Stilwell was on the bus tour.  She wrote about the first Japanese Canadian nurse allowed to be employed by St. Paul’s Hospital in Vancouver in the 1930’s.  It took Fr. Benedict Quigley to pressure the hospital to hire Asians.  Nurse Dorothy Nakamachi was interned in Greenwood.</>,
  },
  {
    src: visitors_21,
    alt: 'Karen Koyanagi-Geiger',
    caption: <>Karen Koyanagi-Geiger is a writer of Senkusha series for Nikkei Voice and the Bulletin.</>,
  },
  {
    src: visitors_22,
    alt: 'Karen Koyanagi-Geiger',
    caption: <>Janet Mori of Vernon paid a visit to Nikkei Legacy Park</>,
  },
  {
    src: visitors_23,
    alt: 'Jason Higo',
    caption: <>Jason Higo visited Nikkei Legacy Park with Rebecca</>,
  },
  {
    src: visitors_24,
    alt: 'Daryl Storey',
    caption: <>Former student Daryl Storey paid a surprise visit.
    <br /><br />Photo Drew Storey</>,
  },
];


const VISITORS3_IMAGES: GalleryImage[] = [
  {
    src: visitors_25,
    alt: 'Yuks Watano',
    caption: <>Visitor Yuks Watano dropped in to visit Nikkei Legacy Park</>,
  },
  {
    src: visitors_26,
    alt: 'Fr. Gene Morishita-Miki and wife Bernadette',
    caption: <>Fr. Gene Morishita-Miki and wife Bernadette with their family visited Greenwood to find their family roots and the Catholic contribution at SHS</>,
  },
  {
    src: visitors_27,
    alt: 'Aaron Oye',
    caption: <>Aaron Oye brought his family to see his father’s plaque.<br /><br />Photo by Aaron Oye</>,
  },
  {
    src: visitors_28,
    alt: 'Sylvia Campbell',
    caption: <>Sylvia Campbell of Olympia, Washington with Dr. Paula Fujiwara of S.F. visited Nikkei Legacy Park to study nutritional value or lack thereof</>,
  },
  {
    src: visitors_29,
    alt: 'Nikita Kitagawa',
    caption: <>My former skipper from Cinnabar Valley Elementary School, Nikita Kitagawa paid a surprise visit to Nikkei Legacy Park.  Nikita was on her way to find out her grandparents’ New Denver internment site.</>,
  },

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
  {
    src: fundraiser,
    alt: 'first major fundraiser ',
    caption: <>The first major fundraiser was held at Richmond’s St. Joseph the Worker gymnasium in 2017, and it was an overwhelming success.  It was the beginning of Nikkei Legacy Park to expand the interpretive panels and WWI JC veterans monument.  Thank you for all your support. </>,
  },
];

const RESTORATION_IMAGES: GalleryImage[] = [
  {
    src: restoration9,
    alt: 'Beginning of Nikkei Legacy Park family plaque project 2016-17.',
    caption: <>This was the beginning of Nikkei Legacy Park family plaque project 2016-17.</>,
  },
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
  {
    src: restoration10,
    alt: 'Nikkei Legacy Park Sign at Night',
    caption: <>Designer Cornel Hanson suggested adding the illuminated sign</>,
  },
];


const LANDSCAPING_IMAGES: GalleryImage[] = [
  {
    src: landscaping_1,
    alt: 'Landscaping Image 1',
    caption: <>Kunon Landscaping Company and Japonica Landscaping & Environment Farm Ltd and crew created a beautiful but serene 15th century rock garden (Karesansui) to enhance the landscape of Greenwood.  Kumpei Wakino, Yosuke, Myles Berney, Hiro Okusa.</>,
  },
  {
    src: landscaping_3,
    alt: 'Landscaping Image 3',
    caption: <>Greenwood Nikkei Memorial garden has made a significant improvement to the landscape of our community.  Many more people drop in to view the “ karekansui” dry garden..</>,
  },
  {
    src: landscaping_4,
    alt: 'Landscaping Image 4',
    caption: <>Greenwood Nikkei Memorial garden has made a significant improvement to the landscape of our community.  Many more people drop in to view the “ karekansui” dry garden.</>,
  },
  {
    src: landscaping_5,
    alt: 'Landscaping Image 5',
    caption: <>Greenwood Nikkei Memorial garden has made a significant improvement to the landscape of our community.  Many more people drop in to view the “ karekansui” dry garden.</>,
  },
  {
    src: landscaping_6,
    alt: 'Landscaping Image 6',
    caption: <>Greenwood Nikkei Memorial garden has made a significant improvement to the landscape of our community.  Many more people drop in to view the “ karekansui” dry garden.</>,
  },
  {
    src: landscaping_2,
    alt: 'Landscaping Image 2',
    caption: <>Winter scene:  Greenwood Nikkei Memorial Garden dedicated to the 1200 Japanese Canadians who came to Greenwood April 26th, 1942.  Most stayed and made their homes after 1945.  There are still a few JCs are still residing in this community.</>,
  }
];


const FOOD_IMAGES: GalleryImage[] = [
  {
    src: food_1,
    alt: 'Nikkei Comfort Food',
    caption: <>This is “ma-ze gohan” to the Japanese Canadians.  It’s Takikomi gohan in Japan.  This maze gohan was made by late Martha (Masako Honda) Johnson.  It was her mom’s recipe.</>,
  },
  {
    src: food_2,
    alt: 'Nikkei Comfort Food',
    caption: <>My brother Kaz Tasaka retain old traditional food.  He made the spinach tsukemono and he still has his adult children harvest iwa nori.  Kaz meticulously cures the nori.</>,
  },
  {
    src: food_3,
    alt: 'Nikkei Comfort Food',
    caption: <>Fish and kabocha are staple meal in Steveston with ochazuke with furikake.</>,
  },
  {
    src: food_4,
    alt: 'Nikkei Comfort Food',
    caption: <>Umeboshi made by Susan Tasaka.</>,
  },
  {
    src: food_5,
    alt: 'Nikkei Comfort Food',
    caption: <>Voila!  Here is a typical Nikkei meal with side dishes.</>,
  },
  {
    src: food_7,
    alt: 'Nikkei Comfort Food',
    caption: <>This is homemade kinpira made from gobo (burdock) by Dianne Tasaka.</>,
  },
  {
    src: food_8,
    alt: 'Homemade manju',
    caption: <>Homemade manju by Steveston Buddhist Church.</>,
  },
  {
    src: spring2026_9,
    alt: 'Fuki',
    caption: <>Japanese early immigrants brought Fuki to Canada.     Initially, Fuki might have been the only source of Japanese food.  Therefore, wherever Fuki is found, there must have been a Japanese settlement in places like Cumberland and Salt Spring Island.  Later, Fuki was found in internment camps.</>,
  },
  {
    src: food_10,
    alt: 'Fuki',
    caption: <>Cooked Fuki.</>,
  },
  {
    src: food_9,
    alt: 'Shiso',
    caption: <>Shiso is another Japanese delicacy. They are used to enhance the flavour of umeboshi, sunomono and onigiri.</>,
  },
  {
    src: food_6,
    alt: 'Dr. Paula Fujiwara',
    caption: <>Dr. Paula Fujiwara, a renowned physician of San Francisco and Sylvia Campbell of Olympia, Washington visited Nikkei Legacy Park to research nutrition in Japanese American and JC diet during the internment years.</>,
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
  {
    src: buildingArticle_1,
    alt: '',
  },
  {
    src: buildingArticle_2,
    alt: '',
    caption: (
      <>Under the Greenwood Museum, Rita Daminato and Ginny Kelly collected all these documents with the Secretary of States of Kelowna.  </>
    ),
  },
  {
    src: buildingArticle_3,
    alt: '',
    caption: (
      <>Under the Greenwood Museum, Rita Daminato and Ginny Kelly collected all these documents with the Secretary of States of Kelowna.  </>
    ),
  },
  {
    src: buildingArticle_4,
    alt: '',
    caption: (
      <>Under the Greenwood Museum, Rita Daminato and Ginny Kelly collected all these documents with the Secretary of States of Kelowna.  </>
    ),
  },
  {
    src: buildingArticle_5,
    alt: '',
    caption: (
      <>Under the Greenwood Museum, Rita Daminato and Ginny Kelly collected all these documents with the Secretary of States of Kelowna.  </>
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
    {
    src: location_4,
    alt: 'Old Smelter in Anaconda',
    caption: (
      <>
        Old smelter in Anaconda just south-west of Greenwood.  250,000 bricks were used to build the tall chimney.
        <br /><br />
        Photo courtesy of Greenwood Museum
      </>
    ),
  },
    {
    src: location_5,
    alt: 'B.C. Security Commission Garden',
    caption: (
      <>
        B.C. Security Commission Garden:  BCSC found a plot of land by the creek towards the smelter for ‘apartment’ dwellers.  You could see elderly men and women carrying a large okaki tin full of water from the creek.  Men made sprinkler device by drilling holes on the bottom of the old tobacco can and a short handle that went through both sides of the can.
      </>
    ),
  },
  {
    src: location_6,
    alt: 'Post Office',
    caption: (
      <>
        Post Office opened in 1915, but the clock was installed in 1914.  Custom Office was upstairs.  During the war years, Nancy Asahina worked here until college back east.  Molly Fukui was employed after Nancy and later became post mistress of Greenwood.  Mrs. Yoshiko Hamanishi worked there part-time.
      </>
    ),
  },
  {
    src: location_7,
    alt: 'Barrett House',
    caption: (
      <>
        Once Barrett House.  Mayor W.E. McArthur Sr lived in this house while he was a mayor handling the affairs of the Japanese Canadians.
      </>
    ),
  },
  {
    src: location_8,
    alt: 'Court House',
    caption: (
      <>
        Court House and office of the Supreme Court of B.C.  There was a jail in the basement. Presently, it's the City Hall.
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
    {
      src: interneeArticle_1,
      alt: '',
    },
    {
      src: interneeArticle_2,
      alt: '',
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
      src: housing1943_3,
      alt: '1943 census',
      // caption: (
      //   <>1943 Japanese Canadian Housing census of Greenwood City.  Some stayed in “self-supporting” houses shared by three or four families.
      //     <br /><br />
      //     Photo courtesy of Greenwood Museum</>
      // ),
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
    {
      src: labourDay_17,
      alt: 'Labour Day 1940s',
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
    {
      src: historical1960_7,
      alt: 'Labour Day 1964',
    },
    {
      src: historical1960_8,
      alt: 'Greenwood to be Cpmgratulated',
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
        <>By 1950, the kindergarten class was smaller.  In 1953-54, SHS closed due to dwindling enrolment, but kept the kindergarten class open.  In 1967, the Franciscan Sisters left Greenwood.
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
        <>United Church left Grace Namba, Visiting Sobel Loveys and Madeleine Bock
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
        <>Sawmill and logging were the main industry of Greenwood.  Many Japanese Canadians were employed by various sawmills in town.  Cooke Lumber Ltd, Folvik Mill, Boundary Falls Mill and Sandner’s Box Mill.  There were smaller mills Tedesco and Forshaw.
          <br /><br />
          Photo courtesy of Jim Taylor</>
      ),
    },
    {
      src: sawmill_6,
      alt: 'Sawmill',
      caption: (
        <>Sawmill and logging were the main industry of Greenwood.  Many Japanese Canadians were employed by various sawmills in town.  Cooke Lumber Ltd, Folvik Mill, Boundary Falls Mill and Sandner’s Box Mill.  There were smaller mills Tedesco and Forshaw.
          <br /><br />
          Photo courtesy of Jim Taylor</> 
      ),
    },
  ];

  
const CEMENTERY_IMAGES: GalleryImage[] = [
    {
      src: cementery_1,
      alt: 'Cementery',
      caption: (
        <>Greenwood Cemetery</>
      ),
    },
    {
      src: cementery_2,
      alt: 'Bob Maeda headstone in Greenwood Cemetery',
      caption: (
        <>Bob Maeda</>
      ),
    },
    {
      src: cementery_3,
      alt: 'Joseph Maeda headstone in Greenwood Cemetery',
      caption: (
        <>Joseph Maeda</>
      ),
    },
    {
      src: cementery_4,
      alt: 'Mary Masu Hayashi headstone in Greenwood Cemetery',
      caption: (
        <>Mary Masu Hayashi</>
      ),
    },
    {
      src: cementery_5,
      alt: 'Koto Watanabe headstone in Greenwood Cemetery',
      caption: (
        <>Koto Watanabe owned the Cherry Shoppe Beauty Salon in Greenwood.</>
      ),
    },
    {
      src: cementery_6,
      alt: 'Yonesaburo Kuroda headstone in Greenwood Cemetery',
      caption: (
        <>Yonesaburo Kuroda is the only WWI JC vet buried in Greenwood.  He had no next of kin in Canada so local Legion had a service for him.</>
      ),
    },
    {
      src: cementery_7,
      alt: 'Sadako Matsuba headstone in Greenwood Cemetery',
      caption: (
        <>Sadako Matsuba</>
      ),
    },
  ];

  
  
const SPORTS_IMAGES: GalleryImage[] = [
    {
      src: sports_1,
      alt: 'Early Hockey',
      caption: (
        <>Early hockey teams in the 40's.  There were three teams, Bruins, Tigers and Hepcats.  Bruins won the cup.  The arena was located next(south) to Nikkei Legacy Park. 
          <br /><br />
          Photo courtesy of Greenwood Museum</> 
      ),
    },
    {
      src: sports_2,
      alt: 'Early Hockey',
      caption: (
        <>Men's team the Greenwood Dynamiters in the late 50’s
          <br /><br />
          Photo courtesy of Vince Hall</> 
      ),
    },
    {
      src: sports_3,
      alt: 'Early Hockey',
      caption: (
        <>Sacred Heart School had a hockey team in the 40’s.  Fr. Damien Sato and Fr. Peter Baptist Katsuno were coaches. 
          <br /><br />
          Photo courtesy of Francis Nakagawa</> 
      ),
    },
    {
      src: sports_4,
      alt: 'Greenwood Sports Arena',
      caption: (
        <>Greenwood Sports Arena was an indoor natural ice rink.  Public ice skating, Snow Carnival, broomball and hockey games were played in the winter.  basketball was played when the ice melted.  Makeshift boards were laid.  During the game, coaches carried a hammer!  When a nail popped up, they stopped the game to hammer it back in.</> 
      ),
    },
    {
      src: sports_5,
      alt: 'athletic support',
      caption: (
        <>This athletic support was owned by Stephen Tasaka. It was called a “nut cup” as well.  In 1957, he decided to try out in goal.  During practice, pucks were directed towards the cup by cheeky teammates.  Dents are evident.</> 
      ),
    },
    {
      src: sports_6,
      alt: 'Softball Game',
      caption: (
        <>Christina Lake and Greenwood Japanese Canadian teams played a softball game in the 1943 Labour Day celebration. It was featured in the local news for JC contribution as part of the local festivities.  This field was located between Silver and Gold Street.  Present day Canco would be to the right.</> 
      ),
    },
    {
      src: sports_7,
      alt: 'Babe Ruth Baseball League ',
      caption: (
        <>This was the first year of Babe Ruth Baseball League in 1960.  Grand Forks had three teams, Cubs, Braves and Tigers.  Christina Lake Lakers made it a five-team league.
          <br /><br />
          Photo courtesy of Cynthia Wallace Price.</> 
      ),
    },
    {
      src: sports_8,
      alt: 'Judo in Greenwood',
      caption: (
        <>Judo was a late starter in Greenwood.  Yosh Mitsui who was a kendo master was also a black belt in judo.  John Huntley from Grand Forks introduced judo in Greenwood initially and Yosh took over the Greenwood club.  At first, canvas mat was used at the old Sacred Heart School.  Then judo mats were added when the club moved to McArthur Centre where the Kettle River Art Club is located.</> 
      ),
    },
    {
      src: sports_9,
      alt: 'Hockey in Greenwood',
      caption: (
        <>This is one of the earliest hockey teams in Greenwood when the Japanese Canadians arrived.  Yuki Onizuka the goalie chose to go to Toronto in 1946 and started NHL, the Nisei Hockey League! </> 
      ),
    },
    {
      src: sports_10,
      alt: 'Early Greenwood hockey teams',
      caption: (
        <>Early Greenwood hockey teams during the internment years.  Mayor McArthur Sr opened the ice arena to provide healthy, positive activities for the younger people.  In the early 1900's during the mining days, Greenwood was a feeder team along with Grand Forks and Phoenix for the Vancouver Millionaires that won the Stanley Cup in 1915.</> 
      ),
    },
    {
      src: sports_11,
      alt: 'Early Greenwood hockey teams',
      caption: (
        <>Early Greenwood hockey teams during the internment years.  Mayor McArthur Sr opened the ice arena to provide healthy, positive activities for the younger people.  In the early 1900's during the mining days, Greenwood was a feeder team along with Grand Forks and Phoenix for the Vancouver Millionaires that won the Stanley Cup in 1915.</> 
      ),
    },
    {
      src: sports_12,
      alt: 'Early Greenwood hockey teams',
      caption: (
        <>Early Greenwood hockey teams during the internment years.  Mayor McArthur Sr opened the ice arena to provide healthy, positive activities for the younger people.  In the early 1900's during the mining days, Greenwood was a feeder team along with Grand Forks and Phoenix for the Vancouver Millionaires that won the Stanley Cup in 1915.</> 
      ),
    },
  ];
  
  
const SPORTS2_IMAGES: GalleryImage[] = [
    {
      src: sports_13,
      alt: 'Early Hockey',
      caption: (
        <>Caption to be added soon.</> 
      ),
    },
    {
      src: sports_14,
      alt: 'Early Hockey',
      caption: (
        <>Caption to be added soon.</> 
      ),
    },
    {
      src: sports_15,
      alt: 'Early Hockey',
      caption: (
        <>Caption to be added soon.</> 
      ),
    },
    {
      src: sports_16,
      alt: 'Greenwood Monarchs Hockey Team',
      caption: (
        <>Postwar Greenwood Monarchs hockey teams during the early 50's.</> 
      ),
    },
    {
      src: sports_17,
      alt: 'Greenwood Monarchs Hockey Team',
      caption: (
        <>Postwar Greenwood Monarchs hockey teams during the early 50's.</> 
      ),
    },
    {
      src: sports_18,
      alt: 'Greenwood Monarchs Hockey Team',
      caption: (
        <>Postwar Greenwood Monarchs hockey teams during the early 50's.</> 
      ),
    },
    {
      src: sports_19,
      alt: 'Greenwood Hawks Hockey Team',
      caption: (
        <>This was one of the later teams in the early 60's.  They were called the Greenwood Hawks. Hockey display at the Greenwood Museum in 2015.</> 
      ),
    },
    {
      src: sports_20,
      alt: 'Greenwood Hawks Hockey Team',
      caption: (
        <>This was one of the later teams in the early 60's.  They were called the Greenwood Hawks. Hockey display at the Greenwood Museum in 2015.</> 
      ),
    },
    {
      src: sports_21,
      alt: 'Greenwood Hawks Hockey Team',
      caption: (
        <>This was one of the later teams in the early 60's.  They were called the Greenwood Hawks. Hockey display at the Greenwood Museum in 2015.</> 
      ),
    },
    {
      src: sports_22,
      alt: 'Greenwood Museum featured Hockey History',
      caption: (
        <>Greenwood Museum featured Hockey History one year and many hockey memorabilia were displayed.</> 
      ),
    },
    {
      src: sports_23,
      alt: 'Greenwood Museum featured Hockey History',
      caption: (
        <>Greenwood Museum featured Hockey History one year and many hockey memorabilia were displayed.</> 
      ),
    },
    {
      src: sports_24,
      alt: 'Greenwood Museum featured Hockey History',
      caption: (
        <>Greenwood Museum featured Hockey History one year and many hockey memorabilia were displayed.</> 
      ),
    },
    {
      src: sports_25,
      alt: 'First High School Hockey Jersey',
      caption: (
        <>This was the first high school hockey jersey designed by Stephen Tasaka circa 1957.</> 
      ),
    },
  ];
    
const ACTIVELIFE_IMAGES: GalleryImage[] = [
    {
      src: active_life_1,
      alt: 'Active Life',
      caption: (
        <>Academy of Domestic Arts was one of the first activity for the ladies who wanted to learn the skills of sewing.  This 1947 photo shows local ladies as members
          <br /><br />
          Photo courtesy of Greenwood Museum</> 
      ),
    },
    {
      src: active_life_2,
      alt: 'Academy of Domestic Arts',
      caption: (
        <>Mrs. Kurisu, Mrs. Tamoto and Mrs. Ooka started the Academy of Domestic Arts probably in 1943.  This is 1947 when the war ended. In 1946, some of these members moved east of the Rockies or to Japan.</> 
      ),
    },
    {
      src: active_life_3,
      alt: 'Pool Hall',
      caption: (
        <>Playing pool was another popular activity.  This building once housed the Academy of Domestic Arts.  This 1947 photo also had Arizo Tasaka cutting Tadao Yoshida’s hair in the background.</> 
      ),
    },
    {
      src: active_life_4,
      alt: 'Hiking and picnicking',
      caption: (
        <>Hiking and picnicking to the smelter was another pastime for the JCs in the 40’s.</> 
      ),
    },
    {
      src: active_life_5,
      alt: 'Katana kiri',
      caption: (
        <>Katana kiri was very popular for the boys.  This is SHS but most of the time it was played behind #5 Building.</> 
      ),
    },
    {
      src: active_life_6,
      alt: 'Maypole Dance',
      caption: (
        <>Maypole Dance was performed at May Day celebration.</> 
      ),
    },
    {
      src: active_life_7,
      alt: 'Boy Scouts and Cub Scouts',
      caption: (
        <>Boy Scouts and Cubs was held above Jewel Theatre at the old Hunter-Kendrick Building.  Greenwood Museum now stands where the scouts congregated.
          <br /><br />
          Photo courtesy of Greenwood Museum</> 
      ),
    },
    {
      src: active_life_8,
      alt: 'Crowning of May Day Queen',
      caption: (
        <>Crowning of May Day Queen was another exciting time for the girls.  Dorothy Otani was crowned May Queen.</> 
      ),
    },
    {
      src: active_life_9,
      alt: 'Shigin in the 50’s',
      caption: (
        <>Shigin in the 50’s was very popular with the adults.
          <br /><br />
          Photo courtesy of Greenwood Museum</> 
      ),
    },
    {
      src: active_life_10,
      alt: 'Embroidery club',
      caption: (
        <>Embroidery club was also another activity for the ladies.</> 
      ),
    },
    {
      src: active_life_11,
      alt: 'Odori or Japanese dance',
      caption: (
        <>Odori or Japanese dance was a cultural activity enjoyed by young ladies.  Monica Tasaka, Catherine Tanaka and Maryann Uyede performing at SHS.</> 
      ),
    },
    {
      src: active_life_12,
      alt: 'Crowning of the Snow Queen',
      caption: (
        <>Crowning of the Snow Queen in 1945.  JoAnne Cowdrill is passing the crown to Maryann Miyagishima.  It was a significant year since the war ended.  JoAnne gave a heartfelt speech.  Esther Kanda is the attendant and Mayor McArthur Sr in the background.</> 
      ),
    },
    {
      src: active_life_13,
      alt: 'Crowning of the Snow Queen',
      caption: (
        <>Greenwood had ice carnival where the spotlight was the crowning of Snow Queen.  Here, Joan Aldham was queen and Lorraine Miyagishima was an attendant.</> 
      ),
    },
  ];

     
const ACTIVELIFE2_IMAGES: GalleryImage[] = [
    {
      src: active_life_14,
      alt: 'Sleigh Riding',
      caption: (
        <>Sleigh riding was so much fun for the kids speeding down Phoenix Road down to Greenwood Street!</> 
      ),
    },
    {
      src: active_life_15,
      alt: 'Greenwood Hospital',
      caption: (
        <>Greenwood Hospital was very busy with babies being born in the 40’s
          <br /><br />
          Photo courtesy of Greenwood Museum</> 
      ),
    },
    {
      src: active_life_16,
      alt: 'Jacks',
      caption: (
        <>Jacks was a very popular pastime for both boys and girls.</> 
      ),
    },
    {
      src: active_life_17,
      alt: 'Riding the inner tube',
      caption: (
        <>Riding the inner tube down Boundary Creek was fun!  Jerry, Chuck Tasaka and Dennis Hamaguchi.  The boxmill burner provided warmth after swimming in the icy cold creek.</> 
      ),
    },
    {
      src: active_life_18,
      alt: 'Swimming in Boundary Creek',
      caption: (
        <>Great summer holiday activity.  This is First Bridge, now Louisa Bridge.  However, children had swimming holes at Second and Steel Bridge.  Kids built dams to raise the water level.</> 
      ),
    },
    {
      src: active_life_19,
      alt: 'Pick up Sticks',
      caption: (
        <>These were great indoor activities.  Pick up Sticks needed focus, steady hands and patience.</> 
      ),
    },
    {
      src: active_life_20,
      alt: 'Jacks and Teddly Winks',
      caption: (
        <>These were great indoor activities.  Jacks needed agility and quick reflexes.  Teddly Winks took skills and concentration.</> 
      ),
    },
    {
      src: active_life_21,
      alt: 'Greenwood Park Pond',
      caption: (
        <>Greenwood Park had a large pond where a raft was built for children to explore the other end of the pond.</> 
      ),
    },
    {
      src: active_life_22,
      alt: 'Pro Rec tumbling club',
      caption: (
        <>Pro Rec tumbling club was a great activity to improve agility and strength.</> 
      ),
    },
    {
      src: active_life_23,
      alt: 'Pro Rec tumbling club',
      caption: (
        <>Pro Rec tumbling club was a great activity to improve agility and strength.</> 
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

const SearchIcon: React.FC = () => (
  <svg
    className="search-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle
      cx="10.5"
      cy="10.5"
      r="6.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="15.5"
      y1="15.5"
      x2="21"
      y2="21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// ── GalleryPage ─────────────────────────────────────────────────────────────

type GalleryFilter = 'all' | 'nikkei' | 'places' | 'internment' | 'community' | 'restoration' | 'ohairi' | 'culture' ;

const PRIMARY_FILTER_BUTTONS: { key: GalleryFilter; label: string }[] = [
  { key: 'all',        label: 'All' },
  { key: 'nikkei',     label: 'Nikkei Legacy Park' },
  { key: 'restoration', label: 'Restoration' },
  { key: 'ohairi',     label: 'Ohairi Park' },
  { key: 'culture',     label: 'Nikkei Culture' },
];

const ARCHIVAL_FILTER_BUTTONS: { key: GalleryFilter; label: string }[] = [
  { key: 'places',     label: 'Places' },
  { key: 'internment', label: 'Internment' },
  { key: 'community',  label: 'Community Life' },
];

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<GalleryFilter>('all');
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const matchesQuery = (title: string) => q === '' || title.toLowerCase().includes(q);

  const ALL_CAROUSELS: { filterKey: GalleryFilter; title: string }[] = [
    { filterKey: 'nikkei', title: 'Springtime in the Park: June 2026' },
    { filterKey: 'nikkei', title: 'Nikkei Legacy Park: May 2026' },
    { filterKey: 'nikkei', title: 'Nikkei Legacy Park Panels' },
    { filterKey: 'nikkei', title: 'Grand Opening: July 20, 2025' },
    { filterKey: 'nikkei', title: 'Visitors to Nikkei Legacy Park: Gallery 1' },
    { filterKey: 'nikkei', title: 'Visitors to Nikkei Legacy Park: Gallery 2' },
    { filterKey: 'nikkei', title: 'Visitors to Nikkei Legacy Park: Gallery 3' },
    { filterKey: 'restoration', title: 'Restoration and Renovation: 2016-2018' },
    { filterKey: 'restoration', title: 'Japanese Rock Garden Landscaping' },
    { filterKey: 'ohairi', title: 'A Look Back: Ohairi Park (Pre-2014)' },
    { filterKey: 'culture', title: 'Nikkei Comfort Food' },
    { filterKey: 'places', title: '1943 Japanese Canadian Housing' },
    { filterKey: 'places', title: 'Historical Buildings' },
    { filterKey: 'places', title: 'Historical Locations' },
    { filterKey: 'places', title: 'Sawmill & Logging Industry in Greenwood' },
    { filterKey: 'places', title: 'Greenwood Cemetery' },
    { filterKey: 'internment', title: 'Arrival of Japanese Canadians to Greenwood: 1942' },
    { filterKey: 'internment', title: 'Historical Photos' },
    { filterKey: 'internment', title: 'Early Internees 1942-45' },
    { filterKey: 'community', title: 'Sacred Heart School Life' },
    { filterKey: 'community', title: 'United Church' },
    { filterKey: 'community', title: 'Labour Day Parades 1940s' },
    { filterKey: 'community', title: 'Labour Day Parades 1950s' },
    { filterKey: 'community', title: 'Natsu Matsuri - Summer Festival 1964' },
    { filterKey: 'community', title: 'Sports: Gallery 1' },
    { filterKey: 'community', title: 'Sports: Gallery 2' },
    { filterKey: 'community', title: 'Active Life in Greenwood: Gallery 1' },
    { filterKey: 'community', title: 'Active Life in Greenwood: Gallery 2' },
  ];

  const hasVisibleResults = ALL_CAROUSELS.some(
    ({ filterKey, title }) =>
      (filter === 'all' || filter === filterKey) && matchesQuery(title)
  );

  return (
    <main className="gallery-page">

      <h1 className="gallery-page-title">Photo Galleries</h1>

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

      {/* ── Search bar ── */}
      <div className="articles-search-wrapper">
        <label htmlFor="gallery-search" className="sr-only">Search galleries</label>
        <div className="articles-search-box">
          <SearchIcon />
          <input
            id="gallery-search"
            type="search"
            className="articles-search-input"
            placeholder="Search gallery titles…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && (
            <button
              className="articles-search-clear"
              onClick={() => setQuery('')}
              aria-label="Clear search"
            >
              &#x2715;
            </button>
          )}
        </div>
      </div>

      {(filter === 'all' || filter === 'nikkei') && (
        <>
          {matchesQuery('Springtime in the Park: June 2026') && <Carousel images={JUNE_IMAGES}  title="Springtime in the Park: June 2026" />}
          {matchesQuery('Nikkei Legacy Park: May 2026') && <Carousel images={MAY_IMAGES}   title="Nikkei Legacy Park: May 2026" />}
          {matchesQuery('Nikkei Legacy Park Panels') && <Carousel images={PANEL_IMAGES} title="Nikkei Legacy Park Panels" />}
          {matchesQuery('Grand Opening: July 20, 2025') && <Carousel images={OPENING_IMAGES}   title="Grand Opening: July 20, 2025" />}
          {matchesQuery('Visitors to Nikkei Legacy Park: Gallery 1') && <Carousel images={VISITORS_IMAGES}   title="Visitors to Nikkei Legacy Park: Gallery 1" />}
          {matchesQuery('Visitors to Nikkei Legacy Park: Gallery 2') && <Carousel images={VISITORS2_IMAGES}   title="Visitors to Nikkei Legacy Park: Gallery 2" />}
          {matchesQuery('Visitors to Nikkei Legacy Park: Gallery 3') && <Carousel images={VISITORS3_IMAGES}   title="Visitors to Nikkei Legacy Park: Gallery 3" />}
        </>
      )}

      {(filter === 'all' || filter === 'restoration') && (
        <>
        {matchesQuery('Restoration and Renovation: 2016-2018') && <Carousel images={RESTORATION_IMAGES} title="Restoration and Renovation: 2016-2018" />}
        {matchesQuery('Japanese Rock Garden Landscaping') && <Carousel images={LANDSCAPING_IMAGES} title="Japanese Rock Garden Landscaping" />}
        </>
      )}
      {(filter === 'all' || filter === 'ohairi') && (
        matchesQuery('A Look Back: Ohairi Park (Pre-2014)') && <Carousel images={MISC_IMAGES} title="A Look Back: Ohairi Park (Pre-2014)" />
      )}
      {(filter === 'all' || filter === 'culture') && (
        <>
          {matchesQuery('Nikkei Comfort Foods') && (
            <>
              <Carousel images={FOOD_IMAGES} title="Nikkei Comfort Foods" />
              <p className="gallery-section-link">
                Featured article:{' '}
                
                  <a href="https://discovernikkei.org/en/journal/2022/9/4/comfort-food/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canadian Nikkei Comfort Food by Chuck Tasaka
                </a>
              </p>
            </>
          )}
        </>
      )}
      {(filter === 'all' || filter === 'places') && (
        <>
          {matchesQuery('1943 Japanese Canadian Housing') && <Carousel images={HOUSING_IMAGES} title="1943 Japanese Canadian Housing" />}
          {matchesQuery('Historical Buildings') && <Carousel images={BUILDING_IMAGES}   title="Historical Buildings" />}
          {matchesQuery('Historical Locations') && <Carousel images={LOCATIONS_IMAGES}   title="Historical Locations" />}
          {matchesQuery('Sawmill & Logging Industry in Greenwood') && <Carousel images={SAWMILLS_IMAGES} title="Sawmill & Logging Industry in Greenwood" />}
          {matchesQuery('Greenwood Cemetery') && <Carousel images={CEMENTERY_IMAGES} title="Greenwood Cemetery" />}
        </>
      )}
      {(filter === 'all' || filter === 'internment') && (
        <>
          {matchesQuery('Arrival of Japanese Canadians to Greenwood: 1942') && <Carousel images={BW_IMAGES_2} title="Arrival of Japanese Canadians to Greenwood: 1942" />}
          {matchesQuery('Historical Photos') && <Carousel images={BW_IMAGES}   title="Historical Photos" />}
          {matchesQuery('Early Internees 1942-45') && <Carousel images={INTERNEES_IMAGES} title="Early Internees 1942-45" />}
        </>
      )}
      {(filter === 'all' || filter === 'community') && (
        <>
          {matchesQuery('Sacred Heart School Life') && <Carousel images={SACREDHEART_IMAGES} title="Sacred Heart School Life" />}
          {matchesQuery('United Church') && <Carousel images={UNITEDCHURCH_IMAGES} title="United Church" />}
          {matchesQuery('Labour Day Parades 1940s') && <Carousel images={LAOBUR_DAY_IMAGES} title="Labour Day Parades 1940s" />}
          {matchesQuery('Labour Day Parades 1950s') && <Carousel images={LAOBUR_DAY1950_IMAGES} title="Labour Day Parades 1950s" />}
          {matchesQuery('Natsu Matsuri - Summer Festival 1964') && <Carousel images={HISTORICAL1960_IMAGES} title="Natsu Matsuri - Summer Festival 1964" />}
          {matchesQuery('Sports: Gallery 1') && <Carousel images={SPORTS_IMAGES} title="Sports: Gallery 1" />}
          {matchesQuery('Sports: Gallery 2') && <Carousel images={SPORTS2_IMAGES} title="Sports: Gallery 2" />}
          {matchesQuery('Active Life in Greenwood: Gallery 1') && <Carousel images={ACTIVELIFE_IMAGES} title="Active Life in Greenwood: Gallery 1" />}
          {matchesQuery('Active Life in Greenwood: Gallery 2') && <Carousel images={ACTIVELIFE2_IMAGES} title="Active Life in Greenwood: Gallery 2" />}
        </>
      )}

      {/* ── No results ── */}
      {query && !hasVisibleResults && (
        <p className="articles-no-results">No galleries match your search.</p>
      )}

    </main>
  );
};

export default GalleryPage;