@stocks.each do |stock_arr|
  stock = stock_arr[0]
  quantity = stock_arr[1]
  json.set! stock.id do 
    json.partial! 'api/stocks/stock', stock: stock, quantity: quantity
  end
end