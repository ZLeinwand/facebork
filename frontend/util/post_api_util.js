
export const fetchWallPosts = (wall_id, offset) => {
  return $.ajax({
    url: '/api/posts',
    data: { post: { wall_id,}, offset}
  })
}

export const createPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: { post }
  })
}

export const deletePost = (postId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${postId}`
  })
}

export const updatePost = (postData) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/${postData.id}`,
    data: { post: postData.body }
  })
}

export const fetchNewsFeedPosts = (offset) => {
  console.log(offset)
  return $.ajax({
    url:'/api/posts',
    data: { offset }
  })
}
