json.extract! user, :id, :name
json.avi_url image_url(user.avi.url)
json.cover_url image_url(user.cover_photo.url)
json.status current_user.friendship_status(user.id)
