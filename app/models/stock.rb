# == Schema Information
#
# Table name: stocks
#
#  id         :bigint           not null, primary key
#  ticker     :string           not null
#  company    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Stock < ApplicationRecord
  validates :ticker, presence: true

  has_many :transactions,
    primary_key: :id,
    foreign_key: :stock_id,
    class_name: :Transaction

  has_many :holders,
    through: :transactions,
    source: :user

end
