import React from 'react'
import { Link } from 'react-router-dom'

export default ({comment, user}) => {

  let avi = ''
  if (user) {
    avi = user.avi_url
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
    </div>
  )
}
