class Api::TransactionsController < ApplicationController
  before_action :require_log_in!

  def index
    @transactions = current_user.transactions
    render :index
  end

  def create
    @stock = Stock.find_by_ticker(params[:transaction][:ticker])
    @transaction = Transaction.new(
      user_id: current_user.id,
      stock_id: @stock.id,
      quantity: params[:transaction][:quantity],
      price: params[:transaction][:price]
    )
   
    if @transaction.valid? 
      @user = current_user
      new_balance = @user.balance - (@transaction.quantity * @transaction.price)

      unless @user.update(balance: new_balance)
        render json: ['Not enough funds to make this transaction!'], status: 422
      else
        @transaction.save
        render :show
      end
      
    else
      render @transaction.errors.full_messages, status: 422
    end
  end

  private

  def transaction_params
    params.require(:transaction).permit(:ticker, :quantity, :price)
  end
end
