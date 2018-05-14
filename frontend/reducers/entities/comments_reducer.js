import { RECEIVE_POSTS } from '../../actions/post_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.comments

    default:
      return state
  }
}
