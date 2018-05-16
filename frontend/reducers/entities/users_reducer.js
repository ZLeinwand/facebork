import { RECEIVE_CURRENT_USER } from '../../actions/session_actions'
import { RECEIVE_PROFILE } from '../../actions/profile_actions'
import { RECEIVE_POSTS } from '../../actions/post_actions'
import { RECEIVE_USER, RECEIVE_USERS } from '../../actions/friendship_actions'
import merge from 'lodash/merge'
import { RECEIVE_SEARCH, CLEAR_SEARCH_RESULTS } from '../../actions/user_actions'

export default (state = { search_results: [] }, action) => {
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
    case RECEIVE_USER:
      newState = merge({}, state)
      newState[action.user.id] = merge({}, newState[action.user.id], action.user)
      return newState
    case RECEIVE_USERS:
      newState = merge({}, state, action.users)
      return newState;
    case RECEIVE_POSTS:
      newState = merge({}, state, action.users)
      return newState

    case CLEAR_SEARCH_RESULTS:
      newState = merge({}, state)
      newState.search_results = [];
      return newState;

    case RECEIVE_SEARCH:
      newState = merge({}, state, action.results.users )
      newState.search_results = action.results.search_results
      return newState
    default:
      return state;
  }
}
