import React from 'react';
import './FindUs.css';

import { SubHeading } from '../../../../components';
import { images } from '../../constants';

const FindUs = () => {
  return (
    <div className='findus__wrapper app__bg'>
      <div className='findus__container'>
        <SubHeading title='Contact' />
        <h2 className='headtext__cormorant'>Find Us</h2>
        <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className='p__cormorant' style={{color:'#dcc489'}}>Opening Hours</p>
        <p className='p__opensans' style={{color:'#fff'}}>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p__opensans' style={{color:'#fff'}}>Sat - Sun: 10:00 am - 03:00 am</p>
        <button className='custom__button'>Visit Us</button>
      </div>
      <div className='findus__img-container'>
        <img src={images.findus} />
      </div>
    </div>
  )
}

export default FindUs