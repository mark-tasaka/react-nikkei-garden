// src/MediaPage.tsx
import React from 'react';
import './css/Media.css';

type VideoSource = 'youtube' | 'drive' | 'instagram' | 'globalnews';

interface VideoEntry {
  source: VideoSource;
  embedId: string;
  title: string;
  description: string;
}

const VIDEOS: VideoEntry[] = [
  {
    source: 'youtube',
    embedId: '0SerwWKTJPE',
    title: 'Nikkei Memorial Garden – Greenwood, BC',
    description:
      'The Greenwood Nikkei Memorial Garden, which opened on July 20, 2025, is dedicated to the 1,200 Japanese Canadians who were forcibly uprooted from the west coast and sent to Greenwood, beginning on April 26, 1942. Greenwood was the first internment site to open — a new temporary home for the exiled citizens, most of whom were Canadian. The garden is part of Nikkei Legacy Park (formerly Ohairi Park), situated off Highway 3 that runs through Greenwood. In 1899, at its peak, Greenwood had a population of 3,000, but by 1930 it had dropped to 171 people. In 1942, Mayor W. E. McArthur Sr welcomed the Japanese Canadian exiles, going against government orders by allowing them to own or operate businesses. Music: "Kakkazan" by Aki Takahashi, performed by Nagata Shachu.',
  },
  {
    source: 'youtube',
    embedId: 'M3wJgU67ZP8',
    title: 'Explorations - Japanese Canadians',
    description: 'A documentary from the CBC in 1960. The film traces the origins of Japanese Canadians back to villages like Mio Mura in Japan. The immigration to such communities as Steveston; the discrimination and prejudice they encountered; their internment and loss of property during World War II. Includes interviews with Professor Ronald P. Dore from the Department of Asian Studies at UBC; Dr. George Ishiwara; fisherman Tatsuro "Buck" Suzuki of Steveston; W. McArthur, wartime mayor of Greenwood; Seiji Onozuka of Greenwood. It also contains some rare footage from the camps and even a Buddhist service.',
  },
  {
    source: 'youtube',
    embedId: 'dQTcfId-sbw',
    title: 'Excerpts from the Mamoru Madokoro Collection (1964)',
    description: 'Scenes from the Greenwood Labour Day Celebration and Natsu Matsuri of 1964.',
  },
  {
    source: 'youtube',
    embedId: 'QILO0XT-0eo',
    title: 'Japanese Canadian Internment, Second World War ',
    description: 'Mary Kitagawa was seven years old when she was detained in a livestock barn at Vancouver\'s Hastings Park. She remembers the stench of the buildings when she dragged her suitcase through the barn door in April, 1942. Mary and her family spent a month at Hastings Park before they were relocated to the BC interior. They were eventually moved to a sugar beet farm in Alberta until well after the war ended. Approximately 8,000 other Japanese Canadian women and children were held at Hastings Park before being sent to farms and camps across Canada.',
  },
  {
    source: 'youtube',
    embedId: 'C8TQTuMqM9g',
    title: 'Japanese Canadian Internment | Narrated by David Suzuki',
    description: 'To remember the 75th Anniversary of Japanese Canadian Internment during the Second World War, Legion Magazine and David Suzuki tell the story of the injustices and atrocities done towards Japanese-Canadians across the country, and in particular, British Columbia. Visit www.legionmagazine.com for more information.',
  },
  {
    source: 'youtube',
    embedId: 'zxBWg4zxTkQ',
    title: 'Sleeping Tigers: The Asahi Baseball Story',
    description: 'This feature-length documentary tells the story of the Asahi baseball team. In pre-World War II Vancouver, the team was unbeatable, winning the Pacific Northwest Championship for five straight years. After the Japanese attack on Pearl Harbor, all persons of Japanese descent in Canada were sent to internment camps. The former Asahi members survived by playing ball. Their passion was contagious and soon other players joined in, among them RCMP officials and local townspeople. As a result, the games helped break down racial and cultural barriers. This remarkable story is told with a combination of archival footage, interviews and dramatic re-enactments.',
  },
  {
    source: 'youtube',
    embedId: 'wBv-MYAf9P0',
    title: 'Heritage Minutes: Vancouver Asahi ',
    description: 'From 1914-1941, the Vancouver Asahi were one of city’s most dominant amateur baseball teams, winning multiple league titles in Vancouver and along the Northwest Coast. In 1942, after Canada declared war on Japan, 22,000 Japanese Canadians were interned in the interior of BC, including the Asahi players.',
  },
  {
    source: 'youtube',
    embedId: '1pWmTIX4NCM',
    title: 'Drone Captured Video of Nikkei Legacy Park',
    description: 'An aerial tour of Nikkei Legacy Park and the City of Greenwood, captured, filmed, and produced by Aaron Oye.',
  },
  {
    source: 'youtube',
    embedId: 'cblvugIloOc',
    title: 'How 148 Japanese - Canadians Fought for the Country That Jailed Them',
    description: 'In 1945, Canada recruited 148 Japanese-Canadian men from the very internment camps where their families were imprisoned -  needing their language skills for intelligence work in Southeast Asia that the British Empire couldn\'t do without them. They interrogated prisoners, translated war crimes evidence, and helped prosecute Japanese commanders, then came home to find they were still classified as enemy aliens.',
  },
  {
    source: 'drive',
    embedId: '12T4wjoQHaqtE5-ufzO64o6A3tDd0WhWA',
    title: 'Okinawan taiko',
    description: 'Southern Wave Music and Dance Society\'s performance of Okinawan Taiko drumming at the 80th Anniversary of the Japanese Canadian Internment in Greenwood, BC, on July 16, 2022.  The performance was held at the McArthur Park Centre.',
  },
    {
    source: 'instagram',
    embedId: 'DMTpp-iBr6a',
    title: 'Chuck Tasaka Interview by Ian Hanomansing',
    description:
      "One of the best parts of my road trip to Manitoba and back was random stops, learning things and meeting fascinating people, like Chuck Tasaka. He was lovingly tending to the grounds at the Nikkei Legacy Park in Greenwood British Columbia when he saw my wife and me and asked if we had any questions. The official opening, by the way, is Sunday morning (July 20th). Of course the internment of Japanese Canadians was a terrible thing but I was interested to hear Chuck's perspective on what made Greenwood different. If you're ever driving through Greenwood, I highly recommend you stop and chat.",
  },
  {
    source: 'drive',
    embedId: '1bQvFKnd7wCt0BdgXz2d4GvoUXzsfXwKk',
    title: 'Miyazaki Legacy Project',
    description: 'This is Nicole Whitely’s video on Jim Miyazaki family interned in Kaslo and later sent to Greenwood in 1945.  Greenwood segment starts at after the 35 minute mark.',
  },
  {
  source: 'globalnews',
  embedId: '11852829',
  title: 'Asian Heritage Month: A History of Japanese Canadians',
  description:
    'A Global News Morning segment for Asian Heritage Month covering the history of Japanese Canadians.',
},
];

type MediaFilter = 'all' | 'nikkei' | 'greenwood' | 'internment' | 'asahi' | 'veterans';

const FILTER_BUTTONS: { key: MediaFilter; label: string }[] = [
  { key: 'all',        label: 'All' },
  { key: 'nikkei',     label: 'Nikkei Legacy Park' },
  { key: 'greenwood',  label: 'Greenwood' },
  { key: 'internment', label: 'JC Internment' },
  { key: 'asahi', label: 'Asahi Baseball' },
  { key: 'veterans', label: 'JC Veterans' },
];

const NIKKEI_IDS = new Set(['0SerwWKTJPE', '1pWmTIX4NCM', 'DMTpp-iBr6a']);
const GREENWOOD_IDS = new Set(['dQTcfId-sbw', '12T4wjoQHaqtE5-ufzO64o6A3tDd0WhWA']);
const INTERNMENT_IDS = new Set(['M3wJgU67ZP8', 'QILO0XT-0eo', 'C8TQTuMqM9g', '1bQvFKnd7wCt0BdgXz2d4GvoUXzsfXwKk', '11852829']);
const ASAHI_IDS = new Set(['zxBWg4zxTkQ', 'wBv-MYAf9P0']);
const VETERANS_IDS = new Set(['cblvugIloOc']);

function matchesFilter(embedId: string, filter: MediaFilter): boolean {
  if (filter === 'all')        return true;
  if (filter === 'nikkei')     return NIKKEI_IDS.has(embedId);
  if (filter === 'greenwood')  return GREENWOOD_IDS.has(embedId);
  if (filter === 'internment') return INTERNMENT_IDS.has(embedId);
  if (filter === 'asahi') return ASAHI_IDS.has(embedId);
  if (filter === 'veterans') return VETERANS_IDS.has(embedId);
  return false;
}

function getEmbedSrc(video: VideoEntry): string {
  if (video.source === 'drive') {
    return `https://drive.google.com/file/d/${video.embedId}/preview`;
  }
  if (video.source === 'instagram') {
    return `https://www.instagram.com/reel/${video.embedId}/embed`;
  }
  if (video.source === 'globalnews') {
    return `https://globalnews.ca/video/embed/${video.embedId}/`;
  }
  return `https://www.youtube.com/embed/${video.embedId}`;
}

const GOOGLE_PHOTOS_URL =
  'https://photos.google.com/share/AF1QipNF_xaWBwApezR9zrvE5GslCyfWnNKObywg10jzrwPW515dMahdE76TLCRrNFCixw?key=RjdtQ09XazM3T1dVbFotaHRLV2hTNmRVUnpYb1lB';

const MediaPage: React.FC = () => {
  const [filter, setFilter] = React.useState<MediaFilter>('all');

  const filteredVideos = VIDEOS.filter(v => matchesFilter(v.embedId, filter));
  const showDrone = filter === 'all' || filter === 'nikkei';

  return (
    <main className="media-page">
      <h1 className="media-title">Nikkei Legacy Park and the Japanese Canadian Experience Videos</h1>

      {/* ── Filter buttons ── */}
      <div className="media-filter-wrapper">
        {FILTER_BUTTONS.map(({ key, label }) => (
          <button
            key={key}
            className={`media-filter-btn${filter === key || filter === 'all' ? ' media-filter-btn--active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="media-grid">
        {filteredVideos.map(({ source, embedId, title, description }) => (
          <article key={embedId} className="media-card">
            <div className={`media-embed-wrapper${source === 'instagram' ? ' media-embed-wrapper--instagram' : ''}`}>
              <iframe
                className="media-embed"
                src={getEmbedSrc({ source, embedId, title, description })}
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

      {/* ── Drone video section ── */}
      {/* {showDrone && (
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
      )} */}
    </main>
  );
};

export default MediaPage;
