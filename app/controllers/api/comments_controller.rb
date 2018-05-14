class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    debugger
    if @comment.save
      @posts = Post
        .includes(:author, comments: [:author])
        .where(wall_id: @comment.post.wall_id)

        render '/api/posts/index.json.jbuilder'
    else
      render json: @comment.errors.full_messages, status: 420
    end
  end

  # def index
  # end

  def update
    @comment = current_user.comments.find(params[:id])
    debugger
    if @comment.update(comment_text: params[:comment][:comment_text])
      @posts = Post
      .includes(:author, comments: [:author])
      .where(wall_id: @comment.post.wall_id)
      render '/api/posts/index.json.jbuilder'
    else
      render json: @comment.errors.full_messages, status: 420
    end
  end

  def destroy
    comment = current_user.comments.find(params[:id])
    comment.destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:comment_text, :post_id)
  end
end
