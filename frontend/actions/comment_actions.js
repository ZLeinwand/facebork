import * as APIUtil from '../util/comment_api_util';
import { receivePosts } from './post_actions'

export const createComment = (comment) => (dispatch) => {
  return APIUtil.createComment(comment).then((posts) => dispatch(receivePosts(posts)), (errors) => dispatch(receiveCommentErrors(errors)))
}

export const updateComment = (comment) => (dispatch) => {
  return APIUtil.updateComment(comment).then((posts) => dispatch(receivePosts(posts)), (errors) => dispatch(receiveCommentErrors(errors)))
}

export const deleteComment = (commentId) => (dispatch) => {
  return APIUtil.deleteComment(commentId).then((posts) => dispatch(receivePosts(posts)))
}

export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS'

const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId
  }
}

const receiveCommentErrors = (errors) => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  }
}
