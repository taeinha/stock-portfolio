import React from 'react';

const TransactionsItem = ({ type, symbol, quantity, price, date}) => {
  return (
    <tr className="transactions-item">
      <td>{type}</td>
      <td>{symbol}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{date}</td>
    </tr>
  );
};

export default TransactionsItem;