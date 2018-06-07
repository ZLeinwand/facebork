import React from 'react'
import { Link } from 'react-router-dom'
import NewCommentForm from '../comments/new_comment_form_container'
import CommentIndex from '../comments/comment_index_container'
import LikeButton from './post_like_button_container'

export default (props) => {
  let avi = ''
  let id = ''
  let name = ''
  let lickCounter = ''
  let borkCounter = ''
  if (props.poster) {
    avi = props.poster.avi_url
    name = props.poster.name
    id = props.poster.id
    let lickText;
    if (props.post.likes.like_count == 0){
      lickText = ""
    }else if (props.post.likes.like_count == 1) {
      lickText = "1 licks"
    }else {
      lickText = `${props.post.likes.like_count} licks`
    }
    lickCounter = <div className='lickCounter'><div>{lickText}</div></div>

    let borkText;
    if (props.post.comments.length == 0){
      borkText = ""
    }else if (props.post.comments.length == 1) {
      borkText = "1 bork"
    }else{
      borkText = `${props.post.comments.length} borks`
    }
    borkCounter = <div className='lickCounter'><div>{borkText}</div></div>
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
          <h5 className='postText'>{props.post.body}</h5>
        </div>
      </div>
      <div className='postLikeArea'>
        <LikeButton post={props.post} />
        {lickCounter}
        {borkCounter}
      </div>
      <div className='licks' >

      </div>
      <div className='commentContainer'>
        <CommentIndex commentIds={props.post.comments} />
        <NewCommentForm postId={props.post.id} />
      </div>
    </div>

  )
}


  ///////
