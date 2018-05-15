# debugger
json.partial! './api/profiles/profile.json.jbuilder', profile: @profile

json.user do
  json.partial! './api/users/user.json.jbuilder', user: @user
  json.friends []
  json.friends @user.friends.pluck(:id) || []
end

json.status current_user.friendship_status(@user.id)
