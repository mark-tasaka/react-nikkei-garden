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
import legacies1   from './img/articles/legacies1.jpeg';

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
    date:      'Feb. 6, 2024',
    link:      'https://jclegacies.com/bc-heritage-sites-greenwood/',
    excerpt:   'While the JCLS has yet to name the 30 BC Heritage sites identified around the province, Greenwood\'s Nikkei Legacy Park will be on the list. On February 2, BC Attorney General Niki Sharma and Boundary-Similkameen MLA Roly Russell visited Greenwood to honour the Japanese Canadian survivors.',
    img:       legacies1,
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

const ArticlesPage: React.FC = () => {
  const [query, setQuery]   = useState('');
  const [filter, setFilter] = useState<'all' | 'Discover Nikkei' | 'Japanese Canadian Legacies'>('all');

  const filtered = ARTICLES.filter(({ title, source, author, excerpt, date }) => {
    const q = query.toLowerCase();
    const matchesSearch =
      title.toLowerCase().includes(q)   ||
      source.toLowerCase().includes(q)  ||
      author.toLowerCase().includes(q)  ||
      excerpt.toLowerCase().includes(q) ||
      date.toLowerCase().includes(q);
    const matchesFilter = filter === 'all' || source === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="articles-page">
      <h1 className="articles-title">Resources and Articles</h1>

      {/* ── Filter buttons ── */}
      <div className="articles-filter-wrapper">
        {(['all', 'Discover Nikkei', 'Japanese Canadian Legacies'] as const).map(f => (
          <button
            key={f}
            className={`articles-filter-btn${filter === f ? ' articles-filter-btn--active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'All' : f === 'Discover Nikkei' ? 'Discover Nikkei' : 'JC Legacies'}
          </button>
        ))}
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