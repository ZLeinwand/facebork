[@friendship.friender, @friendship.friendee].each do |friend_id|
  next if friend_id = currentUser.id
  json.set! friend_id do
    json.status @friendship.status
  end
