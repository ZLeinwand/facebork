import React from 'react'
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import SplashPage from './splash_page/splash_page'

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
