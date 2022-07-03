import React from 'react';

import Header from './container/Header/Header';
import Drinks from './container/Drinks/Drinks';
import Poison from './container/Poison/Poison';
import HappyHour from './container/HappyHour/HappyHour';
import Special from './container/Menu/Special';
import FindUs from './container/FindUs/FindUs';

const Menu = () => {
  return (
    <div>
      <Header />
      <Drinks />
      <Poison />
      <HappyHour />
      <Special />
      <FindUs />
    </div>
  )
}

export default Menu