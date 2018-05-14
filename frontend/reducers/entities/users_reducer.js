import { RECEIVE_CURRENT_USER } from '../../actions/session_actions'
import { RECEIVE_PROFILE } from '../../actions/profile_actions'
import { RECEIVE_POSTS } from '../../actions/post_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
  let newState
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state)
      newState[action.user.id] = action.user;
      return newState
    case RECEIVE_PROFILE:
      newState = merge({}, state)
      newState[action.profile.user_id] = action.profile.user
      return newState;
    case RECEIVE_POSTS:
      newState = merge({}, state, action.users)
      return newState
    default:
      return state;
  }
}
