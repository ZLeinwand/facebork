class Api::PostsController < ApplicationController
  def index
    @posts = Post.where(wall_id: params[:post][:wall_id]).order(created_at: :desc)
    post_authors = @posts.map(&:author_id)
    post_authors_query_str = "(#{post_authors.uniq.join(', ')})"
    @users = User.where("id IN #{post_authors_query_str}")
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    debugger
    if @post.save
      @posts = Post.where(wall_id: params[:post][:wall_id]).order(created_at: :desc)
      post_authors = @posts.map(&:author_id)
      post_authors_query_str = "(#{post_authors.uniq.join(', ')})"
      @users = User.where("id IN #{post_authors_query_str}")
      render :index
    else
      render json: @post.errors.full_messages, status: 420
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(params[:body])
      @posts = Post.where(wall_id: @post.wall_id).order(created_at: :desc)
      post_authors = @posts.map(&:author_id)
      post_authors_query_str = "(#{post_authors.uniq.join(', ')})"
      @users = User.where("id IN #{post_authors_query_str}")
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
