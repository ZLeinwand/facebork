import { connect } from 'react-redux'
import { createLike, destroyCommentLike} from '../../../actions/like_actions'
import CommentLikeButton from './comment_like_button.jsx'

const mapDispatchToProps = (dispatch) => {
  return {
    createLike: (likeData) => dispatch(createLike(likeData)),
    deleteLike: (commentId) => dispatch(destroyCommentLike(commentId))
  }
}

export default connect(null, mapDispatchToProps)(CommentLikeButton)
