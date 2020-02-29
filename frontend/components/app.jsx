import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/nav_bar_container';
import PortfolioContainer from './portfolio/portfolio_container';
import TransactionsContainer from './transactions/transactions_container';

const App = (props) => {
  return (
    <div className="app-container">
      <NavBarContainer />
      <Switch>
        <Route exact path="/" component={PortfolioContainer} />
        <Route exact path="/transactions" component={TransactionsContainer} />
      </Switch>
    </div>
  )
}

export default App;