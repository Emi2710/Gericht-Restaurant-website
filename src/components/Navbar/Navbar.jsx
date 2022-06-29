import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  
  return (
    <nav className='app__navbar'>
    <div className='app__logo'>
      <img src={images.gericht} alt="app__logo" />
    </div>
      <ul className='app__navbar-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="menu">Menu</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} className="menu__hamburger" />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><Link to="/" onClick={() => setToggleMenu(false)}>Home</Link></li>
              <li><Link to="about" onClick={() => setToggleMenu(false)}>About</Link></li>
              <li><Link to="menu" onClick={() => setToggleMenu(false)}>Menu</Link></li>
              <li><Link to="contact" onClick={() => setToggleMenu(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
  </nav>
  )}
  

export default Navbar;
