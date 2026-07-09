import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loader } from './components/Loader';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Segments } from './pages/Segments';
import { Partners } from './pages/Partners';
import { Teams } from './pages/Teams';
import { Contact } from './pages/Contact';
import { Blogs } from './pages/Blogs';
import { BlogDetails } from './pages/BlogDetails';
import { Careers } from './pages/Careers';
import { Gallery } from './pages/Gallery';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Loader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/segments" element={<Segments />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogDetails />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Loader>
    </BrowserRouter>
  );
}