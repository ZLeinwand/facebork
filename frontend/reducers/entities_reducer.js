import { combineReducers } from 'redux';
import usersReducer from './entities/users_reducer';
import profilesReducer from './entities/profiles_reducer'
import postsReducer from './entities/posts_reducer'
import commentsReducer from './entities/comments_reducer'

export default combineReducers({
  users: usersReducer,
  profiles: profilesReducer,
  posts: postsReducer,
  comments: commentsReducer
})
