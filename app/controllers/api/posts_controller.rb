class Api::PostsController < ApplicationController
  def index
    if params[:post]
      @posts = Post
        .includes(:likes, :author, comments: [:likes, :author])
        .where(wall_id: params[:post][:wall_id]).order(created_at: :desc)
        .limit(10).offset(params[:offset])

      @offset = params[:offset]
    else
      friends = current_user.friends.pluck(:id)
      friends << current_user.id
      query = "(#{friends.join(', ')})"
      @posts = Post.where("author_id IN #{query} AND wall_id = author_id")
        .includes(:likes, :author, comments: [:likes, :author]).order(created_at: :desc)
        .limit(25).offset(params[:offset])

      @offset = params[:offset]
    end
  end

  def create
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
          .includes(:likes, :author, comments: [:likes, :author])
          .where(wall_id: params[:post][:wall_id]).order(created_at: :desc)
          .limit(25).offset(params[:offset])

        @offset = params[:offset]
        render :index
      else
        @posts = Post
          .includes(:likes, :author, comments: [:likes, :author]).order(created_at: :desc)
          .limit(25).offset(params[:offset])

        @offset = params[:offset]
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
        .includes(:likes, :author, comments: [:likes, :author])
        .where(wall_id: params[:post][:wall_id]).order(created_at: :desc)
        .limit(25).limit(25).offset(params[:offset])

      @offset = params[:offset]
      render :index
    else
      render json: @post.errors.full_messages, status: 420
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
  end

  def destroy_like
    @like = Like.where(likeable_id: params[:post_id], likeable_type: "Post", user_id: current_user.id).first
    @like.destroy
    render 'api/likes/destroy_like.json.jbuilder'
  end

  private

  def post_params
    params.require(:post).permit(:wall_id, :body)
  end
end
