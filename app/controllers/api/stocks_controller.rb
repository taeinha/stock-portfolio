class Api::StocksController < ApplicationController
  before_action :require_log_in!

  def index 
    @stocks = current_user
                .transactions
                .includes(:company)
                .group(:company)
                .sum(:quantity)
                .to_a
    render :index
  end

  def create
    @stock = Stock.find_by_ticker(params[:stock][:ticker])
    @stock = Stock.new(stock_params) unless @stock
      
    if @stock.save
      @quantity = current_user.transactions.includes(:company).where(stock_id: @stock.id).group(:company).sum(:quantity).values.first
      render :show
    else
      render json: @stock.errors.full_messages, status: 422
    end
  end

  private
  def stock_params
    params.require(:stock).permit(:ticker, :company)
  end
end
