import React from 'react';

import Header from './container/Header/Header';
import History from './container/History/History';
import Intro from './container/Intro/Intro';
import Chef from './container/Chef/Chef';
import Customers from './container/Customers/Customers';
import Gallery from './container/Gallery/Gallery';


const About = () => {
  return (
    <div>
        <Header />
        <History />
        <Intro />
        <Chef />
        <Customers />
        <Gallery />
    </div>
  )
}

export default About