// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages — create these files as you build them out
import HomePage from './HomePage';
import MediaPage from './MediaPage';
import GalleryPage from './GalleryPage';
import ResourcesPage from './ResourcesPage';

// Shared layout components
import Header from './inc/Header';
// import Hero   from './inc/Hero';    // uncomment when ready
import Footer from './inc/Footer'; 

/* ─────────────────────────────────────────────────────────
   AppShell — wraps every page with the shared chrome
───────────────────────────────────────────────────────── */
interface AppShellProps {
  children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => (
  <div className="App">
    <Header />
    {/* <Hero /> */}
    <main className="main-content">
      {children}
    </main>
    <Footer />
  </div>
);

/* ─────────────────────────────────────────────────────────
   App — router + routes
───────────────────────────────────────────────────────── */
function App(): React.ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/"        element={<AppShell><HomePage /></AppShell>} />
        <Route path="/media"   element={<AppShell><MediaPage /></AppShell>} />
        <Route path="/gallery" element={<AppShell><GalleryPage /></AppShell>} />
        <Route path="/resources" element={<AppShell><ResourcesPage /></AppShell>} />
      </Routes>
    </Router>
  );
}

export default App;
