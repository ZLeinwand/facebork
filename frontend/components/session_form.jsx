import React, { Component } from 'react'

export default class SessionForm extends Component {
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
    let info;
    if (this.formType === 'Log In'){
      const { email, password } = this.state
      info = { email, password }
    } else {
      info = this.state
    }

    this.props.action(info)
  }


  update(field){
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  render() {
    let name;
    if (this.props.formType === 'Sign Up'){
      name = (
        <label>Name:
          <input onChange={this.update('name')} type='text' value={this.state.name}></input>
          <br />
        </label>
      )
    } else {
      name = []
    }
    return (
      <form onSubmit={this.handleSubmit}>
        {name}
        <label>Email:
          <input onChange={this.update('email')} type='text' value={this.state.email}></input>
        </label><br />

        <label>Password:
          <input onChange={this.update('password')} type='password' value={this.state.password}></input>
        </label><br />

      <button>{this.props.formType}</button>
      </form>
    )
  }
}
