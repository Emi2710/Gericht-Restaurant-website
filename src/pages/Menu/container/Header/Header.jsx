import React from 'react';
import './Header.css';

import { images } from '../../constants';

const Header = () => {
  return (
    <div className='header__wrapper'>
      <div className='header__img' style={{ 
      backgroundImage: `url(${images.header})`}}>
        <div className='header__title'>
          <h1 className='headtext__cormorant fadeDown-animation' style={{color:'#fff'}} >On The Rocks</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Header