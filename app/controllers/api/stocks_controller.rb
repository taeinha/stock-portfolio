class Api::StocksController < ApplicationController
  before_action :require_log_in!

  def index 
    @stocks = current_user.stocks
    render :index
  end

  def create
    @stock = Stock.find_by_ticker(params[:stock][:ticker])

    unless @stock
      @stock = Stock.new(stock_params)

      if @stock.save

      end
    end
  end

  private
  def stock_params
    params.require(:stock).permit(:ticker, :company)
  end
end
