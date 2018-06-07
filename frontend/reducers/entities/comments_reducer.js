import { RECEIVE_POSTS } from '../../actions/post_actions'
import { RECEIVE_COMMENT } from '../../actions/comment_actions'
import { RECEIVE_LIKE, REMOVE_COMMENT_LIKE } from '../../actions/like_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_POSTS:
      return merge({}, state, action.comments)
    case RECEIVE_LIKE:
      if (action.likeable_type === 'Comment'){
        newState = merge({}, state)
        newState[action.likeData.likeable_id].likes.like_count++
        newState[action.likeData.likeable_id].likes.liked = true
        return newState
      }else{
        return state
      }

    case REMOVE_COMMENT_LIKE:
      newState = merge({}, state)
      newState[action.likeData.likeable_id].likes.like_count--
      newState[action.likeData.likeable_id].likes.liked = false
      return newState
    case RECEIVE_COMMENT:
      newState = merge({}, state)
      newState[action.comment.id] = action.comment
      return newState
    default:
      return state
  }
}
