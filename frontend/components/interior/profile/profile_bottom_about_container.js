import ProfileBottomAbout from './profile_bottom_about'
import { connect } from 'react-redux';



const mapStateToProps = (state, ownProps) => {
  const profId = ownProps.match.params.userId;
  return {
    profile: state.entities.profiles[profId]
  }
}

export default connect(mapStateToProps)(ProfileBottomAbout)
