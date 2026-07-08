import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Segments } from './pages/Segments';
import { Partners } from './pages/Partners';
import { Teams } from './pages/Teams';
import { Contact } from './pages/Contact';
import { Blogs } from './pages/Blogs';
import { BlogDetails } from './pages/BlogDetails';
export function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>);

}