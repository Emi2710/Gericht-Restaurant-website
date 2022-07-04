import React from 'react';
import './Header.css';
import { images } from '../../constants';

const Header = () => {
  return (
    <div className='contact__header-wrapper' style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images.header})` 
    }}>
        <h1 className='headtext__cormorant'>Contact Us</h1>
        <p className='p__cormorant'>Home - Contact</p>

    </div>
  )
}

export default Header