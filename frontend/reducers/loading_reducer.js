import { START_LOADING_POSTS, RECEIVE_POSTS } from '../actions/post_actions'

export default (state = false, action) => {
  // debugger
  switch (action.type) {
    case START_LOADING_POSTS:
      // debugger
      return true;
    case RECEIVE_POSTS:
      return false;
    default:
      return state;
  }
}
