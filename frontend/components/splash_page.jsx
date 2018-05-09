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
            <img id='splashImage' src={window.splashimage} alt='the babe'/>
          </div>
          <div className='main2'>
            <h1>Sign Up</h1>
            <h3>Get borking!</h3>
            <SignUpForm />
            <span className='features'>
              <div>
                <img src={window.fb1} />
                <p><b>See photos and updates</b> from friends in News Feed </p>
              </div>
              <div>
                <img src={window.fb2} />
                <p><b>Share what's new</b> in your life on your Timeline </p>
              </div>
              <div>
                <img src={window.fb3} />
                <p><b>Find your frendos</b> with FaceBork search</p>
              </div>
              </span>
          </div>
        </main>
      </span>
    </span>
  )
}
