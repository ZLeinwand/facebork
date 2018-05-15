import * as APIUtil from '../util/friend_api_util'

export const makeFriendRequest = (friendId) => (dispatch) => {
  //what kind of data do we want coming back??
  return APIUtil.makeFriendRequest(friendId)
    .then((profile) => dispatch(receiveFriendshipData(profile)),
    (errors) => dispatch(receiveFriendshipErrors(errors)))
}

export const updateFriendshipStatus = (friend) => (dispatch) => {
  return APIUtil.updateFriendshipStatus(friend)
    .then((profile) => dispatch(receiveFriendshipData(profile)),
    (errors) => dispatch(receiveFriendshipErrors(errors)))
}

export const destroyFriendship = (friendId) => (dispatch) => {
  return APIUtil.destroyFriendship(friendId)
    .then((profile) => dispatch(receiveFriendshipData(profile)),
    (errors) => dispatch(receiveFriendshipErrors(errors)))
}
