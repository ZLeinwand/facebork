
export const createLike = (like) => {
  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like }
  })
}

export const delete_post_like = (post_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${post_id}/likes`
  })
}

export const delete_comment_like = (comment_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${comment_id}/likes`
  })
}
