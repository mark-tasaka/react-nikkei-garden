// src/HomePage.tsx
import React, { useEffect, useState } from 'react';
import Hero from './inc/Hero';
import './css/HomePage.css';

interface WeatherData {
  temperature: number;
  weatherCode: number;
  sunrise: string;
  sunset: string;
}

function getWeatherDescription(code: number): string {
  if (code === 0) return 'Clear Sky';
  if (code <= 2) return 'Partly Cloudy';
  if (code === 3) return 'Overcast';
  if (code <= 49) return 'Foggy';
  if (code <= 59) return 'Drizzle';
  if (code <= 69) return 'Rain';
  if (code <= 79) return 'Snow';
  if (code <= 84) return 'Rain Showers';
  if (code <= 94) return 'Thunderstorm';
  return 'Unknown';
}

function getWeatherEmoji(code: number): string {
  if (code === 0) return '☀️';
  if (code <= 2) return '⛅';
  if (code === 3) return '☁️';
  if (code <= 49) return '🌫️';
  if (code <= 69) return '🌧️';
  if (code <= 79) return '❄️';
  if (code <= 84) return '🌦️';
  return '⛈️';
}

function formatTime(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleTimeString('en-CA', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Vancouver',
  });
}

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Greenwood, BC coordinates
    fetch(
      'https://api.open-meteo.com/v1/forecast' +
      '?latitude=49.0014&longitude=-118.6937' +
      '&current=temperature_2m,weather_code' +
      '&daily=sunrise,sunset' +
      '&timezone=America%2FVancouver' +
      '&forecast_days=1'
    )
      .then(res => res.json())
      .then(data => {
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          weatherCode: data.current.weather_code,
          sunrise: data.daily.sunrise[0],
          sunset: data.daily.sunset[0],
        });
      })
      .catch(() => setError(true));
  }, []);

  if (error) return null;

  return (
    <div className="weather-widget">
      <h3 className="weather-title">Today in Greenwood, BC</h3>
      {weather ? (
        <div className="weather-grid">
          <div className="weather-item weather-item--main">
            <span className="weather-emoji">{getWeatherEmoji(weather.weatherCode)}</span>
            <span className="weather-temp">{weather.temperature}°C</span>
            <span className="weather-desc">{getWeatherDescription(weather.weatherCode)}</span>
          </div>
          <div className="weather-item">
            <span className="weather-label">🌅 Sunrise</span>
            <span className="weather-value">{formatTime(weather.sunrise)}</span>
          </div>
          <div className="weather-item">
            <span className="weather-label">🌇 Sunset</span>
            <span className="weather-value">{formatTime(weather.sunset)}</span>
          </div>
        </div>
      ) : (
        <p className="weather-loading">Loading weather…</p>
      )}
      <p className="weather-credit">
        Weather data via{' '}
        <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">
          Open-Meteo
        </a>
      </p>
    </div>
  );
};

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
    <section className="home-map-section">
      <div className="home-content-inner">
        <h2 id="find-us" className="home-content-title">Visit Our Park</h2>
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
        <WeatherWidget />
      </div>
    </section>
  </>
);

export default HomePage;