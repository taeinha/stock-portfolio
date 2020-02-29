import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TransactionsItem from './transactions_item';
import { isEmpty } from 'lodash';

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  componentDidMount() {
    const { fetchAllTransactions, fetchAllStocks, stocks } = this.props;
    if (isEmpty(stocks)) {
      fetchAllStocks().then(() => fetchAllTransactions());
    } else {
      fetchAllTransactions();
    }
  }
  
  render() {
    const { transactions, stocks } = this.props;
    let transactionRows, emptyEle;
    if (Object.keys(stocks).length > 0 && transactions.length > 0) {
      transactionRows = transactions.map(transaction => {
        const date = new Date(transaction.created_at).toLocaleDateString();
        debugger
        return <TransactionsItem
          type="BUY"
          symbol={stocks[transaction.stock_id].ticker}
          quantity={transaction.quantity}
          price={transaction.price}
          date={date}
          key={transaction.id}
        />
      });
    } else {
      emptyEle = (
        <div>Empty transactions list</div>
      )
    }

    return (
      <div className="transactions-container">
        <h1>Stock Transactions</h1>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Symbol</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactionRows}
          </tbody>
        </table>
        {emptyEle}
      </div>
    );
  }
}

export default Transactions;