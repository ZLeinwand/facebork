import { connect } from 'react-redux'
import Profile from './profile';
import { fetchProfile } from '../../../actions/profile_actions';
import { clearPosts } from '../../../actions/post_actions'


const mapStateToProps = (state, ownProps) => {
  const profileId = ownProps.match.params.userId
  return {
    currentUser: state.session.id,
    profile: state.entities.profiles[profileId]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProfile: (profileId) => dispatch(fetchProfile(profileId)),
    clearPosts: () => dispatch(clearPosts)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
