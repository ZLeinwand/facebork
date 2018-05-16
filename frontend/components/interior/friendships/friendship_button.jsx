import React, { Component } from 'react'

export default class FriendshipButton extends Component {
  constructor(props){
    super(props)

    this.makeFriendRequest = this.makeFriendRequest.bind(this)
    this.endFriendship = this.endFriendship.bind(this)
    this.acceptFriendRequest = this.acceptFriendRequest.bind(this)
  }


  makeFriendRequest(e){
    e.preventDefault()
    this.props.sendFriendRequest(this.props.profileId)
  }

  acceptFriendRequest(e) {
    e.preventDefault()
    this.props.acceptFriendRequest({friendee: this.props.profileId, status: 'FRIENDS'})
  }

  rejectFriendRequest(e) {
    e.preventDefault()
    this.props.rejectFriendRequest()
  }

  endFriendship(e){
    e.preventDefault()
    this.props.destroyFriendship(this.props.profileId)
  }


  render() {
    let type = ''
    let action = (e) => console.log(e)
    if (this.props.friendshipStatus){
      switch (this.props.friendshipStatus) {
        case "FRIENDS":
          type = 'Friends'
          // action = this.endFriendship
          break;
        case "IN_PENDING":
          type = 'Accept Friend'
          action = this.acceptFriendRequest
          break;
        case "OUT_PENDING":
          type = 'Pending'
          break;
        default:
          type = 'Add Friend'
          action = this.makeFriendRequest
      }
    }
    return (
      <button onClick={action} className='friendshipButton'>{type}</button>
    )
  }
}
