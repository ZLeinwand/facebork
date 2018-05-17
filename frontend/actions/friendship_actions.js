import * as APIUtil from '../util/friend_api_util'

export const makeFriendRequest = (friendId) => (dispatch) => {
  //what kind of data do we want coming back??
  return APIUtil.makeFriendRequest(friendId)
    .then((user) => dispatch(receiveUser(user)),
    (errors) => dispatch(receiveFriendshipErrors(errors)))
}

export const updateFriendshipStatus = (friend) => (dispatch) => {
  return APIUtil.updateFriendshipStatus(friend)
    .then((user) => dispatch(receiveUser(user)),
    (errors) => dispatch(receiveFriendshipErrors(errors)))
}

export const destroyFriendship = (friendId) => (dispatch) => {
  return APIUtil.destroyFriendship(friendId)
    .then((user) => dispatch(receiveUser(user)),
    (errors) => dispatch(receiveFriendshipErrors(errors)))
}

export const RECEIVE_USER = 'RECEIVE_USER'

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const RECEIVE_USERS = 'RECEIVE_USERS'

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const fetchFriends = (friendId) => (dispatch) => {
  return APIUtil.fetchFriends(friendId)
    .then((users) => dispatch(receiveUsers(users)),
    (errors) => dispatch(receiveUserErrors(errors)))
}

export const fetchFriendRequests = () => (dispatch) => {
  return APIUtil.fetchFriendRequests()
    .then((requesters) => dispatch(receiveRequesters(requesters)),
    (errors) => dispatch(receiveUserErrors(errors)))
}

export const RECEIVE_REQUESTERS = 'RECEIVE_REQUESTERS';

export const receiveRequesters = (requesters) => {
  return {
    type: RECEIVE_REQUESTERS,
    requesters
  }
}
