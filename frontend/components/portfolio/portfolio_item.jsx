import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ ticker, quantity, price, change, total }) => {
  return (
    <li className="portfolio-item-container">
      <p>{ticker}</p>
      <span>{" \u2022 "}</span>
      <p>{quantity} shares</p>
      <p>{price}</p>
      <p>{change}</p>
      <p>{total}</p>
    </li>
  )
};

export default PortfolioItem;