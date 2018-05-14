import { RECEIVE_POSTS } from '../../actions/post_actions'
import { RECEIVE_COMMENT } from '../../actions/comment_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.comments
    case RECEIVE_COMMENT:
      newState = merge({}, state)
      newState[action.comment.id] = action.comment
      return newState
    default:
      return state
  }
}
