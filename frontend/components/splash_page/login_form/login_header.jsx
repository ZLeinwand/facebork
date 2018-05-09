import React from 'react'
import { AuthRoute } from '../../../util/route_util'
import LoginForm from './login_form_container'
export default (props) => {
  return (
    <section className='loginHeader'>
      <nav className='loginBar'>
        <div id='logo'>facebork</div>
        <LoginForm />
      </nav>
    </section>
  )
}
