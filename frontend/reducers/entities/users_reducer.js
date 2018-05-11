import { RECEIVE_CURRENT_USER } from '../../actions/session_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
  let newState
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state)
      newState[action.user.id] = action.user;
      return newState
    default:
      return state;
  }
}
