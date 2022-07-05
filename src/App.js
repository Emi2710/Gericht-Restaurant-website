import React, { Fragment } from 'react';

import { ParallaxProvider } from 'react-scroll-parallax';

import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
import Footer from './components/Footer/Footer';
import Scroll from './components/Scroll/Scroll';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Contact from './pages/Contact/Contact';

import './App.css';

const App = () => {

  return(
    <ParallaxProvider>


      <Fragment>
        <div style={{backgroundColor:'#0C0C0C'}}>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="contact" element={<Contact />} />
          </Routes>

          
          <Footer />  
          <Scroll />
        </div> 
      </Fragment>
     
      
        
         
    </ParallaxProvider>
  
)};

export default App;
