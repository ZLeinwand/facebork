import { combineReducers } from 'redux'
import loginErrorsReducer from './session_errors/login_errors_reducer'
import signupErrorsReducer from './session_errors/signup_errors_reducer'

export default combineReducers({
  loginErrors: loginErrorsReducer,
  signupErrors: signupErrorsReducer
})
