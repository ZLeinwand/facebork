import { connect } from 'react-redux'
import Profile from './profile';
import { fetchProfile } from '../../../actions/profile_actions'



const mapStateToProps = (state, ownProps) => {
  const profileId = ownProps.match.params.userId
  return {
    profile: state.entities.profiles[profileId]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProfile: (profileId) => dispatch(fetchProfile(profileId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
