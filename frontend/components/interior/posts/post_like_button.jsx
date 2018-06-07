import React, { Component } from 'react'

export default class PostLikeButton extends Component {
  constructor(props){
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler(e){
    e.preventDefault()

    if (this.props.post.likes.liked){
      this.props.deleteLike(this.props.post.id)
    }else{
      this.props.createLike({likeable_id: this.props.post.id, likeable_type: 'Post'})
    }
  }

  render(){

    const src = this.props.post.likes.liked ? window.staticAssets.likeOn : window.staticAssets.likeOff
    const color = this.props.post.likes.liked ? "lickBlue" : "lickWhite"
    const icon = <img src={src} className='lickIcon' />
    const lickText = <h3 className={color} >Lick</h3>
    return (
      <div className='postLikeButton' onClick={this.submitHandler}>
        {icon}
        {lickText}
      </div>
    )
  }
}
