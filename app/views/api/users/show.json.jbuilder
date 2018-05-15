json.partial! '/api/users/user.json.jbuilder', user: @user
json.profileId @profileId
json.friends @user.friends.pluck(:id)
json.status current_user.friendship_status(@user.id)
