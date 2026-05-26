// src/inc/Header.tsx
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
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
      <NavLink to="/history"
        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
        onClick={onLinkClick}
      >History</NavLink>
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
   Main Header
───────────────────────────────────────────────────────── */

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const fullHeaderRef = useRef<HTMLElement | null>(null);

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

  /* ── Lock body scroll when menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── Close menu on Escape ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      {/* ── Full header ── */}
      <header className="header" ref={fullHeaderRef}>
        <div className="header-container">
          <div className="header-logo">
            <img src={logoHeader} alt="Nikkei Legacy Park" />
          </div>

          {/* Desktop right side */}
          <div className="header-right">
            
              <a href="https://www.greenwoodcity.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="header-city-label"
            >
              City of Greenwood
            </a>
            <nav className="header-nav header-nav--desktop" aria-label="Main navigation">
              <NavLinks />
            </nav>
          </div>

          {/* Mobile hamburger button */}
          <button
            className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile menu drawer */}
        <div
          className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <nav className="header-nav" aria-label="Mobile navigation">
            <NavLinks onLinkClick={closeMenu} includeGreenwood />
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
              <img src={logoHeaderSticky} alt="Nikkei Legacy Park" />
            </div>

            {/* Desktop sticky nav */}
            <div className="header-right header-right--sticky">
              <nav className="header-nav header-nav--desktop" aria-label="Main navigation">
                <NavLinks includeGreenwood />
              </nav>
            </div>

            {/* Mobile sticky hamburger */}
            <button
              className={`hamburger hamburger--sticky${menuOpen ? ' hamburger--open' : ''}`}
              onClick={toggleMenu}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          {/* Sticky mobile menu drawer */}
          {isSticky && (
            <div
              className={`mobile-menu mobile-menu--sticky${menuOpen ? ' mobile-menu--open' : ''}`}
              aria-hidden={!menuOpen}
            >
              <nav className="header-nav" aria-label="Mobile navigation">
                <NavLinks onLinkClick={closeMenu} includeGreenwood />
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