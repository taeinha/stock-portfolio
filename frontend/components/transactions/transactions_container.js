import { connect } from "react-redux";
import Portfolio from "./portfolio";
import { fetchAllStocks } from "../../actions/stock_actions";

const msp = state => ({
  user: state.entities.user,
  stocks: Object.values(state.entities.stocks)
});

const mdp = dispatch => ({
  fetchAllStocks: () => dispatch(fetchAllStocks())
});

export default connect(msp, mdp)(Portfolio);
