json.transaction do
  json.partial! "/api/transactions/transaction", transaction: @transaction
end

json.user do
  json.partial! "/api/users/user", user: @user
end