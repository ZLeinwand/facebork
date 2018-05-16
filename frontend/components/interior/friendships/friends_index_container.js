import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import FriendsIndex from './friends_index'
import { fetchFriends } from '../../../actions/friendship_actions'


const mapStateToProps = (state, ownProps) => {
  const currentProfileId = ownProps.match.params.userId
  let friendIds = []
  let friends = []
  if (state.entities.profiles[currentProfileId]){
    friendIds = state.entities.profiles[currentProfileId].friends
    friends = friendIds.map((friendId) => {
      return state.entities.users[friendId]
    })
  }

  return {
    friends: friends,
    friendIds: friendIds,
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFriends: (profileId) => dispatch(fetchFriends(profileId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendsIndex))
