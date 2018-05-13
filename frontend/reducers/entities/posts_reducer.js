import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from '../../actions/post_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
  debugger
  let newState;
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case REMOVE_POST:
      newState = merge({}, state)
      delete newState[action.postId]
      return newState
    default:
      return state
  }
}
