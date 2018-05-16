import React from 'react'
import { Link } from 'react-router-dom'
import FriendshipButton from './friendship_button_container'

export default ({friend}) => {

  return (
    <div className='friendCardContainer'>
      <div className='friendCardFull'>
        <img className='friendAvi' src={`${friend.avi_url}`} />
        <div className='friendsInfoContainer'>
          <div className='friendNameContainer'>
            <Link to={`/users/${friend.id}`} ><span className='friendCardName'>{friend.name}</span></Link>
          </div>
          <div className='friendBottomRight'>
            <div className='friendAbout'>
              <p>Lives in: {friend.lives_in}</p>
              <p>Email: {friend.email}</p>
            </div>
            <div className='friendIndexFriendshipButton'>
              <FriendshipButton specialBoi={friend.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
