import { RECEIVE_PROFILE, receiveProfile } from './profile_actions'
import * as APIUtil from '../util/user_api_util'

export const updateProfilePic = (profilePicData) => (dispatch) => {
  return APIUtil.updateProfilePic(profilePicData).then((profile) => dispatch(receiveProfile(profile)), (errors) => dispatch(receiveErrors(errors)))
}
