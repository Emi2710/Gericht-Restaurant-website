import React from 'react';
import './CustomerModel.css';
import images from '../../constants/images';


const CustomerModel = ({imgUrl, name, role, testimony}) => {
  return (
    <div className="customer__wrapper">
        <div className='customer__img'>
          <img src={imgUrl}  className='customer__img-customer'/>  
          <img src={images.quotes} className='customer__img-quotes' />
        </div>
        <div className='customer__container'>
            <p className='p__opensans' style={{fontStyle:'italic'}}>{testimony}</p>
            <p className='p__cormorant' style={{color:'#DCCA87', fontWeight:'400', fontSize:'25px'}}>{name}</p>
            <p className='p__opensans' style={{color:'#fff'}}>{role}</p>
        </div>
    </div>
  )
}

export default CustomerModel