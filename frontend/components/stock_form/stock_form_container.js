import { connect } from "react-redux";
import StockForm from "./stock_form";
import { createStock } from "../../actions/stock_actions";
import { createTransaction } from "../../actions/transaction_actions";
import { fetchTicker } from "../../util/iex_api_util";

const msp = state => ({
  balance: state.user.balance,
});

const mdp = dispatch => ({
  submitStock: stock => dispatch(createStock(stock)),
  submitTransaction: transaction => dispatch(createTransaction(transaction)),
  fetchTicker: ticker => fetchTicker(ticker)
});

export default connect(msp, mdp)(StockForm);
