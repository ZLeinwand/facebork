import { RECEIVE_SIGNUP_ERRORS } from '../actions/session_actions'

export default (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_SIGNUP_ERRORS:
      return action.errors
    default:
      return []
  }
}
