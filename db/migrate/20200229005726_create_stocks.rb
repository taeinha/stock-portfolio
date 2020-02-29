class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :ticker
      t.string :company
      t.timestamps
    end

    add_index :stocks, :ticker, unique: true
  end
end
