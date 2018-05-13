json.post_order do
  json.array! @posts.map(&:id)
end
@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :author_id, :wall_id, :body, :created_at
  end
end
