import { combineReducers } from "redux";
import stockErrorsReducer from "./stock_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
  stock: stockErrorsReducer,
  session: sessionErrorsReducer
});

export default errorsReducer;
