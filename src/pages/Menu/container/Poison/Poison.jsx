import React from 'react';
import './Poison.css';

import { SubHeading } from '../../../../components';
import { images } from '../../constants';

const Poison = () => {
  return (
    <div className='poison__wrapper'>
      <SubHeading title="Wide Range To Choose From" />
      <h2 className='headtext__cormorant'>What's Your Poison ?</h2>
      <div className='poison__images-container'>
        <img src={images.poison1} />
        <img src={images.poison2} />
        <img src={images.poison3} />
      </div>
    </div>
  )
}

export default Poison