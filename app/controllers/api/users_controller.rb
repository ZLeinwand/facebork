class Api::UsersController < ApplicationController

  # enable after sessions is complete
  # before_action :require_login

  def create
    @user = User.new(user_params)
    if @user.save
      Profile.create(user_id: @user.id)
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 420
    end
  end

  def show
    @user = User.find(params[:id])
    @profile_id = @user.profile.id
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      @profile = @user.profile
      render 'api/profiles/show.json.jbuilder'
    else
      render json: @user.errors.full_messages, status: 420
    end
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
    params.require(:user).permit(:name, :email, :password, :avi, :cover_photo)
  end
end
