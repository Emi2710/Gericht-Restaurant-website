import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Contact from './pages/Contact/Contact';

import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="menu" element={<Menu />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    <Footer />
   
    
  </div>
);

export default App;
