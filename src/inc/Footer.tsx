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
        {/* ── Column 1: Land Acknowledgement ── */}
        <div className="footer-col footer-col--acknowledge">
          <p className="footer-acknowledgement-inline">
            We would like to acknowledge that we are gathered on the traditional territories
            of the Sinixt, Syilx, Ktunaxa, and Secwépemc Nations. We pay our respects to
            the Elders, past and present, and recognize their ongoing connection to these lands.
          </p>
        </div>
        {/* ── Column 2: Logo (centred) ── */}
        <div className="footer-col footer-col--brand">
          <img src={logoFooter} alt="Nikkei Legacy Park" className="footer-logo" />
        </div>
        {/* ── Column 3: Visit Our Park (right-aligned) ── */}
        <div className="footer-col footer-col--info">
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
          {/* Nav links + City of Greenwood — single row, wraps to two */}
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
            <li>
              <a href="https://www.greenwoodcity.com/" target="_blank"
                rel="noopener noreferrer" className="footer-link">City of Greenwood</a>
            </li>
          </ul>
          {/* Copyright */}
          <span className="footer-copyright">
            &copy;&nbsp;{currentYear} Nikkei Legacy Park. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
