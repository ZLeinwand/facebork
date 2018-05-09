import React from 'react'
import Header from './login_header';
import SignUpForm from './signup_form_container';



export default (props) => {
  return (
    <span>
      <Header />
      <span id='zaddy'>
        <main id='splashContainer'>
          <div className='main1'>
            <h1>Connect with frendos around the world with FaceBork</h1>
            <img id='splashImage' src={window.splashimage} />
          </div>
          <div className='main2'>
            <h1>Sign Up</h1>
            <h3>Get borking!</h3>
            <SignUpForm />
            <span className='features'>
              <div>
                <strong>See photos and updates</strong> from friends in News Feed <br />
              </div>
              <div>
                <strong>Share what's new</strong> in your life on your Timeline <br />
              </div>
              <div>
                <strong>Find your frendos</strong> with FaceBork search
                </div>
              </span>
          </div>
        </main>
      </span>
    </span>
  )
}
