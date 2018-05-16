import FriendshipButton from './friendship_button'
import { connect } from 'react-redux'
import { makeFriendRequest, updateFriendshipStatus, destroyFriendship } from '../../../actions/friendship_actions'
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state, ownProps) => {
  // debugger
  let profileId;
    if (ownProps.specialBoi){
      profileId = ownProps.specialBoi
    }else {
    profileId = ownProps.match.params.userId
  }
  let status = 'NOT_FRIENDS'
  if (state.entities.users[profileId]){
      status = state.entities.users[profileId].status
  }
  // debugger
  return {
    friendshipStatus: status,
    profileId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendFriendRequest: (profileId) => dispatch(makeFriendRequest(profileId)),
    acceptFriendRequest: (friendData) => dispatch(updateFriendshipStatus(friendData)),
    destroyFriendship: (profileId) => dispatch(destroyFriendship(profileId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendshipButton))
