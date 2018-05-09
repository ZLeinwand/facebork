import { login } from '../../../actions/session_actions'
import { connect } from 'react-redux'
import SessionForm from './login_session_form'

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session.loginErrors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (userInfo) => dispatch(login(userInfo)),
    demoLogin: () => dispatch(login({email: 'demouser@facebork.com', password: 'password'}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
