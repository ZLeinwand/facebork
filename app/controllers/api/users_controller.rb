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

    #first get all friends of user
    #then get all posts of all user friends and user

    # create an array from ids of @users
    # users_friends.pluck(&:id)

    # users.index.json.jbuilder ---- postIds = @posts.pluck(&:id)
  end

  def create_friendship
    @friendship = current_user.friends_requested.new(friend_params)

    if @friendship.save
      head :ok
    else
      render json: @friendship.errors.full_messages
    end
  end

  def update_friendship
    friend_id = params[:id]


    friendship = Friend.where(<<-SQL, current_user.id, friend_id, current_user.id, friend_id)
      (friends.friender = ? AND friends.friendee = ?) OR (friends.friendee = ? AND friends.friender = ?)
      SQL

    if friendship.update(status: params[:friend][:status])
      @user = current_user
      render :show
    else
      render json: friendship.errors.full_messages
    end
  end

  def destroy_friendship
    friend_id = params[:id]
    friendship = Friend.where(<<-SQL, current_user.id, friend_id, current_user.id, friend_id)
      (friends.friender = ? AND friends.friendee = ?) OR (friends.friendee = ? AND friends.friender = ?)
      SQL
    friendship.destroy
  end



  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :avi, :cover_photo)
  end

  def friend_params
    params.require(:friend).permit(:friendee_id, :status)
  end
end
