import { connect } from 'react-redux'
import ProfileUpdateForm from './profile_update_form'
import { updateProfile } from '../../../actions/profile_actions'
import { closeModal } from '../../../actions/modal_actions'


const mapStateToProps = (state, ownProps) => {
  const profileId = state.session.id
  return {
    profile: state.entities.profiles[profileId],
    currentUserId: profileId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (profileData) => dispatch(updateProfile(profileData)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUpdateForm)
