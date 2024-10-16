class GreetingsController < ApplicationController
  # Since we're building an API, skip CSRF protection
  # protect_from_forgery with: :null_session

  def hello
    render json: { message: 'Hello World' }
  end
end
