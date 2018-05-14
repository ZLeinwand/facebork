import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
  // debugger
  let avi = ''
  let id = ''
  let name = ''
  if (props.poster) {
    avi = props.poster.avi_url
    name = props.poster.name
    id = props.poster.id
  }
  return (
    <div className='postContainer'>
      <div className='postPart'>
        <Link to={`/users/${id}`}>
          <div className='postHead'>
            <img className='postAvi' src={avi}/> <h3 className='posterName'>{name}</h3>
          </div>
        </Link>
        <div className='postBody'>
          <h5>{props.post.body}</h5>
        </div>
      </div>
      <div className='commentContainer'>
        COMMENTS HERE
      </div>
    </div>
  )
}
