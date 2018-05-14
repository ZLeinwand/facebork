import React, { Component } from 'react'
import PostIndexItem from './post_index_item'

export default class PostIndex extends Component {


  componentDidMount(){
    // debugger
    this.props.fetchPosts(this.props.match.params.userId)
  }

  componentWillReceiveProps(newProps){
    // debugger
    if (this.props.match.params.userId != newProps.match.params.userId){
      // debugger
      this.props.fetchPosts(newProps.match.params.userId)
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
