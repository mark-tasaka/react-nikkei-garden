// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import MediaPage from './MediaPage';
import GalleryPage from './GalleryPage';
import ResourcesPage from './ResourcesPage';
import Header from './inc/Header';
import Footer from './inc/Footer';
import ScrollToTop from './ScrollToTop';   // ← new

interface AppShellProps {
  children: React.ReactNode;
}
const AppShell: React.FC<AppShellProps> = ({ children }) => (
  <div className="App">
    <Header />
    <main className="main-content">
      {children}
    </main>
    <Footer />
  </div>
);

function App(): React.ReactElement {
  return (
    <Router>
      <ScrollToTop />   {/* ← new */}
      <Routes>
        <Route path="/"          element={<AppShell><HomePage /></AppShell>} />
        <Route path="/media"     element={<AppShell><MediaPage /></AppShell>} />
        <Route path="/gallery"   element={<AppShell><GalleryPage /></AppShell>} />
        <Route path="/resources" element={<AppShell><ResourcesPage /></AppShell>} />
      </Routes>
    </Router>
  );
}

export default App;