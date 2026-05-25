// src/HomePage.tsx
import React from 'react';
import Hero from './inc/Hero';
import './css/HomePage.css';

const HomePage: React.FC = () => (
  <>
    <Hero />

    {/* ── Main Content ── */}
    <section className="home-content">
      <div className="home-content-inner">

        <h2 className="home-content-title">Nikkei Legacy Park</h2>

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
  </>
);

export default HomePage;
