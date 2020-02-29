import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchTicker } from '../../util/iex_api_util';
import { twoDecimals } from '../../util/numbers_util';

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

    this.handleSearch = this.handleSearch.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    const { quantity, ticker } = this.state;
    const { submitStock } = this.props;

    if (Number.isInteger(Number(quantity)) && quantity >= 0) {
      fetchTicker(ticker).then(data => {
        this.setState({ 
          stockData: data,
          buyPhase: true
        });
        submitStock({
          ticker: data.symbol,
          company: data.companyName
        });
      });
    } else {
      this.setState({ error: "Quantity must be an integer and be greater than zero."});
    }
  }

  handleBuy(e) {
    e.preventDefault();
    const { submitTransaction } = this.props;
    const { stockData, quantity, ticker } = this.state;
    submitTransaction({
      ticker: ticker,
      quantity: quantity,
      price: stockData.latestPrice
    }).then(() => {
      this.resetState();
    });
  }

  resetState() {
    this.setState({
      stockData: {},
      ticker: "",
      quantity: 0,
      buyPhase: false,
      error: "",
    });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    const { buyPhase, stockData, quantity, ticker } = this.state;
    const { balance } = this.props;
    return (
      <div className="stock-form-container">
        <h1>Balance - ${twoDecimals(balance)}</h1>

        { stockData.companyName ? (
          <ul className="stock-info-container">
            <li><p>Company</p><p>{stockData.companyName}</p></li>
            <li><p>Price</p><p>{stockData.latestPrice}</p></li>
            <li><p>Subtotal</p><p>{stockData.latestPrice * quantity}</p></li>
          </ul>
        ) : null}
        
        <form onSubmit={buyPhase ? this.handleBuy : this.handleSearch} noValidate>
          <label>
            <input
              type="text"
              value={ticker}
              onChange={this.update('ticker')}
              placeholder="Ticker"
              required
              disabled={buyPhase}
            />
          </label>

          <label>
            <input
              type="text"
              value={(quantity === 0) ? "" : quantity}
              onChange={this.update('quantity')}
              placeholder="Quantity"
              required
              disabled={buyPhase}
            />
          </label>
          { buyPhase ? (
            <>
              <button type="submit">Buy</button>
              <div 
                className="cancel-button"
                onClick={this.resetState}
                >Cancel</div>
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