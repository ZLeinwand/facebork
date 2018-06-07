import PostIndex from './post_index'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchWallPosts, clearPosts } from '../../../actions/post_actions'


const mapStateToProps = (state, ownProps) => {
  const postArray = state.entities.posts.post_order.map((postId) => {
    return state.entities.posts[postId]
  })
  return {
    posts: postArray,
    wallId: ownProps.match.params.userId,
    users: state.entities.users,
    loading: state.ui.loading,
    offset: ownProps.offset
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (wallId, offset) => dispatch(fetchWallPosts(wallId, offset)),
    clearPosts: () => dispatch(clearPosts())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex))
