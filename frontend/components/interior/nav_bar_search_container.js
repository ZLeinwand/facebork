import { connect } from 'react-redux'
import { searchBorkers, clearSearchResults } from '../../actions/user_actions'
import NavBarSearch from './nav_bar_search'


const mapStateToProps = (state, ownProps) => {
  const userResults = state.entities.users.search_results.map((userId) => {

  })
  return {
    searchResults: state.entities.users.search_results,
    currentUserId: state.session.id,
    users: state.entities.users
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    search: (query) => dispatch(searchBorkers(query)),
    clearSearchResults: () => dispatch(clearSearchResults())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarSearch)
