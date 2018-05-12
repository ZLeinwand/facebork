import React, { Component } from 'react';
import ProfileHead from './profile_head_container'


export default class Profile extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchProfile(this.props.match.params.userId)
  }

  componentWillReceiveProps(nextProps){
    // debugger
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchProfile(nextProps.match.params.userId)
    }
  }

  render() {
    // debugger
    let avi = ""
    let name = ""
    let cover_url = ""
    if (this.props.profile) {
      avi = this.props.profile.user.avi_url
      name = this.props.profile.user.name
      cover_url = this.props.profile.user.cover_url
    }

    return (
      <section id='profileFull'>
        <ProfileHead profilePic={avi} coverPhoto={cover_url} userName={name} match={this.props.match}/>
      </section>
    )
  }
}


// <ProfileLower />
