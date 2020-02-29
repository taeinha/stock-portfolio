import { RECEIVE_ALL_TRANSACTIONS, RECEIVE_SINGLE_TRANSACTION } from "../actions/transaction_actions";
import { merge } from "lodash";

const transactionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState, transaction;

  switch (action.type) {
    case RECEIVE_ALL_TRANSACTIONS:
      return action.payload || {};
    case RECEIVE_SINGLE_TRANSACTION:
      transaction = action.payload.transaction;
      newState = merge({}, state);
      newState[transaction.id] = merge({}, newState[transaction.id], transaction);
      return transaction;
    default:
      return state;
  }
};

export default transactionsReducer;