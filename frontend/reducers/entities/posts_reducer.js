import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from '../../actions/post_actions'
import { RECEIVE_COMMENT } from '../../actions/comment_actions'
import { LOGOUT_USER } from '../../actions/session_actions'
import merge from 'lodash/merge'

export default (state = { post_order: [] }, action) => {
  let newState;
  switch (action.type) {
    case LOGOUT_USER:
      return { post_order: []}
    case RECEIVE_POSTS:
    // debugger
      return merge({}, state, action.posts)
    case RECEIVE_COMMENT:
      newState = merge({}, state)
      newState[action.comment.post_id].comments.push(action.comment.id)
      return newState
    case REMOVE_POST:
      newState = merge({}, state)
      let newPostOrder = merge([], state.post_order)
      let indexToDelete = newPostOrder.indexOf(action.postId)
      newPostOrder.splice(indexToDelete, 1);
      delete newState[action.postId]
      newState.post_order = newPostOrder
      return newState
    default:
      return state
  }
}
