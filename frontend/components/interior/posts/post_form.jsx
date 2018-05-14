import React, { Component } from 'react'

export default class PostForm extends Component {
  constructor(props){
    super(props)
    this.state = { body: this.props.body }
    this.update = this.update.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  update(e){
    this.setState({ body: e.currentTarget.value })
  }

  submitHandler(e){
    e.preventDefault()
    const wall_id = this.props.match.params.userId
    const data = { body: this.state.body, wall_id }
    this.props.action(data).then(() => this.setState({body: ''}))
  }


  render(){
    let name = ""
    if (this.props.currentUser){
      name = this.props.currentUser.name
    }
    return (
      <div className='postFormOuter'>
        <div>
          <h1 className='postHeader'>Bork a new post!</h1>
        </div>
        <form onSubmit={this.submitHandler}>
          <textarea
            className='postBox'
            placeholder={`Whats on your mind ${name}`}
            onChange={this.update}
            value={this.state.body}></textarea>
          <button className='postButton'>Create Post</button>
        </form>
      </div>
    )
  }
}
