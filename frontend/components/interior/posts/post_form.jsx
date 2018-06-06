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

    this.setState({body: ''})

    let wall_id;

    if (this.props.news){
      wall_id = null
    } else {
      wall_id = this.props.match.params.userId
    }

    let borkbox = document.getElementsByClassName('postBox');
    // debugger
    borkbox[0].classList.add('loading')

    const data = { body: this.state.body, wall_id }
    this.props.action(data).then(() => (borkbox[0].classList.remove('loading')))
  }


  render(){
    let name = ""
    let button = <button className='postButtonGray'>Bork</button>
    if (this.props.currentUser){
      name = this.props.currentUser.name
    }
    if (typeof this.state.body !== 'undefined') {
      if (this.state.body.length > 0){
        button = <button onClick={this.submitHandler} className='postButton'>Bork</button>
      } else {
        button = <button className='postButtonGray'>Bork</button>
      }
    }
    return (
      <div className='postFormOuter'>
        <div className='borkPostTop'>
          <img src={window.borkPostIcon} className='borkPost'/>
          <h1 className='postHeader'>Make a Bork</h1>
        </div>
        <div>
          <textarea
            className='postBox'
            placeholder={`What's on your mind ${name}?`}
            onChange={this.update}
            value={this.state.body}></textarea>
          {button}
        </div>
      </div>
    )
  }
}
