import React, { Component } from 'react';
import ProfileNav from './profile_nav'


export default class Profile extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchProfile(this.props.match.params.userId)
  }


  render() {
    let avi = ""
    let name = ""
    if (this.props.profile) {
      avi = this.props.profile.user.avi_url
      name = this.props.profile.user.name
    }

    return (
      <section>
        <ProfileNav profilePic={avi} userName={name}/>
      </section>
    )
  }
}


// <ProfileLower />
