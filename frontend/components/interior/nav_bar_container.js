import { connect } from 'react-redux'
import NavBar from './nav_bar'
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id]
  return {
    userAvi: currentUser.avi_url,
    userName: currentUser.name,
    userId: currentUser.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
