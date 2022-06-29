import React from 'react';

import { images } from '../../../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>
    <div className="app__aboutus-text-container">
      <div className="app__aboutus-aboutus">
        <h2 className="headtext__cormorant">About Us</h2>
        <img src={images.spoon} alt="spoon" className='spoon__img rotate' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-knife'> <img src={images.knife} alt="knife" /></div>

      <div className="app__aboutus-history">
        <h2 className="headtext__cormorant">Our history</h2>
        <img src={images.spoon} alt="spoon" className='spoon__img' />
        <p className='p__opensans'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type="button" className='custom__button'>Know More</button>
      </div>
    </div>

    
  </div>
  
);

export default AboutUs;
