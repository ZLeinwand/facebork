import * as APIUtil from '../util/profile_api_util';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS';

export const fetchProfile = (userId) => (dispatch) => {
  return APIUtil.fetchProfile(userId).then((profile) => dispatch(receiveProfile(profile)), (errors) => dispatch(receiveErrors(errors)))
}

export const updateProfile = (profileData) => (dispatch) => {
  return APIUtil.updateProfile(profileData).then((profile) => dispatch(receiveProfile(profile)), (errors) => dispatch(receiveErrors(errors)))
}

const receiveProfile = (profile) => {
  return {
    type: RECEIVE_PROFILE,
    profile
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_PROFILE_ERRORS,
    errors
  }
}
