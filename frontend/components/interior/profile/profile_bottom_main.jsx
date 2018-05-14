import React, { Component } from 'react'
import SmallProfileCard from './small_profile_card'
import NewPostForm from '../posts/new_post_form_container'
import PostIndex from '../posts/post_index_container'


export default class profileBottomMain extends Component {


  render() {
    let profile = {}
    if (this.props.profile) {
      profile = this.props.profile
    }
    return (
      <main className='profileBottomMain'>
        <section className='profilePageSectionLeft'>
          <SmallProfileCard profile={profile}/>
        </section>
        <section className='profilePageSectionRight'>
          <NewPostForm />
          <PostIndex />
        </section>
      </main>
    )
  }
}
