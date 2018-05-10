import { RECEIVE_PROFILE_ERRORS } from '../../actions/profile_actions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PROFILE_ERRORS:
      return action.errors;
    default:
      return [];
  }
}
