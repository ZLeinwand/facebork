import { combineReducers } from 'redux';
import usersReducer from './entities/users_reducer';
import profilesReducer from './entities/profiles_reducer'

export default combineReducers({
  users: usersReducer,
  profiles: profilesReducer
})
