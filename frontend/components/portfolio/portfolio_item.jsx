import React from 'react';
import { Link } from 'react-router-dom';
import { changeArrow } from '../../util/numbers_util';

const PortfolioItem = ({ ticker, quantity, price, change, total, color }) => {
  return (
    <li className="portfolio-item-container">
      <p style={{ color }}>{ticker}</p>
      <p>{quantity} share{quantity > 1 ? "s" : ""}</p>
      <p style={{ color }}>{price}</p>
      <p>{change}% <span style={{ color }}>({changeArrow(parseFloat(change))})</span></p>
      <p>{total}</p>
    </li>
  )
};

export default PortfolioItem;