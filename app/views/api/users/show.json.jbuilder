json.partial! '/api/users/user.json.jbuilder', user: @user
json.profileId @profileId
json.friends @user.friends.pluck(:id)
