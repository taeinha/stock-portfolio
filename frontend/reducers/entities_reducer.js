import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import stocksReducer from "./stocks_reducer";
import transactionsReducer from "./transactions_reducer";

const entitiesReducer = combineReducers({
  user: usersReducer,
  stocks: stocksReducer,
  transactions: transactionsReducer
});

export default entitiesReducer;
