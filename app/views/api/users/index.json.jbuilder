@users.each do |user|
  json.set! user.id do
    json.partial! '/api/users/user.json.jbuilder', user: user
    json.lives_in user.profile.lives_in
    json.email user.email
  end
end
