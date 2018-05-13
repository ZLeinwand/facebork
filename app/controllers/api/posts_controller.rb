class Api::PostsController < ApplicationController
  def index
    @posts = Post.where(wall_id: params[:post][:wall_id]).order(created_at: :desc)
    # @posts = Post.all.order(created_at: :desc)
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      @posts = Post.where(wall_id: params[:post][:wall_id]).order(created_at: :desc)
      render :index
    else
      render json: @post.errors.full_messages, status: 420
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(params[:body])
      @posts = Post.where(wall_id: @post.wall_id).order(created_at: :desc)
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
