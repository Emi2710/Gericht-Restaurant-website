import React from 'react'
import { AboutUs, Chef, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Parallax } from 'react-scroll-parallax';

const Home = () => {
  return (
    <div>

      <Parallax translateY={[-30, 30]}>
        <Header />
      </Parallax>

        <AboutUs />
        <SpecialMenu />

      <Parallax translateY={[-10, 20]}>
        <Chef />
      </Parallax>
        
        <Intro />
        <Laurels />

      <Parallax translate={[-20, 20]}>
        <Gallery />
      </Parallax>
        
        <FindUs />
      

      
        
    </div>
  )
}

export default Home