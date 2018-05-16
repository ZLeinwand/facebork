// import { receiveUsers, RECEIVE_USERS } from './friendship_actions'
import { RECEIVE_PROFILE, receiveProfile } from './profile_actions'
import * as APIUtil from '../util/user_api_util'

export const updateProfilePic = (profilePicData) => (dispatch) => {
  return APIUtil.updateProfilePic(profilePicData).then((profile) => dispatch(receiveProfile(profile)), (errors) => dispatch(receiveErrors(errors)))
}

export const searchBorkers = (query) => (dispatch) => {
  return APIUtil.searchBorkers(query).then((borkList) => dispatch(receiveSearch(borkList)), (errors) => dispatch(receiveErrors(errors)))
}

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS'

const receiveSearch = (results) => {
  return {
    type: RECEIVE_SEARCH,
    results
  }
}

export const clearSearchResults = () => {
  return {
    type: CLEAR_SEARCH_RESULTS
  }
}
