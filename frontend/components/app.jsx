import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/nav_bar_container';

const App = (props) => {
  return (
    <div className="app-container">
      <NavBarContainer />
      {/* <Switch>
        <Route exact path="/" component={VideoIndexContainer} />
        <Route exact path="/transactions" component={VideoShowContainer} />
      </Switch> */}
    </div>
  )
}

export default App;