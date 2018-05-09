import React, { Component } from 'react'

export default class SignUpSessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.action(this.state)
    this.setState({ password: '' })
  }


  update(field){
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  render() {

    return (
      <div className='signContainer'>
        <form className='signupForm' onSubmit={this.handleSubmit}>
          <span className='errors'>{this.props.errors.join('\n')}</span>

            <input onChange={this.update('name')}
              type='text'
              value={this.state.name}
              placeholder='Name'
              className='signupInput'>
            </input>

          <div>
            <input onChange={this.update('email')}
              type='text'
              value={this.state.email}
              placeholder='Email'
              className='signupInput'>
            </input>

            <input onChange={this.update('password')}
              type='password'
              value={this.state.password}
              placeholder='New password'
              className='signupInput'>
            </input>
          </div>

          <button className='splashButton'>Sign Up</button>
        </form>
      </div>
    )
  }
}
