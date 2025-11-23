import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import ResultsGallery from './components/ResultsGallery';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Cursor from './components/Cursor';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app">
        <Cursor />
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <ResultsGallery />
              <Pricing />
            </main>
          } />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/dashboard" element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
