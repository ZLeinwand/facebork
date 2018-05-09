import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_USER';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS'
export const RECEIVE_LOGIN_ERRORS = 'RECEIVE_LOGIN_ERRORS'

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

const receiveLoginErrors = (errors) => {
  return {
    type: RECEIVE_LOGIN_ERRORS,
    errors
  }
}

const receiveSignupErrors = (errors) => {
  return {
    type: RECEIVE_SIGNUP_ERRORS,
    errors
  }
}


export const login = (userInfo) => (dispatch) => {
  return APIUtil.login(userInfo).then((user) => (dispatch(receiveCurrentUser(user))), (errors) => (dispatch(receiveLoginErrors(errors.responseJSON))))
}

export const logout = () => (dispatch) => {
  return APIUtil.logout().then(() => dispatch(logoutCurrentUser()))
}

export const signup = (userInfo) => (dispatch) => {
  return APIUtil.signup(userInfo).then((user) => (dispatch(receiveCurrentUser(user))), (errors) => (dispatch(receiveSignupErrors(errors.responseJSON))))
}
