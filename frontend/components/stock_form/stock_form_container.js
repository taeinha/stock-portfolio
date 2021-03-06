import { connect } from "react-redux";
import StockForm from "./stock_form";
import { createStock } from "../../actions/stock_actions";
import { createTransaction } from "../../actions/transaction_actions";
import { fetchTicker } from "../../util/iex_api_util";
import { clearErrors } from "../../actions/error_actions";

const msp = state => {
  return {
    balance: state.entities.user.balance,
    errors: state.errors.transactions
  };
};

const mdp = dispatch => ({
  submitStock: stock => dispatch(createStock(stock)),
  submitTransaction: transaction => dispatch(createTransaction(transaction)),
  fetchTicker: ticker => fetchTicker(ticker),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(StockForm);
