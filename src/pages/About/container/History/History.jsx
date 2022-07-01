import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../../../components';
import './History.css';

const History = () => {
  return (
    <div className='history__wrapper'>
      <div className='history__heading'>
        <SubHeading title='Our history' />
        <h3 className='headtext__cormorant'>Service Customers For Over A Decade</h3>
      </div>
      <div className='history__container'>

        <div className='history__container-left'>
          <p className='p__opensans' style={{maxWidth:'523px', paddingBottom:'1rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <img src={images.history1}  />
        </div>

        <div className='history__container-right'>
          <img src={images.history2} className='history__right-img' />
          <div className='history__container-years'>
            <h5 style={{fontSize:'45px', fontFamily:'Cormorant Upright, sans-serif', color:'#DCCA87'}}>Over The Years</h5>
            <div className='years__container'>
              <div>
                <p className='headtext__cormorant' style={{fontSize:'45px'}}>30+</p>
                <img src={images.spoon} style={{width:'40px'}} />
                <p className='p__cormorant' style={{paddingTop:'1rem'}}>Breakfast options</p>  
              </div>

              <hr />

              <div>
                <p className='headtext__cormorant' style={{fontSize:'45px'}}>50+</p>
                <img src={images.spoon} style={{width:'40px'}} />
                <p className='p__cormorant' style={{paddingTop:'1rem'}}>Dinner options</p>  
              </div>

              <hr />

              <div>
                <p className='headtext__cormorant' style={{fontSize:'45px'}}>8</p>
                <img src={images.spoon} style={{width:'40px'}} />
                <p className='p__cormorant' style={{paddingTop:'1rem'}}>New Location</p>  
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default History