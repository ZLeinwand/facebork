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
    return (
      <section className='aboutBorker'>
        <div className='marquee'>
          <img className='cardIcon' src={window.introIcon}/>
          <h1>About</h1>
          {button}
        </div>
        <div>
          <ul className='aboutList'>
            <p><img src={window.staticAssets.cakeIcon} className='aboutIcon'/>Born on {profile.birthday}</p>
            <p><img src={window.staticAssets.jobIcon} className='aboutIcon'/>Works as {profile.job_title}</p>
            <p><img src={window.staticAssets.houseIcon} className='aboutIcon'/>Lives in {profile.lives_in}</p>
            <p><img src={window.staticAssets.heartIcon} className='aboutIcon'/>Relationship Status: {profile.relationship_status}</p>
            <p><img src={window.staticAssets.peopleIcon} className='aboutIcon'/>Owners Names: {profile.owners_names}</p>
            <p><img src={window.staticAssets.dogIcon} className='aboutIcon'/>Breed: {profile.breed}</p>
            <p><img src={window.staticAssets.toyIcon} className='aboutIcon'/>Favorite Toy: {profile.fav_toy}</p>
            <p><img src={window.staticAssets.dog2Icon} className='aboutIcon'/>About Me: {profile.description}</p>
          </ul>
        </div>
      </section>
    )
  }
}
