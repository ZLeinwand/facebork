import React from 'react'
import NavBar from './nav_bar_container'
import Profile from './profile/profile_container'
import { Route } from 'react-router-dom'
import Modal from '../modal'
import NewsFeed from './newsfeed/newsfeed'

export default (props) => {
  return (
    <main id='mainFull'>
      <NavBar />
      <Modal />
      <Route exact path='/' component={ NewsFeed } />
      <Route path={`/users/:userId`} component={Profile} />
    </main>
  )
}
