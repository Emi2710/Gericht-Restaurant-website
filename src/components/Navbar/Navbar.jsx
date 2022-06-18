import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  
  return (
    <nav className='app__navbar'>
    <div className='app__logo'>
      <img src={images.gericht} alt="app__logo" />
    </div>
      <ul className='app__navbar-links'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} className="menu__hamburger" />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
  </nav>
  )}
  

export default Navbar;
