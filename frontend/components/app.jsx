import React from 'react'
import { Route } from 'react-router-dom'
import LoginForm from './login_form_container'
import SignUpForm from './signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import loginHeader from './login_header'
import SplashPage from './splash_page'

export default (props) => {
  return (
    <div>
      <AuthRoute exact path='/session' component={SplashPage}/>
    </div>
  )
}





// <h1>WELCOME TO FACEBORK FRENDO</h1>
// <ProtectedRoute exact path='/' />
// <AuthRoute path='/login' component={LoginForm} />
// <AuthRoute path='/signup' component={SignUpForm} />
