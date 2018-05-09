import React from 'react'
import { Route } from 'react-router-dom'
import LoginForm from './login_form_container'
import SignUpForm from './signup_form_container'

export default (props) => {
  return (
    <div>
      <h1>WELCOME TO FACEBORK FRENDO</h1>
      <Route path='/login' component={LoginForm} />
      <Route path='/signup' component={SignUpForm} />
    </div>
  )
}
