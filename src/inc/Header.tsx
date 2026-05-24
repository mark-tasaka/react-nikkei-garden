// src/inc/Header.tsx
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import './css/Header.css';
import logoHeader from './img/header/logo_header.png';

/* ─────────────────────────────────────────────────────────
   Shared sub-components
───────────────────────────────────────────────────────── */

const NavLinks: React.FC = () => (
  <ul className="nav-list">
    <li>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? 'nav-link nav-link--active' : 'nav-link'
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/history"
        className={({ isActive }) =>
          isActive ? 'nav-link nav-link--active' : 'nav-link'
        }
      >
        History
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/media"
        className={({ isActive }) =>
          isActive ? 'nav-link nav-link--active' : 'nav-link'
        }
      >
        Media
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive ? 'nav-link nav-link--active' : 'nav-link'
        }
      >
        Gallery
      </NavLink>
    </li>
  </ul>
);

/* ─────────────────────────────────────────────────────────
   Main Header
───────────────────────────────────────────────────────── */

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const fullHeaderRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const header = fullHeaderRef.current;
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      }
    );
    observer.observe(header);

    const checkSticky = (): void => {
      if (!header) return;
      const { bottom } = header.getBoundingClientRect();
      setIsSticky(bottom <= 0);
    };

    window.addEventListener('scroll', checkSticky, { passive: true });
    document.addEventListener('scroll', checkSticky, {
      passive: true,
      capture: true,
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkSticky);
      document.removeEventListener('scroll', checkSticky, { capture: true });
    };
  }, []);

  return (
    <>
      {/* ── Full header — stays in the normal document flow ── */}
      <header className="header" ref={fullHeaderRef}>
        <div className="header-container">
          {/* Left: Logo */}
          <div className="header-logo">
            <img src={logoHeader} alt="Nikkei Legacy Garden" />
          </div>

          {/* Right: City label on top, nav links on bottom */}
          <div className="header-right">
            <a
              href="https://www.greenwoodcity.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="header-city-label"
            >
              City of Greenwood
            </a>
            <nav className="header-nav" aria-label="Main navigation">
              <NavLinks />
            </nav>
          </div>
        </div>
      </header>

      {/* ── Sticky header — Portal escapes all parent stacking contexts ── */}
      {ReactDOM.createPortal(
        <header
          className={`header header--sticky${
            isSticky ? ' header--sticky-visible' : ''
          }`}
          aria-hidden={!isSticky}
        >
          <div className="header-container header-container--sticky">
            {/* Left: Logo */}
            <div className="header-logo header-logo--sticky">
              <img src={logoHeader} alt="Nikkei Legacy Garden" />
            </div>

            {/* Right: City label + nav */}
            <div className="header-right header-right--sticky">
              <a
                href="https://www.greenwoodcity.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="header-city-label"
              >
                City of Greenwood
              </a>
              <nav className="header-nav" aria-label="Main navigation">
                <NavLinks />
              </nav>
            </div>
          </div>
        </header>,
        document.body
      )}
    </>
  );
};

export default Header;
