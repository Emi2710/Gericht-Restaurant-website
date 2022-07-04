import React from 'react';
import './HappyHour.css';

import {images} from '../../constants'

const HappyHour = () => {
  return (
    <div className='happyhour__wrapper' style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images.happyhour})`}}>
        <h2 className='headtext__cormorant'>Happy Hour</h2>
        <p className='p__cormorant' style={{color:'#fff', paddingTop:'1rem'}}>Monday - Friday (4:00 Pm - 7:00 Pm)</p>
    </div>
  )
}

export default HappyHour