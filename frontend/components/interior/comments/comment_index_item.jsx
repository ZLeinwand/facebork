import React from 'react'
import { Link } from 'react-router-dom'
import CommentLikeButton from './comment_like_button_container'

export default ({comment, user}) => {

  let avi = ''
  let like_count = ''
  if (user) {
    avi = user.avi_url
    like_count = comment.likes.like_count
  }
  return (
    <div className='singleComment'>
      <Link to={`/users/${user.id}`} ><img className='commentAvi' src={avi} /> </Link>
      <div className='commentBy'>
        <Link to={`/users/${user.id}`}>
          <span className='commentUserName'>{user.name}</span>
        </Link>
        <span className='commentText2'>{comment.comment_text}</span>
      </div>
      <div className='commentLikeButtonContainer'>
        <CommentLikeButton comment={comment}/>
      </div>
      <div className='commentLikeCounter'>
        {like_count}
      </div>
    </div>
  )
}
