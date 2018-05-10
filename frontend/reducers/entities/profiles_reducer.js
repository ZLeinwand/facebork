import { RECEIVE_PROFILE } from '../../actions/profile_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PROFILE:
      let newState = merge({}, state)
      newState[action.profile.id] = action.profile
      return newState;
    default:
      return state
  }
}
