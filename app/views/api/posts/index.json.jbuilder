comments = []
authors = []

json.posts do
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
    end
  end
end


json.comments do
  json.hng 'wat'
  comments.each do |comment|
    authors << comment.author

    json.set! comment.id do
      json.extract! comment, :id, :author_id, :post_id, :comment_text
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
