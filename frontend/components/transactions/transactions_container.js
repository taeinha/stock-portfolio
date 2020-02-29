import { connect } from "react-redux";
import Transactions from "./transactions";
import { fetchAllTransactions, createTransaction } from "../../actions/transaction_actions";
import { fetchAllStocks } from "../../actions/stock_actions";

const msp = state => ({
  user: state.entities.user,
  transactions: Object.values(state.entities.transactions),
  stocks: state.entities.stocks
});

const mdp = dispatch => ({
  fetchAllTransactions: () => dispatch(fetchAllTransactions()),
  createTransaction: transaction => dispatch(createTransaction(transaction)),
  fetchAllStocks: () => dispatch(fetchAllStocks())
});

export default connect(msp, mdp)(Transactions);
