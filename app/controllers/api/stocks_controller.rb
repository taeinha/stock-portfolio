class Api::StocksController < ApplicationController
  before_action :require_log_in!

  def index 
    @stocks = current_user.stocks
    render :index
  end

  def create
    @stock = Stock.find_by_ticker(params[:stock][:ticker])
    @stock = Stock.new(stock_params) unless @stock
      
    if @stock.save
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
