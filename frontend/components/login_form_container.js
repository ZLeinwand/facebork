import { login } from '../actions/session_actions'
import { connect } from 'react-redux'
import SessionForm from './login_session_form'

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (userInfo) => dispatch(login(userInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
