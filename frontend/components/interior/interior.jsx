import React from 'react'
import NavBar from './nav_bar_container'
import Profile from './profile/profile_container'
import { Route } from 'react-router-dom'

export default (props) => {
  return (
    <main>
      <NavBar />
      <Route path={`/users/:userId`} component={Profile} />
    </main>
  )
}
