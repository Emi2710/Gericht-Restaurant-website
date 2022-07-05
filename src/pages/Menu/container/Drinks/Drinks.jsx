import React from 'react';
import { Link } from 'react-router-dom';
import './Drinks.css';
import { SubHeading } from '../../../../components';

import { images } from '../../constants';

const Drinks = () => {
  return (
    <div className='menu__drinks-wrapper app__bg'>
      <div className='menu__drinks-img-container'>
        <img src={images.food1}  className='menu__drinks-img'/>
      </div>
      <div className='menu__drinks-container'>
        <img src={images.food2} className='menu__drinks-img' />
        <div className='menu__drinks-container-text'>
          <SubHeading title='About Us' />
          <h3 className='headtext__cormorant'>Food, Drinks, Entertainment In One</h3>
          <p className='p__opensans' style={{paddingTop: '2rem', paddingBottom: '2rem'}}>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
          <Link to='../about'>
            <button className='custom__button'>Know More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Drinks