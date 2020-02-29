import { connect } from "react-redux";

const msp = state => ({
  user: state.entities.user,
  stocks: Object.values(state.entities.stocks)
});

const mdp = dispatch => ({
  
});

export default connect(msp, mdp)(StockForm);