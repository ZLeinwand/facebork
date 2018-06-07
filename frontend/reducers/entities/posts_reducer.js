import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST, CLEAR_POSTS } from '../../actions/post_actions'
import { RECEIVE_COMMENT } from '../../actions/comment_actions'
import { RECEIVE_LIKE, REMOVE_POST_LIKE } from '../../actions/like_actions'
import { LOGOUT_USER } from '../../actions/session_actions'
import merge from 'lodash/merge'
import union from 'lodash/union'

export default (state = { post_order: [] }, action) => {
  let newState;
  switch (action.type) {
    case CLEAR_POSTS:
      return { post_order: [] }
    case LOGOUT_USER:
      return { post_order: []}

    case RECEIVE_LIKE:
      if (action.likeData.likeable_type === 'Post'){
        newState = merge({}, state)
        newState[action.likeData.likeable_id].likes.like_count++
        newState[action.likeData.likeable_id].likes.liked = true
        return newState
      }else{
        return state
      }

    case REMOVE_POST_LIKE:
      newState = merge({}, state)
      newState[action.likeData.likeable_id].likes.like_count--
      newState[action.likeData.likeable_id].likes.liked = false
      return newState
    case RECEIVE_POSTS:
      newState = merge({}, state, action.posts)
      newState.post_order = union(state.post_order, newState.post_order)
      return newState
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
