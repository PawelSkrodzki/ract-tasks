import React from 'react';
import './index.css';

const Menu = ({ title, price, img, desc }) => {
  return (
    <li className="menu-item">
      <img className="photo" src={img} alt="food" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <p className="price">{price}</p>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </li>
  );
};

export default Menu;
