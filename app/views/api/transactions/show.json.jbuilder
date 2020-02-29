json.transaction do
  json.partial! "/api/transactions/transaction", transaction: @transaction
end

json.user do
  json.partial! "/api/users/user", user: @user
end

json.stock do
  json.partial! "/api/stocks/stock", stock: @stock, quantity: @quantity
end