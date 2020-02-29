class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def log_in!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def log_out!
    @current_user.reset_session_token!
    session[:session_token] = nil
  end

  # used in controllers to ensure users are logged in 
  # before taking any controller actions

  def require_log_in!
    unless logged_in?
      render json: ['You need to be logged in.'], status: 401
    end
  end
end
