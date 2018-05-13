class Api::PostsController < ApplicationController
  def index
    @posts = Post.find_by(wall_id: params[:post][:wall_id]).order(created_at: :desc)
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user

    if @post.save
      render :index
    else
      render json: @post.errors.full_messages, status: 420
    end
  end

  def update
    @post = Post.find([:id])

    if @post.update(post_params)
      render :index
    else
      render json: @post.errors.full_messages, status: 420
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
  end

  private

  def post_params
    params.require(:post).permit(:wall_id, :body)
  end
end
