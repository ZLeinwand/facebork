import PostIndex from './post_index'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNewsFeedPosts } from '../../../actions/post_actions'


const mapStateToProps = (state, ownProps) => {
  // debugger
  const postArray = state.entities.posts.post_order.map((postId) => {
    return state.entities.posts[postId]
  })
  return {
    posts: postArray,
    users: state.entities.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchNewsFeedPosts())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex))
