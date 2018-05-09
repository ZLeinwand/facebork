import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}


export const login = (userInfo) => (dispatch) => {
  return APIUtil.login(userInfo).then((user) => (dispatch(receiveCurrentUser(user))), (errors) => (dispatch(receiveErrors(errors.responseJSON))))
}

export const logout = () => (dispatch) => {
  return APIUtil.logout().then(() => dispatch(logoutCurrentUser()))
}

export const signup = (userInfo) => (dispatch) => {
  return APIUtil.signup(userInfo).then((user) => (dispatch(receiveCurrentUser(user))), (errors) => (dispatch(receiveErrors(errors.responseJSON))))
}
