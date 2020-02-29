export const fetchAllStocks = () =>
  $.ajax({
    method: "GET",
    url: "/api/stocks"
  });

export const createStock = stock => {
  return $.ajax({
    method: "POST",
    url: "/api/stocks/",
    data: { stock }
  });
};
