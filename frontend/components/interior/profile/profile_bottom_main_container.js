import ProfileBottomMain from './profile_bottom_main'
import { connect } from 'react-redux'
import { clearPosts } from '../../../actions/post_actions'


const mapStateToProps = (state, ownProps) => {
  const profId = ownProps.match.params.userId;
  return {
    profile: state.entities.profiles[profId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearPosts: () => dispatch(clearPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBottomMain)
