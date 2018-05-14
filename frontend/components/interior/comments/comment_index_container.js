import { connect } from 'react-redux'
import CommentIndex from './comment_index'


const mapStateToProps = (state, ownProps) => {
  const comments = ownProps.commentIds.map((commentId) => {
    return state.entities.comments[commentId]
  })
  const userIds = comments.map((comment) => {
    return comment.author_id
  })

  const users = {}
    userIds.forEach((userId) => {
    users[userId] = state.entities.users[userId]
  })
  return {
    comments,
    users
  }
}

export default connect(mapStateToProps)(CommentIndex)
