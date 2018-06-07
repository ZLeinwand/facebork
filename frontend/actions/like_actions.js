import * as APIUtil from '../util/like_api_util'

export const REMOVE_COMMENT_LIKE = 'REMOVE_COMMENT_LIKE'
export const REMOVE_POST_LIKE = 'REMOVE_POST_LIKE'
export const RECEIVE_LIKE = 'RECEIVE_LIKE'

export const createLike = (likeData) => (dispatch) => {
  return APIUtil.createLike(likeData).then((data) => dispatch(receiveLike(data)))
}

const receiveLike = (likeData) => {
  return {
    type: RECEIVE_LIKE,
    likeData
  }
}

export const destroyPostLike = (postId) => (dispatch) => {
  return APIUtil.delete_post_like(postId).then((data) => dispatch(removePostLike(data)))
}

export const destroyCommentLike = (commentId) => (dispatch) => {
  return APIUtil.delete_comment_like(commentId).then((data) => dispatch(removeCommentLike(data)))
}

const removePostLike = (likeData) => {
  return {
    type: REMOVE_POST_LIKE,
    likeData
  }
}

const removeCommentLike = (likeData) => {
  return {
    type: REMOVE_COMMENT_LIKE,
    likeData
  }
}
