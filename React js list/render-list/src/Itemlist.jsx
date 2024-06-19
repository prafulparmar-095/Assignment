import React from 'react';
import './App.css';

const ItemList = ({ items }) => {
  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <li key={index} className="item">
          <span className="check-mark">✔️</span> {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
