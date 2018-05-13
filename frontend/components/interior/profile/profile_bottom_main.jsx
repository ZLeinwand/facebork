import React, { Component } from 'react'
import SmallProfileCard from './small_profile_card'


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
        <section className='profilePageSectionRight'></section>
      </main>
    )
  }
}
