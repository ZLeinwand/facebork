import { connect } from 'react-redux'
import { clearPosts } from '../../../actions/post_actions'
import NewsFeed from './newsfeed'

const mapDispatchToProps = (dispatch) => {
  return {
    clearPosts: () => dispatch(clearPosts())
  }
}

export default connect(null, mapDispatchToProps)(NewsFeed)
