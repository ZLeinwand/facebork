json.users do
  @users.each do |user|
    json.set! user.id do
      json.partial! '/api/users/user.json.jbuilder', user: user
      json.lives_in user.profile.lives_in
    end
  end
end

json.search_results @users.pluck(:id)
