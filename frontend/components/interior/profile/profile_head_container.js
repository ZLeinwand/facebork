import { connect } from 'react-redux'
import ProfileHead from './profile_head';
import { updateProfilePic } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  const profileId = ownProps.match.params.userId
  return {
    currentUser: state.session.id,
    profile: state.entities.profiles[profileId]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateProfilePic: (profileData) => dispatch(updateProfilePic(profileData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHead)
