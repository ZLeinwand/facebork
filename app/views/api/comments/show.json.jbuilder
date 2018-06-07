json.extract! @comment, :id, :author_id, :post_id, :comment_text
json.likes do
  json.like_count @comment.likes.length
  if @comment.likes.pluck(:user_id).include?(current_user.id)
    json.liked true
  else
    json.liked false
  end
end
