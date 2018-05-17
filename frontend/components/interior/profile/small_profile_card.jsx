import React from 'react';


export default (props) => {

  return (
    <div className='profileCard'>
      <div className='topCard'>
        <div className='topOfCard'>
          <img className='cardIcon' src={window.introIcon} />
          <h1>Intro</h1>
        </div>
        <h4>{props.profile.description}</h4>
      </div>
      <div className='bottomOfCard'>
        <h5>Born on {props.profile.birthday}</h5>
        <h5>Works as {props.profile.job_title}</h5>
        <h5>Borks in {props.profile.lives_in}</h5>
      </div>
    </div>
  )
}
