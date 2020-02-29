import * as StockAPIUtil from "../util/stocks_api_util";

export const RECEIVE_SINGLE_STOCK = "RECEIVE_SINGLE_STOCK";
export const RECEIVE_ALL_STOCKS = "RECEIVE_ALL_STOCKS";

const receiveAllStocks = payload => ({
  type: RECEIVE_ALL_STOCKS,
  payload
});

const receiveSingleStock = payload => ({
  type: RECEIVE_SINGLE_STOCK,
  payload
});

export const fetchAllStocks = () => dispatch => {
  return StockAPIUtil.fetchAllStocks().then(payload =>
    dispatch(receiveAllStocks(payload))
  );
};

export const createStock = stock => dispatch => {
  return StockAPIUtil.createStock(stock).then(payload =>
    dispatch(receiveSingleStock(payload))
  );
};
