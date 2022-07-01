import React from 'react';
import './Customers.css';

import { SubHeading } from '../../../../components';
import { CustomerModel } from '../../components/';
import { customers, images } from '../../constants'

const Customers = () => {
  return (
    <div className='customers__wrapper'>
      <SubHeading title='Testimony' />
      <h2 className='headtext__cormorant' style={{paddingBottom: '2rem', padding: '0.5rem', textAlign: 'center'}}>Happy Customers</h2>
      <div className='customers__container'>
        {
          customers.customers.map((customers) => (
            <CustomerModel key={customers.imgUrl} imgUrl={customers.imgUrl} name={customers.name} role={customers.role} testimony={customers.testimony} />
          ))
        }
        
      </div>
    </div>
  )
}

export default Customers