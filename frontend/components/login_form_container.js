import { login } from '../actions/session_actions'
import { connect } from 'react-redux'
import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => {
  return {
    formType: 'Log In'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (userInfo) => dispatch(login(userInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
