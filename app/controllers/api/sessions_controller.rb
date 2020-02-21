class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user.nil?
      render json: ['Invalid user credentials.'], status: 422
    else
      log_in!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if !logged_in?
      render json: ['You are not logged in.'], status: 404
    else
      log_out!
      render json: {}
    end
  end
end
