import React, { Component } from 'react'
import SmallProfileCard from './small_profile_card'
import NewPostForm from '../posts/new_post_form_container'
import PostIndex from '../posts/post_index_container'


export default class profileBottomMain extends Component {
  constructor(props){
    super(props)
    this.state = { offset: 0 }
  }

  render() {
    let profile = {}
    if (this.props.profile) {
      profile = this.props.profile
    }


    let count = (this.state.offset / 10) + 1
    let indexes = []
    for (let i = 0; i < count; i++){
      indexes.push(<PostIndex offset={i * 10} key={i}/>)
    }
    setTimeout(() => {
      window.onscroll = () => {

        if ((Math.floor(window.innerHeight) + Math.floor(window.pageYOffset) + 50) > Math.floor(document.body.offsetHeight)) {
          window.onscroll = null

          this.setState(
            (prevState, props) => {
              return {offset: prevState.offset + 10}
            })
        }
      }, 500
    })

    return (
      <main className='profileBottomMain'>
        <section className='profilePageSectionLeft'>
          <SmallProfileCard profile={profile}/>
        </section>
        <section className='profilePageSectionRight'>
          <NewPostForm />
          {indexes}
        </section>
      </main>
    )
  }
}

// let profile = {}
// if (this.props.profile) {
//   profile = this.props.profile
// }
