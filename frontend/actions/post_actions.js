import * as APIUtil from '../util/post_api_util'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const REMOVE_POST = 'REMOVE_POST'

export const fetchWallPosts = (wallId) => (dispatch) => {
  return APIUtil.fetchWallPosts(wallId).then((posts) => dispatch(receivePosts(posts)), (errors) => dispatch(receiveErrors(errors)))
}

const receivePosts = (payload) => {
  return {
    type: RECEIVE_POSTS,
    posts: payload.posts,
    users: payload.users,
    comments: payload.comments
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_POST_ERRORS,
    errors
  }
}

export const createPost = (postData) => (dispatch) => {
  return APIUtil.createPost(postData).then((posts) => dispatch(receivePosts(posts)), (errors) => dispatch(receiveErrors(errors)))
}

export const updatePost = (postData) => (dispatch) => {
  return APIUtil.updatePost(postData).then((posts) => dispatch(receivePosts(posts)), (errors) => dispatch(receiveErrors(errors)))
}

export const deletePost = (postId) => (dispatch) => {
  return APIUtil.deletePost(postId).then(() => dispatch(removePost(postId)), (errors) => dispatch(receiveErrors(errors)))
}

const removePost = (postId) => {
  return {
    type: REMOVE_POST,
    postId
  }
}
