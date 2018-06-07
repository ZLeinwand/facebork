import { connect } from 'react-redux'
import { createLike, destroyPostLike} from '../../../actions/like_actions'
import PostLikeButton from './post_like_button'

const mapDispatchToProps = (dispatch) => {
  return {
    createLike: (likeData) => dispatch(createLike(likeData)),
    deleteLike: (postId) => dispatch(destroyPostLike(postId))
  }
}


export default connect(null, mapDispatchToProps)(PostLikeButton)
