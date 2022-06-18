import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding'>
    <div className='app__wrapper-info'>
      <SubHeading title="Chase the new flavor" />
      <h1 className='app__header-h1 headtext__cormorant'>The Key To Fine Dining</h1>
      <p className='app__header-paragraph p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type="button" className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__header-img'>
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
