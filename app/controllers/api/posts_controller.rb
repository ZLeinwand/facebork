class Api::PostsController < ApplicationController
  def index
    # debugger
    if params[:post]
      @posts = Post
        .includes(:author, comments: [:author])
        .where(wall_id: params[:post][:wall_id]).order(created_at: :desc)
    else
      @posts = Post
        .includes(:author, comments: [:author]).order(created_at: :desc)
    end
  end

  def create
    debugger
    if params[:post][:wall_id] != ""
      @post = Post.new(post_params)
      news = false
    else
      news = true
      @post = Post.new(body: params[:post][:body])
      @post.wall_id = current_user.id
    end

    @post.author_id = current_user.id
    if @post.save
      unless news
        @posts = Post
          .includes(:author, comments: [:author])
          .where(wall_id: params[:post][:wall_id]).order(created_at: :desc)

        render :index
      else
        @posts = Post
          .includes(:author, comments: [:author]).order(created_at: :desc)

        render :index
      end
    else
      render json: @post.errors.full_messages, status: 420
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(params[:body])
      @posts = Post
        .includes(:author, comments: [:author])
        .where(wall_id: params[:post][:wall_id]).order(created_at: :desc)
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
