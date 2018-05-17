import React, { Component } from 'react'
import FriendsListItem from './friends_list_item'


export default class RequestIndex extends Component {

  componentDidMount() {
    this.props.fetchFriendRequests()
  }



  render () {
    let requesters = <div className='emptyFriendships'><h1 className='friendText'>No Friend Requests</h1></div>
    if (this.props.requesters.length > 0) {
      requesters = this.props.requesters.map((requester, idx) => {
        if (requester.name.toUpperCase().includes(this.props.query.toUpperCase())){
          return (
            <FriendsListItem friend={requester} key={idx} />
          )
        }else{
          return ''
        }
      })
    }
    return (
      <section className='friendIndexContainer'>
        {requesters}
      </section>
    )
  }
}
