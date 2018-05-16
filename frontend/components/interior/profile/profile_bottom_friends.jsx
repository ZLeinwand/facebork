import React, { Component } from 'react'
import FriendsIndex from '../friendships/friends_index_container'

export default class ProfileBottomFriends extends Component {
  constructor(props){
    super(props)
    this.state = { query: ''}
    this.update = this.update.bind(this)
  }

  update(e){
    e.preventDefault()

    this.setState({ query: e.currentTarget.value })
  }

  render(){

    return (
      <section className='profileBottomFriends'>
        <nav className='friendsSearchNav'>
          <h2 className='friendsNavHeader'>Friends</h2>
          <input type='text'
            className='friendsSearchBar'
            placeholder='Search Friends'
            onChange={this.update}
            value={this.state.query}>
          </input>
        </nav>
        <div>
          <FriendsIndex query={this.state.query}/>
        </div>
      </section>
    )
  }
}
