json.posts do
  json.post_order do
    json.array! @posts.map(&:id)
  end
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :author_id, :wall_id, :body, :created_at
    end
  end
end
json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :name
      json.avi_url image_url(user.avi.url)
    end
  end
end
