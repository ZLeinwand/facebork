import PostIndex from './post_index'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchWallPosts } from '../../../actions/post_actions'


const mapStateToProps = (state, ownProps) => {
  const postArray = state.entities.posts.post_order.map((postId) => {
    return state.entities.posts[postId]
  })
  return {
    posts: postArray,
    wallId: ownProps.match.params.userId,
    users: state.entities.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (wallId) => dispatch(fetchWallPosts(wallId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex))
