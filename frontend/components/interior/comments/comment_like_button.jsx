import React, { Component } from 'react'

export default class CommentLikeButton extends Component {
  constructor(props){
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler(e){
    e.preventDefault()

    if (this.props.comment.likes.liked){
      this.props.deleteLike(this.props.comment.id)
    }else{
      this.props.createLike({likeable_id: this.props.comment.id, likeable_type: 'Comment'})
    }
  }

  render(){

    const src = this.props.comment.likes.liked ? window.staticAssets.likeOn : window.staticAssets.likeOff
    const icon = <img src={src} className='commentLickIcon' />
    const lickText = <h3 className='commentLikeText' >Lick</h3>
    return (
      <div className='commentLikeButton' onClick={this.submitHandler}>
        {icon}
        {lickText}
      </div>
    )
  }
}
