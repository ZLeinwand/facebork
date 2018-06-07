comments = []
authors = []

json.posts do
  json.offset @offset
  json.post_order do
    json.array! @posts.map(&:id)
  end

  @posts.each do |post|
    comments += post.comments
    authors << post.author

    json.set! post.id do
      json.extract! post, :id, :author_id, :wall_id, :body, :created_at
      json.comments []
      json.comments do
        json.array! post.comment_ids
      end
      json.likes do
        json.like_count post.likes.length
        if post.likes.pluck(:user_id).include?(current_user.id)
          json.liked true
        else
          json.liked false
        end
      end
    end
  end
end


json.comments do
  json.hng 'wat'
  comments.each do |comment|
    authors << comment.author

    json.set! comment.id do
      json.extract! comment, :id, :author_id, :post_id, :comment_text
      json.likes do
        json.like_count comment.likes.length
        if comment.likes.pluck(:user_id).include?(current_user.id)
          json.liked true
        else
          json.liked false
        end
      end
    end
  end
end

json.users do
  authors.each do |user|
    json.set! user.id do
      json.extract! user, :id, :name
      json.avi_url image_url(user.avi.url)
    end
  end
end
