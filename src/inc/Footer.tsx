// src/inc/Footer.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Footer.css';
import logoFooter from './img/footer/logo_footer.png';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">

      <div className="footer-container">
        {/* Col 1 — Land Acknowledgement */}
        <div className="footer-col footer-col--acknowledge">
          <p className="footer-acknowledgement-inline">
            We would like to acknowledge that we are gathered on the traditional territories
            of the Sinixt, Syilx, Ktunaxa, and Secwépemc Nations. We pay our respects to
            the Elders, past and present, and recognize their ongoing connection to these lands.
          </p>
        </div>
        {/* Col 2 — Logo */}
        <div className="footer-col footer-col--brand">
          <img src={logoFooter} alt="Nikkei Legacy Park" className="footer-logo" />
        </div>
        {/* Col 3 — Visit Our Park */}
        <div className="footer-col footer-col--info">
          <div className="footer-visit">
            <h3 className="footer-heading">Visit Our Park</h3>
            <address className="footer-address">
              <p>Mineral St, Greenwood, BC V0H 1J0 Canada</p>
            </address>
          </div>
        </div>
      </div>

      {/* ── Bottom bar: Nav only ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <ul className="footer-links">
            <li>
              <NavLink to="/" end
                className={({ isActive }) =>
                  isActive ? 'footer-link footer-link--active' : 'footer-link'}
              >Home</NavLink>
            </li>
            <li>
              <a href="https://www.greenwoodnikkei.ca/" target="_blank"
                rel="noopener noreferrer" className="footer-link">History</a>
            </li>
            <li>
              <NavLink to="/media"
                className={({ isActive }) =>
                  isActive ? 'footer-link footer-link--active' : 'footer-link'}
              >Media</NavLink>
            </li>
            <li>
              <NavLink to="/gallery"
                className={({ isActive }) =>
                  isActive ? 'footer-link footer-link--active' : 'footer-link'}
              >Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/resources"
                className={({ isActive }) =>
                  isActive ? 'footer-link footer-link--active' : 'footer-link'}
              >Resources</NavLink>
            </li>
            <li>
              <a href="https://www.greenwoodcity.com/" target="_blank"
                rel="noopener noreferrer" className="footer-link">City of Greenwood</a>
            </li>
          </ul>
          {/* Copyright — desktop: sits here inside footer-bottom-inner.
              Mobile: this element is hidden; .footer-copyright-mobile below is shown. */}
          <span className="footer-copyright footer-copyright--desktop">
            &copy;&nbsp;{currentYear} Nikkei Legacy Park. All rights reserved.
          </span>
        </div>
      </div>

      {/* Copyright — mobile only, direct child of .footer so order:5 works */}
      <span className="footer-copyright footer-copyright--mobile">
        &copy;&nbsp;{currentYear} Nikkei Legacy Park. All rights reserved.
      </span>

    </footer>
  );
};
export default Footer;
