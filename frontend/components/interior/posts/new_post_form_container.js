import { createPost } from '../../../actions/post_actions'
import { connect } from 'react-redux'
import PostForm from './post_form'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (postData) => dispatch(createPost(postData))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm))
