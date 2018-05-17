import { connect } from 'react-redux'
import CommentForm from './comment_form'
import { createComment } from '../../../actions/comment_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    commentText: '',
    userAvi: state.entities.users[state.session.id].avi_url
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (commentData) => dispatch(createComment(commentData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
