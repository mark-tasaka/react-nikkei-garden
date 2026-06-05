// src/inc/Header.tsx
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import './css/Header.css';
import logoHeader from './img/header/logo_header.png';
import logoHeaderSticky from './img/header/logo_header-sticky.png';

/* ─────────────────────────────────────────────────────────
   Nav link lists
───────────────────────────────────────────────────────── */

interface NavLinksProps {
  onLinkClick?: () => void;
  includeGreenwood?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ onLinkClick, includeGreenwood = false }) => (
  <ul className="nav-list">
    <li>
      <NavLink to="/" end
        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
        onClick={onLinkClick}
      >Home</NavLink>
    </li>
    <li>
        <a href="https://www.greenwoodnikkei.ca/"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
        onClick={onLinkClick}
      >History</a>
    </li>
    <li>
      <NavLink to="/media"
        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
        onClick={onLinkClick}
      >Media</NavLink>
    </li>
    <li>
      <NavLink to="/gallery"
        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
        onClick={onLinkClick}
      >Gallery</NavLink>
    </li>
    <li>
      <NavLink to="/resources"
        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
        onClick={onLinkClick}
      >Resources</NavLink>
    </li>
    {includeGreenwood && (
      <li>
        
          <a href="https://www.greenwoodcity.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
          onClick={onLinkClick}
        >City of Greenwood</a>
      </li>
    )}
  </ul>
);

/* ─────────────────────────────────────────────────────────
   Weather (desktop non-sticky only)
───────────────────────────────────────────────────────── */

// function getWeatherEmoji(code: number): string {
//   if (code === 0) return '☀️';
//   if (code <= 2) return '⛅';
//   if (code === 3) return '☁️';
//   if (code <= 49) return '🌫️';
//   if (code <= 69) return '🌧️';
//   if (code <= 79) return '❄️';
//   if (code <= 84) return '🌦️';
//   return '⛈️';
// }

// Replace getWeatherEmoji with this:
function getWeatherIcon(code: number): string {
  if (code === 0) return require('./img/header/weather/01-clear-sky.png');
  if (code <= 2)  return require('./img/header/weather/02-partly-cloudy.png');
  if (code === 3) return require('./img/header/weather/03-overcast.png');
  if (code <= 49) return require('./img/header/weather/04-foggy.png');
  if (code <= 69) return require('./img/header/weather/05-rain.png');
  if (code <= 79) return require('./img/header/weather/06-snow.png');
  if (code <= 84) return require('./img/header/weather/07-rain-showers.png');
  return require('./img/header/weather/08-thunderstorm.png');
}

const useHeaderWeather = () => {
  const [temp, setTemp] = useState<number | null>(null);
  const [code, setCode] = useState<number | null>(null);

  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast' +
      '?latitude=49.0014&longitude=-118.6937' +
      '&current=temperature_2m,weather_code' +
      '&timezone=America%2FVancouver' +
      '&forecast_days=1'
    )
      .then(res => res.json())
      .then(data => {
        setTemp(Math.round(data.current.temperature_2m));
        setCode(data.current.weather_code);
      })
      .catch(() => {});
  }, []);

  return { temp, code };
};

/* ─────────────────────────────────────────────────────────
   Main Header
───────────────────────────────────────────────────────── */

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [menuSource, setMenuSource] = useState<'main' | 'sticky' | null>(null);
  const fullHeaderRef = useRef<HTMLElement | null>(null);
  const { temp, code } = useHeaderWeather();

  /* ── Sticky detection ── */
  useEffect(() => {
    const header = fullHeaderRef.current;
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { root: null, rootMargin: '0px', threshold: 0 }
    );
    observer.observe(header);

    const checkSticky = (): void => {
      if (!header) return;
      const { bottom } = header.getBoundingClientRect();
      setIsSticky(bottom <= 0);
    };

    window.addEventListener('scroll', checkSticky, { passive: true });
    document.addEventListener('scroll', checkSticky, { passive: true, capture: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkSticky);
      document.removeEventListener('scroll', checkSticky, { capture: true });
    };
  }, []);

/* ── Sync menu source when sticky state changes ── */
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setMenuSource(current => {
      if (!menuOpen) return current;
      if (isSticky && current === 'main') return 'sticky';
      if (!isSticky && current === 'sticky') return 'main';
      return current;
    });
  }, [isSticky]);

  /* ── Lock body scroll when menu is open ── */
  // useEffect(() => {
  //   document.body.style.overflow = menuOpen ? 'hidden' : '';
  //   return () => { document.body.style.overflow = ''; };
  // }, [menuOpen]);

  /* ── Close menu on Escape ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);


const closeMenu = () => { setMenuOpen(false); setMenuSource(null); };
const toggleMainMenu  = () => { setMenuOpen(prev => !prev); setMenuSource(s => s === 'main'   ? null : 'main'); };
const toggleStickyMenu = () => { setMenuOpen(prev => !prev); setMenuSource(s => s === 'sticky' ? null : 'sticky'); };

  const handleLinkClick = () => {
    setTimeout(() => setMenuOpen(false), 50);
  };

  return (
    <>
      {/* ── Full header ── */}
      <header className="header" ref={fullHeaderRef}>
        <div className="header-container">
          <div className="header-logo">  
            <Link to="/">
              <img src={logoHeader} alt="Nikkei Legacy Park" />
            </Link>
          </div>

          {/* Desktop right side — update this block */}
          <div className="header-right">
            <div className="header-top-row">
              {temp !== null && code !== null && (
                <>
                  <img
                    src={getWeatherIcon(code)}
                    alt="weather icon"
                    className="header-weather-icon"
                  />
                  <span className="header-weather">{temp}°C</span>
                  
                  <span className="header-weather-divider">|</span>
                  <a href="https://www.greenwoodcity.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="header-city-label"
                  >
                    City of Greenwood
                  </a>
                </>
              )}
            </div>
            <nav className="header-nav header-nav--desktop" aria-label="Main navigation">
              <NavLinks />
            </nav>
          </div>

        <div className="mobile-right">             
          {temp !== null && code !== null && (
            <div className="mobile-weather">
              <img src={getWeatherIcon(code)} alt="weather icon" className="header-weather-icon" />
              <span className="header-weather">{temp}°C</span>
            </div>
          )}
          <button
            className={`hamburger${menuOpen && menuSource === 'main' ? ' hamburger--open' : ''}`}
            onClick={toggleMainMenu}
            aria-expanded={menuOpen && menuSource === 'main'}
            aria-label={menuOpen && menuSource === 'main' ? 'Close menu' : 'Open menu'}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
        {/* Mobile menu drawer */}
        <div
          className={`mobile-menu${menuOpen && menuSource === 'main' ? ' mobile-menu--open' : ''}`}
          aria-hidden={!(menuOpen && menuSource === 'main')}
        >
          <nav className="header-nav" aria-label="Mobile navigation">
            <NavLinks onLinkClick={handleLinkClick} includeGreenwood />
          </nav>
        </div>
      </header>

      {/* Mobile backdrop */}
      {ReactDOM.createPortal(
        <div
          className={`mobile-backdrop${menuOpen ? ' mobile-backdrop--visible' : ''}`}
          onClick={closeMenu}
          aria-hidden
        />,
        document.body
      )}

      {/* ── Sticky header ── */}
      {ReactDOM.createPortal(
        <header
          className={`header header--sticky${isSticky ? ' header--sticky-visible' : ''}`}
          aria-hidden={!isSticky}
        >
          <div className="header-container header-container--sticky">
            <div className="header-logo header-logo--sticky">
                {/* <Link to="/"> */}
                  <img src={logoHeaderSticky} alt="Nikkei Legacy Park" />
                {/* </Link> */}
            </div>

            {/* Desktop sticky nav */}
            <div className="header-right header-right--sticky">
              <nav className="header-nav header-nav--desktop" aria-label="Main navigation">
                <NavLinks includeGreenwood />
              </nav>
            </div>

            {/* Mobile sticky hamburger */}
            <button
              className={`hamburger hamburger--sticky${menuOpen && menuSource === 'sticky' ? ' hamburger--open' : ''}`}
              onClick={toggleStickyMenu}
              aria-expanded={menuOpen && menuSource === 'sticky'}
              aria-label={menuOpen && menuSource === 'sticky' ? 'Close menu' : 'Open menu'}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          {/* Sticky mobile menu drawer */}
          {isSticky && (
            <div
              className={`mobile-menu mobile-menu--sticky${menuOpen && menuSource === 'sticky' ? ' mobile-menu--open' : ''}`}
              aria-hidden={!(menuOpen && menuSource === 'sticky')}
            >
              <nav className="header-nav" aria-label="Mobile navigation">
                <NavLinks onLinkClick={handleLinkClick} includeGreenwood />
              </nav>
            </div>
          )}
        </header>,
        document.body
      )}
    </>
  );
};

export default Header;