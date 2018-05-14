import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {

  return (
    <div className='postContainer'>
      <div className='postHead'>
        <img className='postAvi' src={props.poster.avi_url}/>
        <Link to={`/users/${props.poster.id}`}>{props.poster.name}</Link>
      </div>
      <div>
        <h5>{props.post.body}</h5>
      </div>
    </div>
  )
}
