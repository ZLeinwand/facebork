import { START_LOADING_POSTS, RECEIVE_POSTS } from '../actions/post_actions'

export default (state = false, action) => {
  switch (action.type) {
    case START_LOADING_POSTS:
      return true;
    case RECEIVE_POSTS:
      return false;
    default:
      return state;
  }
}
