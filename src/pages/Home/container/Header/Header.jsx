import React from 'react';

import { Link } from 'react-router-dom';

import { images } from '../../../../constants';
import { SubHeading } from '../../../../components';
import './Header.css';

const Header = () => {

  return(
   
      <div className='app__header app__wrapper section__padding'>
        <div className='app__wrapper-info'>
          <SubHeading title="Chase the new flavor" />
          <h1 className='app__header-h1 headtext__cormorant fadeDown-animation'>The Key To Fine Dining</h1>
          <p className='app__header-paragraph p__opensans fadeDown-animation'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
          <Link to="menu">
            <button type="button" className='custom__button fadeDown-animation'>Explore Menu</button>
          </Link>
        </div>
        <div className='app__header-img'>
          <img src={images.welcome} alt="header_img" className='fadeDown-animation' />
        </div>
      </div>    
  
)};

export default Header;
