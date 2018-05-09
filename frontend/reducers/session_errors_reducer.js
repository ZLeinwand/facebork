import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions'

export default (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors
    default:
      return []
  }
}
