import React from 'react';
import { SubHeading } from '../../../../components';
import { images } from '../../constants';

import './Intro.css'

const Intro = () => {
  return (
    <div className='aboutus__wrapper'>
      <SubHeading title='About Us' />
      <h2 className='headtext__cormorant' style={{padding: '0 1rem'}}>Happy Hour With Us</h2>
      <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      <img src={images.about} />
    </div>
  )
}

export default Intro