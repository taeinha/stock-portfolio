import { RECEIVE_ALL_STOCKS } from "../actions/stock_actions";
import { merge } from 'lodash';
import { RECEIVE_SINGLE_TRANSACTION } from "../actions/transaction_actions";

const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState, stock;

  switch (action.type) {
    case RECEIVE_ALL_STOCKS:
      return action.payload || {};
    case RECEIVE_SINGLE_TRANSACTION:
      stock = action.payload.stock;
      newState = merge({}, state);
      newState[stock.id] = merge({}, newState[stock.id], stock);
      return newState;
    default:
      return state;
  }
};

export default stocksReducer;