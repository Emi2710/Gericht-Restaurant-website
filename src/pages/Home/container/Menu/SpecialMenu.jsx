import React from 'react';
import { Link } from 'react-router-dom';

import { SubHeading, MenuItem } from '../../../../components';
import { data, images } from '../../../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Drinks</p>
        <div className="app__specialMenu_menu_items">
          {data.drinks.map((drinks, index) => (
            <MenuItem key={drinks.title + index} title={drinks.title} price={drinks.price} tags={drinks.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Lemonades</p>
        <div className="app__specialMenu_menu_items">
          {data.lemonades.map((lemonades, index) => (
            <MenuItem key={lemonades.title + index} title={lemonades.title} price={lemonades.price} tags={lemonades.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <Link to="menu"><button type="button" className="custom__button">View More</button></Link>
    </div>
  </div>
);

export default SpecialMenu;
