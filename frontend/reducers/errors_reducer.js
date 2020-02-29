import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import transactionsErrorsReducer from "./transactions_errors_reducer";

const errorsReducer = combineReducers({
  transactions: transactionsErrorsReducer,
  session: sessionErrorsReducer
});

export default errorsReducer;
