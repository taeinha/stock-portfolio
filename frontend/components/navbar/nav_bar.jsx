import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    const { logoutUser } = this.props;
    e.preventDefault();
    logoutUser();
  }

  render() {
    const { history } = this.props;
    
    return (
      <main className="nav-container">
        <nav className="left-nav">
          <h1>StockSim</h1>
        </nav>
        <nav className="right-nav">
          { history.location.pathname === "/transactions" ? (
            <Link to="/">Portfolio</Link>
          ) : (
            <Link to="/transactions">Transactions</Link>
          )}

          <button onClick={this.handleLogout}>Sign Out</button>
        </nav>
      </main>
    );
  }
}

export default withRouter(NavBar);