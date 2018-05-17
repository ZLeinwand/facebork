import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import RequestsIndex from './request_index'
import { fetchFriendRequests } from '../../../actions/friendship_actions'


const mapStateToProps = (state, ownProps) => {
  const requesters = state.entities.users.requests.map((friendId) => {
    return state.entities.users[friendId]
  })

  return {
    requesters,
    requestIds: state.entities.users.requests,
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFriendRequests: () => dispatch(fetchFriendRequests())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RequestsIndex))
