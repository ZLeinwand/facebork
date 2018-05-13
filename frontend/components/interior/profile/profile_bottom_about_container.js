import ProfileBottomAbout from './profile_bottom_about'
import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions'



const mapStateToProps = (state, ownProps) => {
  const profId = ownProps.match.params.userId;
  const currentUserId = state.session.id
  return {
    profile: state.entities.profiles[profId],
    currentUserId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch(openModal('profile'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBottomAbout)
