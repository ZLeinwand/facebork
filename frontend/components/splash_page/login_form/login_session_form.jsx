import React, { Component } from 'react'

export default class LoginSessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.demoLogin = this.demoLogin.bind(this)
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

  demoLogin(e) {
    e.preventDefault()

    this.props.demoLogin()
  }

  render() {
    return (
      <form className='loginForm' onSubmit={this.handleSubmit}>
        <span className='errors'>{this.props.errors.join('\n')}</span>

        <div>
          <label>Email</label>
          <input onChange={this.update('email')} type='text' value={this.state.email}></input>
        </div>
        <div>
          <label>Password</label>
            <input onChange={this.update('password')} type='password' value={this.state.password}></input>
        </div>
        <div>
          <button>Log In</button>
        </div>
        <div>
          <button onClick={this.demoLogin}>Demo</button>
        </div>
      </form>
    )
  }
}
