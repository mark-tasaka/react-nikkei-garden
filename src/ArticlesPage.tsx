// src/ArticlesPage.tsx
import React from 'react';
import './css/Articles.css';

import discover1 from './img/articles/discover1.jpeg';
import discover2 from './img/articles/discover2.jpeg';
import legacies1 from './img/articles/legacies1.jpeg';

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
    excerpt:   'Greenwood, British Columbia, in Canada became the first internment center when Nikkei people were uprooted and "relocated" from the coast of B.C. On December 7, 1941, Japan bombed Pearl Harbor, and shortly after Canada declared war on Japan when Hong Kong, a British Commonwealth, fell to the Japanese army. This started a chain reaction of government decisions to remove the Japanese Canadians from the coast. With the War Measures Act enforced, Japanese Canadians were helpless. Maybe that\'s where the term "shikata ga nai" came to be. It can\'t be helped. Those who protested were sent to POW camps in Petawawa or Angler in the province of Ontario. In order to understand the "why" and "how" Greenwood was chosen, one needs to go back to the early 1900s.',
    img:       discover1,
  },
  {
    source:    'Discover Nikkei',
    sourceUrl: 'https://discovernikkei.org/',
    title:     '75th and 76th Anniversary of the Greenwood Nikkei Internment Ceremony',
    author:    'Chuck Tasaka',
    date:      'Sept. 19, 2018',
    link:      'https://discovernikkei.org/en/journal/2018/9/19/greenwood-ceremony/',
    excerpt:   'Back in 1971, then Prime Minister Pierre Elliott Trudeau declared that Canada would adopt a multicultural policy that recognizes and respects a diversity of languages, customs and religion. In 2015, Trudeau\'s son Justin, who also became Prime Minister, stated that "Diversity is Canada\'s Strength" and over the past few years, there has been a push to encourage inclusion of all ethnic communities.',
    img:       discover2,
  },
  {
    source:    'Japanese Canadian Legacies',
    sourceUrl: 'https://jclegacies.com/',
    title:     'BC Heritage Sites – Greenwood',
    author:    'Japanese Canadian Legacies',
    date:      'February 6, 2024',
    link:      'https://jclegacies.com/bc-heritage-sites-greenwood/',
    excerpt:   'While the JCLS has yet to name the 30 BC Heritage sites we have identified around the province, Greenwood\'s Nikkei Legacy Park will be on the list. On February 2, BC Attorney General Niki Sharma and Boundary-Similkameen MLA Roly Russell visited Greenwood to honour the Japanese Canadian survivors who continue to call the area home. Miraculously, while the previous day was cold and damp, the sun shot through the clouds, warming everybody up.',
    img:       legacies1,
  },
];

function truncateWords(text: string, maxWords: number): string {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '…';
}

const ArticlesPage: React.FC = () => (
  <main className="articles-page">
    <h1 className="articles-title">Articles</h1>
    <div className="articles-grid">
      {ARTICLES.map(({ source, sourceUrl, title, author, date, link, excerpt, img }) => (
        <article key={link} className="article-card">
          <a href={link} target="_blank" rel="noopener noreferrer" className="article-img-link">
            <img src={img} alt={title} className="article-img" />
          </a>
          <div className="article-card-body">
            <a href={link} target="_blank" rel="noopener noreferrer" className="article-title-link">
              <h2 className="article-card-title">{title}</h2>
            </a>
            <p className="article-meta">
              
              < a href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="article-source-link"
              >
                <span className="article-source">{source}</span>
              </a>
              <span className="article-meta-sep"> · </span>
              <span className="article-date">{date}</span>
            </p>
            <p className="article-author">Author: {author}</p>
            <p className="article-excerpt">{truncateWords(excerpt, 50)}</p>
          </div>
        </article>
      ))}
    </div>
  </main>
);

export default ArticlesPage;