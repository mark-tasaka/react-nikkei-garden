// src/HomePage.tsx
import React from 'react';
import Hero from './inc/Hero';
import './css/HomePage.css';

const HomePage: React.FC = () => (
  <>
    <Hero />

    {/* ── About Section ── */}
    <section id="about" className="home-content">
      <div className="home-content-inner">
        <h2 className="home-content-title">About the Nikkei Legacy Park</h2>
        <p className="home-content-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
          pellentesque massa. Suspendisse potenti. Suspendisse dictum pellentesque
          libero ac pellentesque. Fusce sollicitudin facilisis tincidunt. Curabitur
          non tellus non nibh molestie viverra. Aenean at tempor nibh. Sed imperdiet
          odio at eros tempor, laoreet convallis nisl congue. Nulla ut erat interdum,
          pharetra metus non, venenatis justo. Curabitur quis fermentum ex. Mauris
          magna risus, pharetra eu lectus vel, aliquet feugiat enim.
        </p>
        <p className="home-content-body">
          Pellentesque viverra rhoncus tortor, id vehicula ligula porta nec. Mauris
          varius sed eros eu scelerisque. Pellentesque id sagittis orci. Phasellus
          bibendum magna id nisl fermentum, vehicula luctus magna placerat. Donec
          accumsan diam in iaculis malesuada. Praesent at arcu vitae nisi molestie
          rutrum ut at magna. Nulla quis varius lacus. Fusce sed dolor mauris. Sed
          placerat magna lacinia, dignissim lorem quis, ultricies ipsum. Maecenas
          massa erat, tristique ac eleifend sit amet, tempus cursus est. Nunc vitae
          dui vel magna ullamcorper congue eget non diam. Aliquam ullamcorper
          elementum justo, non aliquam mauris accumsan a. Aenean felis sapien,
          ultrices ut aliquet ac, auctor vel est. Vestibulum sit amet arcu nec diam
          pretium facilisis id eget turpis. Aliquam erat volutpat.
        </p>
      </div>
    </section>

    {/* ── Find Us / Map Section ── */}
    <section id="find-us" className="home-map-section">
      <div className="home-content-inner">
        <h2 className="home-content-title">Visit Our Park</h2>
        <div className="home-map-wrapper">
          <iframe
            title="Nikkei Legacy Park location"
            className="home-map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.123456789!2d-118.6937!3d49.0014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537e2b1234567890%3A0xabcdef1234567890!2sMineral%20St%2C%20Greenwood%2C%20BC%20V0H%201J0!5e0!3m2!1sen!2sca!4v1234567890"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </>
);

export default HomePage;