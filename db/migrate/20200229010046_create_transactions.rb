class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :user_id
      t.integer :stock_id
      t.integer :quantity
      t.decimal :price
      t.timestamps
      t.index :user_id
      t.index :stock_id
    end
  end
end
