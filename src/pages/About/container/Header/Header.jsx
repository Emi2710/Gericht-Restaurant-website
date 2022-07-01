import React from 'react'
import {images} from '../../constants';
import './Header.css';
const Header = () => {
  return (
    <div className='header__wrapper' style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images.header})` 
    }}>
      <div className='header__text-container'>
        <div className='header__title headtext__cormorant' style={{padding:'1rem'}}><h3>Welcome To Gericht</h3></div>
        <div className='p__cormorant'>About Us</div>  
      </div>
      

    </div>
  )
}

export default Header