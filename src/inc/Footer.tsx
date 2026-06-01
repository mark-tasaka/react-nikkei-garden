// src/inc/Footer.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Footer.css';
import logoFooter from './img/footer/logo_footer.png';

/* ─────────────────────────────────────────────────────────
   Footer
───────────────────────────────────────────────────────── */

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* ── 3-Column Grid ── */}
      <div className="footer-container">

        {/* ── Column 1: Land Acknowledgement (left-aligned) ── */}
        <div className="footer-col footer-col--acknowledge">
          <p className="footer-acknowledgement-inline">
            We would like to acknowledge that we are gathered on the traditional territories
            of the Sinixt, Syilx, Ktunaxa, and Secwépemc Nations. We pay our respects to
            the Elders, past and present, and recognize their ongoing connection to these lands.
          </p>
        </div>

        {/* ── Column 2: Logo only (centred) ── */}
        <div className="footer-col footer-col--brand">
          <img src={logoFooter} alt="Nikkei Legacy Park" className="footer-logo" />
        </div>

        {/* ── Column 3: Nav Links (2-col grid) + Visit Our Park + Address ── */}
        <div className="footer-col footer-col--info">

          {/* Nav links — 4 links in 2×2 grid */}
          <ul className="footer-links">
            <li>
              <NavLink to="/" end
                className={({ isActive }) => isActive ? 'footer-link footer-link--active' : 'footer-link'}
              >Home</NavLink>
            </li>
            <li>
              <a href="https://www.greenwoodnikkei.ca/" target="_blank"
                rel="noopener noreferrer" className="footer-link">History</a>
            </li>
            <li>
              <NavLink to="/media"
                className={({ isActive }) => isActive ? 'footer-link footer-link--active' : 'footer-link'}
              >Media</NavLink>
            </li>
            <li>
              <NavLink to="/gallery"
                className={({ isActive }) => isActive ? 'footer-link footer-link--active' : 'footer-link'}
              >Gallery</NavLink>
            </li>
          </ul>

          {/* City of Greenwood — full width below the 2-col grid */}
          <a href="https://www.greenwoodcity.com/" target="_blank"
            rel="noopener noreferrer" className="footer-link footer-link--city">
            City of Greenwood
          </a>

          {/* Visit Our Park heading + address */}
          <div className="footer-visit">
            <h3 className="footer-heading">Visit Our Park</h3>
            <address className="footer-address">
              <p>Mineral St, Greenwood, BC V0H 1J0 Canada</p>
            </address>
          </div>

        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className="footer-copyright">
            &copy;&nbsp;{currentYear} Nikkei Legacy Park. All rights reserved.
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
