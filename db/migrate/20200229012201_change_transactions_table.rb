class ChangeTransactionsTable < ActiveRecord::Migration[5.2]
  def change
    change_column :transactions, :user_id, :integer, null: false
    change_column :transactions, :stock_id, :integer, null: false
    change_column :transactions, :quantity, :integer, null: false
    change_column :transactions, :price, :decimal, null: false
    change_column :stocks, :ticker, :string, null: false
  end
end
