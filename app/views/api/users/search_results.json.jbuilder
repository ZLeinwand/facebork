json.users do
  @users.each do |user|
    json.set! user.id do
      json.partial! '/api/users/user.json.jbuilder', user: user
      json.lives_in user.profile.lives_in
    end
  end
end
all_users = @users.pluck(:id)
all_users.delete(current_user.id)
json.search_results all_users
