# == Schema Information
#
# Table name: transactions
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  stock_id   :integer          not null
#  quantity   :integer          not null
#  price      :decimal(, )      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Transaction < ApplicationRecord
  
  validates :user_id, :stock_id, :quantity, :price, presence: true
  validates :price, :quantity, numericality: { greater_than_or_equal_to: 0 }

  belongs_to :company,
    primary_key: :id,
    foreign_key: :stock_id,
    class_name: :Stock

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
