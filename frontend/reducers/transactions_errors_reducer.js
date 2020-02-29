import {
  RECEIVE_TRANSACTION_ERRORS,
  RECEIVE_SINGLE_TRANSACTION,
  RECEIVE_ALL_TRANSACTIONS
} from "../actions/transaction_actions";
import { CLEAR_ERRORS } from "../actions/error_actions";

const _nullState = [];

const transactionsErrorsReducer = (state = _nullState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRANSACTION_ERRORS:
      return action.messages;
    case RECEIVE_SINGLE_TRANSACTION:
      return _nullState;
    case RECEIVE_ALL_TRANSACTIONS:
      return _nullState;
    case CLEAR_ERRORS:
      return _nullState;
    default:
      return state;
  }
};

export default transactionsErrorsReducer;
