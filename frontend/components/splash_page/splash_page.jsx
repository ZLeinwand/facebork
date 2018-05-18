import React from 'react'
import Header from './login_form/login_header';
import SignUpForm from './signup_form/signup_form_container';
import Footer from './footer'



export default (props) => {
  return (
    <span>
      <Header />
      <span id='zaddy'>
        <main id='splashContainer'>
          <div className='main1'>
            <h1>Connect with frendos around the world with FaceBork</h1>
            <div className='transistor'>
              <img id='splashImage1' src={window.splashimage1} alt='the babe'/>
              <img id='splashImage2' src={window.splashimage2} alt='the babe'/>
              <img id='splashImage3' src={window.splashimage3} alt='the babe'/>
              <img id='splashImage4' src={window.splashimage4} alt='the babe'/>
              <img id='splashImage5' src={window.splashimage5} alt='the babe'/>
            </div>
          </div>
          <div className='main2'>
            <h1>Sign Up</h1>
            <h3>Bork with your friends!</h3>
            <SignUpForm />
            <span className='features'>
              <div>
                <img src={window.fb1} />
                <p><b>See borks and updates</b> from friends in News Feed </p>
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
      Copyright 2018 CyberMartinez LLC all rights reserved
    </span>
  )
}
