import { signup } from '../actions/session_actions'
import { connect } from 'react-redux'
import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => {
  return {
    formType: 'Sign Up'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (userInfo) => dispatch(signup(userInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
