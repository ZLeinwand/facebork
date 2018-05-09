class Api::UsersController < ApplicationController

  # enable after sessions is complete
  # before_action :require_login

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 420
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    #current_user.friends should get all users from friends list
    #User.find_by user query string from search to find users with find friends
    @users = User.all
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
