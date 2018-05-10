import { combineReducers } from 'redux'

import sessionsReducer from './sessions_reducer'
import errorsReducer from './errors/errors_reducer'
import entitiesReducer from './entities_reducer'

export default combineReducers({
  entities: entitiesReducer,
  session: sessionsReducer,
  errors: errorsReducer
})
