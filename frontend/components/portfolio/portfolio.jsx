import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchTickers } from '../../util/iex_api_util';
import PortfolioItem from './portfolio_item';
import { twoDecimals } from '../../util/numbers_util';
import StockFormContainer from '../stock_form/stock_form_container';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stocksData: {}
    };
  }

  render() {
    const { user, stocks } = this.props;
    const { stocksData } = this.state;
    let latestPrice, openPrice, change, total;
    let netWorth = 0;

    const portfolioItems = stocks.map(stock => {
      latestPrice = stocksData[stock.ticker].latestPrice;
      openPrice = stocksData[stock.ticker].openPrice;
      change = twoDecimals((latestPrice - open) * 100 / open);
      total = twoDecimals(latestPrice * stock.quantity);
      netWorth += total;
      
      return <PortfolioItem
        ticker={stock.ticker}
        quantity={stock.quantity}
        price={latestPrice}
        change={change}
        total={total}
      />;
    });
    return (
      <div className="overall-portfolio-container">
        <div className="portfolio-container">
          <div>
            <h1>{user.username}'s Portfolio ({netWorth})</h1>
            <i class="fas fa-sync-alt"></i>
          </div>
          <ul>
            {portfolioItems}
          </ul>
        </div>
        <StockFormContainer />
      </div>
    )
  }
}

export default Portfolio;