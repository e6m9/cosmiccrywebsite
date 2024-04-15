import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Blog from './pages/Blog';

import Music from './pages/Music';
import Art from './pages/Art';
import Objects from './pages/Objects';
import Electronics from './pages/Electronics';
import Events from './pages/Events';
import Apps from './pages/Apps';

import './App.css';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />/
          <Route path="/blog" element={<Blog />} />
          <Route path="/music" element={<Music />} />
          <Route path="/art" element={<Art />} />
          <Route path="/objects" element={<Objects />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/events" element={<Events />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

