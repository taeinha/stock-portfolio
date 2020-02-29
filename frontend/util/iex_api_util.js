const SINGLE_QUOTE_URL = "https://cloud.iexapis.com/stable/stock/";
const BATCH_QUOTE_URL = "https://cloud.iexapis.com/stable/stock/market/batch?symbols=";

export const fetchTicker = ticker => {
  return $.ajax({
    method: "GET",
    url: 
      SINGLE_QUOTE_URL + 
      ticker + 
      "/quote?token=" + 
      window.iexKey
  });
};

export const fetchTickers = tickers => {
  return $.ajax({
    method: "GET",
    url:
      BATCH_QUOTE_URL +
      tickers.join(",") +
      "&types=quote&token=" +
      window.iexKey
  });
};