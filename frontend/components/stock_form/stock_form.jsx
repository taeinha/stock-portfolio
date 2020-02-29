import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchTicker } from '../../util/iex_api_util';

class StockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockData: {},
      ticker: "",
      quantity: 0,
      buyPhase: false,
      error: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { quantity, ticker } = this.state;
    const { submitStock } = this.props;

    if (Number.isInteger(Number(quantity)) && quantity >= 0) {
      fetchTicker(ticker).then(data => {
        this.setState({ stockData: data });
        debugger;
        submitStock({
          ticker: data.symbol,
          company: data.companyName
        });
      });
    } else {
      this.setState({ error: "Quantity must be an integer and be greater than zero."});
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    const { buyPhase, stockData, quantity } = this.state;
    const { balance } = this.props;
    return (
      <div className="stock-form-container">
        <h1>Balance: {balance}</h1>

        { stockData.companyName ? (
          <ul className="stock-info-container">
            <li><p>Company</p><p>{stockData.companyName}</p></li>
            <li><p>Current Price</p><p>{stockData.latestPrice}</p></li>
            <li><p>Subtotal</p><p>{stockData.latestPrice * quantity}</p></li>
          </ul>
        ) : null}
        
        <form onSubmit={this.handleSubmit} noValidate>
          <label>
            <input
              type="text"
              value={this.state.ticker}
              onChange={this.update('ticker')}
              placeholder="Ticker"
              required
            />
          </label>

          <label>
            <input
              type="number"
              value={this.state.quantity}
              onChange={this.update('quantity')}
              placeholder="Quantity"
              required
            />
          </label>
          { buyPhase ? (
            <>
              <button type="submit">Buy</button>
              <button className="cancel-button">Cancel</button>
            </>
          ) : (
            <button type="submit">Search</button>
          )}
        </form>
      </div>
    );
  }
}

export default StockForm;