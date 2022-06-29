import React from 'react';
import './Customers.css';
import images from '../constants/images';


const Customers = ({imgUrl, name, role, testimony}) => {
  return (
    <div className="customer__wrapper">
        <div className='customer__img'>
            {imgUrl}
            {images.quotes}
        </div>
        <div className='customer__container'>
            <p className='p__opensans'>{testimony}</p>
            <h3>{name}</h3>
            <p className='customer__container-role'>{role}</p>
        </div>
    </div>
  )
}

export default Customers