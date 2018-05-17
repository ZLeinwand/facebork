import React, { Component } from 'react'
import SearchIndexItem from './nav_bar_search_item'

export default class NavBarSearch extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: ""
     }
     this.sendQuery = this.sendQuery.bind(this)
     this.timeout = null
     this.update = this.update.bind(this)
     this.clearAll = this.clearAll.bind(this)
  }

  update(e) {
    this.setState({ query: e.currentTarget.value }, () => {
      if (this.state.query.length > 0){
        this.timeout = setTimeout(() => {
          document.addEventListener('click', () => this.props.clearSearchResults(), {once: true})
          this.sendQuery(this.state.query)}, 500);
      } else {
        this.props.clearSearchResults()
      }
    })
    if (this.timeout){
      clearTimeout(this.timeout)
    }

  }

  clearAll(){
    this.props.clearSearchResults()
    this.setState({ query: "" })
  }

  sendQuery(){
    // e.preventDefault()

    this.props.search(this.state.query)
  }


  render(){
    let searchResults = []

    if (this.props.searchResults.length > 0) {
      searchResults = this.props.searchResults.map((userId, idx) => {
        return (<SearchIndexItem clearSearchResults={this.clearAll}
          user={this.props.users[userId]}
          key={idx} />)
      })
    }
    return (
      <div className='searchContainer'>
        <div className='searchBarAndResults'>
          <input className='searchBar'
            onChange={this.update}
            value={this.state.query}
            placeholder='Search for borkers'>
          </input>
          <div className='searchResults'>
            {searchResults}
          </div>
        </div>
        <img className='searchIcon' src={window.searchDogTrans}/>
      </div>
    )
  }
}
