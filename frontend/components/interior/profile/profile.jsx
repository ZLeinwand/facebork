import React, { Component } from 'react';
import ProfileHead from './profile_nav'


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
    if (this.props.profile) {
      avi = this.props.profile.user.avi_url
      name = this.props.profile.user.name
    }

    return (
      <section id='profileFull'>
        <ProfileHead profilePic={avi} userName={name}/>
      </section>
    )
  }
}


// <ProfileLower />
