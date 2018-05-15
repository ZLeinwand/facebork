import React, { Component } from 'react'
import PostIndexItem from './post_index_item'
import isEqual from 'lodash/isequal'

export default class PostIndex extends Component {


  componentDidMount(){
    debugger
    this.props.fetchPosts(this.props.match.params.userId)
  }

  componentWillReceiveProps(newProps){
    // debugger
    if (this.props.news){
      const oldKeys = this.props.posts.map((post) => (post.id))
      const newKeys = newProps.posts.map((post) => (post.id))
      // debugger
      if (!isEqual(oldKeys.sort(), newKeys.sort())) {
        this.props.fetchPosts()
      }
    }else{
      if (this.props.match.params.userId != newProps.match.params.userId){
      // debugger
        this.props.fetchPosts(newProps.match.params.userId)
      }
    }
  }

  render(){
    let posts = "NO POSTS YET"
      if (this.props.posts.length > 0) {
        // debugger
        posts = this.props.posts.map( (post, idx) => (<PostIndexItem post={post} key={idx} poster={this.props.users[post.author_id]} />) )
      }

    return (
      <section className='postIndexContainer'>
        {posts}
      </section>
    )
  }
}
