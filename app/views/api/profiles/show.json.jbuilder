# debugger
json.partial! './api/profiles/profile.json.jbuilder', profile: @profile
json.users do
  json.array! [@user.id]
end
json.user do
  json.partial! './api/users/user.json.jbuilder', user: @user
end
