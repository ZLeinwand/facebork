import React from 'react'
import FriendsIndex from '../friendships/friends_index_container'

export default (props) => {

  return (
    <section className='profileBottomFriends'>
      <nav className='friendsSearchNav'>
        <h2>Friends</h2>
        <input type='text' className='friendsSearchBar' placeholder='Search Friends'></input>
      </nav>
      <div>
        <FriendsIndex />
      </div>
    </section>
  )
}
