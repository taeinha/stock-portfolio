import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { merge } from "lodash";
import { RECEIVE_SINGLE_TRANSACTION } from "../actions/transaction_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState, users, user;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user;
    case RECEIVE_SINGLE_TRANSACTION:
      return action.payload.user;
    default:
      return state;
  }
};

export default usersReducer;
