import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchTickers } from '../../util/iex_api_util';
import PortfolioItem from './portfolio_item';
import { twoDecimals, changeColor } from '../../util/numbers_util';
import StockFormContainer from '../stock_form/stock_form_container';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stocksData: null
    };
  }

  componentDidMount() {
    const { fetchAllStocks } = this.props;

    fetchAllStocks().then((data) => {
      const tickers = Object.values(data.payload).map(stock => stock.ticker);
      fetchTickers(tickers).then(data => {
        this.setState({stocksData: data});
      });
    });
  }

  componentDidUpdate() {
    const { stocksData } = this.state;
    const { stocks } = this.props;
    const tickers = Object.values(stocks).map(stock => stock.ticker);
    if (!stocksData || (stocksData && Object.keys(stocksData).length !== tickers.length)) {
      fetchTickers(tickers).then(data => {
        this.setState({ stocksData: data });
      });
    }
  }

  render() {
    const { user, stocks } = this.props;
    const { stocksData } = this.state;
    let latestPrice, openPrice, change, total, portfolioItems, color;
    let netWorth = 0;
    const tickers = Object.values(stocks).map(stock => stock.ticker);
    if (stocksData && Object.keys(stocksData).length === tickers.length) {
      portfolioItems = stocks.map(stock => {
        latestPrice = twoDecimals(stocksData[stock.ticker].quote.latestPrice);
        openPrice = stocksData[stock.ticker].quote.open;
        change = twoDecimals((latestPrice - openPrice) * 100 / openPrice);
        total = twoDecimals(latestPrice * stock.quantity);
        netWorth += parseFloat(total);
        color = changeColor(parseFloat(change));
        
        return <PortfolioItem
          ticker={stock.ticker}
          quantity={stock.quantity}
          price={latestPrice}
          change={change}
          total={total}
          key={stock.id}
          color={color}
        />;
      });
    } else {
      portfolioItems = <li>No stocks in portfolio.</li>;
    }

    return (
      <div className="overall-portfolio-container">
        <div className="portfolio-container-center">
          <div className="portfolio-container">
            <div>
              <h1>{user.username}'s Portfolio (${netWorth})</h1>
              <i className="fas fa-sync-alt"></i>
            </div>
            <ul className="portfolio-stock-list">
              <li className="portfolio-item-container">
                <p>Symbol</p>
                <p>Quantity</p>
                <p>Price</p>
                <p>Change</p>
                <p>Value</p>
              </li>
              {portfolioItems}
            </ul>
          </div>
          <StockFormContainer />
        </div>
      </div>
    )
  }
}

export default Portfolio;