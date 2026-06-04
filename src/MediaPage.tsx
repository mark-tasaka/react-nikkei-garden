// src/MediaPage.tsx
import React from 'react';
import './css/Media.css';

interface VideoEntry {
  embedId: string;
  title: string;
  description: string;
}

const VIDEOS: VideoEntry[] = [
  {
    embedId: '0SerwWKTJPE',
    title: 'Nikkei Memorial Garden – Greenwood, BC',
    description:
      'The Greenwood Nikkei Memorial Garden, which opened on July 20, 2025, is dedicated to the 1,200 Japanese Canadians who were forcibly uprooted from the west coast and sent to Greenwood, beginning on April 26, 1942. Greenwood was the first internment site to open — a new temporary home for the exiled citizens, most of whom were Canadian. The garden is part of Nikkei Legacy Park (formerly Ohairi Park), situated off Highway 3 that runs through Greenwood. In 1899, at its peak, Greenwood had a population of 3,000, but by 1930 it had dropped to 171 people. In 1942, Mayor W. E. McArthur Sr welcomed the Japanese Canadian exiles, going against government orders by allowing them to own or operate businesses. Music: "Kakkazan" by Aki Takahashi, performed by Nagata Shachu.',
  },
  {
    embedId: 'M3wJgU67ZP8',
    title: 'Explorations - Japanese Canadians',
    description: 'A documentary from the CBC in 1960. The film traces the origins of Japanese Canadians back to villages like Mio Mura in Japan. The immigration to such communities as Steveston; the discrimination and prejudice they encountered; their internment and loss of property during World War II. Includes interviews with Professor Ronald P. Dore from the Department of Asian Studies at UBC; Dr. George Ishiwara; fisherman Tatsuro "Buck" Suzuki of Steveston; W. McArthur, wartime mayor of Greenwood; Seiji Onozuka of Greenwood. It also contains some rare footage from the camps and even a Buddhist service.',
  },
  {
    embedId: 'dQTcfId-sbw',
    title: 'Excerpts from the Mamoru Madokoro Collection (1964)',
    description: 'Scenes from the Greenwood Labour Day Celebration and Natsu Matsuri of 1964.',
  },
];

const GOOGLE_PHOTOS_URL =
  'https://photos.google.com/share/AF1QipNF_xaWBwApezR9zrvE5GslCyfWnNKObywg10jzrwPW515dMahdE76TLCRrNFCixw?key=RjdtQ09XazM3T1dVbFotaHRLV2hTNmRVUnpYb1lB';

const MediaPage: React.FC = () => (
  <main className="media-page">
    <h1 className="media-title">Videos of the Nikkei Memorial Park</h1>

    <div className="media-grid">
      {VIDEOS.map(({ embedId, title, description }) => (
        <article key={embedId} className="media-card">
          <div className="media-embed-wrapper">
            <iframe
              className="media-embed"
              src={`https://www.youtube.com/embed/${embedId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="media-card-body">
            <h2 className="media-card-title">{title}</h2>
            {description && (
              <p className="media-card-desc">{description}</p>
            )}
          </div>
        </article>
      ))}
    </div>

    {/* ── Google Photos album link ── */}
<div className="media-photos-section">
      <h2 className="media-photos-title">Drone Captured Video of Nikkei Legacy Park</h2>
      <p className="media-photos-desc">
        Drone captured video by Aaron Oye.
      </p>
      
        <a href="https://www.dropbox.com/scl/fi/k7hukms9ibhyrvioostxk/Greenwood-BC.mov?rlkey=wsci6n7jg19na1om0vpc8wgw5&e=1&st=fvbxf4vc&dl=0"
        target="_blank"
        rel="noopener noreferrer"
        className="media-photos-btn"
        >
        View Video (Dropbox) ↗
      </a>
    </div>
  </main>
);

export default MediaPage;
