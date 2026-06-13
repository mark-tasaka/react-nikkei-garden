// src/ResourcesPage.tsx
import React, { useState } from 'react';
import './css/Resources.css';

import discover1  from './img/articles/discover1.jpeg';
import discover2  from './img/articles/discover2.jpeg';
import discover3  from './img/articles/discover3.jpeg';
import discover4  from './img/articles/discover4.jpeg';
import discover5  from './img/articles/discover5.jpeg';
import discover6  from './img/articles/discover6.jpeg';
import discover7  from './img/articles/discover7.jpeg';
import discover8  from './img/articles/discover8.jpeg';
import discover9  from './img/articles/discover9.jpeg';
import discover10 from './img/articles/discover10.jpeg';
import discover11 from './img/articles/discover11.jpeg';
import discover12 from './img/articles/discover12.jpeg';
import discover13 from './img/articles/discover13.jpeg';
import discover14 from './img/articles/discover14.jpeg';
import discover15 from './img/articles/discover15.jpeg';
import discover16 from './img/articles/discover16.jpeg';
import discover17 from './img/articles/discover17.jpeg';
import discover18 from './img/articles/discover18.jpeg';
import discover19 from './img/articles/discover19.jpeg';
import discover20 from './img/articles/discover20.jpeg';
import discover21 from './img/articles/discover21.jpeg';
import discover22 from './img/articles/discover22.jpeg';
import discover23 from './img/articles/discover23.jpeg';
import discover24 from './img/articles/discover24.jpeg';
import discover25 from './img/articles/discover25.jpeg';
import discover26 from './img/articles/discover26.jpeg';
import discover27 from './img/articles/discover27.jpeg';
import discover28 from './img/articles/discover28.jpeg';
import discover29 from './img/articles/discover29.jpeg';
import discover30 from './img/articles/discover30.jpeg';
import discover31 from './img/articles/discover31.jpeg';
import discover32 from './img/articles/discover32.jpeg';
import discover33 from './img/articles/discover33.jpeg';
import discover35 from './img/articles/discover35.jpeg';
import discover36 from './img/articles/discover36.jpeg';
import discover37 from './img/articles/discover37.jpeg';
import discover38 from './img/articles/discover38.jpeg';
import discover39 from './img/articles/discover39.jpeg';
import discover40 from './img/articles/discover40.jpeg';
import discover41 from './img/articles/discover41.jpeg';
import discover42 from './img/articles/discover42.jpeg';
import discover43 from './img/articles/discover43.jpeg';
import discover44 from './img/articles/discover44.jpeg';

import legacies1   from './img/articles/legacies1.jpeg';
import legacies2 from './img/articles/legacies2.jpeg';

import greenwood1 from './img/articles/greenwood1.jpeg';

import bulletin1 from './img/articles/bulletin1.jpeg';
import bulletin2 from './img/articles/bulletin2.jpeg';
import bulletin3 from './img/articles/bulletin3.jpeg';
import bulletin4 from './img/articles/bulletin4.jpeg';
import bulletin5 from './img/articles/bulletin5.jpeg';

import jcVeterans1 from './img/articles/jcVeterans1.jpeg';
import jcVeterans2 from './img/articles/jcVeterans2.jpeg';

import canadian1 from './img/articles/canadian1.jpeg';

interface ArticleEntry {
  source:     string;
  sourceUrl:  string;
  title:      string;
  author:     string;
  date:       string;
  link:       string;
  excerpt:    string;
  img:        string;
}

const ARTICLES: ArticleEntry[] = [
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Greenwood, B.C.: First Internment Center',
    author:    'Chuck Tasaka',
    date:      'Jan. 29, 2016',
    link:      'https://discovernikkei.org/en/journal/2016/1/29/greenwood/',
    excerpt:   'Greenwood, British Columbia, in Canada became the first internment center when Nikkei people were uprooted and "relocated" from the coast of B.C. On December 7, 1941, Japan bombed Pearl Harbor, and shortly after Canada declared war on Japan when Hong Kong, a British Commonwealth, fell to the Japanese army.',
    img:       discover1,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     '75th and 76th Anniversary of the Greenwood Nikkei Internment Ceremony',
    author:    'Chuck Tasaka',
    date:      'Sept. 19, 2018',
    link:      'https://discovernikkei.org/en/journal/2018/9/19/greenwood-ceremony/',
    excerpt:   'Back in 1971, then Prime Minister Pierre Elliott Trudeau declared that Canada would adopt a multicultural policy that recognizes and respects a diversity of languages, customs and religion.',
    img:       discover2,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'The Ironies of the Japanese Canadian Internment History: Part 1—My Family\'s Life in Greenwood',
    author:    'Chuck Tasaka',
    date:      'June 1, 2023',
    link:      'https://discovernikkei.org/en/journal/2023/6/1/jc-internment-history-1/',
    excerpt:   'I was once so naive and ignorant about Japanese Canadian history. For many years, I neglected to dig deeper to learn about my personal family history as well as the larger injustices inflicted on Japanese Canadians.',
    img:       discover3,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'The Ironies of the Japanese Canadian Internment History: Part 2—Discovering Japanese Canadian History',
    author:    'Chuck Tasaka',
    date:      'June 2, 2023',
    link:      'https://discovernikkei.org/en/journal/2023/6/2/jc-internment-history-2/',
    excerpt:   'For too long, I lacked understanding about Japanese Canadian history and why World War II internment had happened. Even when I retired in 2002, I was still too busy coaching to research this history.',
    img:       discover4,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'My Family\'s Japanese Canadian History: I Never Knew What I Know Now',
    author:    'Chuck Tasaka',
    date:      'Oct. 25, 2025',
    link:      'https://discovernikkei.org/en/journal/2025/10/25/my-familys-jc-history/',
    excerpt:   'I was born in Midway, British Columbia in 1945. I was just a year old when my parents moved back to Greenwood—the first Japanese Canadian incarceration camp during World War II. I grew up in Greenwood not knowing that I was living in an internment camp.',
    img:       discover5,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Greenwood\'s 80th Anniversary Commemoration',
    author:    'Chuck Tasaka',
    date:      'Aug. 12, 2022',
    link:      'https://discovernikkei.org/en/journal/2022/8/12/greenwood-80th-anniversary/',
    excerpt:   'Mission Accomplished. Greenwood\'s 80th Anniversary of the Japanese Canadian Internment Reunion Concert, held on July 16, 2022, was a resounding success! With people shaking hands, embracing each other with hugs and big smiles all around, there was that ambience of camaraderie and friendship.',
    img:       discover6,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'United Church\'s Role in Greenwood',
    author:    'Chuck Tasaka',
    date:      'Apr. 26, 2021',
    link:      'https://discovernikkei.org/en/journal/2021/4/26/united-church/',
    excerpt:   'I have written extensively on the Franciscan Friars and Sisters of the Atonement\'s Japanese Catholic Mission connection with the Japanese Canadians in Steveston and Vancouver\'s Powell Street Japantown.',
    img:       discover7,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Sacred Heart School Yearbook Memoirs - Part 1',
    author:    'Chuck Tasaka',
    date:      'Apr. 1, 2021',
    link:      'https://discovernikkei.org/en/journal/2021/4/1/sacred-heart-1/',
    excerpt:   'In my previous article, I wrote that Greenwood became the first internment camp in British Columbia, thanks mainly to the collaborative effort of then Mayor W.E. McArthur Sr. and Franciscan Friar Father Benedict Quigley.',
    img:       discover8,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Sacred Heart School Yearbook Memoirs - Part 2',
    author:    'Chuck Tasaka',
    date:      'Apr. 2, 2021',
    link:      'https://discovernikkei.org/en/journal/2021/4/2/sacred-heart-2/',
    excerpt:   'Most of you are of Japanese origin, and although you are Canadians in every sense of the word, you had to undergo hardships which were caused by the hatreds which sprung up during the war.',
    img:       discover9,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Unsung Heroes of the Japanese Canadian Internment',
    author:    'Chuck Tasaka',
    date:      'May 7, 2019',
    link:      'https://discovernikkei.org/en/journal/2019/5/7/unsung-heroes/',
    excerpt:   'In present day Canada, the high profile Nikkei we hear of so often are people like David Suzuki, Joy Kogawa, Muriel Kitagawa, Thomas Shoyama, Santa Ono, Raymond Moriyama, Art Miki, and athletes like Paul Kariya and Nathan Hirayama.',
    img:       discover10,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'MAINICHI GAMAN: Broom, Mop, and Apron',
    author:    'Chuck Tasaka',
    date:      'Dec. 13, 2018',
    link:      'https://discovernikkei.org/en/journal/2018/12/13/mainichi-gaman/',
    excerpt:   'For many centuries, women fought for gender equality, especially in the political forum. As early as the late 1800s, women in Canada struggled to gain stronghold for the right to vote.',
    img:       discover11,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Canadian Nikkei\'s Pilgrimage to J.A. Internment Camps - Part 1',
    author:    'Chuck Tasaka',
    date:      'July 13, 2018',
    link:      'https://discovernikkei.org/en/journal/2018/7/13/canadian-nikkei-pilgrimage-1/',
    excerpt:   'I have always been intrigued by and curious about the Japanese American internment history for years and have watched Public Broadcasting Service (PBS) programs religiously to learn about the wartime incarceration experience.',
    img:       discover12,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Canadian Nikkei\'s Pilgrimage to J.A. Internment Camps - Part 2',
    author:    'Chuck Tasaka',
    date:      'July 20, 2018',
    link:      'https://discovernikkei.org/en/journal/2018/7/20/canadian-nikkei-pilgrimage-2/',
    excerpt:   'Our next stop was in Portland, Oregon to visit their magnificent Japanese Garden. When a former ambassador to Japan visited this garden, he proclaimed it to be the most beautiful and authentic Japanese garden in the world outside of Japan.',
    img:       discover13,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Canadian Nikkei\'s Pilgrimage to J.A. Internment Camps - Part 3',
    author:    'Chuck Tasaka',
    date:      'July 27, 2018',
    link:      'https://discovernikkei.org/en/journal/2018/7/27/canadian-nikkei-pilgrimage-3/',
    excerpt:   'After Moab, we drove straight west to Delta where the Topaz Museum is located. We stopped next door at the Delta Historic Museum where two ladies assisted us.',
    img:       discover14,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Mystery Album - Part 1',
    author:    'Chuck Tasaka',
    date:      'Feb. 12, 2018',
    link:      'https://discovernikkei.org/en/journal/2018/2/12/mystery-album-1/',
    excerpt:   'How this mystery album fell onto my lap is, in Japanese, fushigi or in English, surreal. To top it off, this album belonged to a young lady in Greenwood, my former hometown!',
    img:       discover15,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Mystery Album - Part 2',
    author:    'Chuck Tasaka',
    date:      'Feb. 13, 2018',
    link:      'https://discovernikkei.org/en/journal/2018/2/13/mystery-album-2/',
    excerpt:   'Most of you are of Japanese origin, and although you are Canadians in every sense of the word, you had to undergo hardships which were caused by the hatreds which sprung up during the war.',
    img:       discover16,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Iwasaki Family of Salt Spring Island',
    author:    'Chuck Tasaka',
    date:      'Aug. 14, 2017',
    link:      'https://discovernikkei.org/en/journal/2017/8/14/iwasaki-salt-spring-island/',
    excerpt:   'Ray Torao Iwasaki was born in Ganges, B.C. in 1933 and he lived an idyllic life on Salt Spring Island in the Gulf Islands of British Columbia.',
    img:       discover17,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Nisei Story: Unexpected Friendship Lost and Found',
    author:    'Chuck Tasaka',
    date:      'July 21, 2017',
    link:      'https://discovernikkei.org/en/journal/2017/7/21/unexpected-friendship/',
    excerpt:   'Teresa Chizu Kurisu lived a normal Powell Street life as a child. She attended Strathcona Elementary School in East Vancouver and went to Japanese Language School soon after with her Japanese Canadian friends.',
    img:       discover18,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Nisei: When The Nisei-nts Go Marching In ...',
    author:    'Chuck Tasaka',
    date:      'May 26, 2017',
    link:      'https://discovernikkei.org/en/journal/2017/5/26/when-nisei-nts-go-marching-in/',
    excerpt:   'There was Christian influence in Japan when missionaries had travelled there in the 1800s. By the late 1800s, Christianity was viewed as modern and progressive among Japanese immigrants coming to British Columbia.',
    img:       discover19,
  },
  {
    source:    'Japanese Canadian Legacies',
    sourceUrl: 'https://jclegacies.com/',
    title:     'BC Heritage Sites – Greenwood',
    author:    'Japanese Canadian Legacies',
    date:      'February. 6, 2024',
    link:      'https://jclegacies.com/bc-heritage-sites-greenwood/',
    excerpt:   'While the JCLS has yet to name the 30 BC Heritage sites identified around the province, Greenwood\'s Nikkei Legacy Park will be on the list. On February 2, BC Attorney General Niki Sharma and Boundary-Similkameen MLA Roly Russell visited Greenwood to honour the Japanese Canadian survivors.',
    img:       legacies1,
  },
  {
    source:    'Japanese Canadian Legacies',
    sourceUrl: 'https://jclegacies.com/',
    title:     'Greenwood Video',
    author:    'Japanese Canadian Legacies',
    date:      'December 26, 2025',
    link:      'https://jclegacies.com/greenwood-video/',
    excerpt:   'The Greenwood Nikkei Memorial Garden, which opened on July 20, 2025, is dedicated to the 1,200 Japanese Canadians who were forcibly uprooted from the west coast and sent to Greenwood, beginning on April 26, 1942. Greenwood was the first internment site to open – a new temporary home for the exiled citizens, most of whom were Canadian. The garden is part of Nikkei Legacy Park (formerly Ohairi Park), situated off Highway 3 that runs through Greenwood.',
    img:       legacies2,
  },
  {
    source:    'Greenwood Nikkei',
    sourceUrl: 'https://www.greenwoodnikkei.ca/',
    title:     'Nikkei Legacy Park Project',
    author:    'Chuck Tasaka',
    date:      'June 1, 2018',
    link:      'https://www.greenwoodnikkei.ca/Nekkei-Legacy-Park-Project.html',
    excerpt:   'The names have changed since the 1990’s. This park was originally called Boundary Creek Park. The main purpose was to be used as a free overnight campsite and a rest stop for weary travelers. In 1997, the City of Greenwood was presented with a large, brass internment history plaque by members of the National Association of Japanese Canadians from Kamloops. Thus, the city councillors decided to have a ‘Name That Park’ contest in the local paper.',
    img:       greenwood1,
  },
  {
    source:    'The Bulletin',
    sourceUrl: 'https://jccabulletin-geppo.ca/',
    title:     'Sgt. Masumi Mitsui – last of the issei veterans',
    author:    'John Endo Greenaway',
    date:      'November 9, 2013',
    link:      'https://jccabulletin-geppo.ca/sgt-masumi-mitsui-last-of-the-issei-veterans/',
    excerpt:   'When Sgt. Masumi Mitsui passed away on April 22, 1987 at the age of 100 years he was one of the last surviving Japanese Canadian volunteers of World War I. Having emigrated to Canada in 1908 from Fukuoka-ken, Sgt. Mitsui had a distinguished service record that began in 1916 when he travelled to Calgary to enlist with the 192nd Overseas Battalion. He embarked for Europe in late 1916 and in January of the following year was ordered to France where he joined the 10th Battalion, 2nd Infantry Brigade, 1st Canadian Division.',
    img:       bulletin1,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'No Time for ITADAKIMASU!',
    author:    'Chuck Tasaka',
    date:      'July 5, 2017',
    link:      'https://discovernikkei.org/en/journal/2017/7/5/no-time-for-itadakimasu/',
    excerpt:   'Itadakimasu. What\'s that? I never heard of it when I was growing up in postwar Canada. Japanese Language School didn\'t exist in Greenwood. The only word similar to that was "Itai!" or "Itai-na!" when your older brother or sister was shoving you aside to get the best seat at the kitchen table.',
    img:       discover20,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Nisei Nicknames',
    author:    'Chuck Tasaka',
    date:      'June 22, 2017',
    link:      'https://discovernikkei.org/en/journal/2017/6/22/nikkei-nicknames/',
    excerpt:   'In this day of hi-tech computer with iPhone, iPad, Galaxy, and so forth, whatever happened to the old fashion nicknames? Nowadays, you hear of famous athletes with nicknames like Burnsie, Burr, Marky, JJ, JR, or AJ. Quite vanilla, I think.',
    img:       discover21,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     '75th Anniversary of the Japanese Canadian Internment',
    author:    'Chuck Tasaka',
    date:      'May 5, 2017',
    link:      'https://discovernikkei.org/en/journal/2017/5/5/anniversary-of-jc-internment/',
    excerpt:   'What was to be a simple, casual get-together to commemorate the 75th Anniversary of the Japanese Canadian Internment, a Nikkei "Woodstock-like Love-in" occurred at St. Joseph the Worker School in Richmond on April 29th!',
    img:       discover22,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Nisei: Nikkei Connection to McLean Mill',
    author:    'Chuck Tasaka',
    date:      'April 19, 2017',
    link:      'https://discovernikkei.org/en/journal/2017/4/19/mclean-mill/',
    excerpt:   'Did you know that there was a very small settlement of Japanese Canadians at the McLean Mill in Port Alberni on Vancouver Island in the early thirties? Reading the Parks Canada backgrounder article and excerpts from Jan Peterson\'s book, Twin Cities: Port Alberni.',
    img:       discover23,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Nisei: Yancha Kozo For All Seasons - Part 4',
    author:    'Chuck Tasaka',
    date:      'March 27, 2017',
    link:      'https://discovernikkei.org/en/journal/2017/3/27/nisei-yancha-kozo-for-all-seasons-4/',
    excerpt:   'WINTER: Winter fun almost equaled summer activities except for the below zero temperature. Skating, sleigh-riding, skiing, building snowman, igloo, shinny hockey, ice carnival and football in the snow kept the children busy.',
    img:       discover24,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Nisei: Immigration To Canada',
    author:    'Chuck Tasaka',
    date:      'March 24, 2017',
    link:      'https://discovernikkei.org/en/journal/2017/3/24/nisei-immigration-to-canada/',
    excerpt:   'Manzo Nagano is credited for being the first Japanese settler in Canada in 1877, though he was not the first to come to B.C. Japanese sailors were rescued from a shipwrecked whaling boat as early as 1834.',
    img:       discover25,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Nisei: Yancha Kozo For All Seasons - Part 3',
    author:    'Chuck Tasaka',
    date:      'March 20, 2017',
    link:      'https://discovernikkei.org/en/journal/2017/3/20/nisei-yancha-kozo-for-all-seasons-3/',
    excerpt:   'AUTUMN: Labour Day celebration marked the end of summer in Greenwood and the beginning of a new school year. This was the day for everyone to dress up and take in the parade with marching band, various sponsored floats and decorated bicycles.',
    img:       discover26,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Nisei: Yancha Kozo For All Seasons - Part 2',
    author:    'Chuck Tasaka',
    date:      'March 13, 2017',
    link:      'https://discovernikkei.org/en/journal/2017/3/13/nisei-yancha-kozo-for-all-seasons-2/',
    excerpt:   'SUMMER: No wonder, many of the children couldn\'t wait to get out of school in June. This was the time of life for boys and girls. Boys played spitball, katana kiri, bang-bang and flashlight team games.',
    img:       discover27,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Nisei: Yancha Kozo For All Seasons - Part 1',
    author:    'Chuck Tasaka',
    date:      'March 6, 2017',
    link:      'https://discovernikkei.org/en/journal/2017/3/6/nisei-yancha-kozo-for-all-seasons-1/',
    excerpt:   'Post-war babies born in the internment camps should be considered the \'Lucky Ones\'? These children didn\'t suffer the whole forced removal ordeal beginning in 1942. They were born in Greenwood, New Denver, Kaslo, Slocan City or Lillooet where there were hospitals.',
    img:       discover28,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Mio-Steveston Fishermen Dialect',
    author:    'Chuck Tasaka',
    date:      'February 7, 2017',
    link:      'https://discovernikkei.org/en/journal/2017/2/7/mio-steveston-fishermen-dialect/',
    excerpt:   'Whenever you hear of Mio, a poor, small fishing village south-east of Osaka in Wakayama-ken, the name \'Amerika Mura\' comes to mind. To the villagers, Amerika was Canada and U.S. Gihei Kuno\'s name became synonymous with Mio-Steveston connection.',
    img:       discover29,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Nisei: The Games We Played',
    author:    'Chuck Tasaka',
    date:      'December 2, 2016',
    link:      'https://discovernikkei.org/en/journal/2016/12/2/nisei-games/',
    excerpt:   'Nisei growing up on Powell Streets in the \'30s didn\'t have that many toys so they had to improvise. Some boys picked chestnuts off the ground and pierced them with a needle with string threaded through to the other side and made bolos.',
    img:       discover30,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'You Are Canadian Nisei If . . . Part II',
    author:    'Chuck Tasaka',
    date:      'November 11, 2016',
    link:      'https://discovernikkei.org/en/journal/2016/11/17/canadian-nisei-if-2/',
    excerpt:   'Discover Nikkei published my article titled, You Are Canadian Nisei If . . . on December 9, 2015. There were more Nisei traits uncovered to add to this article. I wonder if there are any more hidden gems regarding Canadian Nisei identity?',
    img:       discover31,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Nisei: Sports Brought "Wa" (Harmony)',
    author:    'Chuck Tasaka',
    date:      'October 7, 2016',
    link:      'https://discovernikkei.org/en/journal/2016/10/7/nisei-sports-wa/',
    excerpt:   'The famous Vancouver Asahi baseball teams have been well-documented and the latest, a movie made in Japan called Asahi was the "icing on the cake". Pat Adachi was the first to write the history of the Asahi franchise in her book titled Asahi: A Legend in Baseball.',
    img:       discover32,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Nisei: Summer Jobs',
    author:    'Chuck Tasaka',
    date:      'September 8, 2016',
    link:      'https://discovernikkei.org/en/journal/2016/9/8/summer-jobs/',
    excerpt:   '"What? I have to travel 400 km to work all summer? I will call family services!" No, no, that didn\'t come out of the mouth of a Nisei. They followed their parents\' orders. The Child\'s Labour Code was not discussed back in those days.',
    img:       discover33,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Nisei Saves! Mottainai',
    author:    'Chuck Tasaka',
    date:      'July 28, 2016',
    link:      'https://discovernikkei.org/en/journal/2016/7/28/mottainai/',
    excerpt:   'I read on the Discover Nikkei website about a Japanese American granddaughter having to clear out her Nisei grandmother\'s house when she passed away. To her shock, she found stacks of plastic tofu containers that grandma "treasured" all her life!',
    img:       discover35,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Nisei: Internment Camp Life',
    author:    'Chuck Tasaka',
    date:      'July 22, 2016',
    link:      'https://discovernikkei.org/en/journal/2016/7/22/internment-camp-life/',
    excerpt:   'Greenwood was the first "internment centre" and Tashme was the last. In-between, there were Lemon Creek, Popoff, Bay Farm, New Denver, Rosebery, Sandon, and Kaslo. Self-supporting camps were East Lillooet, Minto Mine, Bridge River, and McGillivray Falls.',
    img:       discover36,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'You-mo? Me mo!: Nisei Language and Dialect',
    author:    'Chuck Tasaka',
    date:      'June 6, 2016',
    link:      'https://discovernikkei.org/en/journal/2016/6/7/nisei-language-dialect/',
    excerpt:   'I don\'t have a PhD in linguistics but I hope that a budding linguist major will get interested in this topic. In Hawaii, the first boat load of about 150 Japanese immigrants came to this island as sugar cane laborers in 1868.',
    img:       discover37,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Love, Nisei Style',
    author:    'Chuck Tasaka',
    date:      'May 17, 2016',
    link:      'https://discovernikkei.org/en/journal/2016/5/17/love-nisei-style/',
    excerpt:   'Dion and the Belmonts made the doo wop song famous with "Teenagers in Love." We could call this segment "Nisei-gers in Love." Was this the clash of the old world Issei tradition versus the new world Canadian way?',
    img:       discover38,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'The Nisei Hepcats',
    author:    'Chuck Tasaka',
    date:      'April 8, 2016',
    link:      'https://discovernikkei.org/en/journal/2016/4/8/nishi-hepcats/',
    excerpt:   '"The day the music died," from the song "American Pie" by Don McLean, referred to February 3, 1959, the day Buddy Holly, Richie Valens, and the Big Bopper perished in the ill-fated plane crash in Clear Lake, Iowa. Music does that.',
    img:       discover39,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Cumberland Chow Mein, Denbazuke, Karinto? It\'s Canadian Nisei Food!',
    author:    'Chuck Tasaka',
    date:      'March 29, 2016',
    link:      'https://discovernikkei.org/en/journal/2016/3/29/canadian-nikkei-food/',
    excerpt:   'How can you tell a Nisei by looking at the food they eat? Have you heard of Cumberland chow mein, denbazuke, or karinto? In the case of Japanese Hawaiians, you have heard of and most likely have eaten Spam sushi.',
    img:       discover40,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Winter Holiday, Nikkei Way',
    author:    'Chuck Tasaka',
    date:      'January 5, 2016',
    link:      'https://discovernikkei.org/en/journal/2016/1/5/winter-holiday/',
    excerpt:   'When the Canadian government finally gave the Japanese Canadians the freedom to have equal rights as all Canadians in 1949, they were able to choose their destination. The Nikkei families scattered across Canada.',
    img:       discover41,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'You Are Canadian Nisei If...',
    author:    'Chuck Tasaka',
    date:      'December 9, 2015',
    link:      'https://discovernikkei.org/en/journal/2015/12/9/canadian-nisei-if/',
    excerpt:   'Most Yonsei (4th generation Nikkei) and Gosei (5th) are most likely living very comfortable lives with their parents. For the Nisei grandparents in the house, they\'re probably saying, "I can\'t…. I won\'t…. I don\'t really care!"',
    img:       discover42,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Berry Picking in Mount Lehman',
    author:    'Chuck Tasaka',
    date:      'November 11, 2015',
    link:      'https://discovernikkei.org/en/journal/2015/11/25/berry-picking/',
    excerpt:   'Good evening, I was asked by Stan to speak on behalf of the berry pickers. Most of my sisters, brother, and their friends preceded me, and they left Greenwood at age 10 and 11 to earn money for their families.',
    img:       discover43,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     'Isaburo Tasaka\'s 100-year old Charcoal Kiln Found on Salt Spring Island',
    author:    'Chuck Tasaka',
    date:      'October 13, 2015',
    link:      'https://discovernikkei.org/en/journal/2015/10/13/charcoal-kiln/',
    excerpt:   'What is the old saying? "What is old is now new again." For thousands of years, the Wakayama Prefecture craftsmen made charcoal to produce the finest steel to pound into samurai swords.',
    img:       discover44,
  },
  {
    source:    'The Bulletin',
    sourceUrl: 'https://jccabulletin-geppo.ca/',
    title:     'Memories of Greenwood',
    author:    'David Fujino',
    date:      'April 16, 2013',
    link:      'https://jccabulletin-geppo.ca/memories-of-greenwood/',
    excerpt:   'Mollie McArthur—a positive name from the past. Mom often talked about Mollie as a dear friend from the Greenwood days, the place where I was born during the crazy circumstances of World War II. We interned Japanese Canadians were encouraged by the residents of Greenwood to take part fully in town life.',
    img:       bulletin2,
  },
  {
    source:    'The Bulletin',
    sourceUrl: 'https://jccabulletin-geppo.ca/',
    title:     'Remembering the Sisters',
    author:    'John Endo Greenaway',
    date:      'July 28, 2011',
    link:      'https://jccabulletin-geppo.ca/remembering-the-sisters/',
    excerpt:   'By the time I was in grade one, I knew I wasn\'t a good student. Two things I recalled. One, I had to sing a song with my sister in a split grade one-two class. I refused to sing because I was so shy. The nun put me on her lap and I received a spanking!',
    img:       bulletin3,
  },
  {
    source:    'The Bulletin',
    sourceUrl: 'https://jccabulletin-geppo.ca/',
    title:     'Farewell to the Franciscan Sisters',
    author:    'John Endo Greenaway',
    date:      'July 28, 2011',
    link:      'https://jccabulletin-geppo.ca/farewell-to-the-franciscan-sisters/',
    excerpt:   'After serving Vancouver\'s Downtown Eastside for the past 85 years, The Franciscan Sisters of the Atonement are leaving Vancouver and moving to their Edmonton convent. They played an important part in the evacuation of 1,700 Japanese Canadians to a little ghost town called Greenwood in the interior of BC.',
    img:       bulletin4,
  },
  {
    source:    'The Bulletin',
    sourceUrl: 'https://jccabulletin-geppo.ca/',
    title:     'Franciscan Sisters leaving the Downtown Eastside',
    author:    'John Endo Greenaway',
    date:      'June 9, 2011',
    link:      'https://jccabulletin-geppo.ca/franciscan-sisters-leaving-the-downtown-eastside/',
    excerpt:   'The Franciscan Sisters of the Atonement are leaving the Downtown Eastside at the end of August. They started their ministry with the Japanese about 85 years ago and played a great part in helping with the evacuation of the Japanese during the Second World War.',
    img:       bulletin5,
  },
  {
    source:    'Japanese Canadian Veterans',
    sourceUrl: 'https://japanesecanadianveterans.ca/',
    title:     'Kiyoji Iizuka, MM',
    author:    'Japanese Canadian Veterans',
    date:      'April 22, 2025',
    link:      'https://japanesecanadianveterans.ca/2025/04/22/kiyoji-iizuka/',
    excerpt:   'Private Kiyoji Iizuka was a familiar face on Powell Street both before the Second World War and after. He lived at 522 Powell Street after his tour in France with the Canadian Overseas Expeditionary Force, and returned there in 1969 after being interned in Greenwood.',
    img:       jcVeterans1,
  },
  {
    source:    'Japanese Canadian Veterans',
    sourceUrl: 'https://japanesecanadianveterans.ca/',
    title:     'Masumi Mitsui, MM',
    author:    'Japanese Canadian Veterans',
    date:      'April 22, 2025',
    link:      'https://japanesecanadianveterans.ca/2025/02/26/a-lifelong-fighter-masumi-mitsui/',
    excerpt:   'Masumi Mitsui was born in Tokyo on Oct 7, 1887. The son of a soldier, he tried to enter the Japanese navy, but failed the entrance exam. Feeling like he had failed Japan, he decided to emigrate to North America, arriving in Canada in 1908.',
    img:       jcVeterans2,
  },
  {
    source:    'Canadian Encyclopedia',
    sourceUrl: 'https://thecanadianencyclopedia.ca/en',
    title:     'Japanese Canadian Internment: Prisoners in their own Country',
    author:    'James H. Marsh',
    date:      'September 17, 2020',
    link:      'https://thecanadianencyclopedia.ca/en/article/japanese-internment-banished-and-beyond-tears-feature',
    excerpt:   'Beginning in early 1942, the Canadian government detained and dispossessed more than 90 per cent of Japanese Canadians, some 21,000 people, living in British Columbia. They were detained under the War Measures Act and were interned for the rest of the Second World War.',
    img:       canadian1,
  },
];

function truncateWords(text: string, maxWords: number): string {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '…';
}

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

type SortField = 'year' | 'title' | 'author';
type SortDir   = 'desc' | 'asc';

const ArticlesPage: React.FC = () => {
  const [query,     setQuery]     = useState('');
  const [filter, setFilter] = useState<'all' | 'Discover Nikkei' | 'Japanese Canadian Legacies' | 'Greenwood Nikkei' | 'The Bulletin' | 'Japanese Canadian Veterans' | 'Canadian Encyclopedia'>('all');
  const [sortField, setSortField] = useState<SortField>('year');
  const [sortDir,   setSortDir]   = useState<SortDir>('desc');

  const getSortValue = (a: ArticleEntry, field: SortField): string => {
    switch (field) {
      case 'year':   return a.date;
      case 'title':  return a.title;
      case 'author': return a.author;
      default:       return '';
    }
  };

  const filtered = ARTICLES
    .filter(({ title, source, author, excerpt, date }) => {
      const q = query.toLowerCase();
      const matchesSearch =
        title.toLowerCase().includes(q)   ||
        source.toLowerCase().includes(q)  ||
        author.toLowerCase().includes(q)  ||
        excerpt.toLowerCase().includes(q) ||
        date.toLowerCase().includes(q);
      const matchesFilter = filter === 'all' || source === filter;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sortField === 'year') {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortDir === 'desc' ? dateB - dateA : dateA - dateB;
      }
      const valA = getSortValue(a, sortField) ?? '';
      const valB = getSortValue(b, sortField) ?? '';
      const cmp = valA.localeCompare(valB);
      return sortDir === 'desc' ? -cmp : cmp;
    });

  return (
    <main className="articles-page">
      <h1 className="articles-title">Resources and Articles</h1>

      {/* ── Filter buttons ── */}
      <div className="articles-filter-wrapper">
        {(['all', 'Discover Nikkei', 'Japanese Canadian Legacies', 'Greenwood Nikkei', 'The Bulletin', 'Japanese Canadian Veterans', 'Canadian Encyclopedia'] as const).map(f => (
          <button
            key={f}
            className={`articles-filter-btn${
              filter === f ? ' articles-filter-btn--active' : ''
            }`}
            onClick={() => setFilter(f)}
          >
            {f === 'all'
              ? 'All'
              : f === 'Discover Nikkei'
              ? 'Discover Nikkei'
              : f === 'Japanese Canadian Legacies'
              ? 'JC Legacies'
              : f === 'Greenwood Nikkei'
              ? 'Greenwood Nikkei'
              : f === 'The Bulletin'
              ? 'The Bulletin'
              : f === 'Japanese Canadian Veterans'
              ? 'JC Veterans'
              : 'Canadian Ency'}
          </button>
        ))}
      </div>

      {/* ── Sort controls ── */}
      <div className="articles-sort-wrapper">
        <label htmlFor="articles-sort" className="articles-sort-label">Sort by</label>
        <select
          id="articles-sort"
          className="articles-sort-select"
          value={sortField}
          onChange={e => setSortField(e.target.value as SortField)}
        >
          <option value="year">Year</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <button
          className="articles-sort-dir"
          onClick={() => setSortDir(d => d === 'desc' ? 'asc' : 'desc')}
          aria-label={sortDir === 'desc' ? 'Sort descending' : 'Sort ascending'}
          title={sortDir === 'desc' ? 'Newest first' : 'Oldest first'}
        >
          {sortDir === 'desc' ? '↓ Desc' : '↑ Asc'}
        </button>
      </div>

      {/* ── Search bar ── */}
      <div className="articles-search-wrapper">
        <label htmlFor="articles-search" className="sr-only">Search articles</label>
        <div className="articles-search-box">
          <SearchIcon />
          <input
            id="articles-search"
            type="search"
            className="articles-search-input"
            placeholder="Search by title, author, date, or keyword…"
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
        {query && (
          <p className="articles-search-count">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
          </p>
        )}
      </div>

      {/* ── Grid ── */}
      <div className="articles-grid">
        {filtered.length > 0 ? (
          filtered.map(({ source, sourceUrl, title, author, date, link, excerpt, img }) => (
            <article key={link} className="article-card">
              <a href={link} target="_blank" rel="noopener noreferrer" className="article-img-link">
                <img src={img} alt={title} className="article-img" />
              </a>
              <div className="article-card-body">
                <a href={link} target="_blank" rel="noopener noreferrer" className="article-title-link">
                  <h2 className="article-card-title">{title}</h2>
                </a>
                <p className="article-meta">
                  <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="article-source-link">
                    <span className="article-source">{source}</span>
                  </a>
                  <span className="article-meta-sep"> · </span>
                  <span className="article-date">{date}</span>
                </p>
                <p className="article-author">Author: {author}</p>
                <p className="article-excerpt">{truncateWords(excerpt, 50)}</p>
              </div>
            </article>
          ))
        ) : (
          <p className="articles-no-results">No articles match your search.</p>
        )}
      </div>
    </main>
  );
};

export default ArticlesPage;