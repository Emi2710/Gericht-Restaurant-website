import React from 'react';
import './Form.css';

import {images} from '../../constants';

const Form = () => {
  return (
    <div className='contact__form-wrapper app__bg'>
        <div className='contact__form-container'>
            <form>
                <input type="text" name="fullName" placeholder="Full Name"/>
                <input type="email" name="email" placeholder='Email Adress' />
                <textarea name="message" placeholder='Message' />
                <button className='custom__button'>Submit</button>
            </form>
        </div>
        <div className='contact__form-img'>
            <img src={images.form} />
        </div>
    </div>
  )
}

export default Form