import PostIndex from './post_index'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNewsFeedPosts } from '../../../actions/post_actions'


const mapStateToProps = (state, ownProps) => {
  const postArray = state.entities.posts.post_order.map((postId) => {
    return state.entities.posts[postId]
  })
  return {
    posts: postArray,
    users: state.entities.users,
    loading: state.ui.loading,
    offset: ownProps.offset
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (offset) => dispatch(fetchNewsFeedPosts(offset))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex))
