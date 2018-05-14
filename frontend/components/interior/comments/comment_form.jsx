import React, { Component } from 'react'

export default class CommentForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      post_id: this.props.postId,
      comment_text: this.props.commentText
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.update = this.update.bind(this)
  }

  componentWillReceiveProps(newProps) {
    this.setState({post_id: newProps.postId})
  }

  submitHandler(e) {
    e.preventDefault()

    this.props.action(this.state)
    this.setState({ comment_text: ''})
  }

  update(e) {
    this.setState({ comment_text: e.currentTarget.value })
  }


  render () {

    return (
      <div className='commentFormContainer'>
        <form onSubmit={this.submitHandler} className='commentForm'>
          <input onChange={this.update}
            className='commentText'
            value={this.state.comment_text}
            maxLength='140'
            placeholder='Bork back on this post'>
          </input>
          <button className='addCommentButton'>Bork</button>
        </form>
      </div>
    )
  }
}
