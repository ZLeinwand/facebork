import { combineReducers } from 'redux'
import loginErrorsReducer from './login_errors_reducer'
import signupErrorsReducer from './signup_errors_reducer'

export default combineReducers({
  loginErrors: loginErrorsReducer,
  signupErrors: signupErrorsReducer
})
