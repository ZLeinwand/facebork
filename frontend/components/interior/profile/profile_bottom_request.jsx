import React, { Component } from 'react'
import RequestIndex from '../friendships/friends_request_container'

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
          <h2 className='friendsNavHeader'>Friend Requests</h2>
          <input type='text'
            className='friendsSearchBar'
            placeholder='Search Requests'
            onChange={this.update}
            value={this.state.query}>
          </input>
        </nav>
        <div>
          <FriendsIndex query={this.state.query} />
        </div>
      </section>
    )
  }
}
