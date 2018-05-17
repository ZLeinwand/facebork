import React, { Component } from 'react';
import ProfileHead from './profile_head_container'
import ProfileBottomMain from './profile_bottom_main_container'
import ProfileBottomAbout from './profile_bottom_about_container'
import ProfileBottomFriends from './profile_bottom_friends'
import ProfileBottomRequests from './profile_bottom_request'
import { Route } from 'react-router-dom'


export default class Profile extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchProfile(this.props.match.params.userId)
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchProfile(nextProps.match.params.userId)
    }
  }

  render() {
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
        <Route path='/users/:userId' exact component={ProfileBottomMain} />
        <Route path='/users/:userId/about' component={ProfileBottomAbout} />
        <Route path='/users/:userId/friends' component={ProfileBottomFriends} />
        <Route path='/users/:userId/requests' component={ProfileBottomRequests} />
      </section>
    )
  }
}


// <ProfileLower />
