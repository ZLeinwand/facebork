import React, { Component } from 'react'

export default class ProfileBottomAbout extends Component {

  render() {
    let profile = {}
    let button = []
    if (this.props.profile) {
      profile = this.props.profile
    }
    if (this.props.match.params.userId == this.props.currentUserId){
      button = (<button onClick={this.props.openModal} className='updateProfileButton'>Update Profile</button>)
    }
    // debugger
    return (
      <section className='aboutBorker'>
        <div className='marquee'>
          <img className='cardIcon' src={window.introIcon}/>
          <h1>About</h1>
          {button}
        </div>
        <div>
          <ul className='aboutList'>
            <p>Born on {profile.birthday}</p>
            <p>Works as {profile.job_title}</p>
            <p>Lives in {profile.lives_in}</p>
            <p>Relationship Status: {profile.relationship_status}</p>
            <p>Owners Names: {profile.owners_names}</p>
            <p>Breed: {profile.breed}</p>
            <p>Favorite Toy: {profile.fav_toy}</p>
            <p>About Me: {profile.description}</p>
          </ul>
        </div>
      </section>
    )
  }
}
